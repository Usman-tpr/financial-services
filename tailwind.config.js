/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        "prime":"#001122",
        "secondary":"#374151",
        "ternary":"#fcd34d",
      }
    },
  },
  plugins: [    require('daisyui')  ],
}