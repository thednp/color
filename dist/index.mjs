//#region src/util/nonColors.ts
var e = [
	"transparent",
	"currentColor",
	"inherit",
	"revert",
	"initial"
], t = (e) => {
	let t = Math.floor(e);
	return e - t < .5 ? t : Math.round(e);
}, n = [
	["aliceblue", {
		r: 240,
		g: 248,
		b: 255
	}],
	["antiquewhite", {
		r: 250,
		g: 235,
		b: 215
	}],
	["aqua", {
		r: 0,
		g: 255,
		b: 255
	}],
	["aquamarine", {
		r: 127,
		g: 255,
		b: 212
	}],
	["azure", {
		r: 240,
		g: 255,
		b: 255
	}],
	["beige", {
		r: 245,
		g: 245,
		b: 220
	}],
	["bisque", {
		r: 255,
		g: 228,
		b: 196
	}],
	["black", {
		r: 0,
		g: 0,
		b: 0
	}],
	["blanchedalmond", {
		r: 255,
		g: 235,
		b: 205
	}],
	["blue", {
		r: 0,
		g: 0,
		b: 255
	}],
	["blueviolet", {
		r: 138,
		g: 43,
		b: 226
	}],
	["brown", {
		r: 165,
		g: 42,
		b: 42
	}],
	["burlywood", {
		r: 222,
		g: 184,
		b: 135
	}],
	["cadetblue", {
		r: 95,
		g: 158,
		b: 160
	}],
	["chartreuse", {
		r: 127,
		g: 255,
		b: 0
	}],
	["chocolate", {
		r: 210,
		g: 105,
		b: 30
	}],
	["coral", {
		r: 255,
		g: 127,
		b: 80
	}],
	["cornflowerblue", {
		r: 100,
		g: 149,
		b: 237
	}],
	["cornsilk", {
		r: 255,
		g: 248,
		b: 220
	}],
	["crimson", {
		r: 220,
		g: 20,
		b: 60
	}],
	["cyan", {
		r: 0,
		g: 255,
		b: 255
	}],
	["darkblue", {
		r: 0,
		g: 0,
		b: 139
	}],
	["darkcyan", {
		r: 0,
		g: 139,
		b: 139
	}],
	["darkgoldenrod", {
		r: 184,
		g: 134,
		b: 11
	}],
	["darkgray", {
		r: 169,
		g: 169,
		b: 169
	}],
	["darkgreen", {
		r: 0,
		g: 100,
		b: 0
	}],
	["darkgrey", {
		r: 169,
		g: 169,
		b: 169
	}],
	["darkkhaki", {
		r: 189,
		g: 183,
		b: 107
	}],
	["darkmagenta", {
		r: 139,
		g: 0,
		b: 139
	}],
	["darkolivegreen", {
		r: 85,
		g: 107,
		b: 47
	}],
	["darkorange", {
		r: 255,
		g: 140,
		b: 0
	}],
	["darkorchid", {
		r: 153,
		g: 50,
		b: 204
	}],
	["darkred", {
		r: 139,
		g: 0,
		b: 0
	}],
	["darksalmon", {
		r: 233,
		g: 150,
		b: 122
	}],
	["darkseagreen", {
		r: 143,
		g: 188,
		b: 143
	}],
	["darkslateblue", {
		r: 72,
		g: 61,
		b: 139
	}],
	["darkslategray", {
		r: 47,
		g: 79,
		b: 79
	}],
	["darkslategrey", {
		r: 47,
		g: 79,
		b: 79
	}],
	["darkturquoise", {
		r: 0,
		g: 206,
		b: 209
	}],
	["darkviolet", {
		r: 148,
		g: 0,
		b: 211
	}],
	["deeppink", {
		r: 255,
		g: 20,
		b: 147
	}],
	["deepskyblue", {
		r: 0,
		g: 191,
		b: 255
	}],
	["dimgray", {
		r: 105,
		g: 105,
		b: 105
	}],
	["dimgrey", {
		r: 105,
		g: 105,
		b: 105
	}],
	["dodgerblue", {
		r: 30,
		g: 144,
		b: 255
	}],
	["firebrick", {
		r: 178,
		g: 34,
		b: 34
	}],
	["floralwhite", {
		r: 255,
		g: 250,
		b: 240
	}],
	["forestgreen", {
		r: 34,
		g: 139,
		b: 34
	}],
	["fuchsia", {
		r: 255,
		g: 0,
		b: 255
	}],
	["gainsboro", {
		r: 220,
		g: 220,
		b: 220
	}],
	["ghostwhite", {
		r: 248,
		g: 248,
		b: 255
	}],
	["goldenrod", {
		r: 218,
		g: 165,
		b: 32
	}],
	["gold", {
		r: 255,
		g: 215,
		b: 0
	}],
	["gray", {
		r: 128,
		g: 128,
		b: 128
	}],
	["green", {
		r: 0,
		g: 128,
		b: 0
	}],
	["greenyellow", {
		r: 173,
		g: 255,
		b: 47
	}],
	["grey", {
		r: 128,
		g: 128,
		b: 128
	}],
	["honeydew", {
		r: 240,
		g: 255,
		b: 240
	}],
	["hotpink", {
		r: 255,
		g: 105,
		b: 180
	}],
	["indianred", {
		r: 205,
		g: 92,
		b: 92
	}],
	["indigo", {
		r: 75,
		g: 0,
		b: 130
	}],
	["ivory", {
		r: 255,
		g: 255,
		b: 240
	}],
	["khaki", {
		r: 240,
		g: 230,
		b: 140
	}],
	["lavenderblush", {
		r: 255,
		g: 240,
		b: 245
	}],
	["lavender", {
		r: 230,
		g: 230,
		b: 250
	}],
	["lawngreen", {
		r: 124,
		g: 252,
		b: 0
	}],
	["lemonchiffon", {
		r: 255,
		g: 250,
		b: 205
	}],
	["lightblue", {
		r: 173,
		g: 216,
		b: 230
	}],
	["lightcoral", {
		r: 240,
		g: 128,
		b: 128
	}],
	["lightcyan", {
		r: 224,
		g: 255,
		b: 255
	}],
	["lightgoldenrodyellow", {
		r: 250,
		g: 250,
		b: 210
	}],
	["lightgray", {
		r: 211,
		g: 211,
		b: 211
	}],
	["lightgreen", {
		r: 144,
		g: 238,
		b: 144
	}],
	["lightgrey", {
		r: 211,
		g: 211,
		b: 211
	}],
	["lightpink", {
		r: 255,
		g: 182,
		b: 193
	}],
	["lightsalmon", {
		r: 255,
		g: 160,
		b: 122
	}],
	["lightseagreen", {
		r: 32,
		g: 178,
		b: 170
	}],
	["lightskyblue", {
		r: 135,
		g: 206,
		b: 250
	}],
	["lightslategray", {
		r: 119,
		g: 136,
		b: 153
	}],
	["lightslategrey", {
		r: 119,
		g: 136,
		b: 153
	}],
	["lightsteelblue", {
		r: 176,
		g: 196,
		b: 222
	}],
	["lightyellow", {
		r: 255,
		g: 255,
		b: 224
	}],
	["lime", {
		r: 0,
		g: 255,
		b: 0
	}],
	["limegreen", {
		r: 50,
		g: 205,
		b: 50
	}],
	["linen", {
		r: 250,
		g: 240,
		b: 230
	}],
	["magenta", {
		r: 255,
		g: 0,
		b: 255
	}],
	["maroon", {
		r: 128,
		g: 0,
		b: 0
	}],
	["mediumaquamarine", {
		r: 102,
		g: 205,
		b: 170
	}],
	["mediumblue", {
		r: 0,
		g: 0,
		b: 205
	}],
	["mediumorchid", {
		r: 186,
		g: 85,
		b: 211
	}],
	["mediumpurple", {
		r: 147,
		g: 112,
		b: 219
	}],
	["mediumseagreen", {
		r: 60,
		g: 179,
		b: 113
	}],
	["mediumslateblue", {
		r: 123,
		g: 104,
		b: 238
	}],
	["mediumspringgreen", {
		r: 0,
		g: 250,
		b: 154
	}],
	["mediumturquoise", {
		r: 72,
		g: 209,
		b: 204
	}],
	["mediumvioletred", {
		r: 199,
		g: 21,
		b: 133
	}],
	["midnightblue", {
		r: 25,
		g: 25,
		b: 112
	}],
	["mintcream", {
		r: 245,
		g: 255,
		b: 250
	}],
	["mistyrose", {
		r: 255,
		g: 228,
		b: 225
	}],
	["moccasin", {
		r: 255,
		g: 228,
		b: 181
	}],
	["navajowhite", {
		r: 255,
		g: 222,
		b: 173
	}],
	["navy", {
		r: 0,
		g: 0,
		b: 128
	}],
	["oldlace", {
		r: 253,
		g: 245,
		b: 230
	}],
	["olive", {
		r: 128,
		g: 128,
		b: 0
	}],
	["olivedrab", {
		r: 107,
		g: 142,
		b: 35
	}],
	["orange", {
		r: 255,
		g: 165,
		b: 0
	}],
	["orangered", {
		r: 255,
		g: 69,
		b: 0
	}],
	["orchid", {
		r: 218,
		g: 112,
		b: 214
	}],
	["palegoldenrod", {
		r: 238,
		g: 232,
		b: 170
	}],
	["palegreen", {
		r: 152,
		g: 251,
		b: 152
	}],
	["paleturquoise", {
		r: 175,
		g: 238,
		b: 238
	}],
	["palevioletred", {
		r: 219,
		g: 112,
		b: 147
	}],
	["papayawhip", {
		r: 255,
		g: 239,
		b: 213
	}],
	["peachpuff", {
		r: 255,
		g: 218,
		b: 185
	}],
	["peru", {
		r: 205,
		g: 133,
		b: 63
	}],
	["pink", {
		r: 255,
		g: 192,
		b: 203
	}],
	["plum", {
		r: 221,
		g: 160,
		b: 221
	}],
	["powderblue", {
		r: 176,
		g: 224,
		b: 230
	}],
	["purple", {
		r: 128,
		g: 0,
		b: 128
	}],
	["rebeccapurple", {
		r: 102,
		g: 51,
		b: 153
	}],
	["red", {
		r: 255,
		g: 0,
		b: 0
	}],
	["rosybrown", {
		r: 188,
		g: 143,
		b: 143
	}],
	["royalblue", {
		r: 65,
		g: 105,
		b: 225
	}],
	["saddlebrown", {
		r: 139,
		g: 69,
		b: 19
	}],
	["salmon", {
		r: 250,
		g: 128,
		b: 114
	}],
	["sandybrown", {
		r: 244,
		g: 164,
		b: 96
	}],
	["seagreen", {
		r: 46,
		g: 139,
		b: 87
	}],
	["seashell", {
		r: 255,
		g: 245,
		b: 238
	}],
	["sienna", {
		r: 160,
		g: 82,
		b: 45
	}],
	["silver", {
		r: 192,
		g: 192,
		b: 192
	}],
	["skyblue", {
		r: 135,
		g: 206,
		b: 235
	}],
	["slateblue", {
		r: 106,
		g: 90,
		b: 205
	}],
	["slategray", {
		r: 112,
		g: 128,
		b: 144
	}],
	["slategrey", {
		r: 112,
		g: 128,
		b: 144
	}],
	["snow", {
		r: 255,
		g: 250,
		b: 250
	}],
	["springgreen", {
		r: 0,
		g: 255,
		b: 127
	}],
	["steelblue", {
		r: 70,
		g: 130,
		b: 180
	}],
	["tan", {
		r: 210,
		g: 180,
		b: 140
	}],
	["teal", {
		r: 0,
		g: 128,
		b: 128
	}],
	["thistle", {
		r: 216,
		g: 191,
		b: 216
	}],
	["tomato", {
		r: 255,
		g: 99,
		b: 71
	}],
	["turquoise", {
		r: 64,
		g: 224,
		b: 208
	}],
	["violet", {
		r: 238,
		g: 130,
		b: 238
	}],
	["wheat", {
		r: 245,
		g: 222,
		b: 179
	}],
	["white", {
		r: 255,
		g: 255,
		b: 255
	}],
	["whitesmoke", {
		r: 245,
		g: 245,
		b: 245
	}],
	["yellow", {
		r: 255,
		g: 255,
		b: 0
	}],
	["yellowgreen", {
		r: 154,
		g: 205,
		b: 50
	}]
], r = "deg|rad|grad|turn", i = "[-\\+]?\\d+%?", a = "[-\\+]?\\d*\\.\\d+%?", o = `[-\\+]?\\d*\\.?\\d+(?:${r})?`, s = `(?:${a})|(?:${i})`, c = `(?:${s})|(?:${o}?)`, l = "(?:[\\s|\\(\\s|\\s\\(\\s]+)?", u = "(?:[\\s|\\)\\s]+)?", d = "(?:[,|\\s]+)", f = `${l}(${c})${d}(${s})${d}(${s})(?:[,|\\/\\s]*)?(${s})?${u}`, p = {
	CSS_UNIT: new RegExp(c),
	ANGLES: r,
	CSS_ANGLE: o,
	CSS_INTEGER: i,
	CSS_NUMBER: a,
	CSS_UNIT2: c,
	PERMISSIVE_MATCH: f,
	hwb: RegExp(`hwb${f}`),
	rgb: RegExp(`rgb(?:a)?${f}`),
	hsl: RegExp(`hsl(?:a)?${f}`),
	hsv: RegExp(`hsv(?:a)?${f}`),
	hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
	hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
}, m = (t) => e.includes(t), h = (e, t) => typeof e == "object" && !!e && Object.keys(t).every((t) => t in e), g = (e) => `${e}`.includes(".") && parseFloat(e) === 1, _ = (e) => typeof e == "string" && e.includes("%"), v = (e) => !!p.CSS_UNIT.exec(`${e}`), y = [
	"rgb",
	"hex",
	"hsl",
	"hsv",
	"hwb"
], b = (t) => e.includes(t) || ["#", ...y].some((e) => t.includes(e)) ? !1 : n.some(([e]) => t === e), x = 1e-6, S = (e, t) => Math.abs(e * t - t) < x ? 1 : e < x ? 0 : e, C = (e, t) => {
	let n = e;
	return g(e) && (n = "100%"), _(n) ? Number.parseFloat(n) / 100 : (n = typeof n == "number" ? n : Number.parseFloat(n), t === 360 ? n = (n < 0 ? n % t + t : n > 360 ? n % t : n) / t : (n = Math.min(t, Math.max(0, n)), n /= t), S(n, t));
}, w = (e) => {
	let t = parseFloat(e);
	return (Number.isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}, T = (e) => Math.min(1, Math.max(0, e)), E = (e) => e.length === 1 ? `0${e}` : String(e), D = (e) => {
	let [[, t]] = n.filter(([t]) => t === e.toLowerCase());
	return t;
}, O = (e) => parseInt(e, 16), k = (e) => O(e) / 255, A = (e) => t(e * 255).toString(16), j = (e, t, n) => {
	let r = Math.max(e, t, n), i = Math.min(e, t, n), a = 0, o = 0, s = (r + i) / 2;
	if (r === i) o = 0, a = 0;
	else {
		let c = r - i;
		o = s > .5 ? c / (2 - r - i) : c / (r + i), r === e && (a = (t - n) / c + (t < n ? 6 : 0)), r === t && (a = (n - e) / c + 2), r === n && (a = (e - t) / c + 4), a /= 6;
	}
	return {
		h: a,
		s: o,
		l: s
	};
}, M = (e, t, n) => {
	let r = n;
	return r < 0 && (r += 1), r > 1 && --r, r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}, N = (e, t, n) => {
	let r = 0, i = 0, a = 0;
	if (t === 0) i = n, a = n, r = n;
	else {
		let o = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - o;
		r = M(s, o, e + 1 / 3), i = M(s, o, e), a = M(s, o, e - 1 / 3);
	}
	return {
		r,
		g: i,
		b: a
	};
}, P = (e, t, n) => {
	let r = 0, i = 0, a = Math.min(e, t, n), o = Math.max(e, t, n), s = 1 - o;
	if (o === a) return {
		h: 0,
		w: a,
		b: s
	};
	e === a ? (r = t - n, i = 3) : (r = t === a ? n - e : e - t, i = t === a ? 5 : 1);
	let c = (i - r / (o - a)) / 6;
	return {
		h: c === 1 ? 0 : c,
		w: a,
		b: s
	};
}, F = (e, t, n) => {
	if (t + n >= 1) {
		let e = t / (t + n);
		return {
			r: e,
			g: e,
			b: e
		};
	}
	let { r, g: i, b: a } = N(e, 1, .5);
	return [r, i, a] = [
		r,
		i,
		a
	].map((e) => e * (1 - t - n) + t), {
		r,
		g: i,
		b: a
	};
}, I = (e, t, n) => {
	let r = Math.max(e, t, n), i = Math.min(e, t, n), a = 0, o = r, s = r - i, c = r === 0 ? 0 : s / r;
	return r === i ? a = 0 : (e === r && (a = (t - n) / s + (t < n ? 6 : 0)), t === r && (a = (n - e) / s + 2), n === r && (a = (e - t) / s + 4), a /= 6), {
		h: a,
		s: c,
		v: o
	};
}, L = (e, t, n) => {
	let r = e * 6, i = t, a = n, o = Math.floor(r), s = r - o, c = a * (1 - i), l = a * (1 - s * i), u = a * (1 - (1 - s) * i), d = o % 6;
	return {
		r: [
			a,
			l,
			c,
			c,
			u,
			a
		][d],
		g: [
			u,
			a,
			a,
			l,
			c,
			c
		][d],
		b: [
			c,
			c,
			u,
			a,
			a,
			l
		][d]
	};
}, R = (e, n, r, i) => {
	let a = [
		E(t(e).toString(16)),
		E(t(n).toString(16)),
		E(t(r).toString(16))
	];
	return i && a[0].charAt(0) === a[0].charAt(1) && a[1].charAt(0) === a[1].charAt(1) && a[2].charAt(0) === a[2].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}, z = (e, n, r, i, a) => {
	let o = [
		E(t(e).toString(16)),
		E(t(n).toString(16)),
		E(t(r).toString(16)),
		E(A(i))
	];
	return a && o[0].charAt(0) === o[0].charAt(1) && o[1].charAt(0) === o[1].charAt(1) && o[2].charAt(0) === o[2].charAt(1) && o[3].charAt(0) === o[3].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}, B = (e) => {
	let t = String(e).trim().toLowerCase();
	if (b(t)) return Object.assign(D(t), {
		a: 1,
		format: "rgb",
		ok: !0
	});
	if (m(t)) return {
		r: 0,
		g: 0,
		b: 0,
		a: t === "transparent" ? 0 : 1,
		format: "rgb",
		ok: !0
	};
	let [, n, r, i, a] = p.rgb.exec(t) || [];
	return n && r && i ? {
		r: n,
		g: r,
		b: i,
		a: a === void 0 ? 1 : a,
		format: "rgb",
		ok: !0
	} : ([, n, r, i, a] = p.hsl.exec(t) || [], n && r && i ? {
		h: n,
		s: r,
		l: i,
		a: a === void 0 ? 1 : a,
		format: "hsl",
		ok: !0
	} : ([, n, r, i, a] = p.hsv.exec(t) || [], n && r && i ? {
		h: n,
		s: r,
		v: i,
		a: a === void 0 ? 1 : a,
		format: "hsv",
		ok: !0
	} : ([, n, r, i, a] = p.hwb.exec(t) || [], n && r && i ? {
		h: n,
		w: r,
		b: i,
		a: a === void 0 ? 1 : a,
		format: "hwb",
		ok: !0
	} : ([, n, r, i, a] = p.hex8.exec(t) || [], n && r && i && a ? {
		r: O(n),
		g: O(r),
		b: O(i),
		a: k(a),
		format: "hex",
		ok: !0
	} : ([, n, r, i] = p.hex6.exec(t) || [], n && r && i ? {
		r: O(n),
		g: O(r),
		b: O(i),
		a: 1,
		format: "hex",
		ok: !0
	} : ([, n, r, i, a] = p.hex4.exec(t) || [], n && r && i && a ? {
		r: O(n + n),
		g: O(r + r),
		b: O(i + i),
		a: k(a + a),
		format: "hex",
		ok: !0
	} : ([, n, r, i] = p.hex3.exec(t) || [], n && r && i ? {
		r: O(n + n),
		g: O(r + r),
		b: O(i + i),
		a: 1,
		format: "hex",
		ok: !0
	} : {
		r: 0,
		g: 0,
		b: 0,
		a: 1,
		format: "rgb",
		ok: !e
	})))))));
}, V = (e, t, n) => ({
	r: C(e, 255),
	g: C(t, 255),
	b: C(n, 255)
}), H = (e) => {
	let t = {
		r: 0,
		g: 0,
		b: 0
	}, n = e, r = 1, i, a, o, s, c, l, u, d, f = "rgb", p = !1;
	if ((!n || typeof n == "string") && (n = B(n), p = n.ok || p), h(n, t) && v(n.r) && v(n.g) && v(n.b)) {
		if ([
			"format",
			"ok",
			"originalInput"
		].every((e) => e in n)) return { ...n };
		({r: u, g: d, b: c} = n), t = V(u, d, c), f = "format" in n ? n.format : "rgb";
	}
	return h(n, {
		h: 0,
		s: 0,
		v: 0
	}) && v(n.h) && v(n.s) && v(n.v) && ({h: l, s: i, v: a} = n, l = C(l, 360), i = C(i, 100), a = C(a, 100), t = L(l, i, a), f = "hsv"), h(n, {
		h: 0,
		s: 0,
		l: 0
	}) && v(n.h) && v(n.s) && v(n.l) && ({h: l, s: i, l: o} = n, l = C(l, 360), i = C(i, 100), o = C(o, 100), t = N(l, i, o), f = "hsl"), h(n, {
		h: 0,
		w: 0,
		b: 0
	}) && v(n.h) && v(n.w) && v(n.b) && ({h: l, w: s, b: c} = n, l = C(l, 360), s = C(s, 100), c = C(c, 100), t = F(l, s, c), f = "hwb"), v(n.a) && (r = n.a, r = _(r) || parseFloat(`${r}`) > 1 ? C(r, 100) : r), {
		...t,
		a: w(r),
		format: f,
		ok: p
	};
}, U = "1.0.15", W = class r {
	static matchers = p;
	static isOnePointZero = g;
	static isPercentage = _;
	static isValidCSSUnit = v;
	static isNonColor = m;
	static isColorName = b;
	static isColorType = h;
	static pad2 = E;
	static clamp01 = T;
	static bound01 = C;
	static boundAlpha = w;
	static getRGBFromName = D;
	static convertHexToDecimal = k;
	static convertDecimalToHex = A;
	static rgbToHsl = j;
	static rgbToHex = R;
	static rgbToHsv = I;
	static rgbToHwb = P;
	static rgbaToHex = z;
	static hslToRgb = L;
	static hsvToRgb = L;
	static hueToRgb = M;
	static hwbToRgb = F;
	static parseIntFromHex = O;
	static stringInputToObject = B;
	static inputToRGB = H;
	static roundPart = t;
	static webColors = n;
	static nonColors = e;
	static version = U;
	r;
	g;
	b;
	a;
	format;
	ok;
	originalInput;
	constructor(e, t) {
		let n = t && y.includes(t) ? t : "", { r, g: i, b: a, a: o, ok: s, format: c } = H(e);
		this.originalInput = e, this.r = r, this.g = i, this.b = a, this.a = o, this.ok = s, this.format = n || c;
	}
	get isValid() {
		return this.ok;
	}
	get isDark() {
		return this.brightness < 120;
	}
	get luminance() {
		let { r: e, g: t, b: n } = this, r = 0, i = 0, a = 0;
		return r = e <= .03928 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4, i = t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4, a = n <= .03928 ? n / 12.92 : ((n + .055) / 1.055) ** 2.4, .2126 * r + .7152 * i + .0722 * a;
	}
	get brightness() {
		let { r: e, g: t, b: n } = this.toRgb();
		return (e * 299 + t * 587 + n * 114) / 1e3;
	}
	get name() {
		let { r: e, g: t, b: r } = this.toRgb(), [i] = n.map(([n, i]) => [n, (((i.r - e) * .3) ** 2 + ((i.g - t) * .6) ** 2 + ((i.b - r) * .1) ** 2) ** .5]).find(([, e], t, n) => e === Math.min(...n.map(([, e]) => e)));
		return i;
	}
	toRgb() {
		let { r: e, g: n, b: r, a: i } = this;
		return [e, n, r] = [
			e,
			n,
			r
		].map((e) => t(e * 255 * 100) / 100), i = t(i * 100) / 100, {
			r: e,
			g: n,
			b: r,
			a: i
		};
	}
	toRgbString() {
		let { r: e, g: n, b: r, a: i } = this.toRgb(), [a, o, s] = [
			e,
			n,
			r
		].map(t);
		return i === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${i})`;
	}
	toRgbCSS4String() {
		let { r: e, g: n, b: r, a: i } = this.toRgb(), [a, o, s] = [
			e,
			n,
			r
		].map(t);
		return `rgb(${a} ${o} ${s}${i === 1 ? "" : ` / ${t(i * 100)}%`})`;
	}
	toHex(e) {
		let { r: n, g: r, b: i, a } = this;
		return [n, r, i] = [
			n,
			r,
			i
		].map((e) => t(e * 255)), a = t(a * 100) / 100, a === 1 ? R(n, r, i, e) : z(n, r, i, a, e);
	}
	toHexString(e) {
		return `#${this.toHex(e)}`;
	}
	toHex8(e) {
		let { r: n, g: r, b: i, a } = this;
		return [n, r, i] = [
			n,
			r,
			i
		].map((e) => t(e * 255)), a = t(a * 100) / 100, a === 1 ? R(n, r, i, e) : z(n, r, i, a, e);
	}
	toHex8String(e) {
		return `#${this.toHex8(e)}`;
	}
	toHsv() {
		let { r: e, g: t, b: n, a: r } = this, { h: i, s: a, v: o } = I(e, t, n);
		return {
			h: i,
			s: a,
			v: o,
			a: r
		};
	}
	toHsl() {
		let { r: e, g: t, b: n, a: r } = this, { h: i, s: a, l: o } = j(e, t, n);
		return {
			h: i,
			s: a,
			l: o,
			a: r
		};
	}
	toHslString() {
		let { h: e, s: n, l: r, a: i } = this.toHsl();
		return e = t(e * 360), n = t(n * 100), r = t(r * 100), i = t(i * 100) / 100, i === 1 ? `hsl(${e}, ${n}%, ${r}%)` : `hsla(${e}, ${n}%, ${r}%, ${i})`;
	}
	toHslCSS4String() {
		let { h: e, s: n, l: r, a: i } = this.toHsl();
		e = t(e * 360), n = t(n * 100), r = t(r * 100), i = t(i * 100);
		let a = i < 100 ? ` / ${t(i)}%` : "";
		return `hsl(${e}deg ${n}% ${r}%${a})`;
	}
	toHwb() {
		let { r: e, g: t, b: n, a: r } = this, { h: i, w: a, b: o } = P(e, t, n);
		return {
			h: i,
			w: a,
			b: o,
			a: r
		};
	}
	toHwbString() {
		let { h: e, w: n, b: r, a: i } = this.toHwb();
		e = t(e * 360), n = t(n * 100), r = t(r * 100), i = t(i * 100);
		let a = i < 100 ? ` / ${t(i)}%` : "";
		return `hwb(${e}deg ${n}% ${r}%${a})`;
	}
	setAlpha(e) {
		return typeof e == "number" && (this.a = w(e)), this;
	}
	saturate(e) {
		if (typeof e != "number") return this;
		let { h: t, s: n, l: r } = this.toHsl(), { r: i, g: a, b: o } = N(t, T(n + e / 100), r);
		return Object.assign(this, {
			r: i,
			g: a,
			b: o
		}), this;
	}
	desaturate(e) {
		return typeof e == "number" ? this.saturate(-e) : this;
	}
	greyscale() {
		return this.saturate(-100);
	}
	lighten(e) {
		if (typeof e != "number") return this;
		let { h: t, s: n, l: r } = this.toHsl(), { r: i, g: a, b: o } = N(t, n, T(r + e / 100));
		return Object.assign(this, {
			r: i,
			g: a,
			b: o
		}), this;
	}
	darken(e) {
		return typeof e == "number" ? this.lighten(-e) : this;
	}
	spin(e) {
		if (typeof e != "number") return this;
		let { h: t, s: n, l: r } = this.toHsl(), { r: i, g: a, b: o } = N(T((t * 360 + e) % 360 / 360), n, r);
		return Object.assign(this, {
			r: i,
			g: a,
			b: o
		}), this;
	}
	clone() {
		return new r(this);
	}
	toString(e) {
		let { format: t } = this;
		return t === "hex" ? this.toHexString(e) : t === "hsl" ? this.toHslString() : t === "hwb" ? this.toHwbString() : this.toRgbString();
	}
};
//#endregion
export { W as default };

//# sourceMappingURL=index.mjs.map