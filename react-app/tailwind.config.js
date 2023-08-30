/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        '56': '56px',
        '15': '15px',
        '14': '14px',
        '11': '11px',
      },
      lineHeight: {
        '74': '74px',
        '27': '27px',
        '26': '26px',
        '23': '23px',
      },
      fontWeight: {
        '700': '700',
        '400': '400',
        '325': '325',
      },
      colors: {
        "black-500": "#000000",
        "blue-100": "#40BFEF",
        "gray-100": "#AFC5CF",
      },
      fontFamily: {
        gothamBook: ["Gotham Book", "sans-serif"],
        gothamBlack: ["Gotham Black", "sans-serif"],
        gothamMedium: ["Gotham Medium", "sans-serif"],
        gothamGothic: ["Gotham Gothic", "sans-serif"],
      },
      content: {},
    },
    screens: {
      xs: "350px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};

