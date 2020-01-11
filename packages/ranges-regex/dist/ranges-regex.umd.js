/**
 * ranges-regex
 * Perform a regex search on string and get a ranges array of findings (or null)
 * Version: 2.0.43
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ranges-regex
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).rangesRegex=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}
/*!
   * is-natural-number.js | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number.js
  */var e=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1};const r=Array.isArray;function n(t,n){if(!r(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const o=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},n);let i,a;if(o.strictlyTwoElementsInRangeArrays&&!t.every((t,e)=>2===t.length||(i=e,a=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${i}th range (${JSON.stringify(t[i],null,4)}) has not two but ${a} elements!`);if(!t.every((t,r)=>!(!e(t[0],{includeZero:!0})||!e(t[1],{includeZero:!0}))||(i=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${i}th range (${JSON.stringify(t[i],null,4)}) does not consist of only natural numbers!`);const u=t.length*t.length;let c=0;return Array.from(t).sort((t,e)=>(o.progressFn&&(c++,o.progressFn(Math.floor(100*c/u))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1))}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(t,e){return t(e={exports:{}},e.exports),e.exports}var a=i((function(t,e){var r="[object Arguments]",n="[object Function]",i="[object GeneratorFunction]",a="[object Map]",u="[object Set]",c=/\w*$/,s=/^\[object .+?Constructor\]$/,f=/^(?:0|[1-9]\d*)$/,l={};l[r]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[a]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[u]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[n]=l["[object WeakMap]"]=!1;var p="object"==typeof o&&o&&o.Object===Object&&o,y="object"==typeof self&&self&&self.Object===Object&&self,g=p||y||Function("return this")(),h=e&&!e.nodeType&&e,b=h&&t&&!t.nodeType&&t,_=b&&b.exports===h;function d(t,e){return t.set(e[0],e[1]),t}function j(t,e){return t.add(e),t}function v(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function m(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function w(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function T(t,e){return function(r){return t(e(r))}}function O(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var x,A=Array.prototype,S=Function.prototype,E=Object.prototype,I=g["__core-js_shared__"],F=(x=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+x:"",R=S.toString,$=E.hasOwnProperty,D=E.toString,W=RegExp("^"+R.call($).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),H=_?g.Buffer:void 0,N=g.Symbol,M=g.Uint8Array,J=T(Object.getPrototypeOf,Object),P=Object.create,U=E.propertyIsEnumerable,k=A.splice,B=Object.getOwnPropertySymbols,C=H?H.isBuffer:void 0,Z=T(Object.keys,Object),q=bt(g,"DataView"),V=bt(g,"Map"),z=bt(g,"Promise"),L=bt(g,"Set"),G=bt(g,"WeakMap"),K=bt(Object,"create"),Q=mt(q),X=mt(V),Y=mt(z),tt=mt(L),et=mt(G),rt=N?N.prototype:void 0,nt=rt?rt.valueOf:void 0;function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ut(t){this.__data__=new it(t)}function ct(t,e){var n=Tt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ot(t)}(t)&&$.call(t,"callee")&&(!U.call(t,"callee")||D.call(t)==r)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=n.length,i=!!o;for(var a in t)!e&&!$.call(t,a)||i&&("length"==a||jt(a,o))||n.push(a);return n}function st(t,e,r){var n=t[e];$.call(t,e)&&wt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function ft(t,e){for(var r=t.length;r--;)if(wt(t[r][0],e))return r;return-1}function lt(t,e,o,s,f,p,y){var g;if(s&&(g=p?s(t,f,p,y):s(t)),void 0!==g)return g;if(!St(t))return t;var h=Tt(t);if(h){if(g=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&$.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,g)}else{var b=dt(t),_=b==n||b==i;if(xt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==b||b==r||_&&!p){if(m(t))return p?t:{};if(g=function(t){return"function"!=typeof t.constructor||vt(t)?{}:(e=J(t),St(e)?P(e):{});var e}(_?{}:t),!e)return function(t,e){return gt(t,_t(t),e)}(t,function(t,e){return t&&gt(e,Et(e),t)}(g,t))}else{if(!l[b])return p?t:{};g=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return yt(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?yt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?yt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case a:return function(t,e,r){return v(e?r(w(t),!0):w(t),d,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,c.exec(t));return e.lastIndex=t.lastIndex,e}(t);case u:return function(t,e,r){return v(e?r(O(t),!0):O(t),j,new t.constructor)}(t,n,r);case"[object Symbol]":return i=t,nt?Object(nt.call(i)):{}}var i}(t,b,lt,e)}}y||(y=new ut);var T=y.get(t);if(T)return T;if(y.set(t,g),!h)var x=o?function(t){return function(t,e,r){var n=e(t);return Tt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Et,_t)}(t):Et(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(x||t,(function(r,n){x&&(r=t[n=r]),st(g,n,lt(r,e,o,s,n,t,y))})),g}function pt(t){return!(!St(t)||(e=t,F&&F in e))&&(At(t)||m(t)?W:s).test(mt(t));var e}function yt(t){var e=new t.constructor(t.byteLength);return new M(e).set(new M(t)),e}function gt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],u=n?n(r[a],t[a],a,r,t):void 0;st(r,a,void 0===u?t[a]:u)}return r}function ht(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function bt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return pt(r)?r:void 0}ot.prototype.clear=function(){this.__data__=K?K(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var e=this.__data__;if(K){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return $.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return K?void 0!==e[t]:$.call(e,t)},ot.prototype.set=function(t,e){return this.__data__[t]=K&&void 0===e?"__lodash_hash_undefined__":e,this},it.prototype.clear=function(){this.__data__=[]},it.prototype.delete=function(t){var e=this.__data__,r=ft(e,t);return!(r<0)&&(r==e.length-1?e.pop():k.call(e,r,1),!0)},it.prototype.get=function(t){var e=this.__data__,r=ft(e,t);return r<0?void 0:e[r][1]},it.prototype.has=function(t){return ft(this.__data__,t)>-1},it.prototype.set=function(t,e){var r=this.__data__,n=ft(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},at.prototype.clear=function(){this.__data__={hash:new ot,map:new(V||it),string:new ot}},at.prototype.delete=function(t){return ht(this,t).delete(t)},at.prototype.get=function(t){return ht(this,t).get(t)},at.prototype.has=function(t){return ht(this,t).has(t)},at.prototype.set=function(t,e){return ht(this,t).set(t,e),this},ut.prototype.clear=function(){this.__data__=new it},ut.prototype.delete=function(t){return this.__data__.delete(t)},ut.prototype.get=function(t){return this.__data__.get(t)},ut.prototype.has=function(t){return this.__data__.has(t)},ut.prototype.set=function(t,e){var r=this.__data__;if(r instanceof it){var n=r.__data__;if(!V||n.length<199)return n.push([t,e]),this;r=this.__data__=new at(n)}return r.set(t,e),this};var _t=B?T(B,Object):function(){return[]},dt=function(t){return D.call(t)};function jt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||f.test(t))&&t>-1&&t%1==0&&t<e}function vt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||E)}function mt(t){if(null!=t){try{return R.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function wt(t,e){return t===e||t!=t&&e!=e}(q&&"[object DataView]"!=dt(new q(new ArrayBuffer(1)))||V&&dt(new V)!=a||z&&"[object Promise]"!=dt(z.resolve())||L&&dt(new L)!=u||G&&"[object WeakMap]"!=dt(new G))&&(dt=function(t){var e=D.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?mt(r):void 0;if(n)switch(n){case Q:return"[object DataView]";case X:return a;case Y:return"[object Promise]";case tt:return u;case et:return"[object WeakMap]"}return e});var Tt=Array.isArray;function Ot(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!At(t)}var xt=C||function(){return!1};function At(t){var e=St(t)?D.call(t):"";return e==n||e==i}function St(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Et(t){return Ot(t)?ct(t):function(t){if(!vt(t))return Z(t);var e=[];for(var r in Object(t))$.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return lt(t,!0,!0)}}));var u,c,s=Function.prototype,f=Object.prototype,l=s.toString,p=f.hasOwnProperty,y=l.call(Object),g=f.toString,h=(u=Object.getPrototypeOf,c=Object,function(t){return u(c(t))});var b=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=g.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=h(t);if(null===e)return!0;var r=p.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&l.call(r)==y};var _=i((function(t,e){var r="object"==typeof o&&o&&o.Object===Object&&o,n=e&&!e.nodeType&&e,i=n&&t&&!t.nodeType&&t,a=i&&i.exports===n&&r.process,u=function(){try{return a&&a.binding("util")}catch(t){}}(),c=u&&u.isRegExp;var s=Object.prototype.toString;var f=c?function(t){return function(e){return t(e)}}(c):function(t){return function(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}(t)&&"[object RegExp]"==s.call(t)};t.exports=f}));return function(e,r,o){if(void 0===e)throw new TypeError("ranges-regex: [THROW_ID_01] The first input's argument must be a regex object! Currently it is missing!");if(!_(e))throw new TypeError("ranges-regex: [THROW_ID_02] The first input's argument must be a regex object! Currently its type is: ".concat(t(e),", equal to: ").concat(JSON.stringify(e,null,4)));if("string"!=typeof r)throw new TypeError("ranges-regex: [THROW_ID_03] The second input's argument must be a string! Currently its type is: ".concat(t(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(null!=o&&"string"!=typeof o)throw new TypeError("ranges-regex: [THROW_ID_04] The third input's argument must be a string or null! Currently its type is: ".concat(t(o),", equal to: ").concat(JSON.stringify(o,null,4)));if(0===r.length)return null;var i,u=[];if(null===o||"string"==typeof o&&o.length>0)for(;null!==(i=e.exec(r));)u.push([e.lastIndex-i[0].length,e.lastIndex,o]);else for(;null!==(i=e.exec(r));)u.push([e.lastIndex-i[0].length,e.lastIndex]);return u.length?function(t,e){function r(t){return"string"==typeof t}if(!Array.isArray(t))return t;const o={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let i;if(e){if(!b(e))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(e,null,4)} (type ${typeof e})`);if(i=Object.assign({},o,e),i.progressFn&&b(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof i.progressFn}", equal to ${JSON.stringify(i.progressFn,null,4)}`);if(i.mergeType&&1!==i.mergeType&&2!==i.mergeType)if(r(i.mergeType)&&"1"===i.mergeType.trim())i.mergeType=1;else{if(!r(i.mergeType)||"2"!==i.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof i.mergeType}", equal to ${JSON.stringify(i.mergeType,null,4)}`);i.mergeType=2}if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof i.joinRangesThatTouchEdges}", equal to ${JSON.stringify(i.joinRangesThatTouchEdges,null,4)}`)}else i=a(o);const u=a(t).filter(t=>void 0!==t[2]||t[0]!==t[1]);let c,s,f;c=i.progressFn?n(u,{progressFn:t=>{f=Math.floor(t/5),f!==s&&(s=f,i.progressFn(f))}}):n(u);const l=c.length-1;for(let t=l;t>0;t--)i.progressFn&&(f=Math.floor(78*(1-t/l))+21,f!==s&&f>s&&(s=f,i.progressFn(f))),(c[t][0]<=c[t-1][0]||!i.joinRangesThatTouchEdges&&c[t][0]<c[t-1][1]||i.joinRangesThatTouchEdges&&c[t][0]<=c[t-1][1])&&(c[t-1][0]=Math.min(c[t][0],c[t-1][0]),c[t-1][1]=Math.max(c[t][1],c[t-1][1]),void 0!==c[t][2]&&(c[t-1][0]>=c[t][0]||c[t-1][1]<=c[t][1])&&null!==c[t-1][2]&&(null===c[t][2]&&null!==c[t-1][2]?c[t-1][2]=null:void 0!==c[t-1][2]?2===i.mergeType&&c[t-1][0]===c[t][0]?c[t-1][2]=c[t][2]:c[t-1][2]+=c[t][2]:c[t-1][2]=c[t][2]),c.splice(t,1),t=c.length);return c}(u):null}}));
