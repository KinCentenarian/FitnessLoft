import type { SportsTeamContent } from "@fitnessloft/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SportsTeamSection({ content }: { content: SportsTeamContent }) {
  return (
    <section className="bg-panel-dark py-20 md:py-28">
      <Container>
        <SectionHeading watermark={content.watermark} title={content.title} />
        <p className="mb-12 max-w-3xl text-base leading-relaxed text-accent">
          {content.description}
        </p>
        <Button href="#contact">{content.cta}</Button>
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {content.panels.map((panel) => (
            <article key={panel.title} className="overflow-hidden bg-secondary">
              <div className="aspect-[16/10]">
                <OptimizedImage id={panel.image} alt={panel.title} />
              </div>
              <div className="p-8">
                <h3 className="font-brand text-xl text-white md:text-2xl">{panel.title}</h3>
                <p className="mt-3 text-accent">{panel.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 border-t border-white/10 pt-16">
          <h3 className="font-brand mb-10 text-center text-2xl text-white md:text-3xl">
            {content.partners.title}
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.partners.items.map((partner) => (
              <li
                key={partner.id}
                className="flex min-h-24 items-center justify-center border border-white/15 bg-secondary px-4 py-6 text-center"
              >
                <span className="font-brand text-sm text-primary md:text-base">
                  {partner.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
