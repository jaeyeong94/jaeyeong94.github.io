export const locales = ['ko', 'en', 'zh', 'ja'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ko';

export const localeLabels: Record<Locale, string> = {
  ko: '한국어',
  en: 'English',
  zh: '简体中文',
  ja: '日本語',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
