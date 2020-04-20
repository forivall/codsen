/**
 * string-remove-widows
 * Helps to prevent widow words in a text
 * Version: 1.5.19
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-remove-widows
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).stringRemoveWidows={})}(this,(function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return"string"==typeof t?t.length>0?[t]:[]:t}function n(t){return t&&"object"==typeof t&&!Array.isArray(t)}function o(t){return"string"==typeof t}function i(t,e,r,n,o,i){const s="function"==typeof r?r():r;if(e<0&&o&&"EOL"===s)return s;if(e>=t.length&&!o)return!1;let a=o?1:r.length,u=!1,c=!1,l=n.maxMismatches,f=e,g=!1,h=!1,p=!1;for(;t[f];){const e=i(f);if(n.trimBeforeMatching&&""===t[f].trim()){if(!t[e]&&o&&"EOL"===r)return!0;f=i(f);continue}if(!n.i&&n.trimCharsBeforeMatching.includes(t[f])||n.i&&n.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(t[f].toLowerCase())){if(o&&"EOL"===r&&!t[e])return!0;f=i(f);continue}const s=e>f?r[r.length-a]:r[a-1];if(!n.i&&t[f]===s||n.i&&t[f].toLowerCase()===s.toLowerCase()){if(g||(g=!0),c||(c=!0),a===r.length?h=!0:1===a&&(p=!0),a-=1,a<1)return f}else{if(!(n.maxMismatches&&l&&f))return!(0!==f||1!==a||n.lastMustMatch||!c)&&0;l--;for(let o=0;o<=l;o++){const s=e>f?r[r.length-a+1+o]:r[a-2-o],u=t[i(f)];if(s&&(!n.i&&t[f]===s||n.i&&t[f].toLowerCase()===s.toLowerCase())&&(!n.firstMustMatch||a!==r.length)){a-=2,g=!0;break}if(u&&s&&(!n.i&&u===s||n.i&&u.toLowerCase()===s.toLowerCase())&&(!n.firstMustMatch||a!==r.length)){a-=1,g=!0;break}if(void 0===s&&l>=0&&g&&(!n.firstMustMatch||h)&&(!n.lastMustMatch||p))return f}g||(u=f)}if(!1!==u&&u!==f&&(u=!1),a<1)return f;f=i(f)}return a>0?!(!o||"EOL"!==s)||!!(n.maxMismatches>=a&&c)&&(u||0):void 0}function s(t,e,s,a){return function(t,e,s,a,u){if(n(u)&&Object.prototype.hasOwnProperty.call(u,"trimBeforeMatching")&&"boolean"!=typeof u.trimBeforeMatching)throw new Error(`string-match-left-right/${t}(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!${Array.isArray(u.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""}`);const c=Object.assign({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1},u);if(c.trimCharsBeforeMatching=r(c.trimCharsBeforeMatching),c.trimCharsBeforeMatching=c.trimCharsBeforeMatching.map(t=>o(t)?t:String(t)),!o(e))return!1;if(!e.length)return!1;if(!Number.isInteger(s)||s<0)throw new Error(`string-match-left-right/${t}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof s}, equal to:\n${JSON.stringify(s,null,4)}`);let l,f,g,h;if(o(a))l=[a];else if(Array.isArray(a))l=a;else if(a){if("function"!=typeof a)throw new Error(`string-match-left-right/${t}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof a}, equal to:\n${JSON.stringify(a,null,4)}`);l=[],l.push(a)}else l=a;if(u&&!n(u))throw new Error(`string-match-left-right/${t}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof u}", and equal to:\n${JSON.stringify(u,null,4)}`);if(c.trimCharsBeforeMatching.some((t,e)=>t.length>1&&(g=e,h=t,!0)))throw new Error(`string-match-left-right/${t}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${g} is longer than 1 character, ${h.length} (equals to ${h}). Please split it into separate characters and put into array as separate elements.`);if(!l||!Array.isArray(l)||Array.isArray(l)&&!l.length||Array.isArray(l)&&1===l.length&&o(l[0])&&!l[0].trim()){if("function"==typeof c.cb){let r,n=s;if("matchLeftIncl"!==t&&"matchRight"!==t||(n+=1),"L"===t[5])for(let t=n;t--;){const n=e[t];if((!c.trimBeforeMatching||c.trimBeforeMatching&&void 0!==n&&n.trim())&&(!c.trimCharsBeforeMatching.length||void 0!==n&&!c.trimCharsBeforeMatching.includes(n))){r=t;break}}else if(t.startsWith("matchRight"))for(let t=n;t<e.length;t++){const n=e[t];if((!c.trimBeforeMatching||c.trimBeforeMatching&&n.trim())&&(!c.trimCharsBeforeMatching.length||!c.trimCharsBeforeMatching.includes(n))){r=t;break}}if(void 0===r)return!1;const o=e[r],i=r+1;let a="";return i&&i>0&&(a=e.slice(0,i)),"L"===t[5]?c.cb(o,a,r):(r&&r>0&&(a=e.slice(r)),c.cb(o,a,r))}let r="";throw u||(r=" More so, the whole options object, the fourth input argument, is missing!"),new Error(`string-match-left-right/${t}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${r}`)}for(let r=0,n=l.length;r<n;r++){f="function"==typeof l[r];const n=l[r];let o,a,u="",g=s;"matchRight"===t?g++:"matchLeft"===t&&g--;const h=i(e,g,n,c,f,e=>"L"===t[5]?e-1:e+1);if(h&&f&&"function"==typeof n&&"EOL"===n())return!(!n()||c.cb&&!c.cb(o,u,a))&&n();if(Number.isInteger(h)&&(a=t.startsWith("matchLeft")?h-1:h+1,u="L"===t[5]?e.slice(0,h):e.slice(a)),a<0&&(a=void 0),e[a]&&(o=e[a]),Number.isInteger(h)&&(!c.cb||c.cb(o,u,a)))return n}return!1}("matchRightIncl",t,e,s,a)}var a,u,c=Function.prototype,l=Object.prototype,f=c.toString,g=l.hasOwnProperty,h=f.call(Object),p=l.toString,y=(a=Object.getPrototypeOf,u=Object,function(t){return a(u(t))});var m=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=p.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=y(t);if(null===e)return!0;var r=g.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&f.call(r)==h},d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t,e){t(e={exports:{}},e.exports)}((function(t,e){var r="[object Arguments]",n="[object Function]",o="[object GeneratorFunction]",i="[object Map]",s="[object Set]",a=/\w*$/,u=/^\[object .+?Constructor\]$/,c=/^(?:0|[1-9]\d*)$/,l={};l[r]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[i]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[s]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[n]=l["[object WeakMap]"]=!1;var f="object"==typeof d&&d&&d.Object===Object&&d,g="object"==typeof self&&self&&self.Object===Object&&self,h=f||g||Function("return this")(),p=e&&!e.nodeType&&e,y=p&&t&&!t.nodeType&&t,m=y&&y.exports===p;function b(t,e){return t.set(e[0],e[1]),t}function v(t,e){return t.add(e),t}function _(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function w(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function j(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function T(t,e){return function(r){return t(e(r))}}function O(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var A,$=Array.prototype,I=Function.prototype,E=Object.prototype,M=h["__core-js_shared__"],W=(A=/[^.]+$/.exec(M&&M.keys&&M.keys.IE_PROTO||""))?"Symbol(src)_1."+A:"",R=I.toString,C=E.hasOwnProperty,F=E.toString,S=RegExp("^"+R.call(C).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),L=m?h.Buffer:void 0,D=h.Symbol,N=h.Uint8Array,B=T(Object.getPrototypeOf,Object),P=Object.create,H=E.propertyIsEnumerable,x=$.splice,k=Object.getOwnPropertySymbols,J=L?L.isBuffer:void 0,q=T(Object.keys,Object),U=mt(h,"DataView"),V=mt(h,"Map"),z=mt(h,"Promise"),Z=mt(h,"Set"),K=mt(h,"WeakMap"),G=mt(Object,"create"),Q=wt(U),X=wt(V),Y=wt(z),tt=wt(Z),et=wt(K),rt=D?D.prototype:void 0,nt=rt?rt.valueOf:void 0;function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function st(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){this.__data__=new it(t)}function ut(t,e){var n=Tt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ot(t)}(t)&&C.call(t,"callee")&&(!H.call(t,"callee")||F.call(t)==r)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=n.length,i=!!o;for(var s in t)!e&&!C.call(t,s)||i&&("length"==s||vt(s,o))||n.push(s);return n}function ct(t,e,r){var n=t[e];C.call(t,e)&&jt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function lt(t,e){for(var r=t.length;r--;)if(jt(t[r][0],e))return r;return-1}function ft(t,e,u,c,f,g,h){var p;if(c&&(p=g?c(t,f,g,h):c(t)),void 0!==p)return p;if(!It(t))return t;var y=Tt(t);if(y){if(p=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&C.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,p)}else{var m=bt(t),d=m==n||m==o;if(At(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==m||m==r||d&&!g){if(w(t))return g?t:{};if(p=function(t){return"function"!=typeof t.constructor||_t(t)?{}:(e=B(t),It(e)?P(e):{});var e}(d?{}:t),!e)return function(t,e){return pt(t,dt(t),e)}(t,function(t,e){return t&&pt(e,Et(e),t)}(p,t))}else{if(!l[m])return g?t:{};p=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return ht(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?ht(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?ht(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case i:return function(t,e,r){return _(e?r(j(t),!0):j(t),b,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,a.exec(t));return e.lastIndex=t.lastIndex,e}(t);case s:return function(t,e,r){return _(e?r(O(t),!0):O(t),v,new t.constructor)}(t,n,r);case"[object Symbol]":return u=t,nt?Object(nt.call(u)):{}}var u}(t,m,ft,e)}}h||(h=new at);var T=h.get(t);if(T)return T;if(h.set(t,p),!y)var A=u?function(t){return function(t,e,r){var n=e(t);return Tt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Et,dt)}(t):Et(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(A||t,(function(r,n){A&&(r=t[n=r]),ct(p,n,ft(r,e,u,c,n,t,h))})),p}function gt(t){return!(!It(t)||function(t){return!!W&&W in t}(t))&&($t(t)||w(t)?S:u).test(wt(t))}function ht(t){var e=new t.constructor(t.byteLength);return new N(e).set(new N(t)),e}function pt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var s=e[o],a=n?n(r[s],t[s],s,r,t):void 0;ct(r,s,void 0===a?t[s]:a)}return r}function yt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function mt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return gt(r)?r:void 0}ot.prototype.clear=function(){this.__data__=G?G(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var e=this.__data__;if(G){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return C.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return G?void 0!==e[t]:C.call(e,t)},ot.prototype.set=function(t,e){return this.__data__[t]=G&&void 0===e?"__lodash_hash_undefined__":e,this},it.prototype.clear=function(){this.__data__=[]},it.prototype.delete=function(t){var e=this.__data__,r=lt(e,t);return!(r<0)&&(r==e.length-1?e.pop():x.call(e,r,1),!0)},it.prototype.get=function(t){var e=this.__data__,r=lt(e,t);return r<0?void 0:e[r][1]},it.prototype.has=function(t){return lt(this.__data__,t)>-1},it.prototype.set=function(t,e){var r=this.__data__,n=lt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},st.prototype.clear=function(){this.__data__={hash:new ot,map:new(V||it),string:new ot}},st.prototype.delete=function(t){return yt(this,t).delete(t)},st.prototype.get=function(t){return yt(this,t).get(t)},st.prototype.has=function(t){return yt(this,t).has(t)},st.prototype.set=function(t,e){return yt(this,t).set(t,e),this},at.prototype.clear=function(){this.__data__=new it},at.prototype.delete=function(t){return this.__data__.delete(t)},at.prototype.get=function(t){return this.__data__.get(t)},at.prototype.has=function(t){return this.__data__.has(t)},at.prototype.set=function(t,e){var r=this.__data__;if(r instanceof it){var n=r.__data__;if(!V||n.length<199)return n.push([t,e]),this;r=this.__data__=new st(n)}return r.set(t,e),this};var dt=k?T(k,Object):function(){return[]},bt=function(t){return F.call(t)};function vt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||c.test(t))&&t>-1&&t%1==0&&t<e}function _t(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||E)}function wt(t){if(null!=t){try{return R.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function jt(t,e){return t===e||t!=t&&e!=e}(U&&"[object DataView]"!=bt(new U(new ArrayBuffer(1)))||V&&bt(new V)!=i||z&&"[object Promise]"!=bt(z.resolve())||Z&&bt(new Z)!=s||K&&"[object WeakMap]"!=bt(new K))&&(bt=function(t){var e=F.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?wt(r):void 0;if(n)switch(n){case Q:return"[object DataView]";case X:return i;case Y:return"[object Promise]";case tt:return s;case et:return"[object WeakMap]"}return e});var Tt=Array.isArray;function Ot(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!$t(t)}var At=J||function(){return!1};function $t(t){var e=It(t)?F.call(t):"";return e==n||e==o}function It(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Et(t){return Ot(t)?ut(t):function(t){if(!_t(t))return q(t);var e=[];for(var r in Object(t))C.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return ft(t,!0,!0)}}));function b(t,e){return function(t,e,r){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),!t[e+1])return null;if(t[e+1]&&(!r&&t[e+1].trim()||r&&(t[e+1].trim()||"\n\r".includes(t[e+1]))))return e+1;if(t[e+2]&&(!r&&t[e+2].trim()||r&&(t[e+2].trim()||"\n\r".includes(t[e+2]))))return e+2;for(let n=e+1,o=t.length;n<o;n++)if(t[n]&&(!r&&t[n].trim()||r&&(t[n].trim()||"\n\r".includes(t[n]))))return n;return null}(t,e,!1)}function v(t,e){return function(t,e,r){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),e<1)return null;if(t[e-1]&&(!r&&t[e-1].trim()||r&&(t[e-1].trim()||"\n\r".includes(t[e-1]))))return e-1;if(t[e-2]&&(!r&&t[e-2].trim()||r&&(t[e-2].trim()||"\n\r".includes(t[e-2]))))return e-2;for(let n=e;n--;)if(t[n]&&(!r&&t[n].trim()||r&&(t[n].trim()||"\n\r".includes(t[n]))))return n;return null}(t,e,!1)}function _(t,e=!0,r){if(!(r.trim()||t.length&&"\n"!==r&&" "!==r&&" "===(e?t[t.length-1]:t[0])||t.length&&"\n"===(e?t[t.length-1]:t[0])&&"\n"!==r&&" "!==r))if(e){if(("\n"===r||" "===r)&&t.length&&" "===t[t.length-1])for(;t.length&&" "===t[t.length-1];)t.pop();t.push(" "===r||"\n"===r?r:" ")}else{if(("\n"===r||" "===r)&&t.length&&" "===t[0])for(;t.length&&" "===t[0];)t.shift();t.unshift(" "===r||"\n"===r?r:" ")}}function w(t,e){if("string"==typeof t&&t.length){let r,n,o=!1;if(t.includes("\r\n")&&(o=!0),r=e&&"number"==typeof e?e:1,""===t.trim()){const e=[];for(n=r,Array.from(t).forEach(t=>{("\n"!==t||n)&&("\n"===t&&n--,_(e,!0,t))});e.length>1&&" "===e[e.length-1];)e.pop();return e.join("")}const i=[];if(n=r,""===t[0].trim())for(let e=0,r=t.length;e<r&&!t[e].trim();e++)("\n"!==t[e]||n)&&("\n"===t[e]&&n--,_(i,!0,t[e]));const s=[];if(n=r,""===t.slice(-1).trim())for(let e=t.length;e--&&!t[e].trim();)("\n"!==t[e]||n)&&("\n"===t[e]&&n--,_(s,!1,t[e]));return o?`${i.join("")}${t.trim()}${s.join("")}`.replace(/\n/g,"\r\n"):i.join("")+t.trim()+s.join("")}return t}function j(t,e){if(!Array.isArray(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const r=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},e);let n,o;if(r.strictlyTwoElementsInRangeArrays&&!t.every((t,e)=>2===t.length||(n=e,o=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(t[n],null,4)}) has not two but ${o} elements!`);if(!t.every((t,e)=>!(!Number.isInteger(t[0])||t[0]<0||!Number.isInteger(t[1])||t[1]<0)||(n=e,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(t[n],null,4)}) does not consist of only natural numbers!`);const i=t.length*t.length;let s=0;return Array.from(t).sort((t,e)=>(r.progressFn&&(s++,r.progressFn(Math.floor(100*s/i))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1))}function T(t,e){function r(t){return"string"==typeof t}function n(t){return t&&"object"==typeof t&&!Array.isArray(t)}if(!Array.isArray(t))return t;const o={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let i;if(e){if(!n(e))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(e,null,4)} (type ${typeof e})`);if(i=Object.assign({},o,e),i.progressFn&&n(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof i.progressFn}", equal to ${JSON.stringify(i.progressFn,null,4)}`);if(i.mergeType&&1!==i.mergeType&&2!==i.mergeType)if(r(i.mergeType)&&"1"===i.mergeType.trim())i.mergeType=1;else{if(!r(i.mergeType)||"2"!==i.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof i.mergeType}", equal to ${JSON.stringify(i.mergeType,null,4)}`);i.mergeType=2}if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof i.joinRangesThatTouchEdges}", equal to ${JSON.stringify(i.joinRangesThatTouchEdges,null,4)}`)}else i=Object.assign({},o);const s=t.map(t=>[...t]).filter(t=>void 0!==t[2]||t[0]!==t[1]);let a,u,c;a=i.progressFn?j(s,{progressFn:t=>{c=Math.floor(t/5),c!==u&&(u=c,i.progressFn(c))}}):j(s);const l=a.length-1;for(let t=l;t>0;t--)i.progressFn&&(c=Math.floor(78*(1-t/l))+21,c!==u&&c>u&&(u=c,i.progressFn(c))),(a[t][0]<=a[t-1][0]||!i.joinRangesThatTouchEdges&&a[t][0]<a[t-1][1]||i.joinRangesThatTouchEdges&&a[t][0]<=a[t-1][1])&&(a[t-1][0]=Math.min(a[t][0],a[t-1][0]),a[t-1][1]=Math.max(a[t][1],a[t-1][1]),void 0!==a[t][2]&&(a[t-1][0]>=a[t][0]||a[t-1][1]<=a[t][1])&&null!==a[t-1][2]&&(null===a[t][2]&&null!==a[t-1][2]?a[t-1][2]=null:void 0!==a[t-1][2]?2===i.mergeType&&a[t-1][0]===a[t][0]?a[t-1][2]=a[t][2]:a[t-1][2]+=a[t][2]:a[t-1][2]=a[t][2]),a.splice(t,1),t=a.length);return a}function O(t){return null!=t}function A(t){return Number.isInteger(t)&&t>=0}function $(t){return"string"==typeof t}function I(t){return/^\d*$/.test(t)?parseInt(t,10):t}class E{constructor(t){const e=Object.assign({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1},t);if(e.mergeType&&1!==e.mergeType&&2!==e.mergeType)if($(e.mergeType)&&"1"===e.mergeType.trim())e.mergeType=1;else{if(!$(e.mergeType)||"2"!==e.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof e.mergeType}", equal to ${JSON.stringify(e.mergeType,null,4)}`);e.mergeType=2}this.opts=e}add(t,e,r,...n){if(n.length>0)throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ${JSON.stringify(n,null,4)}`);if(!O(t)&&!O(e))return;if(O(t)&&!O(e)){if(Array.isArray(t)){if(t.length){if(t.some(t=>Array.isArray(t)))return void t.forEach(t=>{Array.isArray(t)&&this.add(...t)});t.length>1&&A(I(t[0]))&&A(I(t[1]))&&this.add(...t)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(t,null,0)}) but second-one, "to" is not (${JSON.stringify(e,null,0)})`)}if(!O(t)&&O(e))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(e,null,0)}) but first-one, "from" is not (${JSON.stringify(t,null,0)})`);const o=/^\d*$/.test(t)?parseInt(t,10):t,i=/^\d*$/.test(e)?parseInt(e,10):e;if(A(r)&&(r=String(r)),!A(o)||!A(i))throw A(o)&&o>=0?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof i}" equal to: ${JSON.stringify(i,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof o}" equal to: ${JSON.stringify(o,null,4)}`);if(O(r)&&!$(r)&&!A(r))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`);if(O(this.slices)&&Array.isArray(this.last())&&o===this.last()[1]){if(this.last()[1]=i,this.last()[2],null!==this.last()[2]&&O(r)){let t=!(O(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?r:this.last()[2]+r;this.opts.limitToBeAddedWhitespace&&(t=w(t,this.opts.limitLinebreaksCount)),$(t)&&!t.length||(this.last()[2]=t)}}else{this.slices||(this.slices=[]);const t=void 0===r||$(r)&&!r.length?[o,i]:[o,i,this.opts.limitToBeAddedWhitespace?w(r,this.opts.limitLinebreaksCount):r];this.slices.push(t)}}push(t,e,r,...n){this.add(t,e,r,...n)}current(){return null!=this.slices?(this.slices=T(this.slices,{mergeType:this.opts.mergeType}),this.opts.limitToBeAddedWhitespace?this.slices.map(t=>O(t[2])?[t[0],t[1],w(t[2],this.opts.limitLinebreaksCount)]:t):this.slices):null}wipe(){this.slices=void 0}replace(t){if(Array.isArray(t)&&t.length){if(!Array.isArray(t[0])||!A(t[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(t[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.slices=Array.from(t)}else this.slices=void 0}last(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}function M(t){return null!=t}function W(t){return"string"==typeof t}function R(t,e,r){let n=0,o=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!W(t))throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(null===e)return t;if(!Array.isArray(e))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(r&&"function"!=typeof r)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);Array.isArray(e)&&(Number.isInteger(e[0])&&e[0]>=0||/^\d*$/.test(e[0]))&&(Number.isInteger(e[1])&&e[1]>=0||/^\d*$/.test(e[1]))&&(e=[e]);const i=e.length;let s=0;e.forEach((t,a)=>{if(r&&(n=Math.floor(s/i*10),n!==o&&(o=n,r(n))),!Array.isArray(t))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${a}th element not an array: ${JSON.stringify(t,null,4)}, which is ${typeof t}`);if(!Number.isInteger(t[0])||t[0]<0){if(!/^\d*$/.test(t[0]))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${a}th element, array [${t[0]},${t[1]}]. That array has first element not an integer, but ${typeof t[0]}, equal to: ${JSON.stringify(t[0],null,4)}. Computer doesn't like this.`);e[a][0]=Number.parseInt(e[a][0],10)}if(!Number.isInteger(t[1])){if(!/^\d*$/.test(t[1]))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${a}th element, array [${t[0]},${t[1]}]. That array has second element not an integer, but ${typeof t[1]}, equal to: ${JSON.stringify(t[1],null,4)}. Computer doesn't like this.`);e[a][1]=Number.parseInt(e[a][1],10)}s++});const a=T(e,{progressFn:t=>{r&&(n=10+Math.floor(t/10),n!==o&&(o=n,r(n)))}}),u=a.length;if(u>0){const e=t.slice(a[u-1][1]);t=a.reduce((e,i,s,a)=>{r&&(n=20+Math.floor(s/u*80),n!==o&&(o=n,r(n)));const c=0===s?0:a[s-1][1],l=a[s][0];return e+t.slice(c,l)+(M(a[s][2])?a[s][2]:"")},""),t+=e}return t}var C=[{heads:"{{",tails:"}}"},{heads:["{% if","{%- if"],tails:["{% endif","{%- endif"]},{heads:["{% for","{%- for"],tails:["{% endfor","{%- endfor"]},{heads:["{%","{%-"],tails:["%}","-%}"]},{heads:"{#",tails:"#}"}],F=[{heads:"{{",tails:"}}"}],S=[{heads:["<%","<%=","<%-"],tails:["%>","=%>","-%>"]}],L=["abbr","address","area","article","aside","audio","base","bdi","bdo","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","doctype","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","param","picture","pre","progress","rb","rp","rt","rtc","ruby","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","ul","var","video","wbr","xml"],D={removeWidowPreventionMeasures:!1,convertEntities:!0,targetLanguage:"html",UKPostcodes:!1,hyphens:!0,minWordCount:4,minCharCount:5,ignore:[],reportProgressFunc:null,reportProgressFuncFrom:0,reportProgressFuncTo:100,tagRanges:[]};t.defaultOpts=D,t.removeWidows=function(t,n){function o(e,r){var n=" ";N.removeWidowPreventionMeasures?n=" ":N.convertEntities&&(n="&nbsp;",i(N.targetLanguage)&&("css"===N.targetLanguage.trim().toLowerCase()?n="\\00A0":"js"===N.targetLanguage.trim().toLowerCase()&&(n="\\u00A0"))),t.slice(e,r)!==n&&A.push(e,r,n)}function i(t){return"string"==typeof t}var a=Date.now();if(!i(t))throw void 0===t?new Error("string-remove-widows: [THROW_ID_01] the first input argument is completely missing! It should be given as string."):new Error('string-remove-widows: [THROW_ID_02] the first input argument must be string! It was given as "'.concat(e(t),'", equal to:\n').concat(JSON.stringify(t,null,4)));if(n&&!m(n))throw new Error("string-remove-widows: [THROW_ID_03] the second input argument, options object, should be a plain object but it was given as type ".concat(e(n),", equal to ").concat(JSON.stringify(n,null,4)));var u,c,l,f,g,h,p,y,d,_,w,j,T=Array.isArray,O=t.length,A=new E({mergeType:2}),$=["."],I=/[A-Z]{1,2}[0-9][0-9A-Z]?$/,M=/^[0-9][A-Z]{2}/,W=0,N=Object.assign({},D,n),B={removeWidows:!1,convertEntities:!1};if(N.dashes&&(N.hyphens=!0,delete N.dashes),N.ignore&&(T(N.ignore)||i(N.ignore))){if(N.ignore=r(N.ignore),N.ignore.includes("all"))N.ignore=N.ignore.concat(C.concat(S));else if(N.ignore.some((function(t){return i(t)}))){var P=[];N.ignore=N.ignore.filter((function(t){return i(t)&&t.length?(["nunjucks","jinja","liquid"].includes(t.trim().toLowerCase())?P=P.concat(C):["hugo"].includes(t.trim().toLowerCase())?P=P.concat(F):["hexo"].includes(t.trim().toLowerCase())&&(P=P.concat(S)),!1):"object"===e(t)||void 0})),P.length&&(N.ignore=N.ignore.concat(P))}}else N.ignore=[];function H(){c=0,l=0,f=void 0,g=void 0,h=void 0,p=void 0,y=void 0,d=void 0}N.reportProgressFunc&&(j=Math.floor(N.reportProgressFuncTo-.06*(N.reportProgressFuncTo-N.reportProgressFuncFrom)-N.reportProgressFuncFrom)),H();for(var x=function(e){if(!_&&T(N.ignore)&&N.ignore.length&&N.ignore.some((function(r,n){if(T(r.heads)&&r.heads.some((function(r){return t.startsWith(r,e)}))||i(r.heads)&&t.startsWith(r.heads,e))return c++,_=N.ignore[n].tails,k=e,!0})),!_&&w&&w===e&&(c++,w=void 0),"function"==typeof N.reportProgressFunc&&(u=N.reportProgressFuncFrom+Math.floor(e/O*j))!==W&&(W=u,N.reportProgressFunc(u)),!_&&e&&t[e]&&t[e].trim()&&(!t[e-1]||t[e-1]&&!t[e-1].trim())&&(p=e),!_&&t[e]&&t[e].trim()&&l++,_||!N.hyphens||!("-"===t[e]||"—"===t[e]||"–"===t[e]||t.slice(e).startsWith("&ndash;")||t.slice(e).startsWith("\\2013")||t.slice(e).startsWith("\\u2013")||t.slice(e).startsWith("&mdash;")||t.slice(e).startsWith("\\2014")||t.slice(e).startsWith("\\u2014"))||!t[e+1]||t[e+1].trim()&&"&"!==t[e]||t[e-1]&&!t[e-1].trim()&&t[v(t,e)]&&(o(v(t,e)+1,e),B.removeWidows=!0),!_&&("&"===t[e]&&"n"===t[e+1]&&"b"===t[e+2]&&"s"===t[e+3]&&"p"===t[e+4]&&";"===t[e+5]||"&"===t[e]&&"#"===t[e+1]&&"1"===t[e+2]&&"6"===t[e+3]&&"0"===t[e+4]&&";"===t[e+5])&&(y=e,d=e+6,t[e+6]&&t[e+6].trim()&&(w=e+6),N.convertEntities?"css"!==N.targetLanguage&&"js"!==N.targetLanguage||(A.push(e,e+6,"css"===N.targetLanguage?"\\00A0":"\\u00A0"),B.convertEntities=!0):(A.push(e,e+6," "),B.convertEntities=!0)),!_&&"\\"===t[e]&&"0"===t[e+1]&&"0"===t[e+2]&&t[e+3]&&"A"===t[e+3].toUpperCase()&&"0"===t[e+4]&&(y=e,d=e+5,t[e+5]&&t[e+5].trim()&&(w=e+5),N.convertEntities?"html"!==N.targetLanguage&&"js"!==N.targetLanguage||(A.push(e,e+5,"html"===N.targetLanguage?"&nbsp;":"\\u00A0"),B.convertEntities=!0):(A.push(e,e+5," "),B.convertEntities=!0)),!_&&"\\"===t[e]&&t[e+1]&&"u"===t[e+1].toLowerCase()&&"0"===t[e+2]&&"0"===t[e+3]&&t[e+4]&&"A"===t[e+4].toUpperCase()&&"0"===t[e+5]&&(y=e,d=e+6,t[e+6]&&t[e+6].trim()&&(w=e+6),N.convertEntities?"html"!==N.targetLanguage&&"css"!==N.targetLanguage||A.push(e,e+6,"html"===N.targetLanguage?"&nbsp;":"\\00A0"):A.push(e,e+6," ")),_||" "!==t[e]||(y=e,d=e+1,t[e+2]&&t[e+2].trim()&&(w=e+2),N.convertEntities&&A.push(e,e+1,"css"===N.targetLanguage?"\\00A0":"js"===N.targetLanguage?"\\u00A0":"&nbsp;")),_||!t[e]||!t[e].trim()||t[e-1]&&t[e-1].trim()||c++,!_&&(!t[e]||"\r\n".includes(t[e])||("\n"===t[e]||"\r"===t[e]||"\r"===t[e]&&"\n"===t[e+1])&&t[e-1]&&$.includes(t[v(t,e)]))){var r,n;if((!N.minWordCount||c>=N.minWordCount)&&(!N.minCharCount||l>=N.minCharCount))void 0!==h&&void 0!==p&&void 0!==y&&void 0!==d?h>y?(r=h,n=p):(r=y,n=d):void 0!==h&&void 0!==p?(r=h,n=p):void 0!==y&&void 0!==d&&(r=y,n=d),r&&n||!f||!g||(r=f,n=g),r&&n&&(o(r,n),B.removeWidows=!0);H()}N.UKPostcodes&&t[e]&&!t[e].trim()&&t[e-1]&&t[e-1].trim()&&I.test(t.slice(0,e))&&t[b(t,e)]&&M.test(t.slice(b(t,e)))&&(o(e,b(t,e)),B.removeWidows=!0),_||!t[e]||t[e].trim()||!t[e-1]||!t[e-1].trim()||!(void 0===h||t[h-1]&&t[h-1].trim())||"/>".includes(t[b(t,e)])||t.slice(0,v(t,e)+1).endsWith("br")||t.slice(0,v(t,e)+1).endsWith("hr")||"<"===t[v(t,e)]&&L.some((function(r){return t.startsWith(r,b(t,e))}))||(f=h,g=p,h=e,p=void 0,void 0===y&&void 0===d||(y=void 0,d=void 0));var a=void 0;_&&(!i(_)||_.length&&!t.startsWith(_,e)?!T(_)||_.length&&!_.some((function(r){if(t.startsWith(r,e))return a=r,k=e,!0}))||(_=void 0,e+=a.length,T(N.ignore)&&N.ignore.length&&t[e+1]&&N.ignore.some((function(r){return k=e,s(t,e,r.tails,{trimBeforeMatching:!0,cb:function(r,n,o){return o&&t[(e=o-1)+1]&&t[e+1].trim()&&c++,k=e,!0}})}))):_=void 0),t[e]&&"\r\n".includes(t[e])&&(c=0,l=0),T(N.tagRanges)&&N.tagRanges.length&&N.tagRanges.some((function(t){if(e>=t[0]&&e<=t[1]&&t[1]-1>e)return e=t[1]-1,k=e,!0})),k=e},k=0;k<=O;k++)x(k);return{res:R(t,A.current(),N.reportProgressFunc?function(t){(u=Math.floor(.94*(N.reportProgressFuncTo-N.reportProgressFuncFrom)+t/100*(N.reportProgressFuncTo-N.reportProgressFuncFrom)*.06))!==W&&(W=u,N.reportProgressFunc(u))}:null),ranges:A.current(),log:{timeTakenInMiliseconds:Date.now()-a},whatWasDone:B}},t.version="1.5.19",Object.defineProperty(t,"__esModule",{value:!0})}));
