import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Globe } from 'lucide-react';
import type { Dictionary } from '@/content/i18n';
import type { Locale } from '@/lib/i18n';
import { resume } from '@/content/resume';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export function Hero({ locale, dict }: Props) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="section-frame pb-16 pt-24 md:pb-24 md:pt-32">
        {/* Masthead rule */}
        <Reveal>
          <div className="flex items-end justify-between gap-6 border-b border-border pb-5">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-fg-subtle">
              Portfolio · Vol. 01 · {new Date().getFullYear()}
            </p>
            <p className="hidden text-[0.65rem] font-medium uppercase tracking-[0.4em] text-fg-subtle md:block">
              {dict.contact.locationValue}
            </p>
          </div>
        </Reveal>

        {/* Name block */}
        <Reveal>
          <div className="mt-10 md:mt-14">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-fg-subtle">
              {dict.hero.altName}
            </p>
            <h1 className="leading-[0.9] tracking-tight">
              <span className="name-shimmer block text-[clamp(4rem,13vw,11rem)] font-bold">
                {dict.hero.name}
              </span>
              <span className="mt-2 block text-[clamp(2.5rem,8vw,7rem)] font-display italic text-fg-muted">
                — {dict.hero.altName}
              </span>
            </h1>
          </div>
        </Reveal>

        {/* Role + tagline — single band */}
        <Reveal>
          <p className="mt-10 max-w-4xl text-xl leading-relaxed text-fg md:mt-14 md:text-2xl">
            {dict.hero.role}
            <span className="mx-3 text-fg-subtle">—</span>
            <span className="text-fg-muted">{dict.hero.tagline}</span>
          </p>
        </Reveal>

        {/* Now — editorial pull-quote */}
        <Reveal>
          <figure className="mt-16 grid grid-cols-[auto_1fr] items-start gap-5 border-t border-border pt-10 md:mt-20 md:gap-8">
            <p
              aria-hidden
              className="font-display text-5xl italic leading-none text-accent-1 md:text-6xl"
            >
              “
            </p>
            <div className="max-w-4xl">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
                {dict.hero.nowLabel}
              </p>
              <blockquote className="mt-2 font-display text-2xl italic leading-[1.25] text-fg md:text-4xl lg:text-5xl">
                {dict.hero.nowValue}
              </blockquote>
            </div>
          </figure>
        </Reveal>

        {/* Keywords — slash-separated inline */}
        <Reveal>
          <div className="mt-12 flex flex-col items-start gap-3 border-t border-border pt-6 md:flex-row md:items-center md:gap-6">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
              {dict.hero.keywordsLabel}
            </p>
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-fg-muted md:text-base">
              {resume.keywords.map((k, i) => (
                <li key={k} className="inline-flex items-center gap-3">
                  <span className="font-mono">{k}</span>
                  {i < resume.keywords.length - 1 && (
                    <span aria-hidden className="text-fg-subtle">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Link
              href={`/${locale}/#contact`}
              className={cn(
                'group inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg',
                'transition-transform hover:-translate-y-0.5',
              )}
            >
              {dict.hero.ctaContact}
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
            <SocialIcon href={resume.profile.freelanceSite} label="heyted.dev">
              <Globe className="size-4" aria-hidden />
            </SocialIcon>
            <SocialIcon href={resume.profile.github} label="GitHub">
              <Github className="size-4" aria-hidden />
            </SocialIcon>
            <SocialIcon href={resume.profile.linkedin} label="LinkedIn">
              <Linkedin className="size-4" aria-hidden />
            </SocialIcon>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex size-11 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:border-fg hover:text-fg"
    >
      {children}
    </a>
  );
}
