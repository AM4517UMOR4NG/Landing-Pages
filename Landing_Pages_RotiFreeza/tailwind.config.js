export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        roti: {
          50: '#FFF8F3',
          100: '#FFE8D6',
          200: '#FFD9B8',
          300: '#FFCAA0',
          400: '#FFBB88',
          500: '#FFAC70',
          600: '#FF9D58',
          700: '#FF8E40',
          800: '#FF7F28',
          900: '#FF7010',
        },
        cream: {
          50: '#FFFBF8',
          100: '#FFF5F0',
          200: '#FFEFE8',
          300: '#FFE9E0',
          400: '#FFE3D8',
          500: '#FFDDD0',
          600: '#FFD7C8',
          700: '#FFD1C0',
          800: '#FFCBB8',
          900: '#FFC5B0',
        },
        accent: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C3D66',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        pulse3d: 'pulse3d 2s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse3d: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}
