import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { ComponentType } from 'react';
import { ArrowRight, GraduationCap, Sparkles, Users2 } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ConsultationBooking from '@/components/ConsultationBooking';

export const metadata: Metadata = {
  title: 'Book a Free Educational Consultation | Sapphire Leadership & Advisor',
  description:
    'Schedule a free consultation with Sapphire Leadership & Advisor for school improvement, leadership development, teacher training, accreditation readiness, and educational strategy.',
  alternates: {
    canonical: '/consultation',
  },
};

const faqs = [
  {
    q: 'Is the consultation free?',
    a: 'Yes. Initial consultations are completely free.',
  },
  {
    q: 'Who can book a consultation?',
    a: 'School founders, principals, coordinators, educators, institutions, and educational organizations.',
  },
  {
    q: 'How will the meeting take place?',
    a: 'Google Meet, Zoom, Phone Call, or In-Person depending on availability.',
  },
  {
    q: 'How soon will I receive confirmation?',
    a: 'Usually within 24 working hours.',
  },
];

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />

      <main>
        <section className="relative isolate overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0">
            <Image
              src="/images/schoolconsultancy.jpeg"
              alt="School leadership meeting"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-primary/76" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,218,166,0.2),transparent_24%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.12),transparent_20%),linear-gradient(180deg,rgba(7,27,58,0.28)_0%,rgba(7,27,58,0.4)_100%)]" />
          </div>

          <div className="relative mx-auto grid max-w-container gap-10 px-5 md:px-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-gold px-4 py-1 text-[11px] font-semibold tracking-[0.14em] text-ink">
                FREE CONSULTATION
              </span>
              <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white md:text-6xl">
                Let&apos;s discuss your school&apos;s goals and challenges.
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-white md:text-[17px]">
                Book a free consultation with Sapphire Leadership &amp; Advisor to explore school improvement, leadership development, teacher training, accreditation readiness, and educational strategy.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#booking"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 text-[12px] font-semibold tracking-tight text-ink transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Book Free Consultation
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/10 px-7 py-4 text-[12px] font-semibold tracking-tight text-white backdrop-blur-md transition-colors duration-200 hover:bg-white/18"
                >
                  Contact Advisor
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-[13px] text-white">
                <Pill icon={Sparkles} label="Free initial consultation" />
                <Pill icon={Users2} label="Built for schools" />
                <Pill icon={GraduationCap} label="India-based educational consultancy" />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[30px] border border-white/14 bg-white/8 p-3 shadow-[0_24px_80px_rgba(7,27,58,0.28)] backdrop-blur-md">
              <div className="overflow-hidden rounded-[24px]">
                <Image
                  src="/images/classroomleadership.jpeg"
                  alt="Educational leadership imagery"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-[22px] border border-white/12 bg-navy/78 p-5 text-white backdrop-blur-md">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                  Focus Areas
                </div>
                <div className="mt-3 grid gap-2 text-[13px] leading-6 text-white/88 md:grid-cols-2">
                  <div>School improvement planning</div>
                  <div>Leadership development</div>
                  <div>Teacher professional learning</div>
                  <div>Accreditation readiness</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="-mt-10 py-16 md:py-24">
          <div className="mx-auto max-w-container px-5 md:px-10">
            <div className="mb-8">
              <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-primary md:text-3xl">
                Why book a consultation?
              </h2>
              <p className="mt-2 max-w-2xl text-[13px] leading-6 text-white">
                Every consultation is free, school-focused, and designed to help you take the next practical step.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  ['Free Initial Consultation', 'Free consultation booking with direct email confirmation.'],
                  ['School-Focused Guidance', 'Built for educational institutions and practical improvement.'],
                  ['Fast Follow-Up', 'Your request is saved and routed for confirmation by email.'],
                ].map(([title, desc]) => (
                  <div key={title} className="glass flex items-center gap-4 rounded-[24px] p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-ink">{title}</div>
                      <div className="text-[12px] text-ink-muted">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-[30px] p-6 md:p-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    Consultation booking
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-[-0.02em] text-primary md:text-3xl">
                    Book your free consultation
                  </h2>
                  <p className="mt-2 max-w-2xl text-[13px] leading-6 text-ink-muted">
                    Select a service, choose a date and time in Indian Standard Time, and tell us what support your school needs.
                  </p>
                </div>
              </div>
              <div id="booking" className="mt-8 w-full">
                <ConsultationBooking />
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16">
          <div className="mx-auto grid max-w-container gap-8 px-5 md:px-10 lg:grid-cols-2">
            <div className="glass rounded-[30px] p-6 md:p-8">
              <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-primary md:text-3xl">
                Frequently Asked Questions
              </h2>
              <div className="mt-6 space-y-4">
                {faqs.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-[24px] border border-surface-variant/40 bg-white/70 p-5 shadow-sm"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[14px] font-semibold text-primary">
                      <span>{item.q}</span>
                      <span className="text-ink-muted transition-transform group-open:rotate-45">
                        <ArrowRight size={16} />
                      </span>
                    </summary>
                    <p className="mt-4 text-[13px] leading-6 text-ink-muted">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            <div className="glass rounded-[30px] p-6 md:p-8">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-gold/20 bg-surface-low shadow-soft">
                  <Image
                    src="/images/sunil.png"
                    alt="Dr. Sunil Kumawat"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    Meet Your Advisor
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-[-0.02em] text-primary">
                    Dr. Sunil Kumawat
                  </h2>
                </div>
              </div>
              <p className="mt-6 text-[14px] leading-7 text-ink-muted">
                Dr. Sunil Kumawat is an educational leader, school improvement advisor, mathematics educator, researcher, and founder of Sapphire Leadership &amp; Advisor. With over two decades of experience in education, he supports schools and educational institutions in strengthening leadership, improving systems, and achieving sustainable growth.
              </p>
              <div className="mt-8">
                <Link
                  href="/aboutus"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 text-[12px] font-semibold text-white shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Learn More About Dr. Sunil Kumawat
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Pill({
  icon: Icon,
  label,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-[12px] font-medium text-white backdrop-blur-sm">
      <Icon className="h-4 w-4 text-white" />
      {label}
    </span>
  );
}
