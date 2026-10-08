import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#1C1512",
        rust: "#6E4434",
        clay: "#B8826B",
        cream: "#F7F1EA",
        linen: "#FBF8F3",
        ink: "#2B221E",
        stone: "#8A7B72",
        hairline: "#E6DCD2",
        mauve: "#A77B7E",
        lilac: "#EDE5EC",
        night: "#0E0C0B",
      },
      fontFamily: {
        serif: ["var(--font-garamond)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      maxWidth: { prose: "68ch" },
      transitionTimingFunction: { soft: "cubic-bezier(.22,.61,.36,1)" },
    },
  },
  plugins: [],
};
export default config;
