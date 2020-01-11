/**
 * ast-compare
 * Compare anything: AST, objects, arrays, strings and nested thereof
 * Version: 1.12.29
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ast-compare
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).astCompare=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t,e){return t(e={exports:{}},e.exports),e.exports}var n=r((function(t,r){var n="[object Arguments]",o="[object Function]",c="[object GeneratorFunction]",i="[object Map]",a="[object Set]",u=/\w*$/,f=/^\[object .+?Constructor\]$/,s=/^(?:0|[1-9]\d*)$/,l={};l[n]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[i]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[a]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[o]=l["[object WeakMap]"]=!1;var p="object"==typeof e&&e&&e.Object===Object&&e,y="object"==typeof self&&self&&self.Object===Object&&self,h=p||y||Function("return this")(),b=r&&!r.nodeType&&r,g=b&&t&&!t.nodeType&&t,d=g&&g.exports===b;function v(t,e){return t.set(e[0],e[1]),t}function j(t,e){return t.add(e),t}function m(t,e,r,n){var o=-1,c=t?t.length:0;for(n&&c&&(r=t[++o]);++o<c;)r=e(r,t[o],o,t);return r}function _(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function w(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function O(t,e){return function(r){return t(e(r))}}function S(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var A,T=Array.prototype,W=Function.prototype,M=Object.prototype,E=h["__core-js_shared__"],k=(A=/[^.]+$/.exec(E&&E.keys&&E.keys.IE_PROTO||""))?"Symbol(src)_1."+A:"",N=W.toString,x=M.hasOwnProperty,D=M.toString,F=RegExp("^"+N.call(x).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),I=d?h.Buffer:void 0,P=h.Symbol,$=h.Uint8Array,J=O(Object.getPrototypeOf,Object),R=Object.create,H=M.propertyIsEnumerable,L=T.splice,U=Object.getOwnPropertySymbols,B=I?I.isBuffer:void 0,C=O(Object.keys,Object),V=gt(h,"DataView"),q=gt(h,"Map"),z=gt(h,"Promise"),G=gt(h,"Set"),K=gt(h,"WeakMap"),Q=gt(Object,"create"),X=_t(V),Y=_t(q),Z=_t(z),tt=_t(G),et=_t(K),rt=P?P.prototype:void 0,nt=rt?rt.valueOf:void 0;function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ct(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){this.__data__=new ct(t)}function ut(t,e){var r=Ot(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&St(t)}(t)&&x.call(t,"callee")&&(!H.call(t,"callee")||D.call(t)==n)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=r.length,c=!!o;for(var i in t)!e&&!x.call(t,i)||c&&("length"==i||jt(i,o))||r.push(i);return r}function ft(t,e,r){var n=t[e];x.call(t,e)&&wt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function st(t,e){for(var r=t.length;r--;)if(wt(t[r][0],e))return r;return-1}function lt(t,e,r,f,s,p,y){var h;if(f&&(h=p?f(t,s,p,y):f(t)),void 0!==h)return h;if(!Wt(t))return t;var b=Ot(t);if(b){if(h=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&x.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,h)}else{var g=vt(t),d=g==o||g==c;if(At(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==g||g==n||d&&!p){if(_(t))return p?t:{};if(h=function(t){return"function"!=typeof t.constructor||mt(t)?{}:(e=J(t),Wt(e)?R(e):{});var e}(d?{}:t),!e)return function(t,e){return ht(t,dt(t),e)}(t,function(t,e){return t&&ht(e,Mt(e),t)}(h,t))}else{if(!l[g])return p?t:{};h=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return yt(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?yt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?yt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case i:return function(t,e,r){return m(e?r(w(t),!0):w(t),v,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,u.exec(t));return e.lastIndex=t.lastIndex,e}(t);case a:return function(t,e,r){return m(e?r(S(t),!0):S(t),j,new t.constructor)}(t,n,r);case"[object Symbol]":return c=t,nt?Object(nt.call(c)):{}}var c}(t,g,lt,e)}}y||(y=new at);var O=y.get(t);if(O)return O;if(y.set(t,h),!b)var A=r?function(t){return function(t,e,r){var n=e(t);return Ot(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Mt,dt)}(t):Mt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(A||t,(function(n,o){A&&(n=t[o=n]),ft(h,o,lt(n,e,r,f,o,t,y))})),h}function pt(t){return!(!Wt(t)||(e=t,k&&k in e))&&(Tt(t)||_(t)?F:f).test(_t(t));var e}function yt(t){var e=new t.constructor(t.byteLength);return new $(e).set(new $(t)),e}function ht(t,e,r,n){r||(r={});for(var o=-1,c=e.length;++o<c;){var i=e[o],a=n?n(r[i],t[i],i,r,t):void 0;ft(r,i,void 0===a?t[i]:a)}return r}function bt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function gt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return pt(r)?r:void 0}ot.prototype.clear=function(){this.__data__=Q?Q(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var e=this.__data__;if(Q){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return x.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return Q?void 0!==e[t]:x.call(e,t)},ot.prototype.set=function(t,e){return this.__data__[t]=Q&&void 0===e?"__lodash_hash_undefined__":e,this},ct.prototype.clear=function(){this.__data__=[]},ct.prototype.delete=function(t){var e=this.__data__,r=st(e,t);return!(r<0)&&(r==e.length-1?e.pop():L.call(e,r,1),!0)},ct.prototype.get=function(t){var e=this.__data__,r=st(e,t);return r<0?void 0:e[r][1]},ct.prototype.has=function(t){return st(this.__data__,t)>-1},ct.prototype.set=function(t,e){var r=this.__data__,n=st(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},it.prototype.clear=function(){this.__data__={hash:new ot,map:new(q||ct),string:new ot}},it.prototype.delete=function(t){return bt(this,t).delete(t)},it.prototype.get=function(t){return bt(this,t).get(t)},it.prototype.has=function(t){return bt(this,t).has(t)},it.prototype.set=function(t,e){return bt(this,t).set(t,e),this},at.prototype.clear=function(){this.__data__=new ct},at.prototype.delete=function(t){return this.__data__.delete(t)},at.prototype.get=function(t){return this.__data__.get(t)},at.prototype.has=function(t){return this.__data__.has(t)},at.prototype.set=function(t,e){var r=this.__data__;if(r instanceof ct){var n=r.__data__;if(!q||n.length<199)return n.push([t,e]),this;r=this.__data__=new it(n)}return r.set(t,e),this};var dt=U?O(U,Object):function(){return[]},vt=function(t){return D.call(t)};function jt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||s.test(t))&&t>-1&&t%1==0&&t<e}function mt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||M)}function _t(t){if(null!=t){try{return N.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function wt(t,e){return t===e||t!=t&&e!=e}(V&&"[object DataView]"!=vt(new V(new ArrayBuffer(1)))||q&&vt(new q)!=i||z&&"[object Promise]"!=vt(z.resolve())||G&&vt(new G)!=a||K&&"[object WeakMap]"!=vt(new K))&&(vt=function(t){var e=D.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?_t(r):void 0;if(n)switch(n){case X:return"[object DataView]";case Y:return i;case Z:return"[object Promise]";case tt:return a;case et:return"[object WeakMap]"}return e});var Ot=Array.isArray;function St(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!Tt(t)}var At=B||function(){return!1};function Tt(t){var e=Wt(t)?D.call(t):"";return e==o||e==c}function Wt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Mt(t){return St(t)?ut(t):function(t){if(!mt(t))return C(t);var e=[];for(var r in Object(t))x.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return lt(t,!0,!0)}}));function o(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,c=r+(n?1:-1);n?c--:++c<o;)if(e(t[c],c,t))return c;return-1}(t,i,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function c(t,e,r,n){for(var o=r-1,c=t.length;++o<c;)if(n(t[o],e))return o;return-1}function i(t){return t!=t}var a=Array.prototype.splice;function u(t,e,r,n){var i,u=n?c:o,f=-1,s=e.length,l=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(l=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(i=r,function(t){return i(t)})));++f<s;)for(var p=0,y=e[f],h=r?r(y):y;(p=u(l,h,p,n))>-1;)l!==t&&a.call(l,p,1),a.call(t,p,1);return t}var f=function(t,e){return t&&t.length&&e&&e.length?u(t,e):t},s=r((function(t,r){var n,o,c,i,a,u,f,s,l,p,y,h,b,g,d,v,j,m;t.exports=(n="function"==typeof Promise,o="object"==typeof self?self:e,c="undefined"!=typeof Symbol,i="undefined"!=typeof Map,a="undefined"!=typeof Set,u="undefined"!=typeof WeakMap,f="undefined"!=typeof WeakSet,s="undefined"!=typeof DataView,l=c&&void 0!==Symbol.iterator,p=c&&void 0!==Symbol.toStringTag,y=a&&"function"==typeof Set.prototype.entries,h=i&&"function"==typeof Map.prototype.entries,b=y&&Object.getPrototypeOf((new Set).entries()),g=h&&Object.getPrototypeOf((new Map).entries()),d=l&&"function"==typeof Array.prototype[Symbol.iterator],v=d&&Object.getPrototypeOf([][Symbol.iterator]()),j=l&&"function"==typeof String.prototype[Symbol.iterator],m=j&&Object.getPrototypeOf(""[Symbol.iterator]()),function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===p||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var r=p&&t[Symbol.toStringTag];if("string"==typeof r)return r;var c=Object.getPrototypeOf(t);return c===RegExp.prototype?"RegExp":c===Date.prototype?"Date":n&&c===Promise.prototype?"Promise":a&&c===Set.prototype?"Set":i&&c===Map.prototype?"Map":f&&c===WeakSet.prototype?"WeakSet":u&&c===WeakMap.prototype?"WeakMap":s&&c===DataView.prototype?"DataView":i&&c===g?"Map Iterator":a&&c===b?"Set Iterator":d&&c===v?"Array Iterator":j&&c===m?"String Iterator":null===c?"Object":Object.prototype.toString.call(t).slice(8,-1)})})),l=/^\s+|\s+$/g,p="[\\ud800-\\udfff]",y="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",h="\\ud83c[\\udffb-\\udfff]",b="[^\\ud800-\\udfff]",g="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",v="(?:"+y+"|"+h+")"+"?",j="[\\ufe0e\\ufe0f]?"+v+("(?:\\u200d(?:"+[b,g,d].join("|")+")[\\ufe0e\\ufe0f]?"+v+")*"),m="(?:"+[b+y+"?",y,g,d,p].join("|")+")",_=RegExp(h+"(?="+h+")|"+m+j,"g"),w=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),O="object"==typeof e&&e&&e.Object===Object&&e,S="object"==typeof self&&self&&self.Object===Object&&self,A=O||S||Function("return this")();function T(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,c=r+(n?1:-1);n?c--:++c<o;)if(e(t[c],c,t))return c;return-1}(t,W,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function W(t){return t!=t}function M(t){return function(t){return w.test(t)}(t)?function(t){return t.match(_)||[]}(t):function(t){return t.split("")}(t)}var E=Object.prototype.toString,k=A.Symbol,N=k?k.prototype:void 0,x=N?N.toString:void 0;function D(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==E.call(t)}(t))return x?x.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function F(t,e,r){var n=t.length;return r=void 0===r?n:r,!e&&r>=n?t:function(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var c=Array(o);++n<o;)c[n]=t[n+e];return c}(t,e,r)}var I=function(t,e,r){var n;if((t=null==(n=t)?"":D(n))&&(r||void 0===e))return t.replace(l,"");if(!t||!(e=D(e)))return t;var o=M(t),c=M(e);return F(o,function(t,e){for(var r=-1,n=t.length;++r<n&&T(e,t[r],0)>-1;);return r}(o,c),function(t,e){for(var r=t.length;r--&&T(e,t[r],0)>-1;);return r}(o,c)+1).join("")};var P,$,J=Function.prototype,R=Object.prototype,H=J.toString,L=R.hasOwnProperty,U=H.call(Object),B=R.toString,C=(P=Object.getPrototypeOf,$=Object,function(t){return P($(t))});var V=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=B.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=C(t);if(null===e)return!0;var r=L.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&H.call(r)==U};const q=Array.isArray;function z(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function G(t,e){return function t(e,r,o,c){const i=n(e);let a,u,f,s,l;if((o=Object.assign({depth:-1,path:""},o)).depth+=1,q(i))for(a=0,u=i.length;a<u&&!c.now;a++){const e=`${o.path}.${a}`;void 0!==i[a]?(o.parent=n(i),o.parentType="array",f=t(r(i[a],void 0,Object.assign({},o,{path:z(e)}),c),r,Object.assign({},o,{path:z(e)}),c),Number.isNaN(f)&&a<i.length?(i.splice(a,1),a-=1):i[a]=f):i.splice(a,1)}else if(V(i))for(s=Object.keys(i),a=0,u=s.length;a<u&&!c.now;a++){l=s[a];const e=`${o.path}.${l}`;0===o.depth&&null!=l&&(o.topmostKey=l),o.parent=n(i),o.parentType="object",f=t(r(l,i[l],Object.assign({},o,{path:z(e)}),c),r,Object.assign({},o,{path:z(e)}),c),Number.isNaN(f)?delete i[l]:i[l]=f}return i}(t,e,{},{now:!1})}function K(t){function e(t){return"string"==typeof t}const r=Array.isArray;let n=!0;return!!(r(t)||V(t)||e(t))&&(e(t)?0===I(t).length:(t=G(t,(t,r)=>{const o=void 0!==r?r:t;return e(o)&&""!==I(o)&&(n=!1),o}),n))}const Q=/[|\\{}()[\]^$+*?.-]/g;const X=new Map;function Y(t,e){e={caseSensitive:!1,...e};const r=t+JSON.stringify(e);if(X.has(r))return X.get(r);const n="!"===t[0];n&&(t=t.slice(1)),t=(t=>{if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(Q,"\\$&")})(t).replace(/\\\*/g,".*");const o=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return o.negated=n,X.set(r,o),o}var Z=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>Y(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};Z.isMatch=(t,e,r)=>{const n=Array.isArray(t)?t:[t],o=Array.isArray(e)?e:[e];return n.some(t=>o.every(e=>{const n=Y(e,r),o=n.test(t);return n.negated?!o:o}))};var tt=Array.isArray;function et(t){return null!=t}function rt(t){return"Object"===s(t)}function nt(t){return"string"===s(t)}function ot(t){return rt(t)||nt(t)||function(t){return"number"===s(t)}(t)||function(t){return"boolean"===s(t)}(t)||tt(t)||function(t){return null===t}(t)}return function e(r,o,c){if(void 0===r)throw new TypeError("ast-compare/compare(): [THROW_ID_01] first argument is missing!");if(void 0===o)throw new TypeError("ast-compare/compare(): [THROW_ID_02] second argument is missing!");if(et(r)&&!ot(r))throw new TypeError("ast-compare/compare(): [THROW_ID_03] first input argument is of a wrong type, ".concat(s(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(et(o)&&!ot(o))throw new TypeError("ast-compare/compare(): [THROW_ID_04] second input argument is of a wrong type, ".concat(s(o),", equal to: ").concat(JSON.stringify(o,null,4)));if(et(c)&&!rt(c))throw new TypeError("ast-compare/compare(): [THROW_ID_05] third argument, options object, must, well, be an object! Currently it's: ".concat(s(c)," and equal to: ").concat(JSON.stringify(c,null,4)));var i,a,u,l,p=n(o),y=n(r),h=0,b=Object.assign({},{hungryForWhitespace:!1,matchStrictly:!1,verboseWhenMismatches:!1,useWildcards:!1},c);if(b.hungryForWhitespace&&b.matchStrictly&&rt(r)&&K(r)&&rt(o)&&0===Object.keys(o).length)return!0;if((!b.hungryForWhitespace||b.hungryForWhitespace&&!K(r)&&K(o))&&rt(r)&&0!==Object.keys(r).length&&rt(o)&&0===Object.keys(o).length||s(r)!==s(o)&&(!b.hungryForWhitespace||b.hungryForWhitespace&&!K(r)))return!1;if(nt(y)&&nt(p))return!!(b.hungryForWhitespace&&K(y)&&K(p))||(b.verboseWhenMismatches?y===p||"Given string ".concat(p," is not matched! We have ").concat(y," on the other end."):b.useWildcards?Z.isMatch(y,p,{caseSensitive:!0}):y===p);if(tt(y)&&tt(p)){if(b.hungryForWhitespace&&K(p)&&(!b.matchStrictly||b.matchStrictly&&y.length===p.length))return!0;if(!b.hungryForWhitespace&&p.length>y.length||b.matchStrictly&&p.length!==y.length)return!!b.verboseWhenMismatches&&"The length of a given array, ".concat(JSON.stringify(p,null,4)," is ").concat(p.length," but the length of an array on the other end, ").concat(JSON.stringify(y,null,4)," is ").concat(y.length);if(0===p.length)return 0===y.length||!!b.verboseWhenMismatches&&"The given array has no elements, but the array on the other end, ".concat(JSON.stringify(y,null,4)," does have some");for(var g=0,d=p.length;g<d;g++){u=!1;for(var v=h,j=y.length;v<j;v++)if(h+=1,!0===e(y[v],p[g],b)){u=!0;break}if(!u)return!!b.verboseWhenMismatches&&"The given array ".concat(JSON.stringify(p,null,4)," is not a subset of an array on the other end, ").concat(JSON.stringify(y,null,4))}}else{if(!rt(y)||!rt(p))return!!(b.hungryForWhitespace&&K(y)&&K(p)&&(!b.matchStrictly||b.matchStrictly&&(l=p,rt(l)?0===Object.keys(l).length:(tt(l)||nt(l))&&0===l.length)))||y===p;if(i=Object.keys(p),a=Object.keys(y),b.matchStrictly&&i.length!==a.length){if(!b.verboseWhenMismatches)return!1;var m=f(n(i),n(a)),_=m.length>0?"First object has unique keys: ".concat(JSON.stringify(m,null,4),"."):"",w=f(n(a),n(i)),O=w.length>0?"Second object has unique keys:\n        ".concat(JSON.stringify(w,null,4),"."):"";return"When matching strictly, we found that both objects have different amount of keys. ".concat(_," ").concat(O)}for(var S=function(t,r){if(!et(y[i[r]]))return!b.useWildcards||b.useWildcards&&!i[r].includes("*")?b.verboseWhenMismatches?{v:"The given object has key ".concat(i[r]," which the other-one does not have.")}:{v:!1}:Object.keys(y).some((function(t){return Z.isMatch(t,i[r],{caseSensitive:!0})}))?{v:!0}:b.verboseWhenMismatches?{v:"The given object has key ".concat(i[r]," which the other-one does not have.")}:{v:!1};if(void 0!==y[i[r]]&&!ot(y[i[r]]))throw new TypeError("ast-compare/compare(): [THROW_ID_07] The input ".concat(JSON.stringify(y,null,4)," contains a value of a wrong type, ").concat(s(y[i[r]])," at index ").concat(r,", equal to: ").concat(JSON.stringify(y[i[r]],null,4)));if(!ot(p[i[r]]))throw new TypeError("ast-compare/compare(): [THROW_ID_08] The input ".concat(JSON.stringify(p,null,4)," contains a value of a wrong type, ").concat(s(p[i[r]])," at index ").concat(r,", equal to: ").concat(JSON.stringify(p[i[r]],null,4)));if(et(y[i[r]])&&s(y[i[r]])!==s(p[i[r]])){if(!(K(y[i[r]])&&K(p[i[r]])&&b.hungryForWhitespace))return b.verboseWhenMismatches?{v:"The given key ".concat(i[r]," is of a different type on both objects. On the first-one, it's ").concat(s(p[i[r]]),", on the second-one, it's ").concat(s(y[i[r]]))}:{v:!1}}else if(!0!==e(y[i[r]],p[i[r]],b))return b.verboseWhenMismatches?{v:"The given piece ".concat(JSON.stringify(p[i[r]],null,4)," and ").concat(JSON.stringify(y[i[r]],null,4)," don't match.")}:{v:!1}},A=0,T=i.length;A<T;A++){var W=S(0,A);if("object"===t(W))return W.v}}return!0}}));
