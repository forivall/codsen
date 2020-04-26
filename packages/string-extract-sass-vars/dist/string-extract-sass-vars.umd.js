/**
 * string-extract-sass-vars
 * Parse SASS variables file into a plain object of CSS key-value pairs
 * Version: 1.1.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-extract-sass-vars
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).stringExtractSassVars=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}return function(r,o){if("string"!=typeof r)return{};if(o&&"object"!==t(o))throw new Error("string-extract-sass-vars: [THROW_ID_01] the second input argument should be a plain object but it was given as ".concat(JSON.stringify(o,null,4)," (type ").concat(t(o),")"));var l=function(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(n){e(t,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},{throwIfEmpty:!1,cb:null},{},o);if(l.cb&&"function"!=typeof l.cb)throw new Error("string-extract-sass-vars: [THROW_ID_02] opts.cb should be function! But it was given as ".concat(JSON.stringify(o,null,4)," (type ").concat(t(o),")"));for(var c=r.length,u=null,i=null,s=null,f=null,a=null,p=null,b=!1,y=!1,O=!1,g={},d=0;d<c;d++)!b&&a&&r[d]===a&&"\\"!==r[d-1]?a=null:a||b||"\\"===r[d-1]||!"'\"".includes(r[d])||(a=r[d]),y&&"\r\n".includes(r[d])&&(y=!1),b||"/"!==r[d]||"/"!==r[d+1]||(y=!0),O&&"*"===r[d-2]&&"/"===r[d-1]&&(O=!1),b||"/"!==r[d]||"*"!==r[d+1]||(O=!0),(b=y||O)||"$"!==r[d]||null!==u||(u=d+1),b||null===i||a||";"!==r[d]||(f=r.slice("\"'".includes(r[i])?i+1:i,p+1),/^-?\d*\.?\d*$/.test(f)&&(f=+f),g[s]=l.cb?l.cb(f):f,u=null,i=null,s=null,f=null),!b&&null!==s&&r[d]&&r[d].trim().length&&null===i&&(i=d),b||s||null===u||":"!==r[d]||a||(s=r.slice(u,d)),"'\"".includes(r[d])||(p=d);if(!Object.keys(g).length&&l.throwIfEmpty)throw new Error("string-extract-sass-vars: [THROW_ID_03] no keys extracted! (setting opts.originalOpts)");return g}}));
