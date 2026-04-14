import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Sparkles } from 'lucide-react';
import type { Dictionary } from '@/content/i18n';
import type { Locale } from '@/lib/i18n';
import { resume } from '@/content/resume';
import { GradientOrb } from '@/components/ui/GradientOrb';
import { Reveal } from '@/components/ui/Reveal';
import { Chip } from '@/components/ui/Chip';
import { ProfileIllustration } from '@/components/ui/ProfileIllustration';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export function Hero({ locale, dict }: Props) {
  return (
    <section className="relative isolate overflow-hidden">
      <GradientOrb className="right-[-10%] top-[-10%] size-[32rem]" />
      <GradientOrb className="left-[-15%] top-[40%] size-[28rem]" />
      <div className="mx-auto grid min-h-[82vh] max-w-content grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-[1.2fr_1fr] md:py-28">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-fg-subtle">
            {dict.hero.altName}
          </p>
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            <span className="name-shimmer inline-block">{dict.hero.name}</span>
          </h1>
          <p className="mt-5 text-lg text-fg-muted md:text-xl">{dict.hero.role}</p>
          <p className="mt-3 max-w-xl text-base text-fg-muted md:text-lg">
            {dict.hero.tagline}
          </p>

          <div className="mt-7 flex items-start gap-3 rounded-2xl border border-border bg-bg-subtle/50 p-4 text-sm">
            <Sparkles className="mt-0.5 size-4 shrink-0 text-accent-1" aria-hidden />
            <p className="text-fg-muted">
              <span className="font-semibold uppercase tracking-widest text-fg-subtle">
                {dict.hero.nowLabel}
              </span>
              <span className="mx-2 text-fg-subtle">·</span>
              <span className="text-fg">{dict.hero.nowValue}</span>
            </p>
          </div>

          <div className="mt-5">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-fg-subtle">
              {dict.hero.keywordsLabel}
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {resume.keywords.map((k) => (
                <li key={k}>
                  <Chip variant="accent">{k}</Chip>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
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

        <Reveal className="hidden md:block">
          <ProfileIllustration className="mx-auto aspect-square w-full max-w-sm" />
        </Reveal>
      </div>
    </section>
  );
}
