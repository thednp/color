import parseIntFromHex from "./parseIntFromHex.ts";

/**
 * Converts a hexadecimal value to decimal.
 */
const convertHexToDecimal = (h: string): number => {
  return parseIntFromHex(h) / 255;
};
export default convertHexToDecimal;
