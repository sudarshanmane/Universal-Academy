/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        santoshi: ["Satoshi", "sans-serif"],
      },
      boxShadow: {
        shadow_1: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
      },
      colors: {
        39: "#393d82",
        fd: "#fddf49",
        e1: "#e1e1e1",
        29: "#29295e",
        ff: "#FFF9DA",
        e8: "#e8e8f7",
      },
    },
  },
  plugins: [],
};
