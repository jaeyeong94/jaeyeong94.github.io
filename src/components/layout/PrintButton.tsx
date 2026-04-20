'use client';

import { Printer } from 'lucide-react';

export function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      aria-label={label}
      title={label}
      className="hidden items-center gap-1.5 rounded-full border border-border bg-surface/80 px-3 py-1.5 font-mono text-[0.65rem] text-fg-muted transition-colors hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1 md:inline-flex"
    >
      <Printer className="size-3.5" aria-hidden />
      <span className="hidden lg:inline">{label}</span>
    </button>
  );
}
