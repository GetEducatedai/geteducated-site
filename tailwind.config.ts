import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#08080E",
        "dark-bg2": "#0D0D1A",
        "light-bg": "#EBEBEB",
        "light-bg2": "#E0E0E0",
        "light-card": "#FFFFFF",
        "light-text": "#0A0A0A",
        "light-muted": "#6B6B6B",
        "light-border": "#D4D4D4",
        red: "#DC2626",
        ink: "#0D0D0D",
        cream: "#F5F2EE",
        muted: "#6B6B6B",
        accent: "#D97706",
        violet: "#7C3AED",
        blue: "#3B82F6",
        border: "#E8E4DF",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Times New Roman", "Times", "Georgia", "serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "hero-float": "hero-float 7s ease-in-out infinite",
        "blob-float": "blob-float 8s ease-in-out infinite",
        "blob-float-delay": "blob-float 8s ease-in-out 4s infinite",
        "blob-pulse": "blob-pulse 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "hero-float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "blob-float": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -20px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        "blob-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
