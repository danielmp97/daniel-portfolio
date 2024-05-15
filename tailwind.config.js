/** @type {import('tailwindcss').Config} */

import animations from '@midudev/tailwind-animations'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-1': '#1B262C',
        'color-2': '#0F4C75',
        'color-3': '#3282B8',
        'color-4': '#BBE1FA',
      }
    },
  },
  plugins: [animations],
}
