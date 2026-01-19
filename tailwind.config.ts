import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'acid-lime': '#CCFF00',
        'acid-black': '#050505',
        'acid-grey': '#1A1A1A',
        'acid-grid': '#2A2A2A',
        'acid-white': '#FAFAFA',
      },
      fontFamily: {
        'display': ['var(--font-oswald)', 'sans-serif'],
        'sans': ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'blueprint-grid': 'linear-gradient(to right, #1A1A1A 1px, transparent 1px)',
      },
      backgroundSize: {
        'blueprint-grid': '4rem 100%',
      },
      fontSize: {
        'massive': ['12rem', { lineHeight: '0.8', letterSpacing: '-0.04em' }],
        'hero': ['8rem', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display': ['4rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
} satisfies Config;