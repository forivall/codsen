/**
 * is-html-tag-opening
 * Does an HTML tag start at given position?
 * Version: 1.9.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/is-html-tag-opening/
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isHtmlTagOpening=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function o(e){return e&&"object"===t(e)&&!Array.isArray(e)}function i(t){return"string"==typeof t}function a(t,e,r,n,o,i){var a="function"==typeof r?r():r;if(e<0&&o&&"EOL"===a)return a;if(e>=t.length&&!o)return!1;for(var c=o?1:r.length,s=!1,u=!1,f=n.maxMismatches,l=e,h=!1,p=!1,g=!1;t[l];){var b=i(l);if(n.trimBeforeMatching&&""===t[l].trim()){if(!t[b]&&o&&"EOL"===r)return!0;l=i(l)}else if(!n.i&&n.trimCharsBeforeMatching.includes(t[l])||n.i&&n.trimCharsBeforeMatching.map((function(t){return t.toLowerCase()})).includes(t[l].toLowerCase())){if(o&&"EOL"===r&&!t[b])return!0;l=i(l)}else{var y=b>l?r[r.length-c]:r[c-1];if(!n.i&&t[l]===y||n.i&&t[l].toLowerCase()===y.toLowerCase()){if(h||(h=!0),u||(u=!0),c===r.length?p=!0:1===c&&(g=!0),(c-=1)<1)return l}else{if(!(n.maxMismatches&&f&&l))return!(0!==l||1!==c||n.lastMustMatch||!u)&&0;f-=1;for(var d=0;d<=f;d++){var m=b>l?r[r.length-c+1+d]:r[c-2-d],v=t[i(l)];if(m&&(!n.i&&t[l]===m||n.i&&t[l].toLowerCase()===m.toLowerCase())&&(!n.firstMustMatch||c!==r.length)){c-=2,h=!0;break}if(v&&m&&(!n.i&&v===m||n.i&&v.toLowerCase()===m.toLowerCase())&&(!n.firstMustMatch||c!==r.length)){c-=1,h=!0;break}if(void 0===m&&f>=0&&h&&(!n.firstMustMatch||p)&&(!n.lastMustMatch||g))return l}h||(s=l)}if(!1!==s&&s!==l&&(s=!1),c<1)return l;l=i(l)}}return c>0?!(!o||"EOL"!==a)||!!(n.maxMismatches>=c&&u)&&(s||0):void 0}function c(e,r,c,s,u){var f={cb:void 0,i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1};if(o(u)&&Object.prototype.hasOwnProperty.call(u,"trimBeforeMatching")&&"boolean"!=typeof u.trimBeforeMatching)throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!").concat(Array.isArray(u.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""));var l,h,p,g,b,y=n(n({},f),u);if(y.trimCharsBeforeMatching="string"==typeof(l=y.trimCharsBeforeMatching)?l.length>0?[l]:[]:l,y.trimCharsBeforeMatching=y.trimCharsBeforeMatching.map((function(t){return i(t)?t:String(t)})),!i(r))return!1;if(!r.length)return!1;if(!Number.isInteger(c)||c<0)throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ").concat(t(c),", equal to:\n").concat(JSON.stringify(c,null,4)));if(i(s))h=[s];else if(Array.isArray(s))h=s;else if(s){if("function"!=typeof s)throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ").concat(t(s),", equal to:\n").concat(JSON.stringify(s,null,4)));(h=[]).push(s)}else h=s;if(u&&!o(u))throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type \"").concat(t(u),'", and equal to:\n').concat(JSON.stringify(u,null,4)));if(y.trimCharsBeforeMatching.some((function(t,e){return t.length>1&&(g=e,b=t,!0)})))throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ").concat(g," is longer than 1 character, ").concat(b.length," (equals to ").concat(b,"). Please split it into separate characters and put into array as separate elements."));if(!h||!Array.isArray(h)||Array.isArray(h)&&!h.length||Array.isArray(h)&&1===h.length&&i(h[0])&&!h[0].trim()){if("function"==typeof y.cb){var d,m=c;if("matchLeftIncl"!==e&&"matchRight"!==e||(m+=1),"L"===e[5])for(var v=m;v--;){var _=r[v];if((!y.trimBeforeMatching||y.trimBeforeMatching&&void 0!==_&&_.trim())&&(!y.trimCharsBeforeMatching.length||void 0!==_&&!y.trimCharsBeforeMatching.includes(_))){d=v;break}}else if(e.startsWith("matchRight"))for(var w=m;w<r.length;w++){var O=r[w];if((!y.trimBeforeMatching||y.trimBeforeMatching&&O.trim())&&(!y.trimCharsBeforeMatching.length||!y.trimCharsBeforeMatching.includes(O))){d=w;break}}if(void 0===d)return!1;var j=r[d],M=d+1,k="";return M&&M>0&&(k=r.slice(0,M)),"L"===e[5]?y.cb(j,k,d):(d&&d>0&&(k=r.slice(d)),y.cb(j,k,d))}var B="";throw u||(B=" More so, the whole options object, the fourth input argument, is missing!"),new Error("string-match-left-right/".concat(e,'(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!').concat(B))}for(var A=0,x=h.length;A<x;A++){p="function"==typeof h[A];var C=h[A],E=void 0,R=void 0,S="",L=c;"matchRight"===e?L+=1:"matchLeft"===e&&(L-=1);var I=a(r,L,C,y,p,(function(t){return"L"===e[5]?t-1:t+1}));if(I&&p&&"function"==typeof C&&"EOL"===C())return!(!C()||y.cb&&!y.cb(E,S,R))&&C();if(Number.isInteger(I)&&(R=e.startsWith("matchLeft")?I-1:I+1,S="L"===e[5]?r.slice(0,I):r.slice(R)),R<0&&(R=void 0),r[R]&&(E=r[R]),Number.isInteger(I)&&(!y.cb||y.cb(E,S,R)))return C}return!1}function s(t,e,r,n){return c("matchRightIncl",t,e,r,n)}function u(t,e,r,n){return c("matchRight",t,e,r,n)}Function.prototype.toString.call(Object);var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t){var e={exports:{}};t(e,e.exports)}((function(e,r){var n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",a="[object Boolean]",c="[object Date]",s="[object Function]",u="[object GeneratorFunction]",l="[object Map]",h="[object Number]",p="[object Object]",g="[object Promise]",b="[object RegExp]",y="[object Set]",d="[object String]",m="[object Symbol]",v="[object WeakMap]",_="[object ArrayBuffer]",w="[object DataView]",O="[object Float32Array]",j="[object Float64Array]",M="[object Int8Array]",k="[object Int16Array]",B="[object Int32Array]",A="[object Uint8Array]",x="[object Uint8ClampedArray]",C="[object Uint16Array]",E="[object Uint32Array]",R=/\w*$/,S=/^\[object .+?Constructor\]$/,L=/^(?:0|[1-9]\d*)$/,I={};I[i]=I["[object Array]"]=I[_]=I[w]=I[a]=I[c]=I[O]=I[j]=I[M]=I[k]=I[B]=I[l]=I[h]=I[p]=I[b]=I[y]=I[d]=I[m]=I[A]=I[x]=I[C]=I[E]=!0,I["[object Error]"]=I[s]=I[v]=!1;var T="object"==t(f)&&f&&f.Object===Object&&f,P="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,D=T||P||Function("return this")(),N=r&&!r.nodeType&&r,W=N&&e&&!e.nodeType&&e,H=W&&W.exports===N;function $(t,e){return t.set(e[0],e[1]),t}function F(t,e){return t.add(e),t}function U(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function q(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function J(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function z(t,e){return function(r){return t(e(r))}}function V(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var G,K=Array.prototype,Q=Function.prototype,X=Object.prototype,Y=D["__core-js_shared__"],Z=(G=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"",tt=Q.toString,et=X.hasOwnProperty,rt=X.toString,nt=RegExp("^"+tt.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=H?D.Buffer:void 0,it=D.Symbol,at=D.Uint8Array,ct=z(Object.getPrototypeOf,Object),st=Object.create,ut=X.propertyIsEnumerable,ft=K.splice,lt=Object.getOwnPropertySymbols,ht=ot?ot.isBuffer:void 0,pt=z(Object.keys,Object),gt=Wt(D,"DataView"),bt=Wt(D,"Map"),yt=Wt(D,"Promise"),dt=Wt(D,"Set"),mt=Wt(D,"WeakMap"),vt=Wt(Object,"create"),_t=qt(gt),wt=qt(bt),Ot=qt(yt),jt=qt(dt),Mt=qt(mt),kt=it?it.prototype:void 0,Bt=kt?kt.valueOf:void 0;function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function xt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Ct(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){this.__data__=new xt(t)}function Rt(e,r){var n=zt(e)||function(e){return function(e){return function(e){return!!e&&"object"==t(e)}(e)&&Vt(e)}(e)&&et.call(e,"callee")&&(!ut.call(e,"callee")||rt.call(e)==i)}(e)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(e.length,String):[],o=n.length,a=!!o;for(var c in e)!r&&!et.call(e,c)||a&&("length"==c||Ft(c,o))||n.push(c);return n}function St(t,e,r){var n=t[e];et.call(t,e)&&Jt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Lt(t,e){for(var r=t.length;r--;)if(Jt(t[r][0],e))return r;return-1}function It(t,e,r,n,o,f,g){var v;if(n&&(v=f?n(t,o,f,g):n(t)),void 0!==v)return v;if(!Qt(t))return t;var S=zt(t);if(S){if(v=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&et.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,v)}else{var L=$t(t),T=L==s||L==u;if(Gt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(L==p||L==i||T&&!f){if(q(t))return f?t:{};if(v=function(t){return"function"!=typeof t.constructor||Ut(t)?{}:(e=ct(t),Qt(e)?st(e):{});var e}(T?{}:t),!e)return function(t,e){return Dt(t,Ht(t),e)}(t,function(t,e){return t&&Dt(e,Xt(e),t)}(v,t))}else{if(!I[L])return f?t:{};v=function(t,e,r,n){var o=t.constructor;switch(e){case _:return Pt(t);case a:case c:return new o(+t);case w:return function(t,e){var r=e?Pt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case O:case j:case M:case k:case B:case A:case x:case C:case E:return function(t,e){var r=e?Pt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return U(e?r(J(t),!0):J(t),$,new t.constructor)}(t,n,r);case h:case d:return new o(t);case b:return function(t){var e=new t.constructor(t.source,R.exec(t));return e.lastIndex=t.lastIndex,e}(t);case y:return function(t,e,r){return U(e?r(V(t),!0):V(t),F,new t.constructor)}(t,n,r);case m:return i=t,Bt?Object(Bt.call(i)):{}}var i}(t,L,It,e)}}g||(g=new Et);var P=g.get(t);if(P)return P;if(g.set(t,v),!S)var D=r?function(t){return function(t,e,r){var n=e(t);return zt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Xt,Ht)}(t):Xt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(D||t,(function(o,i){D&&(o=t[i=o]),St(v,i,It(o,e,r,n,i,t,g))})),v}function Tt(t){return!(!Qt(t)||(e=t,Z&&Z in e))&&(Kt(t)||q(t)?nt:S).test(qt(t));var e}function Pt(t){var e=new t.constructor(t.byteLength);return new at(e).set(new at(t)),e}function Dt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;St(r,a,void 0===c?t[a]:c)}return r}function Nt(e,r){var n,o,i=e.__data__;return("string"==(o=t(n=r))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?i["string"==typeof r?"string":"hash"]:i.map}function Wt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Tt(r)?r:void 0}At.prototype.clear=function(){this.__data__=vt?vt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var e=this.__data__;if(vt){var r=e[t];return r===n?void 0:r}return et.call(e,t)?e[t]:void 0},At.prototype.has=function(t){var e=this.__data__;return vt?void 0!==e[t]:et.call(e,t)},At.prototype.set=function(t,e){return this.__data__[t]=vt&&void 0===e?n:e,this},xt.prototype.clear=function(){this.__data__=[]},xt.prototype.delete=function(t){var e=this.__data__,r=Lt(e,t);return!(r<0)&&(r==e.length-1?e.pop():ft.call(e,r,1),!0)},xt.prototype.get=function(t){var e=this.__data__,r=Lt(e,t);return r<0?void 0:e[r][1]},xt.prototype.has=function(t){return Lt(this.__data__,t)>-1},xt.prototype.set=function(t,e){var r=this.__data__,n=Lt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Ct.prototype.clear=function(){this.__data__={hash:new At,map:new(bt||xt),string:new At}},Ct.prototype.delete=function(t){return Nt(this,t).delete(t)},Ct.prototype.get=function(t){return Nt(this,t).get(t)},Ct.prototype.has=function(t){return Nt(this,t).has(t)},Ct.prototype.set=function(t,e){return Nt(this,t).set(t,e),this},Et.prototype.clear=function(){this.__data__=new xt},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var r=this.__data__;if(r instanceof xt){var n=r.__data__;if(!bt||n.length<199)return n.push([t,e]),this;r=this.__data__=new Ct(n)}return r.set(t,e),this};var Ht=lt?z(lt,Object):function(){return[]},$t=function(t){return rt.call(t)};function Ft(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||L.test(t))&&t>-1&&t%1==0&&t<e}function Ut(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||X)}function qt(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Jt(t,e){return t===e||t!=t&&e!=e}(gt&&$t(new gt(new ArrayBuffer(1)))!=w||bt&&$t(new bt)!=l||yt&&$t(yt.resolve())!=g||dt&&$t(new dt)!=y||mt&&$t(new mt)!=v)&&($t=function(t){var e=rt.call(t),r=e==p?t.constructor:void 0,n=r?qt(r):void 0;if(n)switch(n){case _t:return w;case wt:return l;case Ot:return g;case jt:return y;case Mt:return v}return e});var zt=Array.isArray;function Vt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Kt(t)}var Gt=ht||function(){return!1};function Kt(t){var e=Qt(t)?rt.call(t):"";return e==s||e==u}function Qt(e){var r=t(e);return!!e&&("object"==r||"function"==r)}function Xt(t){return Vt(t)?Rt(t):function(t){if(!Ut(t))return pt(t);var e=[];for(var r in Object(t))et.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return It(t,!0,!0)}}));function l(t,e){return function(t){var e=t.str,r=t.idx,n=t.stopAtNewlines,o=t.stopAtRawNbsp;if("string"!=typeof e||!e.length)return null;if(r&&"number"==typeof r||(r=0),r<1)return null;if(e[~-r]&&(e[~-r].trim()||n&&"\n\r".includes(e[~-r])||o&&" "===e[~-r]))return~-r;if(e[r-2]&&(e[r-2].trim()||n&&"\n\r".includes(e[r-2])||o&&" "===e[r-2]))return r-2;for(var i=r;i--;)if(e[i]&&(e[i].trim()||n&&"\n\r".includes(e[i])||o&&" "===e[i]))return i;return null}({str:t,idx:e,stopAtNewlines:!1,stopAtRawNbsp:!1})}var h={allowCustomTagNames:!1,skipOpeningBracket:!1},p="\\",g=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","doctype","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h1 - h6","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xml"];function b(t){return void 0===t||t.toUpperCase()===t.toLowerCase()&&!/\d/.test(t)&&"="!==t}function y(t,e){return"<"===t[e]||"<"===t[l(t,e)]}return function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2?arguments[2]:void 0;if("string"!=typeof e)throw new Error('is-html-tag-opening: [THROW_ID_01] the first input argument should have been a string but it was given as "'.concat(t(e),'", value being ').concat(JSON.stringify(e,null,4)));if(!Number.isInteger(r)||r<0)throw new Error('is-html-tag-opening: [THROW_ID_02] the second input argument should have been a natural number string index but it was given as "'.concat(t(r),'", value being ').concat(JSON.stringify(r,null,4)));var i=n(n({},h),o),a="[\\\\ \\t\\r\\n/]*",c="._a-z0-9·À-ÖØ-öø-ͽͿ-῿‌-‍‿-⁀⁰-￿",f=new RegExp("^<".concat(i.skipOpeningBracket?"?":"").concat(a,"\\w+").concat(a,"\\/?").concat(a,">"),"g"),d=new RegExp("^<".concat(i.skipOpeningBracket?"?":"").concat(a,"[").concat(c,"]+[-").concat(c,"]*").concat(a,">"),"g"),m=new RegExp("^<".concat(i.skipOpeningBracket?"?":"","\\s*\\w+\\s+\\w+(?:-\\w+)?\\s*=\\s*['\"\\w]"),"g"),v=new RegExp("^<".concat(i.skipOpeningBracket?"?":"","\\s*\\w+\\s+[").concat(c,"]+[-").concat(c,"]*(?:-\\w+)?\\s*=\\s*['\"\\w]")),_=new RegExp("^<".concat(i.skipOpeningBracket?"?":"","\\s*\\/?\\s*\\w+\\s*\\/?\\s*>"),"g"),w=new RegExp("^<".concat(i.skipOpeningBracket?"?":"","\\s*\\/?\\s*[").concat(c,"]+[-").concat(c,"]*\\s*\\/?\\s*>"),"g"),O=new RegExp("^<".concat(i.skipOpeningBracket?"?":"").concat(a,"\\w+(?:\\s*\\w+)*\\s*\\w+=['\"]"),"g"),j=new RegExp("^<".concat(i.skipOpeningBracket?"?":"").concat(a,"[").concat(c,"]+[-").concat(c,"]*\\s+(?:\\s*\\w+)*\\s*\\w+=['\"]"),"g"),M=new RegExp("^<".concat(i.skipOpeningBracket?"?\\/?":"","(").concat(a,"[").concat(c,"]+)+").concat(a,"[\\\\/=>]"),""),k=r?e.slice(r):e,B=!1,A={cb:b,i:!0,trimCharsBeforeMatching:["/",p,"!"," ","\t","\n","\r"]};!B&&i.allowCustomTagNames?((i.skipOpeningBracket&&("<"===e[r-1]||"/"===e[r-1]&&"<"===e[l(e,l(e,r))])||"<"===k[0]&&k[1]&&k[1].trim())&&(M.test(k)||/^<\w+$/.test(k))&&(B=!0),(d.test(k)&&y(e,r)||v.test(k)||w.test(k)&&y(e,r)||j.test(k))&&(B=!0)):!B&&s(e,r,g,{cb:function(t){return void 0===t?(("<"===e[r]&&e[r+1]&&e[r+1].trim()||"<"===e[r-1])&&(B=!0),!0):t.toUpperCase()===t.toLowerCase()&&!/\d/.test(t)&&"="!==t},i:!0,trimCharsBeforeMatching:["<","/",p,"!"," ","\t","\n","\r"]})&&((i.skipOpeningBracket&&("<"===e[r-1]||"/"===e[r-1]&&"<"===e[l(e,l(e,r))])||"<"===k[0]&&k[1]&&k[1].trim())&&M.test(k)&&(B=!0),(f.test(k)&&y(e,r)||m.test(k)||_.test(k)&&y(e,r)||O.test(k))&&(B=!0)),!B&&!i.skipOpeningBracket&&"<"===e[r]&&e[r+1]&&e[r+1].trim()&&u(e,r,g,A)&&(B=!0);var x="string"==typeof e&&r<e.length&&B;return x}}));
