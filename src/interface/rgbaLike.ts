/** An RGBA object, with all values in the range 0-1 */
export interface RGBALike {
  r: number | string;
  g: number | string;
  b: number | string;
  a: number | string;
  format: string;
  ok: boolean;
}
