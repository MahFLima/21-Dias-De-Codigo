/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily:{
        sans: ['DM Sans', 'sans-serif'],
      },
      colors:{
        gray:{
          800: "#17181A"
        },
      },
    },
  },
  plugins: [],
};