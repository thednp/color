/**
 * Converts a base-16 hexadecimal value into a base-10 integer.
 */
export default function parseIntFromHex(val: string): number {
  return parseInt(val, 16);
}
