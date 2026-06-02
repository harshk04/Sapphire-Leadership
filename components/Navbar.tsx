'use client';

import { cn } from '@/lib/cn';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from 'react';

const navItems = [
  { label: 'For Schools', href: '/code' },
  { label: 'For Teachers', href: '/teacherspage' },
  { label: 'For Students', href: '/studentpage' },
  { label: 'About Us', href: '/aboutus' },
  { label: 'Resources', href: '/resourcespage' },
  { label: 'Contact', href: '/contact' },
];

const schoolMenuColumns = [
  {
    heading: 'Strategic Consulting',
    items: [
      { label: 'Governance Excellence', href: '/code' },
      { label: 'Financial Optimization', href: '/code' },
      { label: 'Crisis Management', href: '/code' },
    ],
  },
  {
    heading: 'School Growth',
    items: [
      { label: 'Enrollment Strategy', href: '/code' },
      { label: 'Brand Identity', href: '/code' },
      { label: 'Digital Transformation', href: '/code' },
    ],
  },
];

const studentMenu = {
  heading: 'Success Programs',
  items: [
    { label: 'Mentorship', href: '/studentpage' },
    { label: 'University Admissions', href: '/studentpage' },
    { label: 'Career Advisory', href: '/studentpage' },
  ],
};

const teacherMenu = {
  heading: 'Professional Development',
  items: [
    { label: 'Pedagogy Workshops', href: '/teacherspage' },
    { label: 'Leadership Pathways', href: '/teacherspage' },
    { label: 'Wellbeing Programs', href: '/teacherspage' },
  ],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<
    'schools' | 'teachers' | 'students' | null
  >(null);

  useEffect(() => {
    let rafId = 0;

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12);
        rafId = 0;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'pointer-events-none absolute inset-x-0 top-0 transition-opacity duration-700 ease-in-out',
          scrolled ? 'opacity-0' : 'opacity-100'
        )}
      >
        <div className="px-5 py-5 md:px-10 md:py-6">
          <NavFrame
            scrolled={false}
            open={open}
            setOpen={setOpen}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />
        </div>
      </div>

      <div
        className={cn(
          'fixed left-1/2 top-4 z-50 w-full max-w-[980px] -translate-x-1/2 px-3 transition-all duration-700 ease-in-out md:px-5',
          scrolled
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none -translate-y-1 scale-[0.985] opacity-0'
        )}
      >
        <NavFrame
          scrolled
          open={open}
          setOpen={setOpen}
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
        />
      </div>

      {open ? <MobileMenu setOpen={setOpen} /> : null}
    </header>
  );
}

function NavFrame({
  scrolled,
  open,
  setOpen,
  activeDropdown,
  setActiveDropdown,
}: {
  scrolled: boolean;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  activeDropdown: 'schools' | 'teachers' | 'students' | null;
  setActiveDropdown: Dispatch<SetStateAction<'schools' | 'teachers' | 'students' | null>>;
}) {
  return (
    <div
      className={cn(
        'transition-all duration-700 ease-in-out',
        scrolled
          ? 'rounded-[28px] border border-slate-200/70 bg-white/95 px-3 py-2 shadow-[0_12px_30px_rgba(15,23,42,0.12)] backdrop-blur-xl md:px-5'
          : 'w-full bg-transparent px-0 py-0'
      )}
    >
      <div className="grid items-center gap-4 md:grid-cols-[auto_1fr_auto]">
        <Link
          href="/"
          className={cn(
            'flex items-center transition-all duration-700 ease-in-out',
            scrolled ? 'text-primary' : 'text-white'
          )}
          aria-label="Sapphire Leadership & Advisory"
        >
          <span className="hidden md:block">
            <Image
              src={scrolled ? '/images/favicon.png' : '/images/horizontallogo.png'}
              alt="Sapphire Leadership & Advisory"
              width={scrolled ? 36 : 260}
              height={scrolled ? 36 : 58}
              priority
              className={cn(
                'object-contain transition-all duration-700 ease-in-out',
                scrolled ? 'h-9 w-9' : 'h-auto w-[210px] md:w-[230px]'
              )}
            />
          </span>
          <span className="block md:hidden">
            <Image
              src="/images/verticallogo.png"
              alt="Sapphire Leadership & Advisory"
              width={56}
              height={56}
              priority
              className="h-11 w-11 object-contain"
            />
          </span>
        </Link>

        <nav
          className={cn(
            'hidden items-center justify-center gap-7 text-[11px] font-medium transition-colors duration-700 md:flex',
            scrolled ? 'text-ink-muted' : 'text-white/88'
          )}
        >
          <Dropdown
            label="For Schools"
            openKey="schools"
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            widthClass="w-[600px]"
          >
            <div className="grid grid-cols-2 gap-6 rounded-lg border border-surface-variant bg-white p-6 shadow-[0_20px_60px_rgba(7,27,58,0.12)]">
              {schoolMenuColumns.map((column) => (
                <div key={column.heading} className="space-y-4">
                  <h3 className="text-sm font-semibold text-primary">
                    {column.heading}
                  </h3>
                  <ul className="space-y-2 text-sm text-ink-muted">
                    {column.items.map((item) => (
                      <li key={item.label}>
                        <Link href={item.href} className="block transition-colors hover:text-primary">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Dropdown>

          <Dropdown
            label="For Teachers"
            openKey="teachers"
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            widthClass="w-[400px]"
          >
            <div className="rounded-lg border border-surface-variant bg-white p-6 shadow-[0_20px_60px_rgba(7,27,58,0.12)]">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-primary">
                  {teacherMenu.heading}
                </h3>
                <ul className="space-y-2 text-sm text-ink-muted">
                  {teacherMenu.items.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="block transition-colors hover:text-primary">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/teacherspage"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-[11px] font-semibold tracking-tight text-white transition-colors hover:bg-primary-2"
                >
                  View All
                </Link>
              </div>
            </div>
          </Dropdown>

          <Dropdown
            label="For Students"
            openKey="students"
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            widthClass="w-[400px]"
          >
            <div className="rounded-lg border border-surface-variant bg-white p-6 shadow-[0_20px_60px_rgba(7,27,58,0.12)]">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-primary">
                  {studentMenu.heading}
                </h3>
                <ul className="space-y-2 text-sm text-ink-muted">
                  {studentMenu.items.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="block transition-colors hover:text-primary">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Dropdown>

          {navItems.slice(3).map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Link
            href="/consultation"
            className={cn(
              'hidden rounded-full px-4 py-2 text-[11px] font-semibold tracking-tight transition-all duration-700 md:inline-flex',
              scrolled
                ? 'bg-primary text-white shadow-sm shadow-blue-950/10 hover:bg-primary-2'
                : 'border border-white/20 bg-white/12 text-white backdrop-blur-md hover:bg-white/20'
            )}
          >
            Book Consultation
          </Link>

          <button
            type="button"
            className={cn(
              'inline-flex h-9 w-9 items-center justify-center rounded-full border md:hidden',
              scrolled
                ? 'border-surface-variant bg-white text-primary'
                : 'border-white/20 bg-white/10 text-white backdrop-blur-md'
            )}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
}

function Dropdown({
  label,
  openKey,
  activeDropdown,
  setActiveDropdown,
  widthClass,
  children,
}: {
  label: string;
  openKey: 'schools' | 'teachers' | 'students';
  activeDropdown: 'schools' | 'teachers' | 'students' | null;
  setActiveDropdown: Dispatch<SetStateAction<'schools' | 'teachers' | 'students' | null>>;
  widthClass: string;
  children: ReactNode;
}) {
  return (
    <div
      className="relative py-3"
      onMouseEnter={() => setActiveDropdown(openKey)}
      onMouseLeave={() => setActiveDropdown(null)}
      onFocusCapture={() => setActiveDropdown(openKey)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setActiveDropdown(null);
        }
      }}
    >
      <button
        type="button"
        className="flex items-center gap-1 transition-colors hover:text-primary"
        aria-expanded={activeDropdown === openKey}
      >
        {label}
        <span aria-hidden="true" className="text-[10px] leading-none">
          ▾
        </span>
      </button>

      <div
        className={cn(
          'absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 transition-all duration-500 ease-out',
          widthClass,
          activeDropdown === openKey
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2 opacity-0'
        )}
      >
        {children}
      </div>
    </div>
  );
}

function MobileMenu({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="fixed inset-x-0 top-[72px] z-40 md:hidden">
      <div className="mx-4 rounded-2xl border border-surface-variant bg-white/95 px-5 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.14)] backdrop-blur-xl">
        <div className="grid gap-2 text-sm font-medium text-ink-muted">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-xl px-3 py-2 hover:bg-surface-low hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/consultation"
            className="mt-1 inline-flex items-center justify-center rounded-xl bg-primary px-3 py-3 text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
