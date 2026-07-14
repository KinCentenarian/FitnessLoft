import type { SiteContent } from "@fitnessloft/content";
import { Container } from "@/components/ui/Container";

export function MapSection({ content }: { content: SiteContent }) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(content.map.embedQuery)}&t=m&z=14&output=embed&iwloc=near`;

  return (
    <section className="bg-panel-dark py-20 md:py-28">
      <Container>
        <div className="overflow-hidden rounded-sm border border-white/10">
          <iframe
            title={content.map.address}
            src={src}
            className="aspect-[16/9] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="mt-4 text-sm text-accent">{content.map.address}</p>
      </Container>
    </section>
  );
}
