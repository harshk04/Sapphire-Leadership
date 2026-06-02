'use client';

import { cn } from '@/lib/cn';
import type { PropsWithChildren } from 'react';

export default function SectionShell({
  children,
  className,
  innerClassName,
  id,
}: PropsWithChildren<{
  className?: string;
  innerClassName?: string;
  id?: string;
}>) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      <div
        className={cn('mx-auto w-full max-w-container px-5 md:px-10', innerClassName)}
      >
        {children}
      </div>
    </section>
  );
}

