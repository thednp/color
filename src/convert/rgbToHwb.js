export default function rgbToHwb(r, g, b) {
    let f = 0;
    let i = 0;
    const whiteness = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const black = 1 - max;
    if (max === whiteness)
        return { h: 0, w: whiteness, b: black };
    if (r === whiteness) {
        f = g - b;
        i = 3;
    }
    else {
        f = g === whiteness ? b - r : r - g;
        i = g === whiteness ? 5 : 1;
    }
    const h = (i - f / (max - whiteness)) / 6;
    return {
        h: h === 1 ? 0 : h,
        w: whiteness,
        b: black,
    };
}
//# sourceMappingURL=rgbToHwb.js.map