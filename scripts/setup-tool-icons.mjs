import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public', 'tools');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Downloadable Brand SVGs
const downloads = {
  'html5.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
  'css3.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
  'javascript.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  'typescript.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
  'react.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  'nextjs.svg': 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
  'tailwind.svg': 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
  'nodejs.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
  'python.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
  'django.svg': 'https://cdn.worldvectorlogo.com/logos/django.svg',
  'fastapi.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg',
  'pytorch.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg',
  'mongodb.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
  'postgresql.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
  'supabase.svg': 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg',
  'firebase.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg',
  'ibm-cloud.svg': 'https://www.vectorlogo.zone/logos/ibm_cloud/ibm_cloud-icon.svg',
  'google-cloud.svg': 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
  'git.svg': 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
  'postman.svg': 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
  'gemini.svg': 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg'
};

// 2. Custom & High-Visibility Dark-Mode Optimized SVGs
const customSvgs = {
  'github.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96" width="32" height="32"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.449-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#ffffff"/></svg>`,

  'express.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="32" height="32"><path fill="#ffffff" d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"/></svg>`,

  'flask.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="32" height="32"><path fill="#ffffff" d="M44.44 100.63c3.09 5.86 8.56 9.68 15 10.66 8.44 1.29 17.06-2.22 22.37-9.08 4.29-5.55 5.76-12.72 4-19.64-.52-2.03-.43-3.64.6-5.46 4.79-8.49 9.65-16.94 14.47-25.41 1.9-3.34 3.79-6.68 5.7-10 1.25-2.18 1.4-4.47.5-6.84s-2.65-3.8-5.08-4.14c-1.39-.2-2.81-.13-4.22-.13H30.22c-2.41 0-4.41.97-5.78 2.97-1.38 2.02-1.45 4.31-.28 6.42q10.25 18.52 20.6 37c.72 1.3.81 2.45.34 3.86-1.89 5.68-1.92 11.37-.66 19.79zM64 12C35.28 12 12 35.28 12 64s23.28 52 52 52 52-23.28 52-52S92.72 12 64 12z"/></svg>`,

  'vercel.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000" width="32" height="32"><path fill="#ffffff" d="m577.3 0 577.4 1000H0z"/></svg>`,

  'sql.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="32" height="32"><defs><linearGradient id="sqlG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#039efe"/><stop offset="100%" stop-color="#0066cc"/></linearGradient></defs><ellipse cx="32" cy="14" rx="22" ry="7" fill="url(#sqlG)"/><path d="M10 14v14c0 3.87 9.85 7 22 7s22-3.13 22-7V14" fill="none" stroke="#039efe" stroke-width="3"/><path d="M10 28v14c0 3.87 9.85 7 22 7s22-3.13 22-7V28" fill="none" stroke="#38bdf8" stroke-width="3"/><rect x="22" y="27" width="28" height="15" rx="3" fill="#090d16" stroke="#00f2fe" stroke-width="1.5"/><text x="36" y="38" fill="#00f2fe" font-family="monospace" font-size="9" font-weight="bold" text-anchor="middle">SQL</text></svg>`,

  'rest-api.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="32" height="32"><circle cx="32" cy="32" r="30" fill="#0c1424" stroke="#10b981" stroke-width="2"/><path d="M18 32h28M38 24l8 8-8 8M26 40l-8-8 8-8" fill="none" stroke="#34d399" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><rect x="22" y="16" width="20" height="12" rx="3" fill="#090d16" stroke="#10b981" stroke-width="1.5"/><text x="32" y="25" fill="#10b981" font-family="monospace" font-size="8" font-weight="900" text-anchor="middle">API</text></svg>`,

  'llm.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="32" height="32"><defs><linearGradient id="llmG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#a855f7"/><stop offset="100%" stop-color="#06b6d4"/></linearGradient></defs><rect x="12" y="12" width="40" height="40" rx="10" fill="#0f172a" stroke="url(#llmG)" stroke-width="2.5"/><circle cx="32" cy="32" r="8" fill="url(#llmG)"/><path d="M32 6v6M32 52v6M6 32h6M52 32h6M20 20l-4-4M44 44l4 4M20 44l-4 4M44 20l4-4" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/><circle cx="32" cy="32" r="3" fill="#ffffff"/></svg>`,

  'openenv.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="32" height="32"><defs><linearGradient id="openenvG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#f97316"/><stop offset="100%" stop-color="#ec4899"/></linearGradient></defs><circle cx="32" cy="32" r="28" fill="#181424" stroke="url(#openenvG)" stroke-width="2.5"/><path d="M32 16 L46 24 L46 40 L32 48 L18 40 L18 24 Z" fill="none" stroke="#f43f5e" stroke-width="2"/><path d="M32 16 L32 32 L46 40 M32 32 L18 40" stroke="#fb923c" stroke-width="2"/><circle cx="32" cy="32" r="4" fill="#ffffff"/></svg>`,

  'embeddings.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="32" height="32"><defs><linearGradient id="embG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#06b6d4"/><stop offset="100%" stop-color="#3b82f6"/></linearGradient></defs><circle cx="18" cy="22" r="6" fill="#38bdf8"/><circle cx="46" cy="18" r="5" fill="#818cf8"/><circle cx="32" cy="36" r="7" fill="#6366f1"/><circle cx="16" cy="46" r="4" fill="#a855f7"/><circle cx="48" cy="44" r="6" fill="#06b6d4"/><path d="M18 22 L32 36 M46 18 L32 36 M16 46 L32 36 M48 44 L32 36 M18 22 L46 18 M16 46 L48 44" stroke="url(#embG)" stroke-width="1.8" stroke-dasharray="3,2"/></svg>`,

  'ai-agents.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="32" height="32"><defs><linearGradient id="agentG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#38bdf8"/><stop offset="100%" stop-color="#818cf8"/></linearGradient></defs><rect x="14" y="20" width="36" height="28" rx="8" fill="#0f172a" stroke="url(#agentG)" stroke-width="2.5"/><circle cx="25" cy="32" r="4" fill="#00f2fe"/><circle cx="39" cy="32" r="4" fill="#00f2fe"/><path d="M26 40h12" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/><path d="M32 12v8M28 12h8" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/><circle cx="32" cy="10" r="3" fill="#ec4899"/><path d="M10 30h4M50 30h4" stroke="#818cf8" stroke-width="2.5" stroke-linecap="round"/></svg>`
};

async function run() {
  console.log('Downloading SVGs...');
  for (const [filename, url] of Object.entries(downloads)) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const text = await res.text();
      fs.writeFileSync(path.join(outDir, filename), text);
      console.log('✓ Downloaded ' + filename);
    } catch (err) {
      console.error('✗ Failed ' + filename + ': ' + err.message);
    }
  }

  console.log('Writing custom/optimized SVGs...');
  for (const [filename, content] of Object.entries(customSvgs)) {
    fs.writeFileSync(path.join(outDir, filename), content.trim());
    console.log('✓ Created ' + filename);
  }
}

run();
