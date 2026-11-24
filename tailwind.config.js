/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: '#050505',
        brand: {
          black: '#050505',
          navy: '#0B1320',
          'navy-light': '#121E33',
          gold: '#C9A227',
          'gold-light': '#DFBA42',
          'gold-dark': '#997816',
          slate: '#162032',
          card: 'rgba(11, 19, 32, 0.85)',
          border: 'rgba(201, 162, 39, 0.25)',
          'border-subtle': 'rgba(255, 255, 255, 0.08)',
        },
        stone: {
          100: '#121E33',
          200: '#16243D',
          300: '#1C2E4D',
          400: '#64748B',
          500: '#94A3B8',
          600: '#CBD5E1',
          700: '#E2E8F0',
          800: '#F1F5F9',
          900: '#F8F9FA'
        },
        charcoal: {
          DEFAULT: '#050505',
          muted: '#0B1320'
        },
        accent: {
          gold: '#C9A227',
          yellow: '#C9A227',
          orange: '#fc7b11',
          green: '#08d797',
          red: '#ff424b'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        headings: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'Helvetica', 'Arial', 'sans-serif'],
        sans: ['"Inter"', 'Helvetica', 'Arial', 'sans-serif'],
        caption: ['"Inter"', 'sans-serif']
      },
      borderRadius: {
        card: '24px',
        inner: '16px'
      },
      transitionTimingFunction: {
        entrance: 'cubic-bezier(0.16, 1, 0.3, 1)',
        exit: 'cubic-bezier(0.7, 0, 0.84, 0)',
        fluid: 'cubic-bezier(0.32, 0.72, 0, 1)',
        cinematic: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    },
  },
  plugins: [],
};
