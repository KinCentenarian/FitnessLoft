import type { ServiceCatalogEntry } from "../types/service";

export const SERVICE_CATALOG = {
  "health-assessment": { category: "clinical", bookable: true },
  "private-training": { category: "fitness", bookable: true },
  "group-classes": { category: "fitness", bookable: false },
  "massage-therapy": { category: "clinical", bookable: true },
  "stronger-longer": { category: "program", bookable: false },
  "golf-tpi": { category: "specialty", bookable: true },
} as const satisfies Record<string, ServiceCatalogEntry>;

export type ServiceId = keyof typeof SERVICE_CATALOG;

export const SERVICE_IDS = Object.keys(SERVICE_CATALOG) as ServiceId[];

export const BOOKABLE_SERVICE_IDS = SERVICE_IDS.filter(
  (id) => SERVICE_CATALOG[id].bookable,
);
