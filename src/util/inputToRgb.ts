import ColorInputTypes from './colorInputTypes';
import stringInputToObject from './stringInputToObject';
import isColorType from './isColorType';
import isValidCSSUnit from './isValidCSSUnit';
import isPercentage from './isPercentage';
import bound01 from './bound01';
import boundAlpha from './boundAlpha';
import hsvToRgb from '../convert/hsvToRgb';
import hslToRgb from '../convert/hslToRgb';
import hwbToRgb from '../convert/hwbToRgb';
import rgbToRgb from '../convert/rgbToRgb';

import type { RGBAObject } from '../interface/rgbaObject';
import type { RGB } from '../interface/rgb';

/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000" // CSS4 Module
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba(255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba(1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "rgb(255 0 0 / 10%)" or "rgb 255 0 0 0.1" // CSS4 Module
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsl(0deg 100% 50% / 50%)" or "hsl 0 100 50 50" // CSS4 Module
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * "hsva(0, 100%, 100%, 0.1)" or "hsva 0 100% 100% 0.1"
 * "hsv(0deg 100% 100% / 10%)" or "hsv 0 100 100 0.1" // CSS4 Module
 * "hwb(0deg, 100%, 100%, 100%)" or "hwb 0 100% 100% 0.1" // CSS4 Module
 * ```
 */
const inputToRGB = (input?: ColorInputTypes): RGBAObject => {
  let rgb = { r: 0, g: 0, b: 0 };
  let color = input;
  let a = 1;
  let s: number;
  let v: number;
  let l: number;
  let w: number;
  let b: number;
  let h: number;
  let r: number;
  let g: number;
  let format = 'rgb';
  let ok = false;

  if (!color || typeof color === 'string') {
    color = stringInputToObject(color);
    ok = (color as RGBAObject).ok || ok;
  }

  if (
    isColorType(color, rgb) &&
    isValidCSSUnit(color.r) &&
    isValidCSSUnit(color.g) &&
    isValidCSSUnit(color.b)
  ) {
    // check if already a Color instance
    // RGB values here are all in [0, 1] range
    if (['format', 'ok', 'originalInput'].every(x => x in color)) {
      return { ...color } as RGBAObject;
    }
    ({ r, g, b } = color as RGB);
    // RGB values now are all in [0, 100%|255] range
    // [r, g, b] = [r, g, b].map(n => bound01(n, isPercentage(n) ? 100 : 255));
    // rgb = { r, g, b };
    rgb = rgbToRgb(r, g, b);
    format = 'format' in color ? (color as RGBAObject).format : 'rgb';
    // console.log(color, 'Color / rgbToRgb', rgb)
  }
  if (
    isColorType(color, { h: 0, s: 0, v: 0 }) &&
    isValidCSSUnit(color.h) &&
    isValidCSSUnit(color.s) &&
    isValidCSSUnit(color.v)
  ) {
    ({ h, s, v } = color);
    h = bound01(h, 360); // hue input can be `5deg` or a [0, 360] value
    s = bound01(s, 100); // saturation input can be `5%` or a [0, 100] value
    v = bound01(v, 100); // brightness input can be `5%` or a [0, 100] value
    rgb = hsvToRgb(h, s, v); // outputs RGBa with [0-1] values
    format = 'hsv';
    // console.log(color, 'hsvToRgb', rgb);
  }
  if (
    isColorType(color, { h: 0, s: 0, l: 0 }) &&
    isValidCSSUnit(color.h) &&
    isValidCSSUnit(color.s) &&
    isValidCSSUnit(color.l)
  ) {
    ({ h, s, l } = color);
    h = bound01(h, 360); // hue can be `5deg` or a [0, 1] value
    s = bound01(s, 100); // saturation can be `5%` or a [0, 1] value
    l = bound01(l, 100); // lightness can be `5%` or a [0, 1] value
    rgb = hslToRgb(h, s, l); // outputs RGBa with [0-1] values
    format = 'hsl';
    // console.log(color, 'hslToRgb', rgb);
  }
  if (
    isColorType(color, { h: 0, w: 0, b: 0 }) &&
    isValidCSSUnit(color.h) &&
    isValidCSSUnit(color.w) &&
    isValidCSSUnit(color.b)
  ) {
    ({ h, w, b } = color);

    h = bound01(h, 360); // hue input can be `5deg` or a [0, 360] value
    w = bound01(w, 100); // whiteness input can be `5%` or a [0, 100] value
    b = bound01(b, 100); // blackness input can be `5%` or a [0, 100] value
    rgb = hwbToRgb(h, w, b); // outputs RGBa with [0-1] values
    format = 'hwb';
    // console.log(color, 'hwbToRgb', rgb);
  }

  if (isValidCSSUnit((color as RGBAObject).a)) {
    a = (color as RGBAObject).a;
    a = isPercentage(a) || parseFloat(`${a}`) > 1 ? bound01(a, 100) : a;
  }

  return {
    ...rgb,
    a: boundAlpha(a),
    format,
    ok,
  };
};

export default inputToRGB;
