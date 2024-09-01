/** An HWBA object, with all values in the range 0-1 */
export interface HWBALike {
  h: number | string;
  w: number | string;
  b: number | string;
  a: number | string;
  format: string;
  ok: boolean;
}
