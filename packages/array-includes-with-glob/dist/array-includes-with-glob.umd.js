/**
 * @name array-includes-with-glob
 * @fileoverview Like _.includes but with wildcards
 * @version 4.0.1
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/array-includes-with-glob/}
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).arrayIncludesWithGlob={})}(this,(function(e){"use strict";var t={exports:{}};const r=e=>{if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")},n=new Map;function s(e,t){if(!Array.isArray(e))switch(typeof e){case"string":e=[e];break;case"undefined":e=[];break;default:throw new TypeError(`Expected '${t}' to be a string or an array, but got a type of '${typeof e}'`)}return e.filter((e=>{if("string"!=typeof e){if(void 0===e)return!1;throw new TypeError(`Expected '${t}' to be an array of strings, but found a type of '${typeof e}' in the array`)}return!0}))}function o(e,t){t={caseSensitive:!1,...t};const s=e+JSON.stringify(t);if(n.has(s))return n.get(s);const o="!"===e[0];o&&(e=e.slice(1)),e=r(e).replace(/\\\*/g,"[\\s\\S]*");const i=new RegExp(`^${e}$`,t.caseSensitive?"":"i");return i.negated=o,n.set(s,i),i}t.exports=(e,t,r)=>{if(e=s(e,"inputs"),0===(t=s(t,"patterns")).length)return[];const n="!"===t[0][0];t=t.map((e=>o(e,r)));const i=[];for(const r of e){let e=n;for(const n of t)n.test(r)&&(e=!n.negated);e&&i.push(r)}return i},t.exports.isMatch=(e,t,r)=>(e=s(e,"inputs"),0!==(t=s(t,"patterns")).length&&e.some((e=>t.every((t=>{const n=o(t,r),s=n.test(e);return n.negated?!s:s})))));var i=t.exports;const a={arrayVsArrayAllMustBeFound:"any",caseSensitive:!0};e.defaults=a,e.includesWithGlob=function(e,t,r){if(!e.length||!t.length)return!1;const n={...a,...r},s="string"==typeof e?[e]:Array.from(e);return"string"==typeof t?s.some((e=>i.isMatch(e,t,{caseSensitive:n.caseSensitive}))):"any"===n.arrayVsArrayAllMustBeFound?t.some((e=>s.some((t=>i.isMatch(t,e,{caseSensitive:n.caseSensitive}))))):t.every((e=>s.some((t=>i.isMatch(t,e,{caseSensitive:n.caseSensitive})))))},e.version="4.0.1",Object.defineProperty(e,"__esModule",{value:!0})}));
