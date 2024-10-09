/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF9E6',
        brown: '#8B4513',
        accent: '#4ECDC4',
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'amatic': ['Amatic SC', 'cursive'],
      },
    },
  },
  plugins: [],
}