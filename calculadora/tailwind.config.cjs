/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        'mobile': '400px'
      },
      fontFamily:{
        sans: ['Poppins', 'sans-serif'],
      },
      colors:{
        gray:{
          200: "#D4D4D2",
          400: "#828282",
          500: "#505050",
          800: "#17181A"
        },
        yellow:{
          500: "#FF9500"
        },
      },
    },
  },
  plugins: [],
};
