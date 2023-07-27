/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "425px",

      md: "640px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      screens: {
        xs: "320px",
      },
      borderRadius: {
        default: "10px",
      },

      colors: {
        skyblue: "#00cae0",
        mattblack: "#0b0b0b",
      },
    },
  },
  plugins: [],
};
