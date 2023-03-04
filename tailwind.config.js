/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7047eb",
          complementary: "#c2eb47",
        },
        secondary: {
          DEFAULT: "#313133",
        },
        background: {
          DEFAULT: "#28282a",
        },
      },
    },
  },
  plugins: [],
};
