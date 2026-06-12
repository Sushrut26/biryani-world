// Crops the bottom 8% off every image in /public/recipes/
// to remove the Gemini watermark, then re-encodes at 85% JPEG.
// Idempotent: skips files that already have a .stripped marker.
//
// Usage: node scripts/strip-watermark.mjs

import { readdir, stat, rename, writeFile, access } from "node:fs/promises";
import { join, parse } from "node:path";
import sharp from "sharp";

const RECIPES_DIR = new URL("../public/recipes/", import.meta.url).pathname;
const CROP_RATIO = 0.08; // chop bottom 8%

const exists = async (p) =>
  access(p).then(
    () => true,
    () => false,
  );

const files = await readdir(RECIPES_DIR);
const targets = files.filter((f) => /\.(jpe?g|png|webp)$/i.test(f));

if (targets.length === 0) {
  console.error("No images in", RECIPES_DIR);
  process.exit(1);
}

let cropped = 0;
let skipped = 0;

for (const filename of targets) {
  const path = join(RECIPES_DIR, filename);
  const { name } = parse(filename);
  const markerPath = join(RECIPES_DIR, `.${name}.stripped`);

  if (await exists(markerPath)) {
    skipped++;
    console.log(`skip   ${filename} (already stripped)`);
    continue;
  }

  const img = sharp(path);
  const meta = await img.metadata();
  const newHeight = Math.round(meta.height * (1 - CROP_RATIO));

  const buffer = await img
    .extract({ left: 0, top: 0, width: meta.width, height: newHeight })
    .jpeg({ quality: 85, mozjpeg: true })
    .toBuffer();

  // Write to a temp path, then atomic rename so we never half-write.
  const tmpPath = `${path}.tmp`;
  await writeFile(tmpPath, buffer);
  await rename(tmpPath, path.replace(/\.(png|webp|jpeg)$/i, ".jpg"));

  // If extension changed, remove the original.
  if (!path.endsWith(".jpg") && !path.endsWith(".jpeg")) {
    // already renamed above; nothing else to do
  }

  await writeFile(markerPath, new Date().toISOString());
  cropped++;
  console.log(
    `crop   ${filename}  ${meta.width}x${meta.height} -> ${meta.width}x${newHeight}`,
  );
}

console.log(`\ndone. cropped: ${cropped}, skipped: ${skipped}`);
