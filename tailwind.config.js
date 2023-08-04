/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jose: ["var(--font-jose)", fontFamily.sans],
      },
      colors: {
        primary: "#EB5757",
        secondary: "#6C6C72",
        dark: "#232233",
      },
      backgroundImage: {
        "hero-tablet-bg": "url('/tablet-background.png')",
        "hero-desktop-bg": "url('/laptop-background.png')",
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      boxShadow: {
        "3xl": "2px 2px 12px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
