!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.removeDuplicateHeadsTails=e()}(this,function(){"use strict";var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=e(function(e,n){var o,i,a,s,u,c,l,f,y,h,p,d,g,m,b,v,w,_,S,O;e.exports=(o="function"==typeof Promise,i="object"===("undefined"==typeof self?"undefined":r(self))?self:t,a="undefined"!=typeof Symbol,s="undefined"!=typeof Map,u="undefined"!=typeof Set,c="undefined"!=typeof WeakMap,l="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,y=a&&void 0!==Symbol.iterator,h=a&&void 0!==Symbol.toStringTag,p=u&&"function"==typeof Set.prototype.entries,d=s&&"function"==typeof Map.prototype.entries,g=p&&Object.getPrototypeOf((new Set).entries()),m=d&&Object.getPrototypeOf((new Map).entries()),b=y&&"function"==typeof Array.prototype[Symbol.iterator],v=b&&Object.getPrototypeOf([][Symbol.iterator]()),w=y&&"function"==typeof String.prototype[Symbol.iterator],_=w&&Object.getPrototypeOf(""[Symbol.iterator]()),S=8,O=-1,function(t){var e=void 0===t?"undefined":r(t);if("object"!==e)return e;if(null===t)return"null";if(t===i)return"global";if(Array.isArray(t)&&(!1===h||!(Symbol.toStringTag in t)))return"Array";if("object"===("undefined"==typeof window?"undefined":r(window))&&null!==window){if("object"===r(window.location)&&t===window.location)return"Location";if("object"===r(window.document)&&t===window.document)return"Document";if("object"===r(window.navigator)){if("object"===r(window.navigator.mimeTypes)&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"===r(window.navigator.plugins)&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"===r(window.HTMLElement))&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var n=h&&t[Symbol.toStringTag];if("string"==typeof n)return n;var a=Object.getPrototypeOf(t);return a===RegExp.prototype?"RegExp":a===Date.prototype?"Date":o&&a===Promise.prototype?"Promise":u&&a===Set.prototype?"Set":s&&a===Map.prototype?"Map":l&&a===WeakSet.prototype?"WeakSet":c&&a===WeakMap.prototype?"WeakMap":f&&a===DataView.prototype?"DataView":s&&a===m?"Map Iterator":u&&a===g?"Set Iterator":b&&a===v?"Array Iterator":w&&a===_?"String Iterator":null===a?"Object":Object.prototype.toString.call(t).slice(S,O)})});function o(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,a,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function i(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function a(t){return t!=t}var s=Array.prototype.splice;function u(t,e,r,n){var a,u=n?i:o,c=-1,l=e.length,f=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(f=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(a=r,function(t){return a(t)})));++c<l;)for(var y=0,h=e[c],p=r?r(h):h;(y=u(f,p,y,n))>-1;)f!==t&&s.call(f,y,1),s.call(t,y,1);return t}var c=function(t,e){return t&&t.length&&e&&e.length?u(t,e):t},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f="__lodash_hash_undefined__",y=9007199254740991,h="[object Function]",p="[object GeneratorFunction]",d=/^\[object .+?Constructor\]$/,g="object"==l(t)&&t&&t.Object===Object&&t,m="object"==("undefined"==typeof self?"undefined":l(self))&&self&&self.Object===Object&&self,b=g||m||Function("return this")();function v(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,S,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function w(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function _(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function S(t){return t!=t}function O(t){return function(e){return t(e)}}function T(t,e){return t.has(e)}var j,I,E,A=Array.prototype,W=Function.prototype,H=Object.prototype,D=b["__core-js_shared__"],k=(j=/[^.]+$/.exec(D&&D.keys&&D.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"",R=W.toString,M=H.hasOwnProperty,C=H.toString,N=RegExp("^"+R.call(M).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),B=A.splice,x=Math.max,L=Math.min,Z=G(b,"Map"),J=G(Object,"create");function P(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function q(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function K(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function V(t){var e=-1,r=t?t.length:0;for(this.__data__=new K;++e<r;)this.add(t[e])}function F(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function $(t){return!(!X(t)||k&&k in t)&&(U(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?N:d).test(function(t){if(null!=t){try{return R.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function z(t){return function(t){return function(t){return!!t&&"object"==(void 0===t?"undefined":l(t))}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=y}(t.length)&&!U(t)}(t)}(t)?t:[]}function Q(t,e){var r,n,o=t.__data__;return("string"==(n=void 0===(r=e)?"undefined":l(r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function G(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return $(r)?r:void 0}function U(t){var e=X(t)?C.call(t):"";return e==h||e==p}function X(t){var e=void 0===t?"undefined":l(t);return!!t&&("object"==e||"function"==e)}P.prototype.clear=function(){this.__data__=J?J(null):{}},P.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},P.prototype.get=function(t){var e=this.__data__;if(J){var r=e[t];return r===f?void 0:r}return M.call(e,t)?e[t]:void 0},P.prototype.has=function(t){var e=this.__data__;return J?void 0!==e[t]:M.call(e,t)},P.prototype.set=function(t,e){return this.__data__[t]=J&&void 0===e?f:e,this},q.prototype.clear=function(){this.__data__=[]},q.prototype.delete=function(t){var e=this.__data__,r=F(e,t);return!(r<0||(r==e.length-1?e.pop():B.call(e,r,1),0))},q.prototype.get=function(t){var e=this.__data__,r=F(e,t);return r<0?void 0:e[r][1]},q.prototype.has=function(t){return F(this.__data__,t)>-1},q.prototype.set=function(t,e){var r=this.__data__,n=F(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},K.prototype.clear=function(){this.__data__={hash:new P,map:new(Z||q),string:new P}},K.prototype.delete=function(t){return Q(this,t).delete(t)},K.prototype.get=function(t){return Q(this,t).get(t)},K.prototype.has=function(t){return Q(this,t).has(t)},K.prototype.set=function(t,e){return Q(this,t).set(t,e),this},V.prototype.add=V.prototype.push=function(t){return this.__data__.set(t,f),this},V.prototype.has=function(t){return this.__data__.has(t)};var Y=(I=function(t){var e=_(t,z);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?w:v,o=t[0].length,i=t.length,a=i,s=Array(i),u=1/0,c=[];a--;){var l=t[a];a&&e&&(l=_(l,O(e))),u=L(l.length,u),s[a]=!r&&(e||o>=120&&l.length>=120)?new V(a&&l):void 0}l=t[0];var f=-1,y=s[0];t:for(;++f<o&&c.length<u;){var h=l[f],p=e?e(h):h;if(h=r||0!==h?h:0,!(y?T(y,p):n(c,p,r))){for(a=i;--a;){var d=s[a];if(!(d?T(d,p):n(t[a],p,r)))continue t}y&&y.push(p),c.push(h)}}return c}(e):[]},E=x(void 0===E?I.length-1:E,0),function(){for(var t=arguments,e=-1,r=x(t.length-E,0),n=Array(r);++e<r;)n[e]=t[E+e];e=-1;for(var o=Array(E+1);++e<E;)o[e]=t[e];return o[E]=n,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(I,this,o)});function tt(t){return"string"==typeof t?t.length>0?[t]:[]:t}function et(t,e,r){function o(t){return null!=t}function i(t){return"boolean"===n(t)}function a(t){return"string"===n(t)}function s(t){return"Object"===n(t)}var u=["any","anything","every","everything","all","whatever","whatevs"],l=Array.isArray;if(0===arguments.length)throw new Error("check-types-mini: [THROW_ID_01] Missing all arguments!");if(1===arguments.length)throw new Error("check-types-mini: [THROW_ID_02] Missing second argument!");var f=s(e)?e:{},y={ignoreKeys:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"},h=void 0;if(!a((h=o(r)&&s(r)?Object.assign({},y,r):Object.assign({},y)).msg))throw new Error("check-types-mini: [THROW_ID_03] opts.msg must be string! Currently it's: "+n(h.msg)+", equal to "+JSON.stringify(h.msg,null,4));if(h.msg=h.msg.trim(),":"===h.msg[h.msg.length-1]&&(h.msg=h.msg.slice(0,h.msg.length-1)),!a(h.optsVarName))throw new Error("check-types-mini: [THROW_ID_04] opts.optsVarName must be string! Currently it's: "+n(h.optsVarName)+", equal to "+JSON.stringify(h.optsVarName,null,4));if(h.ignoreKeys=tt(h.ignoreKeys),h.acceptArraysIgnore=tt(h.acceptArraysIgnore),!l(h.ignoreKeys))throw new TypeError("check-types-mini: [THROW_ID_05] opts.ignoreKeys should be an array, currently it's: "+n(h.ignoreKeys));if(!i(h.acceptArrays))throw new TypeError("check-types-mini: [THROW_ID_06] opts.acceptArrays should be a Boolean, currently it's: "+n(h.acceptArrays));if(!l(h.acceptArraysIgnore))throw new TypeError("check-types-mini: [THROW_ID_07] opts.acceptArraysIgnore should be an array, currently it's: "+n(h.acceptArraysIgnore));if(!i(h.enforceStrictKeyset))throw new TypeError("check-types-mini: [THROW_ID_08] opts.enforceStrictKeyset should be a Boolean, currently it's: "+n(h.enforceStrictKeyset));if(Object.keys(h.schema).forEach(function(t){l(h.schema[t])||(h.schema[t]=[h.schema[t]]),h.schema[t]=h.schema[t].map(String).map(function(t){return t.toLowerCase()}).map(function(t){return t.trim()})}),h.enforceStrictKeyset)if(o(h.schema)&&Object.keys(h.schema).length>0){if(0!==c(Object.keys(t),Object.keys(f).concat(Object.keys(h.schema))).length)throw new TypeError(h.msg+": "+h.optsVarName+".enforceStrictKeyset is on and the following keys are not covered by schema and/or reference objects: "+JSON.stringify(c(Object.keys(t),Object.keys(f).concat(Object.keys(h.schema))),null,4))}else{if(!(o(f)&&Object.keys(f).length>0))throw new TypeError(h.msg+": Both "+h.optsVarName+".schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!");if(0!==c(Object.keys(t),Object.keys(f)).length)throw new TypeError(h.msg+": The input object has keys that are not covered by reference object: "+JSON.stringify(c(Object.keys(t),Object.keys(f)),null,4));if(0!==c(Object.keys(f),Object.keys(t)).length)throw new TypeError(h.msg+": The reference object has keys that are not present in the input object: "+JSON.stringify(c(Object.keys(f),Object.keys(t)),null,4))}Object.keys(t).forEach(function(e){if(o(h.schema)&&Object.prototype.hasOwnProperty.call(h.schema,e)){if(h.schema[e]=tt(h.schema[e]).map(String).map(function(t){return t.toLowerCase()}),!(Y(h.schema[e],u).length||(!0===t[e]||!1===t[e]||h.schema[e].includes(n(t[e]).toLowerCase()))&&(!0!==t[e]&&!1!==t[e]||h.schema[e].includes(String(t[e]))||h.schema[e].includes("boolean")))){if(!l(t[e])||!h.acceptArrays)throw new TypeError(h.msg+": "+h.optsVarName+"."+e+" was customised to "+JSON.stringify(t[e],null,4)+" which is not among the allowed types in schema ("+h.schema[e]+") but "+n(t[e]));for(var r=0,i=t[e].length;r<i;r++)if(!h.schema[e].includes(n(t[e][r]).toLowerCase()))throw new TypeError(h.msg+": "+h.optsVarName+"."+e+" is of type "+n(t[e][r]).toLowerCase()+", but only the following are allowed in "+h.optsVarName+".schema: "+h.schema[e])}}else if(o(f)&&Object.prototype.hasOwnProperty.call(f,e)&&n(t[e])!==n(f[e])&&!h.ignoreKeys.includes(e)){if(!h.acceptArrays||!l(t[e])||h.acceptArraysIgnore.includes(e))throw new TypeError(h.msg+": "+h.optsVarName+"."+e+" was customised to "+JSON.stringify(t[e],null,4)+" which is not "+n(f[e])+" but "+n(t[e]));if(!t[e].every(function(t){return n(t)===n(f[e])}))throw new TypeError(h.msg+": "+h.optsVarName+"."+e+" was customised to be array, but not all of its elements are "+n(f[e])+"-type")}})}var rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nt="[object Object]";var ot=Function.prototype,it=Object.prototype,at=ot.toString,st=it.hasOwnProperty,ut=at.call(Object),ct=it.toString,lt=function(t,e){return function(r){return t(e(r))}}(Object.getPrototypeOf,Object);var ft=function(t){if(!function(t){return!!t&&"object"==(void 0===t?"undefined":rt(t))}(t)||ct.call(t)!=nt||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=lt(t);if(null===e)return!0;var r=st.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&at.call(r)==ut},yt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ht=function(t,e){if(e){if("object"!==(void 0===e?"undefined":yt(e)))throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},pt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},dt="function"==typeof Symbol&&"symbol"===pt(Symbol.iterator)?function(t){return void 0===t?"undefined":pt(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":pt(t)};function gt(t){return"string"==typeof t}function mt(t,e,r,n){if(!(e<=t.length)){if(n.strictApi)throw new Error("string-match-left-right/marchForward(): [THROW_ID_102] second argument, fromIndexInclusive is "+e+" beyond the input string length, "+t.length+".");return!1}for(var o=r.length,i=e,a=t.length;i<a;i++)if(!(n.trimBeforeMatching&&""===t[i].trim()||!n.i&&n.trimCharsBeforeMatching.includes(t[i])||n.i&&n.trimCharsBeforeMatching.map(function(t){return t.toLowerCase()}).includes(t[i].toLowerCase()))){if(!(!n.i&&t[i]===r[r.length-o]||n.i&&t[i].toLowerCase()===r[r.length-o].toLowerCase()))return!1;if(0===(o-=1))return i-r.length+1}if(o>0)return!1}function bt(t,e,r,n){if(e>=t.length){if(n.strictApi)throw new Error("string-match-left-right/marchBackward(): [THROW_ID_203] second argument, starting index, should not be beyond the last character of the input string! Currently the first argument's last character's index is "+t.length+" but the second argument is beyond it:\n"+JSON.stringify(e,null,4));return!1}for(var o=r.length,i=e+1;i--;)if(!(n.trimBeforeMatching&&""===t[i].trim()||!n.i&&n.trimCharsBeforeMatching.includes(t[i])||n.i&&n.trimCharsBeforeMatching.map(function(t){return t.toLowerCase()}).includes(t[i].toLowerCase()))){if(!(!n.i&&t[i]===r[o-1]||n.i&&t[i].toLowerCase()===r[o-1].toLowerCase()))return!1;if(0===(o-=1))return i}if(o>0)return!1}function vt(t,e,r,n,o){function i(t){return null!=t}var a=Array.isArray;if(!gt(e))throw new Error("string-match-left-right/"+t+"(): [THROW_ID_01] the first argument should be a string. Currently it's of a type: "+(void 0===e?"undefined":dt(e))+", equal to:\n"+JSON.stringify(e,null,4));if(0===e.length)throw new Error("string-match-left-right/"+t+"(): [THROW_ID_02] the first argument should be a non-empty string. Currently it's empty!");if(!ht(r,{includeZero:!0}))throw new Error("string-match-left-right/"+t+"(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: "+(void 0===r?"undefined":dt(r))+", equal to:\n"+JSON.stringify(r,null,4));var s=void 0;if(!i(n))throw new Error("string-match-left-right/"+t+"(): [THROW_ID_04] Third argument, whatToMatch, is missing!");if(gt(n))s=[n];else{if(!a(n))throw new Error("string-match-left-right/"+t+"(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's "+(void 0===n?"undefined":dt(n))+", equal to:\n"+JSON.stringify(n,null,4));s=n}if(i(o)&&!ft(o))throw new Error("string-match-left-right/"+t+"(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type \""+(void 0===o?"undefined":dt(o))+'", and equal to:\n'+JSON.stringify(o,null,4));var u={i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],strictApi:!0},c=Object.assign({},u,o);c.trimCharsBeforeMatching=tt(c.trimCharsBeforeMatching),et(c,u,{msg:"string-match-left-right: [THROW_ID_07*]",schema:{cb:["null","undefined","function"]}}),c.trimCharsBeforeMatching=c.trimCharsBeforeMatching.map(function(t){return gt(t)?t:String(t)});var l=void 0,f=void 0;if(c.trimCharsBeforeMatching.some(function(t,e){return t.length>1&&(l=e,f=t,!0)}))throw new Error("string-match-left-right/"+t+"(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index "+l+" is longer than 1 character, "+f.length+" (equals to "+f+"). Please split it into separate characters and put into array as separate elements.");if(t.startsWith("matchLeft")){for(var y=0,h=s.length;y<h;y++){var p=bt(e,r-("matchLeft"===t?1:0),s[y],c);if(!1!==p&&(!c.cb||c.cb(e[p-1],e.slice(0,p),p-1)))return s[y]}return!1}for(var d=0,g=s.length;d<g;d++){var m=mt(e,r+("matchRight"===t?1:0),s[d],c);if(!1!==m&&(!c.cb||c.cb(e[m+s[d].length],e.slice(m+s[d].length),m+s[d].length)))return s[d]}return!1}function wt(t,e,r,n){return vt("matchLeftIncl",t,e,r,n)}function _t(t,e,r,n){return vt("matchRightIncl",t,e,r,n)}var St=function(t,e){if("string"!=typeof t)return!1;if(e&&"includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)},Ot=e(function(t,e){(e=t.exports=function(t){return t+e.suffix(+t)}).suffix=function(t){return 1===Math.floor(t/10)?"th":t%10==1?"st":t%10==2?"nd":t%10==3?"rd":"th"}}),Tt=(Ot.suffix,"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}),jt="function"==typeof Symbol&&"symbol"===Tt(Symbol.iterator)?function(t){return void 0===t?"undefined":Tt(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":Tt(t)},It=Array.isArray;function Et(t){if(!Array.isArray(t))return t;for(var e=function(t,e){if(!It(t))throw new TypeError("ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: "+(void 0===t?"undefined":jt(t))+", equal to: "+JSON.stringify(t,null,4));if(0===t.length)return t;var r={strictlyTwoElementsInRangeArrays:!1},n=Object.assign({},r,e);et(n,r,{msg:"ranges-sort: [THROW_ID_02*]"});var o=void 0,i=void 0;if(n.strictlyTwoElementsInRangeArrays&&!t.every(function(t,e){return 2===t.length||(o=e,i=t.length,!1)}))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, "+Ot(o)+" range ("+JSON.stringify(t[o],null,4)+") has not two but "+i+" elements!");if(!t.every(function(t,e){return!(!ht(t[0],{includeZero:!0})||!ht(t[1],{includeZero:!0}))||(o=e,!1)}))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, "+Ot(o)+" range ("+JSON.stringify(t[o],null,4)+") does not consist of only natural numbers!");return Array.from(t).sort(function(t,e){return t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1})}(t),r=e.length-1;r>0;r--)(e[r][0]<=e[r-1][0]||e[r][0]<=e[r-1][1])&&(e[r-1][0]=Math.min(e[r][0],e[r-1][0]),e[r-1][1]=Math.max(e[r][1],e[r-1][1]),void 0!==e[r][2]&&(e[r-1][0]>=e[r][0]||e[r-1][1]<=e[r][1])&&null!==e[r-1][2]&&(null===e[r][2]&&null!==e[r-1][2]?e[r-1][2]=null:void 0!==e[r-1][2]?e[r-1][2]+=e[r][2]:e[r-1][2]=e[r][2]),e.splice(r,1),r=e.length);return e}function At(t){if("string"==typeof t){if(0===t.length)return"";if(""===t.trim())return t.includes("\n")?"\n":" ";var e="";if(""===t[0].trim()){e=" ";for(var r=!1,n=0,o=t.length;n<o&&("\n"===t[n]&&(r=!0),""===t[n].trim());n++);r&&(e="\n")}var i="";if(""===t.slice(-1).trim()){i=" ";for(var a=!1,s=t.length;s--&&("\n"===t[s]&&(a=!0),""===t[s].trim()););a&&(i="\n")}return e+t.trim()+i}return t}var Wt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ht="function"==typeof Symbol&&"symbol"===Wt(Symbol.iterator)?function(t){return void 0===t?"undefined":Wt(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":Wt(t)},Dt=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();function kt(t){return null!=t}var Rt=Array.isArray;function Mt(t){return"string"==typeof t}function Ct(t){return St(t,{includeZero:!0})?parseInt(t,10):t}var Nt=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var r={limitToBeAddedWhitespace:!1},n=Object.assign({},r,e);et(n,r,{msg:"string-slices-array-push: [THROW_ID_00*]"}),this.opts=n}return Dt(t,[{key:"add",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(t){throw new Error("string-slices-array-push/Slices/add(): [THROW_ID_01] Missing "+Ot(t)+" input parameter!")}(1),e=this,r=arguments[1],n=arguments[2],o=arguments.length,i=Array(o>3?o-3:0),a=3;a<o;a++)i[a-3]=arguments[a];if(i.length>0)throw new TypeError("string-slices-array-push/Slices/add(): [THROW_ID_01] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: "+JSON.stringify(i,null,4));var s=St(t,{includeZero:!0})?parseInt(t,10):t,u=St(r,{includeZero:!0})?parseInt(r,10):r;if(Rt(t)&&!kt(r)){var c=void 0,l=void 0;if(t.length>0){if(!t.every(function(t,e){return!!Rt(t)||(c=e,l=t,!1)}))throw new TypeError("string-slices-array-push/Slices/add(): [THROW_ID_05] first argument was given as array but it contains not only range arrays. For example, at index "+c+" we have "+(void 0===l?"undefined":Ht(l))+"-type value:\n"+JSON.stringify(l,null,4)+". Computer says that's very suspicious digitally.");t.forEach(function(t,r){if(!ht(Ct(t[0]),{includeZero:!0}))throw new TypeError("string-slices-array-push/Slices/add(): [THROW_ID_04] The "+Ot(r)+" ranges array's starting range index, an element at its zero'th index, is not a natural number! It's equal to: "+t[0]+". Computer says that's not nice.");if(!ht(Ct(t[1]),{includeZero:!0}))throw new TypeError("string-slices-array-push/Slices/add(): [THROW_ID_03] The "+Ot(r)+" ranges array's ending range index, an element at its first index, is not a natural number! It's equal to: "+t[1]+". Computer doesn't like it at all.");if(kt(t[2])&&!Mt(t[2]))throw new TypeError("string-slices-array-push/Slices/add(): [THROW_ID_02] The "+Ot(r)+' ranges array\'s "to add" value is not string but '+Ht(t[2])+"! It's equal to: "+t[2]+". Computer says to tell you it's very bad.");e.add.apply(e,function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}(t))})}}else{if(!ht(s,{includeZero:!0})||!ht(u,{includeZero:!0}))throw new TypeError('string-slices-array-push/Slices/add(): [THROW_ID_06] "from" value, first input argument, must be a natural number or zero! Currently it\'s equal to: '+JSON.stringify(s,null,4));if(kt(n)&&!Mt(n))throw new TypeError("string-slices-array-push/Slices/add(): [THROW_ID_06] The third argument, the value to add, was given not as string but "+("undefined"==typeof addval?"undefined":Ht(addval))+". Computer got upset about that.");if(void 0!==this.slices&&s===this.last()[1]){if(this.last()[1]=u,null!==this.last()[2]&&kt(n)){var f=kt(this.last()[2])&&this.last()[2].length>0?this.last()[2]+n:n;this.opts.limitToBeAddedWhitespace&&(f=At(f)),this.last()[2]=f}}else this.slices||(this.slices=[]),this.slices.push(void 0!==n?[s,u,this.opts.limitToBeAddedWhitespace?At(n):n]:[s,u])}}},{key:"push",value:function(t,e,r){for(var n=arguments.length,o=Array(n>3?n-3:0),i=3;i<n;i++)o[i-3]=arguments[i];this.add.apply(this,[t,e,r].concat(o))}},{key:"current",value:function(){return null!=this.slices?(this.slices=Et(this.slices),this.opts.limitToBeAddedWhitespace?this.slices.map(function(t){return kt(t[2])?[t[0],t[1],At(t[2])]:t}):this.slices):null}},{key:"wipe",value:function(){this.slices=void 0}},{key:"last",value:function(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}]),t}(),Bt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xt="function"==typeof Symbol&&"symbol"===Bt(Symbol.iterator)?function(t){return void 0===t?"undefined":Bt(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":Bt(t)},Lt=Array.isArray;function Zt(t){if("string"!=typeof t)return t;var e=void 0,r=void 0;if(t.length>0){if(" "===t[0])for(var n=0,o=t.length;n<o;n++){if(" "!==t[n]){e=n;break}if(n===t.length-1)return""}if(" "===t[t.length-1])for(var i=t.length;i--;)if(" "!==t[i]){r=i+1;break}if(e)return r?t.slice(e,r):t.slice(e);if(r)return t.slice(0,r)}return t}var Jt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};function r(t){return null!=t}var n=Object.prototype.hasOwnProperty;function o(t){return"string"==typeof t}if(void 0===t)throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_01] The input is missing!");if("string"!=typeof t)throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_02] The input is not string but "+(void 0===t?"undefined":Jt(t)));if(r(e)&&!ft(e))throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_03] The given options are not a plain object but "+(void 0===e?"undefined":Jt(e))+"!");if(r(e)&&n.call(e,"heads")){if(!tt(e.heads).every(function(t){return o(t)}))throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_04] The opts.heads contains elements which are not string-type!");o(e.heads)&&(e.heads=tt(e.heads))}if(r(e)&&n.call(e,"tails")){if(!tt(e.tails).every(function(t){return o(t)}))throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_05] The opts.tails contains elements which are not string-type!");o(e.tails)&&(e.tails=tt(e.tails))}var i=t.trim();if(0===i.length)return t;t=i;var a={heads:["{{"],tails:["}}"]},s=Object.assign({},a,e);et(s,a,{msg:"string-remove-duplicate-heads-tails: [THROW_ID_06*]"}),s.heads=s.heads.map(function(t){return t.trim()}),s.tails=s.tails.map(function(t){return t.trim()});var u=!1,c=!1,l=new Nt({limitToBeAddedWhitespace:!0}),f=new Nt({limitToBeAddedWhitespace:!0}),y=!1,h=!0,p="";function d(t,e){var r=void 0;return _t(t,0,e.heads,{trimBeforeMatching:!0,cb:function(t,e,n){return r=n,!0}})&&_t(t,r,e.tails,{trimBeforeMatching:!0,cb:function(t,e,n){return r=n,!0}})?t.slice(r):t}for(;t!==d(t,s);)t=Zt(d(t,s));function g(t,e){var r=void 0;return wt(t,t.length-1,e.tails,{trimBeforeMatching:!0,cb:function(t,e,n){return r=n,!0}})&&wt(t,r,e.heads,{trimBeforeMatching:!0,cb:function(t,e,n){return r=n,!0}})?t.slice(0,r+1):t}for(;t!==g(t,s);)t=Zt(g(t,s));if(!_t(t,0,s.heads,{trimBeforeMatching:!0})||!wt(t,t.length-1,s.tails,{trimBeforeMatching:!0}))return Zt(t);for(var m=0,b=t.length;m<b;m++)if(""===t[m].trim());else{var v=void 0;if(_t(t,m,s.heads,{trimBeforeMatching:!0,cb:function(t,e,r){return v=r,!0}})){h=!0,f.current()&&(c?f.wipe():u&&!c&&"tails"!==p&&l.push(f.current())),u?f.push(m,v):(f.current()&&(l.push(f.current()),f.wipe()),f.push(m,v)),p="heads",m=v-1;continue}if(_t(t,m,s.tails,{trimBeforeMatching:!0,cb:function(t,e,r){return v=r,!0}})){h=!0,p="tails",c&&y?y=!1:f.push(m,v),m=v-1;continue}h&&!u?(u=!0,h=!1):h&&!c?(c=!0,y=!0,h=!1,"heads"===p&&f.wipe()):h&&c&&f.wipe()}return f.current()&&l.push(f.current()),l.current()?function(t,e){if(0===arguments.length)throw new Error("string-replace-slices-array/replaceSlicesArr(): [THROW_ID_01] inputs missing!");if("string"!=typeof t)throw new TypeError("string-replace-slices-array/replaceSlicesArr(): [THROW_ID_02] first input argument must be a string! Currently it's: "+(void 0===t?"undefined":xt(t))+", equal to: "+t);if(!Lt(e))throw new TypeError("string-replace-slices-array/replaceSlicesArr(): [THROW_ID_03] second input argument must be an array! Currently it's: "+(void 0===e?"undefined":xt(e))+", equal to: "+e);if(e.forEach(function(t,r){if(!Lt(t))throw new TypeError("string-replace-slices-array/replaceSlicesArr(): [THROW_ID_05] ranges array, second input arg., has "+r+Ot(r)+" element not an array: "+JSON.stringify(t,null,4)+", which is "+(void 0===t?"undefined":xt(t)));if(!ht(t[0],{includeZero:!0})){if(!St(t[0]))throw new TypeError("string-replace-slices-array/replaceSlicesArr(): [THROW_ID_06] ranges array, second input arg. has "+r+Ot(r)+" element, array ["+t[0]+","+t[1]+"]. That array has first element not an integer, but "+xt(t[0])+", equal to: "+JSON.stringify(t[0],null,4)+". Computer doesn't like this.");e[r][0]=Number.parseInt(e[r][0],10)}if(!ht(t[1],{includeZero:!0})){if(!St(t[1]))throw new TypeError("string-replace-slices-array/replaceSlicesArr(): [THROW_ID_07] ranges array, second input arg. has "+r+Ot(r)+" element, array ["+t[0]+","+t[1]+"]. That array has second element not an integer, but "+xt(t[1])+", equal to: "+JSON.stringify(t[1],null,4)+". Computer doesn't like this.");e[r][1]=Number.parseInt(e[r][1],10)}}),e.length>0){var r=t.slice(e[e.length-1][1]);t=e.reduce(function(e,r,n,o){var i=0===n?0:o[n-1][1],a=o[n][0];return e+t.slice(i,a)+(null!=o[n][2]?o[n][2]:"")},""),t+=r}return t}(t,l.current()).trim():t.trim()}});
