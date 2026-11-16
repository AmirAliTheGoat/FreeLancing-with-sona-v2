/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './context/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazirmatn', 'DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Vazirmatn', 'Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Vazirmatn', 'Georgia', 'serif'],
      },
      colors: {
        surface: '#ffffff',
        'surface-muted': '#f5f5f3',
        obsidian: '#0a0a0a',
        'obsidian-card': '#141414',
        ink: '#0e0e0e',
        'ink-muted': '#59595c',
        brand: '#0e0e0e',
        'brand-hover': '#262626',
        'brand-soft': '#ecece9',
        accent: '#0e0e0e',
        'accent-hover': '#262626',
        draft: '#2563eb',
        border: '#e4e4e0',
      },
      maxWidth: {
        page: '78rem',
      },
      borderRadius: {
        control: '0.375rem',
        field: '0.375rem',
        card: '0.5rem',
        panel: '0.75rem',
      },
      boxShadow: {
        subtle: '0 1px 2px 0 rgba(10, 10, 10, 0.04)',
        card: '0 10px 30px -10px rgba(10, 10, 10, 0.08)',
        elevated: '0 24px 60px -15px rgba(10, 10, 10, 0.22)',
      },
    },
  },
  plugins: [],
};
