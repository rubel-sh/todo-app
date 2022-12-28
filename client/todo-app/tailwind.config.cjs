/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
      },
      colors: {
        primaryColor: "#D9465A",
        secondaryColor: "#6B7280",
        backgroundColor: "#F5F6F9",
        selectColor1: "#649FF7",
        selectColor2: "#6CE5F5",
        selectColor3: "#BE75FA",
        selectColor4: "#9BA81F",
      },
      spacing: {
        7: "1.75rem",
        9: "2.25rem",
        28: "7rem",
        80: "20rem",
        96: "24rem",
      },
      height: {
        "1/2": "50%",
      },
      scale: {
        30: ".3",
      },
      boxShadow: {
        outline: "0 0 0 3px rgba(101, 31, 255, 0.4)",
      },
    },
  },

  plugins: [],
};
