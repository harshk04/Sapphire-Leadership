'use client';

import { Facebook, Linkedin, Mail, MessageCircle, Share2, X } from 'lucide-react';

const SHARED_TEXT = 'Sapphire Leadership & Advisor';

export default function ResourceShareButtons({ title, path }: { title: string; path: string }) {
  const items = [
    {
      label: 'LinkedIn',
      icon: Linkedin,
      buildHref: (url: string) =>
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      label: 'Facebook',
      icon: Facebook,
      buildHref: (url: string) =>
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      label: 'X',
      icon: X,
      buildHref: (url: string) =>
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(`${title} | ${SHARED_TEXT}`)}`,
    },
    {
      label: 'WhatsApp',
      icon: MessageCircle,
      buildHref: (url: string) =>
        `https://wa.me/?text=${encodeURIComponent(`${title} | ${SHARED_TEXT}`)}%20${encodeURIComponent(url)}`,
    },
    {
      label: 'Email',
      icon: Mail,
      buildHref: (url: string) =>
        `mailto:?subject=${encodeURIComponent(`${title} | ${SHARED_TEXT}`)}&body=${encodeURIComponent(url)}`,
    },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
        <Share2 className="h-4 w-4" />
        Share
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                const url = `${window.location.origin}${path}`;
                window.open(item.buildHref(url), '_blank', 'noopener,noreferrer');
              }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-[11px] font-semibold text-white transition-colors hover:bg-white/12"
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
