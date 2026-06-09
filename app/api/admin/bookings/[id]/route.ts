import { NextResponse } from 'next/server';
import { z } from 'zod';
import {
  deleteConsultationBooking,
  updateConsultationBookingStatus,
} from '@/lib/consultation-bookings';
import { consultationStatuses } from '@/lib/consultation-data';

export const runtime = 'nodejs';

const actionSchema = z.enum(['confirm', 'complete', 'cancel', 'delete']);

function getRedirectTarget(request: Request) {
  return request.headers.get('referer') || '/admin/bookings';
}

function actionToStatus(action: z.infer<typeof actionSchema>) {
  switch (action) {
    case 'confirm':
      return 'Confirmed';
    case 'complete':
      return 'Completed';
    case 'cancel':
      return 'Cancelled';
    default:
      return null;
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id: idParam } = await params;
  const id = Number(idParam);
  if (!Number.isFinite(id)) {
    return NextResponse.json({ ok: false, error: 'Invalid booking id.' }, { status: 400 });
  }

  const formData = await request.formData();
  const actionResult = actionSchema.safeParse(formData.get('action'));

  if (!actionResult.success) {
    return NextResponse.json({ ok: false, error: 'Invalid booking action.' }, { status: 400 });
  }

  if (actionResult.data === 'delete') {
    deleteConsultationBooking(id);
  } else {
    const status = actionToStatus(actionResult.data);
    if (!status || !consultationStatuses.includes(status)) {
      return NextResponse.json({ ok: false, error: 'Invalid booking status.' }, { status: 400 });
    }
    updateConsultationBookingStatus(id, status);
  }

  return NextResponse.redirect(getRedirectTarget(request), 303);
}

