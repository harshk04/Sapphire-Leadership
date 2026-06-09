'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
};

export default function SchoolsFaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-10 space-y-4">
      {items.map((item, index) => {
        const open = openIndex === index;

        return (
          <div
            key={item.question}
            className="rounded-[24px] border border-surface-variant/45 bg-white p-6 shadow-sm open:shadow-soft"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full cursor-pointer list-none items-center justify-between gap-4 text-left"
              aria-expanded={open}
            >
              <span className="text-[16px] font-semibold tracking-[-0.02em] text-primary">
                {item.question}
              </span>
              <span
                className={[
                  'flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-primary transition-transform duration-300',
                  open ? 'rotate-45' : '',
                ].join(' ')}
              >
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
            {open ? (
              <p className="mt-4 max-w-4xl text-[13px] leading-7 text-ink-muted">
                {item.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

