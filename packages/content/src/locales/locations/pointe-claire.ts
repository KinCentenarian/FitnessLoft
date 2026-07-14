import type { LocalizedLocation } from "../../types/location";
import type { ServiceId } from "../../catalog/services";

const POINTE_CLAIRE_SERVICES: ServiceId[] = [
  "health-assessment",
  "private-training",
  "group-classes",
  "massage-therapy",
  "stronger-longer",
  "golf-tpi",
];

export const pointeClaireLocation: LocalizedLocation & {
  id: string;
  slug: string;
  services: ServiceId[];
  isPrimary: boolean;
} = {
  id: "pointe-claire",
  slug: "pointe-claire",
  services: POINTE_CLAIRE_SERVICES,
  isPrimary: true,
  fr: {
    name: "Le Fitness Loft — Pointe-Claire",
    address: "2001 Boulevard des Sources Pointe-Claire, Qc, H9R 5Z4",
    phone: "514.542.3555",
    email: "info@lefitnessloft.com",
    mapEmbedQuery: "2001 Sources Blvd, Pointe-Claire, Quebec H9R 5Z4",
    hours: {
      label: "Horaire de la salle de sport",
      hours: [
        "Lundi-vendredi : 6h00 – 20h00",
        "Samedi-dimanche : 7h00 – 15h00",
      ],
    },
  },
  en: {
    name: "Le Fitness Loft — Pointe-Claire",
    address: "2001 Boulevard des Sources Pointe-Claire, Qc, H9R 5Z4",
    phone: "514.542.3555",
    email: "info@lefitnessloft.com",
    mapEmbedQuery: "2001 Sources Blvd, Pointe-Claire, Quebec H9R 5Z4",
    hours: {
      label: "Gym opening hours",
      hours: [
        "Monday-Friday: 6:00 a.m. to 8:00 p.m.",
        "Saturday-Sunday: 7:00 a.m. to 3:00 p.m.",
      ],
    },
  },
};

export const LOCATIONS = [pointeClaireLocation] as const;

export const PRIMARY_LOCATION_ID = "pointe-claire";
