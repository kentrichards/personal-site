const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        orange: colors.orange
      },
      screens: {
        xs: '480px'
      },
      transitionProperty: {
        'shadow-and-colors': [
          'box-shadow, background-color, border-color, color, fill, stroke'
        ]
      },
      // Wave animation via https://jarv.is/notes/css-waving-hand-emoji/
      keyframes: {
        wave: {
          '0%': {
            transform: 'rotate( 0.0deg)',
            'transform-origin': '70% 70%'
          },
          '10%': {
            transform: 'rotate(14.0deg)',
            'transform-origin': '70% 70%'
          },
          '20%': {
            transform: 'rotate(-8.0deg)',
            'transform-origin': '70% 70%'
          },
          '30%': {
            transform: 'rotate(14.0deg)',
            'transform-origin': '70% 70%'
          },
          '40%': {
            transform: 'rotate(-4.0deg)',
            'transform-origin': '70% 70%'
          },
          '50%': {
            transform: 'rotate(10.0deg)',
            'transform-origin': '70% 70%'
          },
          '60%': {
            transform: 'rotate( 0.0deg)',
            'transform-origin': '70% 70%'
          },
          '100%': {
            transform: 'rotate( 0.0deg)',
            'transform-origin': '70% 70%'
          }
        }
      },
      animation: {
        wave: 'wave 2.5s ease-in-out infinite'
      }
    }
  },
  variants: {
    extend: {
      outline: ['focus-visible']
    }
  },
  plugins: []
}
