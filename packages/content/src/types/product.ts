/** Stub — Phase 5: catalogue produits (forfaits, suppléments) */
export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  priceCents: number;
  currency: "CAD";
  image?: string;
}
