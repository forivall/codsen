/**
 * @name string-remove-widows
 * @fileoverview Helps to prevent widow words in a text
 * @version 3.0.1
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-remove-widows/}
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).stringRemoveWidows={})}(this,(function(t){"use strict";
/**
 * @name arrayiffy-if-string
 * @fileoverview Put non-empty strings into arrays, turn empty-ones into empty arrays. Bypass everything else.
 * @version 4.0.1
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/arrayiffy-if-string/}
 */
/**
 * @name string-match-left-right
 * @fileoverview Match substrings on the left or right of a given index, ignoring whitespace
 * @version 8.0.1
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-match-left-right/}
 */
function e(t){return t&&"object"==typeof t&&!Array.isArray(t)}function r(t){return"string"==typeof t}const n={cb:void 0,i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1,hungry:!1},o=t=>t+1;function i(t,e,r,i,s=!1,a=o){const u="function"==typeof r?r():r;if(+e<0&&s&&"EOL"===u)return u;const l={...n,...i};if(e>=t.length&&!s)return!1;let c=s?1:r.length,g=0,f=!1,h=!1,p=!1,y=l.maxMismatches,m=e,d=!1,b=!1,w=!1;function v(){return 1===g&&y<l.maxMismatches-1}for(;t[m];){const e=a(m);if(l.trimBeforeMatching&&""===t[m].trim()){if(!t[e]&&s&&"EOL"===r)return!0;m=a(m);continue}if(l&&!l.i&&l.trimCharsBeforeMatching&&l.trimCharsBeforeMatching.includes(t[m])||l&&l.i&&l.trimCharsBeforeMatching&&l.trimCharsBeforeMatching.map((t=>t.toLowerCase())).includes(t[m].toLowerCase())){if(s&&"EOL"===r&&!t[e])return!0;m=a(m);continue}const n=e>m?r[r.length-c]:r[c-1];if(!l.i&&t[m]===n||l.i&&t[m].toLowerCase()===n.toLowerCase()){if(d||(d=!0),p||(p=!0),c===r.length){if(b=!0,y!==l.maxMismatches)return!1}else 1===c&&(w=!0);if(c-=1,g++,v())return!1;if(!c)return(g!==r.length||y===l.maxMismatches||!f)&&m}else{if(f||g||(f=!0),!(l.maxMismatches&&y&&m))return!(0!==m||1!==c||l.lastMustMatch||!p)&&0;y-=1;for(let n=0;n<=y;n++){const o=e>m?r[r.length-c+1+n]:r[c-2-n],i=t[a(m)];if(o&&(!l.i&&t[m]===o||l.i&&t[m].toLowerCase()===o.toLowerCase())&&(!l.firstMustMatch||c!==r.length)){if(g++,v())return!1;c-=2,d=!0;break}if(i&&o&&(!l.i&&i===o||l.i&&i.toLowerCase()===o.toLowerCase())&&(!l.firstMustMatch||c!==r.length)){if(!g&&!l.hungry)return!1;c-=1,d=!0;break}if(void 0===o&&y>=0&&d&&(!l.firstMustMatch||b)&&(!l.lastMustMatch||w))return m}d||(h=m)}if(!1!==h&&h!==m&&(h=!1),c<1)return m;m=a(m)}return c>0?!(!s||"EOL"!==u)||!!(l&&l.maxMismatches>=c&&p)&&(h||0):void 0}function s(t,o,s,a){return function(t,o,s,a,u){if(e(u)&&Object.prototype.hasOwnProperty.call(u,"trimBeforeMatching")&&"boolean"!=typeof u.trimBeforeMatching)throw new Error(`string-match-left-right/${t}(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!${Array.isArray(u.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""}`);const l={...n,...u};var c;if("string"==typeof l.trimCharsBeforeMatching&&(l.trimCharsBeforeMatching="string"==typeof(c=l.trimCharsBeforeMatching)?c.length?[c]:[]:c),l.trimCharsBeforeMatching=l.trimCharsBeforeMatching.map((t=>r(t)?t:String(t))),!r(o))return!1;if(!o.length)return!1;if(!Number.isInteger(s)||s<0)throw new Error(`string-match-left-right/${t}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof s}, equal to:\n${JSON.stringify(s,null,4)}`);let g,f;if(r(a))g=[a];else if(Array.isArray(a))g=a;else if(a){if("function"!=typeof a)throw new Error(`string-match-left-right/${t}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof a}, equal to:\n${JSON.stringify(a,null,4)}`);g=[],g.push(a)}else g=a;if(u&&!e(u))throw new Error(`string-match-left-right/${t}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof u}", and equal to:\n${JSON.stringify(u,null,4)}`);let h=0,p="";if(l&&l.trimCharsBeforeMatching&&l.trimCharsBeforeMatching.some(((t,e)=>t.length>1&&(h=e,p=t,!0))))throw new Error(`string-match-left-right/${t}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${h} is longer than 1 character, ${p.length} (equals to ${p}). Please split it into separate characters and put into array as separate elements.`);if(!g||!Array.isArray(g)||Array.isArray(g)&&!g.length||Array.isArray(g)&&1===g.length&&r(g[0])&&!g[0].trim()){if("function"==typeof l.cb){let e,r=s;if("matchLeftIncl"!==t&&"matchRight"!==t||(r+=1),"L"===t[5])for(let t=r;t--;){const r=o[t];if((!l.trimBeforeMatching||l.trimBeforeMatching&&void 0!==r&&r.trim())&&(!l.trimCharsBeforeMatching||!l.trimCharsBeforeMatching.length||void 0!==r&&!l.trimCharsBeforeMatching.includes(r))){e=t;break}}else if(t.startsWith("matchRight"))for(let t=r;t<o.length;t++){const r=o[t];if((!l.trimBeforeMatching||l.trimBeforeMatching&&r.trim())&&(!l.trimCharsBeforeMatching||!l.trimCharsBeforeMatching.length||!l.trimCharsBeforeMatching.includes(r))){e=t;break}}if(void 0===e)return!1;const n=o[e],i=e+1;let a="";return i&&i>0&&(a=o.slice(0,i)),"L"===t[5]||e&&e>0&&(a=o.slice(e)),l.cb(n,a,e)}let e="";throw u||(e=" More so, the whole options object, the fourth input argument, is missing!"),new Error(`string-match-left-right/${t}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${e}`)}for(let e=0,r=g.length;e<r;e++){f="function"==typeof g[e];const r=g[e];let n,a,u="",c=s;"matchRight"===t?c+=1:"matchLeft"===t&&(c-=1);const h=i(o,c,r,l,f,(e=>"L"===t[5]?e-1:e+1));if(h&&f&&"function"==typeof r&&"EOL"===r())return!(!r()||l.cb&&!l.cb(n,u,a))&&r();if(Number.isInteger(h)&&(a=t.startsWith("matchLeft")?h-1:h+1,u="L"===t[5]?o.slice(0,h):o.slice(a)),a<0&&(a=void 0),o[a]&&(n=o[a]),Number.isInteger(h)&&(!l.cb||l.cb(n,u,a)))return r}return!1}("matchRightIncl",t,o,s,a)}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};Function.prototype.toString.call(Object);var u={exports:{}};!function(t,e){var r="__lodash_hash_undefined__",n=9007199254740991,o="[object Arguments]",i="[object Boolean]",s="[object Date]",u="[object Function]",l="[object GeneratorFunction]",c="[object Map]",g="[object Number]",f="[object Object]",h="[object Promise]",p="[object RegExp]",y="[object Set]",m="[object String]",d="[object Symbol]",b="[object WeakMap]",w="[object ArrayBuffer]",v="[object DataView]",_="[object Float32Array]",T="[object Float64Array]",O="[object Int8Array]",A="[object Int16Array]",j="[object Int32Array]",$="[object Uint8Array]",E="[object Uint8ClampedArray]",I="[object Uint16Array]",M="[object Uint32Array]",R=/\w*$/,W=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,C={};C[o]=C["[object Array]"]=C[w]=C[v]=C[i]=C[s]=C[_]=C[T]=C[O]=C[A]=C[j]=C[c]=C[g]=C[f]=C[p]=C[y]=C[m]=C[d]=C[$]=C[E]=C[I]=C[M]=!0,C["[object Error]"]=C[u]=C[b]=!1;var N="object"==typeof self&&self&&self.Object===Object&&self,S="object"==typeof a&&a&&a.Object===Object&&a||N||Function("return this")(),L=e&&!e.nodeType&&e,x=L&&t&&!t.nodeType&&t,D=x&&x.exports===L;function B(t,e){return t.set(e[0],e[1]),t}function H(t,e){return t.add(e),t}function J(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function P(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function k(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function q(t,e){return function(r){return t(e(r))}}function U(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var z,Z=Array.prototype,K=Function.prototype,V=Object.prototype,G=S["__core-js_shared__"],Q=(z=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"",X=K.toString,Y=V.hasOwnProperty,tt=V.toString,et=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=D?S.Buffer:void 0,nt=S.Symbol,ot=S.Uint8Array,it=q(Object.getPrototypeOf,Object),st=Object.create,at=V.propertyIsEnumerable,ut=Z.splice,lt=Object.getOwnPropertySymbols,ct=rt?rt.isBuffer:void 0,gt=q(Object.keys,Object),ft=xt(S,"DataView"),ht=xt(S,"Map"),pt=xt(S,"Promise"),yt=xt(S,"Set"),mt=xt(S,"WeakMap"),dt=xt(Object,"create"),bt=Pt(ft),wt=Pt(ht),vt=Pt(pt),_t=Pt(yt),Tt=Pt(mt),Ot=nt?nt.prototype:void 0,At=Ot?Ot.valueOf:void 0;function jt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function $t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function It(t){this.__data__=new $t(t)}function Mt(t,e){var r=qt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ut(t)}(t)&&Y.call(t,"callee")&&(!at.call(t,"callee")||tt.call(t)==o)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,i=!!n;for(var s in t)!e&&!Y.call(t,s)||i&&("length"==s||Ht(s,n))||r.push(s);return r}function Rt(t,e,r){var n=t[e];Y.call(t,e)&&kt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Wt(t,e){for(var r=t.length;r--;)if(kt(t[r][0],e))return r;return-1}function Ft(t,e,r,n,a,h,b){var W;if(n&&(W=h?n(t,a,h,b):n(t)),void 0!==W)return W;if(!Kt(t))return t;var F=qt(t);if(F){if(W=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,W)}else{var N=Bt(t),S=N==u||N==l;if(zt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(N==f||N==o||S&&!h){if(P(t))return h?t:{};if(W=function(t){return"function"!=typeof t.constructor||Jt(t)?{}:(e=it(t),Kt(e)?st(e):{});var e}(S?{}:t),!e)return function(t,e){return St(t,Dt(t),e)}(t,function(t,e){return t&&St(e,Vt(e),t)}(W,t))}else{if(!C[N])return h?t:{};W=function(t,e,r,n){var o=t.constructor;switch(e){case w:return Nt(t);case i:case s:return new o(+t);case v:return function(t,e){var r=e?Nt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case _:case T:case O:case A:case j:case $:case E:case I:case M:return function(t,e){var r=e?Nt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case c:return function(t,e,r){return J(e?r(k(t),!0):k(t),B,new t.constructor)}(t,n,r);case g:case m:return new o(t);case p:return function(t){var e=new t.constructor(t.source,R.exec(t));return e.lastIndex=t.lastIndex,e}(t);case y:return function(t,e,r){return J(e?r(U(t),!0):U(t),H,new t.constructor)}(t,n,r);case d:return a=t,At?Object(At.call(a)):{}}var a}(t,N,Ft,e)}}b||(b=new It);var L=b.get(t);if(L)return L;if(b.set(t,W),!F)var x=r?function(t){return function(t,e,r){var n=e(t);return qt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Vt,Dt)}(t):Vt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(x||t,(function(o,i){x&&(o=t[i=o]),Rt(W,i,Ft(o,e,r,n,i,t,b))})),W}function Ct(t){return!(!Kt(t)||(e=t,Q&&Q in e))&&(Zt(t)||P(t)?et:W).test(Pt(t));var e}function Nt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function St(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var s=e[o],a=n?n(r[s],t[s],s,r,t):void 0;Rt(r,s,void 0===a?t[s]:a)}return r}function Lt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function xt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Ct(r)?r:void 0}jt.prototype.clear=function(){this.__data__=dt?dt(null):{}},jt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},jt.prototype.get=function(t){var e=this.__data__;if(dt){var n=e[t];return n===r?void 0:n}return Y.call(e,t)?e[t]:void 0},jt.prototype.has=function(t){var e=this.__data__;return dt?void 0!==e[t]:Y.call(e,t)},jt.prototype.set=function(t,e){return this.__data__[t]=dt&&void 0===e?r:e,this},$t.prototype.clear=function(){this.__data__=[]},$t.prototype.delete=function(t){var e=this.__data__,r=Wt(e,t);return!(r<0)&&(r==e.length-1?e.pop():ut.call(e,r,1),!0)},$t.prototype.get=function(t){var e=this.__data__,r=Wt(e,t);return r<0?void 0:e[r][1]},$t.prototype.has=function(t){return Wt(this.__data__,t)>-1},$t.prototype.set=function(t,e){var r=this.__data__,n=Wt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Et.prototype.clear=function(){this.__data__={hash:new jt,map:new(ht||$t),string:new jt}},Et.prototype.delete=function(t){return Lt(this,t).delete(t)},Et.prototype.get=function(t){return Lt(this,t).get(t)},Et.prototype.has=function(t){return Lt(this,t).has(t)},Et.prototype.set=function(t,e){return Lt(this,t).set(t,e),this},It.prototype.clear=function(){this.__data__=new $t},It.prototype.delete=function(t){return this.__data__.delete(t)},It.prototype.get=function(t){return this.__data__.get(t)},It.prototype.has=function(t){return this.__data__.has(t)},It.prototype.set=function(t,e){var r=this.__data__;if(r instanceof $t){var n=r.__data__;if(!ht||n.length<199)return n.push([t,e]),this;r=this.__data__=new Et(n)}return r.set(t,e),this};var Dt=lt?q(lt,Object):function(){return[]},Bt=function(t){return tt.call(t)};function Ht(t,e){return!!(e=null==e?n:e)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<e}function Jt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||V)}function Pt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function kt(t,e){return t===e||t!=t&&e!=e}(ft&&Bt(new ft(new ArrayBuffer(1)))!=v||ht&&Bt(new ht)!=c||pt&&Bt(pt.resolve())!=h||yt&&Bt(new yt)!=y||mt&&Bt(new mt)!=b)&&(Bt=function(t){var e=tt.call(t),r=e==f?t.constructor:void 0,n=r?Pt(r):void 0;if(n)switch(n){case bt:return v;case wt:return c;case vt:return h;case _t:return y;case Tt:return b}return e});var qt=Array.isArray;function Ut(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}(t.length)&&!Zt(t)}var zt=ct||function(){return!1};function Zt(t){var e=Kt(t)?tt.call(t):"";return e==u||e==l}function Kt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Vt(t){return Ut(t)?Mt(t):function(t){if(!Jt(t))return gt(t);var e=[];for(var r in Object(t))Y.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Ft(t,!0,!0)}}(u,u.exports);
/**
 * @name string-left-right
 * @fileoverview Looks up the first non-whitespace character to the left/right of a given index
 * @version 5.0.1
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-left-right/}
 */
const l=" ";function c(t,e=0){return function({str:t,idx:e=0,stopAtNewlines:r=!1,stopAtRawNbsp:n=!1}){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),!t[e+1])return null;if(t[e+1]&&(t[e+1].trim()||r&&"\n\r".includes(t[e+1])||n&&t[e+1]===l))return e+1;if(t[e+2]&&(t[e+2].trim()||r&&"\n\r".includes(t[e+2])||n&&t[e+2]===l))return e+2;for(let o=e+1,i=t.length;o<i;o++)if(t[o].trim()||r&&"\n\r".includes(t[o])||n&&t[o]===l)return o;return null}({str:t,idx:e,stopAtNewlines:!1,stopAtRawNbsp:!1})}function g(t,e=0){return function({str:t,idx:e,stopAtNewlines:r,stopAtRawNbsp:n}){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),e<1)return null;if(t[~-e]&&(t[~-e].trim()||r&&"\n\r".includes(t[~-e])||n&&t[~-e]===l))return~-e;if(t[e-2]&&(t[e-2].trim()||r&&"\n\r".includes(t[e-2])||n&&t[e-2]===l))return e-2;for(let o=e;o--;)if(t[o]&&(t[o].trim()||r&&"\n\r".includes(t[o])||n&&t[o]===l))return o;return null}({str:t,idx:e,stopAtNewlines:!1,stopAtRawNbsp:!1})}
/**
 * @name string-collapse-leading-whitespace
 * @fileoverview Collapse the leading and trailing whitespace of a string
 * @version 6.0.1
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-collapse-leading-whitespace/}
 */function f(t,e=1){function r(t){return Array.from(t).reverse().join("")}function n(t,e,r){const n=r?"\n":"\r",o=r?"\r":"\n";if(!t)return t;let i=0,s="";for(let r=0,a=t.length;r<a;r++)(t[r]===n||t[r]===o&&t[r-1]!==n)&&i++,"\r\n".includes(t[r])||" "===t[r]?" "===t[r]?s+=t[r]:t[r]===n?i<=e&&(s+=t[r],t[r+1]===o&&(s+=t[r+1],r++)):t[r]===o&&(!t[r-1]||t[r-1]!==n)&&i<=e&&(s+=t[r]):t[r+1]||i||(s+=" ");return s}if("string"==typeof t&&t.length){let o=1;"number"==typeof+e&&Number.isInteger(+e)&&+e>=0&&(o=+e);let i="",s="";if(t.trim()){if(!t[0].trim())for(let e=0,r=t.length;e<r;e++)if(t[e].trim()){i=t.slice(0,e);break}}else i=t;if(t.trim()&&(""===t.slice(-1).trim()||" "===t.slice(-1)))for(let e=t.length;e--;)if(t[e].trim()){s=t.slice(e+1);break}return`${n(i,o,!1)}${t.trim()}${r(n(r(s),o,!0))}`}return t}
/**
 * @name ranges-push
 * @fileoverview Gather string index ranges
 * @version 6.0.1
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-push/}
 */const h={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function p(t,e){if(!Array.isArray(t)||!t.length)return t;const r={...h,...e};let n,o;if(r.strictlyTwoElementsInRangeArrays&&!t.filter((t=>t)).every(((t,e)=>2===t.length||(n=e,o=t.length,!1))))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(t[n],null,4)}) has not two but ${o} elements!`);if(!t.filter((t=>t)).every(((t,e)=>!(!Number.isInteger(t[0])||t[0]<0||!Number.isInteger(t[1])||t[1]<0)||(n=e,!1))))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(t[n],null,4)}) does not consist of only natural numbers!`);const i=t.filter((t=>t)).length**2;let s=0;return Array.from(t).filter((t=>t)).sort(((t,e)=>(r.progressFn&&(s+=1,r.progressFn(Math.floor(100*s/i))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1)))}const y={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function m(t){return null!=t}function d(t){return Number.isInteger(t)&&t>=0}function b(t){return"string"==typeof t}const w={limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1};class v{constructor(t){const e={...w,...t};if(e.mergeType&&1!==e.mergeType&&2!==e.mergeType)if(b(e.mergeType)&&"1"===e.mergeType.trim())e.mergeType=1;else{if(!b(e.mergeType)||"2"!==e.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof e.mergeType}", equal to ${JSON.stringify(e.mergeType,null,4)}`);e.mergeType=2}this.opts=e,this.ranges=[]}ranges;opts;add(t,e,r){if(null==t&&null==e)return;if(m(t)&&!m(e)){if(Array.isArray(t)){if(t.length){if(t.some((t=>Array.isArray(t))))return void t.forEach((t=>{Array.isArray(t)&&this.add(...t)}));t.length&&d(+t[0])&&d(+t[1])&&this.add(...t)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(t,null,0)}) but second-one, "to" is not (${JSON.stringify(e,null,0)})`)}if(!m(t)&&m(e))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(e,null,0)}) but first-one, "from" is not (${JSON.stringify(t,null,0)})`);const n=+t,o=+e;if(d(r)&&(r=String(r)),!d(n)||!d(o))throw d(n)&&n>=0?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof o}" equal to: ${JSON.stringify(o,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof n}" equal to: ${JSON.stringify(n,null,4)}`);if(m(r)&&!b(r)&&!d(r))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`);if(m(this.ranges)&&Array.isArray(this.last())&&n===this.last()[1]){if(this.last()[1]=o,this.last(),null!==this.last()[2]&&m(r)){let t=!(this.last()[2]&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?r:this.last()[2]+r;this.opts.limitToBeAddedWhitespace&&(t=f(t,this.opts.limitLinebreaksCount)),b(t)&&!t.length||(this.last()[2]=t)}}else{this.ranges||(this.ranges=[]);const t=void 0===r||b(r)&&!r.length?[n,o]:[n,o,r&&this.opts.limitToBeAddedWhitespace?f(r,this.opts.limitLinebreaksCount):r];this.ranges.push(t)}}push(t,e,r){this.add(t,e,r)}current(){return Array.isArray(this.ranges)&&this.ranges.length?(this.ranges=function(t,e){function r(t){return t&&"object"==typeof t&&!Array.isArray(t)}if(!Array.isArray(t)||!t.length)return null;let n;if(e){if(!r(e))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(e,null,4)} (type ${typeof e})`);if(n={...y,...e},n.progressFn&&r(n.progressFn)&&!Object.keys(n.progressFn).length)n.progressFn=null;else if(n.progressFn&&"function"!=typeof n.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof n.progressFn}", equal to ${JSON.stringify(n.progressFn,null,4)}`);if(n.mergeType&&1!=+n.mergeType&&2!=+n.mergeType)throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof n.mergeType}", equal to ${JSON.stringify(n.mergeType,null,4)}`);if("boolean"!=typeof n.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof n.joinRangesThatTouchEdges}", equal to ${JSON.stringify(n.joinRangesThatTouchEdges,null,4)}`)}else n={...y};const o=t.filter((t=>t)).map((t=>[...t])).filter((t=>void 0!==t[2]||t[0]!==t[1]));let i,s,a;if(i=n.progressFn?p(o,{progressFn:t=>{a=Math.floor(t/5),a!==s&&(s=a,n.progressFn(a))}}):p(o),!i)return null;const u=i.length-1;for(let t=u;t>0;t--)n.progressFn&&(a=Math.floor(78*(1-t/u))+21,a!==s&&a>s&&(s=a,n.progressFn(a))),(i[t][0]<=i[t-1][0]||!n.joinRangesThatTouchEdges&&i[t][0]<i[t-1][1]||n.joinRangesThatTouchEdges&&i[t][0]<=i[t-1][1])&&(i[t-1][0]=Math.min(i[t][0],i[t-1][0]),i[t-1][1]=Math.max(i[t][1],i[t-1][1]),void 0!==i[t][2]&&(i[t-1][0]>=i[t][0]||i[t-1][1]<=i[t][1])&&null!==i[t-1][2]&&(null===i[t][2]&&null!==i[t-1][2]?i[t-1][2]=null:null!=i[t-1][2]?2==+n.mergeType&&i[t-1][0]===i[t][0]?i[t-1][2]=i[t][2]:i[t-1][2]+=i[t][2]:i[t-1][2]=i[t][2]),i.splice(t,1),t=i.length);return i.length?i:null}(this.ranges,{mergeType:this.opts.mergeType}),this.ranges&&this.opts.limitToBeAddedWhitespace?this.ranges.map((t=>m(t[2])?[t[0],t[1],f(t[2],this.opts.limitLinebreaksCount)]:t)):this.ranges):null}wipe(){this.ranges=[]}replace(t){if(Array.isArray(t)&&t.length){if(!Array.isArray(t[0])||!d(t[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(t[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.ranges=Array.from(t)}else this.ranges=[]}last(){return Array.isArray(this.ranges)&&this.ranges.length?this.ranges[this.ranges.length-1]:null}}
/**
 * @name ranges-sort
 * @fileoverview Sort string index ranges
 * @version 5.0.1
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-sort/}
 */const _={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function T(t,e){if(!Array.isArray(t)||!t.length)return t;const r={..._,...e};let n,o;if(r.strictlyTwoElementsInRangeArrays&&!t.filter((t=>t)).every(((t,e)=>2===t.length||(n=e,o=t.length,!1))))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(t[n],null,4)}) has not two but ${o} elements!`);if(!t.filter((t=>t)).every(((t,e)=>!(!Number.isInteger(t[0])||t[0]<0||!Number.isInteger(t[1])||t[1]<0)||(n=e,!1))))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(t[n],null,4)}) does not consist of only natural numbers!`);const i=t.filter((t=>t)).length**2;let s=0;return Array.from(t).filter((t=>t)).sort(((t,e)=>(r.progressFn&&(s+=1,r.progressFn(Math.floor(100*s/i))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1)))}
/**
 * @name ranges-merge
 * @fileoverview Merge and sort string index ranges
 * @version 8.0.1
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-merge/}
 */const O={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function A(t,e){function r(t){return t&&"object"==typeof t&&!Array.isArray(t)}if(!Array.isArray(t)||!t.length)return null;let n;if(e){if(!r(e))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(e,null,4)} (type ${typeof e})`);if(n={...O,...e},n.progressFn&&r(n.progressFn)&&!Object.keys(n.progressFn).length)n.progressFn=null;else if(n.progressFn&&"function"!=typeof n.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof n.progressFn}", equal to ${JSON.stringify(n.progressFn,null,4)}`);if(n.mergeType&&1!=+n.mergeType&&2!=+n.mergeType)throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof n.mergeType}", equal to ${JSON.stringify(n.mergeType,null,4)}`);if("boolean"!=typeof n.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof n.joinRangesThatTouchEdges}", equal to ${JSON.stringify(n.joinRangesThatTouchEdges,null,4)}`)}else n={...O};const o=t.filter((t=>t)).map((t=>[...t])).filter((t=>void 0!==t[2]||t[0]!==t[1]));let i,s,a;if(i=n.progressFn?T(o,{progressFn:t=>{a=Math.floor(t/5),a!==s&&(s=a,n.progressFn(a))}}):T(o),!i)return null;const u=i.length-1;for(let t=u;t>0;t--)n.progressFn&&(a=Math.floor(78*(1-t/u))+21,a!==s&&a>s&&(s=a,n.progressFn(a))),(i[t][0]<=i[t-1][0]||!n.joinRangesThatTouchEdges&&i[t][0]<i[t-1][1]||n.joinRangesThatTouchEdges&&i[t][0]<=i[t-1][1])&&(i[t-1][0]=Math.min(i[t][0],i[t-1][0]),i[t-1][1]=Math.max(i[t][1],i[t-1][1]),void 0!==i[t][2]&&(i[t-1][0]>=i[t][0]||i[t-1][1]<=i[t][1])&&null!==i[t-1][2]&&(null===i[t][2]&&null!==i[t-1][2]?i[t-1][2]=null:null!=i[t-1][2]?2==+n.mergeType&&i[t-1][0]===i[t][0]?i[t-1][2]=i[t][2]:i[t-1][2]+=i[t][2]:i[t-1][2]=i[t][2]),i.splice(t,1),t=i.length);return i.length?i:null}
/**
 * @name ranges-apply
 * @fileoverview Take an array of string index ranges, delete/replace the string according to them
 * @version 6.0.1
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-apply/}
 */function j(t,e,r){let n,o=0,i=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof t)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(e&&!Array.isArray(e))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(r&&"function"!=typeof r)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(!e||!e.filter((t=>t)).length)return t;n=Array.isArray(e)&&Number.isInteger(e[0])&&Number.isInteger(e[1])?[Array.from(e)]:Array.from(e);const s=n.length;let a=0;n.filter((t=>t)).forEach(((t,e)=>{if(r&&(o=Math.floor(a/s*10),o!==i&&(i=o,r(o))),!Array.isArray(t))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${e}th element not an array: ${JSON.stringify(t,null,4)}, which is ${typeof t}`);if(!Number.isInteger(t[0])){if(!Number.isInteger(+t[0])||+t[0]<0)throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${e}th element, array ${JSON.stringify(t,null,0)}. Its first element is not an integer, string index, but ${typeof t[0]}, equal to: ${JSON.stringify(t[0],null,4)}.`);n[e][0]=+n[e][0]}if(!Number.isInteger(t[1])){if(!Number.isInteger(+t[1])||+t[1]<0)throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${e}th element, array ${JSON.stringify(t,null,0)}. Its second element is not an integer, string index, but ${typeof t[1]}, equal to: ${JSON.stringify(t[1],null,4)}.`);n[e][1]=+n[e][1]}a+=1}));const u=A(n,{progressFn:t=>{r&&(o=10+Math.floor(t/10),o!==i&&(i=o,r(o)))}}),l=Array.isArray(u)?u.length:0;if(l>0){const e=t.slice(u[l-1][1]);t=u.reduce(((e,n,s,a)=>{r&&(o=20+Math.floor(s/l*80),o!==i&&(i=o,r(o)));return e+t.slice(0===s?0:a[s-1][1],a[s][0])+(a[s][2]||"")}),""),t+=e}return t}const $=" ",E="&nbsp;",I="\\00A0",M="\\u00A0",R=[{heads:"{{",tails:"}}"},{heads:["{% if","{%- if"],tails:["{% endif","{%- endif"]},{heads:["{% for","{%- for"],tails:["{% endfor","{%- endfor"]},{heads:["{%","{%-"],tails:["%}","-%}"]},{heads:"{#",tails:"#}"}],W=[{heads:"{{",tails:"}}"}],F=[{heads:["<%","<%=","<%-"],tails:["%>","=%>","-%>"]}],C=["abbr","address","area","article","aside","audio","base","bdi","bdo","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","doctype","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","param","picture","pre","progress","rb","rp","rt","rtc","ruby","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","ul","var","video","wbr","xml"],N={removeWidowPreventionMeasures:!1,convertEntities:!0,targetLanguage:"html",UKPostcodes:!1,hyphens:!0,minWordCount:4,minCharCount:5,ignore:[],reportProgressFunc:null,reportProgressFuncFrom:0,reportProgressFuncTo:100,tagRanges:[]};t.defaults=N,t.removeWidows=function(t,e){const r=Date.now();if("string"!=typeof t)throw void 0===t?new Error("string-remove-widows: [THROW_ID_01] the first input argument is completely missing! It should be given as string."):new Error(`string-remove-widows: [THROW_ID_02] the first input argument must be string! It was given as "${typeof t}", equal to:\n${JSON.stringify(t,null,4)}`);if(e&&"object"!=typeof e)throw new Error(`string-remove-widows: [THROW_ID_03] the second input argument, options object, should be a plain object but it was given as type ${typeof e}, equal to ${JSON.stringify(e,null,4)}`);const n=Array.isArray,o=t.length,i=new v({mergeType:2}),a=["."],u=/[A-Z]{1,2}[0-9][0-9A-Z]?$/,l=/^[0-9][A-Z]{2}/,f=.06;let h,p,y,m,d,b,w,_,T,O=0,A=0,S=0;const L={...N,...e},x={removeWidows:!1,convertEntities:!1};if(!L.ignore||!n(L.ignore)&&"string"!=typeof L.ignore)L.ignore=[];else if("string"==typeof L.ignore&&(L.ignore=[L.ignore]),L.ignore.includes("all"))L.ignore=L.ignore.concat(R.concat(F));else if(L.ignore.some((t=>"string"==typeof t))){let t=[];L.ignore=L.ignore.filter((e=>"string"==typeof e&&e.length?(["nunjucks","jinja","liquid"].includes(e.trim().toLowerCase())?t=t.concat(R):["hugo"].includes(e.trim().toLowerCase())?t=t.concat(W):["hexo"].includes(e.trim().toLowerCase())&&(t=t.concat(F)),!1):"object"==typeof e||void 0)),t.length&&(L.ignore=L.ignore.concat(t))}let D;function B(e,r){let n=$;L.removeWidowPreventionMeasures?n=" ":L.convertEntities&&(n=E,"string"==typeof L.targetLanguage&&("css"===L.targetLanguage.trim().toLowerCase()?n=I:"js"===L.targetLanguage.trim().toLowerCase()&&(n=M))),t.slice(e,r)!==n&&i.push(e,r,n)}function H(){A=0,S=0,p=void 0,y=void 0,m=void 0,d=void 0,b=void 0,w=void 0}L.reportProgressFunc&&(D=Math.floor(L.reportProgressFuncTo-(L.reportProgressFuncTo-L.reportProgressFuncFrom)*f-L.reportProgressFuncFrom)),H();for(let e=0;e<=o;e++){if(!_&&n(L.ignore)&&L.ignore.length&&L.ignore.some(((r,o)=>{if(n(r.heads)&&r.heads.some((r=>t.startsWith(r,e)))||"string"==typeof r.heads&&t.startsWith(r.heads,e))return A+=1,_=L.ignore[o].tails,!0})),!_&&T&&T===e&&(A+=1,T=void 0),"function"==typeof L.reportProgressFunc&&(h=L.reportProgressFuncFrom+Math.floor(e/o*(D||1)),h!==O&&(O=h,L.reportProgressFunc(h))),!_&&e&&t[e]&&t[e].trim()&&(!t[e-1]||t[e-1]&&!t[e-1].trim())&&(d=e),!_&&t[e]&&t[e].trim()&&(S+=1),_||!L.hyphens||!("-—–".includes(t[e])||t.startsWith("&ndash;",e)||t.startsWith("\\2013",e)||t.startsWith("\\u2013",e)||t.startsWith("&mdash;",e)||t.startsWith("\\2014",e)||t.startsWith("\\u2014",e))||!t[e+1]||t[e+1].trim()&&"&"!==t[e]||t[e-1]&&!t[e-1].trim()&&t[g(t,e)]&&(B(g(t,e)+1,e),x.removeWidows=!0),_||!t.startsWith("&nbsp;",e)&&!t.startsWith("&#160;",e)||(b=e,w=e+6,t[e+6]&&t[e+6].trim()&&(T=e+6),L.convertEntities?"css"!==L.targetLanguage&&"js"!==L.targetLanguage||(i.push(e,e+6,"css"===L.targetLanguage?I:M),x.convertEntities=!0):(i.push(e,e+6,$),x.convertEntities=!0)),!_&&t[e+4]&&"\\"===t[e]&&"0"===t[e+1]&&"0"===t[e+2]&&"A"===t[e+3].toUpperCase()&&"0"===t[e+4]&&(b=e,w=e+5,t[e+5]&&t[e+5].trim()&&(T=e+5),L.convertEntities?"html"!==L.targetLanguage&&"js"!==L.targetLanguage||(i.push(e,e+5,"html"===L.targetLanguage?E:M),x.convertEntities=!0):(i.push(e,e+5,$),x.convertEntities=!0)),!_&&"\\"===t[e]&&t[e+1]&&"u"===t[e+1].toLowerCase()&&"0"===t[e+2]&&"0"===t[e+3]&&t[e+4]&&"A"===t[e+4].toUpperCase()&&"0"===t[e+5]&&(b=e,w=e+6,t[e+6]&&t[e+6].trim()&&(T=e+6),L.convertEntities?"html"!==L.targetLanguage&&"css"!==L.targetLanguage||i.push(e,e+6,"html"===L.targetLanguage?E:I):i.push(e,e+6,$)),_||t[e]!==$||(b=e,w=e+1,L.convertEntities&&i.push(e,e+1,"css"===L.targetLanguage?I:"js"===L.targetLanguage?M:E)),_||!t[e]||!t[e].trim()||t[e-1]&&t[e-1].trim()||(A+=1),!_&&(!t[e]||"\r\n".includes(t[e])||("\n"===t[e]||"\r"===t[e]||"\r"===t[e]&&"\n"===t[e+1])&&g(t,e)&&a.includes(t[g(t,e)]))){if((!L.minWordCount||A>=L.minWordCount)&&(!L.minCharCount||S>=L.minCharCount)){let t,e;void 0!==m&&void 0!==d&&void 0!==b&&void 0!==w?m>b?(t=m,e=d):(t=b,e=w):void 0!==m&&void 0!==d?(t=m,e=d):void 0!==b&&void 0!==w&&(t=b,e=w),t&&e||!p||!y||(t=p,e=y),t&&e&&(B(t,e),x.removeWidows=!0)}H()}let r;L.UKPostcodes&&t[e]&&!t[e].trim()&&t[e-1]&&t[e-1].trim()&&u.test(t.slice(0,e))&&t[c(t,e)]&&l.test(t.slice(c(t,e)))&&(B(e,c(t,e)),x.removeWidows=!0),_||!t[e]||t[e].trim()||!t[e-1]||!t[e-1].trim()||!(void 0===m||t[m-1]&&t[m-1].trim())||"/>".includes(t[c(t,e)])||t.slice(0,e).trim().endsWith("br")||t.slice(0,e).trim().endsWith("hr")||t.slice(0,e).endsWith("<")&&C.some((r=>t.startsWith(r,c(t,e))))||(p=m,y=d,m=e,d=void 0,void 0===b&&void 0===w||(b=void 0,w=void 0)),_&&("string"!=typeof _||_.length&&!t.startsWith(_,e)?!n(_)||_.length&&!_.some((n=>{if(t.startsWith(n,e))return r=n,!0}))||(_=void 0,e+=r.length,n(L.ignore)&&L.ignore.length&&t[e+1]&&L.ignore.some((r=>s(t,e,r.tails,{trimBeforeMatching:!0,cb:(r,n,o)=>(o&&(e=o-1,t[e+1]&&t[e+1].trim()&&(A+=1)),!0)})))):_=void 0),t[e]&&"\r\n".includes(t[e])&&(A=0,S=0),n(L.tagRanges)&&L.tagRanges.length&&L.tagRanges.some((t=>{if(e>=t[0]&&e<=t[1]&&t[1]-1>e)return e=t[1]-1,!0}))}return j(t,i.current()).split("").forEach(((t,e)=>{})),{res:j(t,i.current(),L.reportProgressFunc?t=>{h=Math.floor(.94*(L.reportProgressFuncTo-L.reportProgressFuncFrom)+t/100*(L.reportProgressFuncTo-L.reportProgressFuncFrom)*f),h!==O&&(O=h,L.reportProgressFunc(h))}:void 0),ranges:i.current(),log:{timeTakenInMilliseconds:Date.now()-r},whatWasDone:x}},t.version="3.0.1",Object.defineProperty(t,"__esModule",{value:!0})}));
