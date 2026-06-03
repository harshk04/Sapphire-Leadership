'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

function parseMetric(value: string) {
  const match = value.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);

  if (!match) {
    return { prefix: '', target: 0, suffix: value };
  }

  const [, prefix, numberPart, suffix] = match;
  return {
    prefix,
    target: Number(numberPart),
    suffix,
  };
}

export default function AnimatedMetric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [current, setCurrent] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const parsed = useMemo(() => parseMetric(value), [value]);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setHasAnimated(true);
        const duration = 1400;
        const start = performance.now();

        const tick = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCurrent(Math.round(parsed.target * eased));

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasAnimated, parsed.target]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-semibold text-gold">
        {parsed.prefix}
        {hasAnimated ? current : 0}
        {parsed.suffix}
      </div>
      <div className="mt-2 text-[12px] uppercase tracking-[0.18em] text-white/60">
        {label}
      </div>
    </div>
  );
}
