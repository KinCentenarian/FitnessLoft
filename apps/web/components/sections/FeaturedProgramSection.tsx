import type { FeaturedProgramContent } from "@fitnessloft/content";
import { Container } from "@/components/ui/Container";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { cn } from "@/lib/utils";

export function FeaturedProgramSection({ content }: { content: FeaturedProgramContent }) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="space-y-8">
          {content.panels.map((panel) => (
            <div
              key={panel.title}
              className={cn(
                "grid items-stretch overflow-hidden lg:grid-cols-2",
                panel.variant === "primary-panel" && "bg-primary text-secondary",
                panel.variant === "dark-panel" && "bg-panel-dark",
              )}
            >
              {panel.variant === "image-left" || panel.variant === "image-right" ? (
                <div
                  className={cn(
                    "aspect-[16/10] lg:aspect-auto lg:min-h-[320px]",
                    panel.variant === "image-right" && "lg:order-2",
                  )}
                >
                  <OptimizedImage id={panel.image} alt={panel.title} />
                </div>
              ) : null}
              <div className="flex flex-col justify-center p-8 md:p-12">
                <h2 className="font-brand text-2xl md:text-3xl">{panel.title}</h2>
                <p className="mt-4 text-base leading-relaxed opacity-80">{panel.description}</p>
              </div>
              {panel.variant === "primary-panel" ? (
                <div className="aspect-[16/10] lg:aspect-auto lg:min-h-[320px]">
                  <OptimizedImage id={panel.image} alt={panel.title} />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
