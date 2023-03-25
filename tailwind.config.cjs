/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-20': '#ece8e6',
        'gray-50': '#ded8d4',
        'gray-100': '#ddc5c2',
        'gray-500': '#312d2a',
        'primary-100': '#e6cdb9',
        'primary-300': '#c79f7f',
        'primary-500': '#ab7a53',
        'secondary-400': '#f5cdc2',
        'secondary-500': '#d9a395',
        'special-500': '#17473E',
      },
      backgroundImage: (theme) => (
        {
          "gradient-cream" : "linear-gradient(175deg, rgba(255,249,245,1) 0%, rgba(236,236,236,1) 51%)",
          "mobile-home" : "url()"
        }
      ),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sant-serif"]
      },
      content: {
          // Add content for before and after pseudoclasses 
          textShadow: "url(./assets/textShadow.png)"
      }
    },
    screens: {
      //Set classes for responsive screens
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}
