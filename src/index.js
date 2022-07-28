import nonColors from "./util/nonColors";
import roundPart from "./util/roundPart";
import webColors from "./util/webColors";
import matchers from "./util/matchers";
import isNonColor from "./util/isNonColor";
import isColorType from "./util/isColorType";
import isOnePointZero from "./util/isOnePointZero";
import isPercentage from "./util/isPercentage";
import isValidCSSUnit from "./util/isValidCSSUnit";
import isColorName from "./util/isColorName";
import bound01 from "./util/bound01";
import boundAlpha from "./util/boundAlpha";
import clamp01 from "./util/clamp01";
import pad2 from "./util/pad2";
import COLOR_FORMAT from "./util/colorFormat";
import getRGBFromName from "./util/getRGBFromName";
import convertHexToDecimal from "./convert/convertHexToDecimal";
import convertDecimalToHex from "./convert/convertDecimalToHex";
import parseIntFromHex from "./convert/parseIntFromHex";
import rgbToHsl from "./convert/rgbToHsl";
import hueToRgb from "./convert/hueToRgb";
import hslToRgb from "./convert/hslToRgb";
import rgbToHwb from "./convert/rgbToHwb";
import hwbToRgb from "./convert/hwbToRgb";
import rgbToHsv from "./convert/rgbToHsv";
import hsvToRgb from "./convert/hsvToRgb";
import rgbToHex from "./convert/rgbToHex";
import rgbaToHex from "./convert/rgbaToHex";
import stringInputToObject from "./util/stringInputToObject";
import inputToRGB from "./util/inputToRgb";
export default class Color {
    r;
    g;
    b;
    a;
    format;
    ok;
    originalInput;
    constructor(input, config) {
        const configFormat = config && COLOR_FORMAT.includes(config) ? config : "";
        const { r, g, b, a, ok, format } = inputToRGB(input);
        this.originalInput = input;
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        this.ok = ok;
        this.format = configFormat || format;
    }
    get isValid() {
        return this.ok;
    }
    get isDark() {
        return this.brightness < 120;
    }
    get luminance() {
        const { r, g, b } = this;
        let R = 0;
        let G = 0;
        let B = 0;
        if (r <= 0.03928) {
            R = r / 12.92;
        }
        else {
            R = ((r + 0.055) / 1.055) ** 2.4;
        }
        if (g <= 0.03928) {
            G = g / 12.92;
        }
        else {
            G = ((g + 0.055) / 1.055) ** 2.4;
        }
        if (b <= 0.03928) {
            B = b / 12.92;
        }
        else {
            B = ((b + 0.055) / 1.055) ** 2.4;
        }
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    }
    get brightness() {
        const { r, g, b } = this.toRgb();
        return (r * 299 + g * 587 + b * 114) / 1000;
    }
    get name() {
        const { r, g, b } = this.toRgb();
        const [colorName] = webColors
            .map(([name, rgb]) => {
            const distance = Math.sqrt((rgb.r - r) ** 2 + (rgb.g - g) ** 2 + (rgb.b - b) ** 2);
            return [name, distance];
        })
            .find(([, distance], i, ar) => {
            return distance === Math.min(...ar.map(([, d]) => d));
        });
        return colorName;
    }
    toRgb() {
        let { r, g, b, a } = this;
        [r, g, b] = [r, g, b].map((n) => roundPart(n * 255 * 100) / 100);
        a = roundPart(a * 100) / 100;
        return {
            r,
            g,
            b,
            a,
        };
    }
    toRgbString() {
        const { r, g, b, a } = this.toRgb();
        const [R, G, B] = [r, g, b].map(roundPart);
        return a === 1 ? `rgb(${R}, ${G}, ${B})` : `rgba(${R}, ${G}, ${B}, ${a})`;
    }
    toRgbCSS4String() {
        const { r, g, b, a } = this.toRgb();
        const [R, G, B] = [r, g, b].map(roundPart);
        const A = a === 1 ? "" : ` / ${roundPart(a * 100)}%`;
        return `rgb(${R} ${G} ${B}${A})`;
    }
    toHex(allow3Char) {
        const { r, g, b, a } = this.toRgb();
        return a === 1
            ? rgbToHex(r, g, b, allow3Char)
            : rgbaToHex(r, g, b, a, allow3Char);
    }
    toHexString(allow3Char) {
        return `#${this.toHex(allow3Char)}`;
    }
    toHex8(allow4Char) {
        const { r, g, b, a } = this.toRgb();
        return rgbaToHex(r, g, b, a, allow4Char);
    }
    toHex8String(allow4Char) {
        return `#${this.toHex8(allow4Char)}`;
    }
    toHsv() {
        const { r, g, b, a } = this;
        const { h, s, v } = rgbToHsv(r, g, b);
        return {
            h,
            s,
            v,
            a,
        };
    }
    toHsl() {
        const { r, g, b, a } = this;
        const { h, s, l } = rgbToHsl(r, g, b);
        return {
            h,
            s,
            l,
            a,
        };
    }
    toHslString() {
        let { h, s, l, a } = this.toHsl();
        h = roundPart(h * 360);
        s = roundPart(s * 100);
        l = roundPart(l * 100);
        a = roundPart(a * 100) / 100;
        return a === 1
            ? `hsl(${h}, ${s}%, ${l}%)`
            : `hsla(${h}, ${s}%, ${l}%, ${a})`;
    }
    toHslCSS4String() {
        let { h, s, l, a } = this.toHsl();
        h = roundPart(h * 360);
        s = roundPart(s * 100);
        l = roundPart(l * 100);
        a = roundPart(a * 100);
        const A = a < 100 ? ` / ${roundPart(a)}%` : "";
        return `hsl(${h}deg ${s}% ${l}%${A})`;
    }
    toHwb() {
        const { r, g, b, a } = this;
        const { h, w, b: bl } = rgbToHwb(r, g, b);
        return {
            h,
            w,
            b: bl,
            a,
        };
    }
    toHwbString() {
        let { h, w, b, a } = this.toHwb();
        h = roundPart(h * 360);
        w = roundPart(w * 100);
        b = roundPart(b * 100);
        a = roundPart(a * 100);
        const A = a < 100 ? ` / ${roundPart(a)}%` : "";
        return `hwb(${h}deg ${w}% ${b}%${A})`;
    }
    setAlpha(alpha) {
        if (typeof alpha !== "number")
            return this;
        this.a = boundAlpha(alpha);
        return this;
    }
    saturate(amount) {
        if (typeof amount !== "number")
            return this;
        const { h, s, l } = this.toHsl();
        const { r, g, b } = hslToRgb(h, clamp01(s + amount / 100), l);
        Object.assign(this, { r, g, b });
        return this;
    }
    desaturate(amount) {
        return typeof amount === "number" ? this.saturate(-amount) : this;
    }
    greyscale() {
        return this.saturate(-100);
    }
    lighten(amount) {
        if (typeof amount !== "number")
            return this;
        const { h, s, l } = this.toHsl();
        const { r, g, b } = hslToRgb(h, s, clamp01(l + amount / 100));
        Object.assign(this, { r, g, b });
        return this;
    }
    darken(amount) {
        return typeof amount === "number" ? this.lighten(-amount) : this;
    }
    spin(amount) {
        if (typeof amount !== "number")
            return this;
        const { h, s, l } = this.toHsl();
        const { r, g, b } = hslToRgb(clamp01(((h * 360 + amount) % 360) / 360), s, l);
        Object.assign(this, { r, g, b });
        return this;
    }
    clone() {
        return new Color(this);
    }
    toString(allowShort) {
        const { format } = this;
        if (format === "hex")
            return this.toHexString(allowShort);
        if (format === "hsl")
            return this.toHslString();
        if (format === "hwb")
            return this.toHwbString();
        return this.toRgbString();
    }
}
Object.assign(Color, {
    matchers,
    isOnePointZero,
    isPercentage,
    isValidCSSUnit,
    isNonColor,
    isColorName,
    isColorType,
    pad2,
    clamp01,
    bound01,
    boundAlpha,
    getRGBFromName,
    convertHexToDecimal,
    convertDecimalToHex,
    rgbToHsl,
    rgbToHex,
    rgbToHsv,
    rgbToHwb,
    rgbaToHex,
    hslToRgb,
    hsvToRgb,
    hueToRgb,
    hwbToRgb,
    parseIntFromHex,
    stringInputToObject,
    inputToRGB,
    roundPart,
    webColors,
    nonColors,
});
//# sourceMappingURL=index.js.map