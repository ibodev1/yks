/** @type {import('tailwindcss').Config} */
const getPalette = require("tailwindcss-palette-generator");
const palette = getPalette([
  {
    name: "primary",
    color: "#6B5252"
  },
  {
    name: "secondary",
    color: "#231B1B"
  },
  {
    name: "vanilla",
    color: "#E3DBDB"
  }
]);

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: palette
    }
  },
  plugins: []
};
