// tailwind.config.js (CommonJS)
module.exports = {
  darkMode: 'class',

  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF0033',
          dark:    '#E6002E',
        },
        'dark-bg': '#000000',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },

  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};