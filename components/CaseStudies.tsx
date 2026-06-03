'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import SectionShell from './SectionShell';

type CaseStudy = {
  org: string;
  tag: string;
  quote: string;
  metrics: { value: string; label: string }[];
  image: string;
};

const studies: CaseStudy[] = [
  {
    org: 'Emerald International Academy',
    tag: 'CBSE AFFILIATION & INFRASTRUCTURE',
    quote:
      "\"Sapphire's strategic insight transformed our vision from a local school to a regional benchmark for excellence within 18 months.\"",
    metrics: [
      { value: '2.5x', label: 'Enrollment Growth' },
      { value: '100%', label: 'Compliance Score' },
    ],
    image: '/images/case-photo.png',
  },
  {
    org: 'Northbridge Learning Campus',
    tag: 'ACADEMIC DESIGN & MARKET POSITIONING',
    quote:
      '"The clarity of their roadmap de-risked every decision — from curriculum to admissions funnel."',
    metrics: [
      { value: '42%', label: 'Lead-to-Visit' },
      { value: '9.2', label: 'Parent NPS' },
    ],
    image: '/images/case-photo.png',
  },
];

export default function CaseStudies() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  const active = useMemo(() => studies[index]!, [index]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIndex((i) => (i + 1) % studies.length);
    }, 5000);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + studies.length) % studies.length);
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % studies.length);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <SectionShell className="bg-surface overflow-hidden" id="case-studies">
      <div className="flex items-end justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="[font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[30px]">
            Transformations in Action
          </h2>
          <p className="mt-3 text-[12px] text-ink-muted">
            Real results from our school consulting partnerships.
          </p>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-surface-variant bg-white/70 text-ink-muted transition-colors hover:bg-primary hover:text-white"
            aria-label="Previous case study"
            onClick={() => setIndex((i) => (i - 1 + studies.length) % studies.length)}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-surface-variant bg-white/70 text-ink-muted transition-colors hover:bg-primary hover:text-white"
            aria-label="Next case study"
            onClick={() => setIndex((i) => (i + 1) % studies.length)}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.org}
            initial={reduce ? false : { opacity: 0, x: 20 }}
            animate={reduce ? undefined : { opacity: 1, x: 0 }}
            exit={reduce ? undefined : { opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="glass overflow-hidden rounded-lg"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-60 md:h-full">
                <Image
                  src={active.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-7 md:p-8">
                <h3 className="[font-family:var(--font-hanken)] text-lg font-semibold text-primary">
                  {active.org}
                </h3>
                <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                  {active.tag}
                </div>
                <p className="mt-5 text-[13px] italic leading-6 text-ink-muted">
                  {active.quote}
                </p>

                <div className="mt-6 flex items-center gap-4">
                  {active.metrics.map((m, i) => (
                    <div key={m.label} className="flex items-center gap-4">
                      <div>
                        <div className="text-lg font-bold text-primary">
                          {m.value}
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                          {m.label}
                        </div>
                      </div>
                      {i !== active.metrics.length - 1 ? (
                        <div className="h-7 w-px bg-surface-variant" />
                      ) : null}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 md:hidden">
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-surface-variant bg-white/70 text-ink-muted"
                    aria-label="Previous case study"
                    onClick={() =>
                      setIndex((i) => (i - 1 + studies.length) % studies.length)
                    }
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-surface-variant bg-white/70 text-ink-muted"
                    aria-label="Next case study"
                    onClick={() => setIndex((i) => (i + 1) % studies.length)}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <div className="text-xs text-ink-muted">
                    {index + 1} / {studies.length}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionShell>
  );
}
