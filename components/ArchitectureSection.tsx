'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import SectionShell from './SectionShell';

const bullets = [
  'School improvement and transformation planning',
  'Leadership development and coaching support',
  'Accreditation and quality assurance guidance',
];

export default function ArchitectureSection() {
  return (
    <SectionShell className="bg-surface" id="architecture">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="[font-family:var(--font-hanken)] text-2xl font-semibold tracking-[-0.02em] text-primary md:text-[28px]">
            School Transformation & Strategic Advisory
          </h2>
          <p className="mt-4 text-[13px] leading-6 text-ink-muted md:text-[14px]">
            Building a stronger school takes more than structure; it requires
            aligned leadership, academic clarity, and an accountable path to
            excellence. Sapphire Leadership &amp; Advisory supports every stage.
          </p>
          <ul className="mt-7 space-y-4">
            {bullets.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[13px]">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-full bg-primary-2/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-lg shadow-lift">
            <Image
              src="/images/image 1.jpeg"
              alt="School leaders reviewing improvement strategy."
              width={800}
              height={600}
              className="h-[240px] w-full object-cover md:h-[280px]"
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
