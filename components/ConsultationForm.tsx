'use client';

import { z } from 'zod';
import { useMemo, useState } from 'react';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email.'),
  organization: z.string().min(2, 'Please enter your organization.'),
  serviceInterest: z.string().min(1, 'Please select an interest.'),
  message: z.string().min(10, 'Please add a short overview (10+ characters).'),
});

type FormState = z.infer<typeof schema>;

const interests = [
  'CBSE',
  'ICSE / ISC',
  'IB / International',
  'State Board',
  'Undecided',
];

export default function ConsultationForm() {
  const [values, setValues] = useState<FormState>({
    name: '',
    email: '',
    organization: '',
    serviceInterest: interests[0]!,
    message: '',
  });
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    name: false,
    email: false,
    organization: false,
    serviceInterest: false,
    message: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const parsed = schema.safeParse(values);
    if (parsed.success) return {};
    const out: Partial<Record<keyof FormState, string>> = {};
    for (const issue of parsed.error.issues) {
      const k = issue.path[0] as keyof FormState | undefined;
      if (!k) continue;
      out[k] = issue.message;
    }
    return out;
  }, [values]);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function markTouched<K extends keyof FormState>(key: K) {
    setTouched((t) => ({ ...t, [key]: true }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      setTouched({
        name: true,
        email: true,
        organization: true,
        serviceInterest: true,
        message: true,
      });
      return;
    }
    setSubmitted(true);
  }

  return (
    <div id="consultation" className="glass rounded-lg p-7 md:p-10">
      <h3 className="[font-family:var(--font-hanken)] text-lg font-semibold text-primary">
        Book a Consultation
      </h3>
      <p className="mt-2 text-[13px] text-ink-muted">
        Discuss your school project with our lead advisors.
      </p>

      {submitted ? (
        <div className="mt-8 rounded-xl border border-surface-variant/40 bg-white/70 p-5 text-[13px] text-ink-muted">
          <div className="font-semibold text-primary">Inquiry received.</div>
          <div className="mt-1">
            We&apos;ll reach out to <span className="font-medium">{values.email}</span>{' '}
            shortly.
          </div>
          <button
            type="button"
            className="mt-4 rounded-full border border-surface-variant bg-white px-4 py-2 text-[12px] font-semibold text-primary"
            onClick={() => {
              setSubmitted(false);
              setValues({
                name: '',
                email: '',
                organization: '',
                serviceInterest: interests[0]!,
                message: '',
              });
              setTouched({
                name: false,
                email: false,
                organization: false,
                serviceInterest: false,
                message: false,
              });
            }}
          >
            Submit another
          </button>
        </div>
      ) : (
        <form className="mt-7 space-y-5" onSubmit={onSubmit} noValidate>
          <div className="grid gap-4 md:grid-cols-2">
            <Field
              label="Name"
              value={values.name}
              onChange={(v) => set('name', v)}
              onBlur={() => markTouched('name')}
              placeholder="Your Name"
              error={touched.name ? errors.name : undefined}
            />
            <Field
              label="Organization"
              value={values.organization}
              onChange={(v) => set('organization', v)}
              onBlur={() => markTouched('organization')}
              placeholder="Proposed/Current"
              error={touched.organization ? errors.organization : undefined}
            />
          </div>

          <Field
            label="Email"
            value={values.email}
            onChange={(v) => set('email', v)}
            onBlur={() => markTouched('email')}
            placeholder="you@domain.com"
            error={touched.email ? errors.email : undefined}
            inputMode="email"
          />

          <div className="space-y-2">
            <Label>Service Interest</Label>
            <select
              className="w-full rounded-full border border-surface-variant bg-white/60 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-primary/20"
              value={values.serviceInterest}
              onChange={(e) => set('serviceInterest', e.target.value)}
              onBlur={() => markTouched('serviceInterest')}
              aria-invalid={Boolean(touched.serviceInterest && errors.serviceInterest)}
            >
              {interests.map((it) => (
                <option key={it} value={it}>
                  {it}
                </option>
              ))}
            </select>
            {touched.serviceInterest && errors.serviceInterest ? (
              <ErrorText>{errors.serviceInterest}</ErrorText>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label>Message</Label>
            <textarea
              className="min-h-[110px] w-full resize-none rounded-xl border border-surface-variant bg-white/60 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Briefly describe your vision..."
              value={values.message}
              onChange={(e) => set('message', e.target.value)}
              onBlur={() => markTouched('message')}
              aria-invalid={Boolean(touched.message && errors.message)}
            />
            {touched.message && errors.message ? (
              <ErrorText>{errors.message}</ErrorText>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-primary py-3.5 text-[13px] font-semibold text-white shadow-soft hover:shadow-lift"
          >
            Submit Inquiry
          </button>
        </form>
      )}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
      {children}
    </div>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <div className="text-[12px] text-red-600">{children}</div>;
}

function Field({
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  placeholder: string;
  error?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <input
        className="w-full rounded-full border border-surface-variant bg-white/60 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-primary/20"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        inputMode={inputMode}
        aria-invalid={Boolean(error)}
      />
      {error ? <ErrorText>{error}</ErrorText> : null}
    </div>
  );
}

