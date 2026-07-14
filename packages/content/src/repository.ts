import type { Locale } from "./types/locale";
import type { Location } from "./types/location";
import type { HomePageContent, SiteContent } from "./types/site";

export interface ContentRepository {
  getSiteContent(locale: Locale): Promise<SiteContent>;
  getLocations(locale: Locale): Promise<Location[]>;
  getLocation(locale: Locale, locationId: string): Promise<Location | null>;
}

export function mergeHomeWithLocation(
  home: HomePageContent,
  location: Location,
): SiteContent {
  return {
    ...home,
    location,
    map: {
      address: location.address,
      embedQuery: location.mapEmbedQuery,
    },
    contact: {
      ...home.contact,
      phone: location.phone,
      form: {
        ...home.contact.form,
        serviceOptions: home.contact.form.serviceOptions,
      },
    },
    footer: {
      ...home.footer,
      email: location.email,
      phone: location.phone,
      address: location.address,
      hours: location.hours,
    },
  };
}
