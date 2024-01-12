/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
//   darkMode: 'class',
  theme: {
    extend: {
      colors: {
         'light-theme' : 'rgb(75,85,99)',
         'light-theme-deep' : 'rgb(55,65,81)',
         'dark-theme-deep' : 'rgb(148,163,184)',
         'dark-theme' : 'rgb(203,213,225)',
      },
      fontFamily: {
         'main' : ['Montserrat']
      }
    },
  },
  plugins: [],
}

