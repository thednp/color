import nonColors from "./nonColors";

/**
 * Check if a text is a valid CSS non-color value.
 */
export default function isNonColor(str: string): boolean {
  return nonColors.includes(str);
}
