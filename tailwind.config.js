/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazirmatn', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: '#fdfbf7',
        'surface-muted': '#f6f2ea',
        ink: '#2e1065',
        'ink-muted': '#5b5270',
        brand: '#2e1065',
        'brand-hover': '#4c1d95',
        'brand-soft': '#f3effb',
        accent: '#f97316',
        'accent-hover': '#ea580c',
        border: '#e6dfef',
      },
      fontSize: {
        display: ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        h1: ['2.5rem', { lineHeight: '1.28', letterSpacing: '-0.015em' }],
        h2: ['2rem', { lineHeight: '1.35', letterSpacing: '-0.01em' }],
        h3: ['1.375rem', { lineHeight: '1.45' }],
        body: ['1rem', { lineHeight: '1.8' }],
        small: ['0.875rem', { lineHeight: '1.65' }],
      },
      spacing: {
        section: '5rem',
        'section-lg': '7rem',
      },
      maxWidth: {
        page: '80rem',
      },
      borderRadius: {
        control: '1rem',
        card: '1.25rem',
        panel: '1.5rem',
      },
      boxShadow: {
        subtle: '0 1px 2px 0 rgba(46, 16, 101, 0.05)',
        card: '0 8px 24px -8px rgba(46, 16, 101, 0.08)',
        elevated: '0 16px 36px -12px rgba(46, 16, 101, 0.12)',
      },
    },
  },
  plugins: [],
};
