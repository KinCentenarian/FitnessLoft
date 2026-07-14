import type { AboutContent } from "@fitnessloft/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection({ content }: { content: AboutContent }) {
  return (
    <section id="a-propos" className="py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="aspect-[3/4] overflow-hidden">
          <OptimizedImage
            id="fitnessloft-entree"
            alt={content.title}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <SectionHeading watermark={content.watermark} title={content.title} />
          <div className="space-y-4 text-base leading-relaxed text-accent">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#programmes">{content.ctaServices}</Button>
            <Button href="#contact" variant="outline">
              {content.ctaContact}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
