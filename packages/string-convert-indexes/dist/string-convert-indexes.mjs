/**
 * string-convert-indexes
 * Convert between native JS string character indexes and grapheme-count-based indexes
 * Version: 4.0.7
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-convert-indexes/
 */

import{traverse as t}from"ast-monkey-traverse";import e from"grapheme-splitter";const n="4.0.7";function r(n,r,i){function s(t){return!(!["string","number"].includes(typeof t)||"string"==typeof t&&!/^\d*$/.test(t)||"number"==typeof t&&(!Number.isInteger(t)||t<0))}function o(t,e){let n=0,r=0;for(let i=0,s=t.length;i<s;i++){if(r+=t[i].length,e>=n&&e<r)return i;n+=t[i].length}throw new Error(`string-convert-indexes: [THROW_ID_05] the "indexes" value, ${i}, is not covered by graphemes length!`)}function u(t,e){if(e>=t.length)throw new Error(`string-convert-indexes: [THROW_ID_06] the index to convert, ${e}, is not covered by graphemes length!`);return t.slice(0,e).join("").length}if("string"!=typeof r||!r)throw new TypeError(`string-convert-indexes: [THROW_ID_01] the first input argument, input string, must be a non-zero-length string! Currently it's: ${typeof r}, equal to:\n${r}`);if(0===i)return 0;if("0"===i)return"0";const g=(new e).splitGraphemes(r);if(["string","number"].includes(typeof i)){if(s(i))return"u"===n?"string"==typeof i?String(u(g,+i)):u(g,+i):"string"==typeof i?String(o(g,+i)):o(g,+i);throw new Error(`string-convert-indexes: [THROW_ID_02] the second input argument, "indexes" is not suitable to describe string index - it was given as ${JSON.stringify(i,null,4)} (${typeof i})`)}if(i&&"object"==typeof i)return t(i,"u"===n?(t,e,n)=>{const r=void 0!==e?e:t;if(["string","number"].includes(typeof r)){if(s(r))return"string"==typeof r?String(u(g,+r)):u(g,+r);throw new Error(`string-convert-indexes: [THROW_ID_03] bad value was encountered, ${JSON.stringify(r,null,4)}, its path is ${n.path}`)}return r}:(t,e,n)=>{const r=void 0!==e?e:t;if(["string","number"].includes(typeof r)){if(s(r))return"string"==typeof r?String(o(g,+r)):o(g,+r);throw new Error(`string-convert-indexes: [THROW_ID_04] bad value was encountered, ${JSON.stringify(r,null,4)}, its path is ${n.path}`)}return r});throw new Error(`string-convert-indexes: [THROW_ID_07] the first input argument, a source string should be a string but it was given as ${r}, type ${typeof r}`)}function i(t,e){return r("n",t,e)}function s(t,e){return r("u",t,e)}export{i as nativeToUnicode,s as unicodeToNative,n as version};
