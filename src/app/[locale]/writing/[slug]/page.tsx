import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { locales, isLocale } from '@/lib/i18n';
import { resume } from '@/content/resume';
import { getDictionary } from '@/content/i18n';
import { isWritingSlug, writingPosts } from '@/content/writing';

export function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];
  for (const locale of locales) {
    for (const slug of resume.writingIds) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isWritingSlug(slug)) return {};

  const dict = getDictionary(locale);
  const item = dict.writing.items[slug];
  const post = writingPosts[slug];
  const url = `/${locale}/writing/${slug}/`;
  const languageAlternates = Object.fromEntries(
    locales.map((lang) => [lang, `/${lang}/writing/${slug}/`]),
  );

  return {
    title: item.title,
    description: item.summary,
    alternates: {
      canonical: url,
      languages: {
        ...languageAlternates,
        'x-default': `/ko/writing/${slug}/`,
      },
    },
    openGraph: {
      title: item.title,
      description: item.summary,
      url,
      siteName: dict.meta.siteName,
      locale,
      type: 'article',
      publishedTime: post.meta.date,
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: item.title,
      description: item.summary,
      images: ['/og-image.png'],
    },
  };
}

export default async function WritingPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  if (!isWritingSlug(slug)) notFound();
  const { Component } = writingPosts[slug];
  return (
    <main id="main-content">
      <Component locale={locale} />
    </main>
  );
}
