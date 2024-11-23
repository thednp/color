import bound01 from "../util/bound01";
import type { RGB } from "../interface/rgb";

/**
 * Converts an RGB colour value to RGB.
 * Input RGB in [0-255] range
 * Output RGB in [0-1] range
 */
const rgbToRgb = (r: number, g: number, b: number): RGB => {
  return {
    r: bound01(r, 255),
    g: bound01(g, 255),
    b: bound01(b, 255),
  };
};

export default rgbToRgb;
