'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { cn } from '@/lib/utils';

type Theme = 'light' | 'dark' | 'system';
const STORAGE_KEY = 'ted-ryu-theme';
const THEME_CHANGE_EVENT = 'ted-ryu-theme-change';

interface Props {
  labels: {
    theme: string;
    light: string;
    dark: string;
    system: string;
  };
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === 'system') {
    root.removeAttribute('data-theme');
  } else {
    root.setAttribute('data-theme', theme);
  }
}

function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'system';

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored;
  }

  return 'system';
}

function subscribeToTheme(callback: () => void) {
  if (typeof window === 'undefined') return () => {};

  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) callback();
  };
  const handleThemeChange = () => callback();

  window.addEventListener('storage', handleStorage);
  window.addEventListener(THEME_CHANGE_EVENT, handleThemeChange);

  return () => {
    window.removeEventListener('storage', handleStorage);
    window.removeEventListener(THEME_CHANGE_EVENT, handleThemeChange);
  };
}

function setStoredTheme(theme: Theme) {
  window.localStorage.setItem(STORAGE_KEY, theme);
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

export function ThemeToggle({ labels }: Props) {
  const theme = useSyncExternalStore<Theme>(subscribeToTheme, getStoredTheme, () => 'system');

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function cycle() {
    const next: Theme = theme === 'system' ? 'light' : theme === 'light' ? 'dark' : 'system';
    setStoredTheme(next);
  }

  const Icon = theme === 'light' ? Sun : theme === 'dark' ? Moon : Monitor;
  const themeLabel =
    theme === 'light' ? labels.light : theme === 'dark' ? labels.dark : labels.system;

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`${labels.theme}: ${themeLabel}`}
      title={`${labels.theme}: ${themeLabel}`}
      suppressHydrationWarning
      className={cn(
        'inline-flex size-9 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:text-fg',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1',
      )}
    >
      <Icon className="size-4" aria-hidden />
    </button>
  );
}
