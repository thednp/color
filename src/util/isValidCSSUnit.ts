import matchers from "./matchers";

/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
const isValidCSSUnit = (comp: string | number): comp is number => {
  return Boolean(matchers.CSS_UNIT.exec(`${comp}`));
};

export default isValidCSSUnit;
