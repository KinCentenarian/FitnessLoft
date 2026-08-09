import type { ServiceCatalogEntry } from "../types/service";

export const SERVICE_CATALOG = {
  "health-assessment": { category: "clinical", bookable: true, contactForm: true },
  "private-training": { category: "fitness", bookable: true, contactForm: true },
  "group-classes": { category: "fitness", bookable: false, contactForm: true },
  "massage-therapy": { category: "clinical", bookable: true, contactForm: true },
  "stronger-longer": { category: "program", bookable: false, contactForm: false },
  "golf-tpi": { category: "specialty", bookable: true, contactForm: true },
} as const satisfies Record<string, ServiceCatalogEntry>;

export type ServiceId = keyof typeof SERVICE_CATALOG;

export const SERVICE_IDS = Object.keys(SERVICE_CATALOG) as ServiceId[];

export const BOOKABLE_SERVICE_IDS = SERVICE_IDS.filter(
  (id) => SERVICE_CATALOG[id].bookable,
);

export const CONTACT_FORM_SERVICE_IDS = SERVICE_IDS.filter(
  (id) => SERVICE_CATALOG[id].contactForm,
);
