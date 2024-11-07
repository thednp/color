/**
 * Returns a new `Color` instance.
 *
 * @see https://github.com/bgrins/TinyColor
 */
declare class Color {
    static matchers: {
        CSS_UNIT: RegExp;
        ANGLES: string;
        CSS_ANGLE: string;
        CSS_INTEGER: string;
        CSS_NUMBER: string;
        CSS_UNIT2: string;
        PERMISSIVE_MATCH: string;
        hwb: RegExp;
        rgb: RegExp;
        hsl: RegExp;
        hsv: RegExp;
        hex3: RegExp;
        hex6: RegExp;
        hex4: RegExp;
        hex8: RegExp;
    };
    static isOnePointZero: (n: string | number) => boolean;
    static isPercentage: (n: string | number) => n is string;
    static isValidCSSUnit: (comp: string | number) => comp is number;
    static isNonColor: <T extends string>(str: T) => boolean;
    static isColorName: (color: string) => color is "transparent" | "currentColor" | "inherit" | "revert" | "initial";
    static isColorType: <T extends Record<string, number | string>>(obj: unknown, inst: T) => obj is T;
    static pad2: (c: string) => string;
    static clamp01: (v: number) => number;
    static bound01: (input: string | number, max: number) => number;
    static boundAlpha: (a: string | number) => number;
    static getRGBFromName: (name: string) => RGB;
    static convertHexToDecimal: (h: string) => number;
    static convertDecimalToHex: (d: number) => string;
    static rgbToHsl: (r: number, g: number, b: number) => HSL;
    static rgbToHex: (r: number, g: number, b: number, allow3Char?: boolean) => string;
    static rgbToHsv: (r: number, g: number, b: number) => HSV;
    static rgbToHwb: (r: number, g: number, b: number) => HWB;
    static rgbaToHex: (r: number, g: number, b: number, a: number, allow4Char?: boolean) => string;
    static hslToRgb: (H: number, S: number, V: number) => RGB;
    static hsvToRgb: (H: number, S: number, V: number) => RGB;
    static hueToRgb: (p: number, q: number, t: number) => number;
    static hwbToRgb: (H: number, W: number, B: number) => RGB;
    static parseIntFromHex: (val: string) => number;
    static stringInputToObject: (input?: string) => RGBALike | HSLALike | HSVALike | HWBALike;
    static inputToRGB: (input?: ColorInputTypes) => RGBAObject;
    static roundPart: (v: number) => number;
    static webColors: [string, RGB][];
    static nonColors: string[];
    static version: string;
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
     *
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
export default Color;

export declare type ColorFormats = string | "rgb" | "hex" | "hex3" | "hex4" | "hex6" | "hex8" | "hsl" | "hsv" | "hwb";

export declare type ColorInputTypes = string | Partial<RGBALike | HSVALike | HSLALike | HWBALike>;

export declare interface HSL {
    h: number;
    s: number;
    l: number;
}

export declare interface HSLA extends HSL {
    a: number;
}

declare interface HSLALike {
    h: number | string;
    s: number | string;
    l: number | string;
    a: number | string;
    format: string;
    ok: boolean;
}

export declare interface HSV {
    h: number;
    s: number;
    v: number;
}

export declare interface HSVA extends HSV {
    a: number;
}

/** An HSVA object, with all values in the range 0-1 */
declare interface HSVALike {
    h: number | string;
    s: number | string;
    v: number | string;
    a: number | string;
    format: string;
    ok: boolean;
}

export declare interface HWB {
    h: number;
    w: number;
    b: number;
}

export declare interface HWBA extends HWB {
    a: number;
}

/** An HWBA object, with all values in the range 0-1 */
declare interface HWBALike {
    h: number | string;
    w: number | string;
    b: number | string;
    a: number | string;
    format: string;
    ok: boolean;
}

export declare interface RGB {
    r: number;
    g: number;
    b: number;
}

export declare interface RGBA extends RGB {
    a: number;
}

/** An RGBA object, with all values in the range 0-1 */
declare interface RGBALike {
    r: number | string;
    g: number | string;
    b: number | string;
    a: number | string;
    format: string;
    ok: boolean;
}

declare interface RGBAObject extends RGBA {
    ok: boolean;
    format: string;
}

export { }
