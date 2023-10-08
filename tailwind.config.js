/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.html", "./static/js/*.js"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        beige: "#f5f2ec",
      },
    },
  },
  plugins: [],
};
