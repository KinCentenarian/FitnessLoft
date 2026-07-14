import type { Locale } from "./types/locale";
import type { Location } from "./types/location";
import type { SiteContent } from "./types/site";
import { getServiceFormOptions } from "./catalog";
import { enHome } from "./locales/en/home";
import { frHome } from "./locales/fr/home";
import {
  LOCATIONS,
  pointeClaireLocation,
  PRIMARY_LOCATION_ID,
} from "./locales/locations/pointe-claire";
import { type ContentRepository, mergeHomeWithLocation } from "./repository";

const homeByLocale = { fr: frHome, en: enHome } as const;

function resolveLocation(locale: Locale, locationId: string): Location | null {
  const entry = LOCATIONS.find((l) => l.id === locationId);
  if (!entry) return null;
  const localized = entry[locale];
  return {
    id: entry.id,
    slug: entry.slug,
    services: [...entry.services],
    isPrimary: entry.isPrimary,
    ...localized,
  };
}

export function buildSiteContentForLocale(locale: Locale): SiteContent {
  const home = homeByLocale[locale];
  const location = resolveLocation(locale, PRIMARY_LOCATION_ID);
  if (!location) {
    throw new Error(`Primary location not found: ${PRIMARY_LOCATION_ID}`);
  }
  const merged = mergeHomeWithLocation(home, location);
  merged.contact.form.serviceOptions = getServiceFormOptions(locale);
  return merged;
}

export class FileContentRepository implements ContentRepository {
  async getSiteContent(locale: Locale): Promise<SiteContent> {
    return buildSiteContentForLocale(locale);
  }

  async getLocations(locale: Locale): Promise<Location[]> {
    return LOCATIONS.map((entry) => {
      const localized = entry[locale];
      return {
        id: entry.id,
        slug: entry.slug,
        services: [...entry.services],
        isPrimary: entry.isPrimary,
        ...localized,
      };
    });
  }

  async getLocation(locale: Locale, locationId: string): Promise<Location | null> {
    return resolveLocation(locale, locationId);
  }
}

/** Default repository — swap implementation when migrating to Sanity */
export const contentRepository: ContentRepository = new FileContentRepository();

export async function getContent(locale: Locale): Promise<SiteContent> {
  return contentRepository.getSiteContent(locale);
}

/** Synchronous access for static tooling and tests */
export function getContentSync(locale: Locale): SiteContent {
  return buildSiteContentForLocale(locale);
}

export { pointeClaireLocation, PRIMARY_LOCATION_ID };
