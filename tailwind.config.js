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
      fontSize: {
        'fluid-display': ['var(--text-display)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'fluid-h1': ['var(--text-h1)', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        'fluid-h2': ['var(--text-h2)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'fluid-body': ['var(--text-body)', { lineHeight: '1.65' }],
      },
      colors: {
        surface: {
          DEFAULT: 'var(--surface-base, #ffffff)',
          paper: 'var(--surface-paper, #faf9f6)',
          warm: 'var(--surface-warm, #f5f5f3)',
          sand: 'var(--surface-sand, #eeede8)',
          stone: 'var(--surface-stone, #e4e3dc)',
        },
        'surface-muted': 'var(--surface-warm, #f5f5f3)',
        obsidian: 'var(--surface-obsidian, #0a0a0a)',
        'obsidian-card': 'var(--surface-obsidian-card, #141414)',
        ink: 'var(--ink-primary, #0e0e0e)',
        'ink-muted': 'var(--ink-muted, #59595c)',
        brand: 'var(--brand-primary, #0e0e0e)',
        'brand-hover': 'var(--brand-hover, #262626)',
        'brand-soft': 'var(--brand-soft, #ecece9)',
        accent: {
          DEFAULT: 'var(--color-accent, #156358)',
          hover: 'var(--color-accent-hover, #0f4f46)',
          soft: 'var(--color-accent-soft, #eaf4f2)',
        },
        draft: 'var(--color-draft, #2563eb)',
        border: 'var(--border-subtle, #e4e4e0)',
      },
      maxWidth: {
        page: '78rem',
      },
      borderRadius: {
        control: '0.625rem',
        field: '0.625rem',
        card: '1rem',
        panel: '1.5rem',
      },
      boxShadow: {
        subtle: 'var(--shadow-subtle)',
        card: 'var(--shadow-card)',
        elevated: 'var(--shadow-elevated)',
        soft: 'var(--shadow-soft)',
        lift: 'var(--shadow-lift)',
        float: 'var(--shadow-float)',
      },
      transitionDuration: {
        150: 'var(--dur-fast, 150ms)',
        250: 'var(--dur-base, 250ms)',
        450: 'var(--dur-slow, 450ms)',
        700: 'var(--dur-reveal, 700ms)',
        fast: 'var(--dur-fast, 150ms)',
        base: 'var(--dur-base, 250ms)',
        slow: 'var(--dur-slow, 450ms)',
        reveal: 'var(--dur-reveal, 700ms)',
      },
      transitionTimingFunction: {
        'out-expo': 'var(--ease-out-expo)',
        spring: 'var(--ease-spring)',
      },
    },
  },
  plugins: [],
};
