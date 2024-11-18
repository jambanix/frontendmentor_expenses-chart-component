/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "white": "#ffffff",
      "card-white": "#fffbf6",
      "cream-bg": "#f8e9dd",
      "medium-brown": "#92857a",
      "dark-brown": "#382314",
      "cyan": "#76b5bc",
      "red": "#ec75dd"
    }
  },
  plugins: [],
}