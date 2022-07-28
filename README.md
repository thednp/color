## Color

[![Coverage Status](https://coveralls.io/repos/github/thednp/color/badge.svg)](https://coveralls.io/github/thednp/color)
[![ci](https://github.com/thednp/color/actions/workflows/ci.yml/badge.svg)](https://github.com/thednp/color/actions/workflows/ci.yml)
[![NPM Version](https://img.shields.io/npm/v/@thednp/color.svg)](https://www.npmjs.com/package/@thednp/color)
[![NPM Downloads](https://img.shields.io/npm/dm/@thednp/color.svg)](http://npm-stat.com/charts.html?package=@thednp/color)
[![jsDeliver](https://img.shields.io/jsdelivr/npm/hw/@thednp/color)](https://www.jsdelivr.com/package/npm/@thednp/color)
[![cypress version](https://img.shields.io/badge/cypress-10.3.1-brightgreen)](https://cypress.io/)
[![typescript version](https://img.shields.io/badge/typescript-4.7.4-brightgreen)](https://www.typescriptlang.org/)
[![esbuild version](https://img.shields.io/badge/esbuild-0.14.30-brightgreen)](https://esbuild.github.io/)

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

For a more detailed guide please visit the wiki page at [Color Wiki](https://github.com/thednp/color/Color-Wiki)!

### Thanks

- Brian Grinstead for his original [TinyColor](https://github.com/bgrins/TinyColor)
- Scott Cooper for his awesome version of [TinyColor](https://github.com/scttcper/tinycolor)

### License

**Color** is released under the [MIT License](https://github.com/thednp/color/blob/master/LICENSE)
