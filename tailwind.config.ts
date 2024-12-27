import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'float': {
          '0%, 100%': {
            transform: 'translateY(0) scale(1)',
            opacity: '0.3',
          },
          '50%': {
            transform: 'translateY(-20px) scale(1.5)',
            opacity: '0.6',
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'pulse': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)'
          },
          '50%': {
            opacity: '0.5',
            transform: 'scale(0.8)'
          }
        },
        'scan': {
          '0%, 100%': {
            transform: 'translateX(-100%) rotate(45deg)',
          },
          '50%': {
            transform: 'translateX(200%) rotate(45deg)',
          },
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'pulse': 'pulse 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
} satisfies Config;
