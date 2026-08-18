import type { Locale } from "./locale";
import type { Location } from "./location";
import type { ServiceItem } from "./service";
import type { TeamContent } from "./team";
import type { ServiceId } from "../catalog/services";

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  ogLocale: string;
}

export interface HeroContent {
  title: string;
  description: string;
  cta: string;
}

export interface AboutContent {
  watermark: string;
  title: string;
  paragraphs: string[];
  ctaServices: string;
  ctaContact: string;
}

export interface ServicesContent {
  watermark: string;
  title: string;
  intro: string;
  items: ServiceItem[];
}

export interface SplitPanelItem {
  title: string;
  description: string;
  image: string;
  variant: "image-left" | "image-right" | "dark-panel" | "primary-panel";
}

/** Panels only — programme "Plus forte..." retiré, garder les blocs actifs */
export interface FeaturedProgramContent {
  panels: SplitPanelItem[];
}

export interface PartnerItem {
  id: string;
  name: string;
}

export interface SportsTeamContent {
  watermark: string;
  title: string;
  description: string;
  cta: string;
  panels: SplitPanelItem[];
  partners: {
    title: string;
    items: PartnerItem[];
  };
}

export interface GolfTpiContent {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  source?: string;
}

export interface TestimonialsContent {
  watermark: string;
  items: Testimonial[];
}

export interface ContactFormContent {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  submit: string;
  serviceOptions: { value: ServiceId; label: string }[];
}

export interface ContactContent {
  watermark: string;
  title: string;
  subtitle: string;
  phone: string;
  form: ContactFormContent;
}

export interface FooterContent {
  contactTitle: string;
  email: string;
  phone: string;
  address: string;
  hoursTitle: string;
  hours: { label: string; hours: string[] };
  copyright: string;
  social: { facebook: string; instagram: string; linkedin: string };
}

/** Page content without location-specific fields (merged by repository) */
export interface HomePageContent {
  locale: Locale;
  metadata: SiteMetadata;
  nav: NavItem[];
  headerCta: string;
  hero: HeroContent;
  about: AboutContent;
  services: ServicesContent;
  featuredProgram: FeaturedProgramContent;
  sportsTeam: SportsTeamContent;
  golfTpi: GolfTpiContent;
  team: TeamContent;
  testimonials: TestimonialsContent;
  contact: Omit<ContactContent, "phone">;
  footer: Pick<FooterContent, "contactTitle" | "hoursTitle" | "copyright" | "social">;
}

/** Full page model exposed to the application */
export interface SiteContent extends HomePageContent {
  location: Location;
  map: { address: string; embedQuery: string };
  contact: ContactContent;
  footer: FooterContent;
}
