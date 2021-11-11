const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
      colors: {
        primary: '#BB1529',
        amber: colors.amber,
      },
      cursor: {
        grab: 'grab',
        grabbing: 'grabbing',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
