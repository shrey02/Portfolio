/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        'bree-serif': ['Bree Serif', 'serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'great': ['Great Vibes', 'cursive'],
        'pecifico': ['Pacifico', 'cursive'],
      },
      screens: {
        'xs': '550px',
      },
    },
  },
  plugins: [],
}