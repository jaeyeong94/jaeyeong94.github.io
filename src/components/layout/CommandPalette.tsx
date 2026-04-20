'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/content/i18n';

const CommandPaletteDialog = dynamic(
  () => import('./CommandPaletteDialog').then((mod) => mod.CommandPaletteDialog),
  { ssr: false },
);

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export function CommandPalette({ locale, dict }: Props) {
  const [open, setOpen] = useState(false);

  const preloadDialog = () => {
    void import('./CommandPaletteDialog');
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        preloadDialog();
        setOpen((v) => !v);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const base = `/${locale}/`;
  const items: Array<{ href: string; label: string }> = [
    { href: `${base}#about`, label: dict.nav.about },
    { href: `${base}#experience`, label: dict.nav.experience },
    { href: `${base}#projects`, label: dict.nav.projects },
    { href: `${base}#manifesto`, label: dict.nav.manifesto },
    { href: `${base}#skills`, label: dict.nav.skills },
    { href: `${base}#writing`, label: dict.nav.writing },
    { href: `${base}#contact`, label: dict.nav.contact },
  ];

  function goto(href: string) {
    setOpen(false);
    if (typeof window !== 'undefined') {
      window.location.href = href;
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          preloadDialog();
          setOpen(true);
        }}
        onMouseEnter={preloadDialog}
        onFocus={preloadDialog}
        aria-label={dict.common.commandPaletteOpen}
        className="no-print hidden items-center gap-1.5 rounded-full border border-border bg-surface/80 px-3 py-1.5 font-mono text-[0.65rem] text-fg-muted transition-colors hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1 md:inline-flex"
      >
        <Search className="size-3" aria-hidden />
        <span aria-hidden>⌘K</span>
      </button>
      {open ? (
        <CommandPaletteDialog
          open={open}
          onOpenChange={setOpen}
          items={items}
          title={dict.common.commandPaletteTitle}
          searchPlaceholder={dict.common.commandPaletteSearch}
          emptyLabel={dict.common.commandPaletteEmpty}
          heading={dict.common.commandPaletteHeading}
          onSelect={goto}
        />
      ) : null}
    </>
  );
}
