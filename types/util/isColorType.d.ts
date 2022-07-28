import HSLALike from "../interface/hslaLike";
import HSVALike from "../interface/hsvaLike";
import HWBALike from "../interface/hwbaLike";
import RGBALike from "../interface/rgbaLike";
export default function isColorType<T>(obj: Partial<RGBALike | HSLALike | HSVALike | HWBALike>, inst: T): obj is T;
//# sourceMappingURL=isColorType.d.ts.map