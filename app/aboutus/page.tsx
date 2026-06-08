import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Globe2, Lightbulb, ShieldCheck, Sparkles, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Dr. Sunil Kumawat',
  description:
    'Learn about Dr. Sunil Kumawat, Mathematics Educator, academic leader, researcher, and the professional voice behind Sapphire Leadership Advisor.',
  alternates: {
    canonical: '/aboutus',
  },
};

const values = [
  {
    icon: Sparkles,
    title: 'Excellence',
    desc: 'Deep subject knowledge, strong classroom practice, and a clear focus on student progress.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    desc: 'A steady commitment to ethical teaching, professional learning, and responsible leadership.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'Research-informed teaching, thoughtful technology use, and practical educational improvement.',
  },
];

const leaders = [
  {
    role: 'MATHEMATICS EDUCATOR',
    name: 'Dr. Sunil Kumawat',
    desc: 'An enthusiastic Mathematics Educator at Jayshree Periwal International School, Jaipur, with a Ph.D. from Manipal University.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCVbhVNeFDGxYqMD2B0_MjUYvweoKmyMo3ETWijZM_cKGjqoPzqMWf3nQrXpwit34rGRnryrCJjRv7BpCHBJ_3-y9dX2hVCyBu1052X270j9c-vZMNuWRYpva2IjS__ii3p_euobgyBvGwbGqgUZjhoCScd0VFphwr4MkLA-YXoelccflSgiS2GIhvXuYEWH-cyF8CdWpcWKnYNnlvhNvb1_3bA0ol8nOQUY8I9OK03ZgC8BPoTuxahr7GYHn0pchRsaYxM12hUvY2T',
  },
  {
    role: 'ACADEMIC PRINCIPAL',
    name: 'Curriculum Development',
    desc: 'At Scholars International School, he focused on curriculum development and effective teaching methods.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDUZEEuX3woTIN9KwFflgQkLiYEWkZMReIg1l8-EsNZN35C1wDkEJ-FecscuM-HOQk6T-BoXb24MV-rCp6RXHEwnj8VmqC-sGcOtGRuMJqxewSG_K3S4lNlBHLc4c0A_WTiB06fJ7hJBxKV6pE0DCPqzIgB_qKmp-kdX5M7TIZM9zhTwLNTQzEvb3_QuSUZ6KrJ7hAOPI7HVDZA3XsTKvKu3kUgkenN-lWdpk84EAheMFWe7ZB3kRQUZRekPUHUL5A5IR6Ax0krXLLy',
  },
  {
    role: 'HEAD OF DEPARTMENT',
    name: 'Student Performance',
    desc: 'At Air Force School, he emphasized student performance analysis and continuous improvement.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD82Zcjv4KBEpdFDpyz2PyHLO71UKUBk-EsHRYwzEiKfJJoH0gAQEeS4XXj4CFwtTMnE23ZBTenZapfhSMwlFodJmkkewLP3de3ClNuEkY5bprI_aeuumHL245ookC24EsTs-4E_oCwtEP2s3g2OcFpKrdJM5DRnstOodikXQHrMg_sfMwFEJAZik4sfRPgU0MLRNtJfYgbg21YJSDNJt1J8R0okId9iJqzZvO6TBpwc08JK6pgFCkSM399Fv3snPP8GyAqciCTZI0Q',
  },
  {
    role: 'RESEARCH & INNOVATION',
    name: 'Professional Growth',
    desc: 'Microsoft Certified Educator, member of The Association of Mathematics Teachers of India, author, and patent holder.',
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
              ABOUT DR. SUNIL KUMAWAT
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
              Mathematics, leadership,
              <br />
              <span className="text-primary-fixed">and continuous learning.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-primary-fixed/80 md:text-[16px]">
              Dr. Sunil Kumawat is a Mathematics Educator and academic leader
              whose work combines teaching excellence, curriculum leadership,
              research, and professional growth.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/consultation"
                className="rounded-full bg-gold px-6 py-3 text-[11px] font-semibold tracking-tight text-ink"
              >
                Meet Dr. Sunil
              </Link>
              <Link
                href="/images/Udyam%20Registration%20Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[11px] font-semibold tracking-tight text-white"
              >
                Udyam Certificate
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
                The principles that guide his teaching, leadership, and research.
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
                  Academic leadership journey
                </h2>
                <p className="mt-3 text-[13px] leading-6 text-ink-muted md:text-[14px]">
                  From mathematics instruction to principal-level leadership,
                  Dr. Sunil&apos;s journey reflects disciplined growth and
                  measurable improvement.
                </p>
              </div>
              <button className="rounded-full border-2 border-primary px-6 py-3 text-[11px] font-semibold tracking-tight text-primary hover:bg-primary hover:text-white">
                View Profile Highlights
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
                Professional credentials
              </h2>
              <p className="mt-3 max-w-lg text-[13px] leading-6 text-ink-muted md:text-[14px]">
                A glance at the affiliations, publications, and recognitions
                behind his academic practice.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  ['Ph.D. in Mathematics', 'Manipal University'],
                  ['Microsoft Certified Educator', 'Technology-enabled teaching'],
                  ['Association Member', 'The Association of Mathematics Teachers of India'],
                  ['Published & Patented', 'Research papers and innovation'],
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
              <div className="glass relative flex h-full w-full flex-col overflow-hidden rounded-2xl p-6 text-center">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-left">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/70">
                      Udyam Registration
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-primary">
                      Certificate
                    </h3>
                  </div>
                  <Link
                    href="/images/Udyam%20Registration%20Certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-primary px-4 py-2 text-[11px] font-semibold text-white"
                  >
                    Open PDF
                  </Link>
                </div>
                <object
                  data="/images/Udyam%20Registration%20Certificate.pdf"
                  type="application/pdf"
                  className="mt-5 h-[460px] w-full rounded-xl border border-surface-variant bg-white"
                >
                  <div className="flex h-full items-center justify-center p-6">
                    <div>
                      <p className="font-semibold text-primary">
                        PDF preview unavailable in this browser.
                      </p>
                      <p className="mt-2 text-[13px] text-ink-muted">
                        Open the certificate using the link above.
                      </p>
                    </div>
                  </div>
                </object>
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
                  Connect with Dr. Sunil Kumawat
                </h2>
                <p className="mt-6 text-[14px] leading-7 text-primary-fixed/80 md:text-[16px]">
                  Reach out for academic guidance, professional collaboration,
                  or leadership conversations around mathematics education.
                </p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="rounded-full bg-gold px-10 py-5 text-[11px] font-semibold tracking-tight text-ink"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/images/Udyam%20Registration%20Certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/20 bg-white/10 px-10 py-5 text-[11px] font-semibold tracking-tight text-white"
                  >
                    View Certificate
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
