/**
 * color-shorthand-hex-to-six-digit
 * Convert shorthand hex color codes into full
 * Version: 2.10.5
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/color-shorthand-hex-to-six-digit
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t=t||self).colorShorthandHexToSixDigit=r()}(this,function(){"use strict";var t=function(t){return(t=t&&"object"==typeof t?t:{}).strict?/^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/i:/#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})\b/gi},r="[object Object]";var e,n,o=Function.prototype,c=Object.prototype,u=o.toString,a=c.hasOwnProperty,i=u.call(Object),f=c.toString,s=(e=Object.getPrototypeOf,n=Object,function(t){return e(n(t))});var l=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||f.call(t)!=r||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t))return!1;var e=s(t);if(null===e)return!0;var n=a.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&u.call(n)==i},p="[object String]",y=Object.prototype.toString,h=Array.isArray;var _=function(t){return"string"==typeof t||!h(t)&&function(t){return!!t&&"object"==typeof t}(t)&&y.call(t)==p},b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var v,d=(function(t,r){var e=200,n="__lodash_hash_undefined__",o=9007199254740991,c="[object Arguments]",u="[object Boolean]",a="[object Date]",i="[object Function]",f="[object GeneratorFunction]",s="[object Map]",l="[object Number]",p="[object Object]",y="[object RegExp]",h="[object Set]",_="[object String]",v="[object Symbol]",d="[object ArrayBuffer]",j="[object DataView]",g="[object Float32Array]",w="[object Float64Array]",O="[object Int8Array]",A="[object Int16Array]",m="[object Int32Array]",x="[object Uint8Array]",S="[object Uint8ClampedArray]",P="[object Uint16Array]",$="[object Uint32Array]",k=/\w*$/,E=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,I={};I[c]=I["[object Array]"]=I[d]=I[j]=I[u]=I[a]=I[g]=I[w]=I[O]=I[A]=I[m]=I[s]=I[l]=I[p]=I[y]=I[h]=I[_]=I[v]=I[x]=I[S]=I[P]=I[$]=!0,I["[object Error]"]=I[i]=I["[object WeakMap]"]=!1;var M="object"==typeof b&&b&&b.Object===Object&&b,B="object"==typeof self&&self&&self.Object===Object&&self,U=M||B||Function("return this")(),D=r&&!r.nodeType&&r,T=D&&t&&!t.nodeType&&t,W=T&&T.exports===D;function C(t,r){return t.set(r[0],r[1]),t}function L(t,r){return t.add(r),t}function R(t,r,e,n){var o=-1,c=t?t.length:0;for(n&&c&&(e=t[++o]);++o<c;)e=r(e,t[o],o,t);return e}function z(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function V(t){var r=-1,e=Array(t.size);return t.forEach(function(t,n){e[++r]=[n,t]}),e}function G(t,r){return function(e){return t(r(e))}}function H(t){var r=-1,e=Array(t.size);return t.forEach(function(t){e[++r]=t}),e}var N,q=Array.prototype,J=Function.prototype,K=Object.prototype,Q=U["__core-js_shared__"],X=(N=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+N:"",Y=J.toString,Z=K.hasOwnProperty,tt=K.toString,rt=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=W?U.Buffer:void 0,nt=U.Symbol,ot=U.Uint8Array,ct=G(Object.getPrototypeOf,Object),ut=Object.create,at=K.propertyIsEnumerable,it=q.splice,ft=Object.getOwnPropertySymbols,st=et?et.isBuffer:void 0,lt=G(Object.keys,Object),pt=Tt(U,"DataView"),yt=Tt(U,"Map"),ht=Tt(U,"Promise"),_t=Tt(U,"Set"),bt=Tt(U,"WeakMap"),vt=Tt(Object,"create"),dt=zt(pt),jt=zt(yt),gt=zt(ht),wt=zt(_t),Ot=zt(bt),At=nt?nt.prototype:void 0,mt=At?At.valueOf:void 0;function xt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function St(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Pt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function $t(t){this.__data__=new St(t)}function kt(t,r){var e=Gt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ht(t)}(t)&&Z.call(t,"callee")&&(!at.call(t,"callee")||tt.call(t)==c)}(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],n=e.length,o=!!n;for(var u in t)!r&&!Z.call(t,u)||o&&("length"==u||Lt(u,n))||e.push(u);return e}function Et(t,r,e){var n=t[r];Z.call(t,r)&&Vt(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function Ft(t,r){for(var e=t.length;e--;)if(Vt(t[e][0],r))return e;return-1}function It(t,r,e,n,o,b,E){var F;if(n&&(F=b?n(t,o,b,E):n(t)),void 0!==F)return F;if(!Jt(t))return t;var M=Gt(t);if(M){if(F=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&Z.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,F)}else{var B=Ct(t),U=B==i||B==f;if(Nt(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(B==p||B==c||U&&!b){if(z(t))return b?t:{};if(F=function(t){return"function"!=typeof t.constructor||Rt(t)?{}:(r=ct(t),Jt(r)?ut(r):{});var r}(U?{}:t),!r)return function(t,r){return Ut(t,Wt(t),r)}(t,function(t,r){return t&&Ut(r,Kt(r),t)}(F,t))}else{if(!I[B])return b?t:{};F=function(t,r,e,n){var o=t.constructor;switch(r){case d:return Bt(t);case u:case a:return new o(+t);case j:return function(t,r){var e=r?Bt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case g:case w:case O:case A:case m:case x:case S:case P:case $:return function(t,r){var e=r?Bt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case s:return function(t,r,e){return R(r?e(V(t),!0):V(t),C,new t.constructor)}(t,n,e);case l:case _:return new o(t);case y:return(f=new(i=t).constructor(i.source,k.exec(i))).lastIndex=i.lastIndex,f;case h:return function(t,r,e){return R(r?e(H(t),!0):H(t),L,new t.constructor)}(t,n,e);case v:return c=t,mt?Object(mt.call(c)):{}}var c;var i,f}(t,B,It,r)}}E||(E=new $t);var D=E.get(t);if(D)return D;if(E.set(t,F),!M)var T=e?function(t){return function(t,r,e){var n=r(t);return Gt(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Kt,Wt)}(t):Kt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(T||t,function(o,c){T&&(o=t[c=o]),Et(F,c,It(o,r,e,n,c,t,E))}),F}function Mt(t){return!(!Jt(t)||(r=t,X&&X in r))&&(qt(t)||z(t)?rt:E).test(zt(t));var r}function Bt(t){var r=new t.constructor(t.byteLength);return new ot(r).set(new ot(t)),r}function Ut(t,r,e,n){e||(e={});for(var o=-1,c=r.length;++o<c;){var u=r[o],a=n?n(e[u],t[u],u,e,t):void 0;Et(e,u,void 0===a?t[u]:a)}return e}function Dt(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map}function Tt(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return Mt(e)?e:void 0}xt.prototype.clear=function(){this.__data__=vt?vt(null):{}},xt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},xt.prototype.get=function(t){var r=this.__data__;if(vt){var e=r[t];return e===n?void 0:e}return Z.call(r,t)?r[t]:void 0},xt.prototype.has=function(t){var r=this.__data__;return vt?void 0!==r[t]:Z.call(r,t)},xt.prototype.set=function(t,r){return this.__data__[t]=vt&&void 0===r?n:r,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var r=this.__data__,e=Ft(r,t);return!(e<0||(e==r.length-1?r.pop():it.call(r,e,1),0))},St.prototype.get=function(t){var r=this.__data__,e=Ft(r,t);return e<0?void 0:r[e][1]},St.prototype.has=function(t){return Ft(this.__data__,t)>-1},St.prototype.set=function(t,r){var e=this.__data__,n=Ft(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},Pt.prototype.clear=function(){this.__data__={hash:new xt,map:new(yt||St),string:new xt}},Pt.prototype.delete=function(t){return Dt(this,t).delete(t)},Pt.prototype.get=function(t){return Dt(this,t).get(t)},Pt.prototype.has=function(t){return Dt(this,t).has(t)},Pt.prototype.set=function(t,r){return Dt(this,t).set(t,r),this},$t.prototype.clear=function(){this.__data__=new St},$t.prototype.delete=function(t){return this.__data__.delete(t)},$t.prototype.get=function(t){return this.__data__.get(t)},$t.prototype.has=function(t){return this.__data__.has(t)},$t.prototype.set=function(t,r){var n=this.__data__;if(n instanceof St){var o=n.__data__;if(!yt||o.length<e-1)return o.push([t,r]),this;n=this.__data__=new Pt(o)}return n.set(t,r),this};var Wt=ft?G(ft,Object):function(){return[]},Ct=function(t){return tt.call(t)};function Lt(t,r){return!!(r=null==r?o:r)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<r}function Rt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||K)}function zt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Vt(t,r){return t===r||t!=t&&r!=r}(pt&&Ct(new pt(new ArrayBuffer(1)))!=j||yt&&Ct(new yt)!=s||ht&&"[object Promise]"!=Ct(ht.resolve())||_t&&Ct(new _t)!=h||bt&&"[object WeakMap]"!=Ct(new bt))&&(Ct=function(t){var r=tt.call(t),e=r==p?t.constructor:void 0,n=e?zt(e):void 0;if(n)switch(n){case dt:return j;case jt:return s;case gt:return"[object Promise]";case wt:return h;case Ot:return"[object WeakMap]"}return r});var Gt=Array.isArray;function Ht(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!qt(t)}var Nt=st||function(){return!1};function qt(t){var r=Jt(t)?tt.call(t):"";return r==i||r==f}function Jt(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Kt(t){return Ht(t)?kt(t):function(t){if(!Rt(t))return lt(t);var r=[];for(var e in Object(t))Z.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}t.exports=function(t){return It(t,!0,!0)}}(v={exports:{}},v.exports),v.exports),j=Array.isArray;return function r(e){var n=d(e);if(_(e))n=n.replace(t(),function(t,r,e,n){return"&"!==n[e-1]&&4===t.length&&"#"===t.charAt(0)&&(t="#".concat(t.charAt(1)).concat(t.charAt(1)).concat(t.charAt(2)).concat(t.charAt(2)).concat(t.charAt(3)).concat(t.charAt(3))),t.toLowerCase()});else if(j(n))for(var o=0,c=n.length;o<c;o++)n[o]=r(n[o]);else{if(!l(e))return e;Object.keys(n).forEach(function(t){n[t]=r(n[t])})}return n}});
