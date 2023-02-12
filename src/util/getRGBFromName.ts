import RGB from "../interface/rgb";
import webColors from "./webColors";

/**
 * Returns the RGB value of a web safe colour.
 */
export default function getRGBFromName(name: string): RGB {
  const [[, rgbValue]] = webColors.filter(([k]) => k === name.toLowerCase());

  return rgbValue;
}
