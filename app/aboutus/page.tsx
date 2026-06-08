import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Globe2, Lightbulb, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Sapphire Leadership & Advisor',
  description:
    'Discover Sapphire Leadership & Advisor, the founder-led educational consultancy led by Dr. Sunil Kumawat, focused on school improvement, leadership development, accreditation, and educational excellence.',
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
          <div className="relative mx-auto grid max-w-container gap-10 px-5 md:grid-cols-[0.95fr_1.05fr] md:px-10 md:items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-5 rounded-[36px] bg-gold/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-white/8 p-3 shadow-[0_24px_90px_rgba(7,27,58,0.25)] backdrop-blur-xl">
                <div className="relative mx-auto aspect-[5/6] max-w-[500px] overflow-hidden rounded-[24px] md:h-[490px] lg:h-[510px]">
                  <Image
                    src="/images/sunil.png"
                    alt="Dr. Sunil Kumawat"
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="relative order-1 max-w-2xl text-white md:order-2">
              <span className="inline-flex rounded-full bg-gold/20 px-4 py-1 text-[11px] font-semibold tracking-[0.14em] text-gold">
                FOUNDER & LEAD ADVISOR
              </span>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
                Dr. Sunil Kumawat
              </h1>
              <p className="mt-4 text-[14px] font-medium tracking-wide text-primary-fixed md:text-[16px]">
                Educational Leader • School Improvement Advisor • Mathematics
                Educator • Researcher
              </p>
              <p className="mt-6 max-w-2xl text-[14px] leading-7 text-white md:text-[16px]">
                With more than two decades of experience in education, Dr. Sunil
                Kumawat has worked across teaching, academic leadership, school
                administration, curriculum development, and institutional
                improvement.
              </p>
              <p className="mt-4 max-w-2xl text-[14px] leading-7 text-white/88 md:text-[16px]">
                His work focuses on helping schools build stronger leadership
                systems, improve academic quality, strengthen accountability,
                and create sustainable pathways for educational excellence.
              </p>
              <p className="mt-4 max-w-2xl text-[14px] leading-7 text-white/82 md:text-[16px]">
                As the Founder of Sapphire Leadership &amp; Advisor, he partners
                with school leaders, principals, governing boards, and
                educational institutions to support meaningful and measurable
                growth.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/consultation"
                  className="rounded-full bg-gold px-6 py-3 text-[11px] font-semibold tracking-tight text-ink"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="/schools"
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[11px] font-semibold tracking-tight text-white"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="max-w-2xl">
              <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em] text-ink md:text-[34px]">
                A Journey Through Education and Leadership
              </h2>
              <p className="mt-3 text-[13px] leading-6 text-ink-muted md:text-[14px]">
                The professional path that shaped a practical, school-focused
                advisory approach.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-4">
              {[
                {
                  title: 'Mathematics Educator',
                  desc: 'Built strong foundations in classroom excellence and student learning.',
                },
                {
                  title: 'Academic Coordinator',
                  desc: 'Led curriculum implementation, teacher development, and academic quality initiatives.',
                },
                {
                  title: 'Principal & School Leader',
                  desc: 'Guided institutional growth, leadership systems, and school improvement programs.',
                },
                {
                  title: 'Founder & Advisor',
                  desc: 'Established Sapphire Leadership & Advisor to support schools through strategic educational consulting.',
                },
              ].map((item, index) => (
                <article
                  key={item.title}
                  className="relative rounded-[24px] border border-surface-variant/45 bg-white p-6 shadow-sm"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                    Step {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>
                  <h3 className="mt-4 font-display text-[22px] font-semibold tracking-[-0.02em] text-ink">
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

        <section className="bg-surface-low py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="max-w-2xl">
              <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em] text-ink md:text-[34px]">
                Professional Credentials &amp; Recognition
              </h2>
              <p className="mt-3 text-[13px] leading-6 text-ink-muted md:text-[14px]">
                Credentials that reflect both academic depth and practical
                leadership in education.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  icon: Sparkles,
                  title: 'Ph.D. in Mathematics',
                  desc: 'Manipal University',
                  body: 'Research-driven expertise in mathematical education and academic leadership.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Microsoft Certified Educator',
                  desc: 'Recognized for effective technology integration and innovative teaching practices.',
                  body: '',
                },
                {
                  icon: Lightbulb,
                  title: 'Professional Association Memberships',
                  desc: 'Active contributor to professional learning and educational networks.',
                  body: '',
                },
                {
                  icon: Globe2,
                  title: 'Research Publications & Innovation',
                  desc: 'Published research papers and educational innovations including patented work.',
                  body: '',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="min-h-[260px] rounded-[28px] border border-surface-variant/50 bg-white p-8 shadow-sm"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[14px] font-medium text-primary">
                      {item.desc}
                    </p>
                    {item.body ? (
                      <p className="mt-3 max-w-md text-[13px] leading-6 text-ink-muted">
                        {item.body}
                      </p>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-center">
              <div>
                <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em] text-ink md:text-[34px]">
                  The Story Behind Sapphire Leadership &amp; Advisor
                </h2>
                <p className="mt-4 text-[13px] leading-6 text-ink-muted md:text-[14px]">
                  Sapphire Leadership &amp; Advisor was founded to help
                  educational institutions move beyond short-term solutions and
                  build systems that create lasting impact.
                </p>
                <p className="mt-4 text-[13px] leading-6 text-ink-muted md:text-[14px]">
                  The consultancy works with school leaders, founders,
                  governing boards, and academic teams to strengthen leadership
                  capacity, improve school performance, support accreditation
                  efforts, and create cultures of continuous improvement.
                </p>
                <p className="mt-4 text-[13px] leading-6 text-ink-muted md:text-[14px]">
                  By combining educational expertise with practical
                  implementation, Sapphire helps schools translate vision into
                  measurable outcomes.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-[30px] border border-primary/10 bg-navy p-6 text-white shadow-[0_20px_60px_rgba(7,27,58,0.18)] md:p-8">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    What We Help Schools Achieve
                  </span>
                  <div className="mt-4 h-px w-16 bg-gold/35" />
                </div>
                <div className="mt-6 grid gap-3">
                  {[
                    'Stronger leadership teams',
                    'Clearer strategic direction',
                    'Improved academic systems',
                    'Accreditation readiness',
                    'Sustainable school improvement',
                    'Greater institutional effectiveness',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[18px] border border-white/10 bg-white/7 px-4 py-4 text-[13px] leading-6 text-white/88 backdrop-blur-sm transition-colors hover:bg-white/10"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#f4f7fb_0%,#ffffff_100%)] py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="max-w-2xl">
              <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em] text-ink md:text-[34px]">
                Areas of Expertise
              </h2>
              <p className="mt-3 text-[13px] leading-6 text-ink-muted md:text-[14px]">
                Practical advisory areas designed for Indian and international
                schools seeking stronger leadership and measurable improvement.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  title: 'School Leadership Development',
                  desc: 'Supporting principals, coordinators, and emerging leaders.',
                },
                {
                  title: 'School Improvement Planning',
                  desc: 'Turning strategic goals into actionable roadmaps.',
                },
                {
                  title: 'Accreditation & Quality Assurance',
                  desc: 'Building systems that support continuous improvement.',
                },
                {
                  title: 'Academic Excellence',
                  desc: 'Strengthening curriculum, assessment, and instructional quality.',
                },
                {
                  title: 'Teacher Professional Development',
                  desc: 'Developing high-impact teaching practices and leadership capacity.',
                },
                {
                  title: 'Educational Strategy & Governance',
                  desc: 'Supporting founders and boards with effective decision-making frameworks.',
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-surface-variant/45 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Lightbulb size={22} />
                  </div>
                  <h3 className="mt-5 text-[18px] font-semibold text-primary">
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
            <div className="mx-auto max-w-4xl text-center">
              <div className="rounded-[28px] border border-white/10 bg-white/6 p-7 md:p-8">
                <p className="font-display text-2xl leading-[1.45] tracking-[-0.02em] text-white md:text-3xl">
                  &quot;Lasting school improvement is not achieved through
                  isolated initiatives. It is built through strong leadership,
                  clear systems, professional accountability, and a shared
                  commitment to excellence.&quot;
                </p>
                <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.18em] text-gold">
                  Dr. Sunil Kumawat
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="relative overflow-hidden rounded-3xl bg-primary p-10 text-center md:p-16">
              <div className="absolute top-0 right-0 h-64 w-64 -translate-y-1/2 translate-x-1/3 rounded-full bg-gold/10 blur-3xl" />
              <div className="relative z-10 mx-auto max-w-2xl">
                <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
                  Let&apos;s Build Stronger Schools Together
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-gold md:text-[16px]">
                  Whether you are strengthening leadership, preparing for
                  accreditation, improving academic systems, or planning your
                  next phase of growth, Sapphire Leadership &amp; Advisor is
                  ready to support your journey.
                </p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    href="/consultation"
                    className="rounded-full bg-gold px-10 py-5 text-[11px] font-semibold tracking-tight text-ink"
                  >
                    Schedule a Consultation
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-full border border-white/20 bg-white/10 px-10 py-5 text-[11px] font-semibold tracking-tight text-white"
                  >
                    Contact Sapphire Leadership &amp; Advisor
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
