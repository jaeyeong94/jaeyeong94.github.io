import { resume } from '@/content/resume';
import type { Locale } from '@/lib/i18n';

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');

export const siteUrl = configuredSiteUrl || 'https://jaeyeong.me';
export const personName = 'Jaeyeong You';
export const personAlternateNames = ['유재영', 'Ted Ryu'] as const;
export const personJobTitle = 'Full-stack Developer';
export const publisherName = 'Ted Ryu';
export const sharedOgImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
} as const;

export const openGraphLocaleMap: Record<Locale, string> = {
  ko: 'ko_KR',
  en: 'en_US',
  zh: 'zh_CN',
  ja: 'ja_JP',
};

export const personProfiles = [resume.profile.github, resume.profile.linkedin, resume.profile.dio];

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function getOgImage(alt: string) {
  return [{ ...sharedOgImage, url: getAbsoluteOgImageUrl(), alt }];
}

export function getAbsoluteOgImageUrl() {
  return absoluteUrl(sharedOgImage.url);
}

export function getAbsoluteTwitterImageUrl() {
  return absoluteUrl('/twitter-image');
}

export function getPublisher() {
  return {
    '@type': 'Person',
    name: personName,
    alternateName: [...personAlternateNames],
    url: siteUrl,
    sameAs: personProfiles,
  };
}
