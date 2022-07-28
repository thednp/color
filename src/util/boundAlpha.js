export default function boundAlpha(a) {
    let na = parseFloat(a);
    if (Number.isNaN(na) || na < 0 || na > 1) {
        na = 1;
    }
    return na;
}
//# sourceMappingURL=boundAlpha.js.map