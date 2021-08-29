const { fontSizes, fontWeights } = require('./src/themes/font');
const { lightColor } = require('./src/themes/color');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      roboto: 'Roboto'
    },
    fontSize: fontSizes,
    fontWeight: fontWeights,
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ...lightColor
    },
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1920px'
    }
  }
};
