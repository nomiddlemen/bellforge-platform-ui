import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f8f9fb',
          100: '#f0f2f7',
          200: '#dde4f0',
          300: '#c0cde5',
          400: '#8fa3d0',
          500: '#5b7ab8',
          600: '#3d5ba0',
          700: '#2c4587',
          800: '#1f2d5c',
          900: '#141b3d',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
