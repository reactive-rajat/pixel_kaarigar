/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html"
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        bg: 'var(--color-bg)',
        'bg-main': 'var(--color-bg-main)',
        'bg-soft': 'var(--color-bg-soft)',
        card: 'var(--color-card)',
        'card-alt': 'var(--color-card-alt)',
        text: 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        'text-label': 'var(--color-text-label)',
        border: 'var(--color-border)',
        'border-soft': 'var(--color-border-soft)',
        success: 'var(--color-success)',
        danger: 'var(--color-danger)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '0.95rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem'
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semi: '600',
        bold: '700',
        black: '900'
      },
      lineHeight: {
        tight: '1.05',
        snug: '1.25',
        normal: '1.5',
        relaxed: '1.7',
        loose: '1.8'
      },
      spacing: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '4.5rem'
      },
      borderRadius: {
        sm: '0.6rem',
        md: '1rem',
        lg: '1.6rem',
        xl: '2.5rem',
        full: '9999px'
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        glow: 'var(--shadow-glow)'
      },
      maxWidth: {
        'container-md': '900px',
        'container-lg': '1200px'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.1)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite'
      }
    }
  },
  plugins: [],
}
