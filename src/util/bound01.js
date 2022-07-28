import isOnePointZero from "src/util/isOnePointZero";
import isPercentage from "src/util/isPercentage";
export default function bound01(N, max) {
    let n = N;
    if (typeof N === "number" &&
        Math.min(N, 0) === 0 &&
        Math.max(N, 1) === 1)
        return N;
    if (isOnePointZero(N))
        n = "100%";
    const processPercent = isPercentage(n);
    n =
        max === 360
            ? parseFloat(n)
            : Math.min(max, Math.max(0, parseFloat(n)));
    if (processPercent)
        n = (n * max) / 100;
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    if (max === 360) {
        n = (n < 0 ? (n % max) + max : n % max) / max;
    }
    else {
        n = (n % max) / max;
    }
    return n;
}
//# sourceMappingURL=bound01.js.map