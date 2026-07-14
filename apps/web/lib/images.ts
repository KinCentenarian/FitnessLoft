type AssetMeta = {
  id: string;
  format: string;
  width?: number;
  height?: number;
};

const manifest = {
  Athletics: { id: "Athletics", format: "webp", width: 1920, height: 957 },
  chris: { id: "chris", format: "webp", width: 1120, height: 1680 },
  "cours-groupe-02": { id: "cours-groupe-02", format: "webp", width: 1120, height: 1680 },
  "cours-groupe-03": { id: "cours-groupe-03", format: "webp", width: 1069, height: 1604 },
  "cours-groupe": { id: "cours-groupe", format: "webp", width: 1120, height: 1680 },
  emilie: { id: "emilie", format: "webp", width: 1094, height: 1642 },
  "entrainement-prive-01": { id: "entrainement-prive-01", format: "webp", width: 1106, height: 1659 },
  "entrainement-prive-02": { id: "entrainement-prive-02", format: "webp", width: 1048, height: 1572 },
  "entrainement-prive-03": { id: "entrainement-prive-03", format: "webp", width: 1120, height: 1680 },
  "evaluation-sante-01": { id: "evaluation-sante-01", format: "webp", width: 1120, height: 1680 },
  "evaluation-sante-02": { id: "evaluation-sante-02", format: "webp", width: 1097, height: 1646 },
  "evaluation-sante-03": { id: "evaluation-sante-03", format: "webp", width: 1107, height: 1661 },
  "fitnessloft-entree": { id: "fitnessloft-entree", format: "webp", width: 1120, height: 1680 },
  "Golf-scaled-1": { id: "Golf-scaled-1", format: "webp", width: 2048, height: 2560 },
  "gym-44": { id: "gym-44", format: "webp", width: 400, height: 300 },
  hayley: { id: "hayley", format: "webp", width: 1120, height: 1680 },
  "kine-sportive": { id: "kine-sportive", format: "webp", width: 1120, height: 1680 },
  "masso-01": { id: "masso-01", format: "webp", width: 1120, height: 1680 },
  "masso-02": { id: "masso-02", format: "webp", width: 1120, height: 1680 },
  mathieu: { id: "mathieu", format: "webp", width: 1110, height: 1665 },
  nick: { id: "nick", format: "webp", width: 987, height: 1481 },
  noemie: { id: "noemie", format: "webp", width: 1069, height: 1604 },
  "programme-femme-02": { id: "programme-femme-02", format: "webp", width: 1120, height: 1680 },
  "programme-femme": { id: "programme-femme", format: "webp", width: 1115, height: 1673 },
  "Quotes-Icon": { id: "Quotes-Icon", format: "webp", width: 300, height: 300 },
  FitnessLoft_BRAND_LOGO_NOIR_GAUCHE: {
    id: "FitnessLoft_BRAND_LOGO_NOIR_GAUCHE",
    format: "svg",
    width: 404,
    height: 482,
  },
  FitnessLoft_BRAND_LOGO_NOIR_COMPLET: {
    id: "FitnessLoft_BRAND_LOGO_NOIR_COMPLET",
    format: "svg",
    width: 404,
    height: 482,
  },
} as const satisfies Record<string, AssetMeta>;

export type ImageId = keyof typeof manifest;

export function getAssetPath(id: string): string {
  const meta = manifest[id as ImageId];
  if (!meta) return `/media/${id}.webp`;
  return `/media/${meta.id}.${meta.format}`;
}

export function getAssetMeta(id: string): AssetMeta | undefined {
  return manifest[id as ImageId];
}

export const HERO_VIDEO = "/media/Le-Fitness-Loft-Final-V1v1-1080p.mp4";
