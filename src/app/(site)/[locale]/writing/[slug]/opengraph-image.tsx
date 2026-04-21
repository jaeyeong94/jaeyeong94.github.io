import { getDictionary } from '@/content/i18n';
import { resume } from '@/content/resume';
import { isWritingSlug, writingPosts } from '@/content/writing';
import { locales, isLocale } from '@/lib/i18n';
import { createOgImage, ogImageContentType, ogImageSize } from '@/lib/og-image';

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = 'Writing preview image';

export function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];
  for (const locale of locales) {
    for (const slug of resume.writingIds) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isWritingSlug(slug)) {
    return createOgImage({
      eyebrow: 'Writing',
      title: 'Ted Ryu',
      summary: 'Notes on building products and backend systems.',
      meta: 'Writing',
      siteName: 'Ted Ryu',
    });
  }

  const dict = getDictionary(locale);
  const item = dict.writing.items[slug];
  const post = writingPosts[slug];

  return createOgImage({
    eyebrow: dict.writing.eyebrow,
    title: item.title,
    summary: item.summary,
    meta: `Writing · ${post.meta.date}`,
    siteName: dict.meta.siteName,
  });
}
