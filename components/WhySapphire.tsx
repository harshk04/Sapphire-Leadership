'use client';

import SectionShell from './SectionShell';
import { BarChart3, Gavel, Globe2, LayoutGrid } from 'lucide-react';
import { cn } from '@/lib/cn';
import { motion, useReducedMotion } from 'framer-motion';

const items = [
  {
    icon: Gavel,
    title: 'Leadership Excellence',
    description:
      'Strengthening school leadership with practical coaching, clear decision-making, and sustained institutional performance.',
    variant: 'card',
  },
  {
    icon: BarChart3,
    title: 'School Transformation',
    description:
      'Turning school goals into a practical improvement plan that raises standards, strengthens school routines, and builds shared confidence across the leadership team. We help translate priorities into clear actions, align academic and operational systems, and support steady progress that people can see and sustain.',
    variant: 'featured',
  },
  {
    icon: LayoutGrid,
    title: 'Teacher Development',
    description:
      'Equipping teachers with professional learning that improves classroom practice, collaboration, and learner engagement.',
    variant: 'card',
  },
  {
    icon: Globe2,
    title: 'International Standards',
    description:
      'Aligning policies, learning priorities, and quality indicators with internationally respected school standards.',
    variant: 'wide',
  },
  {
    icon: BarChart3,
    title: 'Strategic Advisory',
    description:
      'Providing board-level insight on governance, academic direction, and long-term educational growth. We help leadership teams make grounded decisions, align priorities across departments, and build a clear path for sustainable improvement that supports both current performance and future ambition.',
    variant: 'card',
  },
];

export default function WhySapphire() {
  const reduce = useReducedMotion();

  return (
    <SectionShell className="bg-surface-low" id="why">
      <div className="text-center">
        <h2 className="[font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[30px]">
          Why Choose Us
        </h2>
        <p className="mt-3 text-[12px] text-ink-muted">
          Trusted advisory for schools, educators, and leaders committed to lasting growth.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {items
            .filter(
              (item) =>
                (item.variant === 'card' || item.variant === 'wide') &&
                item.title !== 'Strategic Advisory'
            )
            .map((item, idx) => (
              <FeatureCard key={item.title} item={item} idx={idx} reduce={reduce} />
            ))}
        </div>

        <div className="grid gap-6">
          {items
            .filter((item) => item.variant === 'featured')
            .map((item, idx) => (
              <FeatureCard
                key={item.title}
                item={item}
                idx={idx + 10}
                reduce={reduce}
              />
            ))}

          <FeatureCard
            item={items[4]!}
            idx={11}
            reduce={reduce}
            compact
          />
        </div>
      </div>
    </SectionShell>
  );
}

function FeatureCard({
  item,
  idx,
  reduce,
  compact = false,
}: {
  item: (typeof items)[number];
  idx: number;
  reduce: boolean | null;
  compact?: boolean;
}) {
  const Icon = item.icon;
  const isFeatured = item.variant === 'featured';
  const isWide = item.variant === 'wide';

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 10 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: idx * 0.05 }}
      className={cn(
        'rounded-lg border border-surface-variant/40 bg-white/70 p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft',
        compact && 'min-h-[220px]',
        isWide && 'md:flex md:items-center md:gap-6',
        isFeatured &&
          'min-h-[320px] bg-gradient-to-b from-navy to-primary text-white shadow-lift md:flex md:flex-col md:justify-between'
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
            'mt-4 [font-family:var(--font-hanken)] font-semibold',
            isFeatured
              ? 'text-2xl text-white md:text-3xl'
              : 'text-xl text-primary md:text-2xl'
          )}
        >
          {item.title}
        </h3>
        <p
          className={cn(
            'mt-3 text-[14px] leading-7 text-justify md:text-[15px] md:leading-8',
            isFeatured ? 'text-white/85' : 'text-ink-muted'
          )}
        >
          {item.description}
        </p>
      </div>

      {isWide && item.title !== 'International Standards' ? (
        <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-surface-low text-primary md:mt-0">
          <Globe2 className="h-6 w-6" />
        </div>
      ) : null}
    </motion.div>
  );
}
