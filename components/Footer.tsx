import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const siteSections = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/aboutus' },
      { label: 'Contact', href: '/contact' },
      { label: 'Book Consultation', href: '/consultation' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'For Schools', href: '/schools' },
      { label: 'For Teachers', href: '/teacherspage' },
      { label: 'For Students', href: '/studentpage' },
      { label: 'Resources', href: '/resources' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-surface-variant bg-white">
      <div className="mx-auto grid max-w-container gap-8 px-5 py-12 md:px-10 lg:grid-cols-[minmax(240px,1.1fr)_minmax(0,0.72fr)_minmax(0,0.72fr)_minmax(320px,1.25fr)] lg:gap-10">
        <div>
          <Link href="/" className="inline-flex" aria-label="Sapphire Leadership & Advisory">
            <span className="block md:hidden">
              <Image
                src="/images/verticallogo.png"
                alt="Sapphire Leadership & Advisory"
                width={88}
                height={88}
                className="h-20 w-20 object-contain"
              />
            </span>
            <span className="hidden md:block">
              <Image
                src="/images/horizontallogo-lightbg.png"
                alt="Sapphire Leadership & Advisory"
                width={260}
                height={58}
                className="h-auto w-[210px] object-contain"
              />
            </span>
          </Link>
          <p className="mt-3 max-w-[260px] text-[13px] leading-6 text-ink-muted">
            Empowering leaders and transforming education through strategic
            advisory, school improvement, and professional learning.
          </p>
        </div>

        <FooterCol key={siteSections[0].title} title={siteSections[0].title} links={siteSections[0].links} />
        <FooterCol key={siteSections[1].title} title={siteSections[1].title} links={siteSections[1].links} />

        <div className="space-y-3 rounded-[20px] border border-surface-variant/45 bg-surface-low p-5">
          <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary whitespace-nowrap">
            Subscribe to Newsletter
          </div>
          <p className="text-[12px] leading-6 text-ink-muted">
            A concise monthly brief for executives and board members on the
            intersection of technology, finance, and pedagogy.
          </p>
          <div className="flex items-center gap-2 rounded-full border border-surface-variant bg-white p-2">
            <input
              placeholder="professional@institution.edu"
              className="h-11 min-w-0 flex-1 rounded-full border border-surface-variant bg-white px-4 text-[13px] text-slate-900 placeholder:text-slate-400 outline-none"
            />
            <button className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-[#d5a94d] px-4 text-[12px] font-semibold text-[#0c2f68] transition-colors hover:bg-[#e0b85c]">
              Subscribe
              <ArrowRight size={15} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-surface-variant">
        <div className="mx-auto flex max-w-container flex-col gap-4 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="text-[12px] text-ink-muted">
            © {new Date().getFullYear()} Sapphire Leadership &amp; Advisory. All
            rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] text-ink-muted md:justify-end">
            <Link href="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="hover:text-primary">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
  </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string } | string>;
}) {
  return (
    <div className="space-y-3">
      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
        {title}
      </div>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={typeof l === 'string' ? l : l.label}>
            <Link
              href={typeof l === 'string' ? '/' : l.href}
              className="inline-block text-[13px] text-ink-muted transition-transform hover:translate-x-0.5 hover:text-primary"
            >
              {typeof l === 'string' ? l : l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
