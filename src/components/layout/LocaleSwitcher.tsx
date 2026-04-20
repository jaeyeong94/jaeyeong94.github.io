'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { locales, localeLabels, type Locale, isLocale } from '@/lib/i18n';
import { Globe, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export function LocaleSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const localeCode = currentLocale.toUpperCase();

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  function swapLocale(path: string, next: Locale): string {
    const segments = path.split('/').filter(Boolean);
    if (segments.length > 0 && isLocale(segments[0])) {
      segments[0] = next;
    } else {
      segments.unshift(next);
    }
    return '/' + segments.join('/') + '/';
  }

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cn(
          'inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-2 text-sm text-fg transition-colors hover:border-fg/20 hover:bg-bg-subtle',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1',
          open && 'border-accent-1/40',
        )}
      >
        <Globe className="size-4 text-accent-1" aria-hidden />
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-fg-subtle">
          {localeCode}
        </span>
        <span className="hidden sm:inline">{localeLabels[currentLocale]}</span>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 min-w-[10rem] overflow-hidden rounded-xl border border-border bg-surface shadow-lg"
        >
          {locales.map((loc) => {
            const active = loc === currentLocale;
            return (
              <li key={loc} role="option" aria-selected={active}>
                <Link
                  href={swapLocale(pathname, loc)}
                  className={cn(
                    'flex items-center justify-between gap-3 px-4 py-2.5 text-sm hover:bg-bg-subtle',
                    active ? 'text-fg' : 'text-fg-muted',
                  )}
                  onClick={() => setOpen(false)}
                >
                  <span className="inline-flex items-center gap-3">
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-fg-subtle">
                      {loc}
                    </span>
                    <span>{localeLabels[loc]}</span>
                  </span>
                  {active && <Check className="size-4" aria-hidden />}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
