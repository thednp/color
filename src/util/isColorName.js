import nonColors from "./nonColors";
import COLOR_FORMAT from "./colorFormat";
import webColors from "./webColors";
export default function isColorName(color) {
    if (nonColors.includes(color) ||
        ["#", ...COLOR_FORMAT].some((f) => color.includes(f))) {
        return false;
    }
    return webColors.some(([c]) => color === c);
}
//# sourceMappingURL=isColorName.js.map