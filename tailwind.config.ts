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
          green: '#0F5745',
          'green-hover': '#146B57',
          'green-dark': '#0A3F31',
          gold: '#E8B64C',
          'gold-dark': '#C99A36',
          ink: '#141414',
          paper: '#FAF8F3',
          cream: '#F5F0E3',
        },
      },
      fontFamily: {
        display: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.035em',
      },
    },
  },
  plugins: [],
}

export default config
