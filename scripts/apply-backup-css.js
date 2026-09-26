import fs from 'fs';

let css = fs.readFileSync('backup.css', 'utf8').replace(/\r\n/g, '\n');

// 1. Insert @import "tailwindcss"; right after font import
const fontMarker = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;1,400&family=Space+Grotesk:wght@400;500;600;700;800&display=swap');";
if (css.includes(fontMarker)) {
  css = css.replace(fontMarker, fontMarker + '\n@import "tailwindcss";');
} else {
  css = '@import "tailwindcss";\n' + css;
}

// 2. Ensure .main margin-left is 78px !important on desktop and 0 !important on mobile
css = css.replace(
  /\.main\s*\{\s*margin-left:\s*78px;/,
  '.main {\n    margin-left: 78px !important;'
);
css = css.replace(
  /\.main\s*\{\s*margin-left:\s*0;/,
  '.main {\n        margin-left: 0 !important;'
);

// 3. Ensure tools-background is visible at root level
css = css.replace('z-index: -1;\n    background: radial-gradient', 'z-index: 0;\n    pointer-events: none;\n    background: radial-gradient');
css = css.replace('opacity: 0.14;', 'opacity: 0.22;\n    filter: drop-shadow(0 0 12px rgba(3, 158, 254, 0.4));');

fs.writeFileSync('src/index.css', css, 'utf8');
console.log('Successfully updated src/index.css from backup.css with Tailwind & layout fixes.');
