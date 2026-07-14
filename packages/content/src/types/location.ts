import type { Locale } from "./locale";
import type { ServiceId } from "../catalog/services";

export interface OpeningHours {
  label: string;
  hours: string[];
}

export interface Location {
  id: string;
  slug: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  mapEmbedQuery: string;
  hours: OpeningHours;
  /** IDs from SERVICE_CATALOG offered at this location */
  services: ServiceId[];
  isPrimary?: boolean;
}

export type LocalizedLocation = Record<Locale, Omit<Location, "id" | "slug" | "services" | "isPrimary">>;
