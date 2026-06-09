'use client';

import { Share2 } from 'lucide-react';
import { useState } from 'react';

export default function StudentResourceShareButton({
  title,
  anchor,
}: {
  title: string;
  anchor: string;
}) {
  const [copied, setCopied] = useState(false);

  async function onShare() {
    const url = `${window.location.origin}/students${anchor}`;
    const shareData = { title, text: `${title} | Sapphire Leadership & Advisor`, url };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1500);
      }
    } catch {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    }
  }

  return (
    <button
      type="button"
      onClick={onShare}
      className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-[11px] font-semibold tracking-tight text-primary transition-colors hover:bg-primary/10"
    >
      <Share2 size={14} />
      {copied ? 'Link copied' : 'Share'}
    </button>
  );
}

