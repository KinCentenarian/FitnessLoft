import { z } from "zod";

/** Phase 4 — stub pour pages légales */
export const legalPageSlugSchema = z.enum([
  "privacy-policy",
  "terms-of-use",
  "cookie-policy",
]);

export type LegalPageSlug = z.infer<typeof legalPageSlugSchema>;
