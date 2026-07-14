import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getContent, locales } from "@fitnessloft/content";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FeaturedProgramSection } from "@/components/sections/FeaturedProgramSection";
import { GolfTpiSection } from "@/components/sections/GolfTpiSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MapSection } from "@/components/sections/MapSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SportsTeamSection } from "@/components/sections/SportsTeamSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!locales.includes(locale as "fr" | "en")) notFound();

  setRequestLocale(locale);
  const content = await getContent(locale as "fr" | "en");

  return (
    <>
      <HeroSection content={content.hero} />
      <AboutSection content={content.about} />
      <ServicesSection content={content.services} locale={content.locale} />
      <FeaturedProgramSection content={content.featuredProgram} />
      <SportsTeamSection content={content.sportsTeam} />
      <GolfTpiSection content={content.golfTpi} />
      <TeamSection content={content.team} locale={content.locale} />
      <TestimonialsSection content={content.testimonials} locale={content.locale} />
      <MapSection content={content} />
      <ContactSection content={content} />
    </>
  );
}
