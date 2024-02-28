import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './node_modules/flowbite-react/lib/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        leftToRight: {
          '0%': {
            width: '0',
          },
          '50%': {
            width: '50%',
          },
          '100%': {
            width: '100%',
          },
        },
      },
      animation: {
        leftToRight: 'leftToRight 0.5s linear',
      },
      colors: {
        third: '#F5DB13',
        primary: '#F2B807',
        second: '#F28F16',
        danger: '#D93E30',
        green: '#73D677',
        grass: '#70A83B',
        blue01: '#06afc6',
        blue02: '#07d6f2',
        grey: '#4B4B4B',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
export default config;
