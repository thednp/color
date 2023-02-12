var et = Object.defineProperty;
var st = (g, r, t) => r in g ? et(g, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : g[r] = t;
var o = (g, r, t) => (st(g, typeof r != "symbol" ? r + "" : r, t), t);
const G = ["transparent", "currentColor", "inherit", "revert", "initial"], h = (g) => {
  const r = Math.floor(g);
  return g - r < 0.5 ? r : Math.round(g);
}, F = [
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
], V = "deg|rad|grad|turn", Z = "[-\\+]?\\d+%?", z = "[-\\+]?\\d*\\.\\d+%?", J = `[-\\+]?\\d*\\.?\\d+(?:${V})?`, T = `(?:${z})|(?:${Z})`, I = `(?:${T})|(?:${J}?)`, nt = "(?:[\\s|\\(\\s|\\s\\(\\s]+)?", gt = "(?:[\\s|\\)\\s]+)?", j = "(?:[,|\\s]+)", at = "(?:[,|\\/\\s]*)?", y = `${nt}(${I})${j}(${T})${j}(${T})${at}(${T})?${gt}`, m = {
  CSS_UNIT: new RegExp(I),
  ANGLES: V,
  CSS_ANGLE: J,
  CSS_INTEGER: Z,
  CSS_NUMBER: z,
  CSS_UNIT2: I,
  PERMISSIVE_MATCH: y,
  hwb: new RegExp(`hwb${y}`),
  rgb: new RegExp(`rgb(?:a)?${y}`),
  hsl: new RegExp(`hsl(?:a)?${y}`),
  hsv: new RegExp(`hsv(?:a)?${y}`),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
}, K = (g) => G.includes(g), S = (g, r) => g !== null && typeof g == "object" && Object.keys(r).every((t) => t in g), Q = (g) => `${g}`.includes(".") && parseFloat(g) === 1, M = (g) => typeof g == "string" && g.includes("%"), u = (g) => Boolean(m.CSS_UNIT.exec(`${g}`)), X = ["rgb", "hex", "hsl", "hsv", "hwb"], Y = (g) => G.includes(g) || ["#", ...X].some((r) => g.includes(r)) ? !1 : F.some(([r]) => g === r), d = (g, r) => {
  let t = g;
  if (typeof g == "number" && Math.min(g, 0) === 0 && // round values to 6 decimals Math.round(N * (10 ** 6)) / 10 ** 6
  Math.max(g, 1) === 1)
    return g;
  Q(g) && (t = "100%");
  const e = M(t);
  return t = r === 360 ? parseFloat(t) : Math.min(r, Math.max(0, parseFloat(t))), e && (t = t * r / 100), Math.abs(t - r) < 1e-6 ? 1 : (r === 360 ? t = (t < 0 ? t % r + r : t % r) / r : t = t % r / r, t);
}, N = (g) => {
  let r = parseFloat(g);
  return (Number.isNaN(r) || r < 0 || r > 1) && (r = 1), r;
}, H = (g) => Math.min(1, Math.max(0, g)), $ = (g) => g.length === 1 ? `0${g}` : String(g), C = (g) => {
  const [[, r]] = F.filter(([t]) => t === g.toLowerCase());
  return r;
}, f = (g) => parseInt(g, 16), O = (g) => f(g) / 255, W = (g) => h(g * 255).toString(16), q = (g, r, t) => {
  const e = Math.max(g, r, t), s = Math.min(g, r, t);
  let n = 0, a = 0;
  const i = (e + s) / 2;
  if (e === s)
    a = 0, n = 0;
  else {
    const b = e - s;
    a = i > 0.5 ? b / (2 - e - s) : b / (e + s), e === g && (n = (r - t) / b + (r < t ? 6 : 0)), e === r && (n = (t - g) / b + 2), e === t && (n = (g - r) / b + 4), n /= 6;
  }
  return { h: n, s: a, l: i };
}, R = (g, r, t) => {
  let e = t;
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? g + (r - g) * (6 * e) : e < 1 / 2 ? r : e < 2 / 3 ? g + (r - g) * (2 / 3 - e) * 6 : g;
}, A = (g, r, t) => {
  let e = 0, s = 0, n = 0;
  if (r === 0)
    s = t, n = t, e = t;
  else if (t) {
    const a = t < 0.5 ? t * (1 + r) : t + r - t * r, i = 2 * t - a;
    e = R(i, a, g + 1 / 3), s = R(i, a, g), n = R(i, a, g - 1 / 3);
  }
  return { r: e, g: s, b: n };
}, B = (g, r, t) => {
  let e = 0, s = 0;
  const n = Math.min(g, r, t), a = Math.max(g, r, t), i = 1 - a;
  if (a === n)
    return { h: 0, w: n, b: i };
  g === n ? (e = r - t, s = 3) : (e = r === n ? t - g : g - r, s = r === n ? 5 : 1);
  const b = (s - e / (a - n)) / 6;
  return {
    h: b === 1 ? 0 : b,
    w: n,
    b: i
  };
}, tt = (g, r, t) => {
  if (r + t >= 1) {
    const a = r / (r + t);
    return { r: a, g: a, b: a };
  }
  let { r: e, g: s, b: n } = A(g, 1, 0.5);
  return [e, s, n] = [e, s, n].map((a) => a * (1 - r - t) + r), { r: e, g: s, b: n };
}, U = (g, r, t) => {
  const e = Math.max(g, r, t), s = Math.min(g, r, t);
  let n = 0;
  const a = e, i = e - s, b = e === 0 ? 0 : i / e;
  return e === s ? n = 0 : (g === e && (n = (r - t) / i + (r < t ? 6 : 0)), r === e && (n = (t - g) / i + 2), t === e && (n = (g - r) / i + 4), n /= 6), { h: n, s: b, v: a };
}, _ = (g, r, t) => {
  const e = g * 6, s = r, n = t, a = Math.floor(e), i = e - a, b = n * (1 - s), l = n * (1 - i * s), p = n * (1 - (1 - i) * s), w = a % 6, k = [n, l, b, b, p, n][w], x = [p, n, n, l, b, b][w], v = [b, b, p, n, n, l][w];
  return { r: k, g: x, b: v };
}, D = (g, r, t, e) => {
  const s = [
    $(h(g).toString(16)),
    $(h(r).toString(16)),
    $(h(t).toString(16))
  ];
  return e && s[0].charAt(0) === s[0].charAt(1) && s[1].charAt(0) === s[1].charAt(1) && s[2].charAt(0) === s[2].charAt(1) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) : s.join("");
}, E = (g, r, t, e, s) => {
  const n = [
    $(h(g).toString(16)),
    $(h(r).toString(16)),
    $(h(t).toString(16)),
    $(W(e))
  ];
  return s && n[0].charAt(0) === n[0].charAt(1) && n[1].charAt(0) === n[1].charAt(1) && n[2].charAt(0) === n[2].charAt(1) && n[3].charAt(0) === n[3].charAt(1) ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0) + n[3].charAt(0) : n.join("");
}, rt = (g) => {
  const r = String(g).trim().toLowerCase();
  if (Y(r))
    return Object.assign(C(r), {
      a: 1,
      format: "rgb",
      ok: !0
    });
  if (K(r))
    return {
      r: 0,
      g: 0,
      b: 0,
      a: r === "transparent" ? 0 : 1,
      format: "rgb",
      ok: !0
    };
  let [, t, e, s, n] = m.rgb.exec(r) || [];
  return t && e && s ? {
    r: t,
    g: e,
    b: s,
    a: n !== void 0 ? n : 1,
    format: "rgb",
    ok: !0
  } : ([, t, e, s, n] = m.hsl.exec(r) || [], t && e && s ? {
    h: t,
    s: e,
    l: s,
    a: n !== void 0 ? n : 1,
    format: "hsl",
    ok: !0
  } : ([, t, e, s, n] = m.hsv.exec(r) || [], t && e && s ? {
    h: t,
    s: e,
    v: s,
    a: n !== void 0 ? n : 1,
    format: "hsv",
    ok: !0
  } : ([, t, e, s, n] = m.hwb.exec(r) || [], t && e && s ? {
    h: t,
    w: e,
    b: s,
    a: n !== void 0 ? n : 1,
    format: "hwb",
    ok: !0
  } : ([, t, e, s, n] = m.hex8.exec(r) || [], t && e && s && n ? {
    r: f(t),
    g: f(e),
    b: f(s),
    a: O(n),
    format: "hex",
    ok: !0
  } : ([, t, e, s] = m.hex6.exec(r) || [], t && e && s ? {
    r: f(t),
    g: f(e),
    b: f(s),
    a: 1,
    format: "hex",
    ok: !0
  } : ([, t, e, s, n] = m.hex4.exec(r) || [], t && e && s && n ? {
    r: f(t + t),
    g: f(e + e),
    b: f(s + s),
    a: O(n + n),
    format: "hex",
    ok: !0
  } : ([, t, e, s] = m.hex3.exec(r) || [], t && e && s ? {
    r: f(t + t),
    g: f(e + e),
    b: f(s + s),
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
}, L = (g) => {
  let r = { r: 0, g: 0, b: 0 }, t = g, e = 1, s, n, a, i, b, l, p, w, k = "rgb", x = !1;
  return (!t || typeof t == "string") && (t = rt(t), x = t.ok), S(t, r) && u(t.r) && u(t.g) && u(t.b) && ({ r: p, g: w, b } = t, [p, w, b] = [p, w, b].map((v) => d(v, M(v) ? 100 : 255)), r = { r: p, g: w, b }, k = "format" in t ? t.format : "rgb"), S(t, { h: 0, s: 0, v: 0 }) && u(t.h) && u(t.s) && u(t.v) && ({ h: l, s, v: n } = t, l = d(l, 360), s = d(s, 100), n = d(n, 100), r = _(l, s, n), k = "hsv"), S(t, { h: 0, s: 0, l: 0 }) && u(t.h) && u(t.s) && u(t.l) && ({ h: l, s, l: a } = t, l = d(l, 360), s = d(s, 100), a = d(a, 100), r = A(l, s, a), k = "hsl"), S(t, { h: 0, w: 0, b: 0 }) && u(t.h) && u(t.w) && u(t.b) && ({ h: l, w: i, b } = t, l = d(l, 360), i = d(i, 100), b = d(b, 100), r = tt(l, i, b), k = "hwb"), u(t.a) && (e = t.a, e = M(e) || parseFloat(`${e}`) > 1 ? d(e, 100) : e), {
    r: r.r,
    g: r.g,
    b: r.b,
    a: N(e),
    format: k,
    ok: x
  };
}, P = class {
  // main public methods
  constructor(r, t) {
    // main public properties
    o(this, "r");
    o(this, "g");
    o(this, "b");
    o(this, "a");
    o(this, "format");
    o(this, "ok");
    o(this, "originalInput");
    const e = t && X.includes(t) ? t : "", { r: s, g: n, b: a, a: i, ok: b, format: l } = L(r);
    this.originalInput = r, this.r = s, this.g = n, this.b = a, this.a = i, this.ok = b, this.format = e || l;
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
   *
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  get luminance() {
    const { r, g: t, b: e } = this;
    let s = 0, n = 0, a = 0;
    return r <= 0.03928 ? s = r / 12.92 : s = ((r + 0.055) / 1.055) ** 2.4, t <= 0.03928 ? n = t / 12.92 : n = ((t + 0.055) / 1.055) ** 2.4, e <= 0.03928 ? a = e / 12.92 : a = ((e + 0.055) / 1.055) ** 2.4, 0.2126 * s + 0.7152 * n + 0.0722 * a;
  }
  /**
   * Returns the perceived brightness of the colour.
   */
  get brightness() {
    const { r, g: t, b: e } = this.toRgb();
    return (r * 299 + t * 587 + e * 114) / 1e3;
  }
  /**
   * Returns the web colour name closest to the current colour.
   */
  get name() {
    const { r, g: t, b: e } = this.toRgb(), [s] = F.map(([n, a]) => {
      const i = (
        // ((rgb.r - r) ** 2 + (rgb.g - g) ** 2 + (rgb.b - b) ** 2) ** 0.5; // standard
        (((a.r - r) * 0.3) ** 2 + ((a.g - t) * 0.6) ** 2 + ((a.b - e) * 0.1) ** 2) ** 0.5
      );
      return [n, i];
    }).find(([, n], a, i) => n === Math.min(...i.map(([, b]) => b)));
    return s;
  }
  /**
   * Returns the colour as an RGBA object.
   */
  toRgb() {
    let { r, g: t, b: e, a: s } = this;
    return [r, t, e] = [r, t, e].map((n) => h(n * 255 * 100) / 100), s = h(s * 100) / 100, {
      r,
      g: t,
      b: e,
      a: s
    };
  }
  /**
   * Returns the RGBA values concatenated into a CSS3 Module string format.
   * * rgb(255,255,255)
   * * rgba(255,255,255,0.5)
   */
  toRgbString() {
    const { r, g: t, b: e, a: s } = this.toRgb(), [n, a, i] = [r, t, e].map(h);
    return s === 1 ? `rgb(${n}, ${a}, ${i})` : `rgba(${n}, ${a}, ${i}, ${s})`;
  }
  /**
   * Returns the RGBA values concatenated into a CSS4 Module string format.
   * * rgb(255 255 255)
   * * rgb(255 255 255 / 50%)
   */
  toRgbCSS4String() {
    const { r, g: t, b: e, a: s } = this.toRgb(), [n, a, i] = [r, t, e].map(h), b = s === 1 ? "" : ` / ${h(s * 100)}%`;
    return `rgb(${n} ${a} ${i}${b})`;
  }
  /**
   * Returns the hexadecimal value of the colour. When the parameter is *true*
   * it will find a 3 characters shorthand of the decimal value.
   */
  toHex(r) {
    const { r: t, g: e, b: s, a: n } = this.toRgb();
    return n === 1 ? D(t, e, s, r) : E(t, e, s, n, r);
  }
  /**
   * Returns the CSS valid hexadecimal vaue of the colour. When the parameter is *true*
   * it will find a 3 characters shorthand of the value.
   */
  toHexString(r) {
    return `#${this.toHex(r)}`;
  }
  /**
   * Returns the HEX8 value of the colour.
   */
  toHex8(r) {
    const { r: t, g: e, b: s, a: n } = this.toRgb();
    return E(t, e, s, n, r);
  }
  /**
   * Returns the HEX8 value of the colour.
   */
  toHex8String(r) {
    return `#${this.toHex8(r)}`;
  }
  /**
   * Returns the colour as a HSVA object.
   */
  toHsv() {
    const { r, g: t, b: e, a: s } = this, { h: n, s: a, v: i } = U(r, t, e);
    return {
      h: n,
      s: a,
      v: i,
      a: s
    };
  }
  /**
   * Returns the colour as an HSLA object.
   */
  toHsl() {
    const { r, g: t, b: e, a: s } = this, { h: n, s: a, l: i } = q(r, t, e);
    return {
      h: n,
      s: a,
      l: i,
      a: s
    };
  }
  /**
   * Returns the HSLA values concatenated into a CSS3 Module format string.
   * * `hsl(150, 100%, 50%)`
   * * `hsla(150, 100%, 50%, 0.5)`
   */
  toHslString() {
    let { h: r, s: t, l: e, a: s } = this.toHsl();
    return r = h(r * 360), t = h(t * 100), e = h(e * 100), s = h(s * 100) / 100, s === 1 ? `hsl(${r}, ${t}%, ${e}%)` : `hsla(${r}, ${t}%, ${e}%, ${s})`;
  }
  /**
   * Returns the HSLA values concatenated into a CSS4 Module format string.
   * * `hsl(150deg 100% 50%)`
   * * `hsl(150deg 100% 50% / 50%)`
   */
  toHslCSS4String() {
    let { h: r, s: t, l: e, a: s } = this.toHsl();
    r = h(r * 360), t = h(t * 100), e = h(e * 100), s = h(s * 100);
    const n = s < 100 ? ` / ${h(s)}%` : "";
    return `hsl(${r}deg ${t}% ${e}%${n})`;
  }
  /**
   * Returns the colour as an HWBA object.
   */
  toHwb() {
    const { r, g: t, b: e, a: s } = this, { h: n, w: a, b: i } = B(r, t, e);
    return {
      h: n,
      w: a,
      b: i,
      a: s
    };
  }
  /**
   * Returns the HWBA values concatenated into a string.
   */
  toHwbString() {
    let { h: r, w: t, b: e, a: s } = this.toHwb();
    r = h(r * 360), t = h(t * 100), e = h(e * 100), s = h(s * 100);
    const n = s < 100 ? ` / ${h(s)}%` : "";
    return `hwb(${r}deg ${t}% ${e}%${n})`;
  }
  /**
   * Sets the alpha value of the current colour.
   */
  setAlpha(r) {
    return typeof r != "number" ? this : (this.a = N(r), this);
  }
  /**
   * Saturate the colour with a given amount.
   */
  saturate(r) {
    if (typeof r != "number")
      return this;
    const { h: t, s: e, l: s } = this.toHsl(), { r: n, g: a, b: i } = A(t, H(e + r / 100), s);
    return Object.assign(this, { r: n, g: a, b: i }), this;
  }
  /**
   * Desaturate the colour with a given amount.
   */
  desaturate(r) {
    return typeof r == "number" ? this.saturate(-r) : this;
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
  lighten(r) {
    if (typeof r != "number")
      return this;
    const { h: t, s: e, l: s } = this.toHsl(), { r: n, g: a, b: i } = A(t, e, H(s + r / 100));
    return Object.assign(this, { r: n, g: a, b: i }), this;
  }
  /**
   * Decrease the colour lightness with a given amount.
   */
  darken(r) {
    return typeof r == "number" ? this.lighten(-r) : this;
  }
  /**
   * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
   * Values outside of this range will be wrapped into this range.
   */
  spin(r) {
    if (typeof r != "number")
      return this;
    const { h: t, s: e, l: s } = this.toHsl(), { r: n, g: a, b: i } = A(H((t * 360 + r) % 360 / 360), e, s);
    return Object.assign(this, { r: n, g: a, b: i }), this;
  }
  /** Returns a clone of the current `Color` instance. */
  clone() {
    return new P(this);
  }
  /**
   * Returns the colour value in CSS valid string format.
   */
  toString(r) {
    const { format: t } = this;
    return t === "hex" ? this.toHexString(r) : t === "hsl" ? this.toHslString() : t === "hwb" ? this.toHwbString() : this.toRgbString();
  }
};
let c = P;
// bring main utilities to front
o(c, "matchers", m), o(c, "isOnePointZero", Q), o(c, "isPercentage", M), o(c, "isValidCSSUnit", u), o(c, "isNonColor", K), o(c, "isColorName", Y), o(c, "isColorType", S), o(c, "pad2", $), o(c, "clamp01", H), o(c, "bound01", d), o(c, "boundAlpha", N), o(c, "getRGBFromName", C), o(c, "convertHexToDecimal", O), o(c, "convertDecimalToHex", W), o(c, "rgbToHsl", q), o(c, "rgbToHex", D), o(c, "rgbToHsv", U), o(c, "rgbToHwb", B), o(c, "rgbaToHex", E), o(c, "hslToRgb", _), o(c, "hsvToRgb", _), o(c, "hueToRgb", R), o(c, "hwbToRgb", tt), o(c, "parseIntFromHex", f), o(c, "stringInputToObject", rt), o(c, "inputToRGB", L), o(c, "roundPart", h), o(c, "webColors", F), o(c, "nonColors", G);
export {
  c as default
};
//# sourceMappingURL=index.mjs.map
