import { HSLALike } from "../interface/hslaLike.ts";
import { HSVALike } from "../interface/hsvaLike.ts";
import { HWBALike } from "../interface/hwbaLike.ts";
import { RGBALike } from "../interface/rgbaLike.ts";

type ColorInputTypes =
  | string
  | Partial<RGBALike | HSVALike | HSLALike | HWBALike>;

export default ColorInputTypes;
