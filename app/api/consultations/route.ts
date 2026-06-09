import { NextResponse } from 'next/server';
import { z } from 'zod';
import {
  createConsultationBooking,
  getBookedTimesForDate,
} from '@/lib/consultation-bookings';
import {
  consultationMeetingModes,
  consultationServiceIds,
  consultationTimeSlots,
} from '@/lib/consultation-data';
import {
  getIndiaTodayDateString,
  isPastInIndia,
  isSundayInIndia,
  normalizeIndianPhoneNumber,
} from '@/lib/consultation-utils';
import { sendConsultationBookingEmails } from '@/lib/email';

export const runtime = 'nodejs';

const bookingSchema = z
  .object({
    name: z.string().trim().min(2),
    organization: z.string().trim().min(2),
    designation: z.string().trim().min(2),
    email: z.string().trim().email(),
    phone: z
      .string()
      .trim()
      .transform(normalizeIndianPhoneNumber)
      .refine((value) => /^[6-9]\d{9}$/.test(value), 'Please enter a valid Indian mobile number.'),
    city: z.string().trim().min(2),
    state: z.string().trim().min(2),
    serviceId: z.enum(consultationServiceIds),
    meetingMode: z.enum(consultationMeetingModes),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    time: z.enum(consultationTimeSlots),
    message: z.string().trim().min(10),
  })
  .superRefine((value, ctx) => {
    if (isPastInIndia(value.date)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['date'],
        message: 'Please choose today or a future date.',
      });
    }

    if (isSundayInIndia(value.date)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['date'],
        message: 'Sunday bookings are not available.',
      });
    }
  });

export async function GET(request: Request) {
  const url = new URL(request.url);
  const date = url.searchParams.get('date');

  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json(
      { ok: false, error: 'A valid date is required.' },
      { status: 400 },
    );
  }

  if (isPastInIndia(date, new Date())) {
    return NextResponse.json(
      { ok: false, error: 'Availability can only be requested for today or future dates.' },
      { status: 400 },
    );
  }

  const bookedSlots = getBookedTimesForDate(date);
  const availableSlots = consultationTimeSlots.filter(
    (slot) => !bookedSlots.includes(slot),
  );

  return NextResponse.json({
    ok: true,
    date,
    bookedSlots,
    availableSlots,
    today: getIndiaTodayDateString(),
  });
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const payload = bookingSchema.parse(json);
    const booking = createConsultationBooking(payload);

    try {
      await sendConsultationBookingEmails(booking);
    } catch (emailError) {
      console.error('Consultation booking email failure', emailError);
      return NextResponse.json(
        {
          ok: true,
          bookingId: booking.id,
          warning:
            'Your consultation was saved, but the notification email could not be sent immediately.',
        },
        { status: 201 },
      );
    }

    return NextResponse.json(
      {
        ok: true,
        bookingId: booking.id,
      },
      { status: 201 },
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unable to process booking.';
    const status =
      error instanceof z.ZodError
        ? 400
        : message.includes('no longer available')
          ? 409
          : 500;

    return NextResponse.json(
      {
        ok: false,
        error: message,
      },
      { status },
    );
  }
}
