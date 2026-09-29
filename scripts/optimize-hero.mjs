import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, '../public/images');
const heroInput = path.join(imagesDir, 'hero.png');

async function optimizeHero() {
  console.log('Optimizing hero image...');
  const metadata = await sharp(heroInput).metadata();
  console.log(`Original hero.png: ${metadata.width}x${metadata.height}, ${(fs.statSync(heroInput).size / (1024 * 1024)).toFixed(2)} MB`);

  const widths = [320, 480, 640, 800];

  for (const w of widths) {
    const webpOutput = path.join(imagesDir, `hero-${w}w.webp`);
    const avifOutput = path.join(imagesDir, `hero-${w}w.avif`);

    await sharp(heroInput)
      .resize(w)
      .webp({ quality: 82, effort: 6 })
      .toFile(webpOutput);

    await sharp(heroInput)
      .resize(w)
      .avif({ quality: 75, effort: 6 })
      .toFile(avifOutput);

    console.log(`  ✓ hero-${w}w: WebP ${(fs.statSync(webpOutput).size / 1024).toFixed(1)} KB | AVIF ${(fs.statSync(avifOutput).size / 1024).toFixed(1)} KB`);
  }

  // Also create a web-optimized fallback PNG (scaled to 640px) as hero-fallback.png or optimize hero.png
  // The user says: "Keep hero.png as the source asset/fallback."
  console.log('Hero optimization complete.');
}

optimizeHero().catch(console.error);
