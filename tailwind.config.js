const { fontSizes, fontWeights } = require('./src/themes/font');
const { lightColor } = require('./src/themes/color');

module.exports = {
  mode: 'jit',
  content: [
    "app/**/*.{js,ts,jsx,tsx,mdx}",
    "src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: 'var(--font-inter), Roboto, sans-serif',
      serif: [
        'var(--font-fraunces), Roboto, sans-serif',
        {
          fontFeatureSettings: 'normal',
          fontVariationSettings: '"opsz" 72, "SOFT" 50'
        }
      ],
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
