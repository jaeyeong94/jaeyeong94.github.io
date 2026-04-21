import { getDictionary } from '@/content/i18n';
import { projectCaseStudies, isProjectCaseStudySlug } from '@/content/projects';
import { resume } from '@/content/resume';
import { locales, isLocale } from '@/lib/i18n';
import { createOgImage, ogImageContentType, ogImageSize } from '@/lib/og-image';

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = 'Project case study preview image';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    Object.keys(projectCaseStudies).map((slug) => ({ locale, slug })),
  );
}

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isProjectCaseStudySlug(slug)) {
    return createOgImage({
      eyebrow: 'Portfolio',
      title: 'Ted Ryu',
      summary: '0→1 SaaS, AI orchestration, and fintech systems.',
      meta: 'Project case study',
      siteName: 'Ted Ryu',
    });
  }

  const dict = getDictionary(locale);
  const item = dict.projects.items[slug];
  const content = projectCaseStudies[slug].content[locale];
  const project = resume.projects.find((projectItem) => projectItem.id === slug);

  return createOgImage({
    eyebrow: content.eyebrow,
    title: item.title,
    summary: content.summary,
    meta: project ? `Case Study · ${project.stack.slice(0, 3).join(' · ')}` : 'Case Study',
    siteName: dict.meta.siteName,
  });
}
