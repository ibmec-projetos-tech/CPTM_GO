/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          600: '#DC1E35', // CPTM Red
        },
      },
    },
  },
  plugins: [],
};