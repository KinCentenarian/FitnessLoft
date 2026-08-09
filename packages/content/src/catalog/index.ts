import type { Locale } from "../types/locale";
import { CONTACT_FORM_SERVICE_IDS } from "./services";
import { SERVICE_LABELS_EN, SERVICE_LABELS_FR } from "./service-labels";

export function getServiceFormOptions(locale: Locale) {
  const labels = locale === "fr" ? SERVICE_LABELS_FR : SERVICE_LABELS_EN;
  return CONTACT_FORM_SERVICE_IDS.map((value) => ({ value, label: labels[value] }));
}

export * from "./services";
export * from "./service-labels";
