/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {    extend: {
      fontFamily: {
        'cormorant': ['"Cormorant Garamond"', 'cursive'],
        'eagle':['"Eagle Lake"', 'cursive'],
        'roboto':['"Roboto','cursive'],
        'lato':['"Lato', 'sans serief']
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
