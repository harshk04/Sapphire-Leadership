import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarDays, Clock3, MessageSquare } from 'lucide-react';
import { articles, type ResourceArticle } from '@/lib/resources';
import ResourceShareButtons from '@/components/ResourceShareButtons';

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function ResourceArticlePage({
  article,
  path,
}: {
  article: ResourceArticle;
  path: string;
}) {
  const relatedArticles = article.relatedSlugs
    .map((slug) => articles.find((item) => item.slug === slug))
    .filter((item): item is ResourceArticle => Boolean(item));

  return (
    <>
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
                  src={article.image}
                  alt={article.title}
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
              {article.category.toUpperCase()}
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
              {article.title}
            </h1>
            <p className="mt-4 text-[14px] font-medium tracking-wide text-white/80 md:text-[16px]">
              {article.publishDate} • {article.readingTime}
            </p>
            <p className="mt-6 max-w-2xl text-[14px] leading-7 text-white md:text-[16px]">
              {article.excerpt}
            </p>
            <p className="mt-4 max-w-2xl text-[14px] leading-7 text-white/88 md:text-[16px]">
              Educational insights, practical leadership perspectives, and
              school improvement ideas from Sapphire Leadership &amp; Advisor.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/consultation"
                className="rounded-full bg-gold px-6 py-3 text-[11px] font-semibold tracking-tight text-ink"
              >
                Book a Consultation
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[11px] font-semibold tracking-tight text-white"
              >
                Browse Articles <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4 text-[12px] text-white/75">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2">
                <CalendarDays className="h-4 w-4 text-gold" />
                <span>{article.publishDate}</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2">
                <Clock3 className="h-4 w-4 text-gold" />
                <span>{article.readingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-container gap-10 px-5 md:px-10 lg:grid-cols-[0.16fr_1fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-[24px] border border-surface-variant/45 bg-white p-5 shadow-sm">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                    Table of Contents
                  </div>
                  <ul className="mt-4 space-y-3">
                    {article.toc.map((item) => (
                      <li key={item}>
                        <a
                          href={`#${slugify(item)}`}
                          className="text-[13px] leading-6 text-ink-muted transition-colors hover:text-primary"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            <div className="space-y-10">
              <div className="rounded-[28px] border border-surface-variant/45 bg-white p-7 shadow-sm md:p-8">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                      Author
                    </div>
                    <h2 className="mt-1 font-display text-2xl font-semibold text-primary">
                      {article.authorName}
                    </h2>
                    <p className="text-[13px] text-ink-muted">{article.authorRole}</p>
                  </div>
                </div>
                <div className="mt-6 border-t border-surface-variant/45 pt-6">
                  <ResourceShareButtons title={article.title} path={path} />
                </div>
              </div>

              <div className="prose-block">
                {article.sections.map((section) => {
                  if (section.type === 'intro' || section.type === 'paragraph' || section.type === 'conclusion') {
                    const anchor =
                      section.type === 'intro'
                        ? article.toc[0]
                        : section.type === 'conclusion'
                          ? article.toc[article.toc.length - 1]
                          : undefined;
                    return (
                      <section
                        key={section.content[0]}
                        id={anchor ? slugify(anchor) : undefined}
                        className="scroll-mt-28 space-y-4"
                      >
                        {section.content.map((paragraph) => (
                          <p key={paragraph} className="text-[15px] leading-8 text-ink-muted md:text-[16px]">
                            {paragraph}
                          </p>
                        ))}
                      </section>
                    );
                  }

                  if (section.type === 'heading') {
                    return (
                      <section key={section.title} id={slugify(section.title)} className="scroll-mt-28 pt-8 md:pt-10">
                        <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-primary md:text-[34px]">
                          {section.title}
                        </h2>
                        <div className="mt-4 space-y-4">
                          {section.content.map((paragraph) => (
                            <p key={paragraph} className="text-[15px] leading-8 text-ink-muted md:text-[16px]">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </section>
                    );
                  }

                  const bulletSection = section as Extract<typeof section, { type: 'bullets' }>;

                  return (
                    <section key={bulletSection.title} id={slugify(bulletSection.title)} className="scroll-mt-28 pt-8 md:pt-10">
                      <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-primary md:text-[34px]">
                        {bulletSection.title}
                      </h2>
                      {bulletSection.intro ? (
                        <p className="mt-4 text-[15px] leading-8 text-ink-muted md:text-[16px]">
                          {bulletSection.intro}
                        </p>
                      ) : null}
                      <ul className="mt-5 space-y-3">
                        {bulletSection.items.map((item) => (
                          <li key={item} className="flex gap-3 text-[15px] leading-8 text-ink-muted md:text-[16px]">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  );
                })}
              </div>

              <section className="rounded-[28px] border border-surface-variant/45 bg-white p-7 shadow-sm md:p-8">
                <h3 className="font-display text-2xl font-semibold text-primary md:text-3xl">
                  Related Articles
                </h3>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {relatedArticles.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/resources/${item.slug}`}
                      className="group rounded-[24px] border border-surface-variant/45 bg-surface-low p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft"
                    >
                      <div className="overflow-hidden rounded-[18px]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={700}
                          height={420}
                          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                        {item.category}
                      </div>
                      <h4 className="mt-2 font-display text-[20px] font-semibold text-primary">
                        {item.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </section>

              <section className="rounded-[28px] border border-surface-variant/45 bg-[linear-gradient(180deg,#f4f7fb_0%,#ffffff_100%)] p-7 shadow-sm md:p-8">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                  About the Author
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold text-primary">
                  {article.authorName}
                </h3>
                <p className="mt-4 max-w-3xl text-[15px] leading-8 text-ink-muted md:text-[16px]">
                  {article.authorBio}
                </p>
              </section>

              <section className="relative overflow-hidden rounded-[32px] bg-primary p-8 text-center text-white md:p-12">
                <div className="absolute top-0 right-0 h-64 w-64 -translate-y-1/2 translate-x-1/3 rounded-full bg-gold/10 blur-3xl" />
                <div className="relative z-10 mx-auto max-w-2xl">
                  <h3 className="font-display text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
                    Ready to discuss your school&apos;s next step?
                  </h3>
                  <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-primary-fixed/80 md:text-[16px]">
                    Sapphire Leadership &amp; Advisor works with school leaders,
                    founders, and academic teams seeking practical improvement,
                    leadership clarity, and stronger outcomes.
                  </p>
                  <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                    <Link
                      href="/consultation"
                      className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-[11px] font-semibold tracking-tight text-ink"
                    >
                      Book a Consultation
                    </Link>
                    <Link
                      href="/resources"
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-[11px] font-semibold tracking-tight text-white"
                    >
                      Browse Articles
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
      </section>
    </main>
    </>
  );
}
