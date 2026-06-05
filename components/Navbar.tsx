'use client';

import { cn } from '@/lib/cn';
import { ArrowLeft, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from 'react';

const navItems = [
  { label: 'For Schools', href: '/schools' },
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
      { label: 'Governance Excellence', href: '/schools' },
      { label: 'Financial Optimization', href: '/schools' },
      { label: 'Crisis Management', href: '/schools' },
    ],
  },
  {
    heading: 'School Growth',
    items: [
      { label: 'Enrollment Strategy', href: '/schools' },
      { label: 'Brand Identity', href: '/schools' },
      { label: 'Digital Transformation', href: '/schools' },
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

const whiteLogoSrc = '/images/whitelogo.png';
const lightBgLogoSrc = '/images/horizontallogo-lightbg.png';
const lightBgFaviconSrc = '/images/favicon-lightbg.png';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileView, setMobileView] = useState<'main' | 'schools' | 'teachers' | 'students'>(
    'main'
  );
  const [activeDropdown, setActiveDropdown] = useState<
    'schools' | 'teachers' | 'students' | null
  >(null);
  const heroHeaderPages = new Set([
    '/aboutus',
    '/resourcespage',
    '/contact',
    '/consultation',
    '/schools',
  ]);
  const whiteHeroHeader = !scrolled && heroHeaderPages.has(pathname);

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
      if (e.key === 'Escape') {
        setOpen(false);
        setMobileView('main');
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) {
      setMobileView('main');
    }
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'pointer-events-auto absolute inset-x-0 top-0 transition-opacity duration-700 ease-in-out',
          scrolled ? 'opacity-0' : 'opacity-100'
        )}
      >
        <div className="px-5 py-5 md:px-10 md:py-6">
          <NavFrame
            scrolled={false}
            whiteHeroHeader={whiteHeroHeader}
            open={open}
            setOpen={setOpen}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />
        </div>
      </div>

      <div
        className={cn(
          'fixed left-1/2 top-4 z-50 w-full max-w-[860px] -translate-x-1/2 px-2 transition-all duration-700 ease-in-out md:px-4',
          scrolled
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none -translate-y-1 scale-[0.985] opacity-0'
        )}
      >
        <NavFrame
          scrolled
          whiteHeroHeader={whiteHeroHeader}
          open={open}
          setOpen={setOpen}
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
        />
      </div>

      {open ? (
        <MobileMenu
          mobileView={mobileView}
          setMobileView={setMobileView}
          setOpen={setOpen}
        />
      ) : null}
    </header>
  );
}

function NavFrame({
  scrolled,
  whiteHeroHeader,
  open,
  setOpen,
  activeDropdown,
  setActiveDropdown,
}: {
  scrolled: boolean;
  whiteHeroHeader: boolean;
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
          ? 'rounded-[28px] border border-slate-200/70 bg-white/95 px-2 py-2 shadow-[0_12px_30px_rgba(15,23,42,0.12)] backdrop-blur-xl md:px-4'
          : 'w-full bg-transparent px-0 py-0'
      )}
    >
      <div className="flex items-center justify-between gap-3 md:grid md:grid-cols-[auto_1fr_auto] md:gap-2">
        <Link
          href="/"
          className={cn(
            'flex shrink-0 items-center transition-all duration-700 ease-in-out',
            scrolled ? 'text-primary' : 'text-white'
          )}
          aria-label="Sapphire Leadership & Advisory"
        >
          <span className="hidden md:block">
            <Image
              src={
                scrolled
                  ? lightBgFaviconSrc
                  : whiteHeroHeader
                    ? whiteLogoSrc
                    : lightBgLogoSrc
              }
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
              src={whiteHeroHeader ? whiteLogoSrc : lightBgLogoSrc}
              alt="Sapphire Leadership & Advisory"
              width={180}
              height={42}
              priority
              className="h-auto w-[165px] max-w-[62vw] object-contain"
            />
          </span>
        </Link>

        <nav
          className={cn(
            'hidden items-center justify-center gap-7 transition-colors duration-700 md:flex',
            scrolled ? 'text-[11px]' : 'text-[13px]',
            scrolled
              ? 'font-medium text-ink-muted'
              : whiteHeroHeader
                ? 'font-bold text-white'
                : 'font-bold text-primary'
          )}
        >
          <Dropdown
            label="For Schools"
            openKey="schools"
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            widthClass="w-[600px]"
            whiteHeroHeader={whiteHeroHeader}
          >
            <div className="grid grid-cols-2 gap-6 rounded-lg border border-surface-variant bg-white p-6 shadow-[0_20px_60px_rgba(7,27,58,0.12)]">
              {schoolMenuColumns.map((column) => (
                <div key={column.heading} className="space-y-4">
                  <h3 className="text-sm font-bold text-primary">
                    {column.heading}
                  </h3>
                  <ul className="space-y-2 text-sm font-semibold text-ink-muted">
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
            whiteHeroHeader={whiteHeroHeader}
          >
            <div className="rounded-lg border border-surface-variant bg-white p-6 shadow-[0_20px_60px_rgba(7,27,58,0.12)]">
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-primary">
                  {teacherMenu.heading}
                </h3>
                <ul className="space-y-2 text-sm font-semibold text-ink-muted">
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
            whiteHeroHeader={whiteHeroHeader}
          >
            <div className="rounded-lg border border-surface-variant bg-white p-6 shadow-[0_20px_60px_rgba(7,27,58,0.12)]">
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-primary">
                  {studentMenu.heading}
                </h3>
                <ul className="space-y-2 text-sm font-semibold text-ink-muted">
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
            <Link
              key={item.label}
              href={item.href}
              className={cn('transition-colors', whiteHeroHeader ? 'hover:text-white/85' : 'hover:text-primary')}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Link
            href="/consultation"
            className={cn(
              'hidden rounded-full px-4 py-2 font-semibold tracking-tight transition-all duration-700 md:inline-flex',
              scrolled ? 'text-[11px]' : 'text-[13px]',
              scrolled
                ? 'bg-primary text-white shadow-sm shadow-blue-950/10 hover:bg-primary-2'
                : whiteHeroHeader
                  ? 'bg-white text-primary shadow-sm shadow-blue-950/10 hover:bg-slate-100'
                  : 'bg-primary text-white shadow-sm shadow-blue-950/10 hover:bg-primary-2'
            )}
          >
            Book Consultation
          </Link>

          <button
            type="button"
            className={cn(
              'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-white text-primary shadow-[0_8px_20px_rgba(15,23,42,0.12)] md:hidden',
              scrolled
                ? 'border-surface-variant'
                : whiteHeroHeader
                  ? 'border-white/20'
                  : 'border-primary/20'
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
  whiteHeroHeader,
  children,
}: {
  label: string;
  openKey: 'schools' | 'teachers' | 'students';
  activeDropdown: 'schools' | 'teachers' | 'students' | null;
  setActiveDropdown: Dispatch<SetStateAction<'schools' | 'teachers' | 'students' | null>>;
  widthClass: string;
  whiteHeroHeader: boolean;
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
        className={cn(
          'flex items-center gap-1 transition-colors',
          whiteHeroHeader ? 'hover:text-white/85' : 'hover:text-primary'
        )}
        aria-expanded={activeDropdown === openKey}
      >
        {label}
        <span aria-hidden="true" className="text-[10px] leading-none">
          ▾
        </span>
      </button>

      <div
        className={cn(
          'absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 transition-all duration-500 ease-out',
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
  mobileView,
  setMobileView,
  setOpen,
}: {
  mobileView: 'main' | 'schools' | 'teachers' | 'students';
  setMobileView: Dispatch<SetStateAction<'main' | 'schools' | 'teachers' | 'students'>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const closeMenu = () => {
    setOpen(false);
    setMobileView('main');
  };

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      <div className="absolute inset-0 bg-slate-950/25 backdrop-blur-[2px]" onClick={closeMenu} />
      <div className="absolute inset-x-0 top-[72px] px-4">
        <div
          className="mx-auto max-w-[520px] rounded-2xl border border-surface-variant bg-white/96 px-5 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.14)] backdrop-blur-xl"
          onClick={(event) => event.stopPropagation()}
        >
          {mobileView === 'main' ? (
            <div className="grid gap-2 text-sm font-medium text-ink-muted">
              <MobileMenuItem label="For Schools" onClick={() => setMobileView('schools')} />
              <MobileMenuItem label="For Teachers" onClick={() => setMobileView('teachers')} />
              <MobileMenuItem label="For Students" onClick={() => setMobileView('students')} />
              {navItems.slice(3).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-xl px-3 py-2 hover:bg-surface-low hover:text-primary"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/consultation"
                className="mt-1 inline-flex items-center justify-center rounded-xl bg-primary px-3 py-3 text-sm font-semibold text-white"
                onClick={closeMenu}
              >
                Book Consultation
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-surface-variant pb-3">
                <button
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-surface-variant text-primary"
                  onClick={() => setMobileView('main')}
                  aria-label="Go back to main menu"
                >
                  <ArrowLeft size={16} />
                </button>
                <div>
                  {/* <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
                    Mobile Menu
                  </div> */}
                  <div className="font-display text-lg font-semibold text-primary">
                    {mobileView === 'schools'
                      ? 'For Schools'
                      : mobileView === 'teachers'
                        ? 'For Teachers'
                        : 'For Students'}
                  </div>
                </div>
              </div>

              {mobileView === 'schools' ? (
                <div className="grid gap-4 text-sm font-medium text-ink-muted">
                  {schoolMenuColumns.map((column) => (
                    <div key={column.heading} className="space-y-3">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                        {column.heading}
                      </div>
                      <div className="grid gap-2">
                        {column.items.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="rounded-xl px-3 py-2 hover:bg-surface-low hover:text-primary"
                            onClick={closeMenu}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : mobileView === 'teachers' ? (
                <div className="grid gap-2 text-sm font-medium text-ink-muted">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                    {teacherMenu.heading}
                  </div>
                  {teacherMenu.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="rounded-xl px-3 py-2 hover:bg-surface-low hover:text-primary"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href="/teacherspage"
                    className="mt-1 inline-flex items-center justify-center rounded-xl bg-primary px-3 py-3 text-sm font-semibold text-white"
                    onClick={closeMenu}
                  >
                    View All
                  </Link>
                </div>
              ) : (
                <div className="grid gap-2 text-sm font-medium text-ink-muted">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                    {studentMenu.heading}
                  </div>
                  {studentMenu.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="rounded-xl px-3 py-2 hover:bg-surface-low hover:text-primary"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MobileMenuItem({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className="rounded-xl px-3 py-2 text-left hover:bg-surface-low hover:text-primary"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
