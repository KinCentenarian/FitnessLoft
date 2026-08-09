export type ServiceCategory = "clinical" | "fitness" | "program" | "specialty";

export interface ServiceCatalogEntry {
  category: ServiceCategory;
  bookable: boolean;
  /** Shown in the landing contact form dropdown. Defaults to true when omitted. */
  contactForm?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  cta: string;
  /** Optional link to SERVICE_CATALOG id for booking/contact routing */
  catalogId?: string;
}
