/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#ff49db",
      secondary: "#ff7849",
      greenPrimary: "#B1F45E",
      greenLight: "#84F35E",
      black: "#000000",
      white: "#ffffff",
      gray: "#EEEEED",
      grayLight: "#929DAE",
      green: "#C9EE44",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
