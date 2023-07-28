/** @type {import('tailwindcss').Config} */

import { withTV } from 'tailwind-variants/transformer'

import colors from 'tailwindcss/colors'

const mirador = {
  50: '#fff9ec',
  100: '#fff1d3',
  200: '#ffe0a5',
  300: '#ffc86d',
  400: '#ffa532',
  500: '#ff890a',
  600: '#ff7000',
  700: '#cc5102',
  800: '#a13f0b',
  900: '#82350c',
  950: '#461804',
}

module.exports = withTV({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      colors: {
        primary: mirador,
        secondary: colors.rose,
        success: colors.emerald,
        danger: colors.red,
        info: colors.sky,
        warn: colors.amber,
      },
    },
  },
  plugins: [],
})
