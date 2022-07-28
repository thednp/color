import roundPart from "../util/roundPart";
export default function convertDecimalToHex(d) {
    return roundPart(d * 255).toString(16);
}
//# sourceMappingURL=convertDecimalToHex.js.map