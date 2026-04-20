import type { Metadata } from 'next';
import '@/styles/globals.css';
import { notFound } from 'next/navigation';
import { locales, isLocale } from '@/lib/i18n';
import { getDictionary } from '@/content/i18n';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { ThemeScript } from '@/components/layout/ThemeScript';
import { resume } from '@/content/resume';
import { JsonLdPerson, JsonLdWebsite } from '@/components/ui/JsonLd';
import {
  getOgImage,
  openGraphLocaleMap,
  personName,
  publisherName,
  siteUrl,
} from '@/lib/seo';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  const openGraphImageAlt = `${dict.meta.siteName} — ${dict.meta.description}`;
  return {
    metadataBase: new URL(siteUrl),
    title: dict.meta.title,
    description: dict.meta.description,
    applicationName: dict.meta.siteName,
    icons: {
      icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    },
    keywords: resume.keywords,
    authors: [{ name: personName }],
    creator: personName,
    publisher: publisherName,
    alternates: {
      canonical: `/${locale}/`,
      languages: {
        ko: '/ko/',
        en: '/en/',
        zh: '/zh/',
        ja: '/ja/',
        'x-default': '/ko/',
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `/${locale}/`,
      siteName: dict.meta.siteName,
      locale: openGraphLocaleMap[locale],
      alternateLocale: locales
        .filter((lang) => lang !== locale)
        .map((lang) => openGraphLocaleMap[lang]),
      type: 'profile',
      images: getOgImage(openGraphImageAlt),
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: ['/og-image.png'],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeScript />
        <JsonLdPerson description={dict.meta.description} />
        <JsonLdWebsite
          locale={locale}
          name={dict.meta.siteName}
          description={dict.meta.description}
        />
        <a href="#main-content" className="skip-link">
          {dict.common.skipToContent}
        </a>
        <Nav locale={locale} dict={dict} />
        {children}
        <Footer dict={dict} />
      </body>
    </html>
  );
}
