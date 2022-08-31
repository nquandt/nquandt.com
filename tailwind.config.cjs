/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        'md': { 'raw': 'print, (min-width: 768px)' },
      },
      transitionProperty: {
        'top-opacity': 'opacity, top',       
      }
    },
  },
  plugins: [],
}
