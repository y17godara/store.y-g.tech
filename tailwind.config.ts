import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts}",
  ],
  darkMode: ["class"],
  theme: {
    fontFamily: {
      sans: ["var(--font-hubot)", ...defaultTheme.fontFamily.sans],
    },
    screens: {
      maxS: "700px",
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        md: "768px",
        "2xl": "1400px",
      },
    },
    extend: {
      textColor: {
        primary: "var(--gray-12)",
        secondary: "var(--gray-11)",
        tertiary: "var(--gray-9)",
        brand: "var(--brand)",
        link: "var(--blue-10)",
      },
      backgroundColor: {
        primary: "var(--gray-1)",
        secondary: "var(--gray-4)",
        secondaryA: "var(--gray-a4)",
        tertiary: "var(--gray-3)",
      },
      borderColor: {
        primary: "var(--gray-6)",
        secondary: "var(--gray-4)",
      },
      ringOffsetColor: {
        primary: "var(--gray-12)",
      },
      keyframes: {
        in: {
          "0%": { transform: "translateY(18px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "in-reverse": {
          "0%": { transform: "translateY(-18px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        shimer: {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(0%)" }, // Added midpoint to loop smoothly
          "100%": { transform: "translateX(100%)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-50%)" }, // Added midpoint to loop smoothly
          "100%": { transform: "translateX(-100%)" },
        },
        blink: {
          "0%": { opacity: "0.2" },
          "20%": { opacity: "1" },
          "100% ": { opacity: "0.2" },
        },
      },
      animation: {
        in: "in .6s both",
        "in-reverse": "in-reverse .6s both",
        fadeIn: "fadeIn .3s ease-in-out",
        carousel: "marquee 60s linear infinite",
        blink: "blink 1.4s both infinite",
      },
    },
  },
};
export default config;
