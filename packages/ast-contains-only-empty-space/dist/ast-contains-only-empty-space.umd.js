!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.astContainsOnlyEmptySpace=e()}(this,function(){"use strict";var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=1/0,r="[object Symbol]",o=/^\s+|\s+$/g,u="[\\ud800-\\udfff]",c="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",i="\\ud83c[\\udffb-\\udfff]",f="[^\\ud800-\\udfff]",a="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",l="(?:"+c+"|"+i+")"+"?",p="[\\ufe0e\\ufe0f]?"+l+("(?:\\u200d(?:"+[f,a,s].join("|")+")[\\ufe0e\\ufe0f]?"+l+")*"),y="(?:"+[f+c+"?",c,a,s,u].join("|")+")",d=RegExp(i+"(?="+i+")|"+y+p,"g"),b=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),v="object"==e(t)&&t&&t.Object===Object&&t,h="object"==("undefined"==typeof self?"undefined":e(self))&&self&&self.Object===Object&&self,_=v||h||Function("return this")();function j(t,e,n){if(e!=e)return function(t,e,n,r){for(var o=t.length,u=n+(r?1:-1);r?u--:++u<o;)if(e(t[u],u,t))return u;return-1}(t,g,n);for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}function g(t){return t!=t}function m(t){return function(t){return b.test(t)}(t)?function(t){return t.match(d)||[]}(t):function(t){return t.split("")}(t)}var O=Object.prototype.toString,w=_.Symbol,S=w?w.prototype:void 0,A=S?S.toString:void 0;function x(t){if("string"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(t))||function(t){return!!t&&"object"==(void 0===t?"undefined":e(t))}(t)&&O.call(t)==r}(t))return A?A.call(t):"";var o=t+"";return"0"==o&&1/t==-n?"-0":o}function E(t,e,n){var r=t.length;return n=void 0===n?r:n,!e&&n>=r?t:function(t,e,n){var r=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var u=Array(o);++r<o;)u[r]=t[r+e];return u}(t,e,n)}var P=function(t,e,n){var r;if((t=null==(r=t)?"":x(r))&&(n||void 0===e))return t.replace(o,"");if(!t||!(e=x(e)))return t;var u=m(t),c=m(e);return E(u,function(t,e){for(var n=-1,r=t.length;++n<r&&j(e,t[n],0)>-1;);return n}(u,c),function(t,e){for(var n=t.length;n--&&j(e,t[n],0)>-1;);return n}(u,c)+1).join("")},$="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k="[object Object]";var F,I,N=Function.prototype,M=Object.prototype,B=N.toString,R=M.hasOwnProperty,U=B.call(Object),W=M.toString,C=(F=Object.getPrototypeOf,I=Object,function(t){return F(I(t))});var D,T=function(t){if(!function(t){return!!t&&"object"==(void 0===t?"undefined":$(t))}(t)||W.call(t)!=k||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=C(t);if(null===e)return!0;var n=R.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&B.call(n)==U},z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L=(function(e,n){var r=200,o="__lodash_hash_undefined__",u=9007199254740991,c="[object Arguments]",i="[object Boolean]",f="[object Date]",a="[object Function]",s="[object GeneratorFunction]",l="[object Map]",p="[object Number]",y="[object Object]",d="[object RegExp]",b="[object Set]",v="[object String]",h="[object Symbol]",_="[object ArrayBuffer]",j="[object DataView]",g="[object Float32Array]",m="[object Float64Array]",O="[object Int8Array]",w="[object Int16Array]",S="[object Int32Array]",A="[object Uint8Array]",x="[object Uint8ClampedArray]",E="[object Uint16Array]",P="[object Uint32Array]",$=/\w*$/,k=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,I={};I[c]=I["[object Array]"]=I[_]=I[j]=I[i]=I[f]=I[g]=I[m]=I[O]=I[w]=I[S]=I[l]=I[p]=I[y]=I[d]=I[b]=I[v]=I[h]=I[A]=I[x]=I[E]=I[P]=!0,I["[object Error]"]=I[a]=I["[object WeakMap]"]=!1;var N="object"==z(t)&&t&&t.Object===Object&&t,M="object"==("undefined"==typeof self?"undefined":z(self))&&self&&self.Object===Object&&self,B=N||M||Function("return this")(),R=n&&!n.nodeType&&n,U=R&&e&&!e.nodeType&&e,W=U&&U.exports===R;function C(t,e){return t.set(e[0],e[1]),t}function D(t,e){return t.add(e),t}function T(t,e,n,r){var o=-1,u=t?t.length:0;for(r&&u&&(n=t[++o]);++o<u;)n=e(n,t[o],o,t);return n}function L(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function V(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function G(t,e){return function(n){return t(e(n))}}function K(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}var q,H=Array.prototype,J=Function.prototype,Q=Object.prototype,X=B["__core-js_shared__"],Y=(q=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",Z=J.toString,tt=Q.hasOwnProperty,et=Q.toString,nt=RegExp("^"+Z.call(tt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=W?B.Buffer:void 0,ot=B.Symbol,ut=B.Uint8Array,ct=G(Object.getPrototypeOf,Object),it=Object.create,ft=Q.propertyIsEnumerable,at=H.splice,st=Object.getOwnPropertySymbols,lt=rt?rt.isBuffer:void 0,pt=G(Object.keys,Object),yt=Wt(B,"DataView"),dt=Wt(B,"Map"),bt=Wt(B,"Promise"),vt=Wt(B,"Set"),ht=Wt(B,"WeakMap"),_t=Wt(Object,"create"),jt=Lt(yt),gt=Lt(dt),mt=Lt(bt),Ot=Lt(vt),wt=Lt(ht),St=ot?ot.prototype:void 0,At=St?St.valueOf:void 0;function xt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Et(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Pt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function $t(t){this.__data__=new Et(t)}function kt(t,e){var n=Gt(t)||function(t){return function(t){return function(t){return!!t&&"object"==(void 0===t?"undefined":z(t))}(t)&&Kt(t)}(t)&&tt.call(t,"callee")&&(!ft.call(t,"callee")||et.call(t)==c)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,o=!!r;for(var u in t)!e&&!tt.call(t,u)||o&&("length"==u||Tt(u,r))||n.push(u);return n}function Ft(t,e,n){var r=t[e];tt.call(t,e)&&Vt(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function It(t,e){for(var n=t.length;n--;)if(Vt(t[n][0],e))return n;return-1}function Nt(t,e,n,r,o,u,k){var F;if(r&&(F=u?r(t,o,u,k):r(t)),void 0!==F)return F;if(!Jt(t))return t;var N=Gt(t);if(N){if(F=function(t){var e=t.length,n=t.constructor(e);e&&"string"==typeof t[0]&&tt.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!e)return function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(t,F)}else{var M=Dt(t),B=M==a||M==s;if(qt(t))return function(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,e);if(M==y||M==c||B&&!u){if(L(t))return u?t:{};if(F=function(t){return"function"!=typeof t.constructor||zt(t)?{}:(e=ct(t),Jt(e)?it(e):{});var e}(B?{}:t),!e)return function(t,e){return Rt(t,Ct(t),e)}(t,function(t,e){return t&&Rt(e,Qt(e),t)}(F,t))}else{if(!I[M])return u?t:{};F=function(t,e,n,r){var o=t.constructor;switch(e){case _:return Bt(t);case i:case f:return new o(+t);case j:return function(t,e){var n=e?Bt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,r);case g:case m:case O:case w:case S:case A:case x:case E:case P:return function(t,e){var n=e?Bt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,r);case l:return function(t,e,n){return T(e?n(V(t),!0):V(t),C,new t.constructor)}(t,r,n);case p:case v:return new o(t);case d:return(a=new(c=t).constructor(c.source,$.exec(c))).lastIndex=c.lastIndex,a;case b:return function(t,e,n){return T(e?n(K(t),!0):K(t),D,new t.constructor)}(t,r,n);case h:return u=t,At?Object(At.call(u)):{}}var u;var c,a}(t,M,Nt,e)}}k||(k=new $t);var R=k.get(t);if(R)return R;if(k.set(t,F),!N)var U=n?function(t){return function(t,e,n){var r=e(t);return Gt(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,Qt,Ct)}(t):Qt(t);return function(t,e){for(var n=-1,r=t?t.length:0;++n<r&&!1!==e(t[n],n,t););}(U||t,function(o,u){U&&(o=t[u=o]),Ft(F,u,Nt(o,e,n,r,u,t,k))}),F}function Mt(t){return!(!Jt(t)||Y&&Y in t)&&(Ht(t)||L(t)?nt:k).test(Lt(t))}function Bt(t){var e=new t.constructor(t.byteLength);return new ut(e).set(new ut(t)),e}function Rt(t,e,n,r){n||(n={});for(var o=-1,u=e.length;++o<u;){var c=e[o],i=r?r(n[c],t[c],c,n,t):void 0;Ft(n,c,void 0===i?t[c]:i)}return n}function Ut(t,e){var n,r,o=t.__data__;return("string"==(r=void 0===(n=e)?"undefined":z(n))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function Wt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Mt(n)?n:void 0}xt.prototype.clear=function(){this.__data__=_t?_t(null):{}},xt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},xt.prototype.get=function(t){var e=this.__data__;if(_t){var n=e[t];return n===o?void 0:n}return tt.call(e,t)?e[t]:void 0},xt.prototype.has=function(t){var e=this.__data__;return _t?void 0!==e[t]:tt.call(e,t)},xt.prototype.set=function(t,e){return this.__data__[t]=_t&&void 0===e?o:e,this},Et.prototype.clear=function(){this.__data__=[]},Et.prototype.delete=function(t){var e=this.__data__,n=It(e,t);return!(n<0||(n==e.length-1?e.pop():at.call(e,n,1),0))},Et.prototype.get=function(t){var e=this.__data__,n=It(e,t);return n<0?void 0:e[n][1]},Et.prototype.has=function(t){return It(this.__data__,t)>-1},Et.prototype.set=function(t,e){var n=this.__data__,r=It(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},Pt.prototype.clear=function(){this.__data__={hash:new xt,map:new(dt||Et),string:new xt}},Pt.prototype.delete=function(t){return Ut(this,t).delete(t)},Pt.prototype.get=function(t){return Ut(this,t).get(t)},Pt.prototype.has=function(t){return Ut(this,t).has(t)},Pt.prototype.set=function(t,e){return Ut(this,t).set(t,e),this},$t.prototype.clear=function(){this.__data__=new Et},$t.prototype.delete=function(t){return this.__data__.delete(t)},$t.prototype.get=function(t){return this.__data__.get(t)},$t.prototype.has=function(t){return this.__data__.has(t)},$t.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Et){var o=n.__data__;if(!dt||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new Pt(o)}return n.set(t,e),this};var Ct=st?G(st,Object):function(){return[]},Dt=function(t){return et.call(t)};function Tt(t,e){return!!(e=null==e?u:e)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<e}function zt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Q)}function Lt(t){if(null!=t){try{return Z.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Vt(t,e){return t===e||t!=t&&e!=e}(yt&&Dt(new yt(new ArrayBuffer(1)))!=j||dt&&Dt(new dt)!=l||bt&&"[object Promise]"!=Dt(bt.resolve())||vt&&Dt(new vt)!=b||ht&&"[object WeakMap]"!=Dt(new ht))&&(Dt=function(t){var e=et.call(t),n=e==y?t.constructor:void 0,r=n?Lt(n):void 0;if(r)switch(r){case jt:return j;case gt:return l;case mt:return"[object Promise]";case Ot:return b;case wt:return"[object WeakMap]"}return e});var Gt=Array.isArray;function Kt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=u}(t.length)&&!Ht(t)}var qt=lt||function(){return!1};function Ht(t){var e=Jt(t)?et.call(t):"";return e==a||e==s}function Jt(t){var e=void 0===t?"undefined":z(t);return!!t&&("object"==e||"function"==e)}function Qt(t){return Kt(t)?kt(t):function(t){if(!zt(t))return pt(t);var e=[];for(var n in Object(t))tt.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}e.exports=function(t){return Nt(t,!0,!0)}}(D={exports:{}},D.exports),D.exports),V=Array.isArray;function G(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function K(t,e){return function t(e,n,r){var o=L(e),u=void 0,c=void 0,i=void 0,f=void 0,a=void 0;if((r=Object.assign({depth:-1,path:""},r)).depth+=1,V(o))for(u=0,c=o.length;u<c;u++){var s=r.path+"."+u;void 0!==o[u]?(r.parent=L(o),i=t(n(o[u],void 0,Object.assign({},r,{path:G(s)})),n,Object.assign({},r,{path:G(s)})),Number.isNaN(i)&&u<o.length?(o.splice(u,1),u-=1):o[u]=i):o.splice(u,1)}else if(T(o))for(u=0,c=(f=Object.keys(o)).length;u<c;u++){a=f[u];var l=r.path+"."+a;0===r.depth&&null!=a&&(r.topmostKey=a),r.parent=L(o),i=t(n(a,o[a],Object.assign({},r,{path:G(l)})),n,Object.assign({},r,{path:G(l)})),Number.isNaN(i)?delete o[a]:o[a]=i}return o}(t,e,{})}return function(t){function e(t){return"string"==typeof t}var n=Array.isArray,r=!0;return!!(n(t)||T(t)||e(t))&&(e(t)?0===P(t).length:(t=K(t,function(t,n){var o=void 0!==n?n:t;return e(o)&&""!==P(o)&&(r=!1),o}),r))}});
