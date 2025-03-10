const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        navy: '#1d2747',
        azure: '#39a0ed',
        chalky: '#efefef',
        livid: '#585b5e',
        cloud: '#b1b1b2',
        darkblue: "#0f151b",
        apple: '#ab2422',
      },
    },
  },
  plugins: [],
  corePlugins: { preFlight: true },
};
