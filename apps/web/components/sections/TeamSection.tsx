import type { Locale, TeamContent } from "@fitnessloft/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCounter } from "@/components/ui/StatCounter";
import { TeamCarousel } from "@/components/ui/TeamCarousel";

export function TeamSection({
  content,
  locale,
}: {
  content: TeamContent;
  locale: Locale;
}) {
  return (
    <section id="equipe" className="bg-panel-dark py-20 md:py-28">
      <Container>
        <SectionHeading watermark={content.watermark} title={content.title} />
        <p className="mb-12 max-w-2xl text-base text-accent">{content.description}</p>
        <div className="mb-16 grid gap-8 sm:grid-cols-2">
          {content.stats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
        <TeamCarousel members={content.members} locale={locale} />
      </Container>
    </section>
  );
}
