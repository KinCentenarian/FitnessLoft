import type { HeroContent } from "@fitnessloft/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HERO_VIDEO } from "@/lib/images";

export function HeroSection({ content }: { content: HeroContent }) {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden pb-20 pt-28">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/fitnessloft-entree.webp"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/45" />
      <Container className="relative z-10 max-w-3xl">
        <h1 className="font-brand-hero whitespace-pre-line text-4xl text-white md:text-6xl lg:text-[5.6rem]">
          {content.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
          {content.description}
        </p>
        <div className="mt-8">
          <Button href="#programmes">{content.cta}</Button>
        </div>
      </Container>
    </section>
  );
}
