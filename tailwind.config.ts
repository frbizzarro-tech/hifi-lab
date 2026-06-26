import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        lab: {
          bg: '#0f172a',
          card: '#111827',
          line: '#243044',
          accent: '#38bdf8',
          gold: '#f59e0b',
          green: '#22c55e'
        }
      }
    },
  },
  plugins: [],
} satisfies Config
