'use client';

import Image from 'next/image';
import SectionShell from './SectionShell';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const modules = [
  {
    title: 'Phase I: Conceptualization & Feasibility',
    description:
      "Detailed market research, competitive analysis, and financial forecasting to define the project's viability and unique value proposition.",
    image: '/images/service-left.png',
    reverse: false,
  },
  {
    title: 'Phase II: Academic Framework & Affiliation',
    description:
      'Developing the core curriculum, teacher training programs, and managing the entire board affiliation process (CBSE/ICSE/IB).',
    image: '/images/service-right.png',
    reverse: true,
  },
];

export default function ServiceModules() {
  const reduce = useReducedMotion();

  return (
    <SectionShell className="bg-surface" id="services">
      <h2 className="text-center [font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[30px]">
        Service Modules
      </h2>

      <div className="mt-10 space-y-8">
        {modules.map((m, idx) => (
          <motion.div
            key={m.title}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.55, delay: idx * 0.05 }}
            className={[
              'group flex flex-col items-stretch gap-6 md:gap-8',
              m.reverse ? 'md:flex-row-reverse' : 'md:flex-row',
            ].join(' ')}
          >
            <div className="h-56 w-full overflow-hidden rounded-lg md:h-64 md:w-1/3">
              <Image
                src={m.image}
                alt=""
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="glass flex flex-1 flex-col justify-center rounded-lg p-7 md:p-10">
              <h3 className="[font-family:var(--font-hanken)] text-lg font-semibold text-primary md:text-xl">
                {m.title}
              </h3>
              <p className="mt-3 text-[13px] leading-6 text-ink-muted">
                {m.description}
              </p>
              <a
                href="#consultation"
                className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-primary transition-all group-hover:gap-3"
              >
                Learn more about this phase <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}

