import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          maroon: '#9A323D',
          'maroon-hover': '#B23B48',
          'maroon-dark': '#7A2832',
          gold: '#DCC285',
          'gold-dark': '#B99C5F',
          'gold-deep': '#8B7142',
          ink: '#141414',
          paper: '#FAF6EE',
          tan: '#E6DAB9',
          'tan-dark': '#3D2F1E',
          green: '#0F5745',
        },
      },
      fontFamily: {
        display: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.035em',
      },
    },
  },
  plugins: [],
}

export default config
