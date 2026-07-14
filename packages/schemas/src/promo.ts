import { z } from "zod";

export const promoLeadSchema = z.object({
  email: z.string().trim().email("Invalid email"),
  locale: z.enum(["fr", "en"]),
  /** Honeypot — must be empty */
  website: z.literal("").optional(),
});

export type PromoLeadInput = z.infer<typeof promoLeadSchema>;

export const PROMO_OPTIN_MESSAGE =
  "J'ai entré mon courriel pour avoir 15% de rabais sur ma première évaluation physique";
