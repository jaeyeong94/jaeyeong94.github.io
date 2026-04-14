import type { Locale } from '@/lib/i18n';
import ko from './ko';
import en from './en';
import zh from './zh';
import ja from './ja';

const dicts = { ko, en, zh, ja } as const;

export function getDictionary(locale: Locale) {
  return dicts[locale];
}

export type { Dictionary } from './ko';
