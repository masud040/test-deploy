/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "extra-light": "#F6F5FD",
          lightest: "#EEECFB",
          lighter: "#E0DCF8 ",
          light: "#C8BFF3",
          soft: "#AC9AEB",
          DEFAULT: "#8F71E1",
          medium: "#7E53D4",
          dark: "#6F42C1",
          darker: "#5C36A1",
          darkist: "#4D2E84",
          "extra-dark": "#2F1C59",
        },
        secondary: {
          "extra-light": "#F5F3FF",
          light: "#6441C2",
          DEFAULT: "#581FC1",
        },
        tertiary: {
          DEFAULT: "#646464",
          dark: "#1E1E1E",
        },

        background: {
          light: "#FFFFFF",
          dark: "#1D1D1D",
        },
      },
      boxShadow: {
        "custom-inset":
          "rgb(204, 219, 232) 3px 4px 3px -3px inset, rgb(204, 219, 232) -3px -3px 3px -3px inset",
      },

      maxWidth: {
        "7.5xl": "1344px",
        "8xl": "1408px",
      },
      lineHeight: {
        custom: "130%",
        tighter: "1.2",
        loose: "1.8",
        relaxed: "1.6",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Plugin for better typography
  ],
};
