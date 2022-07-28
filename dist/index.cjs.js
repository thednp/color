"use strict";
/*!
* Color v0.0.1 (http://github.com/thednp/color)
* Copyright 2022 © thednp
* Licensed under MIT (https://github.com/thednp/color-picker/blob/master/LICENSE)
*/
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => Color
});
module.exports = __toCommonJS(src_exports);

// src/util/nonColors.ts
var nonColors = [
  "transparent",
  "currentColor",
  "inherit",
  "revert",
  "initial"
];
var nonColors_default = nonColors;

// src/util/roundPart.ts
function roundPart(v) {
  const floor = Math.floor(v);
  return v - floor < 0.5 ? floor : Math.round(v);
}

// src/util/webColors.ts
var webColors = [
  [
    "aliceblue",
    {
      r: 240,
      g: 248,
      b: 255
    }
  ],
  [
    "antiquewhite",
    {
      r: 250,
      g: 235,
      b: 215
    }
  ],
  [
    "aqua",
    {
      r: 0,
      g: 255,
      b: 255
    }
  ],
  [
    "aquamarine",
    {
      r: 127,
      g: 255,
      b: 212
    }
  ],
  [
    "azure",
    {
      r: 240,
      g: 255,
      b: 255
    }
  ],
  [
    "beige",
    {
      r: 245,
      g: 245,
      b: 220
    }
  ],
  [
    "bisque",
    {
      r: 255,
      g: 228,
      b: 196
    }
  ],
  [
    "black",
    {
      r: 0,
      g: 0,
      b: 0
    }
  ],
  [
    "blanchedalmond",
    {
      r: 255,
      g: 235,
      b: 205
    }
  ],
  [
    "blue",
    {
      r: 0,
      g: 0,
      b: 255
    }
  ],
  [
    "blueviolet",
    {
      r: 138,
      g: 43,
      b: 226
    }
  ],
  [
    "brown",
    {
      r: 165,
      g: 42,
      b: 42
    }
  ],
  [
    "burlywood",
    {
      r: 222,
      g: 184,
      b: 135
    }
  ],
  [
    "cadetblue",
    {
      r: 95,
      g: 158,
      b: 160
    }
  ],
  [
    "chartreuse",
    {
      r: 127,
      g: 255,
      b: 0
    }
  ],
  [
    "chocolate",
    {
      r: 210,
      g: 105,
      b: 30
    }
  ],
  [
    "coral",
    {
      r: 255,
      g: 127,
      b: 80
    }
  ],
  [
    "cornflowerblue",
    {
      r: 100,
      g: 149,
      b: 237
    }
  ],
  [
    "cornsilk",
    {
      r: 255,
      g: 248,
      b: 220
    }
  ],
  [
    "crimson",
    {
      r: 220,
      g: 20,
      b: 60
    }
  ],
  [
    "cyan",
    {
      r: 0,
      g: 255,
      b: 255
    }
  ],
  [
    "darkblue",
    {
      r: 0,
      g: 0,
      b: 139
    }
  ],
  [
    "darkcyan",
    {
      r: 0,
      g: 139,
      b: 139
    }
  ],
  [
    "darkgoldenrod",
    {
      r: 184,
      g: 134,
      b: 11
    }
  ],
  [
    "darkgray",
    {
      r: 169,
      g: 169,
      b: 169
    }
  ],
  [
    "darkgreen",
    {
      r: 0,
      g: 100,
      b: 0
    }
  ],
  [
    "darkgrey",
    {
      r: 169,
      g: 169,
      b: 169
    }
  ],
  [
    "darkkhaki",
    {
      r: 189,
      g: 183,
      b: 107
    }
  ],
  [
    "darkmagenta",
    {
      r: 139,
      g: 0,
      b: 139
    }
  ],
  [
    "darkolivegreen",
    {
      r: 85,
      g: 107,
      b: 47
    }
  ],
  [
    "darkorange",
    {
      r: 255,
      g: 140,
      b: 0
    }
  ],
  [
    "darkorchid",
    {
      r: 153,
      g: 50,
      b: 204
    }
  ],
  [
    "darkred",
    {
      r: 139,
      g: 0,
      b: 0
    }
  ],
  [
    "darksalmon",
    {
      r: 233,
      g: 150,
      b: 122
    }
  ],
  [
    "darkseagreen",
    {
      r: 143,
      g: 188,
      b: 143
    }
  ],
  [
    "darkslateblue",
    {
      r: 72,
      g: 61,
      b: 139
    }
  ],
  [
    "darkslategray",
    {
      r: 47,
      g: 79,
      b: 79
    }
  ],
  [
    "darkslategrey",
    {
      r: 47,
      g: 79,
      b: 79
    }
  ],
  [
    "darkturquoise",
    {
      r: 0,
      g: 206,
      b: 209
    }
  ],
  [
    "darkviolet",
    {
      r: 148,
      g: 0,
      b: 211
    }
  ],
  [
    "deeppink",
    {
      r: 255,
      g: 20,
      b: 147
    }
  ],
  [
    "deepskyblue",
    {
      r: 0,
      g: 191,
      b: 255
    }
  ],
  [
    "dimgray",
    {
      r: 105,
      g: 105,
      b: 105
    }
  ],
  [
    "dimgrey",
    {
      r: 105,
      g: 105,
      b: 105
    }
  ],
  [
    "dodgerblue",
    {
      r: 30,
      g: 144,
      b: 255
    }
  ],
  [
    "firebrick",
    {
      r: 178,
      g: 34,
      b: 34
    }
  ],
  [
    "floralwhite",
    {
      r: 255,
      g: 250,
      b: 240
    }
  ],
  [
    "forestgreen",
    {
      r: 34,
      g: 139,
      b: 34
    }
  ],
  [
    "fuchsia",
    {
      r: 255,
      g: 0,
      b: 255
    }
  ],
  [
    "gainsboro",
    {
      r: 220,
      g: 220,
      b: 220
    }
  ],
  [
    "ghostwhite",
    {
      r: 248,
      g: 248,
      b: 255
    }
  ],
  [
    "goldenrod",
    {
      r: 218,
      g: 165,
      b: 32
    }
  ],
  [
    "gold",
    {
      r: 255,
      g: 215,
      b: 0
    }
  ],
  [
    "gray",
    {
      r: 128,
      g: 128,
      b: 128
    }
  ],
  [
    "green",
    {
      r: 0,
      g: 128,
      b: 0
    }
  ],
  [
    "greenyellow",
    {
      r: 173,
      g: 255,
      b: 47
    }
  ],
  [
    "grey",
    {
      r: 128,
      g: 128,
      b: 128
    }
  ],
  [
    "honeydew",
    {
      r: 240,
      g: 255,
      b: 240
    }
  ],
  [
    "hotpink",
    {
      r: 255,
      g: 105,
      b: 180
    }
  ],
  [
    "indianred",
    {
      r: 205,
      g: 92,
      b: 92
    }
  ],
  [
    "indigo",
    {
      r: 75,
      g: 0,
      b: 130
    }
  ],
  [
    "ivory",
    {
      r: 255,
      g: 255,
      b: 240
    }
  ],
  [
    "khaki",
    {
      r: 240,
      g: 230,
      b: 140
    }
  ],
  [
    "lavenderblush",
    {
      r: 255,
      g: 240,
      b: 245
    }
  ],
  [
    "lavender",
    {
      r: 230,
      g: 230,
      b: 250
    }
  ],
  [
    "lawngreen",
    {
      r: 124,
      g: 252,
      b: 0
    }
  ],
  [
    "lemonchiffon",
    {
      r: 255,
      g: 250,
      b: 205
    }
  ],
  [
    "lightblue",
    {
      r: 173,
      g: 216,
      b: 230
    }
  ],
  [
    "lightcoral",
    {
      r: 240,
      g: 128,
      b: 128
    }
  ],
  [
    "lightcyan",
    {
      r: 224,
      g: 255,
      b: 255
    }
  ],
  [
    "lightgoldenrodyellow",
    {
      r: 250,
      g: 250,
      b: 210
    }
  ],
  [
    "lightgray",
    {
      r: 211,
      g: 211,
      b: 211
    }
  ],
  [
    "lightgreen",
    {
      r: 144,
      g: 238,
      b: 144
    }
  ],
  [
    "lightgrey",
    {
      r: 211,
      g: 211,
      b: 211
    }
  ],
  [
    "lightpink",
    {
      r: 255,
      g: 182,
      b: 193
    }
  ],
  [
    "lightsalmon",
    {
      r: 255,
      g: 160,
      b: 122
    }
  ],
  [
    "lightseagreen",
    {
      r: 32,
      g: 178,
      b: 170
    }
  ],
  [
    "lightskyblue",
    {
      r: 135,
      g: 206,
      b: 250
    }
  ],
  [
    "lightslategray",
    {
      r: 119,
      g: 136,
      b: 153
    }
  ],
  [
    "lightslategrey",
    {
      r: 119,
      g: 136,
      b: 153
    }
  ],
  [
    "lightsteelblue",
    {
      r: 176,
      g: 196,
      b: 222
    }
  ],
  [
    "lightyellow",
    {
      r: 255,
      g: 255,
      b: 224
    }
  ],
  [
    "lime",
    {
      r: 0,
      g: 255,
      b: 0
    }
  ],
  [
    "limegreen",
    {
      r: 50,
      g: 205,
      b: 50
    }
  ],
  [
    "linen",
    {
      r: 250,
      g: 240,
      b: 230
    }
  ],
  [
    "magenta",
    {
      r: 255,
      g: 0,
      b: 255
    }
  ],
  [
    "maroon",
    {
      r: 128,
      g: 0,
      b: 0
    }
  ],
  [
    "mediumaquamarine",
    {
      r: 102,
      g: 205,
      b: 170
    }
  ],
  [
    "mediumblue",
    {
      r: 0,
      g: 0,
      b: 205
    }
  ],
  [
    "mediumorchid",
    {
      r: 186,
      g: 85,
      b: 211
    }
  ],
  [
    "mediumpurple",
    {
      r: 147,
      g: 112,
      b: 219
    }
  ],
  [
    "mediumseagreen",
    {
      r: 60,
      g: 179,
      b: 113
    }
  ],
  [
    "mediumslateblue",
    {
      r: 123,
      g: 104,
      b: 238
    }
  ],
  [
    "mediumspringgreen",
    {
      r: 0,
      g: 250,
      b: 154
    }
  ],
  [
    "mediumturquoise",
    {
      r: 72,
      g: 209,
      b: 204
    }
  ],
  [
    "mediumvioletred",
    {
      r: 199,
      g: 21,
      b: 133
    }
  ],
  [
    "midnightblue",
    {
      r: 25,
      g: 25,
      b: 112
    }
  ],
  [
    "mintcream",
    {
      r: 245,
      g: 255,
      b: 250
    }
  ],
  [
    "mistyrose",
    {
      r: 255,
      g: 228,
      b: 225
    }
  ],
  [
    "moccasin",
    {
      r: 255,
      g: 228,
      b: 181
    }
  ],
  [
    "navajowhite",
    {
      r: 255,
      g: 222,
      b: 173
    }
  ],
  [
    "navy",
    {
      r: 0,
      g: 0,
      b: 128
    }
  ],
  [
    "oldlace",
    {
      r: 253,
      g: 245,
      b: 230
    }
  ],
  [
    "olive",
    {
      r: 128,
      g: 128,
      b: 0
    }
  ],
  [
    "olivedrab",
    {
      r: 107,
      g: 142,
      b: 35
    }
  ],
  [
    "orange",
    {
      r: 255,
      g: 165,
      b: 0
    }
  ],
  [
    "orangered",
    {
      r: 255,
      g: 69,
      b: 0
    }
  ],
  [
    "orchid",
    {
      r: 218,
      g: 112,
      b: 214
    }
  ],
  [
    "palegoldenrod",
    {
      r: 238,
      g: 232,
      b: 170
    }
  ],
  [
    "palegreen",
    {
      r: 152,
      g: 251,
      b: 152
    }
  ],
  [
    "paleturquoise",
    {
      r: 175,
      g: 238,
      b: 238
    }
  ],
  [
    "palevioletred",
    {
      r: 219,
      g: 112,
      b: 147
    }
  ],
  [
    "papayawhip",
    {
      r: 255,
      g: 239,
      b: 213
    }
  ],
  [
    "peachpuff",
    {
      r: 255,
      g: 218,
      b: 185
    }
  ],
  [
    "peru",
    {
      r: 205,
      g: 133,
      b: 63
    }
  ],
  [
    "pink",
    {
      r: 255,
      g: 192,
      b: 203
    }
  ],
  [
    "plum",
    {
      r: 221,
      g: 160,
      b: 221
    }
  ],
  [
    "powderblue",
    {
      r: 176,
      g: 224,
      b: 230
    }
  ],
  [
    "purple",
    {
      r: 128,
      g: 0,
      b: 128
    }
  ],
  [
    "rebeccapurple",
    {
      r: 102,
      g: 51,
      b: 153
    }
  ],
  [
    "red",
    {
      r: 255,
      g: 0,
      b: 0
    }
  ],
  [
    "rosybrown",
    {
      r: 188,
      g: 143,
      b: 143
    }
  ],
  [
    "royalblue",
    {
      r: 65,
      g: 105,
      b: 225
    }
  ],
  [
    "saddlebrown",
    {
      r: 139,
      g: 69,
      b: 19
    }
  ],
  [
    "salmon",
    {
      r: 250,
      g: 128,
      b: 114
    }
  ],
  [
    "sandybrown",
    {
      r: 244,
      g: 164,
      b: 96
    }
  ],
  [
    "seagreen",
    {
      r: 46,
      g: 139,
      b: 87
    }
  ],
  [
    "seashell",
    {
      r: 255,
      g: 245,
      b: 238
    }
  ],
  [
    "sienna",
    {
      r: 160,
      g: 82,
      b: 45
    }
  ],
  [
    "silver",
    {
      r: 192,
      g: 192,
      b: 192
    }
  ],
  [
    "skyblue",
    {
      r: 135,
      g: 206,
      b: 235
    }
  ],
  [
    "slateblue",
    {
      r: 106,
      g: 90,
      b: 205
    }
  ],
  [
    "slategray",
    {
      r: 112,
      g: 128,
      b: 144
    }
  ],
  [
    "slategrey",
    {
      r: 112,
      g: 128,
      b: 144
    }
  ],
  [
    "snow",
    {
      r: 255,
      g: 250,
      b: 250
    }
  ],
  [
    "springgreen",
    {
      r: 0,
      g: 255,
      b: 127
    }
  ],
  [
    "steelblue",
    {
      r: 70,
      g: 130,
      b: 180
    }
  ],
  [
    "tan",
    {
      r: 210,
      g: 180,
      b: 140
    }
  ],
  [
    "teal",
    {
      r: 0,
      g: 128,
      b: 128
    }
  ],
  [
    "thistle",
    {
      r: 216,
      g: 191,
      b: 216
    }
  ],
  [
    "tomato",
    {
      r: 255,
      g: 99,
      b: 71
    }
  ],
  [
    "turquoise",
    {
      r: 64,
      g: 224,
      b: 208
    }
  ],
  [
    "violet",
    {
      r: 238,
      g: 130,
      b: 238
    }
  ],
  [
    "wheat",
    {
      r: 245,
      g: 222,
      b: 179
    }
  ],
  [
    "white",
    {
      r: 255,
      g: 255,
      b: 255
    }
  ],
  [
    "whitesmoke",
    {
      r: 245,
      g: 245,
      b: 245
    }
  ],
  [
    "yellow",
    {
      r: 255,
      g: 255,
      b: 0
    }
  ],
  [
    "yellowgreen",
    {
      r: 154,
      g: 205,
      b: 50
    }
  ]
];
var webColors_default = webColors;

// src/util/matchers.ts
var ANGLES = "deg|rad|grad|turn";
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_ANGLE = `[-\\+]?\\d*\\.?\\d+(?:${ANGLES})?`;
var CSS_UNIT = `(?:${CSS_NUMBER})|(?:${CSS_INTEGER})`;
var CSS_UNIT2 = `(?:${CSS_UNIT})|(?:${CSS_ANGLE}?)`;
var START_MATCH = "(?:[\\s|\\(\\s|\\s\\(\\s]+)?";
var END_MATCH = "(?:[\\s|\\)\\s]+)?";
var SEP = "(?:[,|\\s]+)";
var SEP2 = "(?:[,|\\/\\s]*)?";
var PERMISSIVE_MATCH = `${START_MATCH}(${CSS_UNIT2})${SEP}(${CSS_UNIT})${SEP}(${CSS_UNIT})${SEP2}(${CSS_UNIT})?${END_MATCH}`;
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT2),
  ANGLES,
  CSS_ANGLE,
  CSS_INTEGER,
  CSS_NUMBER,
  CSS_UNIT2,
  PERMISSIVE_MATCH,
  hwb: new RegExp(`hwb${PERMISSIVE_MATCH}`),
  rgb: new RegExp(`rgb(?:a)?${PERMISSIVE_MATCH}`),
  hsl: new RegExp(`hsl(?:a)?${PERMISSIVE_MATCH}`),
  hsv: new RegExp(`hsv(?:a)?${PERMISSIVE_MATCH}`),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
var matchers_default = matchers;

// src/util/isNonColor.ts
function isNonColor(str) {
  return nonColors_default.includes(str);
}

// src/util/isColorType.ts
function isColorType(obj, inst) {
  return typeof obj === "object" && Object.keys(inst).every((c) => c in obj);
}

// src/util/isOnePointZero.ts
function isOnePointZero(n) {
  return `${n}`.includes(".") && parseFloat(n) === 1;
}

// src/util/isPercentage.ts
function isPercentage(n) {
  return typeof n === "string" && n.includes("%");
}

// src/util/isValidCSSUnit.ts
function isValidCSSUnit(comp) {
  return Boolean(matchers_default.CSS_UNIT.exec(`${comp}`));
}

// src/util/colorFormat.ts
var COLOR_FORMAT = ["rgb", "hex", "hsl", "hsv", "hwb"];
var colorFormat_default = COLOR_FORMAT;

// src/util/isColorName.ts
function isColorName(color) {
  if (nonColors_default.includes(color) || ["#", ...colorFormat_default].some((f) => color.includes(f))) {
    return false;
  }
  return webColors_default.some(([c]) => color === c);
}

// src/util/bound01.ts
function bound01(N, max) {
  let n = N;
  if (typeof N === "number" && Math.min(N, 0) === 0 && Math.max(N, 1) === 1)
    return N;
  if (isOnePointZero(N))
    n = "100%";
  const processPercent = isPercentage(n);
  n = max === 360 ? parseFloat(n) : Math.min(max, Math.max(0, parseFloat(n)));
  if (processPercent)
    n = n * max / 100;
  if (Math.abs(n - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n = (n < 0 ? n % max + max : n % max) / max;
  } else {
    n = n % max / max;
  }
  return n;
}

// src/util/boundAlpha.ts
function boundAlpha(a) {
  let na = parseFloat(a);
  if (Number.isNaN(na) || na < 0 || na > 1) {
    na = 1;
  }
  return na;
}

// src/util/clamp01.ts
function clamp01(v) {
  return Math.min(1, Math.max(0, v));
}

// src/util/pad2.ts
function pad2(c) {
  return c.length === 1 ? `0${c}` : String(c);
}

// src/util/getRGBFromName.ts
function getRGBFromName(name) {
  const [[, rgbValue]] = webColors_default.filter(([k]) => k === name.toLowerCase());
  return rgbValue;
}

// src/convert/parseIntFromHex.ts
function parseIntFromHex(val) {
  return parseInt(val, 16);
}

// src/convert/convertHexToDecimal.ts
function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}

// src/convert/convertDecimalToHex.ts
function convertDecimalToHex(d) {
  return roundPart(d * 255).toString(16);
}

// src/convert/rgbToHsl.ts
function rgbToHsl(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max === min) {
    s = 0;
    h = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r)
      h = (g - b) / d + (g < b ? 6 : 0);
    if (max === g)
      h = (b - r) / d + 2;
    if (max === b)
      h = (r - g) / d + 4;
    h /= 6;
  }
  return { h, s, l };
}

// src/convert/hueToRgb.ts
function hueToRgb(p, q, t) {
  let T = t;
  if (T < 0)
    T += 1;
  if (T > 1)
    T -= 1;
  if (T < 1 / 6)
    return p + (q - p) * (6 * T);
  if (T < 1 / 2)
    return q;
  if (T < 2 / 3)
    return p + (q - p) * (2 / 3 - T) * 6;
  return p;
}

// src/convert/hslToRgb.ts
function hslToRgb(h, s, l) {
  let r = 0;
  let g = 0;
  let b = 0;
  if (s === 0) {
    g = l;
    b = l;
    r = l;
  } else if (l) {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hueToRgb(p, q, h + 1 / 3);
    g = hueToRgb(p, q, h);
    b = hueToRgb(p, q, h - 1 / 3);
  }
  return { r, g, b };
}

// src/convert/rgbToHwb.ts
function rgbToHwb(r, g, b) {
  let f = 0;
  let i = 0;
  const whiteness = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const black = 1 - max;
  if (max === whiteness)
    return { h: 0, w: whiteness, b: black };
  if (r === whiteness) {
    f = g - b;
    i = 3;
  } else {
    f = g === whiteness ? b - r : r - g;
    i = g === whiteness ? 5 : 1;
  }
  const h = (i - f / (max - whiteness)) / 6;
  return {
    h: h === 1 ? 0 : h,
    w: whiteness,
    b: black
  };
}

// src/convert/hwbToRgb.ts
function hwbToRgb(H, W, B) {
  if (W + B >= 1) {
    const gray = W / (W + B);
    return { r: gray, g: gray, b: gray };
  }
  let { r, g, b } = hslToRgb(H, 1, 0.5);
  [r, g, b] = [r, g, b].map((v) => v * (1 - W - B) + W);
  return { r, g, b };
}

// src/convert/rgbToHsv.ts
function rgbToHsv(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  const v = max;
  const d = max - min;
  const s = max === 0 ? 0 : d / max;
  if (max === min) {
    h = 0;
  } else {
    if (r === max)
      h = (g - b) / d + (g < b ? 6 : 0);
    if (g === max)
      h = (b - r) / d + 2;
    if (b === max)
      h = (r - g) / d + 4;
    h /= 6;
  }
  return { h, s, v };
}

// src/convert/hsvToRgb.ts
function hsvToRgb(H, S, V) {
  const h = H * 6;
  const s = S;
  const v = V;
  const i = Math.floor(h);
  const f = h - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  const mod = i % 6;
  const r = [v, q, p, p, t, v][mod];
  const g = [t, v, v, q, p, p][mod];
  const b = [p, p, t, v, v, q][mod];
  return { r, g, b };
}

// src/convert/rgbToHex.ts
function rgbToHex(r, g, b, allow3Char) {
  const hex = [
    pad2(roundPart(r).toString(16)),
    pad2(roundPart(g).toString(16)),
    pad2(roundPart(b).toString(16))
  ];
  if (allow3Char && hex[0].charAt(0) === hex[0].charAt(1) && hex[1].charAt(0) === hex[1].charAt(1) && hex[2].charAt(0) === hex[2].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}

// src/convert/rgbaToHex.ts
function rgbaToHex(r, g, b, a, allow4Char) {
  const hex = [
    pad2(roundPart(r).toString(16)),
    pad2(roundPart(g).toString(16)),
    pad2(roundPart(b).toString(16)),
    pad2(convertDecimalToHex(a))
  ];
  if (allow4Char && hex[0].charAt(0) === hex[0].charAt(1) && hex[1].charAt(0) === hex[1].charAt(1) && hex[2].charAt(0) === hex[2].charAt(1) && hex[3].charAt(0) === hex[3].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join("");
}

// src/util/stringInputToObject.ts
function stringInputToObject(input) {
  const color = String(input).trim().toLowerCase();
  if (isColorName(color)) {
    return Object.assign(getRGBFromName(color), {
      a: 1,
      format: "rgb",
      ok: true
    });
  }
  if (isNonColor(color)) {
    const a = color === "transparent" ? 0 : 1;
    return {
      r: 0,
      g: 0,
      b: 0,
      a,
      format: "rgb",
      ok: true
    };
  }
  let [, m1, m2, m3, m4] = matchers_default.rgb.exec(color) || [];
  if (m1 && m2 && m3) {
    return {
      r: m1,
      g: m2,
      b: m3,
      a: m4 !== void 0 ? m4 : 1,
      format: "rgb",
      ok: true
    };
  }
  [, m1, m2, m3, m4] = matchers_default.hsl.exec(color) || [];
  if (m1 && m2 && m3) {
    return {
      h: m1,
      s: m2,
      l: m3,
      a: m4 !== void 0 ? m4 : 1,
      format: "hsl",
      ok: true
    };
  }
  [, m1, m2, m3, m4] = matchers_default.hsv.exec(color) || [];
  if (m1 && m2 && m3) {
    return {
      h: m1,
      s: m2,
      v: m3,
      a: m4 !== void 0 ? m4 : 1,
      format: "hsv",
      ok: true
    };
  }
  [, m1, m2, m3, m4] = matchers_default.hwb.exec(color) || [];
  if (m1 && m2 && m3) {
    return {
      h: m1,
      w: m2,
      b: m3,
      a: m4 !== void 0 ? m4 : 1,
      format: "hwb",
      ok: true
    };
  }
  [, m1, m2, m3, m4] = matchers_default.hex8.exec(color) || [];
  if (m1 && m2 && m3 && m4) {
    return {
      r: parseIntFromHex(m1),
      g: parseIntFromHex(m2),
      b: parseIntFromHex(m3),
      a: convertHexToDecimal(m4),
      format: "hex",
      ok: true
    };
  }
  [, m1, m2, m3] = matchers_default.hex6.exec(color) || [];
  if (m1 && m2 && m3) {
    return {
      r: parseIntFromHex(m1),
      g: parseIntFromHex(m2),
      b: parseIntFromHex(m3),
      a: 1,
      format: "hex",
      ok: true
    };
  }
  [, m1, m2, m3, m4] = matchers_default.hex4.exec(color) || [];
  if (m1 && m2 && m3 && m4) {
    return {
      r: parseIntFromHex(m1 + m1),
      g: parseIntFromHex(m2 + m2),
      b: parseIntFromHex(m3 + m3),
      a: convertHexToDecimal(m4 + m4),
      format: "hex",
      ok: true
    };
  }
  [, m1, m2, m3] = matchers_default.hex3.exec(color) || [];
  if (m1 && m2 && m3) {
    return {
      r: parseIntFromHex(m1 + m1),
      g: parseIntFromHex(m2 + m2),
      b: parseIntFromHex(m3 + m3),
      a: 1,
      format: "hex",
      ok: true
    };
  }
  return {
    r: 0,
    g: 0,
    b: 0,
    a: 1,
    format: "rgb",
    ok: !input ? true : false
  };
}

// src/util/inputToRgb.ts
function inputToRGB(input) {
  let rgb = { r: 0, g: 0, b: 0 };
  let color = input;
  let a = 1;
  let s;
  let v;
  let l;
  let w;
  let b;
  let h;
  let r;
  let g;
  let format = "rgb";
  let ok = false;
  if (!color || typeof color === "string") {
    color = stringInputToObject(color);
    ok = color.ok;
  }
  if (isColorType(color, rgb) && isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
    ({ r, g, b } = color);
    [r, g, b] = [r, g, b].map((n) => bound01(n, isPercentage(n) ? 100 : 255));
    rgb = { r, g, b };
    format = "format" in color ? color.format : "rgb";
  }
  if (isColorType(color, { h: 0, s: 0, v: 0 }) && isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
    ({ h, s, v } = color);
    h = bound01(h, 360);
    s = bound01(s, 100);
    v = bound01(v, 100);
    rgb = hsvToRgb(h, s, v);
    format = "hsv";
  }
  if (isColorType(color, { h: 0, s: 0, l: 0 }) && isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
    ({ h, s, l } = color);
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    rgb = hslToRgb(h, s, l);
    format = "hsl";
  }
  if (isColorType(color, { h: 0, w: 0, b: 0 }) && isValidCSSUnit(color.h) && isValidCSSUnit(color.w) && isValidCSSUnit(color.b)) {
    ({ h, w, b } = color);
    h = bound01(h, 360);
    w = bound01(w, 100);
    b = bound01(b, 100);
    rgb = hwbToRgb(h, w, b);
    format = "hwb";
  }
  if (isValidCSSUnit(color.a)) {
    a = color.a;
    a = isPercentage(a) || parseFloat(`${a}`) > 1 ? bound01(a, 100) : a;
  }
  return {
    r: rgb.r,
    g: rgb.g,
    b: rgb.b,
    a: boundAlpha(a),
    format,
    ok
  };
}

// src/index.ts
var Color = class {
  r;
  g;
  b;
  a;
  format;
  ok;
  originalInput;
  constructor(input, config) {
    const configFormat = config && colorFormat_default.includes(config) ? config : "";
    const { r, g, b, a, ok, format } = inputToRGB(input);
    this.originalInput = input;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    this.ok = ok;
    this.format = configFormat || format;
  }
  get isValid() {
    return this.ok;
  }
  get isDark() {
    return this.brightness < 120;
  }
  get luminance() {
    const { r, g, b } = this;
    let R = 0;
    let G = 0;
    let B = 0;
    if (r <= 0.03928) {
      R = r / 12.92;
    } else {
      R = ((r + 0.055) / 1.055) ** 2.4;
    }
    if (g <= 0.03928) {
      G = g / 12.92;
    } else {
      G = ((g + 0.055) / 1.055) ** 2.4;
    }
    if (b <= 0.03928) {
      B = b / 12.92;
    } else {
      B = ((b + 0.055) / 1.055) ** 2.4;
    }
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  }
  get brightness() {
    const { r, g, b } = this.toRgb();
    return (r * 299 + g * 587 + b * 114) / 1e3;
  }
  get name() {
    const { r, g, b } = this.toRgb();
    const [colorName] = webColors_default.map(([name, rgb]) => {
      const distance = Math.sqrt((rgb.r - r) ** 2 + (rgb.g - g) ** 2 + (rgb.b - b) ** 2);
      return [name, distance];
    }).find(([, distance], i, ar) => {
      return distance === Math.min(...ar.map(([, d]) => d));
    });
    return colorName;
  }
  toRgb() {
    let { r, g, b, a } = this;
    [r, g, b] = [r, g, b].map((n) => roundPart(n * 255 * 100) / 100);
    a = roundPart(a * 100) / 100;
    return {
      r,
      g,
      b,
      a
    };
  }
  toRgbString() {
    const { r, g, b, a } = this.toRgb();
    const [R, G, B] = [r, g, b].map(roundPart);
    return a === 1 ? `rgb(${R}, ${G}, ${B})` : `rgba(${R}, ${G}, ${B}, ${a})`;
  }
  toRgbCSS4String() {
    const { r, g, b, a } = this.toRgb();
    const [R, G, B] = [r, g, b].map(roundPart);
    const A = a === 1 ? "" : ` / ${roundPart(a * 100)}%`;
    return `rgb(${R} ${G} ${B}${A})`;
  }
  toHex(allow3Char) {
    const { r, g, b, a } = this.toRgb();
    return a === 1 ? rgbToHex(r, g, b, allow3Char) : rgbaToHex(r, g, b, a, allow3Char);
  }
  toHexString(allow3Char) {
    return `#${this.toHex(allow3Char)}`;
  }
  toHex8(allow4Char) {
    const { r, g, b, a } = this.toRgb();
    return rgbaToHex(r, g, b, a, allow4Char);
  }
  toHex8String(allow4Char) {
    return `#${this.toHex8(allow4Char)}`;
  }
  toHsv() {
    const { r, g, b, a } = this;
    const { h, s, v } = rgbToHsv(r, g, b);
    return {
      h,
      s,
      v,
      a
    };
  }
  toHsl() {
    const { r, g, b, a } = this;
    const { h, s, l } = rgbToHsl(r, g, b);
    return {
      h,
      s,
      l,
      a
    };
  }
  toHslString() {
    let { h, s, l, a } = this.toHsl();
    h = roundPart(h * 360);
    s = roundPart(s * 100);
    l = roundPart(l * 100);
    a = roundPart(a * 100) / 100;
    return a === 1 ? `hsl(${h}, ${s}%, ${l}%)` : `hsla(${h}, ${s}%, ${l}%, ${a})`;
  }
  toHslCSS4String() {
    let { h, s, l, a } = this.toHsl();
    h = roundPart(h * 360);
    s = roundPart(s * 100);
    l = roundPart(l * 100);
    a = roundPart(a * 100);
    const A = a < 100 ? ` / ${roundPart(a)}%` : "";
    return `hsl(${h}deg ${s}% ${l}%${A})`;
  }
  toHwb() {
    const { r, g, b, a } = this;
    const { h, w, b: bl } = rgbToHwb(r, g, b);
    return {
      h,
      w,
      b: bl,
      a
    };
  }
  toHwbString() {
    let { h, w, b, a } = this.toHwb();
    h = roundPart(h * 360);
    w = roundPart(w * 100);
    b = roundPart(b * 100);
    a = roundPart(a * 100);
    const A = a < 100 ? ` / ${roundPart(a)}%` : "";
    return `hwb(${h}deg ${w}% ${b}%${A})`;
  }
  setAlpha(alpha) {
    if (typeof alpha !== "number")
      return this;
    this.a = boundAlpha(alpha);
    return this;
  }
  saturate(amount) {
    if (typeof amount !== "number")
      return this;
    const { h, s, l } = this.toHsl();
    const { r, g, b } = hslToRgb(h, clamp01(s + amount / 100), l);
    Object.assign(this, { r, g, b });
    return this;
  }
  desaturate(amount) {
    return typeof amount === "number" ? this.saturate(-amount) : this;
  }
  greyscale() {
    return this.saturate(-100);
  }
  lighten(amount) {
    if (typeof amount !== "number")
      return this;
    const { h, s, l } = this.toHsl();
    const { r, g, b } = hslToRgb(h, s, clamp01(l + amount / 100));
    Object.assign(this, { r, g, b });
    return this;
  }
  darken(amount) {
    return typeof amount === "number" ? this.lighten(-amount) : this;
  }
  spin(amount) {
    if (typeof amount !== "number")
      return this;
    const { h, s, l } = this.toHsl();
    const { r, g, b } = hslToRgb(clamp01((h * 360 + amount) % 360 / 360), s, l);
    Object.assign(this, { r, g, b });
    return this;
  }
  clone() {
    return new Color(this);
  }
  toString(allowShort) {
    const { format } = this;
    if (format === "hex")
      return this.toHexString(allowShort);
    if (format === "hsl")
      return this.toHslString();
    if (format === "hwb")
      return this.toHwbString();
    return this.toRgbString();
  }
};
Object.assign(Color, {
  matchers: matchers_default,
  isOnePointZero,
  isPercentage,
  isValidCSSUnit,
  isNonColor,
  isColorName,
  isColorType,
  pad2,
  clamp01,
  bound01,
  boundAlpha,
  getRGBFromName,
  convertHexToDecimal,
  convertDecimalToHex,
  rgbToHsl,
  rgbToHex,
  rgbToHsv,
  rgbToHwb,
  rgbaToHex,
  hslToRgb,
  hsvToRgb,
  hueToRgb,
  hwbToRgb,
  parseIntFromHex,
  stringInputToObject,
  inputToRGB,
  roundPart,
  webColors: webColors_default,
  nonColors: nonColors_default
});
//# sourceMappingURL=index.cjs.js.map
