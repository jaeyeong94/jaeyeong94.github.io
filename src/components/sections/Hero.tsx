import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Globe } from 'lucide-react';
import type { Dictionary } from '@/content/i18n';
import type { Locale } from '@/lib/i18n';
import { resume, totalCareerMonths, yearsFromMonths } from '@/content/resume';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export function Hero({ locale, dict }: Props) {
  const years = yearsFromMonths(totalCareerMonths(resume.profile.careerStart));

  return (
    <section className="relative isolate overflow-hidden">
      <div className="w-full px-6 pt-28 pb-16 md:px-10 md:pt-36 md:pb-24 lg:px-16 xl:px-24">
        {/* Top masthead rule */}
        <Reveal>
          <div className="flex items-end justify-between gap-6 border-b border-border pb-6">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-fg-subtle">
              Portfolio · Vol. 01 · {new Date().getFullYear()}
            </p>
            <p className="hidden text-[0.65rem] font-medium uppercase tracking-[0.4em] text-fg-subtle md:block">
              {dict.contact.locationValue}
            </p>
          </div>
        </Reveal>

        {/* Name */}
        <Reveal>
          <div className="mt-12 md:mt-16">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-fg-subtle">
              {dict.hero.altName}
            </p>
            <h1 className="text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.92] tracking-tight">
              <span className="name-shimmer block font-bold">{dict.hero.name}</span>
              <span className="mt-1 block font-display italic text-fg-muted">
                {dict.hero.altName === dict.hero.name ? '\u00A0' : '— ' + dict.hero.altName}
              </span>
            </h1>
          </div>
        </Reveal>

        {/* Two-column meta row (editorial) */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-[2fr_1fr]">
          <Reveal>
            <p className="max-w-xl text-lg leading-relaxed text-fg md:text-xl">
              {dict.hero.role}
              <span className="mx-2 text-fg-subtle">—</span>
              <span className="text-fg-muted">{dict.hero.tagline}</span>
            </p>
          </Reveal>

          <Reveal>
            <dl className="flex flex-row gap-8 border-l border-border pl-6 md:flex-col md:gap-6">
              <MetaPair
                label={`EXP`}
                value={
                  <span>
                    <span className="font-display text-3xl italic">{years}</span>
                    <span className="ml-1 text-sm text-fg-muted">{dict.common.years}+</span>
                  </span>
                }
              />
              <MetaPair
                label={`0→1`}
                value={
                  <span>
                    <span className="font-display text-3xl italic">6</span>
                    <span className="ml-1 text-sm text-fg-muted">+</span>
                  </span>
                }
              />
            </dl>
          </Reveal>
        </div>

        {/* Now — pull-quote style */}
        <Reveal>
          <figure className="mt-16 grid grid-cols-[auto_1fr] items-start gap-5 border-t border-border pt-8 md:mt-20">
            <p className="font-display text-3xl italic leading-none text-accent-1 md:text-4xl">
              “
            </p>
            <div>
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
                {dict.hero.nowLabel}
              </p>
              <blockquote className="mt-2 font-display text-2xl italic leading-snug text-fg md:text-3xl">
                {dict.hero.nowValue}
              </blockquote>
            </div>
          </figure>
        </Reveal>

        {/* Keywords — inline */}
        <Reveal>
          <div className="mt-12 flex flex-col items-start gap-3 border-t border-border pt-6 md:flex-row md:items-center md:gap-6">
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
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Link
              href={`/${locale}/#contact`}
              className={cn(
                'group inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg',
                'transition-transform hover:-translate-y-0.5',
              )}
            >
              {dict.hero.ctaContact}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
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

function MetaPair({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <dt className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
        {label}
      </dt>
      <dd className="mt-1 text-fg">{value}</dd>
    </div>
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
