/**
 * string-remove-thousand-separators
 * Detects and removes thousand separators (dot/comma/quote/space) from string-type digits
 * Version: 3.0.46
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-remove-thousand-separators
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).stringRemoveThousandSeparators=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}
/*!
   * is-natural-number-string | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number-string
  */var t=function(e,t){if("string"!=typeof e)return!1;if(t&&"includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(e)}return/^[1-9]\d*(\.0+)?$/.test(e)},r=function(e,t){if(t){if("object"!=typeof t)throw new TypeError(String(t)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero&&0===e)return!0}}return Number.isSafeInteger(e)&&e>=1};
/*!
   * is-natural-number.js | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number.js
  */const n=Array.isArray;function o(e,t){if(!n(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const o=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},t);let i,s;if(o.strictlyTwoElementsInRangeArrays&&!e.every((e,t)=>2===e.length||(i=t,s=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${i}th range (${JSON.stringify(e[i],null,4)}) has not two but ${s} elements!`);if(!e.every((e,t)=>!(!r(e[0],{includeZero:!0})||!r(e[1],{includeZero:!0}))||(i=t,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${i}th range (${JSON.stringify(e[i],null,4)}) does not consist of only natural numbers!`);const u=e.length*e.length;let a=0;return Array.from(e).sort((e,t)=>(o.progressFn&&(a++,o.progressFn(Math.floor(100*a/u))),e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1))}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function s(e,t){return e(t={exports:{}},t.exports),t.exports}var u=s((function(e,t){var r="[object Arguments]",n="[object Function]",o="[object GeneratorFunction]",s="[object Map]",u="[object Set]",a=/\w*$/,c=/^\[object .+?Constructor\]$/,f=/^(?:0|[1-9]\d*)$/,l={};l[r]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[s]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[u]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[n]=l["[object WeakMap]"]=!1;var p="object"==typeof i&&i&&i.Object===Object&&i,g="object"==typeof self&&self&&self.Object===Object&&self,h=p||g||Function("return this")(),y=t&&!t.nodeType&&t,d=y&&e&&!e.nodeType&&e,b=d&&d.exports===y;function m(e,t){return e.set(t[0],t[1]),e}function _(e,t){return e.add(t),e}function v(e,t,r,n){var o=-1,i=e?e.length:0;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function j(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function w(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function T(e,t){return function(r){return e(t(r))}}function O(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var S,$=Array.prototype,I=Function.prototype,A=Object.prototype,E=h["__core-js_shared__"],N=(S=/[^.]+$/.exec(E&&E.keys&&E.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"",R=I.toString,F=A.hasOwnProperty,D=A.toString,W=RegExp("^"+R.call(F).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),x=b?h.Buffer:void 0,H=h.Symbol,J=h.Uint8Array,Z=T(Object.getPrototypeOf,Object),k=Object.create,C=A.propertyIsEnumerable,q=$.splice,M=Object.getOwnPropertySymbols,B=x?x.isBuffer:void 0,P=T(Object.keys,Object),U=de(h,"DataView"),L=de(h,"Map"),V=de(h,"Promise"),z=de(h,"Set"),K=de(h,"WeakMap"),G=de(Object,"create"),Q=je(U),X=je(L),Y=je(V),ee=je(z),te=je(K),re=H?H.prototype:void 0,ne=re?re.valueOf:void 0;function oe(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ie(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function se(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ue(e){this.__data__=new ie(e)}function ae(e,t){var n=Te(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&Oe(e)}(e)&&F.call(e,"callee")&&(!C.call(e,"callee")||D.call(e)==r)}(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],o=n.length,i=!!o;for(var s in e)!t&&!F.call(e,s)||i&&("length"==s||_e(s,o))||n.push(s);return n}function ce(e,t,r){var n=e[t];F.call(e,t)&&we(n,r)&&(void 0!==r||t in e)||(e[t]=r)}function fe(e,t){for(var r=e.length;r--;)if(we(e[r][0],t))return r;return-1}function le(e,t,i,c,f,p,g){var h;if(c&&(h=p?c(e,f,p,g):c(e)),void 0!==h)return h;if(!Ie(e))return e;var y=Te(e);if(y){if(h=function(e){var t=e.length,r=e.constructor(t);t&&"string"==typeof e[0]&&F.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!t)return function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(e,h)}else{var d=me(e),b=d==n||d==o;if(Se(e))return function(e,t){if(t)return e.slice();var r=new e.constructor(e.length);return e.copy(r),r}(e,t);if("[object Object]"==d||d==r||b&&!p){if(j(e))return p?e:{};if(h=function(e){return"function"!=typeof e.constructor||ve(e)?{}:(t=Z(e),Ie(t)?k(t):{});var t}(b?{}:e),!t)return function(e,t){return he(e,be(e),t)}(e,function(e,t){return e&&he(t,Ae(t),e)}(h,e))}else{if(!l[d])return p?e:{};h=function(e,t,r,n){var o=e.constructor;switch(t){case"[object ArrayBuffer]":return ge(e);case"[object Boolean]":case"[object Date]":return new o(+e);case"[object DataView]":return function(e,t){var r=t?ge(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(e,t){var r=t?ge(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}(e,n);case s:return function(e,t,r){return v(t?r(w(e),!0):w(e),m,new e.constructor)}(e,n,r);case"[object Number]":case"[object String]":return new o(e);case"[object RegExp]":return function(e){var t=new e.constructor(e.source,a.exec(e));return t.lastIndex=e.lastIndex,t}(e);case u:return function(e,t,r){return v(t?r(O(e),!0):O(e),_,new e.constructor)}(e,n,r);case"[object Symbol]":return i=e,ne?Object(ne.call(i)):{}}var i}(e,d,le,t)}}g||(g=new ue);var T=g.get(e);if(T)return T;if(g.set(e,h),!y)var S=i?function(e){return function(e,t,r){var n=t(e);return Te(e)?n:function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}(n,r(e))}(e,Ae,be)}(e):Ae(e);return function(e,t){for(var r=-1,n=e?e.length:0;++r<n&&!1!==t(e[r],r,e););}(S||e,(function(r,n){S&&(r=e[n=r]),ce(h,n,le(r,t,i,c,n,e,g))})),h}function pe(e){return!(!Ie(e)||(t=e,N&&N in t))&&($e(e)||j(e)?W:c).test(je(e));var t}function ge(e){var t=new e.constructor(e.byteLength);return new J(t).set(new J(e)),t}function he(e,t,r,n){r||(r={});for(var o=-1,i=t.length;++o<i;){var s=t[o],u=n?n(r[s],e[s],s,r,e):void 0;ce(r,s,void 0===u?e[s]:u)}return r}function ye(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function de(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return pe(r)?r:void 0}oe.prototype.clear=function(){this.__data__=G?G(null):{}},oe.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},oe.prototype.get=function(e){var t=this.__data__;if(G){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return F.call(t,e)?t[e]:void 0},oe.prototype.has=function(e){var t=this.__data__;return G?void 0!==t[e]:F.call(t,e)},oe.prototype.set=function(e,t){return this.__data__[e]=G&&void 0===t?"__lodash_hash_undefined__":t,this},ie.prototype.clear=function(){this.__data__=[]},ie.prototype.delete=function(e){var t=this.__data__,r=fe(t,e);return!(r<0)&&(r==t.length-1?t.pop():q.call(t,r,1),!0)},ie.prototype.get=function(e){var t=this.__data__,r=fe(t,e);return r<0?void 0:t[r][1]},ie.prototype.has=function(e){return fe(this.__data__,e)>-1},ie.prototype.set=function(e,t){var r=this.__data__,n=fe(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},se.prototype.clear=function(){this.__data__={hash:new oe,map:new(L||ie),string:new oe}},se.prototype.delete=function(e){return ye(this,e).delete(e)},se.prototype.get=function(e){return ye(this,e).get(e)},se.prototype.has=function(e){return ye(this,e).has(e)},se.prototype.set=function(e,t){return ye(this,e).set(e,t),this},ue.prototype.clear=function(){this.__data__=new ie},ue.prototype.delete=function(e){return this.__data__.delete(e)},ue.prototype.get=function(e){return this.__data__.get(e)},ue.prototype.has=function(e){return this.__data__.has(e)},ue.prototype.set=function(e,t){var r=this.__data__;if(r instanceof ie){var n=r.__data__;if(!L||n.length<199)return n.push([e,t]),this;r=this.__data__=new se(n)}return r.set(e,t),this};var be=M?T(M,Object):function(){return[]},me=function(e){return D.call(e)};function _e(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||f.test(e))&&e>-1&&e%1==0&&e<t}function ve(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||A)}function je(e){if(null!=e){try{return R.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function we(e,t){return e===t||e!=e&&t!=t}(U&&"[object DataView]"!=me(new U(new ArrayBuffer(1)))||L&&me(new L)!=s||V&&"[object Promise]"!=me(V.resolve())||z&&me(new z)!=u||K&&"[object WeakMap]"!=me(new K))&&(me=function(e){var t=D.call(e),r="[object Object]"==t?e.constructor:void 0,n=r?je(r):void 0;if(n)switch(n){case Q:return"[object DataView]";case X:return s;case Y:return"[object Promise]";case ee:return u;case te:return"[object WeakMap]"}return t});var Te=Array.isArray;function Oe(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!$e(e)}var Se=B||function(){return!1};function $e(e){var t=Ie(e)?D.call(e):"";return t==n||t==o}function Ie(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Ae(e){return Oe(e)?ae(e):function(e){if(!ve(e))return P(e);var t=[];for(var r in Object(e))F.call(e,r)&&"constructor"!=r&&t.push(r);return t}(e)}e.exports=function(e){return le(e,!0,!0)}}));var a,c,f=Function.prototype,l=Object.prototype,p=f.toString,g=l.hasOwnProperty,h=p.call(Object),y=l.toString,d=(a=Object.getPrototypeOf,c=Object,function(e){return a(c(e))});var b=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||"[object Object]"!=y.call(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=d(e);if(null===t)return!0;var r=g.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&p.call(r)==h};function m(e,t){function r(e){return"string"==typeof e}if(!Array.isArray(e))return e;const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let i;if(t){if(!b(t))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(t,null,4)} (type ${typeof t})`);if(i=Object.assign({},n,t),i.progressFn&&b(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof i.progressFn}", equal to ${JSON.stringify(i.progressFn,null,4)}`);if(i.mergeType&&1!==i.mergeType&&2!==i.mergeType)if(r(i.mergeType)&&"1"===i.mergeType.trim())i.mergeType=1;else{if(!r(i.mergeType)||"2"!==i.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof i.mergeType}", equal to ${JSON.stringify(i.mergeType,null,4)}`);i.mergeType=2}if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof i.joinRangesThatTouchEdges}", equal to ${JSON.stringify(i.joinRangesThatTouchEdges,null,4)}`)}else i=u(n);const s=u(e).filter(e=>void 0!==e[2]||e[0]!==e[1]);let a,c,f;a=i.progressFn?o(s,{progressFn:e=>{f=Math.floor(e/5),f!==c&&(c=f,i.progressFn(f))}}):o(s);const l=a.length-1;for(let e=l;e>0;e--)i.progressFn&&(f=Math.floor(78*(1-e/l))+21,f!==c&&f>c&&(c=f,i.progressFn(f))),(a[e][0]<=a[e-1][0]||!i.joinRangesThatTouchEdges&&a[e][0]<a[e-1][1]||i.joinRangesThatTouchEdges&&a[e][0]<=a[e-1][1])&&(a[e-1][0]=Math.min(a[e][0],a[e-1][0]),a[e-1][1]=Math.max(a[e][1],a[e-1][1]),void 0!==a[e][2]&&(a[e-1][0]>=a[e][0]||a[e-1][1]<=a[e][1])&&null!==a[e-1][2]&&(null===a[e][2]&&null!==a[e-1][2]?a[e-1][2]=null:void 0!==a[e-1][2]?2===i.mergeType&&a[e-1][0]===a[e][0]?a[e-1][2]=a[e][2]:a[e-1][2]+=a[e][2]:a[e-1][2]=a[e][2]),a.splice(e,1),e=a.length);return a}const _=Array.isArray;function v(e){return null!=e}function j(e){return"string"==typeof e}function w(e,t=!0,r){if(!(r.trim().length||e.length&&"\n"!==r&&" "!==r&&" "===(t?e[e.length-1]:e[0])||e.length&&"\n"===(t?e[e.length-1]:e[0])&&"\n"!==r&&" "!==r))if(t){if(("\n"===r||" "===r)&&e.length&&" "===e[e.length-1])for(;e.length&&" "===e[e.length-1];)e.pop();e.push(" "===r||"\n"===r?r:" ")}else{if(("\n"===r||" "===r)&&e.length&&" "===e[0])for(;e.length&&" "===e[0];)e.shift();e.unshift(" "===r||"\n"===r?r:" ")}}function T(e,t){if("string"==typeof e&&e.length){let r,n,o=!1;if(e.includes("\r\n")&&(o=!0),r=t&&"number"==typeof t?t:1,""===e.trim()){const t=[];for(n=r,Array.from(e).forEach(e=>{("\n"!==e||n)&&("\n"===e&&n--,w(t,!0,e))});t.length>1&&" "===t[t.length-1];)t.pop();return t.join("")}const i=[];if(n=r,""===e[0].trim())for(let t=0,r=e.length;t<r&&0===e[t].trim().length;t++)("\n"!==e[t]||n)&&("\n"===e[t]&&n--,w(i,!0,e[t]));const s=[];if(n=r,""===e.slice(-1).trim())for(let t=e.length;t--&&0===e[t].trim().length;)("\n"!==e[t]||n)&&("\n"===e[t]&&n--,w(s,!1,e[t]));return o?`${i.join("")}${e.trim()}${s.join("")}`.replace(/\n/g,"\r\n"):i.join("")+e.trim()+s.join("")}return e}function O(e){return null!=e}const S=Array.isArray,$=Number.isInteger;function I(e){return"string"==typeof e}function A(e){return t(e,{includeZero:!0})?parseInt(e,10):e}class E{constructor(e){const t=Object.assign({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1},e);if(t.mergeType&&1!==t.mergeType&&2!==t.mergeType)if(I(t.mergeType)&&"1"===t.mergeType.trim())t.mergeType=1;else{if(!I(t.mergeType)||"2"!==t.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof t.mergeType}", equal to ${JSON.stringify(t.mergeType,null,4)}`);t.mergeType=2}this.opts=t}add(e,r,n,...o){if(o.length>0)throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ${JSON.stringify(o,null,4)}`);if(!O(e)&&!O(r))return;if(O(e)&&!O(r)){if(S(e)){if(e.length){if(e.some(e=>S(e)))return void e.forEach(e=>{S(e)&&this.add(...e)});e.length>1&&$(A(e[0]))&&$(A(e[1]))&&this.add(...e)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(e,null,0)}) but second-one, "to" is not (${JSON.stringify(r,null,0)})`)}if(!O(e)&&O(r))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(r,null,0)}) but first-one, "from" is not (${JSON.stringify(e,null,0)})`);const i=t(e,{includeZero:!0})?parseInt(e,10):e,s=t(r,{includeZero:!0})?parseInt(r,10):r;if($(n)&&(n=String(n)),!$(i)||!$(s))throw $(i)&&i>=0?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof s}" equal to: ${JSON.stringify(s,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof i}" equal to: ${JSON.stringify(i,null,4)}`);if(O(n)&&!I(n)&&!$(n))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof n}, equal to:\n${JSON.stringify(n,null,4)}`);if(O(this.slices)&&S(this.last())&&i===this.last()[1]){if(this.last()[1]=s,this.last()[2],null!==this.last()[2]&&O(n)){let e=!(O(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?n:this.last()[2]+n;this.opts.limitToBeAddedWhitespace&&(e=T(e,this.opts.limitLinebreaksCount)),I(e)&&!e.length||(this.last()[2]=e)}}else{this.slices||(this.slices=[]);const e=void 0===n||I(n)&&!n.length?[i,s]:[i,s,this.opts.limitToBeAddedWhitespace?T(n,this.opts.limitLinebreaksCount):n];this.slices.push(e)}}push(e,t,r,...n){this.add(e,t,r,...n)}current(){return null!=this.slices?(this.slices=m(this.slices,{mergeType:this.opts.mergeType}),this.opts.limitToBeAddedWhitespace?this.slices.map(e=>O(e[2])?[e[0],e[1],T(e[2],this.opts.limitLinebreaksCount)]:e):this.slices):null}wipe(){this.slices=void 0}replace(e){if(S(e)&&e.length){if(!S(e[0])||!$(e[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(e[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.slices=u(e)}else this.slices=void 0}last(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}var N=s((function(e,t){!function(r){function n(e,t){return t instanceof Object||(t={trim:!0}),"number"==typeof e&&!isNaN(e)||(e=(e||"").toString(),"trim"in t&&!t.trim?!/\s/.test(e):!!(e=e.trim())&&!isNaN(e))}e.exports&&(t=e.exports=n),t.isNumeric=n}()})),R=(N.isNumeric,/^\s+|\s+$/g),F="[\\ud800-\\udfff]",D="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",W="\\ud83c[\\udffb-\\udfff]",x="[^\\ud800-\\udfff]",H="(?:\\ud83c[\\udde6-\\uddff]){2}",J="[\\ud800-\\udbff][\\udc00-\\udfff]",Z="(?:"+D+"|"+W+")"+"?",k="[\\ufe0e\\ufe0f]?"+Z+("(?:\\u200d(?:"+[x,H,J].join("|")+")[\\ufe0e\\ufe0f]?"+Z+")*"),C="(?:"+[x+D+"?",D,H,J,F].join("|")+")",q=RegExp(W+"(?="+W+")|"+C+k,"g"),M=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),B="object"==typeof i&&i&&i.Object===Object&&i,P="object"==typeof self&&self&&self.Object===Object&&self,U=B||P||Function("return this")();function L(e,t,r){if(t!=t)return function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,V,r);for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}function V(e){return e!=e}function z(e){return function(e){return M.test(e)}(e)?function(e){return e.match(q)||[]}(e):function(e){return e.split("")}(e)}var K=Object.prototype.toString,G=U.Symbol,Q=G?G.prototype:void 0,X=Q?Q.toString:void 0;function Y(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==K.call(e)}(e))return X?X.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function ee(e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&r>=n?e:function(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=Array(o);++n<o;)i[n]=e[n+t];return i}(e,t,r)}var te=function(e,t,r){var n;if((e=null==(n=e)?"":Y(n))&&(r||void 0===t))return e.replace(R,"");if(!e||!(t=Y(t)))return e;var o=z(e),i=z(t);return ee(o,function(e,t){for(var r=-1,n=e.length;++r<n&&L(t,e[r],0)>-1;);return r}(o,i),function(e,t){for(var r=e.length;r--&&L(t,e[r],0)>-1;);return r}(o,i)+1).join("")};return function(r,n){var o,i=!0,s=[".",",","'"," "];if("string"!=typeof r)throw new TypeError("string-remove-thousand-separators/remSep(): [THROW_ID_01] Input must be string! Currently it's: ".concat(e(r),", equal to:\n").concat(JSON.stringify(r,null,4)));if(null!=n&&!b(n))throw new TypeError("string-remove-thousand-separators/remSep(): [THROW_ID_02] Options object must be a plain object! Currently it's: ".concat(e(n),", equal to:\n").concat(JSON.stringify(n,null,4)));var u=Object.assign({},{removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1},n),a=te(r.trim(),'"');if(""===a)return a;for(var c=new E,f=0,l=a.length;f<l;f++){if(u.removeThousandSeparatorsFromNumbers&&""===a[f].trim()&&c.add(f,f+1),u.removeThousandSeparatorsFromNumbers&&"'"===a[f]&&(c.add(f,f+1),"'"===a[f+1])){i=!1;break}if(s.includes(a[f])){if(void 0!==a[f+1]&&N(a[f+1]))if(void 0!==a[f+2]){if(!N(a[f+2])){i=!1;break}if(void 0!==a[f+3]){if(!N(a[f+3])){i=!1;break}if(void 0!==a[f+4]&&N(a[f+4])){i=!1;break}if(u.removeThousandSeparatorsFromNumbers&&c.add(f,f+1),o){if(a[f]!==o){i=!1;break}}else o=a[f]}else u.removeThousandSeparatorsFromNumbers&&u.forceUKStyle&&","===a[f]&&c.add(f,f+1,".")}else u.forceUKStyle&&","===a[f]&&c.add(f,f+1,"."),u.padSingleDecimalPlaceNumbers&&c.add(f+2,f+2,"0")}else if(!N(a[f])){i=!1;break}}return i&&c.current()?function(e,r,n){let o=0,i=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!j(e))throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(null===r)return e;if(!_(r))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(n&&"function"!=typeof n)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof n}, equal to: ${JSON.stringify(n,null,4)}`);_(r)&&(Number.isInteger(r[0],{includeZero:!0})||t(r[0],{includeZero:!0}))&&(Number.isInteger(r[1],{includeZero:!0})||t(r[1],{includeZero:!0}))&&(r=[r]);const s=r.length;let u=0;r.forEach((e,a)=>{if(n&&(o=Math.floor(u/s*10),o!==i&&(i=o,n(o))),!_(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${a}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!Number.isInteger(e[0],{includeZero:!0})){if(!t(e[0],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${a}th element, array [${e[0]},${e[1]}]. That array has first element not an integer, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}. Computer doesn't like this.`);r[a][0]=Number.parseInt(r[a][0],10)}if(!Number.isInteger(e[1],{includeZero:!0})){if(!t(e[1],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${a}th element, array [${e[0]},${e[1]}]. That array has second element not an integer, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}. Computer doesn't like this.`);r[a][1]=Number.parseInt(r[a][1],10)}u++});const a=m(r,{progressFn:e=>{n&&(o=10+Math.floor(e/10),o!==i&&(i=o,n(o)))}}),c=a.length;if(c>0){const t=e.slice(a[c-1][1]);e=a.reduce((t,r,s,u)=>{n&&(o=20+Math.floor(s/c*80),o!==i&&(i=o,n(o)));const a=0===s?0:u[s-1][1],f=u[s][0];return t+e.slice(a,f)+(v(u[s][2])?u[s][2]:"")},""),e+=t}return e}(a,c.current()):a}}));
