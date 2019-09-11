/**
 * ast-loose-compare
 * Compare anything: AST, objects, arrays and strings
 * Version: 1.7.42
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ast-loose-compare
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t=t||self).astLooseCompare=r()}(this,function(){"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var e=1/0,n="[object Symbol]",o=/^\s+|\s+$/g,u="[\\ud800-\\udfff]",c="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",i="\\ud83c[\\udffb-\\udfff]",f="[^\\ud800-\\udfff]",a="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",l="(?:"+c+"|"+i+")"+"?",p="[\\ufe0e\\ufe0f]?"+l+("(?:\\u200d(?:"+[f,a,s].join("|")+")[\\ufe0e\\ufe0f]?"+l+")*"),y="(?:"+[f+c+"?",c,a,s,u].join("|")+")",h=RegExp(i+"(?="+i+")|"+y+p,"g"),b=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),d="object"==typeof r&&r&&r.Object===Object&&r,v="object"==typeof self&&self&&self.Object===Object&&self,_=d||v||Function("return this")();function g(t,r,e){if(r!=r)return function(t,r,e,n){for(var o=t.length,u=e+(n?1:-1);n?u--:++u<o;)if(r(t[u],u,t))return u;return-1}(t,j,e);for(var n=e-1,o=t.length;++n<o;)if(t[n]===r)return n;return-1}function j(t){return t!=t}function O(t){return function(t){return b.test(t)}(t)?function(t){return t.match(h)||[]}(t):function(t){return t.split("")}(t)}var w=Object.prototype.toString,A=_.Symbol,m=A?A.prototype:void 0,S=m?m.toString:void 0;function x(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&w.call(t)==n}(t))return S?S.call(t):"";var r=t+"";return"0"==r&&1/t==-e?"-0":r}function $(t,r,e){var n=t.length;return e=void 0===e?n:e,!r&&e>=n?t:function(t,r,e){var n=-1,o=t.length;r<0&&(r=-r>o?0:o+r),(e=e>o?o:e)<0&&(e+=o),o=r>e?0:e-r>>>0,r>>>=0;for(var u=Array(o);++n<o;)u[n]=t[n+r];return u}(t,r,e)}var k=function(t,r,e){var n;if((t=null==(n=t)?"":x(n))&&(e||void 0===r))return t.replace(o,"");if(!t||!(r=x(r)))return t;var u=O(t),c=O(r);return $(u,function(t,r){for(var e=-1,n=t.length;++e<n&&g(r,t[e],0)>-1;);return e}(u,c),function(t,r){for(var e=t.length;e--&&g(r,t[e],0)>-1;);return e}(u,c)+1).join("")},P="[object Object]";var E,F,I=Function.prototype,N=Object.prototype,T=I.toString,M=N.hasOwnProperty,B=T.call(Object),R=N.toString,U=(E=Object.getPrototypeOf,F=Object,function(t){return E(F(t))});var W=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||R.call(t)!=P||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t))return!1;var r=U(t);if(null===r)return!0;var e=M.call(r,"constructor")&&r.constructor;return"function"==typeof e&&e instanceof e&&T.call(e)==B},C=function(t,r){return t(r={exports:{}},r.exports),r.exports}(function(t,e){var n=200,o="__lodash_hash_undefined__",u=9007199254740991,c="[object Arguments]",i="[object Boolean]",f="[object Date]",a="[object Function]",s="[object GeneratorFunction]",l="[object Map]",p="[object Number]",y="[object Object]",h="[object RegExp]",b="[object Set]",d="[object String]",v="[object Symbol]",_="[object ArrayBuffer]",g="[object DataView]",j="[object Float32Array]",O="[object Float64Array]",w="[object Int8Array]",A="[object Int16Array]",m="[object Int32Array]",S="[object Uint8Array]",x="[object Uint8ClampedArray]",$="[object Uint16Array]",k="[object Uint32Array]",P=/\w*$/,E=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,I={};I[c]=I["[object Array]"]=I[_]=I[g]=I[i]=I[f]=I[j]=I[O]=I[w]=I[A]=I[m]=I[l]=I[p]=I[y]=I[h]=I[b]=I[d]=I[v]=I[S]=I[x]=I[$]=I[k]=!0,I["[object Error]"]=I[a]=I["[object WeakMap]"]=!1;var N="object"==typeof r&&r&&r.Object===Object&&r,T="object"==typeof self&&self&&self.Object===Object&&self,M=N||T||Function("return this")(),B=e&&!e.nodeType&&e,R=B&&t&&!t.nodeType&&t,U=R&&R.exports===B;function W(t,r){return t.set(r[0],r[1]),t}function C(t,r){return t.add(r),t}function D(t,r,e,n){var o=-1,u=t?t.length:0;for(n&&u&&(e=t[++o]);++o<u;)e=r(e,t[o],o,t);return e}function L(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function z(t){var r=-1,e=Array(t.size);return t.forEach(function(t,n){e[++r]=[n,t]}),e}function V(t,r){return function(e){return t(r(e))}}function G(t){var r=-1,e=Array(t.size);return t.forEach(function(t){e[++r]=t}),e}var K,q=Array.prototype,H=Function.prototype,J=Object.prototype,Q=M["__core-js_shared__"],X=(K=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+K:"",Y=H.toString,Z=J.hasOwnProperty,tt=J.toString,rt=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=U?M.Buffer:void 0,nt=M.Symbol,ot=M.Uint8Array,ut=V(Object.getPrototypeOf,Object),ct=Object.create,it=J.propertyIsEnumerable,ft=q.splice,at=Object.getOwnPropertySymbols,st=et?et.isBuffer:void 0,lt=V(Object.keys,Object),pt=Rt(M,"DataView"),yt=Rt(M,"Map"),ht=Rt(M,"Promise"),bt=Rt(M,"Set"),dt=Rt(M,"WeakMap"),vt=Rt(Object,"create"),_t=Lt(pt),gt=Lt(yt),jt=Lt(ht),Ot=Lt(bt),wt=Lt(dt),At=nt?nt.prototype:void 0,mt=At?At.valueOf:void 0;function St(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function xt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function $t(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function kt(t){this.__data__=new xt(t)}function Pt(t,r){var e=Vt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Gt(t)}(t)&&Z.call(t,"callee")&&(!it.call(t,"callee")||tt.call(t)==c)}(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],n=e.length,o=!!n;for(var u in t)!r&&!Z.call(t,u)||o&&("length"==u||Ct(u,n))||e.push(u);return e}function Et(t,r,e){var n=t[r];Z.call(t,r)&&zt(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function Ft(t,r){for(var e=t.length;e--;)if(zt(t[e][0],r))return e;return-1}function It(t,r,e,n,o,u,E){var F;if(n&&(F=u?n(t,o,u,E):n(t)),void 0!==F)return F;if(!Ht(t))return t;var N=Vt(t);if(N){if(F=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&Z.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,F)}else{var T=Wt(t),M=T==a||T==s;if(Kt(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(T==y||T==c||M&&!u){if(L(t))return u?t:{};if(F=function(t){return"function"!=typeof t.constructor||Dt(t)?{}:(r=ut(t),Ht(r)?ct(r):{});var r}(M?{}:t),!r)return function(t,r){return Mt(t,Ut(t),r)}(t,function(t,r){return t&&Mt(r,Jt(r),t)}(F,t))}else{if(!I[T])return u?t:{};F=function(t,r,e,n){var o=t.constructor;switch(r){case _:return Tt(t);case i:case f:return new o(+t);case g:return function(t,r){var e=r?Tt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case j:case O:case w:case A:case m:case S:case x:case $:case k:return function(t,r){var e=r?Tt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case l:return function(t,r,e){return D(r?e(z(t),!0):z(t),W,new t.constructor)}(t,n,e);case p:case d:return new o(t);case h:return(a=new(c=t).constructor(c.source,P.exec(c))).lastIndex=c.lastIndex,a;case b:return function(t,r,e){return D(r?e(G(t),!0):G(t),C,new t.constructor)}(t,n,e);case v:return u=t,mt?Object(mt.call(u)):{}}var u;var c,a}(t,T,It,r)}}E||(E=new kt);var B=E.get(t);if(B)return B;if(E.set(t,F),!N)var R=e?function(t){return function(t,r,e){var n=r(t);return Vt(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Jt,Ut)}(t):Jt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(R||t,function(o,u){R&&(o=t[u=o]),Et(F,u,It(o,r,e,n,u,t,E))}),F}function Nt(t){return!(!Ht(t)||function(t){return!!X&&X in t}(t))&&(qt(t)||L(t)?rt:E).test(Lt(t))}function Tt(t){var r=new t.constructor(t.byteLength);return new ot(r).set(new ot(t)),r}function Mt(t,r,e,n){e||(e={});for(var o=-1,u=r.length;++o<u;){var c=r[o],i=n?n(e[c],t[c],c,e,t):void 0;Et(e,c,void 0===i?t[c]:i)}return e}function Bt(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map}function Rt(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return Nt(e)?e:void 0}St.prototype.clear=function(){this.__data__=vt?vt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var r=this.__data__;if(vt){var e=r[t];return e===o?void 0:e}return Z.call(r,t)?r[t]:void 0},St.prototype.has=function(t){var r=this.__data__;return vt?void 0!==r[t]:Z.call(r,t)},St.prototype.set=function(t,r){return this.__data__[t]=vt&&void 0===r?o:r,this},xt.prototype.clear=function(){this.__data__=[]},xt.prototype.delete=function(t){var r=this.__data__,e=Ft(r,t);return!(e<0||(e==r.length-1?r.pop():ft.call(r,e,1),0))},xt.prototype.get=function(t){var r=this.__data__,e=Ft(r,t);return e<0?void 0:r[e][1]},xt.prototype.has=function(t){return Ft(this.__data__,t)>-1},xt.prototype.set=function(t,r){var e=this.__data__,n=Ft(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},$t.prototype.clear=function(){this.__data__={hash:new St,map:new(yt||xt),string:new St}},$t.prototype.delete=function(t){return Bt(this,t).delete(t)},$t.prototype.get=function(t){return Bt(this,t).get(t)},$t.prototype.has=function(t){return Bt(this,t).has(t)},$t.prototype.set=function(t,r){return Bt(this,t).set(t,r),this},kt.prototype.clear=function(){this.__data__=new xt},kt.prototype.delete=function(t){return this.__data__.delete(t)},kt.prototype.get=function(t){return this.__data__.get(t)},kt.prototype.has=function(t){return this.__data__.has(t)},kt.prototype.set=function(t,r){var e=this.__data__;if(e instanceof xt){var o=e.__data__;if(!yt||o.length<n-1)return o.push([t,r]),this;e=this.__data__=new $t(o)}return e.set(t,r),this};var Ut=at?V(at,Object):function(){return[]},Wt=function(t){return tt.call(t)};function Ct(t,r){return!!(r=null==r?u:r)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<r}function Dt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||J)}function Lt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function zt(t,r){return t===r||t!=t&&r!=r}(pt&&Wt(new pt(new ArrayBuffer(1)))!=g||yt&&Wt(new yt)!=l||ht&&"[object Promise]"!=Wt(ht.resolve())||bt&&Wt(new bt)!=b||dt&&"[object WeakMap]"!=Wt(new dt))&&(Wt=function(t){var r=tt.call(t),e=r==y?t.constructor:void 0,n=e?Lt(e):void 0;if(n)switch(n){case _t:return g;case gt:return l;case jt:return"[object Promise]";case Ot:return b;case wt:return"[object WeakMap]"}return r});var Vt=Array.isArray;function Gt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=u}(t.length)&&!qt(t)}var Kt=st||function(){return!1};function qt(t){var r=Ht(t)?tt.call(t):"";return r==a||r==s}function Ht(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Jt(t){return Gt(t)?Pt(t):function(t){if(!Dt(t))return lt(t);var r=[];for(var e in Object(t))Z.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}t.exports=function(t){return It(t,!0,!0)}});const D=Array.isArray;function L(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function z(t,r){return function t(r,e,n){const o=C(r);let u,c,i,f,a;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,D(o))for(u=0,c=o.length;u<c;u++){const r=`${n.path}.${u}`;void 0!==o[u]?(n.parent=C(o),n.parentType="array",i=t(e(o[u],void 0,Object.assign({},n,{path:L(r)})),e,Object.assign({},n,{path:L(r)})),Number.isNaN(i)&&u<o.length?(o.splice(u,1),u-=1):o[u]=i):o.splice(u,1)}else if(W(o))for(u=0,c=(f=Object.keys(o)).length;u<c;u++){a=f[u];const r=`${n.path}.${a}`;0===n.depth&&null!=a&&(n.topmostKey=a),n.parent=C(o),n.parentType="object",i=t(e(a,o[a],Object.assign({},n,{path:L(r)})),e,Object.assign({},n,{path:L(r)})),Number.isNaN(i)?delete o[a]:o[a]=i}return o}(t,r,{})}function V(t){function r(t){return"string"==typeof t}const e=Array.isArray;let n=!0;return!!(e(t)||W(t)||r(t))&&(r(t)?0===k(t).length:(t=z(t,(t,e)=>{const o=void 0!==e?e:t;return r(o)&&""!==k(o)&&(n=!1),o}),n))}var G="[object String]",K=Object.prototype.toString,q=Array.isArray;var H=function(t){return"string"==typeof t||!q(t)&&function(t){return!!t&&"object"==typeof t}(t)&&K.call(t)==G};return function r(e,n,o){function u(t){return null!=t}var c,i;if(void 0===o){if(!u(e)||!u(n))return}else if(!u(e)||!u(n))return!1;if(o=o||!0,t(e)!==t(n))return!(!V(e)||!V(n));if(Array.isArray(e)&&Array.isArray(n)){if(!(n.length>0))return!!(0===n.length&&0===e.length||V(n)&&V(e))||(o=!1,!1);for(c=0,i=n.length;c<i;c++)if(Array.isArray(n[c])||W(n[c])){if(!(o=r(e[c],n[c],o)))return!1}else if(n[c]!==e[c])return!(!V(n[c])||!V(e[c]))||(o=!1,!1)}else if(W(e)&&W(n)){if(!(Object.keys(n).length>0))return!!(0===Object.keys(n).length&&0===Object.keys(e).length||V(n)&&V(e))||(o=!1,!1);var f=Object.keys(n);for(c=0,i=f.length;c<i;c++)if(Array.isArray(n[f[c]])||W(n[f[c]])||H(n[f[c]])){if(!(o=r(e[f[c]],n[f[c]],o)))return!1}else if(!(n[f[c]]===e[f[c]]||V(n[f[c]])&&V(e[f[c]])))return o=!1,!1}else{if(!H(e)||!H(n))return!(!V(n)||!V(e))||(o=!1,!1);if(e!==n)return!(!V(n)||!V(e))||(o=!1,!1)}return o}});
