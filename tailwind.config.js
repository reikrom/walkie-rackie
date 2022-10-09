/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jiit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      md: '640px',
      lg: '1024px',
      xl: '1500px', 
    },
    extend: {
      fontSize: {
        xl: '1.375rem', // 22px
        '2xl': '1.5625rem', // 25px
        '3xl': '1.875rem', // 30px
        '4xl': '2.5rem', // 40px
        '5xl': '3.125rem', // 50px
        '6xl': '3.75rem', // 60px
        '7xl': '4.375rem', // 70px
      },
      gridTemplateRows: {
        'max-content': 'max-content',
      },
      spacing: {
        '5vw': '5vw',
        '8vw': '8vw', 
        '10vw': '10vw', 
      },
    },
  },
  plugins: [],
}