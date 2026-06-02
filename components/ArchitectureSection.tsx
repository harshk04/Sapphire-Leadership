'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import SectionShell from './SectionShell';

const bullets = [
  'CBSE, ICSE, and IB Affiliation Strategy',
  'Project Feasibility & Financial Modeling',
  'Operational Governance Frameworks',
];

export default function ArchitectureSection() {
  return (
    <SectionShell className="bg-surface" id="architecture">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="[font-family:var(--font-hanken)] text-2xl font-semibold tracking-[-0.02em] text-primary md:text-[28px]">
            Strategic Institutional Architecture
          </h2>
          <p className="mt-4 text-[13px] leading-6 text-ink-muted md:text-[14px]">
            Launching a new school requires more than just infrastructure; it
            demands a synergy of regulatory compliance, academic rigor, and
            brand positioning. Sapphire Leadership &amp; Advisory guides you
            through every phase of the journey.
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
              src="/images/architecture-photo.png"
              alt="Consultants reviewing architecture blueprints."
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

