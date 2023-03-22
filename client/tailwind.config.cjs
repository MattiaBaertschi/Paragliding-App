/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B76126",
        secondary: "#8B3A1B",
        tertiary: "#F68D2F",
        light: "#F7EAD5",
        medium: "#E2D6C2",
        special: "#A0D0C9",
        black: "#050201",
      },
    },
  },
  plugins: [],
}
