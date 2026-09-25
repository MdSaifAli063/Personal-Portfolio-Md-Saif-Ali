import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = join(__dirname, '../public/saifalogo.png');

// Outer radius of circle ring is ~500px from center 627,627 => diameter 1000px
// Crop box: 1040x1040 centered at (627, 627)
const cropSize = 1040;
const left = Math.round((1254 - cropSize) / 2);
const top = Math.round((1254 - cropSize) / 2);

const circleMask = Buffer.from(
  `<svg width="${cropSize}" height="${cropSize}" viewBox="0 0 ${cropSize} ${cropSize}" xmlns="http://www.w3.org/2000/svg">
    <circle cx="${cropSize / 2}" cy="${cropSize / 2}" r="${cropSize / 2}" fill="white"/>
  </svg>`
);

const croppedBuffer = await sharp(src)
  .extract({ left: 107, top: 107, width: 1040, height: 1040 })
  .composite([{ input: circleMask, blend: 'dest-in' }])
  .png()
  .toBuffer();

await sharp(croppedBuffer).toFile(join(__dirname, '../public/saifalogo.png'));
console.log('✅ saifalogo.png updated cleanly!');
