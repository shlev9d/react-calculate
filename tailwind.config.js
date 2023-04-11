/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#2E2F3E',
        darkHover: '#2a2a37',
        gray: '#363746',
        grayHover: '#3e3f4b',
        yellow: '#FFBB00',
        yellowHover: '#ab8009',
      },
      borderWidth: {
        user: '0.25px',
      },
      borderColor: {
        user: '#242530',
      },
    },
  },
  plugins: [],
};

