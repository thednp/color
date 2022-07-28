## Color

A TypeScript flavored fork of the excelent [TinyColor](https://github.com/bgrins/TinyColor) optimized for [ColorPicker](https://github.com/thednp/color-picker) and features an improved permissive regular expressions, new features as well as a small new utility to convert web safe colors to RGB.

### Install

```js
npm install @thednp/color
```

### Quick Usage

```js
import Color from "@thednp/color";

// provide a web colour, the constructor will determine
const myHEXColor = new Color("red", "hex").toString();
// => { r: 250, g: 0, b: 0, a: 1, ok: true, originalInput: 'red', ...}

// use the value where you need it
Object.assign(myElement.style, { color: myHEXColor.toString() });
// => #ff0000
```

### Wiki

For a more detailed guide please visit the wiki page at [Color Wiki](https://github.com/thednp/color/wiki)!

### Thanks

- Brian Grinstead for his original [TinyColor](https://github.com/bgrins/TinyColor)
- Scott Cooper for his awesome version of [TinyColor](https://github.com/scttcper/tinycolor)

### License

**Color** is released under the [MIT License](https://github.com/thednp/color/blob/master/LICENSE)
