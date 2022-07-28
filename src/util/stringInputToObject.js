import isColorName from "./isColorName";
import isNonColor from "./isNonColor";
import getRGBFromName from "./getRGBFromName";
import matchers from "./matchers";
import parseIntFromHex from "../convert/parseIntFromHex";
import convertHexToDecimal from "../convert/convertHexToDecimal";
export default function stringInputToObject(input) {
    const color = String(input).trim().toLowerCase();
    if (isColorName(color)) {
        return Object.assign(getRGBFromName(color), {
            a: 1,
            format: "rgb",
            ok: true,
        });
    }
    if (isNonColor(color)) {
        const a = color === "transparent" ? 0 : 1;
        return {
            r: 0,
            g: 0,
            b: 0,
            a,
            format: "rgb",
            ok: true,
        };
    }
    let [, m1, m2, m3, m4] = matchers.rgb.exec(color) || [];
    if (m1 && m2 && m3) {
        return {
            r: m1,
            g: m2,
            b: m3,
            a: m4 !== undefined ? m4 : 1,
            format: "rgb",
            ok: true,
        };
    }
    [, m1, m2, m3, m4] = matchers.hsl.exec(color) || [];
    if (m1 && m2 && m3) {
        return {
            h: m1,
            s: m2,
            l: m3,
            a: m4 !== undefined ? m4 : 1,
            format: "hsl",
            ok: true,
        };
    }
    [, m1, m2, m3, m4] = matchers.hsv.exec(color) || [];
    if (m1 && m2 && m3) {
        return {
            h: m1,
            s: m2,
            v: m3,
            a: m4 !== undefined ? m4 : 1,
            format: "hsv",
            ok: true,
        };
    }
    [, m1, m2, m3, m4] = matchers.hwb.exec(color) || [];
    if (m1 && m2 && m3) {
        return {
            h: m1,
            w: m2,
            b: m3,
            a: m4 !== undefined ? m4 : 1,
            format: "hwb",
            ok: true,
        };
    }
    [, m1, m2, m3, m4] = matchers.hex8.exec(color) || [];
    if (m1 && m2 && m3 && m4) {
        return {
            r: parseIntFromHex(m1),
            g: parseIntFromHex(m2),
            b: parseIntFromHex(m3),
            a: convertHexToDecimal(m4),
            format: "hex",
            ok: true,
        };
    }
    [, m1, m2, m3] = matchers.hex6.exec(color) || [];
    if (m1 && m2 && m3) {
        return {
            r: parseIntFromHex(m1),
            g: parseIntFromHex(m2),
            b: parseIntFromHex(m3),
            a: 1,
            format: "hex",
            ok: true,
        };
    }
    [, m1, m2, m3, m4] = matchers.hex4.exec(color) || [];
    if (m1 && m2 && m3 && m4) {
        return {
            r: parseIntFromHex(m1 + m1),
            g: parseIntFromHex(m2 + m2),
            b: parseIntFromHex(m3 + m3),
            a: convertHexToDecimal(m4 + m4),
            format: "hex",
            ok: true,
        };
    }
    [, m1, m2, m3] = matchers.hex3.exec(color) || [];
    if (m1 && m2 && m3) {
        return {
            r: parseIntFromHex(m1 + m1),
            g: parseIntFromHex(m2 + m2),
            b: parseIntFromHex(m3 + m3),
            a: 1,
            format: "hex",
            ok: true,
        };
    }
    return {
        r: 0,
        g: 0,
        b: 0,
        a: 1,
        format: "rgb",
        ok: !input ? true : false,
    };
}
//# sourceMappingURL=stringInputToObject.js.map