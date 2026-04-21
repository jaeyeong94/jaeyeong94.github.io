import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';
import { getDictionary } from '@/content/i18n';
import { projectCaseStudies } from '@/content/projects';
import { writingPosts } from '@/content/writing';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Manifesto } from '@/components/sections/Manifesto';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Writing } from '@/components/sections/Writing';
import { Reading } from '@/components/sections/Reading';
import { Interests } from '@/components/sections/Interests';
import { Contact } from '@/components/sections/Contact';
import { JsonLdCollectionPage, JsonLdItemList } from '@/components/ui/JsonLd';

const Experience = dynamic(
  () => import('@/components/sections/Experience').then((mod) => mod.Experience),
);

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const caseStudyItems = Object.keys(projectCaseStudies).map((slug) => {
    const item = dict.projects.items[slug as keyof typeof dict.projects.items];
    return {
      name: item.title,
      description: item.desc,
      url: `https://jaeyeong.me/${locale}/projects/${slug}/`,
      type: 'Article' as const,
    };
  });
  const writingItems = Object.entries(writingPosts).map(([slug]) => {
    const item = dict.writing.items[slug as keyof typeof dict.writing.items];
    return {
      name: item.title,
      description: item.summary,
      url: `https://jaeyeong.me/${locale}/writing/${slug}/`,
      type: 'BlogPosting' as const,
    };
  });

  return (
    <>
      <JsonLdCollectionPage
        locale={locale}
        name={dict.meta.title}
        description={dict.meta.description}
        lists={[
          { name: dict.projects.sectionTitle, items: caseStudyItems },
          { name: dict.writing.sectionTitle, items: writingItems },
        ]}
      />
      <JsonLdItemList name={dict.projects.sectionTitle} items={caseStudyItems} />
      <JsonLdItemList name={dict.writing.sectionTitle} items={writingItems} />
      <main id="main-content">
        <Hero locale={locale} dict={dict} />
        <About locale={locale} dict={dict} />
        <Experience locale={locale} dict={dict} />
        <Projects dict={dict} locale={locale} />
        <Skills dict={dict} />
        <Writing dict={dict} locale={locale} />
        <Manifesto dict={dict} />
        <Reading dict={dict} />
        <Interests dict={dict} />
        <Contact dict={dict} />
      </main>
    </>
  );
}
