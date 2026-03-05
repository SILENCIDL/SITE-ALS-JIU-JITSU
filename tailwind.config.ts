import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Black / Graphite palette
        black: {
          DEFAULT: "#000000",
          deep: "#161819",
          graphite: "#233039",
        },
        // Red palette
        red: {
          DEFAULT: "#F33535",
          primary: "#F33535",
          vivid: "#E42F45",
          dark: "#B42B3F",
        },
        // Blue palette
        blue: {
          DEFAULT: "#0C3C78",
          primary: "#0C3C78",
          medium: "#283e50",
          deep: "#0c0958",
        },
        // Support palette
        white: {
          DEFAULT: "#ffffff",
          warm: "#eae8e8",
          soft: "#eee2e2",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-oswald)", "Impact", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
