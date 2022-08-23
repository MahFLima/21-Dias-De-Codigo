/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Work Sans', 'sans-serif'],
        serif: ['Montserrat', 'sans-serif'],
        mono: ['Train One', 'sans-serif']
      },
      colors:{
        purple:{
          200: '#E0BBE6',
          400: '#BA68C8'
        },
        gray:{
          700: "#2D4642"
        }
      }
    },
  },
  plugins: [],
}
