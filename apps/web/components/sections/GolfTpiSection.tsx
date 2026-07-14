import type { GolfTpiContent } from "@fitnessloft/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

export function GolfTpiSection({ content }: { content: GolfTpiContent }) {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="aspect-[4/5] overflow-hidden">
          <OptimizedImage id="Golf-scaled-1" alt={content.title} sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div>
          <h2 className="font-brand text-4xl text-white md:text-[3.4rem]">{content.title}</h2>
          <p className="mt-2 text-sm uppercase tracking-widest text-primary">{content.subtitle}</p>
          <p className="mt-6 text-base leading-relaxed text-accent">{content.description}</p>
          <div className="mt-8">
            <Button href="#contact">{content.cta}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
