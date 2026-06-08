import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {
  BriefcaseBusiness,
  FileText,
  Handshake,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
} from 'lucide-react';
import ContactInquiryForm from '@/components/ContactInquiryForm';

export const metadata: Metadata = {
  title: 'Contact Sapphire Leadership Advisor',
  description:
    'Contact Sapphire Leadership Advisor at our Jaipur office for school improvement, leadership development, advisory support, and partnership inquiries.',
  alternates: {
    canonical: '/contact',
  },
};

type ContactCard =
  | {
      city: string;
      tag: string;
      address: string;
      links: Array<{ label: string; href: string; value: string }>;
    }
  | {
      city: string;
      tag: string;
      address: string;
      details: string[];
      certificateHref?: string;
    };

const contactCards: ContactCard[] = [
  {
    city: 'Contact Details',
    tag: '',
    address:
      'A-11 (First Floor), Mall Road, Sector-1, Vidhyadhar Nagar, Jaipur, Rajasthan-302039',
    links: [
      { label: 'Call', href: 'tel:+919413764999', value: '+91-9413764999' },
      {
        label: 'Mail',
        href: 'mailto:info@sapphireleadership.io',
        value: 'info@sapphireleadership.io',
      },
    ],
  },
  {
    city: 'Company Details',
    tag: '',
    address:
      'SAPPHIRE LEADERSHIP ADVISOR\nOffice: A-lI First Floor, Mall Road, Sector I, Vidhyadhar Nagar Jaipur, Rajasthan 302039',
    details: [
      'MSME: UDYAM-RJ-17-0643701',
      'GST: 08AHXPK9737A2ZT',
    ],
    certificateHref: '/images/Udyam%20Registration%20Certificate.pdf',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-primary py-24 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(197,160,89,0.2),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_35%)]" />
          <div className="relative mx-auto max-w-container px-5 text-center md:px-10">
            <span className="inline-flex rounded-full bg-gold px-4 py-1 text-[11px] font-semibold tracking-[0.14em] text-ink">
              CONNECT WITH US
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
              Connect with Sapphire Leadership Advisor.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-white/80 md:text-[16px]">
              Reach us for school improvement, leadership development, strategic
              advisory, and partnership conversations from our Jaipur office.
            </p>
          </div>
        </section>

        <section className="-mt-10 py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="grid gap-6 md:grid-cols-2">
              {contactCards.map((office) => (
                <article key={office.city} className="glass rounded-xl p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <MapPin size={22} />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {office.city}
                  </h2>
                  {office.tag ? (
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                      {office.tag}
                    </p>
                  ) : null}
                  <p className="mt-4 whitespace-pre-line text-[13px] leading-6 text-ink-muted">
                    {office.address}
                  </p>
                  {'links' in office ? (
                    <div className="mt-5 space-y-2 border-t border-surface-variant pt-5 text-[13px]">
                      {office.links.map((item) => (
                        <a
                          key={item.label}
                          className="flex items-center gap-2 text-primary"
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                        >
                          {item.label === 'Call' ? <Phone size={16} /> : <Mail size={16} />}
                          <span>{item.value}</span>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-5 space-y-2 border-t border-surface-variant pt-5 text-[13px]">
                      {office.details.map((item) => (
                        <p key={item} className="flex items-center gap-2 text-ink-muted">
                          <ShieldCheck size={16} className="shrink-0 text-primary" />
                          <span>{item}</span>
                        </p>
                      ))}
                      {'certificateHref' in office && office.certificateHref ? (
                        <Link
                          href={office.certificateHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-[12px] font-semibold text-white transition-colors hover:bg-primary-2"
                        >
                          View PDF
                        </Link>
                      ) : null}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-container gap-8 px-5 md:grid-cols-[1.25fr_0.75fr] md:px-10">
            <ContactInquiryForm />

            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWdfCKNkb-aXuovITGeoPOi-qhfjNUIB7abVutTx62uVOg5RmphK3RvQXbx8Ivd4yFPK3W_j3qsWuy_OI4R-VaR7_eCfAxFnW5DvqihSZC7Irdn5mEHnyscPnhixgCT0kv4fUChRSbfLWMJszKMvSQbgKGdr7drtJb4n1F9hjJdNbMmYq22j2OlibF2dXRro8yWkRyFjCuZroYJBdWeTPRumgtyk5Qwv-rYe78jGp0XnR0Un3kVin12AvN1YlXm_v3RIjHLYchmdCb"
                alt="Stylized world map"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 35vw, 100vw"
              />
              <div className="absolute inset-0 bg-navy/65" />
              <div className="relative z-10 flex h-full min-h-[520px] flex-col justify-end p-8 text-white md:p-10">
                <div className="grid gap-4 md:grid-cols-2">
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f6fa] py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="text-center">
              <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-[#174c97] md:text-4xl">
                Additional Channels
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-7 text-slate-600">
                Use these details for direct contact, business registration, and
                the official website.
              </p>
            </div>

            <div className="mt-12 grid gap-6 xl:grid-cols-3">
              {additionalChannels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <article
                    key={channel.title}
                    className="rounded-[28px] border border-slate-200 bg-white px-8 py-12 text-center shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-[#c8a24d]">
                      <Icon size={34} strokeWidth={2.2} />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-semibold text-[#174c97]">
                      {channel.title}
                    </h3>
                    <p className="mx-auto mt-4 max-w-sm text-[15px] leading-7 text-slate-700">
                      {channel.description}
                    </p>
                    <a
                      href={channel.href}
                      className="mt-8 inline-flex items-center justify-center font-semibold text-[#174c97] hover:underline"
                    >
                      {channel.cta}
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

const additionalChannels = [
  {
    icon: FileText,
    title: 'Call Us',
    description: '+91-9413764999 for direct contact and quick coordination.',
    cta: 'Call Now',
    href: 'tel:+919413764999',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Email Us',
    description: 'info@sapphireleadership.io for advisory, partnership, and inquiry responses.',
    cta: 'Send Email',
    href: 'mailto:info@sapphireleadership.io',
  },
  {
    icon: Handshake,
    title: 'MSME & GST',
    description: 'MSME: UDYAM-RJ-17-0643701 and GST: 08AHXPK9737A2ZT.',
    cta: 'Open Certificate',
    href: '/images/Udyam%20Registration%20Certificate.pdf',
  },
];
