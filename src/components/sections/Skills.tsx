import type { Dictionary } from '@/content/i18n';
import { resume } from '@/content/resume';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';
import { Reveal } from '@/components/ui/Reveal';

interface Props {
  dict: Dictionary;
}

export function Skills({ dict }: Props) {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto max-w-content scroll-mt-24 px-6 py-20 md:py-28"
    >
      <SectionHeading
        id="skills-heading"
        eyebrow={dict.skills.eyebrow}
        title={dict.skills.sectionTitle}
      />
      <div className="grid gap-5 md:grid-cols-2">
        {resume.skills.map((cat) => (
          <Reveal key={cat.id}>
            <Card className="h-full">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-fg-subtle">
                {dict.skills.categories[cat.id]}
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {cat.items.map((s) => (
                  <li key={s}>
                    <Chip>{s}</Chip>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
