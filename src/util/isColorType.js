export default function isColorType(obj, inst) {
    return typeof obj === "object" && Object.keys(inst).every((c) => c in obj);
}
//# sourceMappingURL=isColorType.js.map