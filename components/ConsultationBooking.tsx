'use client';

import Link from 'next/link';
import {
  useEffect,
  useMemo,
  useState,
  type FormEvent,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';
import { z } from 'zod';
import {
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Globe2,
  MapPin,
  MessageSquareText,
  School2,
  Sparkles,
  Video,
} from 'lucide-react';
import {
  consultationMeetingModes,
  consultationServiceIds,
  consultationServices,
  consultationTimeSlots,
  type ConsultationMeetingMode,
  type ConsultationService,
} from '@/lib/consultation-data';
import {
  formatIndiaDate,
  getIndiaTodayDateString,
  isPastInIndia,
  isSundayInIndia,
  normalizeIndianPhoneNumber,
} from '@/lib/consultation-utils';

type BookingFormValues = {
  name: string;
  organization: string;
  designation: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  meetingMode: ConsultationMeetingMode;
  message: string;
};

const initialFormValues: BookingFormValues = {
  name: '',
  organization: '',
  designation: '',
  email: '',
  phone: '',
  city: '',
  state: '',
  meetingMode: consultationMeetingModes[0],
  message: '',
};

const bookingSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.'),
  organization: z.string().trim().min(2, 'Please enter your school or organization.'),
  designation: z.string().trim().min(2, 'Please enter your designation.'),
  email: z.string().trim().email('Please enter a valid email address.'),
  phone: z
    .string()
    .trim()
    .transform(normalizeIndianPhoneNumber)
    .refine(
      (value) => /^[6-9]\d{9}$/.test(value),
      'Please enter a valid Indian mobile number.',
    ),
  city: z.string().trim().min(2, 'Please enter your city.'),
  state: z.string().trim().min(2, 'Please enter your state.'),
  serviceId: z.enum(
    consultationServiceIds,
    {
      required_error: 'Please select a service.',
    },
  ),
  meetingMode: z.enum(consultationMeetingModes, {
    required_error: 'Please select a meeting mode.',
  }),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Please select a valid date.'),
  time: z.enum(consultationTimeSlots, {
    required_error: 'Please select a time slot.',
  }),
  message: z.string().trim().min(10, 'Please share a little more detail.'),
});

type AvailabilityResponse =
  | {
      ok: true;
      bookedSlots: string[];
      availableSlots: string[];
      today: string;
    }
  | {
      ok: false;
      error: string;
    };

const steps = ['Service', 'Calendar', 'Time', 'Details'] as const;

export default function ConsultationBooking() {
  const today = useMemo(() => getIndiaTodayDateString(), []);
  const initialCalendar = useMemo(() => parseYearMonth(today), [today]);

  const [step, setStep] = useState(1);
  const [selectedServiceId, setSelectedServiceId] = useState<ConsultationService['id'] | ''>('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState<'' | (typeof consultationTimeSlots)[number]>('');
  const [calendarMonth, setCalendarMonth] = useState(initialCalendar);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [availabilityLoading, setAvailabilityLoading] = useState(false);
  const [availabilityError, setAvailabilityError] = useState('');
  const [formValues, setFormValues] = useState(initialFormValues);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState('');
  const [submitWarning, setSubmitWarning] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const selectedService =
    consultationServices.find((service) => service.id === selectedServiceId) || null;
  const availableTimeSlots = useMemo(
    () => consultationTimeSlots.filter((slot) => !bookedSlots.includes(slot)),
    [bookedSlots],
  );
  const summaryItems = [
    {
      label: 'Selected Service',
      value: selectedService?.title || 'Not selected',
    },
    {
      label: 'Preferred Date',
      value: selectedDate ? formatIndiaDate(selectedDate) : 'Not selected',
    },
    {
      label: 'Preferred Time',
      value: selectedTime || 'Not selected',
    },
    {
      label: 'Meeting Mode',
      value: formValues.meetingMode || 'Not selected',
    },
  ];
  const contactSummary = [
    formValues.name || 'Name not entered',
    formValues.organization || 'Organization not entered',
    formValues.designation || 'Designation not entered',
    formValues.email || 'Email not entered',
    formValues.phone || 'Phone not entered',
    [formValues.city, formValues.state].filter(Boolean).join(', ') || 'City and state not entered',
  ];

  useEffect(() => {
    if (!selectedDate) {
      setBookedSlots([]);
      setAvailabilityError('');
      setAvailabilityLoading(false);
      return;
    }

    const controller = new AbortController();

    async function loadAvailability() {
      setAvailabilityLoading(true);
      setAvailabilityError('');

      try {
        const response = await fetch(`/api/consultations?date=${selectedDate}`, {
          signal: controller.signal,
        });

        const data = (await response.json()) as AvailabilityResponse;
        if (!response.ok || !data.ok) {
          throw new Error(data.ok ? 'Unable to load availability.' : data.error);
        }

        setBookedSlots(data.bookedSlots);
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }
        setAvailabilityError(
          error instanceof Error ? error.message : 'Unable to load availability.',
        );
        setBookedSlots([]);
      } finally {
        setAvailabilityLoading(false);
      }
    }

    loadAvailability();

    return () => controller.abort();
  }, [selectedDate]);

  useEffect(() => {
    if (selectedTime && !availableTimeSlots.includes(selectedTime)) {
      setSelectedTime('');
    }
  }, [availableTimeSlots, selectedTime]);

  function updateFormField<K extends keyof BookingFormValues>(
    key: K,
    value: BookingFormValues[K],
  ) {
    setFormValues((current) => ({ ...current, [key]: value }));
  }

  function goToDateStep(serviceId: ConsultationService['id']) {
    setSelectedServiceId(serviceId);
    setFieldErrors({});
    setSubmitted(false);
    setStep(2);
  }

  function chooseDate(date: string) {
    setSelectedDate(date);
    setFieldErrors({});
    setSubmitted(false);
    setStep(3);
  }

  function chooseTime(time: (typeof consultationTimeSlots)[number]) {
    setSelectedTime(time);
    setFieldErrors({});
    setSubmitted(false);
    setStep(4);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError('');
    setSubmitWarning('');

    const payload = {
      ...formValues,
      serviceId: selectedServiceId,
      date: selectedDate,
      time: selectedTime,
    };

    const parsed = bookingSchema.safeParse(payload);
    if (!parsed.success) {
      const nextErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === 'string' && !nextErrors[key]) {
          nextErrors[key] = issue.message;
        }
      }
      setFieldErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/consultations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsed.data),
      });

      const result = (await response.json()) as
        | { ok: true; bookingId: number; warning?: string }
        | { ok: false; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.ok ? 'Unable to submit your booking.' : result.error || 'Unable to submit your booking.');
      }

      if ('warning' in result && result.warning) {
        setSubmitWarning(result.warning);
      }

      setSubmitted(true);
      setStep(1);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to submit your booking.');
    } finally {
      setIsSubmitting(false);
    }
  }

  function resetBooking() {
    setStep(1);
    setSelectedServiceId('');
    setSelectedDate('');
    setSelectedTime('');
    setCalendarMonth(initialCalendar);
    setBookedSlots([]);
    setAvailabilityError('');
    setAvailabilityLoading(false);
    setFormValues(initialFormValues);
    setFieldErrors({});
    setSubmitError('');
    setSubmitWarning('');
    setIsSubmitting(false);
    setSubmitted(false);
  }

  return (
    <div className="grid w-full gap-8 xl:grid-cols-[1.25fr_0.75fr]">
      <div className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4 px-2 md:px-4 lg:px-8">
          {steps.map((label, index) => {
            const n = index + 1;
            const active = step === n;
            const completed = step > n;
            return (
              <button
                key={label}
                type="button"
                onClick={() => {
                  if (n <= 1 || selectedServiceId || n <= step) {
                    setStep(n);
                  }
                }}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className={[
                    'flex h-10 w-10 items-center justify-center rounded-full font-bold transition-all',
                    completed || active
                      ? 'bg-primary text-white'
                      : 'bg-surface-container text-ink-muted',
                  ].join(' ')}
                >
                  {completed ? <Check size={16} /> : n}
                </div>
                <span
                  className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${active ? 'text-primary' : 'text-ink-muted'}`}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>

        {submitted ? (
          <section className="glass rounded-[28px] p-6 md:p-10">
            <span className="inline-flex rounded-full bg-gold/15 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              Consultation Request Submitted
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] text-primary">
              Thank you for reaching out.
            </h2>
            <p className="mt-4 max-w-2xl text-[14px] leading-7 text-ink-muted">
              Our team will review your request and contact you soon to confirm the consultation details.
            </p>
            {submitWarning ? (
              <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-[13px] text-amber-800">
                {submitWarning}
              </div>
            ) : null}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-surface-variant px-6 py-3 text-[12px] font-semibold text-primary transition-colors hover:bg-white"
              >
                Return Home
              </Link>
              <button
                type="button"
                onClick={resetBooking}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-[12px] font-semibold text-white shadow-soft"
              >
                Book Another Consultation
              </button>
            </div>
          </section>
        ) : null}

        <section className={step === 1 && !submitted ? 'block' : 'hidden'}>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-primary">
            Select your service
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {consultationServices.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length]!;
              const selected = selectedServiceId === service.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => goToDateStep(service.id)}
                  className={[
                    'glass rounded-[24px] border-2 p-6 text-left transition-all hover:-translate-y-0.5 hover:border-primary',
                    selected ? 'border-primary bg-primary/5' : 'border-transparent',
                  ].join(' ')}
                >
                  <Icon className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-6 text-ink-muted">
                    {service.description}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        <section className={step === 2 ? 'block' : 'hidden'}>
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-primary">
                Pick a date
              </h2>
              <p className="mt-2 text-[13px] text-ink-muted">
                Monday to Saturday availability in Indian Standard Time. Sundays are disabled.
              </p>
            </div>
            <span className="text-[13px] font-semibold text-ink-muted">
              {calendarLabel(calendarMonth.year, calendarMonth.month)}
            </span>
          </div>

          <div className="glass rounded-[24px] p-5 md:p-8">
            <div className="mb-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setCalendarMonth(previousMonth(calendarMonth, today))}
                disabled={isPreviousMonthDisabled(calendarMonth, today)}
                className="inline-flex items-center gap-2 rounded-full border border-surface-variant px-4 py-2 text-[12px] font-semibold text-primary disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft size={14} />
                Previous
              </button>
              <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
                Indian timezone
              </div>
              <button
                type="button"
                onClick={() => setCalendarMonth(nextMonth(calendarMonth))}
                className="inline-flex items-center gap-2 rounded-full border border-surface-variant px-4 py-2 text-[12px] font-semibold text-primary"
              >
                Next
                <ChevronRight size={14} />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-7 gap-2">
              {buildCalendarGrid(calendarMonth.year, calendarMonth.month).map((entry, index) => {
                if (!entry) {
                  return <div key={index} className="h-12 rounded-full" />;
                }

                const isDisabled = isPastInIndia(entry.dateString, new Date()) || entry.isSunday;
                const selected = selectedDate === entry.dateString;
                const isToday = today === entry.dateString;

                return (
                  <button
                    key={entry.dateString}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => chooseDate(entry.dateString)}
                    className={[
                      'flex h-12 items-center justify-center rounded-full text-[13px] font-medium transition-colors',
                      isDisabled
                        ? 'cursor-not-allowed text-surface-dim opacity-40'
                        : 'hover:bg-secondary-container',
                      selected ? 'bg-primary text-white ring-4 ring-primary/15' : '',
                      isToday && !selected ? 'border border-primary/20 text-primary' : '',
                    ].join(' ')}
                  >
                    {entry.day}
                  </button>
                );
              })}
            </div>
            <div className="mt-5 flex flex-wrap gap-3 text-[12px] text-ink-muted">
              <LegendDot label="Today" className="border border-primary/20 bg-white text-primary" />
              <LegendDot label="Selected" className="bg-primary text-white" />
              <LegendDot label="Unavailable" className="bg-surface-low text-ink-muted" />
            </div>
          </div>

          {availabilityLoading ? (
            <div className="mt-4 text-[13px] text-ink-muted">Checking available time slots...</div>
          ) : null}
          {availabilityError ? (
            <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-[13px] text-rose-700">
              {availabilityError}
            </div>
          ) : null}

          <div className="mt-8 flex justify-between">
            <button
              onClick={() => setStep(1)}
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-[11px] font-semibold text-primary"
            >
              <ChevronLeft size={14} />
              Back
            </button>
            <button
              onClick={() => selectedDate && setStep(3)}
              type="button"
              disabled={!selectedDate}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[11px] font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              Continue
              <ChevronRight size={14} />
            </button>
          </div>
        </section>

        <section className={step === 3 ? 'block' : 'hidden'}>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-primary">
            Choose a time
          </h2>
          <p className="mt-2 text-[13px] text-ink-muted">
            Only available slots are shown. We will keep this architecture ready for future blocking rules.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {availableTimeSlots.length ? (
              availableTimeSlots.map((slot) => {
                const selected = selectedTime === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => chooseTime(slot)}
                    className={[
                      'glass rounded-[22px] border-2 p-5 text-left transition-all hover:border-primary',
                      selected ? 'border-primary bg-primary/5' : 'border-transparent',
                    ].join(' ')}
                  >
                    <Clock3 className="h-7 w-7 text-primary" />
                    <div className="mt-4 font-display text-xl font-semibold text-ink">
                      {slot}
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="glass rounded-[24px] p-6 text-[13px] text-ink-muted md:col-span-2 xl:col-span-4">
                No available slots for the selected date. Please pick another day.
              </div>
            )}
          </div>

          <div className="mt-8 flex justify-between">
            <button
              onClick={() => setStep(2)}
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-[11px] font-semibold text-primary"
            >
              <ChevronLeft size={14} />
              Back
            </button>
            <button
              onClick={() => selectedTime && setStep(4)}
              type="button"
              disabled={!selectedTime}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[11px] font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              Continue
              <ChevronRight size={14} />
            </button>
          </div>
        </section>

        <section className={step === 4 ? 'block' : 'hidden'}>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-primary">
            Tell us about your consultation
          </h2>
          <form className="glass mt-6 space-y-6 rounded-[28px] p-6 md:p-8" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <Field
                name="name"
                label="Full Name"
                placeholder="Dr. Sunil Kumawat"
                value={formValues.name}
                onChange={(value) => updateFormField('name', value)}
                error={fieldErrors.name}
              />
              <Field
                name="organization"
                label="School / Organization"
                placeholder="Sapphire International School"
                value={formValues.organization}
                onChange={(value) => updateFormField('organization', value)}
                error={fieldErrors.organization}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field
                name="designation"
                label="Designation"
                placeholder="Principal / Founder / Coordinator"
                value={formValues.designation}
                onChange={(value) => updateFormField('designation', value)}
                error={fieldErrors.designation}
              />
              <Field
                name="email"
                label="Email Address"
                placeholder="name@school.org"
                value={formValues.email}
                onChange={(value) => updateFormField('email', value)}
                error={fieldErrors.email}
                type="email"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field
                name="phone"
                label="Mobile Number"
                placeholder="9876543210"
                value={formValues.phone}
                onChange={(value) => updateFormField('phone', value)}
                error={fieldErrors.phone}
                type="tel"
                inputMode="numeric"
              />
              <Field
                name="city"
                label="City"
                placeholder="Jaipur"
                value={formValues.city}
                onChange={(value) => updateFormField('city', value)}
                error={fieldErrors.city}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field
                name="state"
                label="State"
                placeholder="Rajasthan"
                value={formValues.state}
                onChange={(value) => updateFormField('state', value)}
                error={fieldErrors.state}
              />
              <div className="space-y-2">
                <Label>Preferred Meeting Mode</Label>
                <select
                  value={formValues.meetingMode}
                  onChange={(event) =>
                    updateFormField('meetingMode', event.target.value as ConsultationMeetingMode)
                  }
                  className="w-full rounded-full border border-surface-variant bg-white/70 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {consultationMeetingModes.map((mode) => (
                    <option key={mode} value={mode}>
                      {mode}
                    </option>
                  ))}
                </select>
                {fieldErrors.meetingMode ? <ErrorText>{fieldErrors.meetingMode}</ErrorText> : null}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Message / Consultation Requirement</Label>
              <textarea
                value={formValues.message}
                onChange={(event) => updateFormField('message', event.target.value)}
                className="min-h-[130px] w-full resize-none rounded-[24px] border border-surface-variant bg-white/70 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Share your goals, concerns, or the kind of support you need..."
              />
              {fieldErrors.message ? <ErrorText>{fieldErrors.message}</ErrorText> : null}
            </div>

            {submitError ? (
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-[13px] text-rose-700">
                {submitError}
              </div>
            ) : null}

            <div className="flex justify-between gap-3">
              <button
                onClick={() => setStep(3)}
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-[11px] font-semibold text-primary"
              >
                <ChevronLeft size={14} />
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-primary px-8 py-4 text-[13px] font-semibold text-white shadow-soft disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Submitting...' : 'Book Free Consultation'}
              </button>
            </div>
          </form>
        </section>
      </div>

      <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
        <div className="glass rounded-[28px] border-t-4 border-gold p-6 shadow-soft">
          <div className="flex items-center gap-3">
            <CalendarDays className="h-5 w-5 text-primary" />
            <h3 className="font-display text-xl font-semibold text-primary">
              Consultation Summary
            </h3>
          </div>
          <div className="mt-6 space-y-5">
            {summaryItems.map((item) => (
              <SummaryRow key={item.label} label={item.label} value={item.value} />
            ))}
          </div>
        </div>

      </aside>
    </div>
  );
}

function Field({
  label,
  placeholder,
  name,
  value,
  onChange,
  error,
  type = 'text',
  inputMode,
}: {
  label: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  inputMode?: InputHTMLAttributes<HTMLInputElement>['inputMode'];
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        inputMode={inputMode}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-full border border-surface-variant bg-white/70 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-primary/20"
        placeholder={placeholder}
      />
      {error ? <ErrorText>{error}</ErrorText> : null}
    </div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
      {children}
    </div>
  );
}

function ErrorText({ children }: { children: ReactNode }) {
  return <div className="text-[12px] text-red-600">{children}</div>;
}

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[22px] border border-surface-variant/50 bg-white/70 p-4">
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
        {label}
      </div>
      <div className="mt-2 text-[14px] font-medium text-ink">{value}</div>
    </div>
  );
}

function LegendDot({
  label,
  className,
}: {
  label: string;
  className: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 ${className}`}>
      {label}
    </span>
  );
}

const serviceIcons = [School2, Sparkles, Globe2, Video, MessageSquareText, MapPin];

function parseYearMonth(dateString: string) {
  const [year, month] = dateString.split('-').map(Number);
  if (!year || !month) {
    const fallback = new Date();
    return { year: fallback.getFullYear(), month: fallback.getMonth() };
  }
  return { year, month: month - 1 };
}

function calendarLabel(year: number, monthIndex: number) {
  return new Intl.DateTimeFormat('en-IN', {
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  }).format(new Date(Date.UTC(year, monthIndex, 1, 12)));
}

function nextMonth(current: { year: number; month: number }) {
  const next = new Date(Date.UTC(current.year, current.month + 1, 1, 12));
  return { year: next.getUTCFullYear(), month: next.getUTCMonth() };
}

function previousMonth(current: { year: number; month: number }, today: string) {
  const candidate = new Date(Date.UTC(current.year, current.month - 1, 1, 12));
  const todayParts = parseYearMonth(today);
  const minMonth = new Date(Date.UTC(todayParts.year, todayParts.month, 1, 12));
  if (candidate < minMonth) return current;
  return { year: candidate.getUTCFullYear(), month: candidate.getUTCMonth() };
}

function isPreviousMonthDisabled(current: { year: number; month: number }, today: string) {
  const todayParts = parseYearMonth(today);
  return current.year === todayParts.year && current.month === todayParts.month;
}

function buildCalendarGrid(year: number, monthIndex: number) {
  const firstOfMonth = new Date(Date.UTC(year, monthIndex, 1, 12));
  const daysInMonth = new Date(Date.UTC(year, monthIndex + 1, 0, 12)).getUTCDate();
  const offset = firstOfMonth.getUTCDay();
  const cells: Array<{ day: number; dateString: string; isSunday: boolean } | null> = [];

  for (let i = 0; i < offset; i += 1) {
    cells.push(null);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const dateString = toDateString(year, monthIndex, day);
    cells.push({
      day,
      dateString,
      isSunday: isSundayInIndia(dateString),
    });
  }

  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  return cells;
}

function toDateString(year: number, monthIndex: number, day: number) {
  const month = String(monthIndex + 1).padStart(2, '0');
  const formattedDay = String(day).padStart(2, '0');
  return `${year}-${month}-${formattedDay}`;
}
