/**
 * @name string-find-malformed
 * @fileoverview Search for a malformed string. Think of Levenshtein distance but in search.
 * @version 2.0.15
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-find-malformed/}
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).stringFindMalformed={})}(this,(function(t){"use strict";Function.prototype.toString.call(Object);var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t){var e={exports:{}};t(e,e.exports)}((function(t,n){var r="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",u="[object Boolean]",c="[object Date]",a="[object Function]",f="[object GeneratorFunction]",s="[object Map]",l="[object Number]",p="[object Object]",h="[object Promise]",y="[object RegExp]",d="[object Set]",g="[object String]",_="[object Symbol]",b="[object WeakMap]",v="[object ArrayBuffer]",j="[object DataView]",m="[object Float32Array]",w="[object Float64Array]",O="[object Int8Array]",A="[object Int16Array]",T="[object Int32Array]",k="[object Uint8Array]",x="[object Uint8ClampedArray]",C="[object Uint16Array]",$="[object Uint32Array]",I=/\w*$/,E=/^\[object .+?Constructor\]$/,S=/^(?:0|[1-9]\d*)$/,D={};D[i]=D["[object Array]"]=D[v]=D[j]=D[u]=D[c]=D[m]=D[w]=D[O]=D[A]=D[T]=D[s]=D[l]=D[p]=D[y]=D[d]=D[g]=D[_]=D[k]=D[x]=D[C]=D[$]=!0,D["[object Error]"]=D[a]=D[b]=!1;var R="object"==typeof self&&self&&self.Object===Object&&self,F="object"==typeof e&&e&&e.Object===Object&&e||R||Function("return this")(),M=n&&!n.nodeType&&n,W=M&&t&&!t.nodeType&&t,P=W&&W.exports===M;function N(t,e){return t.set(e[0],e[1]),t}function L(t,e){return t.add(e),t}function B(t,e,n,r){var o=-1,i=t?t.length:0;for(r&&i&&(n=t[++o]);++o<i;)n=e(n,t[o],o,t);return n}function H(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function U(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function q(t,e){return function(n){return t(e(n))}}function z(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var V,G=Array.prototype,J=Function.prototype,K=Object.prototype,Q=F["__core-js_shared__"],X=(V=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"",Y=J.toString,Z=K.hasOwnProperty,tt=K.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nt=P?F.Buffer:void 0,rt=F.Symbol,ot=F.Uint8Array,it=q(Object.getPrototypeOf,Object),ut=Object.create,ct=K.propertyIsEnumerable,at=G.splice,ft=Object.getOwnPropertySymbols,st=nt?nt.isBuffer:void 0,lt=q(Object.keys,Object),pt=Wt(F,"DataView"),ht=Wt(F,"Map"),yt=Wt(F,"Promise"),dt=Wt(F,"Set"),gt=Wt(F,"WeakMap"),_t=Wt(Object,"create"),bt=Ht(pt),vt=Ht(ht),jt=Ht(yt),mt=Ht(dt),wt=Ht(gt),Ot=rt?rt.prototype:void 0,At=Ot?Ot.valueOf:void 0;function Tt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function kt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function xt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Ct(t){this.__data__=new kt(t)}function $t(t,e){var n=qt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&zt(t)}(t)&&Z.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,o=!!r;for(var u in t)!e&&!Z.call(t,u)||o&&("length"==u||Lt(u,r))||n.push(u);return n}function It(t,e,n){var r=t[e];Z.call(t,e)&&Ut(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function Et(t,e){for(var n=t.length;n--;)if(Ut(t[n][0],e))return n;return-1}function St(t,e,n,r,o,h,b){var E;if(r&&(E=h?r(t,o,h,b):r(t)),void 0!==E)return E;if(!Jt(t))return t;var S=qt(t);if(S){if(E=function(t){var e=t.length,n=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!e)return function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(t,E)}else{var R=Nt(t),F=R==a||R==f;if(Vt(t))return function(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,e);if(R==p||R==i||F&&!h){if(H(t))return h?t:{};if(E=function(t){return"function"!=typeof t.constructor||Bt(t)?{}:(e=it(t),Jt(e)?ut(e):{});var e}(F?{}:t),!e)return function(t,e){return Ft(t,Pt(t),e)}(t,function(t,e){return t&&Ft(e,Kt(e),t)}(E,t))}else{if(!D[R])return h?t:{};E=function(t,e,n,r){var o=t.constructor;switch(e){case v:return Rt(t);case u:case c:return new o(+t);case j:return function(t,e){var n=e?Rt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,r);case m:case w:case O:case A:case T:case k:case x:case C:case $:return function(t,e){var n=e?Rt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,r);case s:return function(t,e,n){return B(e?n(U(t),!0):U(t),N,new t.constructor)}(t,r,n);case l:case g:return new o(t);case y:return function(t){var e=new t.constructor(t.source,I.exec(t));return e.lastIndex=t.lastIndex,e}(t);case d:return function(t,e,n){return B(e?n(z(t),!0):z(t),L,new t.constructor)}(t,r,n);case _:return i=t,At?Object(At.call(i)):{}}var i}(t,R,St,e)}}b||(b=new Ct);var M=b.get(t);if(M)return M;if(b.set(t,E),!S)var W=n?function(t){return function(t,e,n){var r=e(t);return qt(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,Kt,Pt)}(t):Kt(t);return function(t,e){for(var n=-1,r=t?t.length:0;++n<r&&!1!==e(t[n],n,t););}(W||t,(function(o,i){W&&(o=t[i=o]),It(E,i,St(o,e,n,r,i,t,b))})),E}function Dt(t){return!(!Jt(t)||(e=t,X&&X in e))&&(Gt(t)||H(t)?et:E).test(Ht(t));var e}function Rt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Ft(t,e,n,r){n||(n={});for(var o=-1,i=e.length;++o<i;){var u=e[o],c=r?r(n[u],t[u],u,n,t):void 0;It(n,u,void 0===c?t[u]:c)}return n}function Mt(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function Wt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Dt(n)?n:void 0}Tt.prototype.clear=function(){this.__data__=_t?_t(null):{}},Tt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Tt.prototype.get=function(t){var e=this.__data__;if(_t){var n=e[t];return n===r?void 0:n}return Z.call(e,t)?e[t]:void 0},Tt.prototype.has=function(t){var e=this.__data__;return _t?void 0!==e[t]:Z.call(e,t)},Tt.prototype.set=function(t,e){return this.__data__[t]=_t&&void 0===e?r:e,this},kt.prototype.clear=function(){this.__data__=[]},kt.prototype.delete=function(t){var e=this.__data__,n=Et(e,t);return!(n<0)&&(n==e.length-1?e.pop():at.call(e,n,1),!0)},kt.prototype.get=function(t){var e=this.__data__,n=Et(e,t);return n<0?void 0:e[n][1]},kt.prototype.has=function(t){return Et(this.__data__,t)>-1},kt.prototype.set=function(t,e){var n=this.__data__,r=Et(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},xt.prototype.clear=function(){this.__data__={hash:new Tt,map:new(ht||kt),string:new Tt}},xt.prototype.delete=function(t){return Mt(this,t).delete(t)},xt.prototype.get=function(t){return Mt(this,t).get(t)},xt.prototype.has=function(t){return Mt(this,t).has(t)},xt.prototype.set=function(t,e){return Mt(this,t).set(t,e),this},Ct.prototype.clear=function(){this.__data__=new kt},Ct.prototype.delete=function(t){return this.__data__.delete(t)},Ct.prototype.get=function(t){return this.__data__.get(t)},Ct.prototype.has=function(t){return this.__data__.has(t)},Ct.prototype.set=function(t,e){var n=this.__data__;if(n instanceof kt){var r=n.__data__;if(!ht||r.length<199)return r.push([t,e]),this;n=this.__data__=new xt(r)}return n.set(t,e),this};var Pt=ft?q(ft,Object):function(){return[]},Nt=function(t){return tt.call(t)};function Lt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||S.test(t))&&t>-1&&t%1==0&&t<e}function Bt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||K)}function Ht(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ut(t,e){return t===e||t!=t&&e!=e}(pt&&Nt(new pt(new ArrayBuffer(1)))!=j||ht&&Nt(new ht)!=s||yt&&Nt(yt.resolve())!=h||dt&&Nt(new dt)!=d||gt&&Nt(new gt)!=b)&&(Nt=function(t){var e=tt.call(t),n=e==p?t.constructor:void 0,r=n?Ht(n):void 0;if(r)switch(r){case bt:return j;case vt:return s;case jt:return h;case mt:return d;case wt:return b}return e});var qt=Array.isArray;function zt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Gt(t)}var Vt=st||function(){return!1};function Gt(t){var e=Jt(t)?tt.call(t):"";return e==a||e==f}function Jt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Kt(t){return zt(t)?$t(t):function(t){if(!Bt(t))return lt(t);var e=[];for(var n in Object(t))Z.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}t.exports=function(t){return St(t,!0,!0)}}));function n(t,e=0){return function({str:t,idx:e=0,stopAtNewlines:n=!1,stopAtRawNbsp:r=!1}){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),!t[e+1])return null;if(t[e+1]&&(t[e+1].trim()||n&&"\n\r".includes(t[e+1])||r&&" "===t[e+1]))return e+1;if(t[e+2]&&(t[e+2].trim()||n&&"\n\r".includes(t[e+2])||r&&" "===t[e+2]))return e+2;for(let o=e+1,i=t.length;o<i;o++)if(t[o].trim()||n&&"\n\r".includes(t[o])||r&&" "===t[o])return o;return null}({str:t,idx:e,stopAtNewlines:!1,stopAtRawNbsp:!1})}function r(t){return"string"==typeof t}const o={stringOffset:0,maxDistance:1,ignoreWhitespace:!0};t.defaults=o,t.findMalformed=function(t,e,i,u){if(!r(t))throw new TypeError(`string-find-malformed: [THROW_ID_01] the first input argument, string where to look for, must be a string! Currently it's equal to: ${t} (type: ${typeof t})`);if(!t.length)return;if(!r(e))throw new TypeError(`string-find-malformed: [THROW_ID_02] the second input argument, string we should find, must be a string! Currently it's equal to: ${e} (type: ${typeof e})`);if(!e.length)return;if("function"!=typeof i)throw new TypeError(`string-find-malformed: [THROW_ID_03] the third input argument, a callback function, must be a function! Currently it's equal to: ${i} (type: ${typeof i})`);if(u&&(!(c=u)||"object"!=typeof c||Array.isArray(c)))throw new TypeError(`string-find-malformed: [THROW_ID_04] the fourth input argument, an Optional Options Object, must be a plain object! Currently it's equal to: ${u} (type: ${typeof u})`);var c;const a={...o,...u};if("string"==typeof a.stringOffset&&/^\d*$/.test(a.stringOffset))a.stringOffset=Number(a.stringOffset);else if(!Number.isInteger(a.stringOffset)||a.stringOffset<0)throw new TypeError(`[THROW_ID_05] opts.stringOffset must be a natural number or zero! Currently it's: ${a.stringOffset}`);const f=t.length,s=Math.min(e.length,(a.maxDistance||0)+1);let l=[];const p=a.maxDistance||1;let h;for(let r=0;r<f;r++){if(a.ignoreWhitespace&&!t[r].trim())continue;for(let e=0,o=l.length;e<o;e++)h=!1,Array.isArray(l[e].pendingToCheck)&&l[e].pendingToCheck.length&&t[r]===l[e].pendingToCheck[0]?(h=!0,l[e].pendingToCheck.shift()):Array.isArray(l[e].pendingToCheck)&&l[e].pendingToCheck.length&&t[r]===l[e].pendingToCheck[1]?(h=!0,l[e].pendingToCheck.shift(),l[e].pendingToCheck.shift(),l[e].patienceLeft-=1):(l[e].patienceLeft-=1,t[n(t,r)]!==l[e].pendingToCheck[0]&&(l[e].pendingToCheck.shift(),t[r]===l[e].pendingToCheck[0]&&l[e].pendingToCheck.shift()));l=l.filter((t=>t.patienceLeft>=0));const o=l.filter((t=>0===t.pendingToCheck.length)).map((t=>t.startsAt));if(Array.isArray(o)&&o.length){const n=Math.min(...o),u=r+(h?1:0);t.slice(n,u)!==e&&i({idxFrom:n+(a.stringOffset||0),idxTo:u+(a.stringOffset||0)}),l=l.filter((t=>t.pendingToCheck.length))}for(let n=0;n<s;n++)if(t[r]===e[n]){const t={startsAt:r,patienceLeft:p-n,pendingToCheck:Array.from(e.slice(n+1))};l.push(t);break}}},t.version="2.0.15",Object.defineProperty(t,"__esModule",{value:!0})}));
