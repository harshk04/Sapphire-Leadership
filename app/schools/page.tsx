import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  Building2,
  ChartColumnBig,
  CheckCircle2,
  ClipboardList,
  Compass,
  GraduationCap,
  Globe2,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'For Schools: Strategic Leadership & School Advisory',
  description:
    'Explore Sapphire Leadership & Advisor’s support for school improvement planning, leadership development, accreditation, governance, and academic excellence.',
  alternates: {
    canonical: '/schools',
  },
};

const audienceCards = [
  {
    icon: Building2,
    title: 'School Founders & Directors',
    description:
      'Strategic guidance for governance, long-term planning, institutional growth, and leadership accountability.',
  },
  {
    icon: Users,
    title: 'Principals & Leadership Teams',
    description:
      'Support for strengthening culture, execution, decision-making, and school improvement initiatives.',
  },
  {
    icon: ShieldCheck,
    title: 'Accreditation & Quality Teams',
    description:
      'Structured support for evidence collection, compliance, documentation, and continuous improvement processes.',
  },
  {
    icon: GraduationCap,
    title: 'Academic Leaders',
    description:
      'Strengthen curriculum implementation, instructional consistency, assessment systems, and learning outcomes.',
  },
];

const pillarCards = [
  {
    icon: Compass,
    title: 'School Improvement Planning',
    description:
      'Convert strategic goals into practical action plans with ownership, timelines, monitoring, and accountability.',
  },
  {
    icon: ChartColumnBig,
    title: 'Leadership Development',
    description:
      'Develop confident leaders who can guide teams, drive improvement, and sustain institutional growth.',
  },
  {
    icon: BadgeCheck,
    title: 'Accreditation & Quality Assurance',
    description:
      'Build stronger evidence systems and greater readiness for accreditation, inspection, and review processes.',
  },
  {
    icon: ClipboardList,
    title: 'Governance & Strategic Direction',
    description:
      'Support founders and boards in creating clarity, oversight, and stronger decision-making structures.',
  },
  {
    icon: BookOpenText,
    title: 'Academic Excellence',
    description:
      'Strengthen teaching quality, assessment systems, and the academic culture that drives student success.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Review',
    description:
      'Evaluate priorities, leadership structures, systems, and current institutional performance.',
  },
  {
    number: '02',
    title: 'Prioritise',
    description:
      'Identify the highest-impact opportunities and establish practical improvement priorities.',
  },
  {
    number: '03',
    title: 'Align',
    description:
      'Create alignment between governance, leadership teams, academic goals, and operational systems.',
  },
  {
    number: '04',
    title: 'Sustain',
    description:
      'Embed routines, monitoring structures, and accountability mechanisms that support long-term success.',
  },
];

const faqItems = [
  {
    question: 'How does Sapphire support school improvement?',
    answer:
      'We help schools clarify priorities, strengthen leadership systems, develop improvement plans, and build accountability structures that support long-term growth.',
  },
  {
    question: 'Can you work with boards, founders, and principals together?',
    answer:
      'Yes. Our advisory approach supports alignment across governance, leadership, and academic teams to ensure consistent direction and execution.',
  },
  {
    question: 'Do you provide accreditation support?',
    answer:
      'Yes. We assist schools with readiness reviews, evidence systems, documentation processes, quality assurance frameworks, and accreditation preparation.',
  },
  {
    question: 'Do you work with international and IB schools?',
    answer:
      'Yes. We support both national and international schools, including institutions pursuing global standards and accreditation pathways.',
  },
];

export default function SchoolsPage() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#061528_0%,#0b2c59_48%,#f7f9fb_100%)] pt-28 pb-16 text-white md:pt-32 md:pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_24%),radial-gradient(circle_at_top_right,rgba(197,160,89,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />
          <div className="relative mx-auto grid max-w-container gap-12 px-5 md:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-gold px-4 py-1 text-[11px] font-semibold tracking-[0.14em] text-ink">
                FOR SCHOOLS
              </span>
              <h1 className="mt-6 max-w-xl font-display text-4xl font-semibold leading-[1.03] tracking-[-0.04em] md:text-6xl">
                Build stronger schools through strategic leadership.
              </h1>
              <p className="mt-5 max-w-2xl text-[14px] leading-7 text-white/84 md:text-[16px]">
                Sapphire Leadership &amp; Advisor partners with school founders,
                boards, principals, and leadership teams to strengthen
                governance, improve systems, and create sustainable pathways to
                academic excellence.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/consultation"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-[11px] font-semibold tracking-wide text-ink transition-transform hover:-translate-y-0.5"
                >
                  Book Consultation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#school-pillars"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-white/15"
                >
                  Explore Advisory Services
                </Link>
              </div>

              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {[
                  'School improvement plans with clear priorities and measurable outcomes',
                  'Leadership development grounded in accountability and execution',
                  'Accreditation readiness and quality assurance support',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[20px] border border-white/12 bg-white/8 px-4 py-4 text-[12px] leading-6 text-white/78 backdrop-blur-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-gold/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-white/8 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <div className="overflow-hidden rounded-[22px]">
                  <Image
                    src="/images/image 1.jpeg"
                    alt="School leaders reviewing an improvement plan"
                    width={900}
                    height={680}
                    className="h-[280px] w-full object-cover md:h-[360px]"
                    priority
                  />
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[18px] bg-navy/85 p-4">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                      Advisory Focus
                    </div>
                    <div className="mt-2 text-[13px] leading-6 text-white/80">
                      Strategic planning, leadership development, accreditation,
                      governance, and school improvement.
                    </div>
                  </div>
                  <div className="rounded-[18px] bg-white p-4 text-ink shadow-sm">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                      What improves
                    </div>
                    <div className="mt-2 text-[13px] leading-6 text-ink-muted">
                      Clearer priorities, stronger systems, aligned teams, and
                      measurable institutional progress.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="max-w-2xl">
              <h2 className="[font-family:var(--font-hanken)] text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl">
                Who We Support
              </h2>
              <p className="mt-3 text-[13px] leading-6 text-ink-muted md:text-[14px]">
                Our advisory services are designed for decision-makers who want
                stronger systems, clearer direction, and sustainable school
                growth.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {audienceCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rounded-[24px] border border-surface-variant/50 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-primary">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-6 text-ink-muted">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="school-pillars"
          className="bg-[linear-gradient(180deg,#f4f7fb_0%,#ffffff_100%)] py-16 md:py-24"
        >
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-[11px] font-semibold tracking-[0.14em] text-primary">
                  SCHOOL ADVISORY PILLARS
                </span>
                <h2 className="mt-5 [font-family:var(--font-hanken)] text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl">
                  Focused on improvement, not just recommendations.
                </h2>
              </div>
              <p className="max-w-xl text-[13px] leading-6 text-ink-muted md:text-[14px]">
                Every engagement is designed to help schools strengthen
                systems, develop leadership capacity, and improve institutional
                effectiveness.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="grid gap-5 md:grid-cols-2">
                {pillarCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.title}
                      className="rounded-[24px] border border-surface-variant/45 bg-white p-6 shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/15 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-[17px] font-semibold text-primary">
                          {card.title}
                        </h3>
                      </div>
                      <p className="mt-4 text-[13px] leading-6 text-ink-muted">
                        {card.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-[28px] border border-primary/10 bg-navy p-7 text-white shadow-[0_20px_60px_rgba(7,27,58,0.16)] md:p-8">
                <div className="flex items-center gap-3 text-gold">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                    WHAT SCHOOLS GAIN
                  </span>
                </div>
                <ul className="mt-6 space-y-4">
                  {[
                    'Clear institutional priorities supported by actionable improvement plans.',
                    'Stronger leadership accountability and execution systems.',
                    'Greater readiness for accreditation, inspection, and quality reviews.',
                    'Improved communication between governance, leadership, and staff.',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-[13px] leading-6 text-white/82">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 rounded-[22px] bg-white/8 p-5 backdrop-blur-sm">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                    Engagement style
                  </div>
                  <p className="mt-2 text-[13px] leading-6 text-white/76">
                    Collaborative, evidence-informed, and grounded in the
                    realities of school leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ink py-16 text-white md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold tracking-[0.14em] text-gold">
                ENGAGEMENT MODEL
              </span>
              <h2 className="mt-5 [font-family:var(--font-hanken)] text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                A structured pathway to sustainable school improvement.
              </h2>
              <p className="mt-3 text-[13px] leading-6 text-white/70 md:text-[14px]">
                Our process helps schools move from diagnosis to implementation
                with clarity, focus, and measurable progress.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-[24px] border border-white/10 bg-white/6 p-6 backdrop-blur-sm"
                >
                  <div className="text-4xl font-bold tracking-[-0.05em] text-white/15">
                    {step.number}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-white/70">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="overflow-hidden rounded-[28px] border border-surface-variant/45 bg-white shadow-sm">
                <div className="relative h-[320px]">
                  <Image
                    src="/images/eis.jpeg"
                    alt="A school leadership team planning academic improvement"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 52vw, 100vw"
                  />
                </div>
                <div className="p-7 md:p-8">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    Selected transformation
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-primary">
                    Partner School Improvement Project
                  </h3>
                  <p className="mt-4 text-[13px] leading-6 text-ink-muted">
                    Sapphire supported the leadership team in developing
                    clearer priorities, stronger review systems, and a more
                    effective improvement framework.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      'Strategic priorities clarified',
                      'Leadership review cycles strengthened',
                      'Academic systems aligned',
                      'Quality assurance enhanced',
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-[18px] bg-surface px-4 py-3 text-[12px] leading-6 text-ink"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-[28px] border border-surface-variant/45 bg-white p-7 shadow-sm md:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Globe2 className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">
                      International and local context
                    </h3>
                  </div>
                  <p className="mt-4 text-[13px] leading-6 text-ink-muted">
                    We help schools balance international standards with
                    strategies that fit their community, culture, and
                    operational reality.
                  </p>
                </div>

                <div className="rounded-[28px] border border-surface-variant/45 bg-primary p-7 text-white shadow-sm md:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-gold">
                      <ChartColumnBig className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      Measurable school progress
                    </h3>
                  </div>
                  <p className="mt-4 text-[13px] leading-6 text-white/78">
                    Our focus is practical implementation that improves
                    leadership effectiveness, academic quality, and
                    institutional performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="mt-5 [font-family:var(--font-hanken)] text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl">
                  Common Questions from School Leaders
                </h2>
              </div>
              <p className="max-w-xl text-[13px] leading-6 text-ink-muted md:text-[14px]">
                Questions we frequently receive from schools seeking stronger
                leadership systems and sustainable improvement.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                {faqItems.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-[24px] border border-surface-variant/45 bg-white p-6 shadow-sm open:shadow-soft"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                      <span className="text-[16px] font-semibold tracking-[-0.02em] text-primary">
                        {item.question}
                      </span>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-primary transition-transform duration-300 group-open:rotate-45">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </summary>
                    <p className="mt-4 max-w-3xl text-[13px] leading-6 text-ink-muted">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>

              <div className="rounded-[28px] border border-primary/10 bg-navy p-7 text-white md:p-8">
                <div className="flex items-center gap-3 text-gold">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                    NEXT STEP
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
                  Ready to strengthen your school?
                </h3>
                <p className="mt-4 text-[13px] leading-6 text-white/75">
                  Start with a focused consultation to discuss your goals,
                  priorities, challenges, and opportunities for growth.
                </p>

                <div className="mt-7 grid gap-3">
                  <Link
                    href="/consultation"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-[12px] font-semibold tracking-wide text-ink transition-transform hover:-translate-y-0.5"
                  >
                    Book a Consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 px-6 py-3 text-[12px] font-semibold tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-white/12"
                  >
                    Contact the Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
