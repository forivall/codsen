/**
 * string-match-left-right
 * Do substrings match what's on the left or right of a given index?
 * Version: 3.11.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-match-left-right
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).stringMatchLeftRight={})}(this,function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},n="[object Object]";var i,o,a=Function.prototype,c=Object.prototype,f=a.toString,h=c.hasOwnProperty,u=f.call(Object),s=c.toString,l=(i=Object.getPrototypeOf,o=Object,function(t){return i(o(t))});var g=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||s.call(t)!=n||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=l(t);if(null===e)return!0;var r=h.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&f.call(r)==u},m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},d="[object AsyncFunction]",p="[object Function]",y="[object GeneratorFunction]",b="[object Null]",v="[object Proxy]",w="[object Undefined]",O="object"==typeof m&&m&&m.Object===Object&&m,C="object"==typeof self&&self&&self.Object===Object&&self,j=O||C||Function("return this")(),L=Object.prototype,M=L.hasOwnProperty,B=L.toString,E=j.Symbol,S=E?E.toStringTag:void 0;function T(t){return null==t?void 0===t?w:b:S&&S in Object(t)?function(t){var e=M.call(t,S),r=t[S];try{t[S]=void 0;var n=!0}catch(t){}var i=B.call(t);n&&(e?t[S]=r:delete t[S]);return i}(t):function(t){return B.call(t)}(t)}var _=function(t){if(!function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}(t))return!1;var e=T(t);return e==p||e==y||e==d||e==v};function I(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=56319);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isHighSurrogate(): the input is not string but ${typeof t}`)}function R(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isLowSurrogate(): the input is not string but ${typeof t}`)}var x=Array.isArray;function A(t){return null!=t}function W(t){return"string"==typeof t}function H(t){return"string"==typeof t&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=57343)}function D(t,e,r,n,i){var o="function"==typeof r?r():r;if(e>=t.length&&i&&"EOL"===o)return o;if(!(e<=t.length)){if(n.relaxedApi)return!1;throw new Error("string-match-left-right/marchForward(): [THROW_ID_102] second argument, fromIndexInclusive is ".concat(e," beyond the input string length, ").concat(t.length,"."))}for(var a=i?1:r.length,c=e,f=t.length;c<f;c++){var h=t[c];if(I(t[c])&&R(t[c+1])&&(h=t[c]+t[c+1]),R(t[c])&&I(t[c-1])&&(h=t[c-1]+t[c]),!n.trimBeforeMatching||""!==t[c].trim())if(!n.i&&n.trimCharsBeforeMatching.includes(h)||n.i&&n.trimCharsBeforeMatching.map(function(t){return t.toLowerCase()}).includes(h.toLowerCase()))2===h.length&&(c+=1);else{var u=r[r.length-a];if(I(u)&&A(r[r.length-a+1])&&R(r[r.length-a+1])&&(u=r[r.length-a]+r[r.length-a+1]),!(!n.i&&h===u||n.i&&h.toLowerCase()===u.toLowerCase()))return!1;if((a-=h.length)<1){var s=c-r.length+h.length;return s>=0&&R(t[s])&&A(t[s-1])&&I(t[s-1])&&(s-=1),s>=0?s:0}2===h.length&&I(t[c])&&(c+=1)}}return a>0?!(!i||"EOL"!==o):void 0}function N(t,e,r,n,i){var o="function"==typeof r?r():r;if(e<0&&i&&"EOL"===o)return o;if(e>=t.length){if(n.relaxedApi)return!1;throw new Error("string-match-left-right/marchBackward(): [THROW_ID_203] second argument, starting index, should not be beyond the last character of the input string! Currently the first argument's last character's index is ".concat(t.length," but the second argument is beyond it:\n").concat(JSON.stringify(e,null,4)))}for(var a=i?1:r.length,c=e+1;c--;)if(n.trimBeforeMatching&&""===t[c].trim()){if(0===c&&i&&"EOL"===r)return!0}else{var f=t[c];if(R(t[c])&&I(t[c-1])?f=t[c-1]+t[c]:I(t[c])&&R(t[c+1])&&(f=t[c]+t[c+1]),!n.i&&n.trimCharsBeforeMatching.includes(f)||n.i&&n.trimCharsBeforeMatching.map(function(t){return t.toLowerCase()}).includes(f.toLowerCase())){if(2===f.length&&(c-=1),i&&"EOL"===r&&0===c)return!0}else{var h=r[a-1];if(R(h)&&(h="".concat(r[a-2]).concat(r[a-1]),a-=1,c-=1),!(!n.i&&f===h||n.i&&f.toLowerCase()===h.toLowerCase()))return!1;if((a-=1)<1)return c>=0?c:0}}return a>0?!(!i||"EOL"!==o):void 0}function Z(t,n,i,o,a){var c,f,h,u,s,l=Object.assign({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],relaxedApi:!1},a);if(l.trimCharsBeforeMatching="string"==typeof(c=l.trimCharsBeforeMatching)?c.length>0?[c]:[]:c,l.trimCharsBeforeMatching=l.trimCharsBeforeMatching.map(function(t){return W(t)?t:String(t)}),l.trimCharsBeforeMatching.some(function(t,e){return t.length>1&&!H(t)&&(f=e,h=t,!0)}))throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ").concat(f," is longer than 1 character, ").concat(h.length," (equals to ").concat(h,"). Please split it into separate characters and put into array as separate elements."));if(!W(n)){if(l.relaxedApi)return!1;throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_01] the first argument should be a string. Currently it's of a type: ").concat(e(n),", equal to:\n").concat(JSON.stringify(n,null,4)))}if(0===n.length){if(l.relaxedApi)return!1;throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_02] the first argument should be a non-empty string. Currently it's empty!"))}if(!r(i,{includeZero:!0})){if(l.relaxedApi)return!1;throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ").concat(e(i),", equal to:\n").concat(JSON.stringify(i,null,4)))}if(W(o))u=[o];else if(x(o))u=o;else if(A(o)){if(!_(o))throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ").concat(e(o),", equal to:\n").concat(JSON.stringify(o,null,4)));(u=[]).push(o)}else u=o;if(A(a)&&!g(a))throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type \"").concat(e(a),'", and equal to:\n').concat(JSON.stringify(a,null,4)));if(!A(u)||!x(u)||x(u)&&!u.length||x(u)&&1===u.length&&W(u[0])&&0===u[0].trim().length){if("function"==typeof l.cb){var m,d=i;if("matchRight"===t&&I(n[i])&&R(n[i+1])&&(d+=1),"matchLeftIncl"!==t&&"matchRight"!==t||(d+=1),t.startsWith("matchLeft")){for(var p=d;p--;)if(!R(n[p])||!I(n[p-1])){var y=n[p];if(I(n[p])&&R(n[p+1])&&(y=n[p]+n[p+1]),(!l.trimBeforeMatching||l.trimBeforeMatching&&void 0!==y&&""!==y.trim())&&(0===l.trimCharsBeforeMatching.length||void 0!==y&&!l.trimCharsBeforeMatching.includes(y))){m=p;break}R(n[p-1])&&I(n[p-2])&&(p-=1)}}else if(t.startsWith("matchRight"))for(var b=d;b<n.length;b++){var v=n[b];if(I(n[b])&&R(n[b+1])&&(v=n[b]+n[b+1]),(!l.trimBeforeMatching||l.trimBeforeMatching&&""!==v.trim())&&(0===l.trimCharsBeforeMatching.length||!l.trimCharsBeforeMatching.includes(v))){m=b;break}I(n[b])&&R(n[b+1])&&(b+=1)}if(void 0===m)return!1;var w=n[m];I(n[m])&&R(n[m+1])&&(w=n[m]+n[m+1]),R(n[m])&&I(n[m-1])&&(w=n[m-1]+n[m],m-=1);var O,C=m+1;return I(n[m])&&R(n[m+1])&&(C+=1),C&&C>0&&(O=n.slice(0,C)),t.startsWith("matchLeft")?l.cb(w,O,m):(m&&m>0&&(O=n.slice(m)),l.cb(w,O,m))}var j="";throw A(a)||(j=" More so, the whole options object, the fourth input argument, is missing!"),new Error("string-match-left-right/".concat(t,'(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!').concat(j))}if(t.startsWith("matchLeft")){for(var L=0,M=u.length;L<M;L++){s="function"==typeof u[L];var B=u[L],E=i;"matchLeft"===t&&(H(n[L-1])&&H(n[L-2])?E-=2:E-=1);var S=N(n,E,B,l,s);if(S&&s&&"function"==typeof B&&"EOL"===B())return!(!B()||l.cb&&!l.cb(Z,k,T))&&B();var T=void 0,Z=void 0,k="";if(A(S)&&S>0&&(Z=n[T=S-1],k=n.slice(0,S)),R(n[T])&&A(n[T-1])&&I(n[T-1])&&(Z=n[(T-=1)-1]+n[T]),I(n[T])&&A(n[T+1])&&R(n[T+1])&&(Z=n[T]+n[T+1],k=n.slice(0,T+2)),!1!==S&&(!l.cb||l.cb(Z,k,T)))return B}return!1}for(var F=0,P=u.length;F<P;F++){s="function"==typeof u[F];var q=u[F],J=i+("matchRight"===t?1:0);"matchRight"===t&&I(n[J-1])&&R(n[J])&&(J+=1);var $=D(n,J,q,l,s);if($&&s&&"function"==typeof q&&"EOL"===q()){return!(!q()||l.cb&&!l.cb(void 0,void 0,void 0))&&q()}var G=void 0,U=void 0;A($)&&A(n[$+q.length-1])&&(U=n[G=$+q.length],I(n[G])&&R(n[G+1])&&(U=n[G]+n[G+1]));var z=void 0;if(A(G)&&G>=0&&(z=n.slice(G)),!1!==$&&(!l.cb||l.cb(U,z,G)))return q}return!1}t.matchLeft=function(t,e,r,n){return Z("matchLeft",t,e,r,n)},t.matchLeftIncl=function(t,e,r,n){return Z("matchLeftIncl",t,e,r,n)},t.matchRight=function(t,e,r,n){return Z("matchRight",t,e,r,n)},t.matchRightIncl=function(t,e,r,n){return Z("matchRightIncl",t,e,r,n)},Object.defineProperty(t,"__esModule",{value:!0})});
