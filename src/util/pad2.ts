/**
 * Force a hexadecimal value to have 2 characters.
 */
export default function pad2(c: string): string {
  return c.length === 1 ? `0${c}` : String(c);
}
