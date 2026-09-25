/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skin: '#039efe',
        mirage: '#ff4ecd',
        highlight: '#ffae00',
        bodyDark: '#0a0f1f',
        boxDark: 'rgba(20, 24, 45, 0.9)',
      },
    },
  },
  plugins: [],
}
