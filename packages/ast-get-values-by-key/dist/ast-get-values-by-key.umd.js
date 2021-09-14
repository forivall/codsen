/**
 * @name ast-get-values-by-key
 * @fileoverview Extract values and paths from AST by keys OR set them by keys
 * @version 4.0.1
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ast-get-values-by-key/}
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).astGetValuesByKey={})}(this,(function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r={exports:{}};!function(t,r){var n="__lodash_hash_undefined__",o=9007199254740991,c="[object Arguments]",a="[object Boolean]",i="[object Date]",u="[object Function]",f="[object GeneratorFunction]",s="[object Map]",l="[object Number]",p="[object Object]",y="[object Promise]",h="[object RegExp]",d="[object Set]",v="[object String]",_="[object Symbol]",b="[object WeakMap]",g="[object ArrayBuffer]",j="[object DataView]",w="[object Float32Array]",O="[object Float64Array]",x="[object Int8Array]",A="[object Int16Array]",m="[object Int32Array]",$="[object Uint8Array]",S="[object Uint8ClampedArray]",E="[object Uint16Array]",T="[object Uint32Array]",P=/\w*$/,k=/^\[object .+?Constructor\]$/,I=/^(?:0|[1-9]\d*)$/,M={};M[c]=M["[object Array]"]=M[g]=M[j]=M[a]=M[i]=M[w]=M[O]=M[x]=M[A]=M[m]=M[s]=M[l]=M[p]=M[h]=M[d]=M[v]=M[_]=M[$]=M[S]=M[E]=M[T]=!0,M["[object Error]"]=M[u]=M[b]=!1;var N="object"==typeof self&&self&&self.Object===Object&&self,B="object"==typeof e&&e&&e.Object===Object&&e||N||Function("return this")(),F=r&&!r.nodeType&&r,K=F&&t&&!t.nodeType&&t,U=K&&K.exports===F;function R(t,e){return t.set(e[0],e[1]),t}function D(t,e){return t.add(e),t}function V(t,e,r,n){var o=-1,c=t?t.length:0;for(n&&c&&(r=t[++o]);++o<c;)r=e(r,t[o],o,t);return r}function z(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function C(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function G(t,e){return function(r){return t(e(r))}}function L(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var W,J=Array.prototype,q=Function.prototype,H=Object.prototype,Q=B["__core-js_shared__"],X=(W=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+W:"",Y=q.toString,Z=H.hasOwnProperty,tt=H.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=U?B.Buffer:void 0,nt=B.Symbol,ot=B.Uint8Array,ct=G(Object.getPrototypeOf,Object),at=Object.create,it=H.propertyIsEnumerable,ut=J.splice,ft=Object.getOwnPropertySymbols,st=rt?rt.isBuffer:void 0,lt=G(Object.keys,Object),pt=Kt(B,"DataView"),yt=Kt(B,"Map"),ht=Kt(B,"Promise"),dt=Kt(B,"Set"),vt=Kt(B,"WeakMap"),_t=Kt(Object,"create"),bt=zt(pt),gt=zt(yt),jt=zt(ht),wt=zt(dt),Ot=zt(vt),xt=nt?nt.prototype:void 0,At=xt?xt.valueOf:void 0;function mt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function $t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){this.__data__=new $t(t)}function Tt(t,e){var r=Gt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Lt(t)}(t)&&Z.call(t,"callee")&&(!it.call(t,"callee")||tt.call(t)==c)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!Z.call(t,a)||o&&("length"==a||Dt(a,n))||r.push(a);return r}function Pt(t,e,r){var n=t[e];Z.call(t,e)&&Ct(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function kt(t,e){for(var r=t.length;r--;)if(Ct(t[r][0],e))return r;return-1}function It(t,e,r,n,o,y,b){var k;if(n&&(k=y?n(t,o,y,b):n(t)),void 0!==k)return k;if(!qt(t))return t;var I=Gt(t);if(I){if(k=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,k)}else{var N=Rt(t),B=N==u||N==f;if(Wt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(N==p||N==c||B&&!y){if(z(t))return y?t:{};if(k=function(t){return"function"!=typeof t.constructor||Vt(t)?{}:(e=ct(t),qt(e)?at(e):{});var e}(B?{}:t),!e)return function(t,e){return Bt(t,Ut(t),e)}(t,function(t,e){return t&&Bt(e,Ht(e),t)}(k,t))}else{if(!M[N])return y?t:{};k=function(t,e,r,n){var o=t.constructor;switch(e){case g:return Nt(t);case a:case i:return new o(+t);case j:return function(t,e){var r=e?Nt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case w:case O:case x:case A:case m:case $:case S:case E:case T:return function(t,e){var r=e?Nt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case s:return function(t,e,r){return V(e?r(C(t),!0):C(t),R,new t.constructor)}(t,n,r);case l:case v:return new o(t);case h:return function(t){var e=new t.constructor(t.source,P.exec(t));return e.lastIndex=t.lastIndex,e}(t);case d:return function(t,e,r){return V(e?r(L(t),!0):L(t),D,new t.constructor)}(t,n,r);case _:return c=t,At?Object(At.call(c)):{}}var c}(t,N,It,e)}}b||(b=new Et);var F=b.get(t);if(F)return F;if(b.set(t,k),!I)var K=r?function(t){return function(t,e,r){var n=e(t);return Gt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Ht,Ut)}(t):Ht(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(K||t,(function(o,c){K&&(o=t[c=o]),Pt(k,c,It(o,e,r,n,c,t,b))})),k}function Mt(t){return!(!qt(t)||(e=t,X&&X in e))&&(Jt(t)||z(t)?et:k).test(zt(t));var e}function Nt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Bt(t,e,r,n){r||(r={});for(var o=-1,c=e.length;++o<c;){var a=e[o],i=n?n(r[a],t[a],a,r,t):void 0;Pt(r,a,void 0===i?t[a]:i)}return r}function Ft(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Kt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Mt(r)?r:void 0}mt.prototype.clear=function(){this.__data__=_t?_t(null):{}},mt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},mt.prototype.get=function(t){var e=this.__data__;if(_t){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},mt.prototype.has=function(t){var e=this.__data__;return _t?void 0!==e[t]:Z.call(e,t)},mt.prototype.set=function(t,e){return this.__data__[t]=_t&&void 0===e?n:e,this},$t.prototype.clear=function(){this.__data__=[]},$t.prototype.delete=function(t){var e=this.__data__,r=kt(e,t);return!(r<0)&&(r==e.length-1?e.pop():ut.call(e,r,1),!0)},$t.prototype.get=function(t){var e=this.__data__,r=kt(e,t);return r<0?void 0:e[r][1]},$t.prototype.has=function(t){return kt(this.__data__,t)>-1},$t.prototype.set=function(t,e){var r=this.__data__,n=kt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},St.prototype.clear=function(){this.__data__={hash:new mt,map:new(yt||$t),string:new mt}},St.prototype.delete=function(t){return Ft(this,t).delete(t)},St.prototype.get=function(t){return Ft(this,t).get(t)},St.prototype.has=function(t){return Ft(this,t).has(t)},St.prototype.set=function(t,e){return Ft(this,t).set(t,e),this},Et.prototype.clear=function(){this.__data__=new $t},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var r=this.__data__;if(r instanceof $t){var n=r.__data__;if(!yt||n.length<199)return n.push([t,e]),this;r=this.__data__=new St(n)}return r.set(t,e),this};var Ut=ft?G(ft,Object):function(){return[]},Rt=function(t){return tt.call(t)};function Dt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||I.test(t))&&t>-1&&t%1==0&&t<e}function Vt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||H)}function zt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ct(t,e){return t===e||t!=t&&e!=e}(pt&&Rt(new pt(new ArrayBuffer(1)))!=j||yt&&Rt(new yt)!=s||ht&&Rt(ht.resolve())!=y||dt&&Rt(new dt)!=d||vt&&Rt(new vt)!=b)&&(Rt=function(t){var e=tt.call(t),r=e==p?t.constructor:void 0,n=r?zt(r):void 0;if(n)switch(n){case bt:return j;case gt:return s;case jt:return y;case wt:return d;case Ot:return b}return e});var Gt=Array.isArray;function Lt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Jt(t)}var Wt=st||function(){return!1};function Jt(t){var e=qt(t)?tt.call(t):"";return e==u||e==f}function qt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Ht(t){return Lt(t)?Tt(t):function(t){if(!Vt(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return It(t,!0,!0)}}(r,r.exports);var n=r.exports;var o,c,a=Object.prototype,i=Function.prototype.toString,u=a.hasOwnProperty,f=i.call(Object),s=a.toString,l=(o=Object.getPrototypeOf,c=Object,function(t){return o(c(t))});var p=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=s.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=l(t);if(null===e)return!0;var r=u.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&i.call(r)==f};
/**
 * @name ast-monkey-util
 * @fileoverview Utility library of AST helper functions
 * @version 2.0.1
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ast-monkey-util/}
 */function y(t){if(t.includes(".")){const e=t.lastIndexOf(".");if(!t.slice(0,e).includes("."))return t.slice(0,e);for(let r=e-1;r--;)if("."===t[r])return t.slice(r+1,e)}return null}
/**
 * @name ast-monkey-traverse
 * @fileoverview Utility library to traverse AST
 * @version 3.0.1
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ast-monkey-traverse/}
 */var h={exports:{}};const d=t=>{if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")},v=new Map;function _(t,e){if(!Array.isArray(t))switch(typeof t){case"string":t=[t];break;case"undefined":t=[];break;default:throw new TypeError(`Expected '${e}' to be a string or an array, but got a type of '${typeof t}'`)}return t.filter((t=>{if("string"!=typeof t){if(void 0===t)return!1;throw new TypeError(`Expected '${e}' to be an array of strings, but found a type of '${typeof t}' in the array`)}return!0}))}function b(t,e){e={caseSensitive:!1,...e};const r=t+JSON.stringify(e);if(v.has(r))return v.get(r);const n="!"===t[0];n&&(t=t.slice(1)),t=d(t).replace(/\\\*/g,"[\\s\\S]*");const o=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return o.negated=n,v.set(r,o),o}h.exports=(t,e,r)=>{if(t=_(t,"inputs"),0===(e=_(e,"patterns")).length)return[];const n="!"===e[0][0];e=e.map((t=>b(t,r)));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o},h.exports.isMatch=(t,e,r)=>(t=_(t,"inputs"),0!==(e=_(e,"patterns")).length&&t.some((t=>e.every((e=>{const n=b(e,r),o=n.test(t);return n.negated?!o:o})))));var g=h.exports;t.getByKey=function(t,e,r){let o;void 0!==r&&(o=Array.isArray(r)?n(r):[n(r)]);const c=[],a=function t(e,r,o,c){const a=n(e);let i;const u={depth:-1,path:"",...o};if(u.depth+=1,Array.isArray(a))for(let e=0,o=a.length;e<o&&!c.now;e++){const o=u.path?`${u.path}.${e}`:`${e}`;void 0!==a[e]?(u.parent=n(a),u.parentType="array",u.parentKey=y(o),i=t(r(a[e],void 0,{...u,path:o},c),r,{...u,path:o},c),Number.isNaN(i)&&e<a.length?(a.splice(e,1),e-=1):a[e]=i):a.splice(e,1)}else if(p(a))for(const e in a){if(c.now&&null!=e)break;const o=u.path?`${u.path}.${e}`:e;0===u.depth&&null!=e&&(u.topmostKey=e),u.parent=n(a),u.parentType="object",u.parentKey=y(o),i=t(r(e,a[e],{...u,path:o},c),r,{...u,path:o},c),Number.isNaN(i)?delete a[e]:a[e]=i}return a}(t,((t,r,n)=>{const a=void 0!==r?r:t;if(void 0!==r&&g.isMatch(t,e,{caseSensitive:!0}))if(void 0===o)c.push({val:r,path:n.path});else if(o.length)return o.shift();return a}),{},{now:!1});return void 0===o?c:a},t.version="4.0.1",Object.defineProperty(t,"__esModule",{value:!0})}));
