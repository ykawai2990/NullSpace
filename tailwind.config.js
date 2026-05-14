/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", 'sans-serif'],
        body: ["'Inter'", 'sans-serif'],
      },
      colors: {
        'neon-blue': '#00d4ff',
        'neon-purple': '#b14aed',
        'neon-pink': '#ff2d78',
      },
    },
  },
  plugins: [],
}

