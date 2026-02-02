/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          dark: '#0B0B15',
          light: '#2A2A48',
          accent: '#7D5FFF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // We will use Inter as a default, can be changed to Outfit
      }
    },
  },
  plugins: [],
}
