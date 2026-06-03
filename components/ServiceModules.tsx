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
    accent: 'Planning',
  },
  {
    title: 'Phase II: Academic Framework & Affiliation',
    description:
      'Developing the core curriculum, teacher training programs, and managing the entire board affiliation process (CBSE/ICSE/IB).',
    image: '/images/service-right.png',
    accent: 'Academics',
  },
  {
    title: 'Phase III: Campus & Operations Design',
    description:
      'Shaping facilities, workflows, and operational systems that support safety, scalability, and a premium school experience.',
    image: '/images/service-modules.png',
    accent: 'Infrastructure',
  },
  {
    title: 'Phase IV: Launch & Growth Strategy',
    description:
      'Building enrollment momentum through brand positioning, admissions planning, and a structured post-launch growth roadmap.',
    image: '/images/architecture-photo.png',
    accent: 'Growth',
  },
];

export default function ServiceModules() {
  const reduce = useReducedMotion();

  return (
    <SectionShell className="bg-surface" id="services">
      <h2 className="text-center [font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[30px]">
        Service Modules
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {modules.map((m, idx) => (
          <motion.div
            key={m.title}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.55, delay: idx * 0.05 }}
            className="group overflow-hidden rounded-lg border border-surface-variant/40 bg-white/70 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="relative h-52 overflow-hidden md:h-56">
              <Image
                src={m.image}
                alt={m.title}
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                {m.accent}
              </div>
            </div>

            <div className="flex flex-1 flex-col p-7 md:p-8">
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
