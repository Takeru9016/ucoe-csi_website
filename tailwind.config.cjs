/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        contact: "url('src/assets/one.png')",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "max-2xl": { max: "1440px" },
      // => @media (max-width: 1535px) { ... }

      "max-xl": { max: "1280px" },
      // => @media (max-width: 1279px) { ... }

      "max-lg": { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      "max-md": { max: "768px" },
      // => @media (max-width: 767px) { ... }

      "max-sm": { max: "640px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
