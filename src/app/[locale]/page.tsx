import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';
import { getDictionary } from '@/content/i18n';
import { resume } from '@/content/resume';
import { fetchRecentRepos } from '@/lib/github';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { GithubActivity } from '@/components/sections/GithubActivity';
import { Writing } from '@/components/sections/Writing';
import { Reading } from '@/components/sections/Reading';
import { Interests } from '@/components/sections/Interests';
import { Contact } from '@/components/sections/Contact';

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const repos = await fetchRecentRepos(resume.profile.githubHandle, 6);

  return (
    <main>
      <Hero locale={locale} dict={dict} />
      <About locale={locale} dict={dict} />
      <Experience locale={locale} dict={dict} />
      <Projects dict={dict} />
      <Skills dict={dict} />
      <GithubActivity dict={dict} repos={repos} />
      <Writing dict={dict} />
      <Reading dict={dict} />
      <Interests dict={dict} />
      <Contact dict={dict} />
    </main>
  );
}
