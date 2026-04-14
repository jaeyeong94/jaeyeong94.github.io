'use client';

import { useMemo, useState } from 'react';

interface Props {
  user: string;
  domain: string;
  className?: string;
}

export function ObfuscatedEmail({ user, domain, className }: Props) {
  const [revealed, setRevealed] = useState(false);
  const addr = useMemo(() => `${user}@${domain}`, [user, domain]);

  if (!revealed) {
    return (
      <button
        type="button"
        onClick={() => setRevealed(true)}
        className={className}
        aria-label="Reveal email address"
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
