/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assets/js/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['Urbanist', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        forest: {
          DEFAULT: '#12432E',
          dark: '#0B2F20',
          light: '#1B563D',
        },
        amber: {
          brand: '#FFA800',
          soft: '#FFC14D',
        },
        softwhite: '#F8F8F5',
        ink: '#111111',
        slate: '#5A5F5C',
      },
    },
  },
  plugins: [],
};
