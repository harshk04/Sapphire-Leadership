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
  title: 'For Teachers: Professional Growth & Leadership',
  description:
    'Professional growth pathways for teachers, coordinators, heads of department, and school leaders through classroom excellence and leadership development.',
  alternates: {
    canonical: '/teacherspage',
  },
};

const programs = [
  {
    icon: BookOpen,
    title: 'Teaching Excellence',
    desc: 'Enhance lesson design, student engagement, assessment practices, and effective classroom delivery.',
  },
  {
    icon: Users,
    title: 'Classroom Leadership',
    desc: 'Build structured, positive learning environments that improve participation, accountability, and student outcomes.',
  },
  {
    icon: Lightbulb,
    title: 'Instructional Coaching',
    desc: 'Personalized coaching cycles that strengthen teaching practice through reflection, feedback, and action planning.',
  },
];

const readiness = [
  {
    title: 'Emerging Leaders Program',
    desc: 'For teachers preparing to take on coordinator, department, or broader leadership responsibilities.',
  },
  {
    title: 'Academic Coordination Skills',
    desc: 'Strengthen curriculum planning, team collaboration, scheduling, monitoring, and academic oversight.',
  },
  {
    title: 'Communication & Influence',
    desc: 'Develop confident communication, stakeholder engagement, and leadership presence across school settings.',
  },
];

const certifications = [
  {
    badge: 'PROFESSIONAL',
    title: 'Master Teacher Pathway',
    desc: 'Deepen instructional expertise through advanced strategies in pedagogy, assessment, and student learning.',
    meta: ['12 Weeks', 'Level 1'],
  },
  {
    badge: 'LEADERSHIP',
    title: 'Department Leadership Program',
    desc: 'Build the skills required to lead teams, monitor academic performance, and support school-wide improvement.',
    meta: ['8 Weeks', 'Level 2'],
  },
  {
    badge: 'SPECIALIST',
    title: 'AI for Educators',
    desc: 'Learn practical applications of AI to improve planning, feedback, productivity, and learning experiences.',
    meta: ['6 Weeks', 'Level 1'],
  },
  {
    badge: 'EXECUTIVE',
    title: 'School Leadership Readiness',
    desc: 'Advanced preparation for coordinators, vice principals, principals, and aspiring school leaders.',
    meta: ['10 Weeks', 'Level 3'],
  },
];

const testimonials = [
  {
    quote:
      'The training programs provided practical strategies that immediately improved my classroom effectiveness and student engagement.',
    author: 'Anita Sharma',
    role: 'Senior Teacher, International School',
    image: '/images/female2.jpeg',
  },
  {
    quote:
      'The leadership pathway helped me transition confidently into an academic coordinator role with greater clarity and direction.',
    author: 'Rahul Mehta',
    role: 'Academic Coordinator',
    image: '/images/rahulmehta.jpeg',
  },
  {
    quote:
      'The coaching support strengthened my instructional practice and helped me become a more reflective educator.',
    author: 'Priya Nair',
    role: 'IB Educator',
    image: '/images/femal1.jpeg',
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
                PROFESSIONAL GROWTH PATHWAYS
              </span>
              <h1 className="mt-6 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-primary md:text-6xl">
                Grow from teacher to educational leader.
              </h1>
              <p className="mt-5 max-w-xl text-[14px] leading-7 text-ink-muted md:text-[16px]">
                Practical learning pathways designed to strengthen teaching
                excellence, instructional leadership, and long-term career growth
                in schools.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/consultation"
                  className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-[11px] font-semibold tracking-tight text-white shadow-soft hover:shadow-lift"
                >
                  Explore Programs
                </Link>
                <Link
                  href="/consultation"
                  className="inline-flex items-center rounded-full border-2 border-primary px-6 py-3 text-[11px] font-semibold tracking-tight text-primary hover:bg-primary/5"
                >
                  Book Consultation
                </Link>
              </div>
            </div>

            <div className="glass overflow-hidden rounded-xl border-l-8 border-primary shadow-[0_24px_90px_rgba(7,27,58,0.16)]">
              <div className="relative h-[420px] w-full">
                <Image
                  src="/images/teachershero.jpeg"
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
                    Professional support for teachers, coordinators, and future
                    school leaders.
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
                Our Services
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-6 text-ink-muted md:text-[14px]">
                Targeted development programs that help educators improve
                practice, leadership, and impact.
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
                            ? '/images/teachingexcellence.jpeg'
                            : index === 1
                              ? '/images/classroomleadership.jpeg'
                              : '/images/Instructional.jpeg'
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
                        Learn more about this service
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
                LEADERSHIP READINESS
              </span>
              <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold leading-tight md:text-4xl">
                Build the confidence to lead schools, teams, and change.
              </h2>
              <p className="mt-5 max-w-xl text-[14px] leading-7 text-white/78 md:text-[15px]">
                Our leadership readiness pathways help educators strengthen
                decision-making, communication, team leadership, and school
                improvement capabilities required for coordinator, vice
                principal, principal, and academic leadership roles.
              </p>
            </div>

            <div className="relative justify-self-end">
              <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-gold/15 blur-2xl" />
              <Image
                src="/images/leadershipdevelopment.jpeg"
                alt="School leadership workshop"
                width={780}
                height={620}
                className="w-full max-w-[520px] rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 left-6 max-w-[260px] rounded-xl border border-surface-variant/40 bg-white/95 p-4 text-ink shadow-2xl backdrop-blur-sm">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                  Founder-Led Expertise
                </div>
                <div className="mt-2 text-[12px] leading-6 text-ink-muted">
                  Built on more than two decades of educational leadership,
                  teaching, school administration, and academic improvement
                  experience.
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
                  Professional Development Pathways
                </h2>
                <p className="mt-3 max-w-xl text-[13px] leading-6 text-white/70 md:text-[14px]">
                  Structured programs that support educator growth from
                  classroom excellence to leadership readiness.
                </p>
              </div>
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
                  <div className="mt-6 flex items-center justify-between gap-3 whitespace-nowrap text-[11px] text-white/45">
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
                Voices of Growth
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
                  Advance your professional journey.
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-[14px] leading-7 text-gold md:text-[16px]">
                  Partner with Sapphire Leadership &amp; Advisor to strengthen
                  your teaching practice, expand your leadership capacity, and
                  achieve meaningful career growth.
                </p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    href="/consultation"
                    className="inline-flex items-center justify-center rounded-full bg-gold px-10 py-5 text-[11px] font-semibold tracking-tight text-ink"
                  >
                    Book Consultation
                  </Link>
                  <Link
                    href="/resources"
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
