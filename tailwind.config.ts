import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#DC1822',
          dark:    '#B5141D',
          light:   '#FF2D36',
        },
        navy: {
          DEFAULT: '#160E37',
          dark:    '#0D0A22',
        },
        dark: '#1A1A1A',
        'dark-2': '#2D2D2D',
        'gray-dark': '#555555',
        gray: '#888888',
        'gray-light': '#E5E5E5',
        'bg-light': '#F7F7F7',
      },
      fontFamily: {
        head: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-open-sans)', 'sans-serif'],
      },
      fontWeight: {
        // Numeric aliases used throughout (e.g. font-700, font-800)
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
      },
      maxWidth: {
        site: '1200px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.10)',
        'card-lg': '0 8px 40px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}

export default config
