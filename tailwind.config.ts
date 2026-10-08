import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#1C1512",
        rust: "#8E5F4C",
        brand: "#A67E6B",
        clay: "#BFA08F",
        cream: "#F7F1EA",
        linen: "#FBF8F3",
        ink: "#2B221E",
        stone: "#8A7B72",
        hairline: "#E6DCD2",
        mauve: "#BE7E73",
        lilac: "#E6D3CD",
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
