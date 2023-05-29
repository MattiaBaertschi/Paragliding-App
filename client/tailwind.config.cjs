/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B192F",
        secondary: "#A4A4A4",
        tertiary: "#F5F5F5",
        light: "#F5F5F5",
        medium: "#E2D6C2",
        special: "#A0D0C9",
        dark: "#1f1f1f",
        whitehover: "#dfdfdf",
        base: "#EFEFEF",
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"]
      },
      
    },
  },
  plugins: [],
}
