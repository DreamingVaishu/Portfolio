/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6ff',
          100: '#e0ebfe',
          200: '#c0d7fd',
          300: '#92bafc',
          400: '#5d93f8',
          500: '#3b76f5',
          600: '#2657ea',
          700: '#1e44d7',
          800: '#1e39ae',
          900: '#1f3589',
        },
        secondary: {
          50: '#f3f1ff',
          100: '#ebe5ff',
          200: '#d9cefd',
          300: '#bea7fa',
          400: '#9f7cf6',
          500: '#8657ee',
          600: '#7536e5',
          700: '#6428cc',
          800: '#5222a8',
          900: '#441e87',
        },
        accent: {
          50: '#f5f3ff',
          100: '#ede8ff',
          200: '#ddd5ff',
          300: '#c3b2ff',
          400: '#a683ff',
          500: '#8a56fc',
          600: '#7c35f2',
          700: '#6c22df',
          800: '#5a1cbb',
          900: '#4b1a99',
        },
        neutral: {
          50: '#f8f8fc',
          100: '#f1f1f8',
          200: '#e5e5ef',
          300: '#d1d2e0',
          400: '#b3b4c4',
          500: '#9496ad',
          600: '#7a7c95',
          700: '#63657b',
          800: '#4f5165',
          900: '#383a4a',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 20px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 15px 30px rgba(0, 0, 0, 0.1), 0 8px 12px rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        pulse: 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};