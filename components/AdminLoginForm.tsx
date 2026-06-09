'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('admin');
  const [password, setPassword] = useState('admin');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = (await response.json()) as { ok: true } | { ok: false; error?: string };
      if (!response.ok || !result.ok) {
        throw new Error(result.ok ? 'Unable to sign in.' : result.error || 'Unable to sign in.');
      }

      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to sign in.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md items-center px-5 py-16 md:px-10">
      <div className="glass w-full rounded-[28px] p-6 md:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
          Admin Access
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] text-primary">
          Sign in to Sapphire Admin
        </h1>
        <p className="mt-3 text-[13px] leading-7 text-ink-muted">
          Use the admin email and password to review consultation bookings and website submissions.
        </p>

        <form className="mt-8 space-y-4" onSubmit={onSubmit}>
          <Field label="Email" value={email} onChange={setEmail} type="text" />
          <Field label="Password" value={password} onChange={setPassword} type="password" />
          {error ? <div className="text-[13px] text-rose-700">{error}</div> : null}
          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-[13px] font-semibold text-white shadow-soft disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? 'Signing in...' : 'Enter Admin Panel'}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type: 'text' | 'password';
}) {
  return (
    <label className="block space-y-2">
      <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-full border border-surface-variant bg-white px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}
