/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xsm':'200px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      signature: ["Great Vibes"]
    },
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#64ffdb"
      },

    },
  },
  plugins: [],
}
