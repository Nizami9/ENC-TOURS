/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        customBlue: "#0b2463",
        wesCon: "#0b2463",
        customGray: "#596460",
        footer: "#212121",
        footer2: "#181818",
      },
      screens: {
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      spacing: {
        0.37: "0.37rem",
        31: "31px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".bg-rgba": {
          "background-color": "rgba(227, 227, 227, 1)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
