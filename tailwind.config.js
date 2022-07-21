module.exports = {
  content: ["src/*.{html,js}"],
  theme: {
    extend: {
      transitionProperty: {
        'max-h': 'max-height'
      },
      colors: {
        'sage': '#d0e0c6',
        'sage2' : '#C2D1B8',
        'willow': '#425934'
      },
      screens: {
        'xs': '300px',
        'max-md': {'max': '767px'},  
        'max-xl': {'max': '1279px'},        
      },
      aspectRatio: {
        '16/10': '16 / 10',
      },
    },
  },
  plugins: [],
}
