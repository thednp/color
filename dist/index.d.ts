export interface RGB {
	r: number;
	g: number;
	b: number;
}
export interface RGBA extends RGB {
	a: number;
}
export interface HSL {
	h: number;
	s: number;
	l: number;
}
export interface HSLA extends HSL {
	a: number;
}
export interface HSV {
	h: number;
	s: number;
	v: number;
}
export interface HSVA extends HSV {
	a: number;
}
export interface HWB {
	h: number;
	w: number;
	b: number;
}
export interface HWBA extends HWB {
	a: number;
}
export type ColorFormats = string | "rgb" | "hex" | "hex3" | "hex4" | "hex6" | "hex8" | "hsl" | "hsv" | "hwb";
export interface HSLALike {
	h: number | string;
	s: number | string;
	l: number | string;
	a: number | string;
	format: string;
	ok: boolean;
}
export interface HSVALike {
	h: number | string;
	s: number | string;
	v: number | string;
	a: number | string;
	format: string;
	ok: boolean;
}
export interface HWBALike {
	h: number | string;
	w: number | string;
	b: number | string;
	a: number | string;
	format: string;
	ok: boolean;
}
export interface RGBALike {
	r: number | string;
	g: number | string;
	b: number | string;
	a: number | string;
	format: string;
	ok: boolean;
}
export type ColorInputTypes = string | Partial<RGBALike | HSVALike | HSLALike | HWBALike>;
/**
 * Returns a new `Color` instance.
 * @see https://github.com/bgrins/TinyColor
 */
export default class Color {
	r: number;
	g: number;
	b: number;
	a: number;
	format: string;
	ok: boolean;
	originalInput?: string | Color | ColorInputTypes;
	constructor(input?: ColorInputTypes | Partial<Color>, config?: ColorFormats);
	/**
	 * Checks if the current input value is a valid colour.
	 */
	get isValid(): boolean;
	/**
	 * Checks if the current colour requires a light text colour.
	 */
	get isDark(): boolean;
	/**
	 * Returns the perceived luminance of a colour.
	 * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
	 */
	get luminance(): number;
	/**
	 * Returns the perceived brightness of the colour.
	 */
	get brightness(): number;
	/**
	 * Returns the web colour name closest to the current colour.
	 */
	get name(): string;
	/**
	 * Returns the colour as an RGBA object.
	 */
	toRgb(): RGBA;
	/**
	 * Returns the RGBA values concatenated into a CSS3 Module string format.
	 * * rgb(255,255,255)
	 * * rgba(255,255,255,0.5)
	 */
	toRgbString(): string;
	/**
	 * Returns the RGBA values concatenated into a CSS4 Module string format.
	 * * rgb(255 255 255)
	 * * rgb(255 255 255 / 50%)
	 */
	toRgbCSS4String(): string;
	/**
	 * Returns the hexadecimal value of the colour. When the parameter is *true*
	 * it will find a 3 characters shorthand of the decimal value.
	 */
	toHex(allow3Char?: boolean | undefined): string;
	/**
	 * Returns the CSS valid hexadecimal vaue of the colour. When the parameter is *true*
	 * it will find a 3 characters shorthand of the value.
	 */
	toHexString(allow3Char?: boolean | undefined): string;
	/**
	 * Returns the HEX8 value of the colour.
	 */
	toHex8(allow4Char?: boolean | undefined): string;
	/**
	 * Returns the HEX8 value of the colour.
	 */
	toHex8String(allow4Char?: boolean | undefined): string;
	/**
	 * Returns the colour as a HSVA object.
	 */
	toHsv(): HSVA;
	/**
	 * Returns the colour as an HSLA object.
	 */
	toHsl(): HSLA;
	/**
	 * Returns the HSLA values concatenated into a CSS3 Module format string.
	 * * `hsl(150, 100%, 50%)`
	 * * `hsla(150, 100%, 50%, 0.5)`
	 */
	toHslString(): string;
	/**
	 * Returns the HSLA values concatenated into a CSS4 Module format string.
	 * * `hsl(150deg 100% 50%)`
	 * * `hsl(150deg 100% 50% / 50%)`
	 */
	toHslCSS4String(): string;
	/**
	 * Returns the colour as an HWBA object.
	 */
	toHwb(): HWBA;
	/**
	 * Returns the HWBA values concatenated into a string.
	 */
	toHwbString(): string;
	/**
	 * Sets the alpha value of the current colour.
	 */
	setAlpha(alpha?: number): Color;
	/**
	 * Saturate the colour with a given amount.
	 */
	saturate(amount?: number): Color;
	/**
	 * Desaturate the colour with a given amount.
	 */
	desaturate(amount?: number): Color;
	/**
	 * Completely desaturates a colour into greyscale.
	 * Same as calling `desaturate(100)`
	 */
	greyscale(): Color;
	/**
	 * Increase the colour lightness with a given amount.
	 */
	lighten(amount?: number): Color;
	/**
	 * Decrease the colour lightness with a given amount.
	 */
	darken(amount?: number): Color;
	/**
	 * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
	 * Values outside of this range will be wrapped into this range.
	 */
	spin(amount?: number): Color;
	/** Returns a clone of the current `Color` instance. */
	clone(): Color;
	/**
	 * Returns the colour value in CSS valid string format.
	 */
	toString(allowShort?: boolean | undefined): string;
}

export as namespace Color;

export {};
