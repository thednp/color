const I = [
  "transparent",
  "currentColor",
  "inherit",
  "revert",
  "initial"
], i = (o) => {
  const t = Math.floor(o);
  return o - t < 0.5 ? t : Math.round(o);
}, T = [
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
], U = "deg|rad|grad|turn", D = "[-\\+]?\\d+%?", L = "[-\\+]?\\d*\\.\\d+%?", V = `[-\\+]?\\d*\\.?\\d+(?:${U})?`, x = `(?:${L})|(?:${D})`, F = `(?:${x})|(?:${V}?)`, tr = "(?:[\\s|\\(\\s|\\s\\(\\s]+)?", er = "(?:[\\s|\\)\\s]+)?", P = "(?:[,|\\s]+)", sr = "(?:[,|\\/\\s]*)?", w = `${tr}(${F})${P}(${x})${P}(${x})${sr}(${x})?${er}`, f = {
  CSS_UNIT: new RegExp(F),
  ANGLES: U,
  CSS_ANGLE: V,
  CSS_INTEGER: D,
  CSS_NUMBER: L,
  CSS_UNIT2: F,
  PERMISSIVE_MATCH: w,
  hwb: new RegExp(`hwb${w}`),
  rgb: new RegExp(`rgb(?:a)?${w}`),
  hsl: new RegExp(`hsl(?:a)?${w}`),
  hsv: new RegExp(`hsv(?:a)?${w}`),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
}, Z = (o) => I.includes(o), y = (o, t) => o !== null && typeof o == "object" && Object.keys(t).every((r) => r in o), z = (o) => `${o}`.includes(".") && parseFloat(o) === 1, O = (o) => typeof o == "string" && o.includes("%"), c = (o) => !!f.CSS_UNIT.exec(`${o}`), J = ["rgb", "hex", "hsl", "hsv", "hwb"], K = (o) => I.includes(o) || ["#", ...J].some((t) => o.includes(t)) ? !1 : T.some(([t]) => o === t), _ = 1e-6, nr = (o, t) => Math.abs(o * t - t) < _ ? 1 : o < _ ? 0 : o, u = (o, t) => {
  let r = o;
  return z(o) && (r = "100%"), O(r) ? Number.parseFloat(r) / 100 : (r = typeof r != "number" ? Number.parseFloat(r) : r, t === 360 ? r = (r < 0 ? r % t + t : r > 360 ? r % t : r) / t : (r = Math.min(t, Math.max(0, r)), r = r / t), nr(r, t));
}, N = (o) => {
  let t = parseFloat(o);
  return (Number.isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}, A = (o) => Math.min(1, Math.max(0, o)), d = (o) => o.length === 1 ? `0${o}` : String(o), Q = (o) => {
  const [[, t]] = T.filter(([r]) => r === o.toLowerCase());
  return t;
}, h = (o) => parseInt(o, 16), M = (o) => h(o) / 255, X = (o) => i(o * 255).toString(16), G = (o, t, r) => {
  const e = Math.max(o, t, r), s = Math.min(o, t, r);
  let n = 0, g = 0;
  const a = (e + s) / 2;
  if (e === s)
    g = 0, n = 0;
  else {
    const b = e - s;
    g = a > 0.5 ? b / (2 - e - s) : b / (e + s), e === o && (n = (t - r) / b + (t < r ? 6 : 0)), e === t && (n = (r - o) / b + 2), e === r && (n = (o - t) / b + 4), n /= 6;
  }
  return { h: n, s: g, l: a };
}, v = (o, t, r) => {
  let e = r;
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? o + (t - o) * (6 * e) : e < 1 / 2 ? t : e < 2 / 3 ? o + (t - o) * (2 / 3 - e) * 6 : o;
}, S = (o, t, r) => {
  let e = 0, s = 0, n = 0;
  if (t === 0)
    s = r, n = r, e = r;
  else {
    const g = r < 0.5 ? r * (1 + t) : r + t - r * t, a = 2 * r - g;
    e = v(a, g, o + 1 / 3), s = v(a, g, o), n = v(a, g, o - 1 / 3);
  }
  return { r: e, g: s, b: n };
}, j = (o, t, r) => {
  let e = 0, s = 0;
  const n = Math.min(o, t, r), g = Math.max(o, t, r), a = 1 - g;
  if (g === n) return { h: 0, w: n, b: a };
  o === n ? (e = t - r, s = 3) : (e = t === n ? r - o : o - t, s = t === n ? 5 : 1);
  const b = (s - e / (g - n)) / 6;
  return {
    h: b === 1 ? 0 : b,
    w: n,
    b: a
  };
}, Y = (o, t, r) => {
  if (t + r >= 1) {
    const g = t / (t + r);
    return { r: g, g, b: g };
  }
  let { r: e, g: s, b: n } = S(o, 1, 0.5);
  return [e, s, n] = [e, s, n].map((g) => g * (1 - t - r) + t), { r: e, g: s, b: n };
}, q = (o, t, r) => {
  const e = Math.max(o, t, r), s = Math.min(o, t, r);
  let n = 0;
  const g = e, a = e - s, b = e === 0 ? 0 : a / e;
  return e === s ? n = 0 : (o === e && (n = (t - r) / a + (t < r ? 6 : 0)), t === e && (n = (r - o) / a + 2), r === e && (n = (o - t) / a + 4), n /= 6), { h: n, s: b, v: g };
}, E = (o, t, r) => {
  const e = o * 6, s = t, n = r, g = Math.floor(e), a = e - g, b = n * (1 - s), l = n * (1 - a * s), p = n * (1 - (1 - a) * s), $ = g % 6, m = [n, l, b, b, p, n][$], k = [p, n, n, l, b, b][$], H = [b, b, p, n, n, l][$];
  return { r: m, g: k, b: H };
}, R = (o, t, r, e) => {
  const s = [
    d(i(o).toString(16)),
    d(i(t).toString(16)),
    d(i(r).toString(16))
  ];
  return e && s[0].charAt(0) === s[0].charAt(1) && s[1].charAt(0) === s[1].charAt(1) && s[2].charAt(0) === s[2].charAt(1) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) : s.join("");
}, C = (o, t, r, e, s) => {
  const n = [
    d(i(o).toString(16)),
    d(i(t).toString(16)),
    d(i(r).toString(16)),
    d(X(e))
  ];
  return s && n[0].charAt(0) === n[0].charAt(1) && n[1].charAt(0) === n[1].charAt(1) && n[2].charAt(0) === n[2].charAt(1) && n[3].charAt(0) === n[3].charAt(1) ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0) + n[3].charAt(0) : n.join("");
}, W = (o) => {
  const t = String(o).trim().toLowerCase();
  if (K(t))
    return Object.assign(Q(t), {
      a: 1,
      format: "rgb",
      ok: !0
    });
  if (Z(t))
    return {
      r: 0,
      g: 0,
      b: 0,
      a: t === "transparent" ? 0 : 1,
      format: "rgb",
      ok: !0
    };
  let [, r, e, s, n] = f.rgb.exec(t) || [];
  return r && e && s ? {
    r,
    g: e,
    b: s,
    a: n !== void 0 ? n : 1,
    format: "rgb",
    ok: !0
  } : ([, r, e, s, n] = f.hsl.exec(t) || [], r && e && s ? {
    h: r,
    s: e,
    l: s,
    a: n !== void 0 ? n : 1,
    format: "hsl",
    ok: !0
  } : ([, r, e, s, n] = f.hsv.exec(t) || [], r && e && s ? {
    h: r,
    s: e,
    v: s,
    a: n !== void 0 ? n : 1,
    format: "hsv",
    ok: !0
  } : ([, r, e, s, n] = f.hwb.exec(t) || [], r && e && s ? {
    h: r,
    w: e,
    b: s,
    a: n !== void 0 ? n : 1,
    format: "hwb",
    ok: !0
  } : ([, r, e, s, n] = f.hex8.exec(t) || [], r && e && s && n ? {
    r: h(r),
    g: h(e),
    b: h(s),
    a: M(n),
    format: "hex",
    ok: !0
  } : ([, r, e, s] = f.hex6.exec(t) || [], r && e && s ? {
    r: h(r),
    g: h(e),
    b: h(s),
    a: 1,
    format: "hex",
    ok: !0
  } : ([, r, e, s, n] = f.hex4.exec(t) || [], r && e && s && n ? {
    r: h(r + r),
    g: h(e + e),
    b: h(s + s),
    a: M(n + n),
    format: "hex",
    ok: !0
  } : ([, r, e, s] = f.hex3.exec(t) || [], r && e && s ? {
    r: h(r + r),
    g: h(e + e),
    b: h(s + s),
    a: 1,
    format: "hex",
    ok: !0
  } : {
    r: 0,
    g: 0,
    b: 0,
    a: 1,
    format: "rgb",
    ok: !o
  })))))));
}, or = (o, t, r) => ({
  r: u(o, 255),
  g: u(t, 255),
  b: u(r, 255)
}), B = (o) => {
  let t = { r: 0, g: 0, b: 0 }, r = o, e = 1, s, n, g, a, b, l, p, $, m = "rgb", k = !1;
  if ((!r || typeof r == "string") && (r = W(r), k = r.ok || k), y(r, t) && c(r.r) && c(r.g) && c(r.b)) {
    if (["format", "ok", "originalInput"].every((H) => H in r))
      return { ...r };
    ({ r: p, g: $, b } = r), t = or(p, $, b), m = "format" in r ? r.format : "rgb";
  }
  return y(r, { h: 0, s: 0, v: 0 }) && c(r.h) && c(r.s) && c(r.v) && ({ h: l, s, v: n } = r, l = u(l, 360), s = u(s, 100), n = u(n, 100), t = E(l, s, n), m = "hsv"), y(r, { h: 0, s: 0, l: 0 }) && c(r.h) && c(r.s) && c(r.l) && ({ h: l, s, l: g } = r, l = u(l, 360), s = u(s, 100), g = u(g, 100), t = S(l, s, g), m = "hsl"), y(r, { h: 0, w: 0, b: 0 }) && c(r.h) && c(r.w) && c(r.b) && ({ h: l, w: a, b } = r, l = u(l, 360), a = u(a, 100), b = u(b, 100), t = Y(l, a, b), m = "hwb"), c(r.a) && (e = r.a, e = O(e) || parseFloat(`${e}`) > 1 ? u(e, 100) : e), {
    ...t,
    a: N(e),
    format: m,
    ok: k
  };
}, gr = "1.0.13";
class rr {
  // bring main utilities to front
  static matchers = f;
  static isOnePointZero = z;
  static isPercentage = O;
  static isValidCSSUnit = c;
  static isNonColor = Z;
  static isColorName = K;
  static isColorType = y;
  static pad2 = d;
  static clamp01 = A;
  static bound01 = u;
  static boundAlpha = N;
  static getRGBFromName = Q;
  static convertHexToDecimal = M;
  static convertDecimalToHex = X;
  static rgbToHsl = G;
  static rgbToHex = R;
  static rgbToHsv = q;
  static rgbToHwb = j;
  static rgbaToHex = C;
  static hslToRgb = E;
  static hsvToRgb = E;
  static hueToRgb = v;
  static hwbToRgb = Y;
  static parseIntFromHex = h;
  static stringInputToObject = W;
  static inputToRGB = B;
  static roundPart = i;
  static webColors = T;
  static nonColors = I;
  static version = gr;
  // main public properties
  r;
  g;
  b;
  a;
  format;
  ok;
  originalInput;
  // main public methods
  constructor(t, r) {
    const e = r && J.includes(r) ? r : "", { r: s, g: n, b: g, a, ok: b, format: l } = B(t);
    this.originalInput = t, this.r = s, this.g = n, this.b = g, this.a = a, this.ok = b, this.format = e || l;
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
    const { r: t, g: r, b: e } = this;
    let s = 0, n = 0, g = 0;
    return t <= 0.03928 ? s = t / 12.92 : s = ((t + 0.055) / 1.055) ** 2.4, r <= 0.03928 ? n = r / 12.92 : n = ((r + 0.055) / 1.055) ** 2.4, e <= 0.03928 ? g = e / 12.92 : g = ((e + 0.055) / 1.055) ** 2.4, 0.2126 * s + 0.7152 * n + 0.0722 * g;
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
    const { r: t, g: r, b: e } = this.toRgb(), [s] = T.map(([n, g]) => {
      const a = (
        // ((rgb.r - r) ** 2 + (rgb.g - g) ** 2 + (rgb.b - b) ** 2) ** 0.5; // standard
        (((g.r - t) * 0.3) ** 2 + ((g.g - r) * 0.6) ** 2 + ((g.b - e) * 0.1) ** 2) ** 0.5
      );
      return [n, a];
    }).find(([, n], g, a) => n === Math.min(...a.map(([, b]) => b)));
    return s;
  }
  /**
   * Returns the colour as an RGBA object.
   */
  toRgb() {
    let { r: t, g: r, b: e, a: s } = this;
    return [t, r, e] = [t, r, e].map((n) => i(n * 255 * 100) / 100), s = i(s * 100) / 100, {
      r: t,
      g: r,
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
    const { r: t, g: r, b: e, a: s } = this.toRgb(), [n, g, a] = [t, r, e].map(i);
    return s === 1 ? `rgb(${n}, ${g}, ${a})` : `rgba(${n}, ${g}, ${a}, ${s})`;
  }
  /**
   * Returns the RGBA values concatenated into a CSS4 Module string format.
   * * rgb(255 255 255)
   * * rgb(255 255 255 / 50%)
   */
  toRgbCSS4String() {
    const { r: t, g: r, b: e, a: s } = this.toRgb(), [n, g, a] = [t, r, e].map(i), b = s === 1 ? "" : ` / ${i(s * 100)}%`;
    return `rgb(${n} ${g} ${a}${b})`;
  }
  /**
   * Returns the hexadecimal value of the colour. When the parameter is *true*
   * it will find a 3 characters shorthand of the decimal value.
   */
  toHex(t) {
    let { r, g: e, b: s, a: n } = this;
    return [r, e, s] = [r, e, s].map((g) => i(g * 255)), n = i(n * 100) / 100, n === 1 ? R(r, e, s, t) : C(r, e, s, n, t);
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
    let { r, g: e, b: s, a: n } = this;
    return [r, e, s] = [r, e, s].map((g) => i(g * 255)), n = i(n * 100) / 100, n === 1 ? R(r, e, s, t) : C(r, e, s, n, t);
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
    const { r: t, g: r, b: e, a: s } = this, { h: n, s: g, v: a } = q(t, r, e);
    return {
      h: n,
      s: g,
      v: a,
      a: s
    };
  }
  /**
   * Returns the colour as an HSLA object.
   */
  toHsl() {
    const { r: t, g: r, b: e, a: s } = this, { h: n, s: g, l: a } = G(t, r, e);
    return {
      h: n,
      s: g,
      l: a,
      a: s
    };
  }
  /**
   * Returns the HSLA values concatenated into a CSS3 Module format string.
   * * `hsl(150, 100%, 50%)`
   * * `hsla(150, 100%, 50%, 0.5)`
   */
  toHslString() {
    let { h: t, s: r, l: e, a: s } = this.toHsl();
    return t = i(t * 360), r = i(r * 100), e = i(e * 100), s = i(s * 100) / 100, s === 1 ? `hsl(${t}, ${r}%, ${e}%)` : `hsla(${t}, ${r}%, ${e}%, ${s})`;
  }
  /**
   * Returns the HSLA values concatenated into a CSS4 Module format string.
   * * `hsl(150deg 100% 50%)`
   * * `hsl(150deg 100% 50% / 50%)`
   */
  toHslCSS4String() {
    let { h: t, s: r, l: e, a: s } = this.toHsl();
    t = i(t * 360), r = i(r * 100), e = i(e * 100), s = i(s * 100);
    const n = s < 100 ? ` / ${i(s)}%` : "";
    return `hsl(${t}deg ${r}% ${e}%${n})`;
  }
  /**
   * Returns the colour as an HWBA object.
   */
  toHwb() {
    const { r: t, g: r, b: e, a: s } = this, { h: n, w: g, b: a } = j(t, r, e);
    return {
      h: n,
      w: g,
      b: a,
      a: s
    };
  }
  /**
   * Returns the HWBA values concatenated into a string.
   */
  toHwbString() {
    let { h: t, w: r, b: e, a: s } = this.toHwb();
    t = i(t * 360), r = i(r * 100), e = i(e * 100), s = i(s * 100);
    const n = s < 100 ? ` / ${i(s)}%` : "";
    return `hwb(${t}deg ${r}% ${e}%${n})`;
  }
  /**
   * Sets the alpha value of the current colour.
   */
  setAlpha(t) {
    return typeof t != "number" ? this : (this.a = N(t), this);
  }
  /**
   * Saturate the colour with a given amount.
   */
  saturate(t) {
    if (typeof t != "number") return this;
    const { h: r, s: e, l: s } = this.toHsl(), { r: n, g, b: a } = S(r, A(e + t / 100), s);
    return Object.assign(this, { r: n, g, b: a }), this;
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
    if (typeof t != "number") return this;
    const { h: r, s: e, l: s } = this.toHsl(), { r: n, g, b: a } = S(r, e, A(s + t / 100));
    return Object.assign(this, { r: n, g, b: a }), this;
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
    if (typeof t != "number") return this;
    const { h: r, s: e, l: s } = this.toHsl(), { r: n, g, b: a } = S(
      A((r * 360 + t) % 360 / 360),
      e,
      s
    );
    return Object.assign(this, { r: n, g, b: a }), this;
  }
  /** Returns a clone of the current `Color` instance. */
  clone() {
    return new rr(this);
  }
  /**
   * Returns the colour value in CSS valid string format.
   */
  toString(t) {
    const { format: r } = this;
    return r === "hex" ? this.toHexString(t) : r === "hsl" ? this.toHslString() : r === "hwb" ? this.toHwbString() : this.toRgbString();
  }
}
export {
  rr as default
};
//# sourceMappingURL=index.mjs.map
