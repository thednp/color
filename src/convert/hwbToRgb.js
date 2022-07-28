import hslToRgb from "./hslToRgb";
export default function hwbToRgb(H, W, B) {
    if (W + B >= 1) {
        const gray = W / (W + B);
        return { r: gray, g: gray, b: gray };
    }
    let { r, g, b } = hslToRgb(H, 1, 0.5);
    [r, g, b] = [r, g, b].map((v) => v * (1 - W - B) + W);
    return { r, g, b };
}
//# sourceMappingURL=hwbToRgb.js.map