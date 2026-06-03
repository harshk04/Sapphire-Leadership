import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {
  Award,
  BookOpen,
  ChevronRight,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Sparkles,
  Users,
} from 'lucide-react';

export const teachersPageMetadata: Metadata = {
  title: 'For Teachers: Professional Development & Leadership',
  description:
    'Teacher training, leadership pathways, wellbeing programs, and academic coaching for high-performing schools.',
  alternates: {
    canonical: '/teacherspage',
  },
};

const programs = [
  {
    icon: BookOpen,
    title: 'Teacher Training',
    desc: 'Hands-on pedagogy workshops and classroom management systems for modern teaching.',
  },
  {
    icon: Users,
    title: 'Classroom Management',
    desc: 'Frameworks for building high-engagement learning environments and leading diverse groups.',
  },
  {
    icon: Lightbulb,
    title: 'Instructional Coaching',
    desc: 'One-to-one observation, feedback, and practice cycles to refine delivery and impact.',
  },
];

const readiness = [
  {
    title: 'Aspiring Leaders Track',
    desc: 'A multi-modal program for teachers eyeing vice principal or principal positions.',
  },
  {
    title: 'Academic Coordinator Bootcamps',
    desc: 'Master scheduling, curriculum mapping, and departmental oversight.',
  },
  {
    title: 'Conflict Resolution for Leads',
    desc: 'Navigating stakeholder relationships and team dynamics with confidence.',
  },
];

const certifications = [
  {
    badge: 'PROFESSIONAL',
    title: 'Master Educator (ME)',
    desc: 'Advanced classroom practice certification with research component.',
    meta: ['12 Months', 'Level 1'],
  },
  {
    badge: 'LEADERSHIP',
    title: 'Department Head Cert',
    desc: 'Strategic oversight, budgeting, and academic performance tracking.',
    meta: ['6 Months', 'Level 2'],
  },
  {
    badge: 'SPECIALIST',
    title: 'EdTech Strategist',
    desc: 'Mastery of AI integration and hybrid learning architectures.',
    meta: ['4 Months', 'Level 1'],
  },
  {
    badge: 'EXECUTIVE',
    title: 'Executive Principalship',
    desc: 'Highest tier certification for multi-school and system leadership.',
    meta: ['18 Months', 'Level 3'],
  },
];

const testimonials = [
  {
    quote:
      'The Master Educator program completely shifted my approach to student engagement.',
    author: 'Dr. Sarah Jenkins',
    role: 'Senior Faculty, International Academy',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBcCvi9h1RtUp-p7I5KsLH1Z03nIOXC85k5YM5jYdB1k-z_TdwaWBhXWmxVeN9rKOUkT74U_GdEZGl7LXQTYetGVe7YaBlLFzgT4J6srPhmM44rC-jyjx-JSgnvkxbMcYBUxfziDAuEOhndFJkfN-wsjE02F4bpgFxGnEpWDi2fYjtB0u1YqCIcPgamnu1v0nnD_xeZFTvhwXjelC1jenRXYLhwc16RJtCLkUOQQD3LyS4RL9ISK8gLpIR80F6P9TWel5oFuPkTo0Fw',
  },
  {
    quote:
      'The Leadership Readiness track gave me the tools I needed to manage my team with confidence.',
    author: 'Markus Thorne',
    role: "Academic Coordinator, St. Jude's Prep",
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBdA0fzmm_igOa5kIkCaJ0oTVhQTXdkK0Ah3NDXnxo-eccvh4zbm_psLqHIEAWDFQqIW3qRdw8Z7-W8Bq57PRd4tLB1bYJcTngCbfmCqFt_xdtuLf8CNENPd6Y3NxRtHQwsyW6tq6lJTF-UboWL7utWMBUuVOcHYxhRfvDiwIdH9kYaJe3be35Vy83nYb_Z1zhBz4-QODnZU9ktCd3zcNfYYP6h3e6sb_blr5BU8euqOYBqKRP3NRj-GvKyZNukoE70B8d76MfwblQU',
  },
  {
    quote:
      'The instructional coaching sessions were the most transformative professional development I have experienced.',
    author: 'Elena Rodriguez',
    role: 'Lead Instructor, Horizon Science School',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC7L08GaOJ-nxz1ZQRgaL_RB-dMjSrFFfa9avsP0XS7BV0WUg9AFawUrTrx1d6_xIBHS3iDnVUxagji_Y1aqxhij2GAJo77YT2ebXmOwdMERw01W29AUIaFG0H52uJSJZg21yuiHEhUsZe6KV7uRGAUvGQe_SafbF6ZhDaLDK6TpOUof0c9sNFnomVY8DLArKP-zJpJv6Wd9YRoRrOGN0dfIUwdpM1y_T4ad3e2N_0IJy7EBYPMb3rpuveltc3SnUYRbAhM8rzSN3qa',
  },
];

export default function TeachersPage() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(0,55,122,0.08),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(197,160,89,0.12),transparent_30%),linear-gradient(135deg,rgba(247,249,251,0.98),rgba(216,226,255,0.72))] py-24 md:py-32">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-1/4 right-1/4 h-80 w-80 rounded-full bg-gold blur-[120px]" />
          </div>
          <div className="relative mx-auto grid max-w-container items-center gap-12 px-5 md:grid-cols-[1.05fr_0.95fr] md:px-10">
            <div>
              <span className="inline-flex rounded-full bg-gold px-4 py-1 text-[11px] font-semibold tracking-[0.14em] text-ink">
                PREMIER EDUCATOR SUPPORT
              </span>
              <h1 className="mt-6 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-primary md:text-6xl">
                Empowering educators for excellence.
              </h1>
              <p className="mt-5 max-w-xl text-[14px] leading-7 text-ink-muted md:text-[16px]">
                Advanced pedagogical frameworks and elite advisory services
                designed to transform classroom dynamics and accelerate academic
                leadership careers.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/consultation"
                  className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-[11px] font-semibold tracking-tight text-white shadow-soft hover:shadow-lift"
                >
                  Explore Programs
                </Link>
                <Link
                  href="/resourcespage"
                  className="inline-flex items-center rounded-full border-2 border-primary px-6 py-3 text-[11px] font-semibold tracking-tight text-primary hover:bg-primary/5"
                >
                  View Resources
                </Link>
              </div>
            </div>

            <div className="glass overflow-hidden rounded-xl border-l-8 border-primary shadow-[0_24px_90px_rgba(7,27,58,0.16)]">
              <div className="relative h-[420px] w-full">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUmMgeW0gOg0m6qx5blfhk77dUebT_9yPT7Gbq2rwgSXr9Oq4ylpa6eqRFAOOhcRCy9q5RTk9S9D9G5-ascU0UF0vg1iS_5BvCpdB7PwdD16KP1umUx2UlNqzVgEBEgIbdXBALJz8NoJyEuPI07oQMxkK7EhZjorUBUraTPpXuf2fHC6jHp_pruBKu8-evR6KF964-44nxZloKIL2RFERo7nOomESrUm2mcF8fVW3HaPzLK4Q4PWBU4ccUYdSA7bA-lIrxjWuJVJef"
                  alt="Teacher development"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    Professional Development
                  </p>
                  <h2 className="mt-3 max-w-md font-display text-2xl font-semibold leading-tight md:text-3xl">
                    High-touch support for teachers, coordinators, and academic
                    leaders.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="text-center">
              <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[34px]">
                Service modules
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-6 text-ink-muted md:text-[14px]">
                Tailored support for teachers and instructional leaders.
              </p>
            </div>

            <div className="mt-10 space-y-8">
              {programs.map((program, index) => {
                const Icon = program.icon;
                const reverse = index % 2 === 1;
                return (
                  <article
                    key={program.title}
                    className={`grid items-stretch gap-6 md:grid-cols-[0.95fr_1.05fr] ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}
                  >
                    <div className="overflow-hidden rounded-xl">
                      <Image
                        src={
                          index === 0
                            ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUmMgeW0gOg0m6qx5blfhk77dUebT_9yPT7Gbq2rwgSXr9Oq4ylpa6eqRFAOOhcRCy9q5RTk9S9D9G5-ascU0UF0vg1iS_5BvCpdB7PwdD16KP1umUx2UlNqzVgEBEgIbdXBALJz8NoJyEuPI07oQMxkK7EhZjorUBUraTPpXuf2fHC6jHp_pruBKu8-evR6KF964-44nxZloKIL2RFERo7nOomESrUm2mcF8fVW3HaPzLK4Q4PWBU4ccUYdSA7bA-lIrxjWuJVJef'
                            : index === 1
                              ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUmMgeW0gOg0m6qx5blfhk77dUebT_9yPT7Gbq2rwgSXr9Oq4ylpa6eqRFAOOhcRCy9q5RTk9S9D9G5-ascU0UF0vg1iS_5BvCpdB7PwdD16KP1umUx2UlNqzVgEBEgIbdXBALJz8NoJyEuPI07oQMxkK7EhZjorUBUraTPpXuf2fHC6jHp_pruBKu8-evR6KF964-44nxZloKIL2RFERo7nOomESrUm2mcF8fVW3HaPzLK4Q4PWBU4ccUYdSA7bA-lIrxjWuJVJef'
                              : 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUmMgeW0gOg0m6qx5blfhk77dUebT_9yPT7Gbq2rwgSXr9Oq4ylpa6eqRFAOOhcRCy9q5RTk9S9D9G5-ascU0UF0vg1iS_5BvCpdB7PwdD16KP1umUx2UlNqzVgEBEgIbdXBALJz8NoJyEuPI07oQMxkK7EhZjorUBUraTPpXuf2fHC6jHp_pruBKu8-evR6KF964-44nxZloKIL2RFERo7nOomESrUm2mcF8fVW3HaPzLK4Q4PWBU4ccUYdSA7bA-lIrxjWuJVJef'
                        }
                        alt={program.title}
                        width={900}
                        height={560}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="glass flex flex-col justify-center rounded-xl p-8 md:p-10">
                      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon size={22} />
                      </div>
                      <h3 className="font-display text-2xl font-semibold text-primary">
                        {program.title}
                      </h3>
                      <p className="mt-4 text-[14px] leading-7 text-ink-muted">
                        {program.desc}
                      </p>
                      <Link
                        href="/consultation"
                        className="mt-6 inline-flex items-center gap-2 font-semibold text-primary"
                      >
                        Learn more about this phase
                        <ChevronRight size={16} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-navy py-16 text-white md:py-24">
          <div className="mx-auto grid max-w-container gap-10 px-5 md:grid-cols-[0.95fr_1.05fr] md:px-10">
            <div>
              <span className="inline-flex rounded-full border border-white/10 bg-white/8 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                Leadership readiness
              </span>
              <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold leading-tight md:text-4xl">
                Transitioning from the classroom to administration requires a
                new set of strategic muscles.
              </h2>
              <p className="mt-5 max-w-xl text-[14px] leading-7 text-white/78 md:text-[15px]">
                Our readiness tracks prepare the next generation of academic
                architects.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-gold/15 blur-2xl" />
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoIAFNvPpZPYvwQToPq_L1cjKjlLCGPmdGlpNFJNCMlODx5Z6mEYKP66NUfx-Y8xosBBsEhJG9wYSq8s_ZpRlwo_8xe_k4FGGDpz3JeHwfhwOijSoILsgbNalXVpjkEmJ5UrPmpZTaqPjJQLjXsKB-5gJiK59Xn1tj2bHaEOwB6T_TAsNnowG--SFex3dWtSxDqctyzayVVtiGRU7Eswk3MFnlx6siqKZ5KdlvAbEsyYj1hDqHQ2UwbfPziHDtmL8Lnk-E1g-9hODC"
                alt="Leadership readiness"
                width={900}
                height={580}
                className="rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-8 left-8 glass rounded-xl p-5 text-ink shadow-2xl">
                <div className="text-3xl font-bold text-primary">150+</div>
                <div className="text-[12px] text-ink-muted">
                  Coordinators promoted annually
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="grid gap-6 md:grid-cols-3">
              {readiness.map((item) => (
                <article key={item.title} className="glass rounded-xl p-7">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <GraduationCap size={22} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-ink-muted">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy py-16 text-white md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em] text-white md:text-[34px]">
                  Elite certifications
                </h2>
                <p className="mt-3 max-w-xl text-[13px] leading-6 text-white/70 md:text-[14px]">
                  Formalize your expertise with globally recognized credentials.
                </p>
              </div>
              <button className="rounded-full border border-gold/30 px-6 py-2 text-[11px] font-semibold tracking-tight text-gold">
                View Requirements
              </button>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {certifications.map((cert) => (
                <article key={cert.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <span className="mb-4 inline-flex rounded-full bg-gold px-3 py-1 text-[10px] font-bold text-ink">
                    {cert.badge}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {cert.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-white/72">
                    {cert.desc}
                  </p>
                  <div className="mt-6 flex items-center justify-between text-[11px] text-white/45">
                    <span>{cert.meta[0]}</span>
                    <span>{cert.meta[1]}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="text-center">
              <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[34px]">
                Voices of success
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article key={testimonial.author} className="glass rounded-2xl p-7">
                  <div className="mb-4 flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Sparkles key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="italic leading-7 text-ink-muted">
                    {testimonial.quote}
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-surface-variant">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={96}
                        height={96}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">
                        {testimonial.author}
                      </h3>
                      <p className="text-[12px] text-ink-muted">{testimonial.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="relative overflow-hidden rounded-3xl bg-primary p-10 text-center md:p-20">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
              <div className="relative z-10">
                <h2 className="font-display text-4xl font-semibold text-white md:text-6xl">
                  Upgrade your teaching career
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-[14px] leading-7 text-primary-fixed md:text-[16px]">
                  Step into the next phase of your professional journey with the
                  support of global leadership advisors.
                </p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    href="/consultation"
                    className="inline-flex items-center justify-center rounded-full bg-gold px-10 py-5 text-[11px] font-semibold tracking-tight text-ink"
                  >
                    Book Consultation
                  </Link>
                  <Link
                    href="/resourcespage"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-10 py-5 text-[11px] font-semibold tracking-tight text-white"
                  >
                    Download Brochure
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
