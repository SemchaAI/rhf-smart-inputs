import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // colors: {
      //   // Background Colors
      //   background: "var(--background)",
      //   foreground: "rgba(var(--foreground)/<alpha-value>)",

      //   //Action Colors
      //   "action-disabled": "var(--action-disabled)",
      //   "action-disabled-bg": "var(--action-disabled-bg)",

      //   // Primary Colors
      //   primary: "var(--primary)",
      //   "primary-action": "var(--primary-action)",

      //   // Feedback Colors
      //   error: "var(--error)",
      //   warning: "var(--warning)",
      //   success: "var(--success)",

      //   // Border Colors
      //   border: "var(--border)",

      //   // Text Colors
      //   "text-primary": "var(--text-primary)",
      //   "text-secondary": "var(--text-secondary)",
      //   "text-highlight": "var(--text-highlight)",
      // },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
