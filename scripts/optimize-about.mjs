import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, '../public/images');
const aboutInput = path.join(imagesDir, 'about.png');

async function optimizeAbout() {
  console.log('Optimizing about image...');
  const metadata = await sharp(aboutInput).metadata();
  console.log(`Original about.png: ${metadata.width}x${metadata.height}, ${(fs.statSync(aboutInput).size / (1024 * 1024)).toFixed(2)} MB`);

  const widths = [320, 480, 640, 800];

  for (const w of widths) {
    const webpOutput = path.join(imagesDir, `about-${w}w.webp`);
    const avifOutput = path.join(imagesDir, `about-${w}w.avif`);

    await sharp(aboutInput)
      .resize(w)
      .webp({ quality: 82, effort: 6 })
      .toFile(webpOutput);

    await sharp(aboutInput)
      .resize(w)
      .avif({ quality: 75, effort: 6 })
      .toFile(avifOutput);

    console.log(`  ✓ about-${w}w: WebP ${(fs.statSync(webpOutput).size / 1024).toFixed(1)} KB | AVIF ${(fs.statSync(avifOutput).size / 1024).toFixed(1)} KB`);
  }

  console.log('About image optimization complete.');
}

optimizeAbout().catch(console.error);
