/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      'mobile': '500px'
    },
    extend: {
      fontFamily:{
        sans: ['Montserrat', 'sans-serif'],
      },
      colors:{
        gray:{
          900: "#1F1F1F"
        }
      }
    },
  },
  plugins: [],
};
