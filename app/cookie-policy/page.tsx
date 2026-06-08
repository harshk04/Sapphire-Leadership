import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import LegalPageShell from '@/components/LegalPageShell';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie policy for Sapphire Leadership Advisor.',
  alternates: {
    canonical: '/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />
      <LegalPageShell
        eyebrow="Sapphire Leadership Advisor"
        title="Cookie Policy"
        description="This policy explains how Sapphire Leadership Advisor uses cookies and similar technologies to support site performance, analytics, and user experience."
        updatedAt="June 8, 2026"
        sections={[
          {
            title: 'What Cookies Do',
            paragraphs: [
              'Cookies help the website function properly, remember certain settings, and understand how visitors move through the pages.',
              'They also allow us to measure which pages are most useful so we can improve navigation, content, and performance.',
            ],
            bullets: [
              'Essential cookies for core functionality',
              'Analytics cookies for usage insights',
              'Preference cookies for remembered settings',
              'Third-party cookies from embedded tools',
            ],
          },
          {
            title: 'How We Use Cookies',
            paragraphs: [
              'We may use cookies to keep the website stable, analyze traffic patterns, and make the experience easier to use across devices.',
              'Cookies may also help us identify technical issues and understand which sections attract the most interest.',
            ],
          },
          {
            title: 'Managing Your Preferences',
            paragraphs: [
              'You can control or delete cookies through your browser settings at any time. If you disable certain cookies, some features may not work as intended.',
              'Browser controls vary by device and browser, so you may need to review your settings if you want to limit analytics or preference storage.',
            ],
            note:
              'Because we use both essential and performance-related cookies, turning them all off may reduce some website functionality.',
          },
          {
            title: 'Third-Party Services',
            paragraphs: [
              'Some embedded services, such as analytics tools or media hosts, may place their own cookies or use similar technologies according to their own policies.',
              'We recommend reviewing the relevant third-party privacy notices if you want to understand how those providers use data.',
            ],
            note:
              'If you have questions about the technologies used on this site, please contact us through the contact page.',
          },
        ]}
        sidebarTitle="At a Glance"
        sidebarItems={[
          { label: 'Primary use', value: 'Site performance and analytics' },
          { label: 'User control', value: 'Manage through browser preferences' },
          { label: 'Support', value: 'Contact page for questions' },
        ]}
        calloutTitle="Want help managing settings?"
        calloutDescription="If you are unsure how cookies affect the site, we can help explain the practical impact in simple terms."
        calloutHref="/contact"
        calloutLabel="Contact Us"
        secondaryHref="/consultation"
        secondaryLabel="Explore Services"
      />
      <Footer />
    </div>
  );
}
