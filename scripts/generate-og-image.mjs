import sharp from 'sharp';

const width = 1200;
const height = 630;
const logoSize = 360;
const logo = await sharp('public/saifalogo.png')
  .resize(logoSize, logoSize, { fit: 'contain' })
  .png()
  .toBuffer();

const card = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a1226" />
      <stop offset="0.55" stop-color="#050814" />
      <stop offset="1" stop-color="#02040a" />
    </linearGradient>
    <radialGradient id="blueGlow" cx="25%" cy="50%" r="42%">
      <stop offset="0" stop-color="#039efe" stop-opacity="0.32" />
      <stop offset="1" stop-color="#039efe" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="greenGlow" cx="85%" cy="30%" r="45%">
      <stop offset="0" stop-color="#39d353" stop-opacity="0.18" />
      <stop offset="1" stop-color="#39d353" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="name" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#ffffff" />
      <stop offset="0.58" stop-color="#a7f3d0" />
      <stop offset="1" stop-color="#39d353" />
    </linearGradient>
    <linearGradient id="frame" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#039efe" stop-opacity="0.75" />
      <stop offset="0.55" stop-color="#39d353" stop-opacity="0.45" />
      <stop offset="1" stop-color="#6366f1" stop-opacity="0.4" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#background)" />
  <rect width="1200" height="630" fill="url(#blueGlow)" />
  <rect width="1200" height="630" fill="url(#greenGlow)" />
  <rect x="20" y="20" width="1160" height="590" rx="24" fill="none" stroke="url(#frame)" stroke-width="2" />
  <rect x="25" y="25" width="1150" height="580" rx="20" fill="none" stroke="#ffffff" stroke-opacity="0.06" />
  <circle cx="280" cy="315" r="195" fill="none" stroke="#039efe" stroke-opacity="0.45" stroke-width="3" />
  <circle cx="280" cy="315" r="205" fill="none" stroke="#00f2fe" stroke-opacity="0.2" />
  <g transform="translate(520 135)">
    <rect width="310" height="36" rx="18" fill="#039efe" fill-opacity="0.12" stroke="#039efe" stroke-opacity="0.45" />
    <circle cx="20" cy="18" r="5" fill="#39d353" />
    <text x="36" y="23" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#a7f3d0" letter-spacing="1.5">FULL-STACK &amp; AI DEVELOPER</text>
  </g>
  <text x="520" y="240" font-family="Arial, sans-serif" font-size="64" font-weight="800" fill="url(#name)" letter-spacing="2">Md Saif Ali</text>
  <text x="520" y="290" font-family="Arial, sans-serif" font-size="23" font-weight="600" fill="#93c5fd">Full-Stack Web Development • AI Agents • LLMs</text>
  <text x="520" y="340" font-family="Arial, sans-serif" font-size="18" fill="#94a3b8">Building web applications and AI products with modern</text>
  <text x="520" y="370" font-family="Arial, sans-serif" font-size="18" fill="#94a3b8">frontend, backend, cloud, and language-model workflows.</text>
  <g transform="translate(520 420)" font-family="monospace" font-size="13" font-weight="600" text-anchor="middle">
    <rect x="0" y="0" width="85" height="34" rx="8" fill="#0f172a" stroke="#ffffff" stroke-opacity="0.15" />
    <text x="42.5" y="22" fill="#38bdf8">React</text>
    <rect x="97" y="0" width="90" height="34" rx="8" fill="#0f172a" stroke="#ffffff" stroke-opacity="0.15" />
    <text x="142" y="22" fill="#fbbf24">Python</text>
    <rect x="199" y="0" width="95" height="34" rx="8" fill="#0f172a" stroke="#ffffff" stroke-opacity="0.15" />
    <text x="246.5" y="22" fill="#4ade80">Node.js</text>
    <rect x="306" y="0" width="110" height="34" rx="8" fill="#0f172a" stroke="#ffffff" stroke-opacity="0.15" />
    <text x="361" y="22" fill="#c084fc">AI Agents</text>
    <rect x="428" y="0" width="85" height="34" rx="8" fill="#0f172a" stroke="#ffffff" stroke-opacity="0.15" />
    <text x="470.5" y="22" fill="#67e8f9">Next.js</text>
  </g>
  <line x1="520" y1="490" x2="1120" y2="490" stroke="#ffffff" stroke-opacity="0.1" />
  <circle cx="528" cy="533" r="4" fill="#39d353" />
  <text x="542" y="538" font-family="monospace" font-size="14" font-weight="500" fill="#94a3b8">mdsaifali.me</text>
  <text x="1000" y="538" font-family="Arial, sans-serif" font-size="13" font-weight="500" fill="#94a3b8">Bangalore, India</text>
</svg>`);

await sharp(card)
  .composite([{ input: logo, left: 100, top: 135 }])
  .png()
  .toFile('public/og-image.png');
