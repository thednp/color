/**
 * Check to see if string passed in is a percentage
 */
export default function isPercentage(n: string | number): boolean {
  return typeof n === "string" && n.includes("%");
}
