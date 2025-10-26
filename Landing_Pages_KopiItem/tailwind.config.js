export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FFF8E7',   /* cream very light */
          100: '#FEF3E2',  /* cream light */
          200: '#FCE9C8',  /* cream */
          300: '#F6DDB0',  /* sand */
          400: '#E7C79A',  /* caramel light */
          500: '#C89F72',  /* latte */
          600: '#A7784F',  /* mocha */
          700: '#7A4F2B',  /* espresso light */
          800: '#5A3A20',  /* espresso */
          900: '#3C2615'   /* dark roast */
        },
      }
    },
  },
  plugins: [],
}
