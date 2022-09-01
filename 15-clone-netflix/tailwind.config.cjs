/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        'principal': "url('https://images.unsplash.com/photo-1661793731110-fe8ea0b20a13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60')"
      },
      fontFamily:{
        sans: ["Open Sans", "sans-serif"],
      },
      colors:{
        red:{
          500: "#B9090B",
        },
        gray:{
          200: "rgba(255, 255, 255, 0.3)",
          300: "#808080",
          400: "rgba(109, 109, 110, 0.7)",
        }
      }
    },
  },
  plugins: [],
}
