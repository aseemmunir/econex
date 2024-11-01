/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx, jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#656565',
        grey: '#F63227',
        light: '#E8E8E8',
        success: '#27AE60',
        info: '#2F80ED',
        warning: '#E2B93B',
        error: '#EB5757',
      },
      fontSize: {
        xl: '46px',
        lg: '34px',
        base: '24px',
        sm: '16px',
        xs: '14px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
      spacing: {
        '1': '8px',
        '2': '10px',
        '3': '15px',
        '4': '30px',
        '5': '60px',
        '6': '92px',
      }
    },
  },
  plugins: [],
}
