/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      colors: {
        black: '#262626',
        primary: {
          200: '#99C7FB',
          300: '#66AAF9',
          400: '#338EF7',
          500: '#006FEE',
          600: '#005BC4',
          700: '#004493',
          800: '#002E62',
        },
        default: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
      },
    },
    screens: {
      sm: '600px',
      md: '768px', // 일반적인 태블릿 크기
      lg: '1024px', // 작은 데스크톱 화면
      xl: '1280px', // 일반적인 데스크톱 화면
      '2xl': '1536px', // 큰 데스크톱 화면
    },
  },
  darkMode: 'class',
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.default-box': {
          '@apply p-4 bg-white rounded-[10px]': '',
        },
        '.shadow-top': {
          boxShadow: '0 -8px 20px 0 rgba(0, 0, 0, 0.05)',
        },
        '.text-h2': {
          '@apply text-[20px] font-medium leading-7': '',
        },
        '.text-h3-bold': {
          '@apply text-[18px] font-bold leading-normal': '',
        },
        '.text-body': {
          '@apply text-[16px] font-normal leading-normal': '',
        },
        '.text-caption': {
          '@apply text-[14px] font-normal leading-normal': '',
        },
      });
    },
  ],
};
