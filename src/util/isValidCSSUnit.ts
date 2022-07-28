import matchers from "./matchers";

/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
export default function isValidCSSUnit(comp: string | number): boolean {
  return Boolean(matchers.CSS_UNIT.exec(`${comp}`));
}
