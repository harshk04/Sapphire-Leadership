'use client';

import SectionShell from './SectionShell';
import { motion, useReducedMotion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Deep-dive into stakeholder vision and local demographic requirements.',
  },
  {
    number: '02',
    title: 'Architect',
    description:
      'Architectural planning and curriculum mapping customized for your goals.',
  },
  {
    number: '03',
    title: 'Deploy',
    description:
      'Rigorous execution of licensing, staffing, and marketing strategies.',
  },
  {
    number: '04',
    title: 'Deliver',
    description:
      'Launch operations and transition to sustainable management frameworks.',
  },
];

export default function Methodology() {
  const reduce = useReducedMotion();

  return (
    <SectionShell
      id="methodology"
      className="bg-ink py-16 text-white md:py-24"
    >
      <div className="max-w-xl">
        <h2 className="[font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] md:text-[30px]">
          The Sapphire Methodology
        </h2>
        <p className="mt-3 text-[13px] leading-6 text-white/70 md:text-[14px]">
          Our proprietary four-step approach ensures your institution is built on
          a foundation of excellence and sustainability.
        </p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-4">
        {steps.map((s, idx) => (
          <motion.div
            key={s.number}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="relative border-t border-white/20 pt-9"
          >
            <div className="absolute -top-5 left-2 z-10 text-6xl font-extrabold text-white/10">
              {s.number}
            </div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
              {s.title}
            </div>
            <p className="mt-4 text-[13px] leading-6 text-white/65">
              {s.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
