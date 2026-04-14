'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { cn } from '@/lib/utils';

type Theme = 'light' | 'dark' | 'system';
const STORAGE_KEY = 'ted-ryu-theme';

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === 'system') {
    root.removeAttribute('data-theme');
  } else {
    root.setAttribute('data-theme', theme);
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? 'system';
    setTheme(stored);
    applyTheme(stored);
    setMounted(true);
  }, []);

  function cycle() {
    const next: Theme = theme === 'system' ? 'light' : theme === 'light' ? 'dark' : 'system';
    setTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  const Icon = theme === 'light' ? Sun : theme === 'dark' ? Moon : Monitor;

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`Theme: ${theme}`}
      suppressHydrationWarning
      className={cn(
        'inline-flex size-9 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:text-fg',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1',
      )}
    >
      {mounted && <Icon className="size-4" aria-hidden />}
    </button>
  );
}
