/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        "mint": "#1DBC86",
        "emerald": "#68D27E",
        "mint-green": "#D0F9EB",
        "orange-crayola": "#F18245",
        "sunglow": "#FCCE38",
        "antiflash-white": "#E9EEEE",
        "white": "#fff",
        "english-violet": "#3C394D",
      },
      
  
    },
    screens: {
      sm: { min: "0px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "2999px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "3000px", max: "3000px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
    },
  },
  plugins: [],
};
