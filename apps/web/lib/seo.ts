import type { Locale, SiteContent } from "@fitnessloft/content";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lefitnessloft.sltm.ca";

export function getCanonicalUrl(locale: Locale): string {
  return locale === "fr" ? SITE_URL : `${SITE_URL}/en`;
}

export function buildLocalBusinessJsonLd(content: SiteContent) {
  const { location, metadata } = content;
  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: metadata.title,
    description: metadata.description,
    url: getCanonicalUrl(content.locale),
    telephone: location.phone,
    email: location.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressLocality: "Pointe-Claire",
      addressRegion: "QC",
      addressCountry: "CA",
    },
    openingHoursSpecification: location.hours.hours.map((line) => ({
      "@type": "OpeningHoursSpecification",
      description: line,
    })),
    sameAs: [
      content.footer.social.facebook,
      content.footer.social.instagram,
      content.footer.social.linkedin,
    ],
  };
}
