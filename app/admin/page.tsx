import type { Metadata } from 'next';
import Link from 'next/link';
import { cookies } from 'next/headers';
import type { ReactNode } from 'react';
import AdminLoginForm from '@/components/AdminLoginForm';
import AdminLogoutButton from '@/components/AdminLogoutButton';
import { consultationServices, consultationStatuses } from '@/lib/consultation-data';
import {
  consultationBookingToDisplay,
  listConsultationBookings,
} from '@/lib/consultation-bookings';
import { formatIndianMobile } from '@/lib/consultation-utils';
import { ADMIN_SESSION_COOKIE } from '@/lib/admin-auth';
import { listFormSubmissions } from '@/lib/form-submissions';

export const metadata: Metadata = {
  title: 'Admin Panel | Sapphire Leadership & Advisor',
  description: 'Manage consultation bookings and website form submissions for Sapphire Leadership & Advisor.',
};

export const dynamic = 'force-dynamic';

type SearchParams = Record<string, string | string[] | undefined>;

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const cookieStore = await cookies();
  const isAuthed = cookieStore.get(ADMIN_SESSION_COOKIE)?.value === 'authenticated';

  if (!isAuthed) {
    return (
      <main className="min-h-screen bg-surface">
        <AdminLoginForm />
      </main>
    );
  }

  const params = await searchParams;
  const search = typeof params.search === 'string' ? params.search : '';
  const status = typeof params.status === 'string' ? params.status : 'all';
  const serviceId = typeof params.serviceId === 'string' ? params.serviceId : 'all';
  const sort = params.sort === 'date_desc' ? 'date_desc' : 'date_asc';

  const bookings = listConsultationBookings({
    search,
    status: status === 'all' ? 'all' : (status as (typeof consultationStatuses)[number]),
    serviceId:
      serviceId === 'all'
        ? 'all'
        : (serviceId as (typeof consultationServices)[number]['id']),
    sort,
  }).map(consultationBookingToDisplay);
  const submissions = listFormSubmissions({ sort: 'newest' });

  return (
    <main className="min-h-screen bg-surface py-12 text-ink">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="flex flex-col gap-6 rounded-[28px] border border-surface-variant/40 bg-white/75 p-6 shadow-soft backdrop-blur-xl md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                Admin panel
              </p>
              <h1 className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl">
                Sapphire Leadership Admin
              </h1>
              <p className="mt-2 max-w-3xl text-[14px] leading-7 text-ink-muted">
                Review consultation bookings and website submissions in one place.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/consultation"
                className="inline-flex rounded-full border border-primary/15 bg-primary/5 px-5 py-3 text-[12px] font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                View public booking page
              </Link>
              <AdminLogoutButton />
            </div>
          </div>

          <section className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-primary">
                Consultation bookings
              </h2>
              <span className="text-[12px] text-ink-muted">{bookings.length} total</span>
            </div>

            <form method="get" className="grid gap-4 rounded-2xl border border-surface-variant/40 bg-white p-4 md:grid-cols-2 xl:grid-cols-4">
              <SearchField
                label="Search"
                name="search"
                defaultValue={search}
                placeholder="Name, email, school, city..."
              />
              <SelectField
                label="Status"
                name="status"
                defaultValue={status}
                options={[
                  ['all', 'All statuses'],
                  ...consultationStatuses.map((item) => [item, item] as const),
                ]}
              />
              <SelectField
                label="Service"
                name="serviceId"
                defaultValue={serviceId}
                options={[
                  ['all', 'All services'],
                  ...consultationServices.map((item) => [item.id, item.title] as const),
                ]}
              />
              <SelectField
                label="Sort by date"
                name="sort"
                defaultValue={sort}
                options={[
                  ['date_asc', 'Oldest first'],
                  ['date_desc', 'Newest first'],
                ]}
              />
              <div className="flex gap-3 xl:col-span-4">
                <button
                  type="submit"
                  className="inline-flex rounded-full bg-primary px-5 py-3 text-[12px] font-semibold text-white shadow-soft"
                >
                  Apply filters
                </button>
                <Link
                  href="/admin"
                  className="inline-flex rounded-full border border-surface-variant px-5 py-3 text-[12px] font-semibold text-primary"
                >
                  Reset
                </Link>
              </div>
            </form>

            <div className="overflow-hidden rounded-[24px] border border-surface-variant/40">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-surface-variant/40 bg-white">
                  <thead className="bg-surface-low">
                    <tr className="text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                      <Th>Date</Th>
                      <Th>Time</Th>
                      <Th>Service</Th>
                      <Th>Contact</Th>
                      <Th>Location</Th>
                      <Th>Mode</Th>
                      <Th>Status</Th>
                      <Th>Actions</Th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-variant/30">
                    {bookings.length ? (
                      bookings.map((booking) => (
                        <tr key={booking.id} className="align-top">
                          <Td>
                            <div className="font-semibold text-primary">{booking.formattedDate}</div>
                          </Td>
                          <Td>
                            <div className="text-[13px] font-semibold text-ink">{booking.time}</div>
                          </Td>
                          <Td>
                            <div className="max-w-[260px]">
                              <div className="font-semibold text-ink">{booking.service}</div>
                              <div className="mt-1 text-[12px] leading-5 text-ink-muted">
                                {booking.designation}
                              </div>
                            </div>
                          </Td>
                          <Td>
                            <div className="max-w-[240px]">
                              <div className="font-semibold text-ink">{booking.name}</div>
                              <div className="mt-1 text-[12px] leading-5 text-ink-muted">
                                {booking.email}
                              </div>
                              <div className="text-[12px] leading-5 text-ink-muted">
                                {formatIndianMobile(booking.phone)}
                              </div>
                              <div className="mt-1 text-[12px] leading-5 text-ink-muted">
                                {booking.organization}
                              </div>
                            </div>
                          </Td>
                          <Td>
                            <div className="text-[13px] text-ink">{booking.city}</div>
                            <div className="text-[12px] text-ink-muted">{booking.state}</div>
                          </Td>
                          <Td>
                            <div className="text-[13px] text-ink">{booking.meetingMode}</div>
                          </Td>
                          <Td>
                            <StatusPill status={booking.status} />
                          </Td>
                          <Td>
                            <div className="flex flex-wrap gap-2">
                              <ActionButton bookingId={booking.id} action="confirm" label="Confirm" />
                              <ActionButton bookingId={booking.id} action="complete" label="Complete" />
                              <ActionButton bookingId={booking.id} action="cancel" label="Cancel" destructive />
                              <ActionButton bookingId={booking.id} action="delete" label="Delete" destructive />
                            </div>
                          </Td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={8} className="px-6 py-12 text-center text-[14px] text-ink-muted">
                          No consultation bookings match the current filters.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-primary">
                Website form submissions
              </h2>
              <span className="text-[12px] text-ink-muted">{submissions.length} total</span>
            </div>

            <div className="grid gap-4">
              {submissions.length ? (
                submissions.map((submission) => (
                  <article
                    key={submission.id}
                    className="rounded-[24px] border border-surface-variant/40 bg-white p-6 shadow-sm"
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                          {submission.formName}
                        </p>
                        <h3 className="mt-2 text-[18px] font-semibold text-primary">
                          {submission.subject}
                        </h3>
                        <p className="mt-1 text-[12px] text-ink-muted">{submission.sourcePage}</p>
                      </div>
                      <div className="text-[12px] text-ink-muted">
                        {new Date(submission.createdAt).toLocaleString('en-IN')}
                      </div>
                    </div>
                    <div className="mt-5 grid gap-3 md:grid-cols-2">
                      {Object.entries(submission.fields).map(([label, value]) => (
                        <div key={label} className="rounded-2xl bg-surface-low p-4">
                          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                            {label}
                          </div>
                          <div className="mt-2 text-[13px] leading-6 text-ink">
                            {String(value || 'Not provided')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>
                ))
              ) : (
                <div className="rounded-[24px] border border-surface-variant/40 bg-white p-6 text-[14px] text-ink-muted">
                  No website form submissions have been recorded yet.
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function Th({ children }: { children: ReactNode }) {
  return <th className="px-4 py-4 font-semibold">{children}</th>;
}

function Td({ children }: { children: ReactNode }) {
  return <td className="px-4 py-5 text-[13px] leading-6">{children}</td>;
}

function SearchField({
  label,
  name,
  defaultValue,
  placeholder,
}: {
  label: string;
  name: string;
  defaultValue: string;
  placeholder: string;
}) {
  return (
    <label className="space-y-2">
      <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
        {label}
      </span>
      <input
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full rounded-full border border-surface-variant bg-white px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  defaultValue,
  options,
}: {
  label: string;
  name: string;
  defaultValue: string;
  options: readonly (readonly [string, string])[];
}) {
  return (
    <label className="space-y-2">
      <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
        {label}
      </span>
      <select
        name={name}
        defaultValue={defaultValue}
        className="w-full rounded-full border border-surface-variant bg-white px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-primary/20"
      >
        {options.map(([value, optionLabel]) => (
          <option key={value} value={value}>
            {optionLabel}
          </option>
        ))}
      </select>
    </label>
  );
}

function StatusPill({ status }: { status: string }) {
  const variant =
    status === 'Confirmed'
      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
      : status === 'Completed'
        ? 'bg-sky-50 text-sky-700 border-sky-200'
        : status === 'Cancelled'
          ? 'bg-rose-50 text-rose-700 border-rose-200'
          : 'bg-amber-50 text-amber-700 border-amber-200';

  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold ${variant}`}>
      {status}
    </span>
  );
}

function ActionButton({
  bookingId,
  action,
  label,
  destructive = false,
}: {
  bookingId: number;
  action: 'confirm' | 'complete' | 'cancel' | 'delete';
  label: string;
  destructive?: boolean;
}) {
  return (
    <form method="post" action={`/api/admin/bookings/${bookingId}`}>
      <input type="hidden" name="action" value={action} />
      <button
        type="submit"
        className={[
          'rounded-full px-3 py-2 text-[11px] font-semibold transition-colors',
          destructive
            ? 'border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100'
            : 'border border-primary/15 bg-primary/5 text-primary hover:bg-primary/10',
        ].join(' ')}
      >
        {label}
      </button>
    </form>
  );
}
