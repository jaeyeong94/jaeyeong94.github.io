'use client';

import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  user: string;
  domain: string;
  revealLabel: string;
  className?: string;
}

export function ObfuscatedEmail({ user, domain, revealLabel, className }: Props) {
  const [revealed, setRevealed] = useState(false);
  const addr = useMemo(() => `${user}@${domain}`, [user, domain]);

  if (!revealed) {
    return (
      <button
        type="button"
        onClick={() => setRevealed(true)}
        className={cn(
          className,
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1 focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
        )}
        aria-label={revealLabel}
      >
        {user}
        <span aria-hidden> [at] </span>
        <span className="sr-only">@</span>
        {domain}
      </button>
    );
  }
  return (
    <a href={`mailto:${addr}`} className={className}>
      {addr}
    </a>
  );
}
