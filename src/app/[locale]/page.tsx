import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';
import { getDictionary } from '@/content/i18n';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Manifesto } from '@/components/sections/Manifesto';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Writing } from '@/components/sections/Writing';
import { Reading } from '@/components/sections/Reading';
import { Interests } from '@/components/sections/Interests';
import { Contact } from '@/components/sections/Contact';

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

  return (
    <main id="main-content">
      <Hero locale={locale} dict={dict} />
      <About locale={locale} dict={dict} />
      <Manifesto dict={dict} />
      <Experience locale={locale} dict={dict} />
      <Projects dict={dict} />
      <Skills dict={dict} />
      <Writing dict={dict} locale={locale} />
      <Reading dict={dict} />
      <Interests dict={dict} />
      <Contact dict={dict} />
    </main>
  );
}
