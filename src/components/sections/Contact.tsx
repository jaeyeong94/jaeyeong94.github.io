import { Github, Linkedin, Globe, ArrowUpRight } from 'lucide-react';
import type { Dictionary } from '@/content/i18n';
import { resume } from '@/content/resume';
import { ObfuscatedEmail } from '@/components/ui/ObfuscatedEmail';
import { Reveal } from '@/components/ui/Reveal';

interface Props {
  dict: Dictionary;
}

export function Contact({ dict }: Props) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full scroll-mt-24 px-6 py-24 md:px-10 md:py-32 lg:px-16 xl:px-24"
    >
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-display text-2xl italic text-fg-subtle">09</span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            {dict.contact.eyebrow}
          </span>
        </div>
      </Reveal>

      <h2 id="contact-heading" className="sr-only">
        {dict.contact.sectionTitle}
      </h2>

      <Reveal>
        <p className="mt-14 font-display text-4xl italic leading-[1.1] text-fg md:text-6xl">
          {dict.contact.headline}
        </p>
        <p className="mt-6 max-w-2xl text-base text-fg-muted md:text-lg">{dict.contact.cta}</p>
      </Reveal>

      <Reveal>
        <address className="mt-16 grid grid-cols-1 gap-y-0 not-italic md:grid-cols-2">
          <ContactLine label={dict.contact.emailLabel}>
            <ObfuscatedEmail
              user={resume.profile.emailUser}
              domain={resume.profile.emailDomain}
              className="group inline-flex items-center gap-1 text-fg transition-colors hover:text-accent-1"
            />
          </ContactLine>
          <ContactLine label={dict.contact.locationLabel}>
            <span className="text-fg">{dict.contact.locationValue}</span>
          </ContactLine>
          <ContactLine label={dict.contact.freelanceLabel}>
            <a
              href={resume.profile.freelanceSite}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-fg transition-colors hover:text-accent-1"
            >
              heyted.dev
              <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </a>
          </ContactLine>
          <ContactLine label="GitHub">
            <a
              href={resume.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-fg transition-colors hover:text-accent-1"
            >
              github.com/jaeyeong94
              <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </a>
          </ContactLine>
          <ContactLine label="LinkedIn">
            <a
              href={resume.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-fg transition-colors hover:text-accent-1"
            >
              linkedin.com/in/jae-yeong-you
              <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </a>
          </ContactLine>
        </address>
      </Reveal>

      {/* Icon row — minimal */}
      <Reveal>
        <div className="mt-12 flex flex-wrap items-center gap-3">
          <IconLink href={resume.profile.freelanceSite} label="heyted.dev">
            <Globe className="size-4" aria-hidden />
          </IconLink>
          <IconLink href={resume.profile.github} label="GitHub">
            <Github className="size-4" aria-hidden />
          </IconLink>
          <IconLink href={resume.profile.linkedin} label="LinkedIn">
            <Linkedin className="size-4" aria-hidden />
          </IconLink>
        </div>
      </Reveal>
    </section>
  );
}

function ContactLine({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[7rem_1fr] items-baseline gap-4 border-b border-border py-4 md:py-5">
      <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-fg-subtle">{label}</p>
      <div className="text-sm md:text-base">{children}</div>
    </div>
  );
}

function IconLink({
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
      className="inline-flex size-10 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:border-fg hover:text-fg"
    >
      {children}
    </a>
  );
}
