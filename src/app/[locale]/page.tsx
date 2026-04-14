import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';
import { getDictionary } from '@/content/i18n';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
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

  return (
    <main>
      <Hero locale={locale} dict={dict} />
      <About locale={locale} dict={dict} />
      <Experience locale={locale} dict={dict} />
      <Projects dict={dict} />
      <Skills dict={dict} />
      <Interests dict={dict} />
      <Contact dict={dict} />
    </main>
  );
}
