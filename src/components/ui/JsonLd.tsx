import type { Locale } from '@/lib/i18n';
import { resume } from '@/content/resume';
import {
  absoluteUrl,
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
