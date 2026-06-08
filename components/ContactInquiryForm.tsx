'use client';

import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'submitting' | 'submitted' | 'error';

export default function ContactInquiryForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formName: 'Contact Inquiry',
          sourcePage: '/contact',
          subject: `${String(data.get('fullName') || 'New enquiry')} - Contact form`,
          fields: {
            'Full Name': String(data.get('fullName') || ''),
            Organization: String(data.get('organization') || ''),
            Email: String(data.get('email') || ''),
            Message: String(data.get('message') || ''),
          },
        }),
      });

      const result = (await response.json()) as
        | { ok: true }
        | { ok: false; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.ok ? 'Something went wrong.' : result.error || 'Something went wrong.');
      }

      form.reset();
      setStatus('submitted');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong.');
    }
  }

  return (
    <div className="glass rounded-2xl p-9 md:p-12">
      <span className="inline-flex rounded-full bg-gold/15 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
        Send an inquiry
      </span>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.02em] text-primary">
        Tell us what you need.
      </h2>
      <p className="mt-4 text-[14px] leading-7 text-ink-muted">
        Fill out the form and our team will reply with the right next step for your school or organization.
      </p>

      {status === 'submitted' ? (
        <div className="mt-8 rounded-xl border border-surface-variant/40 bg-white/70 p-5 text-[13px] text-ink-muted">
          <div className="font-semibold text-primary">Inquiry received.</div>
          <div className="mt-1">We&apos;ve sent your inquiry to our advisory team and will follow up shortly.</div>
          <button
            type="button"
            className="mt-4 rounded-lg border border-surface-variant bg-white px-4 py-2 text-[12px] font-semibold text-primary"
            onClick={() => setStatus('idle')}
          >
            Submit another
          </button>
        </div>
      ) : (
        <form className="mt-8 space-y-5" onSubmit={onSubmit}>
          <Input name="fullName" label="Full Name" placeholder="e.g. Alistair Sterling" required />
          <Input name="organization" label="Organization" placeholder="e.g. Global Enterprises Inc." required />
          <Input name="email" label="Email Address" placeholder="a.sterling@organization.com" type="email" required />
          <div className="space-y-2">
            <label className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
              Message
            </label>
            <textarea
              name="message"
              className="min-h-[120px] w-full rounded-md border border-surface-variant bg-white/70 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="How can our advisory team assist you?"
              required
            />
          </div>
          {status === 'error' ? (
            <div className="text-[13px] text-red-600">{errorMessage}</div>
          ) : null}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary py-3.5 text-[13px] font-semibold text-white hover:bg-primary-2 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'submitting' ? 'Sending...' : 'Confirm Inquiry'}
          </button>
        </form>
      )}
    </div>
  );
}

function Input({
  label,
  placeholder,
  type = 'text',
  name,
  required,
}: {
  label: string;
  placeholder: string;
  type?: string;
  name: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-md border border-surface-variant bg-white/70 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
