import HSLALike from "../interface/hslaLike";
import HSVALike from "../interface/hsvaLike";
import HWBALike from "../interface/hwbaLike";
import RGBALike from "../interface/rgbaLike";

/**
 * Check if a value is an instance of an RGB(a)/HSL(a)/HSV(a)/HWB(a) instance.
 */
const isColorType = <T extends object>(
  obj: Partial<RGBALike | HSLALike | HSVALike | HWBALike>,
  inst: T
): obj is T => {
  return typeof obj === "object" && Object.keys(inst).every((c) => c in obj);
};

export default isColorType;
