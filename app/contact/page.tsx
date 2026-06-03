import type { Metadata } from 'next';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {
  BriefcaseBusiness,
  FileText,
  Handshake,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact School Consulting Advisors',
  description:
    'Contact Sapphire Leadership & Advisory to discuss school setup, governance, growth, leadership planning, and strategic advisory services.',
  alternates: {
    canonical: '/contact',
  },
};

const offices = [
  {
    city: 'London',
    tag: 'Global Headquarters',
    address: '25 Mayfair Square, London, W1J 8AJ, United Kingdom',
    email: 'london@sapphire.com',
    phone: '+44 (0) 20 7946 0123',
  },
  {
    city: 'Singapore',
    tag: 'APAC Regional Hub',
    address: '10 Marina Boulevard, Tower 2, Singapore 018983',
    email: 'apac@sapphire.com',
    phone: '+65 6789 4321',
  },
  {
    city: 'New York',
    tag: 'Americas Strategy Office',
    address: '300 Park Avenue, 15th Floor, New York, NY 10022, USA',
    email: 'americas@sapphire.com',
    phone: '+1 (212) 555-0198',
  },
  {
    city: 'Dubai',
    tag: 'MENA Advisory Centre',
    address: 'Gate Village 5, DIFC, Dubai, United Arab Emirates',
    email: 'mena@sapphire.com',
    phone: '+971 4 123 4567',
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
              GLOBAL PARTNERSHIP
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
              Get in touch with our advisory team.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-white/80 md:text-[16px]">
              We’re ready to support strategic growth, school setup, leadership
              planning, and student-focused advisory.
            </p>
          </div>
        </section>

        <section className="-mt-10 py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {offices.map((office) => (
                <article key={office.city} className="glass rounded-xl p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <MapPin size={22} />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {office.city}
                  </h2>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                    {office.tag}
                  </p>
                  <p className="mt-4 text-[13px] leading-6 text-ink-muted">
                    {office.address}
                  </p>
                  <div className="mt-5 space-y-2 border-t border-surface-variant pt-5 text-[13px]">
                    <a className="flex items-center gap-2 text-primary" href={`mailto:${office.email}`}>
                      <Mail size={16} />
                      {office.email}
                    </a>
                    <div className="flex items-center gap-2 text-ink-muted">
                      <Phone size={16} />
                      {office.phone}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-container gap-8 px-5 md:grid-cols-[0.95fr_1.05fr] md:px-10">
            <div className="glass rounded-2xl p-8 md:p-10">
              <span className="inline-flex rounded-full bg-gold/15 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                Send an inquiry
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.02em] text-primary">
                Tell us what you need.
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-ink-muted">
                Fill out the form and one of our senior partners will reply
                within 24 business hours.
              </p>

              <form className="mt-8 space-y-5">
                <Input label="Full Name" placeholder="e.g. Alistair Sterling" />
                <Input label="Organization" placeholder="e.g. Global Enterprises Inc." />
                <Input label="Email Address" placeholder="a.sterling@organization.com" type="email" />
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                    Message
                  </label>
                  <textarea
                    className="min-h-[120px] w-full rounded-xl border border-surface-variant bg-white/70 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="How can our advisory team assist you?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-[13px] font-semibold text-white hover:bg-primary-2"
                >
                  Confirm Inquiry
                  <Send size={16} />
                </button>
              </form>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWdfCKNkb-aXuovITGeoPOi-qhfjNUIB7abVutTx62uVOg5RmphK3RvQXbx8Ivd4yFPK3W_j3qsWuy_OI4R-VaR7_eCfAxFnW5DvqihSZC7Irdn5mEHnyscPnhixgCT0kv4fUChRSbfLWMJszKMvSQbgKGdr7drtJb4n1F9hjJdNbMmYq22j2OlibF2dXRro8yWkRyFjCuZroYJBdWeTPRumgtyk5Qwv-rYe78jGp0XnR0Un3kVin12AvN1YlXm_v3RIjHLYchmdCb"
                alt="Stylized world map"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-navy/65" />
              <div className="relative z-10 flex h-full min-h-[520px] flex-col justify-end p-8 text-white md:p-10">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="glass rounded-xl border-white/10 bg-white/10 p-4">
                    <div className="flex items-center gap-3">
                      <ShieldCheck size={18} className="text-gold" />
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
                          Network Status
                        </div>
                        <div className="mt-1 font-display text-lg font-semibold">
                          128+ Global Partners
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="glass rounded-xl border-white/10 bg-white/10 p-4">
                    <div className="flex items-center gap-3">
                      <Users size={18} className="text-gold" />
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
                          Global availability
                        </div>
                        <div className="mt-1 font-display text-lg font-semibold">
                          24/7 Concierge Service
                        </div>
                      </div>
                    </div>
                  </div>
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
                Looking for something specific? Our dedicated departments are
                here to help.
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
    title: 'Media Inquiries',
    description:
      'Contact our PR team for press kits, interviews, and official statements.',
    cta: 'Contact PR Team',
    href: '/contact',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Career Opportunities',
    description:
      'Join our elite network of advisors and transform the future of leadership.',
    cta: 'View Open Roles',
    href: '/contact',
  },
  {
    icon: Handshake,
    title: 'Partnership Programs',
    description:
      'Collaborate with us on global initiatives and strategic ventures.',
    cta: 'Explore Partnerships',
    href: '/contact',
  },
];

function Input({
  label,
  placeholder,
  type = 'text',
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-full border border-surface-variant bg-white/70 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
