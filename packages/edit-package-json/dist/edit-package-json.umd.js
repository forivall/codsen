/**
 * @name edit-package-json
 * @fileoverview Edit package.json without parsing, as string, to keep the formatting intact
 * @version 0.3.15
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/edit-package-json/}
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).editPackageJson={})}(this,(function(t){"use strict";var e,n,r=Object.prototype,o=Function.prototype.toString,i=r.hasOwnProperty,u=o.call(Object),l=r.toString,s=(e=Object.getPrototypeOf,n=Object,function(t){return e(n(t))});var f=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=l.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=s(t);if(null===e)return!0;var n=i.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&o.call(n)==u},a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var c=function(t){var e={exports:{}};return t(e,e.exports),e.exports}((function(t,e){var n="__lodash_hash_undefined__",r=9007199254740991,o="[object Arguments]",i="[object Boolean]",u="[object Date]",l="[object Function]",s="[object GeneratorFunction]",f="[object Map]",c="[object Number]",g="[object Object]",p="[object Promise]",y="[object RegExp]",h="[object Set]",d="[object String]",m="[object Symbol]",b="[object WeakMap]",_="[object ArrayBuffer]",v="[object DataView]",w="[object Float32Array]",O="[object Float64Array]",j="[object Int8Array]",N="[object Int16Array]",S="[object Int32Array]",T="[object Uint8Array]",A="[object Uint8ClampedArray]",$="[object Uint16Array]",I="[object Uint32Array]",J=/\w*$/,E=/^\[object .+?Constructor\]$/,R=/^(?:0|[1-9]\d*)$/,x={};x[o]=x["[object Array]"]=x[_]=x[v]=x[i]=x[u]=x[w]=x[O]=x[j]=x[N]=x[S]=x[f]=x[c]=x[g]=x[y]=x[h]=x[d]=x[m]=x[T]=x[A]=x[$]=x[I]=!0,x["[object Error]"]=x[l]=x[b]=!1;var W="object"==typeof self&&self&&self.Object===Object&&self,F="object"==typeof a&&a&&a.Object===Object&&a||W||Function("return this")(),D=e&&!e.nodeType&&e,H=D&&t&&!t.nodeType&&t,C=H&&H.exports===D;function M(t,e){return t.set(e[0],e[1]),t}function P(t,e){return t.add(e),t}function k(t,e,n,r){var o=-1,i=t?t.length:0;for(r&&i&&(n=t[++o]);++o<i;)n=e(n,t[o],o,t);return n}function q(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function L(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function B(t,e){return function(n){return t(e(n))}}function U(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var z,V=Array.prototype,G=Function.prototype,K=Object.prototype,Q=F["__core-js_shared__"],X=(z=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"",Y=G.toString,Z=K.hasOwnProperty,tt=K.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nt=C?F.Buffer:void 0,rt=F.Symbol,ot=F.Uint8Array,it=B(Object.getPrototypeOf,Object),ut=Object.create,lt=K.propertyIsEnumerable,st=V.splice,ft=Object.getOwnPropertySymbols,at=nt?nt.isBuffer:void 0,ct=B(Object.keys,Object),gt=Ht(F,"DataView"),pt=Ht(F,"Map"),yt=Ht(F,"Promise"),ht=Ht(F,"Set"),dt=Ht(F,"WeakMap"),mt=Ht(Object,"create"),bt=qt(gt),_t=qt(pt),vt=qt(yt),wt=qt(ht),Ot=qt(dt),jt=rt?rt.prototype:void 0,Nt=jt?jt.valueOf:void 0;function St(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Tt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function At(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function $t(t){this.__data__=new Tt(t)}function It(t,e){var n=Bt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ut(t)}(t)&&Z.call(t,"callee")&&(!lt.call(t,"callee")||tt.call(t)==o)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,i=!!r;for(var u in t)!e&&!Z.call(t,u)||i&&("length"==u||Pt(u,r))||n.push(u);return n}function Jt(t,e,n){var r=t[e];Z.call(t,e)&&Lt(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function Et(t,e){for(var n=t.length;n--;)if(Lt(t[n][0],e))return n;return-1}function Rt(t,e,n,r,a,p,b){var E;if(r&&(E=p?r(t,a,p,b):r(t)),void 0!==E)return E;if(!Gt(t))return t;var R=Bt(t);if(R){if(E=function(t){var e=t.length,n=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!e)return function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(t,E)}else{var W=Mt(t),F=W==l||W==s;if(zt(t))return function(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,e);if(W==g||W==o||F&&!p){if(q(t))return p?t:{};if(E=function(t){return"function"!=typeof t.constructor||kt(t)?{}:(e=it(t),Gt(e)?ut(e):{});var e}(F?{}:t),!e)return function(t,e){return Ft(t,Ct(t),e)}(t,function(t,e){return t&&Ft(e,Kt(e),t)}(E,t))}else{if(!x[W])return p?t:{};E=function(t,e,n,r){var o=t.constructor;switch(e){case _:return Wt(t);case i:case u:return new o(+t);case v:return function(t,e){var n=e?Wt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,r);case w:case O:case j:case N:case S:case T:case A:case $:case I:return function(t,e){var n=e?Wt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,r);case f:return function(t,e,n){return k(e?n(L(t),!0):L(t),M,new t.constructor)}(t,r,n);case c:case d:return new o(t);case y:return function(t){var e=new t.constructor(t.source,J.exec(t));return e.lastIndex=t.lastIndex,e}(t);case h:return function(t,e,n){return k(e?n(U(t),!0):U(t),P,new t.constructor)}(t,r,n);case m:return l=t,Nt?Object(Nt.call(l)):{}}var l}(t,W,Rt,e)}}b||(b=new $t);var D=b.get(t);if(D)return D;if(b.set(t,E),!R)var H=n?function(t){return function(t,e,n){var r=e(t);return Bt(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,Kt,Ct)}(t):Kt(t);return function(t,e){for(var n=-1,r=t?t.length:0;++n<r&&!1!==e(t[n],n,t););}(H||t,(function(o,i){H&&(o=t[i=o]),Jt(E,i,Rt(o,e,n,r,i,t,b))})),E}function xt(t){return!(!Gt(t)||function(t){return!!X&&X in t}(t))&&(Vt(t)||q(t)?et:E).test(qt(t))}function Wt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Ft(t,e,n,r){n||(n={});for(var o=-1,i=e.length;++o<i;){var u=e[o],l=r?r(n[u],t[u],u,n,t):void 0;Jt(n,u,void 0===l?t[u]:l)}return n}function Dt(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function Ht(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return xt(n)?n:void 0}St.prototype.clear=function(){this.__data__=mt?mt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var e=this.__data__;if(mt){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},St.prototype.has=function(t){var e=this.__data__;return mt?void 0!==e[t]:Z.call(e,t)},St.prototype.set=function(t,e){return this.__data__[t]=mt&&void 0===e?n:e,this},Tt.prototype.clear=function(){this.__data__=[]},Tt.prototype.delete=function(t){var e=this.__data__,n=Et(e,t);return!(n<0)&&(n==e.length-1?e.pop():st.call(e,n,1),!0)},Tt.prototype.get=function(t){var e=this.__data__,n=Et(e,t);return n<0?void 0:e[n][1]},Tt.prototype.has=function(t){return Et(this.__data__,t)>-1},Tt.prototype.set=function(t,e){var n=this.__data__,r=Et(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},At.prototype.clear=function(){this.__data__={hash:new St,map:new(pt||Tt),string:new St}},At.prototype.delete=function(t){return Dt(this,t).delete(t)},At.prototype.get=function(t){return Dt(this,t).get(t)},At.prototype.has=function(t){return Dt(this,t).has(t)},At.prototype.set=function(t,e){return Dt(this,t).set(t,e),this},$t.prototype.clear=function(){this.__data__=new Tt},$t.prototype.delete=function(t){return this.__data__.delete(t)},$t.prototype.get=function(t){return this.__data__.get(t)},$t.prototype.has=function(t){return this.__data__.has(t)},$t.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Tt){var r=n.__data__;if(!pt||r.length<199)return r.push([t,e]),this;n=this.__data__=new At(r)}return n.set(t,e),this};var Ct=ft?B(ft,Object):function(){return[]},Mt=function(t){return tt.call(t)};function Pt(t,e){return!!(e=null==e?r:e)&&("number"==typeof t||R.test(t))&&t>-1&&t%1==0&&t<e}function kt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||K)}function qt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Lt(t,e){return t===e||t!=t&&e!=e}(gt&&Mt(new gt(new ArrayBuffer(1)))!=v||pt&&Mt(new pt)!=f||yt&&Mt(yt.resolve())!=p||ht&&Mt(new ht)!=h||dt&&Mt(new dt)!=b)&&(Mt=function(t){var e=tt.call(t),n=e==g?t.constructor:void 0,r=n?qt(n):void 0;if(r)switch(r){case bt:return v;case _t:return f;case vt:return p;case wt:return h;case Ot:return b}return e});var Bt=Array.isArray;function Ut(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}(t.length)&&!Vt(t)}var zt=at||function(){return!1};function Vt(t){var e=Gt(t)?tt.call(t):"";return e==l||e==s}function Gt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Kt(t){return Ut(t)?It(t):function(t){if(!kt(t))return ct(t);var e=[];for(var n in Object(t))Z.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}t.exports=function(t){return Rt(t,!0,!0)}}));
/**
 * @name string-left-right
 * @fileoverview Looks up the first non-whitespace character to the left/right of a given index
 * @version 4.0.15
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-left-right/}
 */const g=" ";function p(t){const e={value:t,hungry:!1,optional:!1};return(e.value.endsWith("?*")||e.value.endsWith("*?"))&&e.value.length>2?(e.value=e.value.slice(0,e.value.length-2),e.optional=!0,e.hungry=!0):e.value.endsWith("?")&&e.value.length>1?(e.value=e.value.slice(0,~-e.value.length),e.optional=!0):e.value.endsWith("*")&&e.value.length>1&&(e.value=e.value.slice(0,~-e.value.length),e.hungry=!0),e}function y(t){return"string"==typeof t}function h(t,e=0){return function({str:t,idx:e=0,stopAtNewlines:n=!1,stopAtRawNbsp:r=!1}){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),!t[e+1])return null;if(t[e+1]&&(t[e+1].trim()||n&&"\n\r".includes(t[e+1])||r&&t[e+1]===g))return e+1;if(t[e+2]&&(t[e+2].trim()||n&&"\n\r".includes(t[e+2])||r&&t[e+2]===g))return e+2;for(let o=e+1,i=t.length;o<i;o++)if(t[o].trim()||n&&"\n\r".includes(t[o])||r&&t[o]===g)return o;return null}({str:t,idx:e,stopAtNewlines:!1,stopAtRawNbsp:!1})}function d(t,e=0){return function({str:t,idx:e,stopAtNewlines:n,stopAtRawNbsp:r}){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),e<1)return null;if(t[~-e]&&(t[~-e].trim()||n&&"\n\r".includes(t[~-e])||r&&t[~-e]===g))return~-e;if(t[e-2]&&(t[e-2].trim()||n&&"\n\r".includes(t[e-2])||r&&t[e-2]===g))return e-2;for(let o=e;o--;)if(t[o]&&(t[o].trim()||n&&"\n\r".includes(t[o])||r&&t[o]===g))return o;return null}({str:t,idx:e,stopAtNewlines:!1,stopAtRawNbsp:!1})}function m(t,e,n,r,o){if("string"!=typeof e||!e.length)return null;if("number"!=typeof n&&(n=0),"right"===t&&!e[n+1]||"left"===t&&!e[~-n])return null;let i=n;const u=[];let l,s,f,a=0;for(;a<o.length;){if(!y(o[a])||!o[a].length){a+=1;continue}const{value:n,optional:c,hungry:g}=p(o[a]),m="right"===t?h(e,i):d(e,i);if(!(r.i&&e[m].toLowerCase()===n.toLowerCase()||!r.i&&e[m]===n)){if(c){a+=1;continue}if(f){a+=1,f=void 0;continue}return null}{const o="right"===t?h(e,m):d(e,m);g&&(r.i&&e[o].toLowerCase()===n.toLowerCase()||!r.i&&e[o]===n)?f=!0:a+=1,"number"==typeof m&&"right"===t&&m>i+1?u.push([i+1,m]):"left"===t&&"number"==typeof m&&m<~-i&&u.unshift([m+1,i]),i=m,"right"===t?(void 0===l&&(l=m),s=m):(void 0===s&&(s=m),l=m)}}return void 0===l||void 0===s?null:{gaps:u,leftmostChar:l,rightmostChar:s}}const b={i:!1};function _(t,e,...n){if(!n||!n.length)throw new Error("string-left-right/leftSeq(): only two input arguments were passed! Did you intend to use left() method instead?");let r;return r=f(n[0])?{...b,...n.shift()}:b,m("left",t,e,r,Array.from(n).reverse())}function v(t,e,...n){if(!n||!n.length)throw new Error("string-left-right/rightSeq(): only two input arguments were passed! Did you intend to use right() method instead?");let r;return r=f(n[0])?{...b,...n.shift()}:b,m("right",t,e,r,n)}function w(t,e,n,r,o=[]){if("string"!=typeof e||!e.length)return null;if(n&&"number"==typeof n||(n=0),"right"===t&&!e[n+1]||"left"===t&&0==+n)return null;let i=null,u=null;do{i="right"===t?v(e,"number"==typeof u?u:n,...o):_(e,"number"==typeof u?u:n,...o),null!==i&&(u="right"===t?i.rightmostChar:i.leftmostChar)}while(i);if(null!=u&&"right"===t&&(u+=1),null===u)return null;if("right"===t){if(e[u]&&e[u].trim())return u;const t=h(e,u);if(r&&0!==r.mode){if(1===r.mode)return u;if(2===r.mode){const t=e.slice(u);if(t.trim()||t.includes("\n")||t.includes("\r"))for(let t=u,n=e.length;t<n;t++)if(e[t].trim()||"\n\r".includes(e[t]))return t;return e.length}}else{if(t===u+1)return u;if(!(e.slice(u,t||e.length).trim()||e.slice(u,t||e.length).includes("\n")||e.slice(u,t||e.length).includes("\r")))return t?~-t:e.length;for(let t=u,n=e.length;t<n;t++)if("\n\r".includes(e[t]))return t}return t||e.length}if(e[u]&&e[~-u]&&e[~-u].trim())return u;const l=d(e,u);if(!r||0===r.mode){if(l===u-2)return u;if(e.slice(0,u).trim()||e.slice(0,u).includes("\n")||e.slice(0,u).includes("\r"))for(let t=u;t--;)if("\n\r".includes(e[t])||e[t].trim())return t+1+(e[t].trim()?1:0);return 0}if(1===r.mode)return u;if(2===r.mode){const t=e.slice(0,u);if(t.trim()||t.includes("\n")||t.includes("\r"))for(let t=u;t--;)if(e[t].trim()||"\n\r".includes(e[t]))return t+1;return 0}return null!==l?l+1:0}
/**
 * @name ranges-sort
 * @fileoverview Sort string index ranges
 * @version 4.0.15
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-sort/}
 */
const O={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function j(t,e){if(!Array.isArray(t)||!t.length)return t;const n={...O,...e};let r,o;if(n.strictlyTwoElementsInRangeArrays&&!t.filter((t=>t)).every(((t,e)=>2===t.length||(r=e,o=t.length,!1))))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${r}th range (${JSON.stringify(t[r],null,4)}) has not two but ${o} elements!`);if(!t.filter((t=>t)).every(((t,e)=>!(!Number.isInteger(t[0])||t[0]<0||!Number.isInteger(t[1])||t[1]<0)||(r=e,!1))))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${r}th range (${JSON.stringify(t[r],null,4)}) does not consist of only natural numbers!`);const i=t.filter((t=>t)).length**2;let u=0;return Array.from(t).filter((t=>t)).sort(((t,e)=>(n.progressFn&&(u+=1,n.progressFn(Math.floor(100*u/i))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1)))}
/**
 * @name ranges-merge
 * @fileoverview Merge and sort string index ranges
 * @version 7.0.15
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-merge/}
 */const N={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function S(t,e){function n(t){return t&&"object"==typeof t&&!Array.isArray(t)}if(!Array.isArray(t)||!t.length)return null;let r;if(e){if(!n(e))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(e,null,4)} (type ${typeof e})`);if(r={...N,...e},r.progressFn&&n(r.progressFn)&&!Object.keys(r.progressFn).length)r.progressFn=null;else if(r.progressFn&&"function"!=typeof r.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof r.progressFn}", equal to ${JSON.stringify(r.progressFn,null,4)}`);if(r.mergeType&&1!=+r.mergeType&&2!=+r.mergeType)throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof r.mergeType}", equal to ${JSON.stringify(r.mergeType,null,4)}`);if("boolean"!=typeof r.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof r.joinRangesThatTouchEdges}", equal to ${JSON.stringify(r.joinRangesThatTouchEdges,null,4)}`)}else r={...N};const o=t.filter((t=>t)).map((t=>[...t])).filter((t=>void 0!==t[2]||t[0]!==t[1]));let i,u,l;if(i=r.progressFn?j(o,{progressFn:t=>{l=Math.floor(t/5),l!==u&&(u=l,r.progressFn(l))}}):j(o),!i)return null;const s=i.length-1;for(let t=s;t>0;t--)r.progressFn&&(l=Math.floor(78*(1-t/s))+21,l!==u&&l>u&&(u=l,r.progressFn(l))),(i[t][0]<=i[t-1][0]||!r.joinRangesThatTouchEdges&&i[t][0]<i[t-1][1]||r.joinRangesThatTouchEdges&&i[t][0]<=i[t-1][1])&&(i[t-1][0]=Math.min(i[t][0],i[t-1][0]),i[t-1][1]=Math.max(i[t][1],i[t-1][1]),void 0!==i[t][2]&&(i[t-1][0]>=i[t][0]||i[t-1][1]<=i[t][1])&&null!==i[t-1][2]&&(null===i[t][2]&&null!==i[t-1][2]?i[t-1][2]=null:null!=i[t-1][2]?2==+r.mergeType&&i[t-1][0]===i[t][0]?i[t-1][2]=i[t][2]:i[t-1][2]+=i[t][2]:i[t-1][2]=i[t][2]),i.splice(t,1),t=i.length);return i.length?i:null}
/**
 * @name ranges-apply
 * @fileoverview Take an array of string index ranges, delete/replace the string according to them
 * @version 5.0.15
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-apply/}
 */function T(t,e,n){let r,o=0,i=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof t)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(e&&!Array.isArray(e))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(n&&"function"!=typeof n)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof n}, equal to: ${JSON.stringify(n,null,4)}`);if(!e||!e.filter((t=>t)).length)return t;r=Array.isArray(e)&&Number.isInteger(e[0])&&Number.isInteger(e[1])?[Array.from(e)]:Array.from(e);const u=r.length;let l=0;r.filter((t=>t)).forEach(((t,e)=>{if(n&&(o=Math.floor(l/u*10),o!==i&&(i=o,n(o))),!Array.isArray(t))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${e}th element not an array: ${JSON.stringify(t,null,4)}, which is ${typeof t}`);if(!Number.isInteger(t[0])){if(!Number.isInteger(+t[0])||+t[0]<0)throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${e}th element, array ${JSON.stringify(t,null,0)}. Its first element is not an integer, string index, but ${typeof t[0]}, equal to: ${JSON.stringify(t[0],null,4)}.`);r[e][0]=+r[e][0]}if(!Number.isInteger(t[1])){if(!Number.isInteger(+t[1])||+t[1]<0)throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${e}th element, array ${JSON.stringify(t,null,0)}. Its second element is not an integer, string index, but ${typeof t[1]}, equal to: ${JSON.stringify(t[1],null,4)}.`);r[e][1]=+r[e][1]}l+=1}));const s=S(r,{progressFn:t=>{n&&(o=10+Math.floor(t/10),o!==i&&(i=o,n(o)))}}),f=Array.isArray(s)?s.length:0;if(f>0){const e=t.slice(s[f-1][1]);t=s.reduce(((e,r,u,l)=>{n&&(o=20+Math.floor(u/f*80),o!==i&&(i=o,n(o)));return e+t.slice(0===u?0:l[u-1][1],l[u][0])+(l[u][2]||"")}),""),t+=e}return t}function A(t){return"string"==typeof t}function $(t){return Array.isArray(t)?t.join("."):A(t)?t:String(t)}function I(t,e){if("\\"!==t[e])return!0;const n=function(t,e,...n){if(!n.length||1===n.length&&f(n[0]))return null;const r={mode:0};if(f(n[0])){const o={...r,...c(n[0])};if(o.mode){if(y(o.mode)&&"0123".includes(o.mode))o.mode=Number.parseInt(o.mode,10);else if("number"!=typeof o.mode)throw new Error(`string-left-right/chompLeft(): [THROW_ID_01] the opts.mode is wrong! It should be 0, 1, 2 or 3. It was given as ${o.mode} (type ${typeof o.mode})`)}else o.mode=0;return w("left",t,e,o,c(n).slice(1))}return y(n[0])?w("left",t,e,r,c(n)):w("left",t,e,r,c(n).slice(1))}(t,e,{mode:1},"\\");return"number"==typeof n&&(e-n)%2!=0}function J({str:t,path:e,valToInsert:n,mode:r}){let o=0;const i=t.length,u=[],l=["{","}","[","]",":",","];let s=n;!A(n)||n.startsWith('"')||n.startsWith("{")||(s=`"${n}"`);const f=[],a=[];let c,g=!1,p=!1,y=!1,m=null,b=null,_=null,v=null,w=null,O=null,j=!1;const N=[];function S(){m=null,b=null,_=null,v=null,w=null,O=null}S();const J=[];for(o=0;o<i;o++){if(t[o]&&t[o].trim()||JSON.stringify(t[o],null,0),"number"!=typeof c&&"["===t[o-1]&&(p=!0,"]"!==t[o]&&(g=!1)),"number"!=typeof c&&"{"===t[o-1]&&(g=!0,"}"!==t[o]&&(p=!1)),"number"!=typeof c&&"{"===t[o]&&I(t,o-1)&&!y&&(p&&(j||(JSON.stringify(J,null,4),J[J.length-1]=J[J.length-1]+1)),f.push(o),JSON.stringify(f,null,4)),"number"!=typeof c&&"}"===t[o]&&I(t,o-1)&&!y&&(f.pop(),JSON.stringify(f,null,4)),"number"!=typeof c&&"]"===t[o]&&I(t,o-1)&&!y&&(a.pop(),JSON.stringify(a,null,4),J.pop(),JSON.stringify(J,null,4),S(),j&&(j=!1)),"number"!=typeof c&&"]"===t[o]&&(a.length?a.length&&(!f.length||a[a.length-1]>f[f.length-1])&&(p=!0):(p=!1,f.length&&!g&&(g=!0))),"number"!=typeof c&&"}"===t[o]&&(f.length?(!a.length||f[f.length-1]>a[a.length-1])&&(g=!0):g=!1),p&&$(e)===J.join(".")&&!y&&t[o].trim()&&(y=!0,_=o),"number"!=typeof c&&"["===t[o]&&I(t,o-1)&&!y&&(a.push(o),j=!0,JSON.stringify(a,null,4),J.push(0),JSON.stringify(J,null,0)),p&&","===t[o]&&j&&("number"!=typeof _||null!==v)&&(j=!1),y||null!==_||!t[o].trim()||l.includes(t[o])||!p&&(p||null===w)||(_=o,p&&(j?j=!1:"number"==typeof J[J.length-1]&&(J[J.length-1]=J[J.length-1]+1))),!y&&"number"!=typeof c&&(p||!p&&null!==w)&&"number"==typeof _&&_<o&&null===v&&('"'===t[_]&&'"'===t[o]&&"\\"!==t[o-1]||'"'!==t[_]&&!t[o].trim()||["}",","].includes(t[o]))&&(O=t.slice(_,'"'===t[_]?o+1:o),v=o),y||p||'"'!==t[o]||"\\"===t[o-1]||null!==w||null!==m||null!==b||!t[o+1]||(m=o+1),!y&&!p&&'"'===t[o]&&"\\"!==t[o-1]&&null===b&&"number"==typeof m&&null===_&&m<o&&(b=o+1,w=t.slice(m,o),J.push(w),JSON.stringify(J,null,4),$(e)===J.join(".")&&(y=!0)),!y&&"number"!=typeof c&&","===t[o]&&g&&(J.pop(),JSON.stringify(J,null,0)),!y&&("number"==typeof v&&o>=v||["}","]"].includes(t[d(t,o)])&&["}","]"].includes(t[o])||"}"===t[o]&&"{"===t[d(t,o)])&&t[o].trim()&&(","!==t[o]||["}","]"].includes(t[h(t,o)])?"}"===t[o]&&((v||"{"!==t[d(t,o)])&&(J.pop(),JSON.stringify(J,null,0)),a.length&&f.length&&a[a.length-1]>f[f.length-1]&&(g=!1,p=!0),S()):S()),!y&&"{"===t[o]&&A(w)&&null===_&&null===O&&S(),t[o].trim()&&y&&null===_&&"number"==typeof b&&o>b&&![":"].includes(t[o])&&(_=o),'"'===t[o]&&I(t,o-1)&&("number"==typeof m&&null===b||"number"==typeof _&&null===v)&&"number"!=typeof c&&(c=o),N.length&&t[o]===N[N.length-1]&&I(t,o-1)?(N.pop(),JSON.stringify(N,null,4)):"number"==typeof c&&c!==o||!y||p||"number"!=typeof _||("{"===t[o]&&I(t,o-1)?(N.push("}"),JSON.stringify(N,null,4)):"["===t[o]&&I(t,o-1)?(N.push("]"),JSON.stringify(N,null,4)):'"'===t[o]&&I(t,o-1)&&(N.push('"'),JSON.stringify(N,null,4))),'"'===t[o]&&I(t,o-1)&&"number"==typeof c&&c!==o&&(c=void 0),y&&Array.isArray(N)&&!N.length&&"number"==typeof _&&o>_&&"number"!=typeof c&&("["===t[_]&&"]"===t[o]||"{"===t[_]&&"}"===t[o]||'"'===t[_]&&'"'===t[o]||!["[","{",'"'].includes(t[_])&&t[_].trim()&&(!t[o].trim()||l.includes(t[o])&&I(t,o-1)))){if(JSON.stringify(t[_],null,4),"set"===r){let e="";t.slice(_,o+(t[o].trim()?1:0)).includes("\n")&&"\n"!==t[o+(t[o].trim()?1:0)]&&(e="\n");let n=o+(t[o].trim()?1:0);return(p&&!['"',"[","{"].includes(t[_])&&"]"!==t[h(t,n-1)]||","===t[n-1]&&'"'!==t[_-1])&&(n-=1),p&&'"'===t[_-1]&&(_-=1),`${t.slice(0,_)}${E=s,A(E)&&E.startsWith('"')&&E.endsWith('"')?`${JSON.stringify(E.slice(1,E.length-1),null,0)}`:JSON.stringify(E,null,0)}${e}${t.slice(n)}`}if("del"===r){JSON.stringify(m,null,4);let e=d(t,(p?_:m)-1);"number"==typeof e&&e++;let n=o+(t[o].trim()?1:0);"number"==typeof e&&","===t[e-1]&&["}","]"].includes(t[h(t,n-1)])&&(e-=1),","===t[n]&&(n+=1),JSON.stringify(e,null,4),JSON.stringify(n,null,4),u.push([e,n]),JSON.stringify(u,null,4);break}}N&&JSON.stringify(N,null,0),JSON.stringify(J.join("."),null,0),JSON.stringify(a,null,0),JSON.stringify(f,null,0)}var E;return JSON.stringify(T(t,u),null,4),T(t,u)}t.del=function(t,e){if(!A(t)||!t.length)throw new Error(`edit-package-json/del(): [THROW_ID_02] first input argument must be a non-empty string. It was given as ${JSON.stringify(t,null,4)} (type ${typeof t})`);return J({str:t,path:e,mode:"del"})},t.set=function(t,e,n){if(!A(t)||!t.length)throw new Error(`edit-package-json/set(): [THROW_ID_01] first input argument must be a non-empty string. It was given as ${JSON.stringify(t,null,4)} (type ${typeof t})`);return J({str:t,path:e,valToInsert:n,mode:"set"})},t.version="0.3.15",Object.defineProperty(t,"__esModule",{value:!0})}));
