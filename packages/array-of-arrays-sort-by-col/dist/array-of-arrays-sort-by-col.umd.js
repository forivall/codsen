!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):t.arrayOfArraysSortByCol=r()}(this,function(){"use strict";var Ot="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var t,xt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=(function(t,r){var n="__lodash_hash_undefined__",e=9007199254740991,j="[object Arguments]",S="[object Function]",O="[object GeneratorFunction]",o="[object Map]",x="[object Object]",i="[object Promise]",u="[object Set]",a="[object WeakMap]",f="[object DataView]",c=/^\[object .+?Constructor\]$/,s=/^(?:0|[1-9]\d*)$/,l="object"==xt(Ot)&&Ot&&Ot.Object===Object&&Ot,p="object"==("undefined"==typeof self?"undefined":xt(self))&&self&&self.Object===Object&&self,y=l||p||Function("return this")(),d=r&&!r.nodeType&&r,h=d&&t&&!t.nodeType&&t,_=h&&h.exports===d;function A(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function v(r,e){return function(t){return r(e(t))}}var b,g=Array.prototype,m=Function.prototype,w=Object.prototype,Z=y["__core-js_shared__"],T=(b=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||""))?"Symbol(src)_1."+b:"",E=m.toString,$=w.hasOwnProperty,I=w.toString,M=RegExp("^"+E.call($).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),P=_?y.Buffer:void 0,k=y.Symbol,B=(y.Uint8Array,v(Object.getPrototypeOf,Object)),D=Object.create,R=w.propertyIsEnumerable,W=g.splice,F=Object.getOwnPropertySymbols,H=P?P.isBuffer:void 0,N=v(Object.keys,Object),C=lt(y,"DataView"),J=lt(y,"Map"),V=lt(y,"Promise"),q=lt(y,"Set"),z=lt(y,"WeakMap"),G=lt(Object,"create"),U=_t(C),K=_t(J),L=_t(V),Q=_t(q),X=_t(z),Y=k?k.prototype:void 0;Y&&Y.valueOf;function tt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function rt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function et(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function nt(t){this.__data__=new rt(t)}function ot(t,r){var e,n,o,i=bt(t)||(o=n=e=t)&&"object"==(void 0===o?"undefined":xt(o))&&gt(n)&&$.call(e,"callee")&&(!R.call(e,"callee")||I.call(e)==j)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],u=i.length,a=!!u;for(var f in t)!r&&!$.call(t,f)||a&&("length"==f||dt(f,u))||i.push(f);return i}function it(t,r,e){var n=t[r];$.call(t,r)&&vt(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function ut(t,r){for(var e=t.length;e--;)if(vt(t[e][0],r))return e;return-1}function at(e,n,o,i,t,r,u){var a;if(i&&(a=r?i(e,t,r,u):i(e)),void 0!==a)return a;if(!jt(e))return e;var f,c,s,l,p,y,d=bt(e);if(d){if(a=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&$.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(e),!n)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(e,a)}else{var h=yt(e),_=h==S||h==O;if(mt(e))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(e,n);if(h!=x&&h!=j&&(!_||r))return r?e:{};if(A(e))return r?e:{};if(a="function"!=typeof(p=_?{}:e).constructor||ht(p)?{}:jt(y=B(p))?D(y):{},!n)return l=f=e,c=(s=a)&&ct(l,St(l),s),ct(f,pt(f),c)}u||(u=new nt);var v,b,g,m=u.get(e);if(m)return m;if(u.set(e,a),!d)var w=o?(b=pt,g=St(v=e),bt(v)?g:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(g,b(v))):St(e);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(w||e,function(t,r){w&&(t=e[r=t]),it(a,r,at(t,n,o,i,r,e,u))}),a}function ft(t){return!(!jt(t)||(r=t,T&&T in r))&&(wt(t)||A(t)?M:c).test(_t(t));var r}function ct(t,r,e,n){e||(e={});for(var o=-1,i=r.length;++o<i;){var u=r[o],a=n?n(e[u],t[u],u,e,t):void 0;it(e,u,void 0===a?t[u]:a)}return e}function st(t,r){var e,n,o=t.__data__;return("string"==(n=void 0===(e=r)?"undefined":xt(e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map}function lt(t,r){var e,n,o=(n=r,null==(e=t)?void 0:e[n]);return ft(o)?o:void 0}tt.prototype.clear=function(){this.__data__=G?G(null):{}},tt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},tt.prototype.get=function(t){var r=this.__data__;if(G){var e=r[t];return e===n?void 0:e}return $.call(r,t)?r[t]:void 0},tt.prototype.has=function(t){var r=this.__data__;return G?void 0!==r[t]:$.call(r,t)},tt.prototype.set=function(t,r){return this.__data__[t]=G&&void 0===r?n:r,this},rt.prototype.clear=function(){this.__data__=[]},rt.prototype.delete=function(t){var r=this.__data__,e=ut(r,t);return!(e<0||(e==r.length-1?r.pop():W.call(r,e,1),0))},rt.prototype.get=function(t){var r=this.__data__,e=ut(r,t);return e<0?void 0:r[e][1]},rt.prototype.has=function(t){return-1<ut(this.__data__,t)},rt.prototype.set=function(t,r){var e=this.__data__,n=ut(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},et.prototype.clear=function(){this.__data__={hash:new tt,map:new(J||rt),string:new tt}},et.prototype.delete=function(t){return st(this,t).delete(t)},et.prototype.get=function(t){return st(this,t).get(t)},et.prototype.has=function(t){return st(this,t).has(t)},et.prototype.set=function(t,r){return st(this,t).set(t,r),this},nt.prototype.clear=function(){this.__data__=new rt},nt.prototype.delete=function(t){return this.__data__.delete(t)},nt.prototype.get=function(t){return this.__data__.get(t)},nt.prototype.has=function(t){return this.__data__.has(t)},nt.prototype.set=function(t,r){var e=this.__data__;if(e instanceof rt){var n=e.__data__;if(!J||n.length<199)return n.push([t,r]),this;e=this.__data__=new et(n)}return e.set(t,r),this};var pt=F?v(F,Object):function(){return[]},yt=function(t){return I.call(t)};function dt(t,r){return!!(r=null==r?e:r)&&("number"==typeof t||s.test(t))&&-1<t&&t%1==0&&t<r}function ht(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||w)}function _t(t){if(null!=t){try{return E.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function vt(t,r){return t===r||t!=t&&r!=r}(C&&yt(new C(new ArrayBuffer(1)))!=f||J&&yt(new J)!=o||V&&yt(V.resolve())!=i||q&&yt(new q)!=u||z&&yt(new z)!=a)&&(yt=function(t){var r=I.call(t),e=r==x?t.constructor:void 0,n=e?_t(e):void 0;if(n)switch(n){case U:return f;case K:return o;case L:return i;case Q:return u;case X:return a}return r});var bt=Array.isArray;function gt(t){return null!=t&&("number"==typeof(r=t.length)&&-1<r&&r%1==0&&r<=e)&&!wt(t);var r}var mt=H||function(){return!1};function wt(t){var r=jt(t)?I.call(t):"";return r==S||r==O}function jt(t){var r=void 0===t?"undefined":xt(t);return!!t&&("object"==r||"function"==r)}function St(t){return gt(t)?ot(t):function(t){if(!ht(t))return N(t);var r=[];for(var e in Object(t))$.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}t.exports=function(t){return at(t,!0,!0)}}(t={exports:{}},t.exports),t.exports),n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var u=Array.isArray;function a(t){return null!=t}return function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;if(!u(t))throw new Error("array-of-arrays-sort-by-col: [THROW_ID_01]: The first input argument was given not as array but as "+(void 0===t?"undefined":o(t))+", equal to:\n"+JSON.stringify(t,null,0));if(!function(t,r){if(r){if("object"!==(void 0===r?"undefined":n(r)))throw new TypeError(String(r)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in r){if("boolean"!=typeof r.includeZero)throw new TypeError(String(r.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(r.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&1<=t}(i,{includeZero:!0})){if(!function(t,r){if("string"!=typeof t)return!1;if(r&&"includeZero"in r){if("boolean"!=typeof r.includeZero)throw new TypeError(String(r.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(r.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)}(i,{includeZero:!0}))throw new Error("array-of-arrays-sort-by-col: [THROW_ID_02]: The second input argument, index of the column to sort by (axis), is not integer (incl. zero)! It's currently given as:\n"+JSON.stringify(i,null,0));i=parseInt(i,10)}var r=Math.max.apply(Math,function(t){if(Array.isArray(t)){for(var r=0,e=Array(t.length);r<t.length;r++)e[r]=t[r];return e}return Array.from(t)}(t.map(function(t){return t.length})));if(0===r)return t;if(r<=i)throw new Error("array-of-arrays-sort-by-col: [THROW_ID_03]: The second input argument, index of the column to sort by (axis), is marking the column which does not exist on any of the input arrays. Axis was given as "+i+" while highest index goes as far as "+r+".");return e(t).sort(function(t,r){if(t[i]!==r[i]){if(!a(t[i])&&a(r[i])||a(t[i])&&a(r[i])&&t[i]>r[i])return 1;if(a(t[i])&&!a(r[i])||a(t[i])&&a(r[i])&&t[i]<r[i])return-1}for(var e=Math.max(t.length,r.length),n=Math.max(i,e-i-1),o=1;o<=n;o++){if(0<=i-o)if(a(t[i-o])){if(!a(r[i-o]))return-1;if(t[i-o]<r[i-o])return-1;if(t[i-o]>r[i-o])return 1}else if(a(r[i-o]))return 1;if(i+o<e)if(a(t[i+o])){if(!a(r[i+o]))return-1;if(t[i+o]<r[i+o])return-1;if(t[i+o]>r[i+o])return 1}else if(a(r[i+o]))return 1}return 0})}});
