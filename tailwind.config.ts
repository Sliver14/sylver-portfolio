import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        background: "#1E1E2F",
        card: "black",
        accent: "#F5A623",
        foreground: "#FFFFFF",
        muted: "#3A3A4F",
        border: "#3A3A4F",
        primary: {
          DEFAULT: "#F5A623",
          foreground: "#1E1E2F",
        },
        secondary: {
          DEFAULT: "#2A2A3C",
          foreground: "#FFFFFF",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#AAAAAA",
        },
      },
      borderRadius: {
        DEFAULT: "8px",
        md: "8px",
        lg: "8px",
      },
      boxShadow: {
        card: "0 8px 20px rgba(0,0,0,0.4)",
        cardSm: "0 4px 10px rgba(0,0,0,0.2)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
