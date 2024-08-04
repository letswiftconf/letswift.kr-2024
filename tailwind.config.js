/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        themeRed: '#FE52BA',
        themeBlue: '#09FAD2',
        themeYellow: '#FEF100'
      }
    },
  },
  plugins: [],
}

