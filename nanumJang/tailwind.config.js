import { nextui } from '@nextui-org/react';

const primary = {
  50: '#e2f2ff',
  100: '#baddff',
  200: '#8ac8ff',
  500: '#008fff',
  600: '#077fff',
  700: '#226cff', // 주로 사용하고 싶은 primary 색상
  800: '#2c58ec',
  900: '#3532cc',
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      color: {
        primary: { ...primary },
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
    nextui({
      addCommonColors: false,
      themes: {
        light: {
          colors: {
            primary: {
              ...primary,
              DEFAULT: primary[700],
            },
            default: {
              DEFAULT: '#717171',
            },
          },
        },
      },
    }),
    ({ addUtilities }) => {
      addUtilities({
        '.default-box': {
          '@apply p-4 bg-white rounded-[10px]': '',
        },
        '.shadow-top': {
          boxShadow: '0 -8px 20px 0 rgba(0, 0, 0, 0.05)',
        },
        // 타이포그래피
        '.text-h1': {
          fontSize: '2.25rem',
          fontWeight: '600',
          lineHeight: '3.5625rem',
          letterSpacing: '-1.08px',
        },
        '.text-h2': {
          fontSize: '1.875rem',
          fontWeight: '400',
          lineHeight: '3rem',
          letterSpacing: '-0.75px',
        },
        '.text-h2-bold': {
          fontSize: '1.875rem',
          fontWeight: '600',
          lineHeight: '3rem',
          letterSpacing: '-0.9px',
        },
        '.text-h3': {
          fontSize: '1.5rem',
          fontWeight: '600',
          lineHeight: '2.25rem',
          letterSpacing: '-0.72px',
        },
        '.text-h3-bold': {
          fontSize: ' 1.5rem',
          fontWeight: '600',
          lineHeight: ' 2.25rem',
          letterSpacing: '-0.9px',
        },
        '.text-subhead1': {
          fontSize: ' 1.125rem',
          fontWeight: '600',
          lineHeight: '1.6875rem',
          letterSpacing: '-0.36px',
        },
        '.text-body1-bold': {
          fontSize: '1rem',
          fontWeight: '600',
          lineHeight: '1.5rem',
          letterSpacing: '-0.32px',
        },
        '.text-body1': {
          fontSize: '1rem',
          fontWeight: '400',
          lineHeight: '1.5rem',
          letterSpacing: '-0.24px',
        },
        '.text-body2': {
          fontSize: '0.875rem',
          fontWeight: '400',
          lineHeight: '1.3125rem',
          letterSpacing: '-0.28px',
        },
        '.text-body2-bold': {
          fontSize: '0.875rem',
          fontWeight: '600',
          lineHeight: '1.3125rem',
          letterSpacing: '-0.28px',
        },
        '.text-caption': {
          fontSize: '0.75rem',
          fontWeight: '400',
          lineHeight: '1.125rem',
          letterSpacing: '-0.24px',
        },
        '.text-caption-bold': {
          fontSize: '0.75rem',
          fontWeight: '600',
          lineHeight: '1.3125rem',
          letterSpacing: '-0.24px',
        },
      });
    },
  ],
};
