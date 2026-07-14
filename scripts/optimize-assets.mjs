import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const RAW = path.join(ROOT, "assets", "raw");
const OUT = path.join(ROOT, "assets", "optimized");

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png"]);
const COPY_EXT = new Set([".svg", ".mp4"]);

await fs.mkdir(OUT, { recursive: true });

const files = await fs.readdir(RAW);
const manifest = {
  generatedAt: new Date().toISOString(),
  assets: [],
};

for (const file of files.sort()) {
  const src = path.join(RAW, file);
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, ext);

  if (COPY_EXT.has(ext)) {
    const destName = file;
    const dest = path.join(OUT, destName);
    await fs.copyFile(src, dest);
    const stat = await fs.stat(dest);
    manifest.assets.push({
      id: base,
      source: `raw/${file}`,
      optimized: `optimized/${destName}`,
      format: ext.slice(1),
      bytes: stat.size,
    });
    continue;
  }

  if (!IMAGE_EXT.has(ext)) continue;

  const destName = `${base}.webp`;
  const dest = path.join(OUT, destName);
  const inputStat = await fs.stat(src);
  const image = sharp(src);
  const meta = await image.metadata();

  await image.webp({ quality: 82, effort: 4 }).toFile(dest);

  const outputStat = await fs.stat(dest);
  manifest.assets.push({
    id: base,
    source: `raw/${file}`,
    optimized: `optimized/${destName}`,
    format: "webp",
    width: meta.width,
    height: meta.height,
    bytesRaw: inputStat.size,
    bytes: outputStat.size,
    savingsPercent: Math.round((1 - outputStat.size / inputStat.size) * 100),
  });
}

await fs.writeFile(
  path.join(ROOT, "assets", "manifest.json"),
  JSON.stringify(manifest, null, 2),
  "utf8",
);

const totalRaw = manifest.assets.reduce((s, a) => s + (a.bytesRaw ?? a.bytes), 0);
const totalOpt = manifest.assets.reduce((s, a) => s + a.bytes, 0);
console.log(`Optimized ${manifest.assets.length} assets`);
console.log(`Total: ${(totalRaw / 1024 / 1024).toFixed(2)} MB → ${(totalOpt / 1024 / 1024).toFixed(2)} MB`);
