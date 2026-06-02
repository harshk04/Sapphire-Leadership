'use client';

import { useMemo, useState } from 'react';
import { CalendarDays, Check, ChevronLeft, ChevronRight, Globe2, School2, Sparkles, Video } from 'lucide-react';

const services = [
  {
    title: 'School Setup',
    duration: '90-Minute Strategic Roadmap',
    desc: 'Comprehensive planning for new institutional foundations and operational excellence.',
    icon: School2,
  },
  {
    title: 'Teacher Training',
    duration: '60-Minute Pedagogical Audit',
    desc: 'Empowering educators with elite instructional techniques and classroom management.',
    icon: Sparkles,
  },
  {
    title: 'Leadership Advisory',
    duration: '60-Minute Executive Session',
    desc: 'High-level strategic counsel for directors, principals, and administrative boards.',
    icon: Globe2,
  },
  {
    title: 'Student Success',
    duration: '45-Minute Impact Assessment',
    desc: 'Developing programs that enhance engagement, well-being, and academic outcomes.',
    icon: Video,
  },
];

const days = ['29', '30', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];

const platforms = ['Google Meet', 'Zoom', 'Microsoft Teams'];

export default function ConsultationBooking() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(services[0]!);
  const [day, setDay] = useState('7');
  const [platform, setPlatform] = useState(platforms[0]!);
  const [submitted, setSubmitted] = useState(false);

  const summaryDate = useMemo(() => `October ${day}, 2024`, [day]);

  return (
    <div className="grid w-full gap-8 xl:grid-cols-[1.25fr_0.75fr]">
      <div className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4 px-2 md:px-4 lg:px-8">
          {['Service', 'Calendar', 'Meeting', 'Details'].map((label, index) => {
            const n = index + 1;
            const active = step === n;
            const completed = step > n;
            return (
              <button
                key={label}
                type="button"
                onClick={() => setStep(n)}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className={[
                    'flex h-10 w-10 items-center justify-center rounded-full font-bold transition-all',
                    completed || active ? 'bg-primary text-white' : 'bg-surface-container text-ink-muted',
                  ].join(' ')}
                >
                  {completed ? <Check size={16} /> : n}
                </div>
                <span className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${active ? 'text-primary' : 'text-ink-muted'}`}>
                  {label}
                </span>
              </button>
            );
          })}
        </div>

        <section className={step === 1 ? 'block' : 'hidden'}>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-primary">
            Select your service
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {services.map((item) => {
              const Icon = item.icon;
              const selected = service.title === item.title;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => {
                    setService(item);
                    setStep(2);
                  }}
                  className={[
                    'glass rounded-xl border-2 p-6 text-left transition-all hover:border-primary',
                    selected ? 'border-primary bg-primary/5' : 'border-transparent',
                  ].join(' ')}
                >
                  <Icon className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-6 text-ink-muted">
                    {item.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        <section className={step === 2 ? 'block' : 'hidden'}>
          <div className="mb-4 flex items-end justify-between">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-primary">
              Select a date
            </h2>
            <span className="text-[13px] font-semibold text-ink-muted">October 2024</span>
          </div>
          <div className="glass rounded-xl p-6 md:p-8">
            <div className="grid grid-cols-7 gap-2 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-7 gap-2">
              {days.map((d, index) => {
                const inactive = index < 2;
                const selected = d === day;
                return (
                  <button
                    key={`${d}-${index}`}
                    type="button"
                    disabled={inactive}
                    onClick={() => setDay(d)}
                    className={[
                      'rounded-full px-3 py-3 text-[13px] transition-colors',
                      inactive ? 'pointer-events-none text-surface-dim' : 'hover:bg-secondary-container',
                      selected ? 'bg-primary text-white ring-4 ring-primary/20' : '',
                    ].join(' ')}
                  >
                    {d}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="mt-8 flex justify-between">
            <button onClick={() => setStep(1)} className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-[11px] font-semibold text-primary">
              <ChevronLeft size={14} />
              Back
            </button>
            <button onClick={() => setStep(3)} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[11px] font-semibold text-white">
              Next
              <ChevronRight size={14} />
            </button>
          </div>
        </section>

        <section className={step === 3 ? 'block' : 'hidden'}>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-primary">
            Choose your platform
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {platforms.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setPlatform(item)}
                className={[
                  'glass rounded-xl border-2 p-6 text-center transition-all hover:border-primary',
                  platform === item ? 'border-primary bg-primary/5' : 'border-transparent',
                ].join(' ')}
              >
                <Video className="mx-auto mb-2 h-10 w-10 text-primary" />
                <div className="font-semibold text-ink">{item}</div>
              </button>
            ))}
          </div>
          <div className="mt-8 flex justify-between">
            <button onClick={() => setStep(2)} className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-[11px] font-semibold text-primary">
              <ChevronLeft size={14} />
              Back
            </button>
            <button onClick={() => setStep(4)} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[11px] font-semibold text-white">
              Continue
              <ChevronRight size={14} />
            </button>
          </div>
        </section>

        <section className={step === 4 ? 'block' : 'hidden'}>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-primary">
            Consultation details
          </h2>
          <form
            className="glass mt-6 space-y-6 rounded-xl p-6 md:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Full Name" placeholder="Dr. Sarah Johnson" />
              <Field label="Organization" placeholder="Global Academy" />
            </div>
            <Field label="Designation" placeholder="Head of Institutional Strategy" />
            <div className="space-y-2">
              <Label>Brief Overview of Consultation Needs</Label>
              <textarea className="w-full rounded-xl border border-surface-variant bg-white/70 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-primary/20" rows={4} placeholder="Briefly describe your institutional goals or current challenges..." />
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="terms" className="rounded text-primary focus:ring-primary" />
              <label htmlFor="terms" className="text-[13px] text-ink-muted">
                I agree to the privacy policy and terms of advisory engagement.
              </label>
            </div>
            <div className="flex justify-between">
              <button onClick={() => setStep(3)} type="button" className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-[11px] font-semibold text-primary">
                <ChevronLeft size={14} />
                Back
              </button>
              <button type="submit" className="rounded-full bg-primary px-8 py-4 text-[13px] font-semibold text-white shadow-soft">
                Confirm Booking
              </button>
            </div>
          </form>
        </section>

        {submitted ? (
          <div className="glass rounded-xl p-5 text-[13px] text-ink-muted">
            <div className="font-semibold text-primary">Booking confirmed.</div>
            <div className="mt-1">
              We’ll follow up shortly about your {service.title.toLowerCase()} session on {summaryDate} via {platform}.
            </div>
          </div>
        ) : null}
      </div>

      <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
        <div className="glass rounded-xl border-t-4 border-gold p-6 shadow-soft">
          <h3 className="font-display text-xl font-semibold text-primary">Booking summary</h3>
          <div className="mt-6 space-y-5">
            <SummaryRow label="Service" value={service.title} subvalue={service.duration} />
            <SummaryRow label="Date &amp; Time" value={summaryDate} subvalue="10:00 AM - 11:30 AM (GMT)" icon={<CalendarDays size={18} />} />
            <SummaryRow label="Platform" value={platform} icon={<Video size={18} />} />
          </div>
          <div className="mt-6 border-t border-surface-variant pt-6">
            <div className="flex justify-between text-[14px]">
              <span className="text-ink-muted">Advisory Fee</span>
              <span className="font-semibold text-primary">$250.00</span>
            </div>
            <div className="mt-2 flex justify-between text-[16px] font-bold text-gold">
              <span>Total</span>
              <span>$250.00</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="px-2 text-[13px] font-semibold text-primary">Why consult with us?</h4>
          {[
            ['Expert Guidance', 'Led by veteran academy directors.'],
            ['Tailored Strategy', 'Customized for your unique context.'],
            ['Measurable Impact', 'KPI-focused institutional results.'],
          ].map(([title, desc]) => (
            <div key={title} className="glass flex items-center gap-4 rounded-xl p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Check size={18} />
              </div>
              <div>
                <div className="text-[13px] font-semibold text-ink">{title}</div>
                <div className="text-[12px] text-ink-muted">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <input className="w-full rounded-full border border-surface-variant bg-white/70 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-primary/20" placeholder={placeholder} type="text" />
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">{children}</div>;
}

function SummaryRow({
  label,
  value,
  subvalue,
  icon,
}: {
  label: string;
  value: string;
  subvalue?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-container text-primary">
        {icon ?? <School2 size={18} />}
      </div>
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
          {label}
        </div>
        <div className="font-semibold text-ink">{value}</div>
        {subvalue ? <div className="text-[13px] text-ink-muted">{subvalue}</div> : null}
      </div>
    </div>
  );
}
