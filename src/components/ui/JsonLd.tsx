import type { Locale } from '@/lib/i18n';
import { resume } from '@/content/resume';
import {
  absoluteUrl,
  getAbsoluteOgImageUrl,
  getPublisher,
  personAlternateNames,
  personJobTitle,
  personName,
  personProfiles,
  siteUrl,
} from '@/lib/seo';

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function JsonLdPerson({ description }: { description: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personName,
    alternateName: [...personAlternateNames],
    jobTitle: personJobTitle,
    url: siteUrl,
    sameAs: personProfiles,
    description,
    knowsAbout: resume.skills.flatMap((c) => c.items),
  };

  return <JsonLdScript data={data} />;
}

export function JsonLdWebsite({
  locale,
  name,
  description,
}: {
  locale: Locale;
  name: string;
  description: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    description,
    url: absoluteUrl(`/${locale}/`),
    inLanguage: locale,
    publisher: getPublisher(),
  };

  return <JsonLdScript data={data} />;
}

export function JsonLdBreadcrumbList({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLdScript data={data} />;
}

export function JsonLdArticle({
  locale,
  path,
  title,
  description,
  datePublished,
  dateModified,
  siteName,
  keywords,
  articleSection,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  siteName: string;
  keywords: string[];
  articleSection?: string;
}) {
  const url = absoluteUrl(path);
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: locale,
    mainEntityOfPage: url,
    url,
    keywords,
    articleSection,
    image: getAbsoluteOgImageUrl(),
    author: getPublisher(),
    publisher: getPublisher(),
    isPartOf: {
      '@type': 'WebSite',
      url: absoluteUrl(`/${locale}/`),
      name: siteName,
    },
  };

  return <JsonLdScript data={data} />;
}

export function JsonLdBlogPosting({
  locale,
  slug,
  title,
  description,
  datePublished,
  siteName,
  keywords,
}: {
  locale: Locale;
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  siteName: string;
  keywords: string[];
}) {
  const url = absoluteUrl(`/${locale}/writing/${slug}/`);
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    inLanguage: locale,
    mainEntityOfPage: url,
    url,
    keywords,
    image: getAbsoluteOgImageUrl(),
    author: getPublisher(),
    publisher: getPublisher(),
    isPartOf: {
      '@type': 'WebSite',
      url: absoluteUrl(`/${locale}/`),
      name: siteName,
    },
  };

  return <JsonLdScript data={data} />;
}
