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
      <div className="section-frame pb-16 pt-24 md:pb-20 md:pt-28">
        {/* Masthead rule */}
        <Reveal>
          <div className="flex items-end justify-between gap-6 border-b border-border pb-5">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
              Portfolio · Vol. 01 · {new Date().getFullYear()}
            </p>
            <p className="hidden text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle md:block">
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
            <h1 className="leading-[1] tracking-tight">
              <span className="name-shimmer block text-5xl font-bold md:text-6xl lg:text-7xl">
                {dict.hero.name}
              </span>
              <span className="mt-2 block text-2xl font-medium text-fg-muted md:text-3xl lg:text-4xl">
                {dict.hero.altName}
              </span>
            </h1>
          </div>
        </Reveal>

        {/* Role + tagline */}
        <Reveal>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-fg md:mt-10 md:text-lg">
            {dict.hero.role}
            <span className="mx-2 text-fg-subtle">—</span>
            <span className="text-fg-muted">{dict.hero.tagline}</span>
          </p>
        </Reveal>

        {/* Now */}
        <Reveal>
          <div className="mt-12 border-t border-border pt-8 md:mt-14">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
              {dict.hero.nowLabel}
            </p>
            <p className="mt-3 max-w-3xl text-lg font-medium leading-snug text-fg md:text-xl">
              {dict.hero.nowValue}
            </p>
          </div>
        </Reveal>

        {/* Keywords */}
        <Reveal>
          <div className="mt-10 flex flex-col items-start gap-3 border-t border-border pt-6 md:flex-row md:items-center md:gap-6">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
              {dict.hero.keywordsLabel}
            </p>
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-fg-muted">
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
          <div className="mt-10 flex flex-wrap items-center gap-3">
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
