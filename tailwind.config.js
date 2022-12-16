/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: 'class',
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    fontFamily: {
      goodbrush: ["GoodBrush", "sans-serif"],
      firacode: ["firacode" , "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
});
