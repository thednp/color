import hueToRgb from "./hueToRgb";
export default function hslToRgb(h, s, l) {
    let r = 0;
    let g = 0;
    let b = 0;
    if (s === 0) {
        g = l;
        b = l;
        r = l;
    }
    else if (l) {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hueToRgb(p, q, h + 1 / 3);
        g = hueToRgb(p, q, h);
        b = hueToRgb(p, q, h - 1 / 3);
    }
    return { r, g, b };
}
//# sourceMappingURL=hslToRgb.js.map