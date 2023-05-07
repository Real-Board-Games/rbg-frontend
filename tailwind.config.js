/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rbgred': {
          DEFAULT: '#bd413d', 
          100: '#fcf2f2',
          200: '#f9dae3',
          300: '#f7b7ca',
          400: '#f7829f',
          500: '#f65573',
          600: '#ea354e',
          700: '#bd413d',
          800: '#932035',
          900: '#701b2b',
        },
        'rbgblue': {
          DEFAULT: '#27548c', 
          100: '#ebf6f9',
          200: '#d0eaf2',
          300: '#add8eb',
          400: '#73b6e0',
          500: '#408fd1',
          600: '#2e6ab6',
          700: '#27548c',
          800: '#234068',
          900: '#1d3351',
        },
        'rbggreen': {
          DEFAULT: '#3c784c', 
          100: '#edf7f4',
          200: '#d7eee5',
          300: '#b5ded2',
          400: '#77c1b1',
          500: '#429f89',
          600: '#3c784c',
          700: '#2b6052',
          800: '#254941',
          900: '#1f3a36',
        },
      },
    },
  },
  plugins: [],
};
