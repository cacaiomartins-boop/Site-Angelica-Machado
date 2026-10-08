/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: { DEFAULT: "rgb(var(--teal) / <alpha-value>)", deep: "rgb(var(--teal-deep) / <alpha-value>)", ink: "rgb(var(--teal-ink) / <alpha-value>)", text: "rgb(var(--teal-text) / <alpha-value>)", mist: "rgb(var(--teal-mist) / <alpha-value>)" },
        wine: { DEFAULT: "rgb(var(--sienna) / <alpha-value>)", dark: "rgb(var(--sienna-dark) / <alpha-value>)" },
        cream: { DEFAULT: "#fcf9f4", card: "#f8f4ee" },
      },
      fontFamily: {
        serif: ['"EB Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
