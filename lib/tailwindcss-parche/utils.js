const color = require('color');

/**
 * @param value - a color represented as a string (hex, rgb, rgba, hsl, hsla, etc)
 * @return the color represented as its rgb values with alpha channel stripped
 */
exports.toRgb = (value) => {
  const [r, g, b] = color(value).rgb().array();
  return `${r} ${g} ${b}`;
};

/**
 * @param customPropName - a custom prop to configure with opacity
 * @return the variable configured with opacity
 */
exports.withOpacity =
  (customPropName) =>
  ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgb(var(${customPropName}) / ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgb(var(${customPropName}) / var(${opacityVariable}, 1))`;
    }
    return `rgb(var(${customPropName}))`;
  };

/**
 * @param value - the value to test if it is a valid color string
 * @return whether the value passed in is a valid color string
 */
exports.isColor = (value) => {
  if (typeof value === 'number') {
    return false;
  }
  try {
    color(value);
    return true;
  } catch {
    return false;
  }
};
