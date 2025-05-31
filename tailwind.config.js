/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xsm: "200px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#64ffdb",
      },
      transform: {
        "rotate-y-45": "rotateY(-45deg)",
      },
      keyframes: {
        rotateY: {
          "0%": { transform: "rotateY(0)" },
          "100%": { transform: "rotateY(-45deg)" },
        },
        
        shine: {
          "0%": {
            left: "-100%",
            opacity: "0",
          },
          "20%": {
            opacity: "1",
          },
          "100%": {
            left: "100%",
            opacity: "0",
          },
        },
      },
      animation: {
        "rotate-y": "rotateY 1s ease-in-out",
        shine: "shine 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
