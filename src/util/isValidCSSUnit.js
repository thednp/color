import matchers from "./matchers";
export default function isValidCSSUnit(comp) {
    return Boolean(matchers.CSS_UNIT.exec(`${comp}`));
}
//# sourceMappingURL=isValidCSSUnit.js.map