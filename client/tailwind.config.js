/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins, sans-serif'], // Adds a new `font-display` class
      },
      colors: {
        neutral: "#434381",
        primary: "#012758",
        accent: "#fff",
        secondary: "#c42126",
      }
    }
  },
  plugins: [require("daisyui")],
}

