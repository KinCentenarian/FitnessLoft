import { z } from "zod";

/** Phase 2 — validation des localisations */
export const locationIdSchema = z.string().min(1);

export const locationSchema = z.object({
  id: locationIdSchema,
  slug: z.string().min(1),
  name: z.string().min(1),
  address: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email(),
  mapEmbedQuery: z.string().min(1),
});

export type LocationInput = z.infer<typeof locationSchema>;
