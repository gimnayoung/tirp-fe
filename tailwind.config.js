/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mainColor:{
          color_Main:"#DCEBE1",
          color_Green:"#80BD95",
          color_Ivory:"#F9F7F7",
          color_Black:"#2C2B2B",
          color_Gray:"#444242"
        }
      },
      fontFamily:{
        sans:["pretendard"]
      },
      screens:{
        xxs:'355px',
        xs:'475px'
      },
      boxShadow:{
        default:"4px 4px 0px 5px rgba(161,148,148,0.9)"
      }
    },
  },
  plugins: [],
}

