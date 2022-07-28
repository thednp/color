export default function roundPart(v) {
    const floor = Math.floor(v);
    return v - floor < 0.5 ? floor : Math.round(v);
}
//# sourceMappingURL=roundPart.js.map