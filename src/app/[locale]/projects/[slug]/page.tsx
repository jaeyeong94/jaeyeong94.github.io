import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getDictionary } from '@/content/i18n';
import { projectCaseStudies, isProjectCaseStudySlug } from '@/content/projects';
import { resume } from '@/content/resume';
import { locales, isLocale } from '@/lib/i18n';
import { getOgImage, openGraphLocaleMap, personName, publisherName } from '@/lib/seo';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    Object.keys(projectCaseStudies).map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isProjectCaseStudySlug(slug)) return {};

  const dict = getDictionary(locale);
  const content = projectCaseStudies[slug].content[locale];
  const item = dict.projects.items[slug];
  const url = `/${locale}/projects/${slug}/`;
  const languageAlternates = Object.fromEntries(
    locales.map((lang) => [lang, `/${lang}/projects/${slug}/`]),
  );
  const openGraphImageAlt = `${item.title} — ${dict.meta.siteName}`;

  return {
    title: `${item.title} — ${dict.projects.viewCaseStudy}`,
    description: content.summary,
    authors: [{ name: personName }],
    creator: personName,
    publisher: publisherName,
    alternates: {
      canonical: url,
      languages: {
        ...languageAlternates,
        'x-default': `/ko/projects/${slug}/`,
      },
    },
    openGraph: {
      title: item.title,
      description: content.summary,
      url,
      siteName: dict.meta.siteName,
      locale: openGraphLocaleMap[locale],
      alternateLocale: locales
        .filter((lang) => lang !== locale)
        .map((lang) => openGraphLocaleMap[lang]),
      type: 'article',
      images: getOgImage(openGraphImageAlt),
    },
    twitter: {
      card: 'summary_large_image',
      title: item.title,
      description: content.summary,
      images: ['/og-image.png'],
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isProjectCaseStudySlug(slug)) notFound();

  const dict = getDictionary(locale);
  const project = resume.projects.find((item) => item.id === slug);
  if (!project) notFound();

  const content = projectCaseStudies[slug].content[locale];
  const item = dict.projects.items[slug];

  return (
    <main id="main-content" className="section-frame py-24 md:py-28">
      <div className="max-w-readable">
        <Link
          href={`/${locale}/#projects`}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-fg-muted transition-colors hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          {dict.projects.backToProjects}
        </Link>

        <header className="mt-8 border-b border-border pb-8">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-fg-subtle">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-fg md:text-4xl">
            {item.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-fg-muted md:text-lg">
            {content.summary}
          </p>
          <p className="mt-5 font-mono text-xs text-fg-subtle">{project.stack.join(' · ')}</p>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm text-fg transition-colors hover:border-accent-1 hover:text-accent-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-1"
            >
              {dict.projects.viewSite}
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          ) : null}
        </header>

        <dl className="mt-10 grid gap-4 md:grid-cols-2">
          {content.highlights.map((highlight) => (
            <div key={highlight.label} className="rounded-2xl border border-border bg-surface p-5">
              <dt className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-fg-subtle">
                {highlight.label}
              </dt>
              <dd className="mt-3 text-lg font-semibold text-fg">{highlight.value}</dd>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{highlight.note}</p>
            </div>
          ))}
        </dl>

        <div className="mt-12 space-y-10">
          {content.sections.map((section) => (
            <section key={section.title} className="border-t border-border pt-8">
              <h2 className="text-xl font-semibold tracking-tight text-fg md:text-2xl">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-[1.8] text-fg-muted">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
