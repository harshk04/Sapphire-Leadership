'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { UsersRound } from 'lucide-react';

const trustImages = [
  { src: '/images/school1.jpeg', alt: 'School leadership scene 1' },
  { src: '/images/school2.jpeg', alt: 'School leadership scene 2' },
  { src: '/images/school3.jpeg', alt: 'School leadership scene 3' },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#e7d0b5_0%,#7ea1be_16%,#5b88af_42%,#7ea0ba_72%,#cad7df_100%)]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,227,195,0.72),transparent_24%),radial-gradient(circle_at_top_right,rgba(255,233,208,0.62),transparent_22%),radial-gradient(circle_at_82%_58%,rgba(255,255,255,0.24),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.06)_36%,rgba(255,255,255,0.18)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(255,214,170,0.42),rgba(255,214,170,0.1)_55%,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.28),transparent_34%),radial-gradient(circle_at_0%_80%,rgba(255,255,255,0.16),transparent_24%),radial-gradient(circle_at_100%_78%,rgba(255,255,255,0.2),transparent_26%)]"
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-6rem] top-[-5rem] h-72 w-72 rounded-full bg-white/30 blur-3xl"
        animate={
          reduce
            ? undefined
            : {
                x: [0, 18, 0],
                y: [0, 10, 0],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-3rem] top-[6rem] h-80 w-80 rounded-full bg-white/18 blur-3xl"
        animate={
          reduce
            ? undefined
            : {
                x: [0, -16, 0],
                y: [0, 14, 0],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto flex min-h-[88svh] max-w-6xl flex-col items-center px-5 pb-16 pt-24 text-center md:min-h-[92vh] md:px-10 md:pb-20 md:pt-28 lg:pt-32">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/88 md:text-[17px]"
        >
          <span className="text-white/86">Empowering schools</span>
          <span className="flex items-center -space-x-2">
            {trustImages.map((image, index) => (
              <span
                key={image.src}
                className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white/90 bg-white/92 shadow-[0_8px_20px_rgba(7,27,58,0.16)]"
                style={{
                  zIndex: trustImages.length - index,
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </span>
            ))}
          </span>
          <span className="text-white/86">to</span>
          <span className="font-semibold text-white">lead,</span>
          <span className="text-white/86">teachers to</span>
          <span className="font-semibold text-white">grow,</span>
          <span className="text-white/86">and students to</span>
          <span className="font-semibold text-white">succeed.</span>
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.08 }}
          className="mt-8 max-w-[12ch] text-balance font-display text-[clamp(3.25rem,7.6vw,7rem)] font-semibold leading-[0.93] tracking-[-0.055em] text-white drop-shadow-[0_10px_18px_rgba(14,33,67,0.22)] md:max-w-[13ch]"
        >
          Leadership
          <br />
          &amp; Transformation
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.16 }}
          className="mt-7 max-w-[58ch] text-balance text-[15px] font-medium leading-7 text-white/82 drop-shadow-[0_6px_12px_rgba(14,33,67,0.18)] md:text-[18px] md:leading-8"
        >
          We guide schools, educators, and leaders through growth, advisory,
          and transformation with a premium model built for long-term impact.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.24 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="/teacherspage"
            className="inline-flex min-w-[210px] items-center justify-center rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-navy shadow-[0_18px_40px_rgba(7,27,58,0.18)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            For Teachers
          </a>
          <a
            href="/schools"
            className="inline-flex min-w-[210px] items-center justify-center rounded-full border border-white/18 bg-white/18 px-8 py-4 text-[15px] font-semibold text-white backdrop-blur-md transition-colors duration-200 hover:bg-white/24"
          >
            For Schools
          </a>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.3 }}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/12 px-5 py-2 text-[13px] font-medium text-white/82 backdrop-blur-md"
        >
          <UsersRound className="h-4 w-4" />
          Strategy consultation for educators and school leaders
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,transparent,rgba(247,249,251,0.36)_32%,rgba(247,249,251,0.92)_100%)]"
      />
    </section>
  );
}
