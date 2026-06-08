import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {
  ArrowRight,
  BookOpenText,
  BrainCircuit,
  CalendarDays,
  Clock3,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { featuredArticles } from '@/lib/resources';
import ResourceCardShareButton from '@/components/ResourceCardShareButton';

export const metadata: Metadata = {
  title: 'Resources, Insights & Thought Leadership',
  description:
    'Educational insights, practical leadership perspectives, and school improvement resources from Sapphire Leadership & Advisor.',
  alternates: {
    canonical: '/resources',
  },
};

const resourceThemes = [
  {
    icon: Users,
    title: 'School Leadership',
    description: 'Practical thinking for principals, founders, and leadership teams.',
  },
  {
    icon: ShieldCheck,
    title: 'School Improvement',
    description: 'Ideas and frameworks for consistent, sustainable progress.',
  },
  {
    icon: BrainCircuit,
    title: 'AI in Education',
    description: 'Responsible use of AI to support teaching, leadership, and quality.',
  },
];

const resourceTools = [
  {
    title: 'Implementation Guides',
    description: 'Straightforward guidance that turns strategy into action.',
  },
  {
    title: 'Leadership Perspectives',
    description: 'Founder-led insights drawn from real school contexts.',
  },
  {
    title: 'Practical Resources',
    description: 'Useful thinking for Indian and international school leaders.',
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />

      <main>
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="absolute inset-0">
            <Image
              src="/images/schoolconsultancy.jpeg"
              alt="School leaders discussing strategic improvement"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-primary/65 to-primary/20" />
          </div>

          <div className="relative mx-auto max-w-container px-5 md:px-10">
            <span className="inline-flex rounded-full bg-gold px-4 py-1 text-[11px] font-semibold tracking-[0.14em] text-ink">
              THOUGHT LEADERSHIP
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
              Educational insights for school leaders, educators, and institutions.
            </h1>
            <p className="mt-5 max-w-2xl text-[14px] leading-7 text-white/80 md:text-[16px]">
              Explore practical articles, leadership perspectives, implementation
              guides, and school improvement resources designed to support
              sustainable educational growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#featured-insights"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-[11px] font-semibold tracking-wide text-ink transition-transform hover:-translate-y-0.5"
              >
                Browse Articles
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </section>

        <section id="featured-insights" className="py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="max-w-2xl">
              <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[34px]">
                Featured Insights
              </h2>
              <p className="mt-3 text-[13px] leading-6 text-ink-muted md:text-[14px]">
                Practical ideas, leadership perspectives, and educational
                strategies from Sapphire Leadership &amp; Advisor.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {featuredArticles.map((article) => (
                <article
                  key={article.slug}
                  className="group overflow-hidden rounded-[28px] border border-surface-variant/45 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="relative h-[220px] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 30vw, 100vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                      <span>{article.category}</span>
                      <span className="text-ink-muted">•</span>
                      <span className="inline-flex items-center gap-1 text-ink-muted">
                        <Clock3 className="h-3.5 w-3.5" />
                        {article.readingTime}
                      </span>
                    </div>
                    <div className="mt-3 inline-flex items-center gap-1 text-[12px] text-ink-muted">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {article.publishDate}
                    </div>
                    <h3 className="mt-4 font-display text-[22px] font-semibold leading-tight text-primary">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-6 text-ink-muted">
                      {article.excerpt}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/resources/${article.slug}`}
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-[11px] font-semibold tracking-tight text-white"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <ResourceCardShareButton slug={article.slug} title={article.title} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-low py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-start">
              <div>
                <div className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                  What you will find
                </div>
                <h2 className="mt-5 font-display text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[34px]">
                  Insights shaped for real school leadership.
                </h2>
                <p className="mt-4 max-w-2xl text-[13px] leading-6 text-ink-muted md:text-[14px]">
                  This hub is designed for leaders who want more than generic
                  commentary. Each piece reflects practical school realities,
                  leadership decision-making, and the kind of improvement work
                  that can be applied in Indian and international school
                  settings.
                </p>
                <div className="mt-8 grid gap-5 md:grid-cols-3">
                  {resourceThemes.map((item) => (
                    <article key={item.title} className="rounded-[24px] border border-surface-variant/45 bg-white p-6 shadow-sm">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-[18px] font-semibold text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-ink-muted">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] border border-primary/10 bg-navy p-7 text-white shadow-[0_20px_60px_rgba(7,27,58,0.18)] md:p-8">
                <div className="flex items-center gap-3 text-gold">
                  <BookOpenText className="h-5 w-5" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                    Resource formats
                  </span>
                </div>
                <div className="mt-6 grid gap-3">
                  {resourceTools.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[18px] border border-white/10 bg-white/8 px-4 py-4 text-[13px] leading-6 text-white/88 backdrop-blur-sm"
                    >
                      <div className="font-semibold text-white">{item.title}</div>
                      <div className="mt-1 text-white/78">{item.description}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-7 rounded-[22px] bg-white/8 p-5 backdrop-blur-sm">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                    Engagement style
                  </div>
                  <p className="mt-2 text-[13px] leading-6 text-white/76">
                    Founder-led, evidence-informed, and grounded in the
                    realities of school leadership.
                  </p>
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
