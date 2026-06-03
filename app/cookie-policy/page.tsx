import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie policy for Sapphire Leadership & Advisory.',
  alternates: {
    canonical: '/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />
      <main className="mx-auto max-w-container px-5 py-24 md:px-10 md:py-32">
        <h1 className="font-display text-4xl font-semibold tracking-[-0.03em] text-primary md:text-6xl">
          Cookie Policy
        </h1>
        <div className="prose prose-slate mt-8 max-w-3xl">
          <p>
            We may use cookies and similar technologies to understand traffic,
            improve user experience, and support analytics.
          </p>
          <p>
            You can manage cookies through your browser settings.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
