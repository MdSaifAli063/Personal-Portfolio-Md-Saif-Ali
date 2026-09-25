import sharp from 'sharp';
import fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const uploadedPath = 'C:\\Users\\MD SAIF ALI\\.gemini\\antigravity-ide\\brain\\7e65973d-7920-417b-a063-127e5753ecd7\\.user_uploaded\\media_1790368895194.png';
const outDir = join(__dirname, '../public');

console.log('🚀 Starting Pure Circular Logo Branding & Asset Generation...');

// 1. Extract and cut into a pure circle along the circular ring boundary
// Center at (512, 498), radius 388 perfectly bounds the outer circular metallic ring
const cx = 512, cy = 498, r = 388;
const size = r * 2; // 776
const left = cx - r;
const top = cy - r;

const squareCropBuffer = await sharp(uploadedPath)
  .extract({ left, top, width: size, height: size })
  .png()
  .toBuffer();

// Anti-aliased circular alpha mask
const circleMaskSvg = Buffer.from(
  `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <circle cx="${r}" cy="${r}" r="${r - 0.5}" fill="white"/>
  </svg>`
);
const circleMaskBuffer = await sharp(circleMaskSvg).png().toBuffer();

// Cut out everything outside the circle (transparent background outside the circle)
const circularCropBuffer = await sharp(squareCropBuffer)
  .composite([{ input: circleMaskBuffer, blend: 'dest-in' }])
  .png()
  .toBuffer();

// Master 1024x1024 circular logo with transparent corners
const masterBuffer = await sharp(circularCropBuffer)
  .resize(1024, 1024, { fit: 'fill' })
  .png()
  .toBuffer();

fs.writeFileSync(join(outDir, 'saifalogo.png'), masterBuffer);
console.log('✅ Master pure circle public/saifalogo.png saved (1024x1024, transparent corners)');

// 2. Generate all circular favicon sizes (with crisp transparency)
const faviconSizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon-48x48.png' },
  { size: 96, name: 'favicon-96x96.png' },
  { size: 144, name: 'favicon-144x144.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
];

for (const { size: fSize, name } of faviconSizes) {
  await sharp(masterBuffer)
    .resize(fSize, fSize, { fit: 'fill' })
    .png()
    .toFile(join(outDir, name));
  console.log(`✅ ${name} (${fSize}x${fSize} circle)`);
}

// 3. Generate standard favicon.ico (32x32 binary ICO format with transparent corners)
const png32 = await sharp(masterBuffer).resize(32, 32, { fit: 'fill' }).png().toBuffer();
const icoHeader = Buffer.alloc(22);
icoHeader.writeUInt16LE(0, 0); // reserved
icoHeader.writeUInt16LE(1, 2); // type 1 = ICO
icoHeader.writeUInt16LE(1, 4); // 1 image
// Directory entry
icoHeader.writeUInt8(32, 6);   // width
icoHeader.writeUInt8(32, 7);   // height
icoHeader.writeUInt8(0, 8);    // color palette
icoHeader.writeUInt8(0, 9);    // reserved
icoHeader.writeUInt16LE(1, 10); // color planes
icoHeader.writeUInt16LE(32, 12); // bits per pixel
icoHeader.writeUInt32LE(png32.length, 14); // image size
icoHeader.writeUInt32LE(22, 18); // offset to image data
const icoBuffer = Buffer.concat([icoHeader, png32]);
fs.writeFileSync(join(outDir, 'favicon.ico'), icoBuffer);
console.log('✅ favicon.ico (32x32 standard circular ICO)');

// 4. Generate high-impact Open Graph Card (og-image.png — 1200x630)
const logoSize = 360;
const logoBuffer = await sharp(masterBuffer)
  .resize(logoSize, logoSize, { fit: 'fill' })
  .png()
  .toBuffer();

const ogSvgOverlay = Buffer.from(
  `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Background Cyber Gradients -->
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0a1226"/>
        <stop offset="50%" stop-color="#050814"/>
        <stop offset="100%" stop-color="#02040a"/>
      </linearGradient>

      <!-- Glow radial filters -->
      <radialGradient id="cyanGlow" cx="25%" cy="50%" r="40%">
        <stop offset="0%" stop-color="#039efe" stop-opacity="0.38"/>
        <stop offset="60%" stop-color="#00f2fe" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="transparent" stop-opacity="0"/>
      </radialGradient>

      <radialGradient id="emeraldGlow" cx="85%" cy="30%" r="45%">
        <stop offset="0%" stop-color="#39d353" stop-opacity="0.2"/>
        <stop offset="70%" stop-color="#10b981" stop-opacity="0.05"/>
        <stop offset="100%" stop-color="transparent" stop-opacity="0"/>
      </radialGradient>

      <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="55%" stop-color="#a7f3d0"/>
        <stop offset="100%" stop-color="#39d353"/>
      </linearGradient>

      <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#039efe" stop-opacity="0.7"/>
        <stop offset="50%" stop-color="#39d353" stop-opacity="0.5"/>
        <stop offset="100%" stop-color="#6366f1" stop-opacity="0.4"/>
      </linearGradient>
    </defs>

    <!-- Base Canvas Background -->
    <rect width="1200" height="630" fill="url(#bgGrad)"/>
    <rect width="1200" height="630" fill="url(#cyanGlow)"/>
    <rect width="1200" height="630" fill="url(#emeraldGlow)"/>

    <!-- Outer Decorative Border Frame -->
    <rect x="20" y="20" width="1160" height="590" rx="24" fill="none" stroke="url(#borderGrad)" stroke-width="2"/>
    <rect x="25" y="25" width="1150" height="580" rx="20" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

    <!-- Left Logo Frame Accent around the Circular Logo -->
    <circle cx="280" cy="315" r="195" fill="none" stroke="rgba(3, 158, 254, 0.45)" stroke-width="3"/>
    <circle cx="280" cy="315" r="205" fill="none" stroke="rgba(0, 242, 254, 0.2)" stroke-width="1"/>

    <!-- Right Side Typography & Branding -->
    <!-- Pill Tag -->
    <g transform="translate(520, 135)">
      <rect x="0" y="0" width="310" height="36" rx="18" fill="rgba(3, 158, 254, 0.12)" stroke="rgba(3, 158, 254, 0.45)" stroke-width="1"/>
      <circle cx="20" cy="18" r="5" fill="#39d353"/>
      <text x="36" y="23" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#a7f3d0" letter-spacing="1.5">FULL-STACK &amp; AI DEVELOPER</text>
    </g>

    <!-- Main Title -->
    <text x="520" y="240" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="900" fill="url(#textGrad)" letter-spacing="2">Md Saif Ali</text>

    <!-- Subtitle -->
    <text x="520" y="290" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="600" fill="#93c5fd" letter-spacing="1">Software Engineer • AI/ML &amp; Systems Architect</text>

    <!-- Tagline Description -->
    <text x="520" y="340" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="400" fill="#94a3b8">
      Building scalable AI Agents, LLM workflows, and high-performance
    </text>
    <text x="520" y="370" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="400" fill="#94a3b8">
      full-stack systems with modern UI engineering &amp; cloud infrastructure.
    </text>

    <!-- Tech Stack Tag Pills -->
    <g transform="translate(520, 420)">
      <!-- Pill 1: React -->
      <rect x="0" y="0" width="85" height="34" rx="8" fill="rgba(15,23,42,0.85)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <text x="42.5" y="22" font-family="monospace" font-size="13" font-weight="600" fill="#38bdf8" text-anchor="middle">React</text>

      <!-- Pill 2: Python -->
      <rect x="97" y="0" width="90" height="34" rx="8" fill="rgba(15,23,42,0.85)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <text x="142" y="22" font-family="monospace" font-size="13" font-weight="600" fill="#fbbf24" text-anchor="middle">Python</text>

      <!-- Pill 3: Node.js -->
      <rect x="199" y="0" width="95" height="34" rx="8" fill="rgba(15,23,42,0.85)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <text x="246.5" y="22" font-family="monospace" font-size="13" font-weight="600" fill="#4ade80" text-anchor="middle">Node.js</text>

      <!-- Pill 4: AI Agents -->
      <rect x="306" y="0" width="110" height="34" rx="8" fill="rgba(15,23,42,0.85)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <text x="361" y="22" font-family="monospace" font-size="13" font-weight="600" fill="#c084fc" text-anchor="middle">AI Agents</text>

      <!-- Pill 5: Cloud -->
      <rect x="428" y="0" width="85" height="34" rx="8" fill="rgba(15,23,42,0.85)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <text x="470.5" y="22" font-family="monospace" font-size="13" font-weight="600" fill="#67e8f9" text-anchor="middle">Cloud</text>
    </g>

    <!-- Bottom Footer Bar -->
    <line x1="520" y1="490" x2="1120" y2="490" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>

    <g transform="translate(520, 525)">
      <circle cx="8" cy="8" r="4" fill="#39d353"/>
      <text x="22" y="13" font-family="monospace" font-size="14" font-weight="500" fill="#64748b">personal-portfolio-md-saif-ali.vercel.app</text>
    </g>
    <g transform="translate(1000, 525)">
      <text x="0" y="13" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="500" fill="#64748b">Bangalore, IN</text>
    </g>
  </svg>`
);

// Composite circular logo onto 1200x630 canvas
await sharp(ogSvgOverlay)
  .composite([
    {
      input: logoBuffer,
      left: 100,
      top: 135,
    },
  ])
  .png()
  .toFile(join(outDir, 'og-image.png'));

console.log('✅ og-image.png saved (1200x630 with pure circular logo)');
console.log('🎉 Pure Circular Logo Branding generated successfully!');
