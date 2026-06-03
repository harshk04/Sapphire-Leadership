import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Sapphire Leadership & Advisory.',
  alternates: {
    canonical: '/terms-of-service',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />
      <main className="mx-auto max-w-container px-5 py-24 md:px-10 md:py-32">
        <h1 className="font-display text-4xl font-semibold tracking-[-0.03em] text-primary md:text-6xl">
          Terms of Service
        </h1>
        <div className="prose prose-slate mt-8 max-w-3xl">
          <p>
            By using this website, you agree to use it responsibly and not
            attempt to disrupt, misuse, or interfere with the service.
          </p>
          <p>
            Content on this website is for informational purposes and may be
            updated without notice.
          </p>
          <p>
            For service-specific terms or agreements, please contact our team
            directly.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
