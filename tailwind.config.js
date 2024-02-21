/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "rich-black-fogra-29_a85": "hsla(207, 24%, 7%, 0.85)",
        "rich-black-fogra-29_a75": "hsla(207, 24%, 7%, 0.75)",
        "rich-black-fogra-29": "hsl(207, 24%, 7%)",
        "rich-black-fogra-39": "hsl(210, 25%, 5%)",
        darkOrange: "hsl(32, 100%, 50%)",
        lightGray: "hsl(206, 8%, 82%)",
        whiteA10: "hsla(0, 0%, 100%, 0.1)",
        whiteA60: "hsla(0, 0%, 100%, 0.6)",
        Camel: "hsl(27, 34%, 58%)",
        WhitE: "hsl(0, 0%, 100%)",
      },

      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        merienda: ["Merienda", "cursive"],
      },
    },
  },
  plugins: [],
};
