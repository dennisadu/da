import fluid, { screens, fontSize, extract } from 'fluid-tailwind';

export default {
  content: {
    files: [
      './src/app/**/*.{js,ts,jsx,tsx}',
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {
      screens: {
        xs: '23.43rem',
        '2xl': '90rem',
      },
      colors: {
        gray: {
          10: 'var(--color-gray-10)',
          60: 'var(--color-gray-60)',
          80: 'var(--color-gray-80)',
          100: 'var(--color-gray-100)',
        },
        primary: {
          60: 'var(--color-primary-60)',
          100: 'var(--color-primary-100)',
        },
      },
      fontFamily: {
        antonio: ['var(--font-antonio)'],
      },
    },
  },
  plugins: [fluid({ checkSC144: false })],
};
