import roundPart from "../util/roundPart";

/**
 * Converts a decimal value to hexadecimal.
 */
export default function convertDecimalToHex(d: number): string {
  return roundPart(d * 255).toString(16);
}
