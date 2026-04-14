import type { Locale } from './i18n';
import type { DateString } from '@/content/resume';

const localeMap: Record<Locale, string> = {
  ko: 'ko-KR',
  en: 'en-US',
  zh: 'zh-CN',
  ja: 'ja-JP',
};

export function parseDate(value: DateString): Date {
  const [y, m] = value.split('-').map(Number);
  return new Date(y, m - 1, 1);
}

export function formatYearMonth(
  value: DateString | 'present',
  locale: Locale,
  presentLabel: string,
): string {
  if (value === 'present') return presentLabel;
  const date = parseDate(value);
  return new Intl.DateTimeFormat(localeMap[locale], {
    year: 'numeric',
    month: 'short',
  }).format(date);
}

export function formatDuration(
  months: number,
  locale: Locale,
  yearLabel: string,
  monthLabel: string,
): string {
  const years = Math.floor(months / 12);
  const m = months % 12;
  if (locale === 'ko' || locale === 'zh' || locale === 'ja') {
    const parts: string[] = [];
    if (years > 0) parts.push(`${years}${yearLabel}`);
    if (m > 0 || years === 0) parts.push(`${m}${monthLabel}`);
    return parts.join(' ');
  }
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${yearLabel}`);
  if (m > 0 || years === 0) parts.push(`${m} ${monthLabel}`);
  return parts.join(' ');
}
