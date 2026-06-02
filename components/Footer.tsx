import Image from 'next/image';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-surface-variant bg-white">
      <div className="mx-auto grid max-w-container gap-10 px-5 py-12 md:grid-cols-4 md:px-10">
        <div className="md:col-span-1">
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

        <FooterCol
          title="Solutions"
          links={[
            { label: 'Consultancy', href: '/consultation' },
            { label: 'Teacher Training', href: '/teacherspage' },
            { label: 'Student Success', href: '/studentpage' },
          ]}
        />
        <FooterCol
          title="Company"
          links={[
            { label: 'About', href: '/aboutus' },
            { label: 'Insights', href: '/resourcespage' },
            { label: 'Contact', href: '/contact' },
          ]}
        />
        <FooterCol title="Legal" links={['Privacy Policy', 'Terms of Service']} />
      </div>

      <div className="border-t border-surface-variant">
        <div className="mx-auto flex max-w-container flex-col gap-4 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="text-[12px] text-ink-muted">
            © {new Date().getFullYear()} Sapphire Leadership &amp; Advisory. All
            rights reserved.
          </div>
          <div className="flex items-center gap-4 text-ink-muted">
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-primary"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-primary"
            >
              <Facebook className="h-4 w-4" />
            </a>
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
            {typeof l === 'string' ? (
              <a
                href="#"
                className="inline-block text-[13px] text-ink-muted transition-transform hover:translate-x-0.5 hover:text-primary"
              >
                {l}
              </a>
            ) : (
              <Link
                href={l.href}
                className="inline-block text-[13px] text-ink-muted transition-transform hover:translate-x-0.5 hover:text-primary"
              >
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
