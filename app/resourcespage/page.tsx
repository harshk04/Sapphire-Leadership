import type { Metadata } from 'next';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ArrowRight, Download, FileText, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resources, Whitepapers & Insights',
  description:
    'Explore insights, whitepapers, and strategic resources for schools, leaders, and families from Sapphire Leadership & Advisory.',
  alternates: {
    canonical: '/resourcespage',
  },
};

const articles = [
  {
    topic: 'Transformation',
    title: 'Digitizing elite education without losing institutional identity',
    description:
      'How leading schools are adopting AI, analytics, and digital workflows while keeping standards high.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDruThOkaYTLQ0yxVClELDC7MmUdqupmCQAer7dQF5d2sf1g13puxczSGNuNFzMhp-_kylxG_9DbTjzZapFLk149WE8b4NRn4NvomAg5VcIpa_B80inSGgh0zQs3f-43AF9xvfyDCQEsh6R-voGimnr4OXp6UkXO5QxDt5NACABcIwhzb_6EDNZY1bqoLmvz2pfA_fzb76gc5KxRlKcG6_76p32MBJ7soEDaVLRpcdkePnrvtQMnrSvPtP2Z0-6_CyuRqsvgvMyH7Xj',
  },
  {
    topic: 'Growth',
    title: 'Strategic mergers and affiliations in private education',
    description:
      'A clear-eyed view of the partnership models shaping the next wave of school growth.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAQd_JR_7EsZEGYlc_0PJtXH37T8qGlIgxyh_5NpvC743OIyRkDOY-GdkZMEdVtgx1WnqtWjp2fsj-7CUqt7wF1Etmg-gZT9q_TqvrJpJhR0Ld8GMhGcOhWCcePOczDXAxvzP24OxTdS6Y9jbUCM1dVhxj-F9xoNIfJRVNiBP2AUAAdYWVLqwe-vwYRbfETf278swnglAihpTAkawKh7O7pITCRW8_fRcy50JJnwZfjtQ3r-P5btmgdkam6NXWBP35DEi25ITf3bKrE',
  },
  {
    topic: 'Leadership',
    title: 'Why empathy is becoming a boardroom superpower',
    description:
      'Emotional intelligence is now a core part of institutional leadership, not a soft extra.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDR-Y8zpY59Ame2FVKwW-KrVAcqWbWU-PSJEz5fd0Mre933evBOgr3ezenCSjpdWkJU3jvDqxPxbNLuq1B0ITRiDUSe1p4mq0Wwg4d-cxHXNGMR-sB8OfDgMiiDA6ei7gSbYL3nA95iRKpSv0lfqAcHSvZDeQkiHfXjRXS7_v38pVy2SvD1koqBPU72l0xDafx8-KmosfnqZORelYSYGkVaO6flMGVMlCDqVfbE7tKWbbVvYVGUmHmx4lby2M49_uWXRWRDS5y_CFmH',
  },
];

const whitepapers = [
  {
    title: 'School Expansion Playbook',
    description: 'A concise framework for campus planning, affiliation, and launch readiness.',
  },
  {
    title: 'Leadership Pipeline Toolkit',
    description: 'A practical guide for developing next-generation school leaders.',
  },
  {
    title: 'Global Partnerships Brief',
    description: 'How to build sustainable collaborations across regions and systems.',
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCedSeNwjw-xAk1Sv7ZqKvO7Zwjzp_xf9DSfX4HwBbGhq2AXsMu_wfsaMozgJznDfQXp2bThhJfaV2IVBxiR-Dt42ORrIU51Z9RZ2qX0zrLln6o5rMUC-hmVoN1J91G9w6olohWX4d3eKka0PUhPlN7kTqVZQot7yj-B9B5Lv5OlmK1B7Hmh-dZGmT8HYLYRgcnaqyDtAKeibVY3bE3bcEXxdvme4onH7K5u7G0LP8dqt8bCOubtFm_QbZeUaDnFGOw7ZgD_bP7lvh"
              alt="Resources hero"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-primary/60 to-primary/20" />
          </div>

          <div className="relative mx-auto max-w-container px-5 md:px-10">
            <span className="inline-flex rounded-full bg-gold px-4 py-1 text-[11px] font-semibold tracking-[0.14em] text-ink">
              FEATURED INSIGHT
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
              Strategic resources for schools, leaders, and families.
            </h1>
            <p className="mt-5 max-w-2xl text-[14px] leading-7 text-white/80 md:text-[16px]">
              Thought leadership, whitepapers, and tactical insights from our
              global advisory team.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div className="max-w-2xl">
                <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[34px]">
                  Knowledge repository
                </h2>
                <p className="mt-3 text-[13px] leading-6 text-ink-muted md:text-[14px]">
                  Articles and insights from across the Sapphire network.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {articles.map((article) => (
                <article key={article.title} className="group">
                  <div className="overflow-hidden rounded-xl shadow-soft">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={1200}
                      height={900}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                    {article.topic}
                  </div>
                  <h3 className="mt-2 font-display text-[22px] font-semibold text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-6 text-ink-muted">
                    {article.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-low py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="max-w-2xl">
              <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[34px]">
                Strategic assets and whitepapers
              </h2>
              <p className="mt-3 text-[13px] leading-6 text-ink-muted md:text-[14px]">
                Downloadable frameworks for school leaders and advisory teams.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {whitepapers.map((paper) => (
                <article key={paper.title} className="glass rounded-xl p-7">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <FileText size={22} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary">
                    {paper.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-ink-muted">
                    {paper.description}
                  </p>
                  <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-[11px] font-semibold tracking-tight text-white">
                    Download PDF
                    <Download size={14} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

function LinkPill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2 text-[11px] font-semibold tracking-tight text-primary transition-colors hover:bg-primary/5"
    >
      {label}
      <Sparkles size={14} />
    </a>
  );
}
