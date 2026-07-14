import type { Locale } from "@fitnessloft/content";

export const PROMO_STORAGE_KEY = "fitnessloft-promo-july-aug-dismissed";

export function isPromoPeriodActive(date = new Date()): boolean {
  const month = date.getMonth() + 1; // 1–12
  return month === 7 || month === 8;
}

export const promoCopy = {
  fr: {
    eyebrow: "Offre limitée",
    title: "15 % de rabais",
    description:
      "Profitez de 15 % de rabais sur votre première évaluation physique durant les mois de juillet et août.",
    emailLabel: "Votre courriel",
    emailPlaceholder: "courriel@exemple.com",
    submit: "Obtenir mon rabais",
    dismiss: "Non merci",
    success: "Merci ! Nous vous contardons bientôt.",
    error: "Impossible d'envoyer votre courriel. Réessayez.",
    invalidEmail: "Veuillez entrer un courriel valide.",
  },
  en: {
    eyebrow: "Limited offer",
    title: "15% off",
    description:
      "Get 15% off your first physical assessment during the months of July and August.",
    emailLabel: "Your email",
    emailPlaceholder: "email@example.com",
    submit: "Get my discount",
    dismiss: "No thanks",
    success: "Thank you! We'll be in touch soon.",
    error: "Unable to send your email. Please try again.",
    invalidEmail: "Please enter a valid email.",
  },
} as const;

export function getPromoCopy(locale: Locale) {
  return promoCopy[locale];
}
