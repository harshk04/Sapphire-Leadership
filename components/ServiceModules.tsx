'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionShell from './SectionShell';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const modules = [
  {
    title: 'Leadership Development',
    description:
      'Coaching for senior leaders focused on vision, decision-making, team alignment, and sustained school-wide improvement.',
    image: '/images/leadershipdevelopment.jpeg',
    href: '/consultation',
    cta: 'Book Consultation',
  },
  {
    title: 'School Improvement',
    description:
      'Practical advisory to strengthen academic systems, quality assurance, and the routines that shape school excellence.',
    image: '/images/schoolconsultancy.jpeg',
    href: '/schools',
    cta: 'Explore Schools',
  },
  {
    title: 'Teacher Professional Learning',
    description:
      'Professional learning journeys that build classroom confidence, instructional skill, and a stronger culture of collaboration.',
    image: '/images/teacherpl.jpeg',
    href: '/teacherspage',
    cta: 'Explore Teachers',
  },
  {
    title: 'Student Success & Future Readiness',
    description:
      'Programs that connect academic purpose with future readiness, helping students grow with clarity, confidence, and direction.',
    image: '/images/studentsuccess.jpeg',
    href: '/students',
    cta: 'Explore Students',
  },
];

export default function ServiceModules() {
  const reduce = useReducedMotion();

  return (
    <SectionShell className="bg-surface" id="services">
      <h2 className="text-center [font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[30px]">
        Our Services
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
            </div>

            <div className="flex flex-1 flex-col p-7 md:p-8">
              <h3 className="[font-family:var(--font-hanken)] text-lg font-semibold text-primary md:text-xl">
                {m.title}
              </h3>
              <p className="mt-3 text-[13px] leading-6 text-ink-muted">
                {m.description}
              </p>
              <Link
                href={m.href}
                className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-primary transition-all group-hover:gap-3"
              >
                {m.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
