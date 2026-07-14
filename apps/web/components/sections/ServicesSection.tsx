import type { Locale, ServicesContent } from "@fitnessloft/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageSlideshow } from "@/components/ui/ImageSlideshow";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesSection({
  content,
  locale,
}: {
  content: ServicesContent;
  locale: Locale;
}) {
  return (
    <section id="programmes" className="bg-panel-dark py-20 md:py-28">
      <Container>
        <SectionHeading watermark={content.watermark} title={content.title} />
        <p className="mb-12 max-w-3xl text-base leading-relaxed text-accent">{content.intro}</p>
        <div className="space-y-20">
          {content.items.map((item, index) => (
            <article
              key={item.id}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <ImageSlideshow images={item.images} alt={item.title} locale={locale} />
              <div>
                <h3 className="font-brand text-2xl text-white md:text-3xl">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-accent">{item.description}</p>
                <div className="mt-6">
                  <Button href="#contact">{item.cta}</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
