/**
 * ranges-push
 * Manage the array of ranges referencing the index ranges within the string
 * Version: 3.3.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ranges-push
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).rangesPush=t()}(this,function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var n=function(e,t){if(t){if("object"!=typeof t)throw new TypeError(String(t)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero&&0===e)return!0}}return Number.isSafeInteger(e)&&e>=1},o=function(e,t){if("string"!=typeof e)return!1;if(t&&"includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(e)}return/^[1-9]\d*(\.0+)?$/.test(e)},i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(e,t){return e(t={exports:{}},t.exports),t.exports}var s=a(function(e,t){(t=e.exports=function(e){return e+t.suffix(+e)}).suffix=function(e){return e%=100,1===Math.floor(e/10)?"th":e%10==1?"st":e%10==2?"nd":e%10==3?"rd":"th"}}),c=(s.suffix,a(function(e,t){var r,n,o,a,s,c,u,f,l,p,h,y,g,d,m,b,v,_,w,j;e.exports=(r="function"==typeof Promise,n="object"==typeof self?self:i,o="undefined"!=typeof Symbol,a="undefined"!=typeof Map,s="undefined"!=typeof Set,c="undefined"!=typeof WeakMap,u="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,l=o&&void 0!==Symbol.iterator,p=o&&void 0!==Symbol.toStringTag,h=s&&"function"==typeof Set.prototype.entries,y=a&&"function"==typeof Map.prototype.entries,g=h&&Object.getPrototypeOf((new Set).entries()),d=y&&Object.getPrototypeOf((new Map).entries()),m=l&&"function"==typeof Array.prototype[Symbol.iterator],b=m&&Object.getPrototypeOf([][Symbol.iterator]()),v=l&&"function"==typeof String.prototype[Symbol.iterator],_=v&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,j=-1,function(e){var t=typeof e;if("object"!==t)return t;if(null===e)return"null";if(e===n)return"global";if(Array.isArray(e)&&(!1===p||!(Symbol.toStringTag in e)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&e===window.location)return"Location";if("object"==typeof window.document&&e===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&e===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&e===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&e instanceof window.HTMLElement){if("BLOCKQUOTE"===e.tagName)return"HTMLQuoteElement";if("TD"===e.tagName)return"HTMLTableDataCellElement";if("TH"===e.tagName)return"HTMLTableHeaderCellElement"}}var o=p&&e[Symbol.toStringTag];if("string"==typeof o)return o;var i=Object.getPrototypeOf(e);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":r&&i===Promise.prototype?"Promise":s&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":u&&i===WeakSet.prototype?"WeakSet":c&&i===WeakMap.prototype?"WeakMap":f&&i===DataView.prototype?"DataView":a&&i===d?"Map Iterator":s&&i===g?"Set Iterator":m&&i===b?"Array Iterator":v&&i===_?"String Iterator":null===i?"Object":Object.prototype.toString.call(e).slice(w,j)})}));function u(e,t,r){if(t!=t)return function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,l,r);for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}function f(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function l(e){return e!=e}var p=Array.prototype.splice;function h(e,t,r,n){var o,i=n?f:u,a=-1,s=t.length,c=e;for(e===t&&(t=function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(t)),r&&(c=function(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}(e,(o=r,function(e){return o(e)})));++a<s;)for(var l=0,h=t[a],y=r?r(h):h;(l=i(c,y,l,n))>-1;)c!==e&&p.call(c,l,1),p.call(e,l,1);return e}var y=function(e,t){return e&&e.length&&t&&t.length?h(e,t):e},g=a(function(e,t){var r=200,n="__lodash_hash_undefined__",o=9007199254740991,a="[object Arguments]",s="[object Boolean]",c="[object Date]",u="[object Function]",f="[object GeneratorFunction]",l="[object Map]",p="[object Number]",h="[object Object]",y="[object RegExp]",g="[object Set]",d="[object String]",m="[object Symbol]",b="[object ArrayBuffer]",v="[object DataView]",_="[object Float32Array]",w="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",T="[object Int32Array]",$="[object Uint8Array]",S="[object Uint8ClampedArray]",A="[object Uint16Array]",E="[object Uint32Array]",I=/\w*$/,k=/^\[object .+?Constructor\]$/,N=/^(?:0|[1-9]\d*)$/,R={};R[a]=R["[object Array]"]=R[b]=R[v]=R[s]=R[c]=R[_]=R[w]=R[j]=R[O]=R[T]=R[l]=R[p]=R[h]=R[y]=R[g]=R[d]=R[m]=R[$]=R[S]=R[A]=R[E]=!0,R["[object Error]"]=R[u]=R["[object WeakMap]"]=!1;var x="object"==typeof i&&i&&i.Object===Object&&i,M="object"==typeof self&&self&&self.Object===Object&&self,P=x||M||Function("return this")(),W=t&&!t.nodeType&&t,F=W&&e&&!e.nodeType&&e,D=F&&F.exports===W;function H(e,t){return e.set(t[0],t[1]),e}function C(e,t){return e.add(t),e}function L(e,t,r,n){var o=-1,i=e?e.length:0;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function J(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function Z(e){var t=-1,r=Array(e.size);return e.forEach(function(e,n){r[++t]=[n,e]}),r}function K(e,t){return function(r){return e(t(r))}}function V(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r}var q,B=Array.prototype,U=Function.prototype,z=Object.prototype,G=P["__core-js_shared__"],Q=(q=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",X=U.toString,Y=z.hasOwnProperty,ee=z.toString,te=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),re=D?P.Buffer:void 0,ne=P.Symbol,oe=P.Uint8Array,ie=K(Object.getPrototypeOf,Object),ae=Object.create,se=z.propertyIsEnumerable,ce=B.splice,ue=Object.getOwnPropertySymbols,fe=re?re.isBuffer:void 0,le=K(Object.keys,Object),pe=Fe(P,"DataView"),he=Fe(P,"Map"),ye=Fe(P,"Promise"),ge=Fe(P,"Set"),de=Fe(P,"WeakMap"),me=Fe(Object,"create"),be=Je(pe),ve=Je(he),_e=Je(ye),we=Je(ge),je=Je(de),Oe=ne?ne.prototype:void 0,Te=Oe?Oe.valueOf:void 0;function $e(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Se(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ae(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ee(e){this.__data__=new Se(e)}function Ie(e,t){var r=Ke(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&Ve(e)}(e)&&Y.call(e,"callee")&&(!se.call(e,"callee")||ee.call(e)==a)}(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],n=r.length,o=!!n;for(var i in e)!t&&!Y.call(e,i)||o&&("length"==i||Ce(i,n))||r.push(i);return r}function ke(e,t,r){var n=e[t];Y.call(e,t)&&Ze(n,r)&&(void 0!==r||t in e)||(e[t]=r)}function Ne(e,t){for(var r=e.length;r--;)if(Ze(e[r][0],t))return r;return-1}function Re(e,t,r,n,o,i,k){var N;if(n&&(N=i?n(e,o,i,k):n(e)),void 0!==N)return N;if(!Ue(e))return e;var x=Ke(e);if(x){if(N=function(e){var t=e.length,r=e.constructor(t);t&&"string"==typeof e[0]&&Y.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!t)return function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(e,N)}else{var M=He(e),P=M==u||M==f;if(qe(e))return function(e,t){if(t)return e.slice();var r=new e.constructor(e.length);return e.copy(r),r}(e,t);if(M==h||M==a||P&&!i){if(J(e))return i?e:{};if(N=function(e){return"function"!=typeof e.constructor||Le(e)?{}:(t=ie(e),Ue(t)?ae(t):{});var t}(P?{}:e),!t)return function(e,t){return Pe(e,De(e),t)}(e,function(e,t){return e&&Pe(t,ze(t),e)}(N,e))}else{if(!R[M])return i?e:{};N=function(e,t,r,n){var o=e.constructor;switch(t){case b:return Me(e);case s:case c:return new o(+e);case v:return function(e,t){var r=t?Me(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,n);case _:case w:case j:case O:case T:case $:case S:case A:case E:return function(e,t){var r=t?Me(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}(e,n);case l:return function(e,t,r){return L(t?r(Z(e),!0):Z(e),H,new e.constructor)}(e,n,r);case p:case d:return new o(e);case y:return(u=new(a=e).constructor(a.source,I.exec(a))).lastIndex=a.lastIndex,u;case g:return function(e,t,r){return L(t?r(V(e),!0):V(e),C,new e.constructor)}(e,n,r);case m:return i=e,Te?Object(Te.call(i)):{}}var i;var a,u}(e,M,Re,t)}}k||(k=new Ee);var W=k.get(e);if(W)return W;if(k.set(e,N),!x)var F=r?function(e){return function(e,t,r){var n=t(e);return Ke(e)?n:function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}(n,r(e))}(e,ze,De)}(e):ze(e);return function(e,t){for(var r=-1,n=e?e.length:0;++r<n&&!1!==t(e[r],r,e););}(F||e,function(o,i){F&&(o=e[i=o]),ke(N,i,Re(o,t,r,n,i,e,k))}),N}function xe(e){return!(!Ue(e)||(t=e,Q&&Q in t))&&(Be(e)||J(e)?te:k).test(Je(e));var t}function Me(e){var t=new e.constructor(e.byteLength);return new oe(t).set(new oe(e)),t}function Pe(e,t,r,n){r||(r={});for(var o=-1,i=t.length;++o<i;){var a=t[o],s=n?n(r[a],e[a],a,r,e):void 0;ke(r,a,void 0===s?e[a]:s)}return r}function We(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function Fe(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return xe(r)?r:void 0}$e.prototype.clear=function(){this.__data__=me?me(null):{}},$e.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},$e.prototype.get=function(e){var t=this.__data__;if(me){var r=t[e];return r===n?void 0:r}return Y.call(t,e)?t[e]:void 0},$e.prototype.has=function(e){var t=this.__data__;return me?void 0!==t[e]:Y.call(t,e)},$e.prototype.set=function(e,t){return this.__data__[e]=me&&void 0===t?n:t,this},Se.prototype.clear=function(){this.__data__=[]},Se.prototype.delete=function(e){var t=this.__data__,r=Ne(t,e);return!(r<0||(r==t.length-1?t.pop():ce.call(t,r,1),0))},Se.prototype.get=function(e){var t=this.__data__,r=Ne(t,e);return r<0?void 0:t[r][1]},Se.prototype.has=function(e){return Ne(this.__data__,e)>-1},Se.prototype.set=function(e,t){var r=this.__data__,n=Ne(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},Ae.prototype.clear=function(){this.__data__={hash:new $e,map:new(he||Se),string:new $e}},Ae.prototype.delete=function(e){return We(this,e).delete(e)},Ae.prototype.get=function(e){return We(this,e).get(e)},Ae.prototype.has=function(e){return We(this,e).has(e)},Ae.prototype.set=function(e,t){return We(this,e).set(e,t),this},Ee.prototype.clear=function(){this.__data__=new Se},Ee.prototype.delete=function(e){return this.__data__.delete(e)},Ee.prototype.get=function(e){return this.__data__.get(e)},Ee.prototype.has=function(e){return this.__data__.has(e)},Ee.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Se){var o=n.__data__;if(!he||o.length<r-1)return o.push([e,t]),this;n=this.__data__=new Ae(o)}return n.set(e,t),this};var De=ue?K(ue,Object):function(){return[]},He=function(e){return ee.call(e)};function Ce(e,t){return!!(t=null==t?o:t)&&("number"==typeof e||N.test(e))&&e>-1&&e%1==0&&e<t}function Le(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||z)}function Je(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Ze(e,t){return e===t||e!=e&&t!=t}(pe&&He(new pe(new ArrayBuffer(1)))!=v||he&&He(new he)!=l||ye&&"[object Promise]"!=He(ye.resolve())||ge&&He(new ge)!=g||de&&"[object WeakMap]"!=He(new de))&&(He=function(e){var t=ee.call(e),r=t==h?e.constructor:void 0,n=r?Je(r):void 0;if(n)switch(n){case be:return v;case ve:return l;case _e:return"[object Promise]";case we:return g;case je:return"[object WeakMap]"}return t});var Ke=Array.isArray;function Ve(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=o}(e.length)&&!Be(e)}var qe=fe||function(){return!1};function Be(e){var t=Ue(e)?ee.call(e):"";return t==u||t==f}function Ue(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function ze(e){return Ve(e)?Ie(e):function(e){if(!Le(e))return le(e);var t=[];for(var r in Object(e))Y.call(e,r)&&"constructor"!=r&&t.push(r);return t}(e)}e.exports=function(e){return Re(e,!0,!0)}}),d="[object Object]";var m,b,v=Function.prototype,_=Object.prototype,w=v.toString,j=_.hasOwnProperty,O=w.call(Object),T=_.toString,$=(m=Object.getPrototypeOf,b=Object,function(e){return m(b(e))});var S=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||T.call(e)!=d||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=$(e);if(null===t)return!0;var r=j.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&w.call(r)==O};const A=Array.isArray;function E(e){return"string"==typeof e&&e.length>0&&"."===e[0]?e.slice(1):e}function I(e,t){return function e(t,r,n){const o=g(t);let i,a,s,c,u;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,A(o))for(i=0,a=o.length;i<a;i++){const t=`${n.path}.${i}`;void 0!==o[i]?(n.parent=g(o),n.parentType="array",s=e(r(o[i],void 0,Object.assign({},n,{path:E(t)})),r,Object.assign({},n,{path:E(t)})),Number.isNaN(s)&&i<o.length?(o.splice(i,1),i-=1):o[i]=s):o.splice(i,1)}else if(S(o))for(i=0,a=(c=Object.keys(o)).length;i<a;i++){u=c[i];const t=`${n.path}.${u}`;0===n.depth&&null!=u&&(n.topmostKey=u),n.parent=g(o),n.parentType="object",s=e(r(u,o[u],Object.assign({},n,{path:E(t)})),r,Object.assign({},n,{path:E(t)})),Number.isNaN(s)?delete o[u]:o[u]=s}return o}(e,t,{})}var k="__lodash_hash_undefined__",N=9007199254740991,R="[object Function]",x="[object GeneratorFunction]",M=/^\[object .+?Constructor\]$/,P="object"==typeof i&&i&&i.Object===Object&&i,W="object"==typeof self&&self&&self.Object===Object&&self,F=P||W||Function("return this")();function D(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function H(e,t){return!!(e?e.length:0)&&function(e,t,r){if(t!=t)return function(e,t,r,n){var o=e.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,J,r);var n=r-1,o=e.length;for(;++n<o;)if(e[n]===t)return n;return-1}(e,t,0)>-1}function C(e,t,r){for(var n=-1,o=e?e.length:0;++n<o;)if(r(t,e[n]))return!0;return!1}function L(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function J(e){return e!=e}function Z(e){return function(t){return e(t)}}function K(e,t){return e.has(t)}var V,q=Array.prototype,B=Function.prototype,U=Object.prototype,z=F["__core-js_shared__"],G=(V=/[^.]+$/.exec(z&&z.keys&&z.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"",Q=B.toString,X=U.hasOwnProperty,Y=U.toString,ee=RegExp("^"+Q.call(X).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),te=q.splice,re=Math.max,ne=Math.min,oe=ye(F,"Map"),ie=ye(Object,"create");function ae(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function se(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ce(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ue(e){var t=-1,r=e?e.length:0;for(this.__data__=new ce;++t<r;)this.add(e[t])}function fe(e,t){for(var r,n,o=e.length;o--;)if((r=e[o][0])===(n=t)||r!=r&&n!=n)return o;return-1}function le(e){return!(!de(e)||function(e){return!!G&&G in e}(e))&&(ge(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?ee:M).test(function(e){if(null!=e){try{return Q.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e))}function pe(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=N}(e.length)&&!ge(e)}(e)}(e)?e:[]}function he(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function ye(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return le(r)?r:void 0}function ge(e){var t=de(e)?Y.call(e):"";return t==R||t==x}function de(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}ae.prototype.clear=function(){this.__data__=ie?ie(null):{}},ae.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},ae.prototype.get=function(e){var t=this.__data__;if(ie){var r=t[e];return r===k?void 0:r}return X.call(t,e)?t[e]:void 0},ae.prototype.has=function(e){var t=this.__data__;return ie?void 0!==t[e]:X.call(t,e)},ae.prototype.set=function(e,t){return this.__data__[e]=ie&&void 0===t?k:t,this},se.prototype.clear=function(){this.__data__=[]},se.prototype.delete=function(e){var t=this.__data__,r=fe(t,e);return!(r<0||(r==t.length-1?t.pop():te.call(t,r,1),0))},se.prototype.get=function(e){var t=this.__data__,r=fe(t,e);return r<0?void 0:t[r][1]},se.prototype.has=function(e){return fe(this.__data__,e)>-1},se.prototype.set=function(e,t){var r=this.__data__,n=fe(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},ce.prototype.clear=function(){this.__data__={hash:new ae,map:new(oe||se),string:new ae}},ce.prototype.delete=function(e){return he(this,e).delete(e)},ce.prototype.get=function(e){return he(this,e).get(e)},ce.prototype.has=function(e){return he(this,e).has(e)},ce.prototype.set=function(e,t){return he(this,e).set(e,t),this},ue.prototype.add=ue.prototype.push=function(e){return this.__data__.set(e,k),this},ue.prototype.has=function(e){return this.__data__.has(e)};var me=function(e,t){return t=re(void 0===t?e.length-1:t,0),function(){for(var r=arguments,n=-1,o=re(r.length-t,0),i=Array(o);++n<o;)i[n]=r[t+n];n=-1;for(var a=Array(t+1);++n<t;)a[n]=r[n];return a[t]=i,D(e,this,a)}}(function(e){var t=L(e,pe);return t.length&&t[0]===e[0]?function(e,t,r){for(var n=r?C:H,o=e[0].length,i=e.length,a=i,s=Array(i),c=1/0,u=[];a--;){var f=e[a];a&&t&&(f=L(f,Z(t))),c=ne(f.length,c),s[a]=!r&&(t||o>=120&&f.length>=120)?new ue(a&&f):void 0}f=e[0];var l=-1,p=s[0];e:for(;++l<o&&u.length<c;){var h=f[l],y=t?t(h):h;if(h=r||0!==h?h:0,!(p?K(p,y):n(u,y,r))){for(a=i;--a;){var g=s[a];if(!(g?K(g,y):n(e[a],y,r)))continue e}p&&p.push(y),u.push(h)}}return u}(t):[]});function be(e){return"string"==typeof e?e.length>0?[e]:[]:e}var ve=a(function(e){e.exports=function(){var e=Object.prototype.toString;function t(e,t){return null!=e&&Object.prototype.hasOwnProperty.call(e,t)}function r(e){if(!e)return!0;if(o(e)&&0===e.length)return!0;if("string"!=typeof e){for(var r in e)if(t(e,r))return!1;return!0}return!1}function n(t){return e.call(t)}var o=Array.isArray||function(t){return"[object Array]"===e.call(t)};function i(e){var t=parseInt(e);return t.toString()===e?t:e}function a(e){e=e||{};var a=function(e){return Object.keys(a).reduce(function(t,r){return"create"===r?t:("function"==typeof a[r]&&(t[r]=a[r].bind(a,e)),t)},{})};function s(r,n){return e.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||t(r,n)}function c(e,t){if(s(e,t))return e[t]}function u(e,t,r,n){if("number"==typeof t&&(t=[t]),!t||0===t.length)return e;if("string"==typeof t)return u(e,t.split(".").map(i),r,n);var o=t[0],a=c(e,o);return 1===t.length?(void 0!==a&&n||(e[o]=r),a):(void 0===a&&("number"==typeof t[1]?e[o]=[]:e[o]={}),u(e[o],t.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var s=i(n[a]);if(!("number"==typeof s&&o(r)&&s<r.length||(e.includeInheritedProps?s in Object(r):t(r,s))))return!1;r=r[s]}return!0},a.ensureExists=function(e,t,r){return u(e,t,r,!0)},a.set=function(e,t,r,n){return u(e,t,r,n)},a.insert=function(e,t,r,n){var i=a.get(e,t);n=~~n,o(i)||(i=[],a.set(e,t,i)),i.splice(n,0,r)},a.empty=function(e,t){var i,c;if(!r(t)&&null!=e&&(i=a.get(e,t))){if("string"==typeof i)return a.set(e,t,"");if(function(e){return"boolean"==typeof e||"[object Boolean]"===n(e)}(i))return a.set(e,t,!1);if("number"==typeof i)return a.set(e,t,0);if(o(i))i.length=0;else{if(!function(e){return"object"==typeof e&&"[object Object]"===n(e)}(i))return a.set(e,t,null);for(c in i)s(i,c)&&delete i[c]}}},a.push=function(e,t){var r=a.get(e,t);o(r)||(r=[],a.set(e,t,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(e,t,r){for(var n,o=0,i=t.length;o<i;o++)if(void 0!==(n=a.get(e,t[o])))return n;return r},a.get=function(e,t,r){if("number"==typeof t&&(t=[t]),!t||0===t.length)return e;if(null==e)return r;if("string"==typeof t)return a.get(e,t.split("."),r);var n=i(t[0]),o=c(e,n);return void 0===o?r:1===t.length?o:a.get(e[n],t.slice(1),r)},a.del=function(e,t){if("number"==typeof t&&(t=[t]),null==e)return e;if(r(t))return e;if("string"==typeof t)return a.del(e,t.split("."));var n=i(t[0]);return s(e,n)?1!==t.length?a.del(e[n],t.slice(1)):(o(e)?e.splice(n,1):delete e[n],e):e},a}var s=a();return s.create=a,s.withInheritedProps=a({includeInheritedProps:!0}),s}()}),_e=function(e){var t=(e=Math.abs(e))%100;if(t>=10&&t<=20)return"th";var r=e%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function we(e){if("number"!=typeof e)throw new TypeError("Expected Number, got "+typeof e+" "+e);return Number.isFinite(e)?e+_e(e):e}we.indicator=_e;var je=we;const Oe=/[|\\{}()[\]^$+*?.-]/g;var Te=e=>{if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(Oe,"\\$&")};const $e=new Map;function Se(e,t){t={caseSensitive:!1,...t};const r=e+JSON.stringify(t);if($e.has(r))return $e.get(r);const n="!"===e[0];n&&(e=e.slice(1)),e=Te(e).replace(/\\\*/g,".*");const o=new RegExp(`^${e}$`,t.caseSensitive?"":"i");return o.negated=n,$e.set(r,o),o}var Ae=(e,t,r)=>{if(!Array.isArray(e)||!Array.isArray(t))throw new TypeError(`Expected two arrays, got ${typeof e} ${typeof t}`);if(0===t.length)return e;const n="!"===t[0][0];t=t.map(e=>Se(e,r));const o=[];for(const r of e){let e=n;for(const n of t)n.test(r)&&(e=!n.negated);e&&o.push(r)}return o};function Ee(e,t,r){return function e(t,r,n,o=!0){const i=Object.prototype.hasOwnProperty;function a(e){return null!=e}function s(e){return"Object"===c(e)}function u(e,t){return t=be(t),Array.from(e).filter(e=>!t.some(t=>Ae.isMatch(e,t,{caseSensitive:!0})))}const f=["any","anything","every","everything","all","whatever","whatevs"],l=Array.isArray;if(!a(t))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const p={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let h;if(h=a(n)&&s(n)?Object.assign({},p,n):Object.assign({},p),a(h.ignoreKeys)&&h.ignoreKeys?h.ignoreKeys=be(h.ignoreKeys):h.ignoreKeys=[],a(h.ignorePaths)&&h.ignorePaths?h.ignorePaths=be(h.ignorePaths):h.ignorePaths=[],a(h.acceptArraysIgnore)&&h.acceptArraysIgnore?h.acceptArraysIgnore=be(h.acceptArraysIgnore):h.acceptArraysIgnore=[],h.msg="string"==typeof h.msg?h.msg.trim():h.msg,":"===h.msg[h.msg.length-1]&&(h.msg=h.msg.slice(0,h.msg.length-1).trim()),h.schema&&(Object.keys(h.schema).forEach(e=>{if(s(h.schema[e])){const t={};I(h.schema[e],(r,n,o)=>{const i=void 0!==n?n:r;return l(i)||s(i)||(t[`${e}.${o.path}`]=i),i}),delete h.schema[e],h.schema=Object.assign(h.schema,t)}}),Object.keys(h.schema).forEach(e=>{l(h.schema[e])||(h.schema[e]=[h.schema[e]]),h.schema[e]=h.schema[e].map(String).map(e=>e.toLowerCase()).map(e=>e.trim())})),a(r)||(r={}),o&&e(h,p,{enforceStrictKeyset:!1},!1),h.enforceStrictKeyset)if(a(h.schema)&&Object.keys(h.schema).length>0){if(0!==u(y(Object.keys(t),Object.keys(r).concat(Object.keys(h.schema))),h.ignoreKeys).length){const e=y(Object.keys(t),Object.keys(r).concat(Object.keys(h.schema)));throw new TypeError(`${h.msg}: ${h.optsVarName}.enforceStrictKeyset is on and the following key${e.length>1?"s":""} ${e.length>1?"are":"is"} not covered by schema and/or reference objects: ${e.join(", ")}`)}}else{if(!(a(r)&&Object.keys(r).length>0))throw new TypeError(`${h.msg}: Both ${h.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==u(y(Object.keys(t),Object.keys(r)),h.ignoreKeys).length){const e=y(Object.keys(t),Object.keys(r));throw new TypeError(`${h.msg}: The input object has key${e.length>1?"s":""} which ${e.length>1?"are":"is"} not covered by the reference object: ${e.join(", ")}`)}if(0!==u(y(Object.keys(r),Object.keys(t)),h.ignoreKeys).length){const e=y(Object.keys(r),Object.keys(t));throw new TypeError(`${h.msg}: The reference object has key${e.length>1?"s":""} which ${e.length>1?"are":"is"} not present in the input object: ${e.join(", ")}`)}}const g=[];I(t,(e,n,o)=>{let a=n,u=e;if("array"===o.parentType&&(u=void 0,a=e),l(g)&&g.length&&g.some(e=>o.path.startsWith(e)))return a;if(u&&h.ignoreKeys.some(e=>Ae.isMatch(u,e)))return a;if(h.ignorePaths.some(e=>Ae.isMatch(o.path,e)))return a;const p=!(!s(a)&&!l(a)&&l(o.parent));let y=!1;s(h.schema)&&i.call(h.schema,ve.get(o.path))&&(y=!0);let d=!1;if(s(r)&&ve.has(r,ve.get(o.path))&&(d=!0),h.enforceStrictKeyset&&p&&!y&&!d)throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path} is neither covered by reference object (second input argument), nor ${h.optsVarName}.schema! To stop this error, turn off ${h.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${h.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(t,null,4)}\n\nref = ${JSON.stringify(r,null,4)}\n\ninnerObj = ${JSON.stringify(o,null,4)}\n\nopts = ${JSON.stringify(h,null,4)}\n\ncurrent = ${JSON.stringify(a,null,4)}\n\n`);if(y){const e=be(h.schema[o.path]).map(String).map(e=>e.toLowerCase());if(ve.set(h.schema,o.path,e),me(e,f).length)g.push(o.path);else if(!0!==a&&!1!==a&&!e.includes(c(a).toLowerCase())||(!0===a||!1===a)&&!e.includes(String(a))&&!e.includes("boolean")){if(!l(a)||!h.acceptArrays)throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path} was customised to ${"string"!==c(a)?'"':""}${JSON.stringify(a,null,0)}${"string"!==c(a)?'"':""} (type: ${c(a).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(e,null,0)})`);for(let t=0,r=a.length;t<r;t++)if(!e.includes(c(a[t]).toLowerCase()))throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path}.${t}, the ${je(t+1)} element (equal to ${JSON.stringify(a[t],null,0)}) is of a type ${c(a[t]).toLowerCase()}, but only the following are allowed by the ${h.optsVarName}.schema: ${e.join(", ")}`)}}else if(d){const t=ve.get(r,o.path);if(h.acceptArrays&&l(a)&&!h.acceptArraysIgnore.includes(e)){if(!a.every(t=>c(t).toLowerCase()===c(r[e]).toLowerCase()))throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path} was customised to be array, but not all of its elements are ${c(r[e]).toLowerCase()}-type`)}else if(c(a)!==c(t))throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path} was customised to ${"string"===c(a).toLowerCase()?"":'"'}${JSON.stringify(a,null,0)}${"string"===c(a).toLowerCase()?"":'"'} which is not ${c(t).toLowerCase()} but ${c(a).toLowerCase()}`)}return a})}(e,t,r)}Ae.isMatch=(e,t,r)=>{const n=Se(t,r),o=n.test(e);return n.negated?!o:o};const Ie=Array.isArray;function ke(e,t){if(!Ie(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const r={strictlyTwoElementsInRangeArrays:!1,progressFn:null},o=Object.assign({},r,t);let i,a;if(Ee(o,r,{msg:"ranges-sort: [THROW_ID_02*]",schema:{progressFn:["function","false","null"]}}),o.strictlyTwoElementsInRangeArrays&&!e.every((e,t)=>2===e.length||(i=t,a=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${s(i)} range (${JSON.stringify(e[i],null,4)}) has not two but ${a} elements!`);if(!e.every((e,t)=>!(!n(e[0],{includeZero:!0})||!n(e[1],{includeZero:!0}))||(i=t,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${s(i)} range (${JSON.stringify(e[i],null,4)}) does not consist of only natural numbers!`);const c=e.length*e.length;let u=0;return Array.from(e).sort((e,t)=>(o.progressFn&&(u++,o.progressFn(Math.floor(100*u/c))),e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1))}function Ne(e,t){let r;if(r=t&&"number"==typeof t?t:1,"string"==typeof e){if(0===e.length)return"";if(""===e.trim()){const t=(e.match(/\n/g)||[]).length;return t?"\n".repeat(Math.min(t,r)):" "}let t="";if(""===e[0].trim()){t=" ";let n=0;for(let t=0,r=e.length;t<r&&("\n"===e[t]&&n++,0===e[t].trim().length);t++);n&&(t="\n".repeat(Math.min(n,r)))}let n="";if(""===e.slice(-1).trim()){n=" ";let t=0;for(let r=e.length;r--&&("\n"===e[r]&&t++,0===e[r].trim().length););t&&(n="\n".repeat(Math.min(t,r)))}return t+e.trim()+n}return e}function Re(e){return null!=e}var xe=Array.isArray,Me=Number.isInteger;function Pe(e){return"string"==typeof e}function We(e){throw new Error("ranges-push/Ranges/add(): [THROW_ID_01] Missing ".concat(s(e)," input parameter!"))}function Fe(e){return o(e,{includeZero:!0})?parseInt(e,10):e}return function(){function i(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var r=Object.assign({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1},t);if(r.mergeType&&1!==r.mergeType&&2!==r.mergeType)if(Pe(r.mergeType)&&"1"===r.mergeType.trim())r.mergeType=1;else{if(!Pe(r.mergeType)||"2"!==r.mergeType.trim())throw new Error('ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(e(r.mergeType),'", equal to ').concat(JSON.stringify(r.mergeType,null,4)));r.mergeType=2}this.opts=r}var a,c,u;return a=i,(c=[{key:"add",value:function(){for(var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We(1),a=arguments.length>1?arguments[1]:void 0,c=arguments.length>2?arguments[2]:void 0,u=arguments.length,f=new Array(u>3?u-3:0),l=3;l<u;l++)f[l-3]=arguments[l];if(f.length>0)throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ".concat(JSON.stringify(f,null,4)));if(null!==i||void 0!==a||void 0!==c){var p=o(i,{includeZero:!0})?parseInt(i,10):i,h=o(a,{includeZero:!0})?parseInt(a,10):a;if(xe(i)&&!Re(a)){var y,g;if(i.length>0){if(!i.every(function(e,t){return!!xe(e)||(y=t,g=e,!1)}))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_07] first argument was given as array but it contains not only range arrays. For example, at index ".concat(y," we have ").concat(e(g),"-type value:\n").concat(JSON.stringify(g,null,4),"."));i.forEach(function(o,i){if(!n(Fe(o[0]),{includeZero:!0}))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_06] The ".concat(s(i)," ranges array's starting range index, an element at its zero'th index, is not a natural number! It's equal to: ").concat(o[0],"."));if(!n(Fe(o[1]),{includeZero:!0}))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_05] The ".concat(s(i)," ranges array's ending range index, an element at its first index, is not a natural number! It's equal to: ").concat(o[1],"."));if(Re(o[2])&&!Pe(o[2]))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_04] The ".concat(s(i),' ranges array\'s "to add" value is not string but ').concat(e(o[2]),"! It's equal to: ").concat(o[2],"."));t.add.apply(t,r(o))})}}else{if(!n(p,{includeZero:!0})||!n(h,{includeZero:!0}))throw n(p,{includeZero:!0})?new TypeError('ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(e(h),'" equal to: ').concat(JSON.stringify(h,null,4))):new TypeError('ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(e(p),'" equal to: ').concat(JSON.stringify(p,null,4)));if(Re(c)&&!Pe(c))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ".concat(e(c),", equal to:\n").concat(JSON.stringify(c,null,4)));if(Re(this.slices)&&xe(this.last())&&p===this.last()[1]){if(this.last()[1]=h,null!==this.last()[2]&&Re(c)){var d=!(Re(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?c:this.last()[2]+c;this.opts.limitToBeAddedWhitespace&&(d=Ne(d,this.opts.limitLinebreaksCount)),Pe(d)&&!d.length||(this.last()[2]=d)}}else{this.slices||(this.slices=[]);var m=void 0===c||Pe(c)&&!c.length?[p,h]:[p,h,this.opts.limitToBeAddedWhitespace?Ne(c,this.opts.limitLinebreaksCount):c];this.slices.push(m)}}}}},{key:"push",value:function(e,t,r){for(var n=arguments.length,o=new Array(n>3?n-3:0),i=3;i<n;i++)o[i-3]=arguments[i];this.add.apply(this,[e,t,r].concat(o))}},{key:"current",value:function(){var e=this;return null!=this.slices?(this.slices=function(e,t){function r(e){return"string"==typeof e}if(!Array.isArray(e))return e;const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let o;if(t){if(!S(t))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(t,null,4)} (type ${typeof t})`);if((o=Object.assign({},n,t)).progressFn&&S(o.progressFn)&&!Object.keys(o.progressFn).length)o.progressFn=null;else if(o.progressFn&&"function"!=typeof o.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof o.progressFn}", equal to ${JSON.stringify(o.progressFn,null,4)}`);if(o.mergeType&&1!==o.mergeType&&2!==o.mergeType)if(r(o.mergeType)&&"1"===o.mergeType.trim())o.mergeType=1;else{if(!r(o.mergeType)||"2"!==o.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof o.mergeType}", equal to ${JSON.stringify(o.mergeType,null,4)}`);o.mergeType=2}if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof o.joinRangesThatTouchEdges}", equal to ${JSON.stringify(o.joinRangesThatTouchEdges,null,4)}`)}else o=g(n);const i=g(e).filter(e=>void 0!==e[2]||e[0]!==e[1]);let a,s,c;const u=(a=o.progressFn?ke(i,{progressFn:e=>{(c=Math.floor(e/5))!==s&&(s=c,o.progressFn(c))}}):ke(i)).length-1;for(let e=u;e>0;e--)o.progressFn&&(c=Math.floor(78*(1-e/u))+21)!==s&&c>s&&(s=c,o.progressFn(c)),(a[e][0]<=a[e-1][0]||!o.joinRangesThatTouchEdges&&a[e][0]<a[e-1][1]||o.joinRangesThatTouchEdges&&a[e][0]<=a[e-1][1])&&(a[e-1][0]=Math.min(a[e][0],a[e-1][0]),a[e-1][1]=Math.max(a[e][1],a[e-1][1]),void 0!==a[e][2]&&(a[e-1][0]>=a[e][0]||a[e-1][1]<=a[e][1])&&null!==a[e-1][2]&&(null===a[e][2]&&null!==a[e-1][2]?a[e-1][2]=null:void 0!==a[e-1][2]?2===o.mergeType&&a[e-1][0]===a[e][0]?a[e-1][2]=a[e][2]:a[e-1][2]+=a[e][2]:a[e-1][2]=a[e][2]),a.splice(e,1),e=a.length);return a}(this.slices,{mergeType:this.opts.mergeType}),this.opts.limitToBeAddedWhitespace?this.slices.map(function(t){return Re(t[2])?[t[0],t[1],Ne(t[2],e.opts.limitLinebreaksCount)]:t}):this.slices):null}},{key:"wipe",value:function(){this.slices=void 0}},{key:"replace",value:function(e){if(xe(e)&&e.length){if(!xe(e[0])||!Me(e[0][0]))throw new Error("ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ".concat(JSON.stringify(e[0],null,4)," should be an array and its first element should be an integer, a string index."));this.slices=g(e)}else this.slices=void 0}},{key:"last",value:function(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}])&&t(a.prototype,c),u&&t(a,u),i}()});
