import type { Dictionary } from '@/content/i18n';
import { resume } from '@/content/resume';
import { Reveal } from '@/components/ui/Reveal';

interface Props {
  dict: Dictionary;
}

export function Interests({ dict }: Props) {
  return (
    <section
      id="interests"
      aria-labelledby="interests-heading"
      className="resume-print-hidden section-frame section-pad relative scroll-mt-24"
    >
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-fg-subtle">08</span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-fg-subtle">
            {dict.interests.eyebrow}
          </span>
        </div>
        <h2
          id="interests-heading"
          className="mt-5 text-3xl font-bold tracking-tight text-fg md:text-4xl"
        >
          {dict.interests.sectionTitle}
        </h2>
      </Reveal>

      <ol className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
        {resume.interests.map((id, i) => {
          const item = dict.interests.items[id];
          return (
            <Reveal key={id} as="li">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-fg-subtle">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-fg md:text-lg">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
}
