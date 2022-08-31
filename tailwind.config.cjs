/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      transitionProperty: {
        'top-opacity': 'opacity, top',       
      }
    },
  },
  plugins: [],
}
