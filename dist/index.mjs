var tr = Object.defineProperty;
var er = (g, t, r) => t in g ? tr(g, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : g[t] = r;
var p = (g, t, r) => (er(g, typeof t != "symbol" ? t + "" : t, r), r);
const I = [
  "transparent",
  "currentColor",
  "inherit",
  "revert",
  "initial"
];
function b(g) {
  const t = Math.floor(g);
  return g - t < 0.5 ? t : Math.round(g);
}
const F = [
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
], q = "deg|rad|grad|turn", G = "[-\\+]?\\d+%?", P = "[-\\+]?\\d*\\.\\d+%?", U = `[-\\+]?\\d*\\.?\\d+(?:${q})?`, v = `(?:${P})|(?:${G})`, M = `(?:${v})|(?:${U}?)`, nr = "(?:[\\s|\\(\\s|\\s\\(\\s]+)?", or = "(?:[\\s|\\)\\s]+)?", j = "(?:[,|\\s]+)", gr = "(?:[,|\\/\\s]*)?", y = `${nr}(${M})${j}(${v})${j}(${v})${gr}(${v})?${or}`, f = {
  CSS_UNIT: new RegExp(M),
  ANGLES: q,
  CSS_ANGLE: U,
  CSS_INTEGER: G,
  CSS_NUMBER: P,
  CSS_UNIT2: M,
  PERMISSIVE_MATCH: y,
  hwb: new RegExp(`hwb${y}`),
  rgb: new RegExp(`rgb(?:a)?${y}`),
  hsl: new RegExp(`hsl(?:a)?${y}`),
  hsv: new RegExp(`hsv(?:a)?${y}`),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
}, N = (g) => I.includes(g);
console.log(N("red"));
const A = (g, t) => typeof g == "object" && Object.keys(t).every((r) => r in g);
function B(g) {
  return `${g}`.includes(".") && parseFloat(g) === 1;
}
function T(g) {
  return typeof g == "string" && g.includes("%");
}
function h(g) {
  return Boolean(f.CSS_UNIT.exec(`${g}`));
}
const L = ["rgb", "hex", "hsl", "hsv", "hwb"], D = (g) => I.includes(g) || ["#", ...L].some((t) => g.includes(t)) ? !1 : F.some(([t]) => g === t);
function c(g, t) {
  let r = g;
  if (typeof g == "number" && Math.min(g, 0) === 0 && // round values to 6 decimals Math.round(N * (10 ** 6)) / 10 ** 6
  Math.max(g, 1) === 1)
    return g;
  B(g) && (r = "100%");
  const e = T(r);
  return r = t === 360 ? parseFloat(r) : Math.min(t, Math.max(0, parseFloat(r))), e && (r = r * t / 100), Math.abs(r - t) < 1e-6 ? 1 : (t === 360 ? r = (r < 0 ? r % t + t : r % t) / t : r = r % t / t, r);
}
function O(g) {
  let t = parseFloat(g);
  return (Number.isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}
function H(g) {
  return Math.min(1, Math.max(0, g));
}
function $(g) {
  return g.length === 1 ? `0${g}` : String(g);
}
function V(g) {
  const [[, t]] = F.filter(([r]) => r === g.toLowerCase());
  return t;
}
function u(g) {
  return parseInt(g, 16);
}
function C(g) {
  return u(g) / 255;
}
function z(g) {
  return b(g * 255).toString(16);
}
function Z(g, t, r) {
  const e = Math.max(g, t, r), n = Math.min(g, t, r);
  let o = 0, s = 0;
  const i = (e + n) / 2;
  if (e === n)
    s = 0, o = 0;
  else {
    const a = e - n;
    s = i > 0.5 ? a / (2 - e - n) : a / (e + n), e === g && (o = (t - r) / a + (t < r ? 6 : 0)), e === t && (o = (r - g) / a + 2), e === r && (o = (g - t) / a + 4), o /= 6;
  }
  return { h: o, s, l: i };
}
function R(g, t, r) {
  let e = r;
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? g + (t - g) * (6 * e) : e < 1 / 2 ? t : e < 2 / 3 ? g + (t - g) * (2 / 3 - e) * 6 : g;
}
function w(g, t, r) {
  let e = 0, n = 0, o = 0;
  if (t === 0)
    n = r, o = r, e = r;
  else if (r) {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, i = 2 * r - s;
    e = R(i, s, g + 1 / 3), n = R(i, s, g), o = R(i, s, g - 1 / 3);
  }
  return { r: e, g: n, b: o };
}
function J(g, t, r) {
  let e = 0, n = 0;
  const o = Math.min(g, t, r), s = Math.max(g, t, r), i = 1 - s;
  if (s === o)
    return { h: 0, w: o, b: i };
  g === o ? (e = t - r, n = 3) : (e = t === o ? r - g : g - t, n = t === o ? 5 : 1);
  const a = (n - e / (s - o)) / 6;
  return {
    h: a === 1 ? 0 : a,
    w: o,
    b: i
  };
}
function K(g, t, r) {
  if (t + r >= 1) {
    const s = t / (t + r);
    return { r: s, g: s, b: s };
  }
  let { r: e, g: n, b: o } = w(g, 1, 0.5);
  return [e, n, o] = [e, n, o].map((s) => s * (1 - t - r) + t), { r: e, g: n, b: o };
}
function Q(g, t, r) {
  const e = Math.max(g, t, r), n = Math.min(g, t, r);
  let o = 0;
  const s = e, i = e - n, a = e === 0 ? 0 : i / e;
  return e === n ? o = 0 : (g === e && (o = (t - r) / i + (t < r ? 6 : 0)), t === e && (o = (r - g) / i + 2), r === e && (o = (g - t) / i + 4), o /= 6), { h: o, s: a, v: s };
}
function X(g, t, r) {
  const e = g * 6, n = t, o = r, s = Math.floor(e), i = e - s, a = o * (1 - n), l = o * (1 - i * n), d = o * (1 - (1 - i) * n), m = s % 6, k = [o, l, a, a, d, o][m], S = [d, o, o, l, a, a][m], x = [a, a, d, o, o, l][m];
  return { r: k, g: S, b: x };
}
function Y(g, t, r, e) {
  const n = [
    $(b(g).toString(16)),
    $(b(t).toString(16)),
    $(b(r).toString(16))
  ];
  return e && n[0].charAt(0) === n[0].charAt(1) && n[1].charAt(0) === n[1].charAt(1) && n[2].charAt(0) === n[2].charAt(1) ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0) : n.join("");
}
function E(g, t, r, e, n) {
  const o = [
    $(b(g).toString(16)),
    $(b(t).toString(16)),
    $(b(r).toString(16)),
    $(z(e))
  ];
  return n && o[0].charAt(0) === o[0].charAt(1) && o[1].charAt(0) === o[1].charAt(1) && o[2].charAt(0) === o[2].charAt(1) && o[3].charAt(0) === o[3].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function W(g) {
  const t = String(g).trim().toLowerCase();
  if (D(t))
    return Object.assign(V(t), {
      a: 1,
      format: "rgb",
      ok: !0
    });
  if (N(t))
    return {
      r: 0,
      g: 0,
      b: 0,
      a: t === "transparent" ? 0 : 1,
      format: "rgb",
      ok: !0
    };
  let [, r, e, n, o] = f.rgb.exec(t) || [];
  return r && e && n ? {
    r,
    g: e,
    b: n,
    a: o !== void 0 ? o : 1,
    format: "rgb",
    ok: !0
  } : ([, r, e, n, o] = f.hsl.exec(t) || [], r && e && n ? {
    h: r,
    s: e,
    l: n,
    a: o !== void 0 ? o : 1,
    format: "hsl",
    ok: !0
  } : ([, r, e, n, o] = f.hsv.exec(t) || [], r && e && n ? {
    h: r,
    s: e,
    v: n,
    a: o !== void 0 ? o : 1,
    format: "hsv",
    ok: !0
  } : ([, r, e, n, o] = f.hwb.exec(t) || [], r && e && n ? {
    h: r,
    w: e,
    b: n,
    a: o !== void 0 ? o : 1,
    format: "hwb",
    ok: !0
  } : ([, r, e, n, o] = f.hex8.exec(t) || [], r && e && n && o ? {
    r: u(r),
    g: u(e),
    b: u(n),
    a: C(o),
    format: "hex",
    ok: !0
  } : ([, r, e, n] = f.hex6.exec(t) || [], r && e && n ? {
    r: u(r),
    g: u(e),
    b: u(n),
    a: 1,
    format: "hex",
    ok: !0
  } : ([, r, e, n, o] = f.hex4.exec(t) || [], r && e && n && o ? {
    r: u(r + r),
    g: u(e + e),
    b: u(n + n),
    a: C(o + o),
    format: "hex",
    ok: !0
  } : ([, r, e, n] = f.hex3.exec(t) || [], r && e && n ? {
    r: u(r + r),
    g: u(e + e),
    b: u(n + n),
    a: 1,
    format: "hex",
    ok: !0
  } : {
    r: 0,
    g: 0,
    b: 0,
    a: 1,
    format: "rgb",
    ok: !g
  })))))));
}
function rr(g) {
  let t = { r: 0, g: 0, b: 0 }, r = g, e = 1, n, o, s, i, a, l, d, m, k = "rgb", S = !1;
  return (!r || typeof r == "string") && (r = W(r), S = r.ok), A(r, t) && h(r.r) && h(r.g) && h(r.b) && ({ r: d, g: m, b: a } = r, [d, m, a] = [d, m, a].map((x) => c(x, T(x) ? 100 : 255)), t = { r: d, g: m, b: a }, k = "format" in r ? r.format : "rgb"), A(r, { h: 0, s: 0, v: 0 }) && h(r.h) && h(r.s) && h(r.v) && ({ h: l, s: n, v: o } = r, l = c(l, 360), n = c(n, 100), o = c(o, 100), t = X(l, n, o), k = "hsv"), A(r, { h: 0, s: 0, l: 0 }) && h(r.h) && h(r.s) && h(r.l) && ({ h: l, s: n, l: s } = r, l = c(l, 360), n = c(n, 100), s = c(s, 100), t = w(l, n, s), k = "hsl"), A(r, { h: 0, w: 0, b: 0 }) && h(r.h) && h(r.w) && h(r.b) && ({ h: l, w: i, b: a } = r, l = c(l, 360), i = c(i, 100), a = c(a, 100), t = K(l, i, a), k = "hwb"), h(r.a) && (e = r.a, e = T(e) || parseFloat(`${e}`) > 1 ? c(e, 100) : e), {
    r: t.r,
    g: t.g,
    b: t.b,
    a: O(e),
    format: k,
    ok: S
  };
}
class _ {
  constructor(t, r) {
    p(this, "r");
    p(this, "g");
    p(this, "b");
    p(this, "a");
    p(this, "format");
    p(this, "ok");
    p(this, "originalInput");
    const e = r && L.includes(r) ? r : "", { r: n, g: o, b: s, a: i, ok: a, format: l } = rr(t);
    this.originalInput = t, this.r = n, this.g = o, this.b = s, this.a = i, this.ok = a, this.format = e || l;
  }
  /**
   * Checks if the current input value is a valid colour.
   */
  get isValid() {
    return this.ok;
  }
  /**
   * Checks if the current colour requires a light text colour.
   */
  get isDark() {
    return this.brightness < 120;
  }
  /**
   * Returns the perceived luminance of a colour.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  get luminance() {
    const { r: t, g: r, b: e } = this;
    let n = 0, o = 0, s = 0;
    return t <= 0.03928 ? n = t / 12.92 : n = ((t + 0.055) / 1.055) ** 2.4, r <= 0.03928 ? o = r / 12.92 : o = ((r + 0.055) / 1.055) ** 2.4, e <= 0.03928 ? s = e / 12.92 : s = ((e + 0.055) / 1.055) ** 2.4, 0.2126 * n + 0.7152 * o + 0.0722 * s;
  }
  /**
   * Returns the perceived brightness of the colour.
   */
  get brightness() {
    const { r: t, g: r, b: e } = this.toRgb();
    return (t * 299 + r * 587 + e * 114) / 1e3;
  }
  /**
   * Returns the web colour name closest to the current colour.
   */
  get name() {
    const { r: t, g: r, b: e } = this.toRgb(), [n] = F.map(([o, s]) => {
      const i = (
        // ((rgb.r - r) ** 2 + (rgb.g - g) ** 2 + (rgb.b - b) ** 2) ** 0.5; // standard
        (((s.r - t) * 0.3) ** 2 + ((s.g - r) * 0.6) ** 2 + ((s.b - e) * 0.1) ** 2) ** 0.5
      );
      return [o, i];
    }).find(([, o], s, i) => o === Math.min(...i.map(([, a]) => a)));
    return n;
  }
  /**
   * Returns the colour as an RGBA object.
   */
  toRgb() {
    let { r: t, g: r, b: e, a: n } = this;
    return [t, r, e] = [t, r, e].map((o) => b(o * 255 * 100) / 100), n = b(n * 100) / 100, {
      r: t,
      g: r,
      b: e,
      a: n
    };
  }
  /**
   * Returns the RGBA values concatenated into a CSS3 Module string format.
   * * rgb(255,255,255)
   * * rgba(255,255,255,0.5)
   */
  toRgbString() {
    const { r: t, g: r, b: e, a: n } = this.toRgb(), [o, s, i] = [t, r, e].map(b);
    return n === 1 ? `rgb(${o}, ${s}, ${i})` : `rgba(${o}, ${s}, ${i}, ${n})`;
  }
  /**
   * Returns the RGBA values concatenated into a CSS4 Module string format.
   * * rgb(255 255 255)
   * * rgb(255 255 255 / 50%)
   */
  toRgbCSS4String() {
    const { r: t, g: r, b: e, a: n } = this.toRgb(), [o, s, i] = [t, r, e].map(b), a = n === 1 ? "" : ` / ${b(n * 100)}%`;
    return `rgb(${o} ${s} ${i}${a})`;
  }
  /**
   * Returns the hexadecimal value of the colour. When the parameter is *true*
   * it will find a 3 characters shorthand of the decimal value.
   */
  toHex(t) {
    const { r, g: e, b: n, a: o } = this.toRgb();
    return o === 1 ? Y(r, e, n, t) : E(r, e, n, o, t);
  }
  /**
   * Returns the CSS valid hexadecimal vaue of the colour. When the parameter is *true*
   * it will find a 3 characters shorthand of the value.
   */
  toHexString(t) {
    return `#${this.toHex(t)}`;
  }
  /**
   * Returns the HEX8 value of the colour.
   */
  toHex8(t) {
    const { r, g: e, b: n, a: o } = this.toRgb();
    return E(r, e, n, o, t);
  }
  /**
   * Returns the HEX8 value of the colour.
   */
  toHex8String(t) {
    return `#${this.toHex8(t)}`;
  }
  /**
   * Returns the colour as a HSVA object.
   */
  toHsv() {
    const { r: t, g: r, b: e, a: n } = this, { h: o, s, v: i } = Q(t, r, e);
    return {
      h: o,
      s,
      v: i,
      a: n
    };
  }
  /**
   * Returns the colour as an HSLA object.
   */
  toHsl() {
    const { r: t, g: r, b: e, a: n } = this, { h: o, s, l: i } = Z(t, r, e);
    return {
      h: o,
      s,
      l: i,
      a: n
    };
  }
  /**
   * Returns the HSLA values concatenated into a CSS3 Module format string.
   * * `hsl(150, 100%, 50%)`
   * * `hsla(150, 100%, 50%, 0.5)`
   */
  toHslString() {
    let { h: t, s: r, l: e, a: n } = this.toHsl();
    return t = b(t * 360), r = b(r * 100), e = b(e * 100), n = b(n * 100) / 100, n === 1 ? `hsl(${t}, ${r}%, ${e}%)` : `hsla(${t}, ${r}%, ${e}%, ${n})`;
  }
  /**
   * Returns the HSLA values concatenated into a CSS4 Module format string.
   * * `hsl(150deg 100% 50%)`
   * * `hsl(150deg 100% 50% / 50%)`
   */
  toHslCSS4String() {
    let { h: t, s: r, l: e, a: n } = this.toHsl();
    t = b(t * 360), r = b(r * 100), e = b(e * 100), n = b(n * 100);
    const o = n < 100 ? ` / ${b(n)}%` : "";
    return `hsl(${t}deg ${r}% ${e}%${o})`;
  }
  /**
   * Returns the colour as an HWBA object.
   */
  toHwb() {
    const { r: t, g: r, b: e, a: n } = this, { h: o, w: s, b: i } = J(t, r, e);
    return {
      h: o,
      w: s,
      b: i,
      a: n
    };
  }
  /**
   * Returns the HWBA values concatenated into a string.
   */
  toHwbString() {
    let { h: t, w: r, b: e, a: n } = this.toHwb();
    t = b(t * 360), r = b(r * 100), e = b(e * 100), n = b(n * 100);
    const o = n < 100 ? ` / ${b(n)}%` : "";
    return `hwb(${t}deg ${r}% ${e}%${o})`;
  }
  /**
   * Sets the alpha value of the current colour.
   */
  setAlpha(t) {
    return typeof t != "number" ? this : (this.a = O(t), this);
  }
  /**
   * Saturate the colour with a given amount.
   */
  saturate(t) {
    if (typeof t != "number")
      return this;
    const { h: r, s: e, l: n } = this.toHsl(), { r: o, g: s, b: i } = w(r, H(e + t / 100), n);
    return Object.assign(this, { r: o, g: s, b: i }), this;
  }
  /**
   * Desaturate the colour with a given amount.
   */
  desaturate(t) {
    return typeof t == "number" ? this.saturate(-t) : this;
  }
  /**
   * Completely desaturates a colour into greyscale.
   * Same as calling `desaturate(100)`
   */
  greyscale() {
    return this.saturate(-100);
  }
  /**
   * Increase the colour lightness with a given amount.
   */
  lighten(t) {
    if (typeof t != "number")
      return this;
    const { h: r, s: e, l: n } = this.toHsl(), { r: o, g: s, b: i } = w(r, e, H(n + t / 100));
    return Object.assign(this, { r: o, g: s, b: i }), this;
  }
  /**
   * Decrease the colour lightness with a given amount.
   */
  darken(t) {
    return typeof t == "number" ? this.lighten(-t) : this;
  }
  /**
   * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
   * Values outside of this range will be wrapped into this range.
   */
  spin(t) {
    if (typeof t != "number")
      return this;
    const { h: r, s: e, l: n } = this.toHsl(), { r: o, g: s, b: i } = w(
      H((r * 360 + t) % 360 / 360),
      e,
      n
    );
    return Object.assign(this, { r: o, g: s, b: i }), this;
  }
  /** Returns a clone of the current `Color` instance. */
  clone() {
    return new _(this);
  }
  /**
   * Returns the colour value in CSS valid string format.
   */
  toString(t) {
    const { format: r } = this;
    return r === "hex" ? this.toHexString(t) : r === "hsl" ? this.toHslString() : r === "hwb" ? this.toHwbString() : this.toRgbString();
  }
}
Object.assign(_, {
  matchers: f,
  isOnePointZero: B,
  isPercentage: T,
  isValidCSSUnit: h,
  isNonColor: N,
  isColorName: D,
  isColorType: A,
  pad2: $,
  clamp01: H,
  bound01: c,
  boundAlpha: O,
  getRGBFromName: V,
  convertHexToDecimal: C,
  convertDecimalToHex: z,
  rgbToHsl: Z,
  rgbToHex: Y,
  rgbToHsv: Q,
  rgbToHwb: J,
  rgbaToHex: E,
  hslToRgb: w,
  hsvToRgb: X,
  hueToRgb: R,
  hwbToRgb: K,
  parseIntFromHex: u,
  stringInputToObject: W,
  inputToRGB: rr,
  roundPart: b,
  webColors: F,
  nonColors: I
});
export {
  _ as default
};
//# sourceMappingURL=index.mjs.map
