import parseIntFromHex from "./parseIntFromHex";

/**
 * Converts a hexadecimal value to decimal.
 */
export default function convertHexToDecimal(h: string): number {
  return parseIntFromHex(h) / 255;
}
