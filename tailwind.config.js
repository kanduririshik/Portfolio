/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--foreground)'
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--foreground)'
        },
        muted: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--muted-foreground)'
        },
        border: 'var(--border)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        'xl': '0.75rem',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'float': 'floatY 4s ease-in-out infinite',
        'pulse-slow': 'glowPulse 2.5s ease-in-out infinite',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 40px 4px var(--primary-shadow-color-low)' },
          '50%': { boxShadow: '0 0 60px 6px var(--primary-shadow-color-high)' },
        }
      }
    },
  },
  plugins: [],
}
