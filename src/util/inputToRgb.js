import stringInputToObject from "./stringInputToObject";
import isColorType from "./isColorType";
import isValidCSSUnit from "./isValidCSSUnit";
import isPercentage from "./isPercentage";
import bound01 from "./bound01";
import boundAlpha from "./boundAlpha";
import hsvToRgb from "../convert/hsvToRgb";
import hslToRgb from "../convert/hslToRgb";
import hwbToRgb from "../convert/hwbToRgb";
export default function inputToRGB(input) {
    let rgb = { r: 0, g: 0, b: 0 };
    let color = input;
    let a = 1;
    let s;
    let v;
    let l;
    let w;
    let b;
    let h;
    let r;
    let g;
    let format = "rgb";
    let ok = false;
    if (!color || typeof color === "string") {
        color = stringInputToObject(color);
        ok = color.ok;
    }
    if (isColorType(color, rgb) &&
        isValidCSSUnit(color.r) &&
        isValidCSSUnit(color.g) &&
        isValidCSSUnit(color.b)) {
        ({ r, g, b } = color);
        [r, g, b] = [r, g, b].map((n) => bound01(n, isPercentage(n) ? 100 : 255));
        rgb = { r, g, b };
        format = "format" in color ? color.format : "rgb";
    }
    if (isColorType(color, { h: 0, s: 0, v: 0 }) &&
        isValidCSSUnit(color.h) &&
        isValidCSSUnit(color.s) &&
        isValidCSSUnit(color.v)) {
        ({ h, s, v } = color);
        h = bound01(h, 360);
        s = bound01(s, 100);
        v = bound01(v, 100);
        rgb = hsvToRgb(h, s, v);
        format = "hsv";
    }
    if (isColorType(color, { h: 0, s: 0, l: 0 }) &&
        isValidCSSUnit(color.h) &&
        isValidCSSUnit(color.s) &&
        isValidCSSUnit(color.l)) {
        ({ h, s, l } = color);
        h = bound01(h, 360);
        s = bound01(s, 100);
        l = bound01(l, 100);
        rgb = hslToRgb(h, s, l);
        format = "hsl";
    }
    if (isColorType(color, { h: 0, w: 0, b: 0 }) &&
        isValidCSSUnit(color.h) &&
        isValidCSSUnit(color.w) &&
        isValidCSSUnit(color.b)) {
        ({ h, w, b } = color);
        h = bound01(h, 360);
        w = bound01(w, 100);
        b = bound01(b, 100);
        rgb = hwbToRgb(h, w, b);
        format = "hwb";
    }
    if (isValidCSSUnit(color.a)) {
        a = color.a;
        a = isPercentage(a) || parseFloat(`${a}`) > 1 ? bound01(a, 100) : a;
    }
    return {
        r: rgb.r,
        g: rgb.g,
        b: rgb.b,
        a: boundAlpha(a),
        format,
        ok,
    };
}
//# sourceMappingURL=inputToRgb.js.map