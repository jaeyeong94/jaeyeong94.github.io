'use client';

import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Command } from 'cmdk';
import { Search } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/content/i18n';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export function CommandPalette({ locale, dict }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
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
    { href: `${base}#manifesto`, label: dict.nav.manifesto },
    { href: `${base}#experience`, label: dict.nav.experience },
    { href: `${base}#projects`, label: dict.nav.projects },
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
        onClick={() => setOpen(true)}
        aria-label={dict.common.commandPaletteOpen}
        className="no-print hidden items-center gap-1.5 rounded-full border border-border bg-surface/80 px-3 py-1.5 font-mono text-[0.65rem] text-fg-muted transition-colors hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1 md:inline-flex"
      >
        <Search className="size-3" aria-hidden />
        <span aria-hidden>⌘K</span>
      </button>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="cmdk-overlay fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
          <Dialog.Content
            className="cmdk-content fixed left-1/2 top-[20vh] z-50 w-[92vw] max-w-lg -translate-x-1/2 rounded-xl border border-border bg-surface p-2 shadow-2xl"
            onOpenAutoFocus={(e) => {
              const input = (e.currentTarget as HTMLElement).querySelector('input');
              if (input) {
                e.preventDefault();
                input.focus();
              }
            }}
          >
            <Dialog.Title className="sr-only">{dict.common.commandPaletteTitle}</Dialog.Title>
            <Command
              className="flex flex-col"
              filter={(value, search) => {
                if (!search) return 1;
                return value.toLowerCase().includes(search.toLowerCase()) ? 1 : 0;
              }}
            >
              <div className="flex items-center gap-2 border-b border-border px-3 py-2">
                <Search className="size-4 shrink-0 text-fg-subtle" aria-hidden />
                <Command.Input
                  placeholder={dict.common.commandPaletteSearch}
                  className="flex-1 bg-transparent text-sm text-fg placeholder:text-fg-subtle focus:outline-none"
                />
                <kbd className="font-mono text-[0.6rem] text-fg-subtle">ESC</kbd>
              </div>
              <Command.List className="max-h-80 overflow-y-auto p-1.5">
                <Command.Empty className="px-3 py-6 text-center text-sm text-fg-muted">
                  {dict.common.commandPaletteEmpty}
                </Command.Empty>
                <Command.Group
                  heading={dict.common.commandPaletteHeading}
                  className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[0.65rem] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.2em] [&_[cmdk-group-heading]]:text-fg-subtle"
                >
                  {items.map((it) => (
                    <Command.Item
                      key={it.href}
                      value={it.label}
                      onSelect={() => goto(it.href)}
                      className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-fg aria-selected:bg-accent-1/15 aria-selected:text-accent-1"
                    >
                      <span aria-hidden className="font-mono text-[0.65rem] text-fg-subtle">
                        #
                      </span>
                      {it.label}
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
            </Command>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
