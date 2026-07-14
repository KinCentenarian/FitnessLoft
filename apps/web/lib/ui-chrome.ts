import type { Locale } from "@fitnessloft/content";

export const uiChrome = {
  fr: {
    prev: "Préc.",
    next: "Suiv.",
    menu: "Menu",
    mainNav: "Navigation principale",
    previousTeamMember: "Membre précédent",
    nextTeamMember: "Membre suivant",
    previousTestimonial: "Témoignage précédent",
    nextTestimonial: "Témoignage suivant",
    slide: (n: number) => `Diapositive ${n}`,
    testimonial: (n: number) => `Témoignage ${n}`,
    formError: "Impossible d'envoyer le message. Réessayez.",
    formSuccess: "Message envoyé avec succès.",
  },
  en: {
    prev: "Prev",
    next: "Next",
    menu: "Menu",
    mainNav: "Main navigation",
    previousTeamMember: "Previous team member",
    nextTeamMember: "Next team member",
    previousTestimonial: "Previous testimonial",
    nextTestimonial: "Next testimonial",
    slide: (n: number) => `Slide ${n}`,
    testimonial: (n: number) => `Testimonial ${n}`,
    formError: "Unable to send message. Please try again.",
    formSuccess: "Message sent successfully.",
  },
} as const;

export function getUiChrome(locale: Locale) {
  return uiChrome[locale];
}
