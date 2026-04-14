import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://jaeyeong94.github.io';
  const now = new Date();
  return locales.map((locale) => ({
    url: `${base}/${locale}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: locale === 'ko' ? 1.0 : 0.8,
  }));
}
