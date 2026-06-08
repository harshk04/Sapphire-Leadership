'use client';

import { ChevronDown } from 'lucide-react';
import { useId, useState } from 'react';

const faqs = [
  {
    q: 'How do you approach school improvement?',
    a: 'We start with a structured review of leadership, academics, and school routines, then shape a practical plan with clear priorities, measurable actions, and regular follow-up.',
  },
  {
    q: 'Do you coach school leaders directly?',
    a: 'Yes. We work with principals, vice principals, coordinators, and aspiring leaders to strengthen decision-making, communication, team alignment, and day-to-day leadership practice.',
  },
  {
    q: 'Can you help with accreditation and quality reviews?',
    a: 'Absolutely. We help schools prepare evidence, tighten internal systems, and align everyday practice with the standards expected during accreditation or quality audits.',
  },
  {
    q: 'What do your teacher development programs focus on?',
    a: 'Our learning pathways focus on lesson design, classroom leadership, assessment, student engagement, and reflection so teachers build confidence and consistency in practice.',
  },
  {
    q: 'Do you work with international schools and boards?',
    a: 'We do. Our advisory supports international schools with academic alignment, governance support, leadership planning, and quality assurance that fits the institution’s context.',
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
