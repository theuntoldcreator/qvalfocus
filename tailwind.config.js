/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'qval-blue': '#0796fe',
        'qval-darkblue': '#092a49',
      }
    },
  },
  plugins: [],
}