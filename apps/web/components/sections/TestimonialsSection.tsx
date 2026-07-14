import type { Locale, TestimonialsContent } from "@fitnessloft/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";

export function TestimonialsSection({
  content,
  locale,
}: {
  content: TestimonialsContent;
  locale: Locale;
}) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading watermark={content.watermark} title={content.watermark} align="center" />
        <TestimonialCarousel items={content.items} locale={locale} />
      </Container>
    </section>
  );
}
