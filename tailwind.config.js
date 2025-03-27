/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      colors: {
        black: '#262626',
        'layout-divider': 'rgba(17, 17, 17, 0.15)',
        primary: {
          50: '#E6F1FE',
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
        system: {
          error: '#FF5151',
        },
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translate(-50%, -100%)' },
          '100%': { transform: 'translate(-50%, 0)' },
        },
        slideOut: {
          '0%': { transform: 'translate(-50%, 0)' },
          '100%': { transform: 'translate(-50%, 100%)' },
        },
        scan: {
          '8%, 75%': { top: '8%' }, // 시작과 끝: 위쪽
          '45%': { top: '65%' }, // 중간: 아래쪽
        },
      },
      animation: {
        slideIn: 'slideIn 0.3s ease-out forwards',
        slideOut: 'slideOut 0.3s ease-out forwards',
        scan: 'scan 2s ease-in-out infinite',
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
    require('tailwind-scrollbar-hide'),
    ({ addUtilities }) => {
      addUtilities({
        '.header-height': {
          '@apply h-[56px]': '',
        },
        '.default-box': {
          '@apply p-4 bg-white rounded-[10px]': '',
        },
        '.shadow-top': {
          boxShadow: '0 -8px 20px 0 rgba(0, 0, 0, 0.05)',
        },
        '.typo-h2': {
          '@apply text-[20px] font-medium leading-7': '',
        },
        '.typo-h2-bold': {
          '@apply text-[20px] font-bold leading-7': '',
        },
        '.typo-h3-bold': {
          '@apply text-[18px] font-semibold leading-normal': '',
        },
        '.typo-body': {
          '@apply text-[16px] font-normal leading-normal': '',
        },
        '.typo-body-bold': {
          '@apply text-[16px] font-semibold leading-normal': '',
        },
        '.typo-caption': {
          '@apply text-[14px] font-normal leading-normal': '',
        },
        '.typo-caption-bold': {
          '@apply text-[14px] font-semibold leading-normal': '',
        },
        '.typo-tiny': {
          '@apply text-[12px] font-normal leading-normal': '',
        },
        '.typo-tiny-bold': {
          '@apply text-[12px] font-bold leading-normal': '',
        },
      });
    },
  ],
};
