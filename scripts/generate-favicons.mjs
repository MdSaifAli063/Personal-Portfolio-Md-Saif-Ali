import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = join(__dirname, '../public/saifalogo.png');
const out = join(__dirname, '../public');

// SVG squircle mask with 22% rounded corner radius
function roundedMask(size) {
  const r = Math.round(size * 0.22);
  return Buffer.from(
    `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${size}" height="${size}" rx="${r}" ry="${r}" fill="white"/>
    </svg>`
  );
}

const sizes = [
  { w: 16,  name: 'favicon-16x16.png' },
  { w: 32,  name: 'favicon-32x32.png' },
  { w: 48,  name: 'favicon-48x48.png' },
  { w: 96,  name: 'favicon-96x96.png' },
  { w: 144, name: 'favicon-144x144.png' },
  { w: 180, name: 'apple-touch-icon.png' },
  { w: 192, name: 'android-chrome-192x192.png' },
  { w: 512, name: 'android-chrome-512x512.png' },
];

for (const { w, name } of sizes) {
  const mask = await sharp(roundedMask(w))
    .resize(w, w)
    .png()
    .toBuffer();

  await sharp(src)
    .resize(w, w, { fit: 'cover' })
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toFile(join(out, name));

  console.log(`✅ ${name} (${w}x${w}) — squircle with curved corners`);
}

// OG image — 1200x630 — for social share preview
await sharp(src)
  .resize(512, 512, { fit: 'contain', background: { r: 10, g: 15, b: 31, alpha: 1 } })
  .extend({ top: 65, bottom: 65, left: 344, right: 344, background: { r: 10, g: 15, b: 31, alpha: 1 } })
  .png()
  .toFile(join(out, 'og-image.png'));
console.log('✅ og-image.png (1200x630)');

console.log('\n🎉 All squircle favicon assets generated!');
