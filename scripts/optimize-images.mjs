import sharp from "sharp";
import { statSync } from "node:fs";

// [source, maxWidth, quality]
const jobs = [
  ["public/assets/hero-house-only.png", 1920, 72],
  ["public/assets/waste/dumpster-hero.jpg", 1920, 72],
  ["public/assets/waste/dumpster-driveway.jpg", 1400, 70],
  ["public/assets/waste/dumpster-construction.jpg", 1400, 70],
  ["public/assets/waste/dumpster-loaded.jpg", 1400, 70],
  ["public/assets/waste/dumpster-delivery.jpg", 1400, 70],
  ["public/assets/waste/use-cleanout.jpg", 1200, 70],
  ["public/assets/waste/use-remodel.jpg", 1200, 70],
  ["public/assets/waste/use-demolition.jpg", 1200, 70],
  ["public/assets/waste/use-yard.jpg", 1200, 70],
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
