exports.default = {
  content: ["src/*.{html,js}"],
  theme: {
    extend: {
      transitionProperty: {
        'max-h': 'max-height'
      },
      colors: {      
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