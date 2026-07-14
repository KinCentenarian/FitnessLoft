import { z } from "zod";

/** Phase 5 — stub pour produits */
export const productIdSchema = z.string().min(1);

export const productSchema = z.object({
  id: productIdSchema,
  slug: z.string().min(1),
  name: z.string().min(1),
  description: z.string().min(1),
  priceCents: z.number().int().positive(),
  currency: z.literal("CAD"),
});

export type ProductInput = z.infer<typeof productSchema>;
