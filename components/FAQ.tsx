'use client';

import { ChevronDown } from 'lucide-react';
import { useId, useState } from 'react';

const faqs = [
  {
    q: 'How long does the CBSE affiliation process take?',
    a: 'Typically, the process takes 12–18 months. We manage the entire documentation, inspection preparation, and follow-up sequence to minimize delays.',
  },
  {
    q: 'Do you provide recruitment for school principals?',
    a: 'Yes, our leadership search service specializes in identifying and vetting high-caliber academic leaders who align with your institutional vision.',
  },
  {
    q: 'Can you help with existing school turnarounds?',
    a: 'Absolutely. We conduct deep-dive audits of current operations and academic performance to implement strategic pivot plans for underperforming institutions.',
  },
  {
    q: 'Do you support schools beyond the launch phase?',
    a: 'Yes. We provide ongoing advisory for enrollment strategy, leadership alignment, and operational improvements after opening day.',
  },
  {
    q: 'Can you work with schools pursuing international curricula?',
    a: 'We can. Our advisory covers CBSE, ICSE, and IB-aligned planning, including academic structure, staffing, and readiness support.',
  },
];

export default function FAQ() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      <h2 className="[font-family:var(--font-hanken)] text-[26px] font-semibold tracking-[-0.02em] text-primary md:text-[30px]">
        Frequently Asked Questions
      </h2>

      <div className="mt-7 space-y-4">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          const contentId = `${baseId}-faq-${idx}`;
          return (
            <div
              key={item.q}
              className={[
                'rounded-lg border border-surface-variant/40 bg-white p-6 shadow-sm transition-all',
                isOpen ? 'ring-2 ring-primary/20' : '',
              ].join(' ')}
            >
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-between gap-6 rounded-md text-left text-[13px] font-semibold text-primary"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => setOpenIndex((v) => (v === idx ? null : idx))}
              >
                <span className="flex-1 py-1">{item.q}</span>
                <ChevronDown
                  className={[
                    'h-5 w-5 shrink-0 text-ink-muted transition-transform',
                    isOpen ? 'rotate-180' : '',
                  ].join(' ')}
                />
              </button>
              <div
                id={contentId}
                className={[
                  'grid transition-[grid-template-rows] duration-300 ease-out',
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                ].join(' ')}
              >
                <div className="overflow-hidden">
                  <p className="mt-4 text-[13px] leading-6 text-ink-muted">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
