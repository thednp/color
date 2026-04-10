import { HSLA } from "./hsla.ts";

export default interface HSLAObject extends HSLA {
  ok: boolean;
  format: string;
}
