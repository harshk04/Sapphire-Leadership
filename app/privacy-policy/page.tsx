import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Sapphire Leadership & Advisory.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />
      <main className="mx-auto max-w-container px-5 py-24 md:px-10 md:py-32">
        <h1 className="font-display text-4xl font-semibold tracking-[-0.03em] text-primary md:text-6xl">
          Privacy Policy
        </h1>
        <div className="prose prose-slate mt-8 max-w-3xl">
          <p>
            This page describes how Sapphire Leadership &amp; Advisory
            collects, uses, and protects information shared through our website
            and consultation forms.
          </p>
          <p>
            We may collect contact details, inquiry details, and usage data to
            respond to requests, improve our services, and maintain website
            performance.
          </p>
          <p>
            If you contact us with questions about privacy or data handling,
            please use the contact page on this website.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
