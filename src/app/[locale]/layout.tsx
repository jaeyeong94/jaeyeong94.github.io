import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, isLocale } from '@/lib/i18n';
import { getDictionary } from '@/content/i18n';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';

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
  return {
    title: dict.meta.title,
    description: dict.meta.description,
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
      siteName: 'Ted Ryu · Portfolio',
      locale,
      type: 'profile',
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
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
  const buildTime = process.env.BUILD_TIME ?? new Date().toISOString();

  const htmlLangScript = `document.documentElement.lang=${JSON.stringify(locale)}`;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: htmlLangScript }} />
      <Nav locale={locale} dict={dict} />
      {children}
      <Footer dict={dict} buildTime={buildTime} />
    </>
  );
}
