/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: {
          100: "#FFF",
          99: "#FBFFF0",
          97: "#F7F7F8",
          95: "#F1F1F3",
          90: "#E4E4E7",
        },
        EerieBlack: {
          100: "#999999",
          200: "#7A7A7A",
          300: "#5C5C5C",
          400: "#3D3D3D",
          500: "#1F1F1F",
          600: "#141414",
        },
        Buff: {
          100: "#F0DDD1",
          200: "#E6C6B2",
          300: "#DCAF93",
          400: "#C37646",
          500: "#9A5A32",
        },
      },
      keyframes: {
        fadeIn: {
          "0%": {
            width: "10%",
          },
          "20%": {
            width: "20%",
          },
          "40%": {
            width: "40%",
          },
          "60%": {
            width: "60%",
          },
          "80%": {
            width: "80%",
          },
          "100%": {
            width: "100%",
          },
        },
        fadeOut: {
          "0%": {
            width: "100%",
          },
          "20%": {
            width: "80%",
          },
          "40%": {
            width: "60%",
          },
          "60%": {
            width: "40%",
          },
          "80%": {
            width: "20%",
          },
          "100%": {
            width: 0,
            visibility: "hidden",
          },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
      },
      animation: {
        swapeOut: "swapeOut 1.05s linear",
        swapeIn: "swapeIn 1.05s linear",
        fadeIn: "fadeIn 1s linear",
        fadeOut: "fadeOut 0.8s linear",
        typing: "typing 1s steps(40, end)",
      },
    },
  },
  plugins: [],
};
