/**
 * emlint
 * Detects errors in HTML/CSS, proposes fixes, email-template friendly
 * Version: 0.5.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/emlint
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).emlint={})}(this,function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t,e){return t(e={exports:{}},e.exports),e.exports}var o=r(function(t,e){var r,o,i,a,s,c,u,l,f,p,h,y,g,d,m,_,b,v,w,j;t.exports=(r="function"==typeof Promise,o="object"==typeof self?self:n,i="undefined"!=typeof Symbol,a="undefined"!=typeof Map,s="undefined"!=typeof Set,c="undefined"!=typeof WeakMap,u="undefined"!=typeof WeakSet,l="undefined"!=typeof DataView,f=i&&void 0!==Symbol.iterator,p=i&&void 0!==Symbol.toStringTag,h=s&&"function"==typeof Set.prototype.entries,y=a&&"function"==typeof Map.prototype.entries,g=h&&Object.getPrototypeOf((new Set).entries()),d=y&&Object.getPrototypeOf((new Map).entries()),m=f&&"function"==typeof Array.prototype[Symbol.iterator],_=m&&Object.getPrototypeOf([][Symbol.iterator]()),b=f&&"function"==typeof String.prototype[Symbol.iterator],v=b&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,j=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===p||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var n=p&&t[Symbol.toStringTag];if("string"==typeof n)return n;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":r&&i===Promise.prototype?"Promise":s&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":u&&i===WeakSet.prototype?"WeakSet":c&&i===WeakMap.prototype?"WeakMap":l&&i===DataView.prototype?"DataView":a&&i===d?"Map Iterator":s&&i===g?"Set Iterator":m&&i===_?"Array Iterator":b&&i===v?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(w,j)})});function i(t,e,n){if(e!=e)return function(t,e,n,r){for(var o=t.length,i=n+(r?1:-1);r?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,s,n);for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}function a(t,e,n,r){for(var o=n-1,i=t.length;++o<i;)if(r(t[o],e))return o;return-1}function s(t){return t!=t}var c=Array.prototype.splice;function u(t,e,n,r){var o,s=r?a:i,u=-1,l=e.length,f=t;for(t===e&&(e=function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(e)),n&&(f=function(t,e){for(var n=-1,r=t?t.length:0,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}(t,(o=n,function(t){return o(t)})));++u<l;)for(var p=0,h=e[u],y=n?n(h):h;(p=s(f,y,p,r))>-1;)f!==t&&c.call(f,p,1),c.call(t,p,1);return t}var l=function(t,e){return t&&t.length&&e&&e.length?u(t,e):t},f=r(function(t,e){var r=200,o="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",s="[object Boolean]",c="[object Date]",u="[object Function]",l="[object GeneratorFunction]",f="[object Map]",p="[object Number]",h="[object Object]",y="[object RegExp]",g="[object Set]",d="[object String]",m="[object Symbol]",_="[object ArrayBuffer]",b="[object DataView]",v="[object Float32Array]",w="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",A="[object Int32Array]",L="[object Uint8Array]",C="[object Uint8ClampedArray]",S="[object Uint16Array]",$="[object Uint32Array]",F=/\w*$/,R=/^\[object .+?Constructor\]$/,E=/^(?:0|[1-9]\d*)$/,k={};k[a]=k["[object Array]"]=k[_]=k[b]=k[s]=k[c]=k[v]=k[w]=k[j]=k[O]=k[A]=k[f]=k[p]=k[h]=k[y]=k[g]=k[d]=k[m]=k[L]=k[C]=k[S]=k[$]=!0,k["[object Error]"]=k[u]=k["[object WeakMap]"]=!1;var T="object"==typeof n&&n&&n.Object===Object&&n,x="object"==typeof self&&self&&self.Object===Object&&self,N=T||x||Function("return this")(),I=e&&!e.nodeType&&e,M=I&&t&&!t.nodeType&&t,P=M&&M.exports===I;function W(t,e){return t.set(e[0],e[1]),t}function D(t,e){return t.add(e),t}function H(t,e,n,r){var o=-1,i=t?t.length:0;for(r&&i&&(n=t[++o]);++o<i;)n=e(n,t[o],o,t);return n}function K(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function J(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function V(t,e){return function(n){return t(e(n))}}function B(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}var Z,q=Array.prototype,U=Function.prototype,z=Object.prototype,G=N["__core-js_shared__"],Q=(Z=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+Z:"",X=U.toString,Y=z.hasOwnProperty,tt=z.toString,et=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nt=P?N.Buffer:void 0,rt=N.Symbol,ot=N.Uint8Array,it=V(Object.getPrototypeOf,Object),at=Object.create,st=z.propertyIsEnumerable,ct=q.splice,ut=Object.getOwnPropertySymbols,lt=nt?nt.isBuffer:void 0,ft=V(Object.keys,Object),pt=Mt(N,"DataView"),ht=Mt(N,"Map"),yt=Mt(N,"Promise"),gt=Mt(N,"Set"),dt=Mt(N,"WeakMap"),mt=Mt(Object,"create"),_t=Kt(pt),bt=Kt(ht),vt=Kt(yt),wt=Kt(gt),jt=Kt(dt),Ot=rt?rt.prototype:void 0,At=Ot?Ot.valueOf:void 0;function Lt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Ct(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function St(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function $t(t){this.__data__=new Ct(t)}function Ft(t,e){var n=Vt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Bt(t)}(t)&&Y.call(t,"callee")&&(!st.call(t,"callee")||tt.call(t)==a)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,o=!!r;for(var i in t)!e&&!Y.call(t,i)||o&&("length"==i||Dt(i,r))||n.push(i);return n}function Rt(t,e,n){var r=t[e];Y.call(t,e)&&Jt(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function Et(t,e){for(var n=t.length;n--;)if(Jt(t[n][0],e))return n;return-1}function kt(t,e,n,r,o,i,R){var E;if(r&&(E=i?r(t,o,i,R):r(t)),void 0!==E)return E;if(!Ut(t))return t;var T=Vt(t);if(T){if(E=function(t){var e=t.length,n=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!e)return function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(t,E)}else{var x=Wt(t),N=x==u||x==l;if(Zt(t))return function(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,e);if(x==h||x==a||N&&!i){if(K(t))return i?t:{};if(E=function(t){return"function"!=typeof t.constructor||Ht(t)?{}:(e=it(t),Ut(e)?at(e):{});var e}(N?{}:t),!e)return function(t,e){return Nt(t,Pt(t),e)}(t,function(t,e){return t&&Nt(e,zt(e),t)}(E,t))}else{if(!k[x])return i?t:{};E=function(t,e,n,r){var o=t.constructor;switch(e){case _:return xt(t);case s:case c:return new o(+t);case b:return function(t,e){var n=e?xt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,r);case v:case w:case j:case O:case A:case L:case C:case S:case $:return function(t,e){var n=e?xt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,r);case f:return function(t,e,n){return H(e?n(J(t),!0):J(t),W,new t.constructor)}(t,r,n);case p:case d:return new o(t);case y:return(u=new(a=t).constructor(a.source,F.exec(a))).lastIndex=a.lastIndex,u;case g:return function(t,e,n){return H(e?n(B(t),!0):B(t),D,new t.constructor)}(t,r,n);case m:return i=t,At?Object(At.call(i)):{}}var i;var a,u}(t,x,kt,e)}}R||(R=new $t);var I=R.get(t);if(I)return I;if(R.set(t,E),!T)var M=n?function(t){return function(t,e,n){var r=e(t);return Vt(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,zt,Pt)}(t):zt(t);return function(t,e){for(var n=-1,r=t?t.length:0;++n<r&&!1!==e(t[n],n,t););}(M||t,function(o,i){M&&(o=t[i=o]),Rt(E,i,kt(o,e,n,r,i,t,R))}),E}function Tt(t){return!(!Ut(t)||(e=t,Q&&Q in e))&&(qt(t)||K(t)?et:R).test(Kt(t));var e}function xt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Nt(t,e,n,r){n||(n={});for(var o=-1,i=e.length;++o<i;){var a=e[o],s=r?r(n[a],t[a],a,n,t):void 0;Rt(n,a,void 0===s?t[a]:s)}return n}function It(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function Mt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Tt(n)?n:void 0}Lt.prototype.clear=function(){this.__data__=mt?mt(null):{}},Lt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Lt.prototype.get=function(t){var e=this.__data__;if(mt){var n=e[t];return n===o?void 0:n}return Y.call(e,t)?e[t]:void 0},Lt.prototype.has=function(t){var e=this.__data__;return mt?void 0!==e[t]:Y.call(e,t)},Lt.prototype.set=function(t,e){return this.__data__[t]=mt&&void 0===e?o:e,this},Ct.prototype.clear=function(){this.__data__=[]},Ct.prototype.delete=function(t){var e=this.__data__,n=Et(e,t);return!(n<0||(n==e.length-1?e.pop():ct.call(e,n,1),0))},Ct.prototype.get=function(t){var e=this.__data__,n=Et(e,t);return n<0?void 0:e[n][1]},Ct.prototype.has=function(t){return Et(this.__data__,t)>-1},Ct.prototype.set=function(t,e){var n=this.__data__,r=Et(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},St.prototype.clear=function(){this.__data__={hash:new Lt,map:new(ht||Ct),string:new Lt}},St.prototype.delete=function(t){return It(this,t).delete(t)},St.prototype.get=function(t){return It(this,t).get(t)},St.prototype.has=function(t){return It(this,t).has(t)},St.prototype.set=function(t,e){return It(this,t).set(t,e),this},$t.prototype.clear=function(){this.__data__=new Ct},$t.prototype.delete=function(t){return this.__data__.delete(t)},$t.prototype.get=function(t){return this.__data__.get(t)},$t.prototype.has=function(t){return this.__data__.has(t)},$t.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Ct){var o=n.__data__;if(!ht||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new St(o)}return n.set(t,e),this};var Pt=ut?V(ut,Object):function(){return[]},Wt=function(t){return tt.call(t)};function Dt(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||E.test(t))&&t>-1&&t%1==0&&t<e}function Ht(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||z)}function Kt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Jt(t,e){return t===e||t!=t&&e!=e}(pt&&Wt(new pt(new ArrayBuffer(1)))!=b||ht&&Wt(new ht)!=f||yt&&"[object Promise]"!=Wt(yt.resolve())||gt&&Wt(new gt)!=g||dt&&"[object WeakMap]"!=Wt(new dt))&&(Wt=function(t){var e=tt.call(t),n=e==h?t.constructor:void 0,r=n?Kt(n):void 0;if(r)switch(r){case _t:return b;case bt:return f;case vt:return"[object Promise]";case wt:return g;case jt:return"[object WeakMap]"}return e});var Vt=Array.isArray;function Bt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!qt(t)}var Zt=lt||function(){return!1};function qt(t){var e=Ut(t)?tt.call(t):"";return e==u||e==l}function Ut(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function zt(t){return Bt(t)?Ft(t):function(t){if(!Ht(t))return ft(t);var e=[];for(var n in Object(t))Y.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}t.exports=function(t){return kt(t,!0,!0)}}),p="[object Object]";var h,y,g=Function.prototype,d=Object.prototype,m=g.toString,_=d.hasOwnProperty,b=m.call(Object),v=d.toString,w=(h=Object.getPrototypeOf,y=Object,function(t){return h(y(t))});var j=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||v.call(t)!=p||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=w(t);if(null===e)return!0;var n=_.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&m.call(n)==b};const O=Array.isArray;function A(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function L(t,e){return function t(e,n,r){const o=f(e);let i,a,s,c,u;if((r=Object.assign({depth:-1,path:""},r)).depth+=1,O(o))for(i=0,a=o.length;i<a;i++){const e=`${r.path}.${i}`;void 0!==o[i]?(r.parent=f(o),r.parentType="array",s=t(n(o[i],void 0,Object.assign({},r,{path:A(e)})),n,Object.assign({},r,{path:A(e)})),Number.isNaN(s)&&i<o.length?(o.splice(i,1),i-=1):o[i]=s):o.splice(i,1)}else if(j(o))for(i=0,a=(c=Object.keys(o)).length;i<a;i++){u=c[i];const e=`${r.path}.${u}`;0===r.depth&&null!=u&&(r.topmostKey=u),r.parent=f(o),r.parentType="object",s=t(n(u,o[u],Object.assign({},r,{path:A(e)})),n,Object.assign({},r,{path:A(e)})),Number.isNaN(s)?delete o[u]:o[u]=s}return o}(t,e,{})}var C="__lodash_hash_undefined__",S=9007199254740991,$="[object Function]",F="[object GeneratorFunction]",R=/^\[object .+?Constructor\]$/,E="object"==typeof n&&n&&n.Object===Object&&n,k="object"==typeof self&&self&&self.Object===Object&&self,T=E||k||Function("return this")();function x(t,e){return!!(t?t.length:0)&&function(t,e,n){if(e!=e)return function(t,e,n,r){var o=t.length,i=n+(r?1:-1);for(;r?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,M,n);var r=n-1,o=t.length;for(;++r<o;)if(t[r]===e)return r;return-1}(t,e,0)>-1}function N(t,e,n){for(var r=-1,o=t?t.length:0;++r<o;)if(n(e,t[r]))return!0;return!1}function I(t,e){for(var n=-1,r=t?t.length:0,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}function M(t){return t!=t}function P(t){return function(e){return t(e)}}function W(t,e){return t.has(e)}var D,H=Array.prototype,K=Function.prototype,J=Object.prototype,V=T["__core-js_shared__"],B=(D=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+D:"",Z=K.toString,q=J.hasOwnProperty,U=J.toString,z=RegExp("^"+Z.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),G=H.splice,Q=Math.max,X=Math.min,Y=ut(T,"Map"),tt=ut(Object,"create");function et(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function nt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function rt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function ot(t){var e=-1,n=t?t.length:0;for(this.__data__=new rt;++e<n;)this.add(t[e])}function it(t,e){for(var n,r,o=t.length;o--;)if((n=t[o][0])===(r=e)||n!=n&&r!=r)return o;return-1}function at(t){return!(!ft(t)||(e=t,B&&B in e))&&(lt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?z:R).test(function(t){if(null!=t){try{return Z.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function st(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=S}(t.length)&&!lt(t)}(t)}(t)?t:[]}function ct(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function ut(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return at(n)?n:void 0}function lt(t){var e=ft(t)?U.call(t):"";return e==$||e==F}function ft(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}et.prototype.clear=function(){this.__data__=tt?tt(null):{}},et.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},et.prototype.get=function(t){var e=this.__data__;if(tt){var n=e[t];return n===C?void 0:n}return q.call(e,t)?e[t]:void 0},et.prototype.has=function(t){var e=this.__data__;return tt?void 0!==e[t]:q.call(e,t)},et.prototype.set=function(t,e){return this.__data__[t]=tt&&void 0===e?C:e,this},nt.prototype.clear=function(){this.__data__=[]},nt.prototype.delete=function(t){var e=this.__data__,n=it(e,t);return!(n<0||(n==e.length-1?e.pop():G.call(e,n,1),0))},nt.prototype.get=function(t){var e=this.__data__,n=it(e,t);return n<0?void 0:e[n][1]},nt.prototype.has=function(t){return it(this.__data__,t)>-1},nt.prototype.set=function(t,e){var n=this.__data__,r=it(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},rt.prototype.clear=function(){this.__data__={hash:new et,map:new(Y||nt),string:new et}},rt.prototype.delete=function(t){return ct(this,t).delete(t)},rt.prototype.get=function(t){return ct(this,t).get(t)},rt.prototype.has=function(t){return ct(this,t).has(t)},rt.prototype.set=function(t,e){return ct(this,t).set(t,e),this},ot.prototype.add=ot.prototype.push=function(t){return this.__data__.set(t,C),this},ot.prototype.has=function(t){return this.__data__.has(t)};var pt=function(t,e){return e=Q(void 0===e?t.length-1:e,0),function(){for(var n=arguments,r=-1,o=Q(n.length-e,0),i=Array(o);++r<o;)i[r]=n[e+r];r=-1;for(var a=Array(e+1);++r<e;)a[r]=n[r];return a[e]=i,function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}(t,this,a)}}(function(t){var e=I(t,st);return e.length&&e[0]===t[0]?function(t,e,n){for(var r=n?N:x,o=t[0].length,i=t.length,a=i,s=Array(i),c=1/0,u=[];a--;){var l=t[a];a&&e&&(l=I(l,P(e))),c=X(l.length,c),s[a]=!n&&(e||o>=120&&l.length>=120)?new ot(a&&l):void 0}l=t[0];var f=-1,p=s[0];t:for(;++f<o&&u.length<c;){var h=l[f],y=e?e(h):h;if(h=n||0!==h?h:0,!(p?W(p,y):r(u,y,n))){for(a=i;--a;){var g=s[a];if(!(g?W(g,y):r(t[a],y,n)))continue t}p&&p.push(y),u.push(h)}}return u}(e):[]});function ht(t){return"string"==typeof t?t.length>0?[t]:[]:t}var yt=r(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function n(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var n in t)if(e(t,n))return!1;return!0}return!1}function r(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce(function(e,n){return"create"===n?e:("function"==typeof a[n]&&(e[n]=a[n].bind(a,t)),e)},{})};function s(n,r){return t.includeInheritedProps||"number"==typeof r&&Array.isArray(n)||e(n,r)}function c(t,e){if(s(t,e))return t[e]}function u(t,e,n,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return u(t,e.split(".").map(i),n,r);var o=e[0],a=c(t,o);return 1===e.length?(void 0!==a&&r||(t[o]=n),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),u(t[o],e.slice(1),n,r))}return a.has=function(n,r){if("number"==typeof r?r=[r]:"string"==typeof r&&(r=r.split(".")),!r||0===r.length)return!!n;for(var a=0;a<r.length;a++){var s=i(r[a]);if(!("number"==typeof s&&o(n)&&s<n.length||(t.includeInheritedProps?s in Object(n):e(n,s))))return!1;n=n[s]}return!0},a.ensureExists=function(t,e,n){return u(t,e,n,!0)},a.set=function(t,e,n,r){return u(t,e,n,r)},a.insert=function(t,e,n,r){var i=a.get(t,e);r=~~r,o(i)||(i=[],a.set(t,e,i)),i.splice(r,0,n)},a.empty=function(t,e){var i,c;if(!n(e)&&null!=t&&(i=a.get(t,e))){if("string"==typeof i)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===r(t)}(i))return a.set(t,e,!1);if("number"==typeof i)return a.set(t,e,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===r(t)}(i))return a.set(t,e,null);for(c in i)s(i,c)&&delete i[c]}}},a.push=function(t,e){var n=a.get(t,e);o(n)||(n=[],a.set(t,e,n)),n.push.apply(n,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,n){for(var r,o=0,i=e.length;o<i;o++)if(void 0!==(r=a.get(t,e[o])))return r;return n},a.get=function(t,e,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return n;if("string"==typeof e)return a.get(t,e.split("."),n);var r=i(e[0]),o=c(t,r);return void 0===o?n:1===e.length?o:a.get(t[r],e.slice(1),n)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(n(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var r=i(e[0]);return s(t,r)?1!==e.length?a.del(t[r],e.slice(1)):(o(t)?t.splice(r,1):delete t[r],t):t},a}var s=a();return s.create=a,s.withInheritedProps=a({includeInheritedProps:!0}),s}()}),gt=function(t){var e=t%100;if(e>=10&&e<=20)return"th";var n=t%10;return 1===n?"st":2===n?"nd":3===n?"rd":"th"};function dt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+gt(t)}dt.indicator=gt;var mt=dt,_t=/[|\\{}()[\]^$+*?.]/g,bt=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(_t,"\\$&")};const vt=new Map;function wt(t,e){const n=Object.assign({caseSensitive:!1},e),r=t+JSON.stringify(n);if(vt.has(r))return vt.get(r);const o="!"===t[0];o&&(t=t.slice(1)),t=bt(t).replace(/\\\*/g,".*");const i=new RegExp(`^${t}$`,n.caseSensitive?"":"i");return i.negated=o,vt.set(r,i),i}var jt=(t,e,n)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const r="!"===e[0][0];e=e.map(t=>wt(t,n));const o=[];for(const n of t){let t=r;for(const r of e)r.test(n)&&(t=!r.negated);t&&o.push(n)}return o};function Ot(t,e,n){return function t(e,n,r,i=!0){const a=Object.prototype.hasOwnProperty;function s(t){return null!=t}function c(t){return"Object"===o(t)}function u(t,e){return e=ht(e),Array.from(t).filter(t=>!e.some(e=>jt.isMatch(t,e,{caseSensitive:!0})))}const f=["any","anything","every","everything","all","whatever","whatevs"],p=Array.isArray;if(!s(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const h={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let y;if(y=s(r)&&c(r)?Object.assign({},h,r):Object.assign({},h),s(y.ignoreKeys)&&y.ignoreKeys?y.ignoreKeys=ht(y.ignoreKeys):y.ignoreKeys=[],s(y.ignorePaths)&&y.ignorePaths?y.ignorePaths=ht(y.ignorePaths):y.ignorePaths=[],s(y.acceptArraysIgnore)&&y.acceptArraysIgnore?y.acceptArraysIgnore=ht(y.acceptArraysIgnore):y.acceptArraysIgnore=[],y.msg="string"==typeof y.msg?y.msg.trim():y.msg,":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1).trim()),y.schema&&(Object.keys(y.schema).forEach(t=>{if(c(y.schema[t])){const e={};L(y.schema[t],(n,r,o)=>{const i=void 0!==r?r:n;return p(i)||c(i)||(e[`${t}.${o.path}`]=i),i}),delete y.schema[t],y.schema=Object.assign(y.schema,e)}}),Object.keys(y.schema).forEach(t=>{p(y.schema[t])||(y.schema[t]=[y.schema[t]]),y.schema[t]=y.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),s(n)||(n={}),i&&t(y,h,{enforceStrictKeyset:!1},!1),y.enforceStrictKeyset)if(s(y.schema)&&Object.keys(y.schema).length>0){if(0!==u(l(Object.keys(e),Object.keys(n).concat(Object.keys(y.schema))),y.ignoreKeys).length){const t=l(Object.keys(e),Object.keys(n).concat(Object.keys(y.schema)));throw new TypeError(`${y.msg}: ${y.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(s(n)&&Object.keys(n).length>0))throw new TypeError(`${y.msg}: Both ${y.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==u(l(Object.keys(e),Object.keys(n)),y.ignoreKeys).length){const t=l(Object.keys(e),Object.keys(n));throw new TypeError(`${y.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==u(l(Object.keys(n),Object.keys(e)),y.ignoreKeys).length){const t=l(Object.keys(n),Object.keys(e));throw new TypeError(`${y.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const g=[];L(e,(t,r,i)=>{let s=r,u=t;if("array"===i.parentType&&(u=void 0,s=t),p(g)&&g.length&&g.some(t=>i.path.startsWith(t)))return s;if(u&&y.ignoreKeys.some(t=>jt.isMatch(u,t)))return s;if(y.ignorePaths.some(t=>jt.isMatch(i.path,t)))return s;const l=!(!c(s)&&!p(s)&&p(i.parent));let h=!1;c(y.schema)&&a.call(y.schema,yt.get(i.path))&&(h=!0);let d=!1;if(c(n)&&yt.has(n,yt.get(i.path))&&(d=!0),y.enforceStrictKeyset&&l&&!h&&!d)throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} is neither covered by reference object (second input argument), nor ${y.optsVarName}.schema! To stop this error, turn off ${y.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${y.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(e,null,4)}\n\nref = ${JSON.stringify(n,null,4)}\n\ninnerObj = ${JSON.stringify(i,null,4)}\n\nopts = ${JSON.stringify(y,null,4)}\n\ncurrent = ${JSON.stringify(s,null,4)}\n\n`);if(h){const t=ht(y.schema[i.path]).map(String).map(t=>t.toLowerCase());if(yt.set(y.schema,i.path,t),pt(t,f).length)g.push(i.path);else if(!0!==s&&!1!==s&&!t.includes(o(s).toLowerCase())||(!0===s||!1===s)&&!t.includes(String(s))&&!t.includes("boolean")){if(!p(s)||!y.acceptArrays)throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} was customised to ${"string"!==o(s)?'"':""}${JSON.stringify(s,null,0)}${"string"!==o(s)?'"':""} (type: ${o(s).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,n=s.length;e<n;e++)if(!t.includes(o(s[e]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path}.${e}, the ${mt(e+1)} element (equal to ${JSON.stringify(s[e],null,0)}) is of a type ${o(s[e]).toLowerCase()}, but only the following are allowed by the ${y.optsVarName}.schema: ${t.join(", ")}`)}}else if(d){const e=yt.get(n,i.path);if(y.acceptArrays&&p(s)&&!y.acceptArraysIgnore.includes(t)){if(!s.every(e=>o(e).toLowerCase()===o(n[t]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} was customised to be array, but not all of its elements are ${o(n[t]).toLowerCase()}-type`)}else if(o(s)!==o(e))throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} was customised to ${"string"===o(s).toLowerCase()?"":'"'}${JSON.stringify(s,null,0)}${"string"===o(s).toLowerCase()?"":'"'} which is not ${o(e).toLowerCase()} but ${o(s).toLowerCase()}`)}return s})}(t,e,n)}jt.isMatch=((t,e,n)=>{const r=wt(e,n),o=r.test(t);return r.negated?!o:o});var At=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},Lt=r(function(t,e){(e=t.exports=function(t){return t+e.suffix(+t)}).suffix=function(t){return t%=100,1===Math.floor(t/10)?"th":t%10==1?"st":t%10==2?"nd":t%10==3?"rd":"th"}});Lt.suffix;const Ct=Array.isArray;function St(t,e){if(!Ct(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const n={strictlyTwoElementsInRangeArrays:!1,progressFn:null},r=Object.assign({},n,e);let o,i;if(Ot(r,n,{msg:"ranges-sort: [THROW_ID_02*]",schema:{progressFn:["function","false","null"]}}),r.strictlyTwoElementsInRangeArrays&&!t.every((t,e)=>2===t.length||(o=e,i=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${Lt(o)} range (${JSON.stringify(t[o],null,4)}) has not two but ${i} elements!`);if(!t.every((t,e)=>!(!At(t[0],{includeZero:!0})||!At(t[1],{includeZero:!0}))||(o=e,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${Lt(o)} range (${JSON.stringify(t[o],null,4)}) does not consist of only natural numbers!`);const a=t.length*t.length;let s=0;return Array.from(t).sort((t,e)=>(r.progressFn&&(s++,r.progressFn(Math.floor(100*s/a))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1))}var $t=["null","start-of-heading","start-of-text","end-of-text","end-of-transmission","enquiry","acknowledge","bell","backspace","character-tabulation","line-feed","line-tabulation","form-feed","carriage-return","shift-out","shift-in","data-link-escape","device-control-one","device-control-two","device-control-three","device-control-four","negative-acknowledge","synchronous-idle","end-of-transmission-block","cancel","end-of-medium","substitute","escape","information-separator-four","information-separator-three","information-separator-two","information-separator-one","space","exclamation-mark"],Ft=["abbr","address","area","article","aside","audio","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","doctype","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","param","picture","pre","progress","rb","rp","rt","rtc","ruby","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","ul","var","video","wbr","xml"];function Rt(t){return"string"==typeof t}function Et(t){return Rt(t)&&1===t.length&&(t.charCodeAt(0)>64&&t.charCodeAt(0)<91||t.charCodeAt(0)>96&&t.charCodeAt(0)<123)}var kt=Array.isArray;t.emlint=function(t,n){if(!Rt(t))throw new Error("emlint: [THROW_ID_01] the first input argument must be a string. It was given as:\n".concat(JSON.stringify(t,null,4)," (type ").concat(e(t),")"));var r,o,i,a={rules:"recommended",style:{line_endings_CR_LF_CRLF:null}};if(n){if(!j(n))throw new Error("emlint: [THROW_ID_02] the second input argument must be a plain object. It was given as:\n".concat(JSON.stringify(n,null,4)," (type ").concat(e(n),")"));if(Ot(r=Object.assign({},a,n),a,{msg:"emlint: [THROW_ID_03*]",schema:{rules:["string","object","false","null","undefined"],style:["object","null","undefined"],"style.line_endings_CR_LF_CRLF":["string","null","undefined"]}}),r.style&&Rt(r.style.line_endings_CR_LF_CRLF))if("cr"===r.style.line_endings_CR_LF_CRLF.toLowerCase())"CR"!==r.style.line_endings_CR_LF_CRLF&&r.style.line_endings_CR_LF_CRLF;else if("lf"===r.style.line_endings_CR_LF_CRLF.toLowerCase())"LF"!==r.style.line_endings_CR_LF_CRLF&&r.style.line_endings_CR_LF_CRLF;else{if("crlf"!==r.style.line_endings_CR_LF_CRLF.toLowerCase())throw new Error('emlint: [THROW_ID_04] opts.style.line_endings_CR_LF_CRLF should be either falsey or string "CR" or "LF" or "CRLF". It was given as:\n'.concat(JSON.stringify(r.style.line_endings_CR_LF_CRLF,null,4)," (type is string)"));"CRLF"!==r.style.line_endings_CR_LF_CRLF&&r.style.line_endings_CR_LF_CRLF}}else r=f(a);r.style&&Rt(r.style.line_endings_CR_LF_CRLF)&&(o="cr"===r.style.line_endings_CR_LF_CRLF.toLowerCase()?"\r":"crlf"===r.style.line_endings_CR_LF_CRLF.toLowerCase()?"\r\n":"\n");var s,c={tagStartAt:null,tagNameStartAt:null,tagNameEndAt:null,tagName:null,recognised:null,attributes:[]};function u(){i=f(c)}u();var l={startAt:null,includesLinebreaks:!1,lastLinebreakAt:null};function p(){s=f(l)}p();for(var h,y={issues:[]},g={cr:[],lf:[],crlf:[]},d=0,m=t.length;d<m;d++){var _=t[d].charCodeAt(0);if(_<32){var b="bad-character-".concat($t[_]);9===_?y.issues.push({name:b,position:[[d,d+1,"  "]]}):13===_?Rt(t[d+1])&&10===t[d+1].charCodeAt(0)?r.style&&r.style.line_endings_CR_LF_CRLF&&"CRLF"!==r.style.line_endings_CR_LF_CRLF?y.issues.push({name:"file-wrong-type-line-ending-CRLF",position:[[d,d+2,o]]}):g.crlf.push([d,d+2]):r.style&&r.style.line_endings_CR_LF_CRLF&&"CR"!==r.style.line_endings_CR_LF_CRLF?y.issues.push({name:"file-wrong-type-line-ending-CR",position:[[d,d+1,o]]}):g.cr.push([d,d+1]):10===_?Rt(t[d-1])&&13===t[d-1].charCodeAt(0)||(r.style&&r.style.line_endings_CR_LF_CRLF&&"LF"!==r.style.line_endings_CR_LF_CRLF?y.issues.push({name:"file-wrong-type-line-ending-LF",position:[[d,d+1,o]]}):g.lf.push([d,d+1])):y.issues.push({name:b,position:[[d,d+1]]})}null!==s.startAt&&t[d].trim().length&&p(),t[d].trim().length||null!==s.startAt||(s.startAt=d),"\n"!==t[d]&&"\r"!==t[d]||(null===s.startAt||s.includesLinebreaks||(s.includesLinebreaks=!0),s.lastLinebreakAt=d),null===i.tagNameStartAt||Et(t[d])||(i.tagNameEndAt=d,i.tagName=t.slice(i.tagNameStartAt,d),i.recognised=Ft.includes(i.tagName.toLowerCase())),null!==i.tagStartAt&&null===i.tagNameStartAt&&Et(t[d])&&i.tagStartAt<d&&(i.tagNameStartAt=d,i.tagStartAt<d-1&&y.issues.push({name:"space-after-opening-bracket",position:[[i.tagStartAt+1,d]]})),null!==i.tagNameStartAt&&null===i.tagNameEndAt&&Rt(h=t[d])&&1===h.length&&h.charCodeAt(0)>64&&h.charCodeAt(0)<91&&y.issues.push({name:"tagname-lowercase",position:[[d,d+1,t[d].toLowerCase()]]}),"<"===t[d]&&null===i.tagStartAt&&(i.tagStartAt=d),">"===t[d]&&null!==i.tagStartAt&&u()}return r.style&&r.style.line_endings_CR_LF_CRLF||!(g.cr.length&&g.lf.length||g.lf.length&&g.crlf.length||g.cr.length&&g.crlf.length)||(g.cr.length>g.crlf.length&&g.cr.length>g.lf.length?(g.crlf.length&&g.crlf.forEach(function(t){y.issues.push({name:"file-mixed-line-endings-file-is-CR-mainly",position:[[t[0],t[1],"\r"]]})}),g.lf.length&&g.lf.forEach(function(t){y.issues.push({name:"file-mixed-line-endings-file-is-CR-mainly",position:[[t[0],t[1],"\r"]]})})):g.lf.length>g.crlf.length&&g.lf.length>g.cr.length?(g.crlf.length&&g.crlf.forEach(function(t){y.issues.push({name:"file-mixed-line-endings-file-is-LF-mainly",position:[[t[0],t[1],"\n"]]})}),g.cr.length&&g.cr.forEach(function(t){y.issues.push({name:"file-mixed-line-endings-file-is-LF-mainly",position:[[t[0],t[1],"\n"]]})})):g.crlf.length>g.lf.length&&g.crlf.length>g.cr.length?(g.cr.length&&g.cr.forEach(function(t){y.issues.push({name:"file-mixed-line-endings-file-is-CRLF-mainly",position:[[t[0],t[1],"\r\n"]]})}),g.lf.length&&g.lf.forEach(function(t){y.issues.push({name:"file-mixed-line-endings-file-is-CRLF-mainly",position:[[t[0],t[1],"\r\n"]]})})):g.crlf.length===g.lf.length&&g.lf.length===g.cr.length?(g.crlf.forEach(function(t){y.issues.push({name:"file-mixed-line-endings-file-is-LF-mainly",position:[[t[0],t[1],"\n"]]})}),g.cr.forEach(function(t){y.issues.push({name:"file-mixed-line-endings-file-is-LF-mainly",position:[[t[0],t[1],"\n"]]})})):g.cr.length===g.crlf.length&&g.cr.length>g.lf.length?(g.cr.length&&g.cr.forEach(function(t){y.issues.push({name:"file-mixed-line-endings-file-is-CRLF-mainly",position:[[t[0],t[1],"\r\n"]]})}),g.lf.length&&g.lf.forEach(function(t){y.issues.push({name:"file-mixed-line-endings-file-is-CRLF-mainly",position:[[t[0],t[1],"\r\n"]]})})):(g.lf.length===g.crlf.length&&g.lf.length>g.cr.length||g.cr.length===g.lf.length&&g.cr.length>g.crlf.length)&&(g.cr.length&&g.cr.forEach(function(t){y.issues.push({name:"file-mixed-line-endings-file-is-LF-mainly",position:[[t[0],t[1],"\n"]]})}),g.crlf.length&&g.crlf.forEach(function(t){y.issues.push({name:"file-mixed-line-endings-file-is-LF-mainly",position:[[t[0],t[1],"\n"]]})}))),y.fix=kt(y.issues)&&y.issues.length?function(t,e){if(!Array.isArray(t))return t;if(e&&"function"!=typeof e)throw new Error(`ranges-merge: [THROW_ID_01] the second input argument must be a function! It was given of a type: "${typeof e}", equal to ${JSON.stringify(e,null,4)}`);const n=f(t).filter(t=>void 0!==t[2]||t[0]!==t[1]);let r,o,i;const a=(r=e?St(n,{progressFn:t=>{(i=Math.floor(t/5))!==o&&(o=i,e(i))}}):St(n)).length-1;for(let t=a;t>0;t--)e&&(i=Math.floor(78*(1-t/a))+21)!==o&&i>o&&(o=i,e(i)),(r[t][0]<=r[t-1][0]||r[t][0]<=r[t-1][1])&&(r[t-1][0]=Math.min(r[t][0],r[t-1][0]),r[t-1][1]=Math.max(r[t][1],r[t-1][1]),void 0!==r[t][2]&&(r[t-1][0]>=r[t][0]||r[t-1][1]<=r[t][1])&&null!==r[t-1][2]&&(null===r[t][2]&&null!==r[t-1][2]?r[t-1][2]=null:void 0!==r[t-1][2]?r[t-1][2]+=r[t][2]:r[t-1][2]=r[t][2]),r.splice(t,1),t=r.length);return r}(y.issues.reduce(function(t,e){return t.concat(e.position)},[])):null,y},t.version="0.5.1",t.errors="./errors.json",Object.defineProperty(t,"__esModule",{value:!0})});
