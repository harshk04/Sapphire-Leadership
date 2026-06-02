import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Search,
  Target,
  Trophy,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Students | Sapphire Leadership & Advisory',
  description:
    'Student success programs, academic guidance, admissions support, and career advisory.',
};

const metrics = [
  { value: '98%', label: 'Admission Rate' },
  { value: '500+', label: 'Global Partnerships' },
  { value: '$12M+', label: 'Scholarships Secured' },
  { value: '15k+', label: 'Student Success Stories' },
];

const academicModules = [
  {
    icon: BookOpen,
    title: 'Subject Consultancy',
    desc: 'Deep dives into complex disciplines, bridging theory and application.',
  },
  {
    icon: GraduationCap,
    title: 'Assignment Guidance',
    desc: 'Strategic support for high-stakes projects and academic integrity.',
  },
  {
    icon: Lightbulb,
    title: 'Research Assistance',
    desc: 'Develop advanced investigative skills for thesis preparation and studies.',
  },
];

const careerTracks = [
  {
    icon: Target,
    title: 'Career Counselling',
    desc: 'Psychometric mapping to align your personality with high-growth industries.',
  },
  {
    icon: GraduationCap,
    title: 'Higher Education Advisory',
    desc: 'Global university selection based on ranking, fit, and prestige.',
  },
  {
    icon: BookOpen,
    title: 'SOP & Narrative Guidance',
    desc: 'Craft compelling personal statements that resonate with admissions committees.',
  },
];

export default function StudentPage() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(0,55,122,0.08),transparent_30%),radial-gradient(circle_at_top_right,rgba(197,160,89,0.14),transparent_24%),linear-gradient(180deg,rgba(247,249,251,1),rgba(255,255,255,1))] py-24 md:py-32">
          <div className="absolute inset-0 pointer-events-none opacity-25">
            <div className="absolute left-1/4 top-10 h-80 w-80 rounded-full bg-primary blur-[120px]" />
            <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-gold blur-[120px]" />
          </div>
          <div className="relative mx-auto grid max-w-container items-center gap-12 px-5 md:grid-cols-2 md:px-10">
            <div>
              <span className="inline-flex rounded-full bg-gold px-4 py-1 text-[11px] font-semibold tracking-[0.14em] text-ink">
                STUDENT EXCELLENCE PROGRAM
              </span>
              <h1 className="mt-6 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-primary md:text-6xl">
                Unlocking student potential.
              </h1>
              <p className="mt-5 max-w-lg text-[14px] leading-7 text-ink-muted md:text-[16px]">
                Elevating academic performance and professional clarity through
                elite advisory services tailored for the next generation of
                global leaders.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/consultation"
                  className="rounded-full bg-primary px-6 py-3 text-[11px] font-semibold tracking-tight text-white"
                >
                  Consult with an Advisor
                </Link>
                <Link
                  href="/resourcespage"
                  className="rounded-full border-2 border-primary px-6 py-3 text-[11px] font-semibold tracking-tight text-primary"
                >
                  Explore Programs
                </Link>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="absolute -inset-4 rounded-3xl bg-white/50 blur-2xl" />
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2kVnoj_xwD40S0ubBYPGSYXjJHQ_3ttg-mMsdhxLzWD5aw_ZM42j5Gv27u74iBDi28MGh7vMXPTefWrRuobpQy-RF_5NWM-jd6UIDaQq8XvOypuvOtWQa6hV-UC_5N-DvTdjChc2BWlz2oumtk2TVfO0bZdlGJ0wjyi_lEw5lEwrCibMH5iQ4ZXfRV50va5LybEpeky6VErLe-x9WiX-7b1m4fzTUR_duNzqVb2cRXVqrTuEm_s3KvgOL_r51lCYcx2pRLrZ6Sbvl"
                alt="Students collaborating"
                width={900}
                height={1125}
                className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-lift"
              />
            </div>
          </div>
        </section>

        <section className="bg-navy py-16 text-white md:py-24">
          <div className="mx-auto grid max-w-container grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-10">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="font-display text-4xl font-semibold text-gold">
                  {metric.value}
                </div>
                <div className="mt-2 text-[12px] uppercase tracking-[0.18em] text-white/60">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="text-center">
              <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[34px]">
                Academic excellence
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-6 text-ink-muted md:text-[14px]">
                Master your curriculum and refine your intellect with our
                structured consultancy framework.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {academicModules.map((module) => {
                const Icon = module.icon;
                return (
                  <article key={module.title} className="glass rounded-xl p-7">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-primary">
                      {module.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-6 text-ink-muted">
                      {module.desc}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-surface-low py-16 md:py-24">
          <div className="mx-auto grid max-w-container gap-8 px-5 md:grid-cols-[0.95fr_1.05fr] md:px-10">
            <div className="glass rounded-2xl p-8 md:p-10">
              <span className="inline-flex rounded-full bg-gold/15 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                Career advisory
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.02em] text-primary">
                Strategic career planning for ambitious students.
              </h2>
              <div className="mt-6 space-y-4">
                {careerTracks.map((track) => {
                  const Icon = track.icon;
                  return (
                    <div key={track.title} className="flex gap-4">
                      <div className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-ink">{track.title}</h3>
                        <p className="mt-1 text-[13px] leading-6 text-ink-muted">
                          {track.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOEfySxfuECM8fmknPvnP1rcITNWOcVWm62OvjUWSSYsGFv3MSipx-SzwhUNbjNOjwdMg-T4G5XGsPMDTTTV1-9i1bA0hzu69tIln7ghhL8uzt5FIRCz6emN71LUgX2CmmYQ45QpnVUSGKBllk1PUjatDAZF1WVxCGbx0fM4mk5hcJlJ7wXW543723P1GuJgEeW6OGz6M4y9l07RjP-UNxdpYNfpfhyaiHseGvhRD4ISjjO-Win1N6UOL9C_jKMpezZV73DV8Q8jIT"
                alt="Career planning"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 55vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              <div className="relative z-10 flex min-h-[460px] items-end p-8 text-white">
                <div className="max-w-md">
                  <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                    <HeartHandshake size={14} />
                    One-to-one support
                  </div>
                  <h3 className="mt-3 font-display text-3xl font-semibold">
                    Clear advice for academic growth, confidence, and direction.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#083d86_0%,#08397f_58%,#0b4a9c_100%)] py-16 md:py-24">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/8 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-container px-5 text-center md:px-10">
            <h2 className="font-display text-4xl font-semibold text-white md:text-6xl">
              Ready to define your future?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[14px] leading-7 text-primary-fixed md:text-[16px]">
              Join the ranks of Sapphire scholars who are leading industries
              across the globe.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center rounded-full bg-gold px-10 py-5 text-[11px] font-semibold tracking-tight text-ink shadow-[0_10px_24px_rgba(11,34,78,0.22)]"
              >
                Start Your Success Journey
              </Link>
              <Link
                href="/resourcespage"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-10 py-5 text-[11px] font-semibold tracking-tight text-white backdrop-blur-sm"
              >
                Schedule a Free Session
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
