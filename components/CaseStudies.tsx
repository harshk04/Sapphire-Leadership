import Link from 'next/link';
import { ArrowRight, BookOpenText, School2, ShieldCheck, Sparkles, Users2 } from 'lucide-react';
import SectionShell from './SectionShell';

const impactAreas = [
  {
    title: 'School Leadership',
    description:
      'Helping leaders create clarity, accountability, and stronger decision-making structures.',
    icon: School2,
  },
  {
    title: 'Teacher Growth',
    description:
      'Supporting professional learning and instructional improvement.',
    icon: Users2,
  },
  {
    title: 'Academic Excellence',
    description:
      'Strengthening curriculum, assessment, and student achievement systems.',
    icon: Sparkles,
  },
  {
    title: 'Accreditation & Quality',
    description:
      'Building sustainable quality assurance frameworks and readiness processes.',
    icon: ShieldCheck,
  },
];

const schoolStrengths = [
  'Leadership Systems',
  'Academic Quality',
  'Teacher Development',
  'School Improvement Planning',
  'Accreditation Readiness',
  'Governance & Strategy',
];

export default function CaseStudies() {
  return (
    <SectionShell className="bg-surface" id="impact">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
          Areas of Impact
        </p>
        <h2 className="[font-family:var(--font-hanken)] mt-3 text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[32px]">
          Why Schools Choose Sapphire
        </h2>
        <p className="mt-3 text-[13px] leading-7 text-ink-muted md:text-[15px]">
          Educational advisory built on leadership experience, academic expertise, and practical school improvement.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {impactAreas.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className="rounded-[26px] border border-surface-variant/45 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-[18px] font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-3 text-[13px] leading-6 text-ink-muted">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-10 rounded-[30px] border border-surface-variant/40 bg-[linear-gradient(180deg,#f9fbfe_0%,#ffffff_100%)] p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold">
                <BookOpenText size={18} />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                  What We Help Schools Strengthen
                </p>
                <h3 className="mt-1 text-[20px] font-semibold text-primary">
                  Practical capabilities that support long-term improvement
                </h3>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {schoolStrengths.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/12 bg-white px-4 py-2 text-[12px] font-medium text-primary shadow-sm"
                >
                  <span className="text-gold">✓</span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="max-w-xl rounded-[26px] border border-primary/10 bg-navy p-6 text-white shadow-[0_18px_48px_rgba(7,27,58,0.18)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              Meet the Founder
            </p>
            <p className="mt-4 text-[14px] leading-7 text-white/88">
              Dr. Sunil Kumawat is an educational leader, mathematics educator, researcher, and school improvement advisor with more than two decades of experience supporting teaching excellence, leadership development, curriculum implementation, and institutional growth.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-[12px] font-semibold text-ink transition-transform duration-200 hover:-translate-y-0.5"
            >
              Learn More About Dr. Sunil Kumawat
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
