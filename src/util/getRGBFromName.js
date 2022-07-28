import webColors from "./webColors";
export default function getRGBFromName(name) {
    const [[, rgbValue]] = webColors.filter(([k]) => k === name.toLowerCase());
    return rgbValue;
}
//# sourceMappingURL=getRGBFromName.js.map