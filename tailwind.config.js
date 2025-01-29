/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        "prime":"#034A77",
        "secondary":"#374151",
        "ternary":"#fcd34d",
      }
    },
  },
  plugins: [    require('daisyui')  ],
}