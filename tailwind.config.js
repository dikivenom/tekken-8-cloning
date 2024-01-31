/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Bebas-Neue': ['Bebas Neue', 'sans-serif',],
    },
    plugins: [require("daisyui")],
    extend: {},
  },
  plugins: [],
}

