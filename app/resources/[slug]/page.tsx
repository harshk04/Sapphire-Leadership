import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResourceArticlePage from '@/components/ResourceArticlePage';
import { articles, getResourceArticle } from '@/lib/resources';

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getResourceArticle(slug);
  if (!article) return {};

  return {
    title: `${article.title} | Sapphire Leadership & Advisor`,
    description: article.metaDescription,
    alternates: {
      canonical: `/resources/${article.slug}`,
    },
  };
}

export default async function ResourceArticleRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getResourceArticle(slug);
  if (!article) notFound();

  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />
      <ResourceArticlePage article={article} path={`/resources/${article.slug}`} />
      <Footer />
    </div>
  );
}
