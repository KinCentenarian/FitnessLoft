import { z } from "zod";
import { CONTACT_FORM_SERVICE_IDS } from "@fitnessloft/content";

const serviceIdSchema = z.enum(
  CONTACT_FORM_SERVICE_IDS as [
    (typeof CONTACT_FORM_SERVICE_IDS)[number],
    ...(typeof CONTACT_FORM_SERVICE_IDS)[number][],
  ],
);

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Invalid email"),
  phone: z
    .string()
    .trim()
    .min(7)
    .max(20)
    .regex(/^[0-9()#&+*\-=. ]+$/, "Invalid phone number"),
  service: serviceIdSchema,
  message: z.string().trim().max(2000).optional(),
  locale: z.enum(["fr", "en"]),
  /** Honeypot — must be empty */
  website: z.literal("").optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
