/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#5da2d5",
      lightblue: "#90ccf4",
      red: "#f78888",
      yellow: "#f3d250",
      grey: "#ececec",
      black: "#080F0F",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    screens: {
      sm: { min: "300px", max: "640px" },
      // => @media (min-width: 640px) { ... }

      md: { min: "641px", max: "768px" },
      // => @media (min-width: 768px) { ... }

      lg: { min: "769px", max: "1024px" },
      // => @media (min-width: 1024px) { ... }

      xl: { min: "1024px", max: "1280px" },
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
