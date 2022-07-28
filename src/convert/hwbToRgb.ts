import RGB from "../interface/rgb";
import hslToRgb from "./hslToRgb";

/**
 * Returns an RGB colour object from an HWB colour.
 *
 * @link https://www.w3.org/TR/css-color-4/#hwb-to-rgb
 * @link http://alvyray.com/Papers/CG/hwb2rgb.htm
 */
export default function hwbToRgb(H: number, W: number, B: number): RGB {
  if (W + B >= 1) {
    const gray = W / (W + B);
    return { r: gray, g: gray, b: gray };
  }
  let { r, g, b } = hslToRgb(H, 1, 0.5);
  [r, g, b] = [r, g, b].map((v) => v * (1 - W - B) + W);

  return { r, g, b };
}
