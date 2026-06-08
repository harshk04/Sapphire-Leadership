import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import LegalPageShell from '@/components/LegalPageShell';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Sapphire Leadership Advisor.',
  alternates: {
    canonical: '/terms-of-service',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />
      <LegalPageShell
        eyebrow="Sapphire Leadership Advisor"
        title="Terms of Service"
        description="These terms explain how you may use the Sapphire Leadership Advisor website, its content, and any consultation pathways linked from it."
        updatedAt="June 8, 2026"
        sections={[
          {
            title: 'Website Use',
            paragraphs: [
              'By accessing this website, you agree to use it lawfully, respectfully, and in a way that does not interfere with the experience of other visitors or the operation of the site.',
              'You may browse the site for information about our advisory, leadership, and professional learning services, but you must not attempt unauthorized access, disruption, scraping, or abuse of the website.',
            ],
            bullets: [
              'No misuse or disruption of website systems',
              'No unauthorized copying or automated extraction',
              'No fraudulent or misleading use of our contact tools',
              'No attempt to bypass security or access controls',
            ],
          },
          {
            title: 'Intellectual Property',
            paragraphs: [
              'All text, graphics, logos, layouts, and visual assets on this website are owned by Sapphire Leadership Advisor or used with permission.',
              'You may not reproduce, redistribute, modify, or commercially exploit the site content without prior written consent.',
            ],
            note:
              'If you want to reference or share our material, please contact us first so we can confirm what is permitted.',
          },
          {
            title: 'Consultations and Services',
            paragraphs: [
              'Any consultation request or discussion you make through the website is an expression of interest only. It does not create a binding service commitment unless we confirm it in writing.',
              'Where advisory work proceeds, it may be governed by a separate proposal, scope of work, or service agreement that sets out the specific terms of engagement.',
            ],
          },
          {
            title: 'Accuracy, Liability, and Updates',
            paragraphs: [
              'We aim to keep information current and accurate, but the website may contain general information that changes over time. We may update or remove content without notice.',
              'To the fullest extent permitted by law, Sapphire Leadership Advisor is not responsible for indirect or consequential losses arising from your use of the website.',
            ],
            note:
              'If you have questions about a specific service or engagement, please use the contact page for clarification before relying on the content alone.',
          },
        ]}
        sidebarTitle="At a Glance"
        sidebarItems={[
          { label: 'Scope', value: 'Website access and use' },
          { label: 'Content', value: 'General guidance and service information' },
          { label: 'Legal note', value: 'Separate agreements may apply' },
        ]}
        calloutTitle="Need a service agreement?"
        calloutDescription="If you are considering an advisory engagement, we can share the relevant scope, terms, and next steps."
        calloutHref="/contact"
        calloutLabel="Discuss Terms"
        secondaryHref="/consultation"
        secondaryLabel="Book Consultation"
      />
      <Footer />
    </div>
  );
}
