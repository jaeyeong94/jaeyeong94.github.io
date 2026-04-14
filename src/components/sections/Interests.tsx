import type { Dictionary } from '@/content/i18n';
import { resume } from '@/content/resume';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';

interface Props {
  dict: Dictionary;
}

export function Interests({ dict }: Props) {
  return (
    <section
      id="interests"
      aria-labelledby="interests-heading"
      className="mx-auto max-w-content scroll-mt-24 px-6 py-20 md:py-28"
    >
      <SectionHeading
        id="interests-heading"
        eyebrow={dict.interests.eyebrow}
        title={dict.interests.sectionTitle}
      />
      <div className="grid gap-5 md:grid-cols-2">
        {resume.interests.map((id) => {
          const item = dict.interests.items[id];
          return (
            <Reveal key={id}>
              <Card className="h-full">
                <h3 className="text-base font-semibold text-fg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.desc}</p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
