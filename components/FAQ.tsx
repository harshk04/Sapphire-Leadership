'use client';

import { ChevronDown } from 'lucide-react';
import { useId, useState } from 'react';

const faqs = [
  {
    q: 'How do you support school improvement?',
    a: 'We begin with a focused review of priorities, systems, and outcomes, then shape an improvement path that is practical and measurable.',
  },
  {
    q: 'Do you offer leadership coaching?',
    a: 'Yes. We coach principals, coordinators, and aspiring leaders through planning, team alignment, and stronger decision-making.',
  },
  {
    q: 'Can you support accreditation work?',
    a: 'Absolutely. We help schools prepare evidence, strengthen internal systems, and align daily practice with quality standards.',
  },
  {
    q: 'Do you work with teacher development programs?',
    a: 'Yes. Our learning pathways build teaching confidence, instructional consistency, and a stronger culture of professional growth.',
  },
  {
    q: 'Can you work with international schools?',
    a: 'We can. Our advisory supports international schools with leadership planning, quality assurance, and academic alignment.',
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
