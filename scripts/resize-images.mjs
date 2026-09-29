import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, '../public/images');

async function resize(inputFile, outputSuffix, width) {
  const ext = path.extname(inputFile);
  const base = path.basename(inputFile, ext);
  const webpOutput = path.join(imagesDir, `${base}-${outputSuffix}.webp`);
  const avifOutput = path.join(imagesDir, `${base}-${outputSuffix}.avif`);

  // WebP
  await sharp(path.join(imagesDir, inputFile))
    .resize(width)
    .webp({ quality: 80, effort: 6 })
    .toFile(webpOutput);

  // AVIF (even smaller)
  await sharp(path.join(imagesDir, inputFile))
    .resize(width)
    .avif({ quality: 70, effort: 6 })
    .toFile(avifOutput);

  console.log(`  ✓ ${base}-${outputSuffix}: WebP ${(fs.statSync(webpOutput).size / 1024).toFixed(1)}KB | AVIF ${(fs.statSync(avifOutput).size / 1024).toFixed(1)}KB`);
}

async function optimizeFallbacks() {
  // Replace heavy original PNGs with web-optimized PNGs so public/ does not exceed 4MB
  console.log('\nOptimizing fallback PNGs...');
  await sharp(path.join(imagesDir, 'photo.webp'))
    .resize(560)
    .png({ quality: 80, compressionLevel: 9 })
    .toFile(path.join(imagesDir, 'photo-opt.png'));

  await sharp(path.join(imagesDir, 'stand.webp'))
    .resize(840)
    .png({ quality: 80, compressionLevel: 9 })
    .toFile(path.join(imagesDir, 'stand-opt.png'));

  // Overwrite original giant PNGs if they exist
  fs.copyFileSync(path.join(imagesDir, 'photo-opt.png'), path.join(imagesDir, 'photo.png'));
  fs.unlinkSync(path.join(imagesDir, 'photo-opt.png'));
  fs.copyFileSync(path.join(imagesDir, 'stand-opt.png'), path.join(imagesDir, 'stand.png'));
  fs.unlinkSync(path.join(imagesDir, 'stand-opt.png'));
  console.log('  ✓ Overwritten photo.png and stand.png with optimized versions');
}

async function main() {
  console.log('Generating resized AVIF & WebP images...\n');

  // Hero photo: displayed at 280px (desktop), 220px (tablet), 190px (mobile)
  console.log('photo:');
  await resize('photo.webp', '190w', 190);
  await resize('photo.webp', '280w', 280);
  await resize('photo.webp', '380w', 380);
  await resize('photo.webp', '560w', 560);

  // About/stand photo: displayed at max 420px (desktop), 320px (tablet), 260px (mobile)
  console.log('\nstand:');
  await resize('stand.webp', '260w', 260);
  await resize('stand.webp', '420w', 420);
  await resize('stand.webp', '520w', 520);
  await resize('stand.webp', '840w', 840);

  await optimizeFallbacks();

  console.log('\n✅ Done!');
}

main().catch(console.error);
