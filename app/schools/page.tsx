import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ArchitectureSection from '@/components/ArchitectureSection';
import CaseStudies from '@/components/CaseStudies';
import FAQ from '@/components/FAQ';
import Methodology from '@/components/Methodology';
import ServiceModules from '@/components/ServiceModules';
import WhySapphire from '@/components/WhySapphire';

export const metadata: Metadata = {
  title: 'For Schools: School Improvement & Advisory',
  description:
    'Explore Sapphire Leadership & Advisor’s support for school improvement, accreditation, strategic planning, governance, and academic excellence.',
  alternates: {
    canonical: '/schools',
  },
};

export default function SchoolsPage() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#071b3a_0%,#123968_54%,#f7f9fb_100%)] py-28 md:py-36">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_24%),radial-gradient(circle_at_top_right,rgba(197,160,89,0.18),transparent_22%)]" />
          <div className="relative mx-auto max-w-container px-5 text-center md:px-10">
            <span className="inline-flex rounded-full bg-gold px-4 py-1 text-[11px] font-semibold tracking-[0.14em] text-ink">
              FOR SCHOOLS
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
              Strengthen your school with strategic educational advisory.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-white/82 md:text-[16px]">
              From school improvement and accreditation to leadership
              development, governance, and academic excellence, we help schools
              move with clarity and confidence.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/consultation"
                className="rounded-full bg-gold px-6 py-3 text-[11px] font-semibold tracking-tight text-ink"
              >
                Book Consultation
              </Link>
              <Link
                href="#services"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[11px] font-semibold tracking-tight text-white"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>

        <ArchitectureSection />
        <WhySapphire />
        <ServiceModules />
        <Methodology />
        <CaseStudies />

        <section className="bg-surface py-16 md:py-20">
          <div className="mx-auto grid max-w-container gap-10 px-5 md:grid-cols-2 md:px-10">
            <FAQ />
            <div className="rounded-lg border border-surface-variant/40 bg-white/70 p-7 shadow-sm md:p-10">
              <h2 className="[font-family:var(--font-hanken)] text-2xl font-semibold tracking-[-0.02em] text-primary">
                Ready to talk strategy?
              </h2>
              <p className="mt-3 text-[13px] leading-6 text-ink-muted">
                Tell us about your school goals, and we’ll shape a focused path
                for leadership and institutional growth.
              </p>
              <Link
                href="/consultation"
                className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 text-[13px] font-semibold text-white"
              >
                Start a Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
