import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Globe2, Lightbulb, ShieldCheck, Sparkles, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Sapphire Leadership & Advisory',
  description:
    'Learn about Sapphire Leadership & Advisory, our values, advisory team, and global footprint in school consulting and leadership advisory.',
  alternates: {
    canonical: '/aboutus',
  },
};

const values = [
  {
    icon: Sparkles,
    title: 'Excellence',
    desc: 'Setting a global benchmark for educational leadership and growth.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    desc: 'Unwavering ethical standards in every consultation and roadmap.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'High-tech pedagogical approaches with a respect for strong tradition.',
  },
];

const leaders = [
  {
    role: 'FOUNDING PARTNER',
    name: 'Dr. Alistair Thorne',
    desc: '20 years of expertise in Oxbridge-level governance and policy.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCVbhVNeFDGxYqMD2B0_MjUYvweoKmyMo3ETWijZM_cKGjqoPzqMWf3nQrXpwit34rGRnryrCJjRv7BpCHBJ_3-y9dX2hVCyBu1052X270j9c-vZMNuWRYpva2IjS__ii3p_euobgyBvGwbGqgUZjhoCScd0VFphwr4MkLA-YXoelccflSgiS2GIhvXuYEWH-cyF8CdWpcWKnYNnlvhNvb1_3bA0ol8nOQUY8I9OK03ZgC8BPoTuxahr7GYHn0pchRsaYxM12hUvY2T',
  },
  {
    role: 'MANAGING DIRECTOR',
    name: 'Elena Vance',
    desc: 'Former Ivy League dean specializing in student engagement models.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDUZEEuX3woTIN9KwFflgQkLiYEWkZMReIg1l8-EsNZN35C1wDkEJ-FecscuM-HOQk6T-BoXb24MV-rCp6RXHEwnj8VmqC-sGcOtGRuMJqxewSG_K3S4lNlBHLc4c0A_WTiB06fJ7hJBxKV6pE0DCPqzIgB_qKmp-kdX5M7TIZM9zhTwLNTQzEvb3_QuSUZ6KrJ7hAOPI7HVDZA3XsTKvKu3kUgkenN-lWdpk84EAheMFWe7ZB3kRQUZRekPUHUL5A5IR6Ax0krXLLy',
  },
  {
    role: 'HEAD OF INNOVATION',
    name: 'Marcus Wu',
    desc: 'EdTech pioneer integrating AI and personalized learning paths.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD82Zcjv4KBEpdFDpyz2PyHLO71UKUBk-EsHRYwzEiKfJJoH0gAQEeS4XXj4CFwtTMnE23ZBTenZapfhSMwlFodJmkkewLP3de3ClNuEkY5bprI_aeuumHL245ookC24EsTs-4E_oCwtEP2s3g2OcFpKrdJM5DRnstOodikXQHrMg_sfMwFEJAZik4sfRPgU0MLRNtJfYgbg21YJSDNJt1J8R0okId9iJqzZvO6TBpwc08JK6pgFCkSM399Fv3snPP8GyAqciCTZI0Q',
  },
  {
    role: 'STRATEGY PARTNER',
    name: 'Dr. Sarah Jenkins',
    desc: 'Specialist in faculty development and emotional intelligence in leadership.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAn3i8Cj45o7KpV7NT7hy9xBcLZTwIX6cXJw4TlzWD2oFuv9ZEoRhBQrSzf6AkUZHugme3ciupL17mYFVcr_nNqjg3pnWyCtKcp9uDUJp8hng_cm6cZHtk1YnTu_PI8Dqas0KTgKDJ_sSEqvDTPcQUAfL0cIdT-8dPNIdgxhril_wkBwbDMM1-xsDW0ALbO4vRXmLOsySpbuilH2pgZqPj1ZkmfpJJDg6bM6ldNjU8Fx1atjpWOZy6r3aS2-k5Mh9TT5WPouejMxyqL',
  },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_center,rgba(0,55,122,0.15),transparent_35%),linear-gradient(135deg,rgba(7,27,58,0.98)_0%,rgba(0,55,122,0.94)_50%,rgba(11,77,162,0.9)_100%)] py-24 md:py-32">
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary blur-[160px]" />
          </div>
          <div className="relative mx-auto max-w-container px-5 text-center md:px-10">
            <span className="inline-flex rounded-full bg-gold/20 px-4 py-1 text-[11px] font-semibold tracking-[0.14em] text-gold">
              OUR SHARED VISION
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
              Transforming schools.
              <br />
              <span className="text-primary-fixed">Empowering leaders.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-primary-fixed/80 md:text-[16px]">
              We bridge the gap between institutional tradition and future-ready
              innovation through bespoke advisory and leadership excellence.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/consultation"
                className="rounded-full bg-gold px-6 py-3 text-[11px] font-semibold tracking-tight text-ink"
              >
                Meet the Team
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[11px] font-semibold tracking-tight text-white"
              >
                Global Offices
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="text-center">
              <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em] text-ink md:text-[34px]">
                Core values
              </h2>
              <p className="mt-3 text-[13px] leading-6 text-ink-muted md:text-[14px]">
                The principles that guide our institutional advisory.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <article key={value.title} className="glass rounded-xl p-7">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-ink">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-6 text-ink-muted">
                      {value.desc}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-surface-low py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
              <div className="max-w-xl">
                <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em] text-ink md:text-[34px]">
                  Visionary leadership
                </h2>
                <p className="mt-3 text-[13px] leading-6 text-ink-muted md:text-[14px]">
                  Guided by a diverse cohort of global educators, strategists,
                  and policy makers dedicated to school transformation.
                </p>
              </div>
              <button className="rounded-full border-2 border-primary px-6 py-3 text-[11px] font-semibold tracking-tight text-primary hover:bg-primary hover:text-white">
                View Full Advisory Board
              </button>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {leaders.map((leader) => (
                <article key={leader.name} className="group relative overflow-hidden rounded-xl">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/35 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="glass translate-y-4 rounded-xl p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                        {leader.role}
                      </p>
                      <h3 className="font-display text-xl font-semibold text-ink">
                        {leader.name}
                      </h3>
                      <p className="mt-2 text-[13px] leading-6 text-ink-muted">
                        {leader.desc}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-container gap-12 px-5 md:grid-cols-[0.95fr_1.05fr] md:px-10">
            <div>
              <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em] text-ink md:text-[34px]">
                Global footprint
              </h2>
              <p className="mt-3 max-w-lg text-[13px] leading-6 text-ink-muted md:text-[14px]">
                Our advisory teams operate from key educational hubs across four
                continents, ensuring local insight with global perspective.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  ['London, UK', 'Global Headquarters'],
                  ['Singapore', 'APAC Regional Hub'],
                  ['New York, USA', 'Americas Strategy Office'],
                  ['Dubai, UAE', 'MENA Advisory Centre'],
                ].map(([city, label], index) => (
                  <div
                    key={city}
                    className={`flex items-center gap-4 rounded-xl bg-white p-5 ${index === 0 ? 'border-l-4 border-gold' : 'border border-surface-variant'} `}
                  >
                    <div className="text-primary">
                      <Globe2 size={28} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {city}
                      </h3>
                      <p className="text-[12px] text-ink-muted">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex min-h-[560px] items-center justify-center overflow-hidden rounded-3xl bg-primary/5 p-8">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent" />
              <div className="glass relative flex h-full w-full flex-col items-center justify-center rounded-2xl p-12 text-center">
                <Users className="mb-8 h-20 w-20 text-primary/20" />
                <h3 className="font-display text-3xl font-semibold text-primary">
                  Interconnected excellence
                </h3>
                <p className="mt-4 max-w-md text-[14px] leading-7 text-ink-muted">
                  Deploying teams within 48 hours to any region globally.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="relative overflow-hidden rounded-3xl bg-primary p-10 text-center md:p-20">
              <div className="absolute top-0 right-0 h-64 w-64 -translate-y-1/2 translate-x-1/3 rounded-full bg-gold/10 blur-3xl" />
              <div className="relative z-10 mx-auto max-w-2xl">
                <h2 className="font-display text-4xl font-semibold text-white md:text-6xl">
                  Join our team of experts
                </h2>
                <p className="mt-6 text-[14px] leading-7 text-primary-fixed/80 md:text-[16px]">
                  We are always looking for visionary educational leaders, data
                  strategists, and passionate reformers to join our global
                  advisory.
                </p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <button className="rounded-full bg-gold px-10 py-5 text-[11px] font-semibold tracking-tight text-ink">
                    View Open Positions
                  </button>
                  <button className="rounded-full border border-white/20 bg-white/10 px-10 py-5 text-[11px] font-semibold tracking-tight text-white">
                    Culture &amp; Impact
                  </button>
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
