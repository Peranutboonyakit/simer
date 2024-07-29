/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      bgCover: `url("/images/cover.png")`,
    },
    extend: {
      colors: {
        primary: {
          100: "#ff0000",
          200: "#ff4d4d",
          300: "#ff8080",
        },
        secondary: {
          100: "#ff9900",
          200: "#ffb84d",
          300: "#ffcc80",
        },
      },
    },
  },
  plugins: [],
};
