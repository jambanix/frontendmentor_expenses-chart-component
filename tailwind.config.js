/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "white": "#FFFFFF",
      "card-white": "#FFFBF6",
      "cream-bg": "#F8E9DD",
      "medium-brown": "#92857A",
      "dark-brown": "#382314",
      "cyan": "#76B5BC",
      "red": "#EC755D"
    }
  },
  plugins: [],
}