import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f5f1',
          100: '#d1ebe3',
          200: '#a3d7c7',
          300: '#75c3ab',
          400: '#47af8f',
          500: '#2d8f6f',
          600: '#1f6b53',
          700: '#1a5642',
          800: '#144231',
          900: '#0f2d20',
        },
        accent: {
          green: '#2d8f6f',
          dark: '#1a1a1a',
          light: '#fafafa',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
