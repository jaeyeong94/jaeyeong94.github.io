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
    image: getAbsoluteOgImageUrl(),
    knowsAbout: resume.skills.flatMap((c) => c.items),
  };

  return <JsonLdScript data={data} />;
}

type ItemListEntry = {
  name: string;
  url: string;
  description?: string;
  type?: 'Article' | 'BlogPosting' | 'CreativeWork';
};

function createItemList(name: string, items: ItemListEntry[]) {
  return {
    '@type': 'ItemList',
    name,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: item.url,
      item: {
        '@type': item.type ?? 'CreativeWork',
        name: item.name,
        url: item.url,
        description: item.description,
      },
    })),
  };
}

export function JsonLdCollectionPage({
  locale,
  name,
  description,
  lists,
}: {
  locale: Locale;
  name: string;
  description: string;
  lists: Array<{ name: string; items: ItemListEntry[] }>;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: absoluteUrl(`/${locale}/`),
    inLanguage: locale,
    about: getPublisher(),
    mainEntity: getPublisher(),
    hasPart: lists.map((list) => createItemList(list.name, list.items)),
    primaryImageOfPage: getAbsoluteOgImageUrl(),
    isPartOf: {
      '@type': 'WebSite',
      url: absoluteUrl(`/${locale}/`),
      name,
    },
    publisher: getPublisher(),
  };

  return <JsonLdScript data={data} />;
}

export function JsonLdItemList({
  name,
  items,
}: {
  name: string;
  items: ItemListEntry[];
}) {
  return <JsonLdScript data={{ '@context': 'https://schema.org', ...createItemList(name, items) }} />;
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
    image: getAbsoluteOgImageUrl(),
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
    image: absoluteUrl(`${path}opengraph-image`),
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
    image: absoluteUrl(`/${locale}/writing/${slug}/opengraph-image`),
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
