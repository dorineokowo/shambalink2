import type { Config } from "tailwindcss";

/** @type {Config} */
const config: Config = {
  content: [
    ".src/app/pages/**/*.{js,ts,jsx,tsx,mdx}", // Support for Next.js Page Router
    ".src/app/components/**/*.{js,ts,jsx,tsx,mdx}", // All components
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // If using `src` directory
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Components in `src`
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // App Router (for Next.js 13+)
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;
