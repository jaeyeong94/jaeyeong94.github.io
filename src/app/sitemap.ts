import type { MetadataRoute } from 'next';
import { projectCaseStudies } from '@/content/projects';
import { resume } from '@/content/resume';
import { writingPosts } from '@/content/writing';
import { locales } from '@/lib/i18n';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const buildTime = process.env.BUILD_TIME ?? new Date().toISOString();
  const toIsoDate = (value: string) => new Date(`${value}T00:00:00Z`).toISOString();
  const pages = locales.map((locale) => ({
    url: `https://jaeyeong94.github.io/${locale}/`,
    lastModified: buildTime,
    changeFrequency: 'monthly' as const,
    priority: locale === 'ko' ? 1.0 : 0.8,
  }));

  const writings = locales.flatMap((locale) =>
    resume.writingIds.map((slug) => ({
      url: `https://jaeyeong94.github.io/${locale}/writing/${slug}/`,
      lastModified: toIsoDate(writingPosts[slug].meta.date),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  );

  const projectDetails = locales.flatMap((locale) =>
    Object.keys(projectCaseStudies).map((slug) => ({
      url: `https://jaeyeong94.github.io/${locale}/projects/${slug}/`,
      lastModified: toIsoDate(projectCaseStudies[slug as keyof typeof projectCaseStudies].updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  );

  return [...pages, ...writings, ...projectDetails];
}
