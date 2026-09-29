import sharp from "sharp";
import { statSync } from "node:fs";

// [source, maxWidth, quality]
const jobs = [
  ["public/assets/hero-house-only.png", 1920, 72],
];

const kb = (p) => Math.round(statSync(p).size / 1024);

for (const [src, width, quality] of jobs) {
  const out = src.replace(/\.(png|jpe?g)$/i, ".webp");
  const before = kb(src);
  await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(out);
  console.log(`${src} (${before}KB) -> ${out} (${kb(out)}KB)`);
}
console.log("done");
