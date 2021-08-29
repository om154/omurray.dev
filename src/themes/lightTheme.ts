import { lightColor } from './color';
import { fontSizes, fontWeights } from './font';
import sizes from './sizes';
import colors from './colors';

const lightTheme = {
  color: { ...lightColor },
  sizes,
  space: sizes,
  radii: sizes,
  colors,
  // fontSizes,
  fontWeights,
};
export default lightTheme;
