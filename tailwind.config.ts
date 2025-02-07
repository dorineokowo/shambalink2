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
        primary: '#2563eb', // Tailwind's blue-600
        secondary: '#1e40af', // Tailwind's blue-700
      },
    },
  },
  animation: {
    'fade-in': 'fadeIn 0.5s ease-in-out',
    'slide-up': 'slideUp 0.5s ease-in-out',
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
    slideUp: {
      '0%': { transform: 'translateY(20px)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },
  },
  plugins: [],
};

export default config;
