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
        swapeOut: {
          "0%": {
            transform: "translate(0px, 0) rotate(60deg)",
            opacity: 0.2,
          },
          "20%": {
            transform: "translate(60px, 0) rotate(120deg)",
            opacity: 0.2,
          },
          "40%": {
            transform: "translate(120px, 0) rotate(180deg)",
            opacity: 0.2,
          },
          "60%": {
            transform: "translate(180px, 0) rotate(240deg)",
            opacity: 0.2,
          },
          "80%": {
            transform: "translate(240px, 0) rotate(300deg)",
            opacity: 0.2,
          },
          "100%": {
            transform: "translate(300px, 0) rotate(360deg)",
            opacity: 0,
            display: "none",
          },
        },
        swapeIn: {
          "0%": {
            transform: "translate(-100px, 0) rotate(60deg)",
            opacity: 0,
          },
          "20%": {
            transform: "translate(-80px, 0) rotate(120deg)",
            opacity: 0.2,
          },
          "40%": {
            transform: "translate(-60px, 0) rotate(180deg)",
            opacity: 0.4,
          },
          "60%": {
            transform: "translate(-40px, 0) rotate(240deg)",
            opacity: 0.6,
          },
          "80%": {
            transform: "translate(-20px, 0) rotate(300deg)",
            opacity: 0.8,
          },
          "100%": { transform: "translate(0px, 0) rotate(360deg)", opacity: 1 },
        },
        fadeIn: {
          "0%": {
            display: "block",
            width: "10%",
            // opacity: 0.1,
          },
          "20%": {
            width: "20%",
            // opacity: 0.2,
          },
          "40%": {
            width: "40%",
            // opacity: 0.4,
          },
          "60%": {
            width: "60%",
            opacity: 0.6,
          },
          "80%": {
            width: "80%",
            opacity: 0.8,
          },
          "100%": {
            width: "100%",
            opacity: 1,
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
        fadeIn: "fadeIn 1.05s linear",
        fadeOut: "fadeOut 1.05s linear",
        // typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        typing: "typing 1s steps(40, end)",
      },
    },
  },
  plugins: [],
};
