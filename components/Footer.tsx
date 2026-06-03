import Image from 'next/image';
import Link from 'next/link';

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
      { label: 'Resources', href: '/resourcespage' },
    ],
  },
  {
    title: 'Resource Hub',
    links: [
      { label: 'Insights', href: '/resourcespage' },
      { label: 'Teacher Pathways', href: '/teacherspage' },
      { label: 'Student Programs', href: '/studentpage' },
      { label: 'School Advisory', href: '/schools' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-surface-variant bg-white">
      <div className="mx-auto grid max-w-container gap-10 px-5 py-12 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-3">
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
                src="/images/horizontallogo.png"
                alt="Sapphire Leadership & Advisory"
                width={260}
                height={58}
                className="h-auto w-[210px] object-contain"
              />
            </span>
          </Link>
          <p className="mt-3 text-[13px] leading-6 text-ink-muted">
            Defining the future of global leadership and academic excellence
            through strategic advisory.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
          {siteSections.map((section) => (
            <FooterCol key={section.title} title={section.title} links={section.links} />
          ))}
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
