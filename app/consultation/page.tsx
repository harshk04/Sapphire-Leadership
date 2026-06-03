import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ConsultationBooking from '@/components/ConsultationBooking';
import { Globe2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book a School Strategy Consultation',
  description:
    'Schedule a strategic consultation with Sapphire Leadership & Advisory for school growth, leadership development, and advisory support.',
  alternates: {
    canonical: '/consultation',
  },
};

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />

      <main>
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="absolute inset-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrYjFKJxAPq5UrI_8nC2UiFwmoLEMA6uVQ1Dth3hoeWxk5h1Be0Z41-zXOZ1uMpxc_Bug8haSwDTcRkygyByZvHW-75rg1Bl8OvWUYIBU6LFQVwxAFGRjuUeCf3MHMFLNXxyY_I8r3zEQKo9Q-wVk70rtBxzv1ITpYuVBEJxSNrrZXTOryXxblSD6cKrqKXZfePFZnSaWEq6dk7LCfpHyVcR9ewqT04x6e6XOVBzHC0l_k4LoX01TyMsuqFdP3JLU3FqpQrMsc-YUN"
              alt="Consultation background"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-primary/70" />
          </div>

          <div className="relative mx-auto max-w-container px-5 text-center md:px-10">
            <span className="inline-flex rounded-full bg-gold px-4 py-1 text-[11px] font-semibold tracking-[0.14em] text-ink">
              BOOK A STRATEGIC SESSION
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
              Schedule your strategic consultation.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-white/82 md:text-[16px]">
              Partner with institutional experts to reshape your educational
              vision through precise, high-impact advisory.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="#booking"
                className="rounded-full bg-gold px-6 py-3 text-[11px] font-semibold tracking-tight text-ink"
              >
                Start Booking
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[11px] font-semibold tracking-tight text-white"
              >
                Contact Team
              </Link>
            </div>
          </div>
        </section>

        <section className="-mt-10 py-16 md:py-24">
          <div className="mx-auto w-full max-w-none px-5 md:px-10">
            <div className="grid w-full gap-8 xl:grid-cols-[1.35fr_0.65fr]">
              <div className="glass rounded-2xl p-6 md:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-primary md:text-3xl">
                      Booking flow
                    </h2>
                    <p className="mt-2 text-[13px] text-ink-muted">
                      Select a service, choose a date, and we’ll guide the rest.
                    </p>
                  </div>
                </div>
                <div id="booking" className="mt-8 w-full">
                  <ConsultationBooking />
                </div>
              </div>

              <div className="glass rounded-2xl p-6 md:p-8">
                <div className="rounded-xl bg-surface-low p-5">
                  <div className="flex items-center gap-3">
                    <Globe2 className="text-primary" size={18} />
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                        Global availability
                      </div>
                      <div className="mt-1 font-display text-lg font-semibold text-primary">
                        128+ Global Partners
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 overflow-hidden rounded-2xl">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWdfCKNkb-aXuovITGeoPOi-qhfjNUIB7abVutTx62uVOg5RmphK3RvQXbx8Ivd4yFPK3W_j3qsWuy_OI4R-VaR7_eCfAxFnW5DvqihSZC7Irdn5mEHnyscPnhixgCT0kv4fUChRSbfLWMJszKMvSQbgKGdr7drtJb4n1F9hjJdNbMmYq22j2OlibF2dXRro8yWkRyFjCuZroYJBdWeTPRumgtyk5Qwv-rYe78jGp0XnR0Un3kVin12AvN1YlXm_v3RIjHLYchmdCb"
                    alt="Global advisory map"
                    width={900}
                    height={650}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
