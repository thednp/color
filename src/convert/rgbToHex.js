import pad2 from "../util/pad2";
import roundPart from "../util/roundPart";
export default function rgbToHex(r, g, b, allow3Char) {
    const hex = [
        pad2(roundPart(r).toString(16)),
        pad2(roundPart(g).toString(16)),
        pad2(roundPart(b).toString(16)),
    ];
    if (allow3Char &&
        hex[0].charAt(0) === hex[0].charAt(1) &&
        hex[1].charAt(0) === hex[1].charAt(1) &&
        hex[2].charAt(0) === hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join("");
}
//# sourceMappingURL=rgbToHex.js.map