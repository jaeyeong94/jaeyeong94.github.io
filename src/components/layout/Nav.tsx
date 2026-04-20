'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/content/i18n';
import { LocaleSwitcher } from './LocaleSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { CommandPalette } from './CommandPalette';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export function Nav({ locale, dict }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'no-print sticky top-0 z-40 w-full transition-[background-color,border-color,backdrop-filter] duration-200',
        scrolled
          ? 'border-b border-border bg-bg/80 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <div className="section-frame flex items-center justify-between gap-6 py-3">
        <Link
          href={base}
          className="font-semibold tracking-tight text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1"
        >
          {dict.meta.brandName}
        </Link>
        <nav className="hidden md:block" aria-label={dict.common.primaryNavigation}>
          <ul className="flex items-center gap-6 text-sm text-fg-muted">
            {items.map((it) => (
              <li key={it.href}>
                <a
                  href={it.href}
                  className="rounded-sm px-1 py-0.5 transition-colors hover:text-fg focus-visible:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1"
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <CommandPalette locale={locale} dict={dict} />
          <ThemeToggle
            labels={{
              theme: dict.common.theme,
              light: dict.common.themeLight,
              dark: dict.common.themeDark,
              system: dict.common.themeSystem,
            }}
          />
          <LocaleSwitcher currentLocale={locale} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border text-fg-muted md:hidden"
            aria-label={open ? dict.common.closeMenu : dict.common.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden" aria-label={dict.common.mobileNavigation}>
          <ul className="space-y-1 border-t border-border bg-surface px-6 py-4">
            {items.map((it) => (
              <li key={it.href}>
                <a
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base text-fg-muted hover:bg-bg-subtle hover:text-fg"
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
