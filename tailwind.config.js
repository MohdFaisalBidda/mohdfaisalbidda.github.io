/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      primary:"#0a192f",
      secondary:"#64ffdb"
      },
      fontFamily:{
        signature :["Great Vibes"]
      },
    },  
  },
  plugins: [],
}
