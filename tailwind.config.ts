import type { Config } from 'tailwindcss'
import getPalette from "tailwindcss-palette-generator";

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

export default {
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
  plugins: [],
} satisfies Config

