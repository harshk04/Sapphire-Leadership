import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Globe2, Lightbulb, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Sapphire Leadership Advisor',
  description:
    'Learn about Sapphire Leadership Advisor, founded and managed by Dr. Sunil Kumawat, and its focus on school improvement, leadership development, and educational advisory.',
  alternates: {
    canonical: '/aboutus',
  },
};

const values = [
  {
    icon: Sparkles,
    title: 'Ph.D. in Mathematics',
    desc: 'Manipal University, reflecting a strong academic foundation and subject expertise.',
  },
  {
    icon: ShieldCheck,
    title: 'Microsoft Certified Educator',
    desc: 'A recognition of technology-enabled teaching and practical classroom application.',
  },
  {
    icon: Lightbulb,
    title: 'Association Member',
    desc: 'Member of The Association of Mathematics Teachers of India and active in professional learning.',
  },
  {
    icon: Globe2,
    title: 'Published & Patented',
    desc: 'Research papers in national and international journals, along with innovation patents.',
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
              ABOUT SAPPHIRE LEADERSHIP ADVISOR
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
              School advisory, leadership,
              <br />
              <span className="text-primary-fixed">and educational growth.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-white md:text-[16px]">
              Sapphire Leadership Advisor supports schools, educators, and
              leaders through strategic advisory, school improvement, teacher
              development, and leadership growth.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/consultation"
                className="rounded-full bg-gold px-6 py-3 text-[11px] font-semibold tracking-tight text-ink"
              >
                Explore Advisory
              </Link>
              <Link
                href="#company-details"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[11px] font-semibold tracking-tight text-white"
              >
                Company Details
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="text-center">
              <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em] text-ink md:text-[34px]">
                Professional achievements
              </h2>
              <p className="mt-3 text-[13px] leading-6 text-ink-muted md:text-[14px]">
                The academic milestones and recognitions of Dr. Sunil Kumawat.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em] text-ink md:text-[34px]">
                  Founded by Dr. Sunil Kumawat
                </h2>
                <p className="mt-3 text-[13px] leading-6 text-ink-muted md:text-[14px]">
                  Sapphire Leadership Advisor was established by Dr. Sunil
                  Kumawat and is managed and operated by him with a strong focus
                  on school improvement, leadership development, and academic
                  advisory.
                </p>
              </div>
              <Link
                href="/consultation"
                className="inline-flex w-fit items-center justify-center rounded-full border-2 border-primary px-6 py-3 text-[11px] font-semibold tracking-tight text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Speak with Us
              </Link>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
              <div className="relative mx-auto aspect-[2/3] w-full max-w-[340px] overflow-hidden rounded-[28px] shadow-sm lg:mx-0 lg:max-w-none">
                <Image
                  src="/images/sunil.png"
                  alt="Dr. Sunil Kumawat"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="grid gap-5">
                <article className="rounded-[24px] border border-surface-variant/50 bg-white p-7 shadow-sm md:p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                    Founder & Operator
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
                    Dr. Sunil Kumawat
                  </h3>
                  <p className="mt-4 text-[13px] leading-6 text-ink-muted md:text-[14px]">
                    Dr. Sunil Kumawat established Sapphire Leadership Advisor
                    and continues to manage its advisory practice. His work
                    combines academic leadership, mathematics education,
                    research, and professional growth.
                  </p>
                  <p className="mt-4 text-[13px] leading-6 text-ink-muted md:text-[14px]">
                    His background includes experience as a Mathematics
                    Educator, Academic Principal, and Head of Department, with a
                    consistent focus on curriculum development, performance
                    analysis, and school improvement.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="company-details" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-container gap-12 px-5 md:grid-cols-[0.95fr_1.05fr] md:px-10">
            <div>
              <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em] text-ink md:text-[34px]">
                Company details
              </h2>
              <p className="mt-3 max-w-lg text-[13px] leading-6 text-ink-muted md:text-[14px]">
                Sapphire Leadership Advisor is the company established by Dr.
                Sunil Kumawat for strategic educational advisory and school
                improvement support.
              </p>
              <div className="mt-8 space-y-4 rounded-[24px] border border-surface-variant/50 bg-white p-7 shadow-sm md:p-8">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                    SAPPHIRE LEADERSHIP ADVISOR
                  </div>
                  <p className="mt-2 text-[13px] leading-6 text-ink-muted md:text-[14px]">
                    Office: A-lI First Floor, Mall Road, Sector I, Vidhyadhar
                    Nagar Jaipur, Rajasthan 302039
                  </p>
                </div>
                <div className="space-y-3 border-t border-surface-variant pt-5 text-[13px] text-ink-muted">
                  <p>MSME: UDYAM-RJ-17-0643701</p>
                  <p>GST: 08AHXPK9737A2ZT</p>
                </div>
                <Link
                  href="/images/Udyam%20Registration%20Certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center justify-center rounded-full bg-primary px-5 py-3 text-[12px] font-semibold text-white transition-colors hover:bg-primary-2"
                >
                  View PDF
                </Link>
              </div>
            </div>

            <div className="relative flex min-h-[560px] items-center justify-center overflow-hidden rounded-3xl bg-primary/5 p-8">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent" />
              <div className="glass relative flex h-full w-full flex-col overflow-hidden rounded-2xl p-6 text-center">
                <div className="flex h-full items-center justify-center p-6">
                  <div className="max-w-md">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/70">
                      Advisory Focus
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-primary">
                      Leadership, school improvement, and strategic advisory
                    </h3>
                    <p className="mt-4 text-[13px] leading-6 text-ink-muted">
                      Sapphire Leadership Advisor supports schools through
                      academic planning, leadership development, and
                      improvement frameworks that are practical and measurable.
                    </p>
                  </div>
                </div>
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
                  Reach out for school advisory, leadership collaboration, and
                  strategic conversations around educational growth.
                </p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="rounded-full bg-gold px-10 py-5 text-[11px] font-semibold tracking-tight text-ink"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="#company-details"
                    className="rounded-full border border-white/20 bg-white/10 px-10 py-5 text-[11px] font-semibold tracking-tight text-white"
                  >
                    View Company Details
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
