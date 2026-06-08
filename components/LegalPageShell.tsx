import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export type LegalSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  note?: string;
};

export type LegalHighlight = {
  label: string;
  value: string;
};

export type LegalSidebarItem = {
  label: string;
  value: string;
  href?: string;
};

type LegalPageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  updatedAt: string;
  sections: LegalSection[];
  sidebarTitle: string;
  sidebarItems: LegalSidebarItem[];
  calloutTitle: string;
  calloutDescription: string;
  calloutHref: string;
  calloutLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export default function LegalPageShell({
  eyebrow,
  title,
  description,
  updatedAt,
  sections,
  sidebarTitle,
  sidebarItems,
  calloutTitle,
  calloutDescription,
  calloutHref,
  calloutLabel,
  secondaryHref,
  secondaryLabel,
}: LegalPageShellProps) {
  return (
    <>
      <div className="relative overflow-hidden bg-[linear-gradient(180deg,#071b3a_0%,#123968_54%,#f7f9fb_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,55,122,0.15),transparent_35%),linear-gradient(135deg,rgba(7,27,58,0.98)_0%,rgba(0,55,122,0.94)_50%,rgba(11,77,162,0.9)_100%)]" />
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary blur-[160px]" />
        </div>
        <div className="relative mx-auto max-w-container px-5 py-24 text-center md:px-10 md:py-32">
          <span className="inline-flex rounded-full bg-gold/20 px-4 py-1 text-[11px] font-semibold tracking-[0.14em] text-gold">
            {eyebrow}
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-white md:text-[16px]">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={calloutHref}
              className="rounded-full bg-gold px-6 py-3 text-[11px] font-semibold tracking-tight text-ink"
            >
              {calloutLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[11px] font-semibold tracking-tight text-white"
            >
              {secondaryLabel}
            </Link>
          </div>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[12px] font-medium text-white backdrop-blur-md">
            <span className="text-gold">Updated</span>
            <span>{updatedAt}</span>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-container px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-6">
            {sections.map((section) => (
              <section
                key={section.title}
                className="glass rounded-2xl border border-surface-variant/40 p-7 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <ShieldCheck size={18} />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-primary">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-4 text-[14px] leading-7 text-ink-muted">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {section.bullets?.length ? (
                  <ul className="mt-6 grid gap-3 md:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="rounded-md border border-surface-variant/40 bg-white/70 px-4 py-3 text-[13px] leading-6 text-ink"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {section.note ? (
                  <div className="mt-6 rounded-md border border-primary/15 bg-primary/5 px-4 py-4 text-[13px] leading-6 text-ink-muted">
                    {section.note}
                  </div>
                ) : null}
              </section>
            ))}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="glass rounded-2xl border border-surface-variant/40 p-7 md:p-8">
              <div className="mt-4 space-y-4">
                {sidebarItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-md border border-surface-variant/40 bg-white/75 p-4"
                  >
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                      {item.label}
                    </div>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="mt-2 block text-[14px] leading-6 text-ink-muted hover:text-primary"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="mt-2 text-[14px] leading-6 text-ink-muted">
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-primary p-5 text-white">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                  Need support
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold">
                  {calloutTitle}
                </h3>
                <p className="mt-3 text-[13px] leading-6 text-primary-fixed">
                  {calloutDescription}
                </p>
                <Link
                  href={calloutHref}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-[13px] font-semibold text-ink"
                >
                  {calloutLabel}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
