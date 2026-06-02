'use client';

import SectionShell from './SectionShell';
import { BarChart3, Gavel, Globe2, LayoutGrid } from 'lucide-react';
import { cn } from '@/lib/cn';
import { motion, useReducedMotion } from 'framer-motion';

const items = [
  {
    icon: Gavel,
    title: 'Regulatory Expertise',
    description:
      'Navigating complex education boards and licensing requirements with 100% success rates.',
    variant: 'card',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Growth',
    description:
      'We utilize demographic analytics and market intelligence to ensure your school is positioned for maximum enrollment from day one.',
    variant: 'featured',
    metric: '98%',
    metricLabel: 'Enrollment Fulfillment',
  },
  {
    icon: LayoutGrid,
    title: 'Campus Design',
    description:
      'Creating spaces that foster curiosity and safety through ergonomic and sustainable design.',
    variant: 'card',
  },
  {
    icon: Globe2,
    title: 'Global Benchmarking',
    description:
      'We align your institution with international standards, preparing students for success in a globalized academic landscape.',
    variant: 'wide',
  },
];

export default function WhySapphire() {
  const reduce = useReducedMotion();

  return (
    <SectionShell className="bg-surface-low" id="why">
      <div className="text-center">
        <h2 className="[font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[30px]">
          Why Sapphire Consulting?
        </h2>
        <p className="mt-3 text-[12px] text-ink-muted">
          Elevating educational standards through meticulous planning.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {items.map((item, idx) => {
          const Icon = item.icon;
          const isFeatured = item.variant === 'featured';
          const isWide = item.variant === 'wide';

          return (
            <motion.div
              key={item.title}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={cn(
                'rounded-lg border border-surface-variant/40 bg-white/70 p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft',
                isWide && 'md:col-span-2 md:flex md:items-center md:gap-6',
                isFeatured &&
                  'bg-gradient-to-b from-navy to-primary text-white shadow-lift md:row-span-2 md:flex md:flex-col md:justify-center'
              )}
            >
              <div className={cn(isWide && 'md:flex-1')}>
                <Icon
                  className={cn(
                    'h-7 w-7',
                    isFeatured ? 'text-white' : 'text-primary'
                  )}
                />
                <h3
                  className={cn(
                    'mt-4 [font-family:var(--font-hanken)] text-lg font-semibold',
                    isFeatured ? 'text-white' : 'text-primary'
                  )}
                >
                  {item.title}
                </h3>
                <p
                  className={cn(
                    'mt-3 text-[13px] leading-6',
                    isFeatured ? 'text-white/80' : 'text-ink-muted'
                  )}
                >
                  {item.description}
                </p>
              </div>

              {isFeatured && item.metric ? (
                <div className="mt-8 border-t border-white/15 pt-7">
                  <div className="text-3xl font-bold">{item.metric}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/60">
                    {item.metricLabel}
                  </div>
                </div>
              ) : null}

              {isWide ? (
                <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-surface-low text-primary md:mt-0">
                  <Globe2 className="h-6 w-6" />
                </div>
              ) : null}
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}

