/** An HSVA object, with all values in the range 0-1 */
export interface HSVALike {
  h: number | string;
  s: number | string;
  v: number | string;
  a: number | string;
  format: string;
  ok: boolean;
}
