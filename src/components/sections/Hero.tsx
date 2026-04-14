import Link from 'next/link';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import type { Dictionary } from '@/content/i18n';
import type { Locale } from '@/lib/i18n';
import { resume } from '@/content/resume';
import { GradientOrb } from '@/components/ui/GradientOrb';
import { Reveal } from '@/components/ui/Reveal';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export function Hero({ locale, dict }: Props) {
  return (
    <section className="relative isolate overflow-hidden">
      <GradientOrb className="right-[-10%] top-[-10%] size-[32rem]" />
      <GradientOrb className="left-[-15%] top-[40%] size-[28rem]" />
      <div className="mx-auto flex min-h-[80vh] max-w-content flex-col justify-center px-6 py-24 md:py-32">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-fg-subtle">
            {dict.hero.altName}
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-fg md:text-7xl">
            {dict.hero.name}
          </h1>
          <p className="mt-5 text-lg text-fg-muted md:text-xl">{dict.hero.role}</p>
          <p className="mt-3 max-w-xl text-base text-fg-muted md:text-lg">
            {dict.hero.tagline}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href={`/${locale}/#contact`}
              className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              {dict.hero.ctaContact}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a
              href={resume.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:text-fg"
            >
              <Github className="size-4" aria-hidden />
            </a>
            <a
              href={resume.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:text-fg"
            >
              <Linkedin className="size-4" aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
