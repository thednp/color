import roundPart from "../util/roundPart.ts";

/**
 * Converts a decimal value to hexadecimal.
 */
const convertDecimalToHex = (d: number): string => {
  return roundPart(d * 255).toString(16);
};

export default convertDecimalToHex;
