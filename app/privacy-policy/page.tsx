import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import LegalPageShell from '@/components/LegalPageShell';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Sapphire Leadership Advisor.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />
      <LegalPageShell
        eyebrow="Sapphire Leadership Advisor"
        title="Privacy Policy"
        description="This policy explains how Sapphire Leadership Advisor collects, uses, stores, and protects information shared through our website and consultation channels."
        updatedAt="June 8, 2026"
        sections={[
          {
            title: 'Information We Collect',
            paragraphs: [
              'We may collect your name, email address, phone number, school or organization name, message content, and any other details you choose to share through our forms or email correspondence.',
              'We also collect limited technical data, such as browser type, device information, pages visited, and general usage patterns, to help us maintain and improve the website.',
            ],
            bullets: [
              'Contact details shared during an enquiry',
              'Consultation notes and service preferences',
              'Basic analytics and site-performance signals',
              'Messages submitted through website forms',
            ],
          },
          {
            title: 'How We Use Information',
            paragraphs: [
              'We use your information to respond to enquiries, schedule consultations, deliver advisory support, improve our content, and keep the website functioning smoothly.',
              'We may also use the information to send relevant updates or follow-up messages related to a request you have made.',
            ],
            note:
              'We do not sell personal information, and we do not use your data for unrelated marketing purposes without a legitimate reason.',
          },
          {
            title: 'Sharing and Storage',
            paragraphs: [
              'Information may be shared with trusted service providers who help us operate the website, maintain records, or handle communications. These providers are expected to use the data only for the purpose we assign.',
              'We keep information only for as long as necessary for the purpose it was collected or for legal, accounting, or business reasons.',
            ],
          },
          {
            title: 'Security and Your Choices',
            paragraphs: [
              'We use reasonable technical and organizational safeguards to help protect the information we receive. However, no internet-based system is completely secure, and absolute protection cannot be guaranteed.',
              'Where applicable, you may request access to, correction of, or deletion of your information. You can also manage cookies through your browser settings.',
            ],
            note:
              'If you have privacy concerns, please contact us through the contact page and include enough detail for us to identify the relevant request.',
          },
        ]}
        sidebarTitle="At a Glance"
        sidebarItems={[
          { label: 'Last updated', value: 'June 8, 2026' },
          { label: 'Coverage', value: 'Website, email, and consultation forms' },
          { label: 'Data subject', value: 'Schools, educators, and visitors' },
        ]}
        calloutTitle="Questions about privacy?"
        calloutDescription="Our team can explain how your information is handled and how it is used for consultation and advisory support."
        calloutHref="/contact"
        calloutLabel="Contact Us"
        secondaryHref="/consultation"
        secondaryLabel="Book Consultation"
      />
      <Footer />
    </div>
  );
}
