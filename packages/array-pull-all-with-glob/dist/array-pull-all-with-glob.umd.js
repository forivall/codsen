/**
 * array-pull-all-with-glob
 * PullAllWithGlob - like _.pullAll but pulling stronger, with globs
 * Version: 4.13.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/array-pull-all-with-glob/
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).arrayPullAllWithGlob={})}(this,(function(e){"use strict";function r(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function t(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function n(e){for(var n=1;arguments.length>n;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function o(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);r>t;t++)n[t]=e[t];return n}function i(e,r){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return o(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0;return function(){return e.length>n?{done:!1,value:e[n++]}:{done:!0}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}var a=new Map;function u(e,r){r=n({caseSensitive:!1},r);var t=e+JSON.stringify(r);if(a.has(t))return a.get(t);var o="!"===e[0];o&&(e=e.slice(1)),e=function(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(e).replace(/\\\*/g,"[\\s\\S]*");var i=RegExp("^"+e+"$",r.caseSensitive?"":"i");return i.negated=o,a.set(t,i),i}var f=function(e,r,t){if(!Array.isArray(e)||!Array.isArray(r))throw new TypeError("Expected two arrays, got "+typeof e+" "+typeof r);if(0===r.length)return e;var n="!"===r[0][0];r=r.map((function(e){return u(e,t)}));for(var o,a=[],f=i(e);!(o=f()).done;){for(var c,s=o.value,l=n,y=i(r);!(c=y()).done;){var p=c.value;p.test(s)&&(l=!p.negated)}l&&a.push(s)}return a};f.isMatch=function(e,r,t){var n=Array.isArray(e)?e:[e],o=Array.isArray(r)?r:[r];return n.some((function(e){return o.every((function(r){var n=u(r,t),o=n.test(e);return n.negated?!o:o}))}))};e.pull=function(e,r,t){if(!e.length)return[];if(!e.length||!r.length)return Array.from(e);var o="string"==typeof r?[r]:Array.from(r),i=n(n({},{caseSensitive:!0}),t);return Array.from(e).filter((function(e){return!o.some((function(r){return f.isMatch(e,r,{caseSensitive:i.caseSensitive})}))}))},e.version="4.13.0",Object.defineProperty(e,"__esModule",{value:!0})}));
