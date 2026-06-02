import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-hanken)', 'var(--font-inter)', 'ui-sans-serif'],
      },
      colors: {
        surface: '#f7f9fb',
        'surface-low': '#f2f4f6',
        'surface-variant': '#e0e3e5',
        'surface-dim': '#d8dadc',
        ink: '#191c1e',
        'ink-muted': '#424752',
        primary: '#00377a',
        'primary-2': '#0b4da2',
        navy: '#071b3a',
        gold: '#C5A059'
      },
      boxShadow: {
        soft: '0 12px 40px rgba(7,27,58,0.12)',
        lift: '0 18px 55px rgba(7,27,58,0.18)'
      },
      borderRadius: {
        sm: '0.5rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem'
      },
      maxWidth: {
        container: '1280px'
      }
    }
  },
  plugins: []
} satisfies Config;
