/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#F63227'
      },
      fontSize: {
        'xl' : '46px'
      },

      fontFamily: {
        'poppins' : 'Poppins, sans-serif'
      }
    },
  },
  plugins: [],
}