/**
 * array-group-str-omit-num-char
 * Groups array of strings by omitting number characters
 * Version: 4.0.7
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/array-group-str-omit-num-char/
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).arrayGroupStrOmitNumChar={})}(this,(function(e){"use strict";function r(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function t(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},i="__lodash_hash_undefined__",a="[object Function]",s="[object GeneratorFunction]",u=/^\[object .+?Constructor\]$/,l="object"==typeof self&&self&&self.Object===Object&&self,f="object"==typeof o&&o&&o.Object===Object&&o||l||Function("return this")();function c(e,r){return!!(e?e.length:0)&&function(e,r,t){if(r!=r)return function(e,r,t,n){var o=e.length,i=t+(n?1:-1);for(;n?i--:++i<o;)if(r(e[i],i,e))return i;return-1}(e,h,t);var n=t-1,o=e.length;for(;++n<o;)if(e[n]===r)return n;return-1}(e,r,0)>-1}function p(e,r,t){for(var n=-1,o=e?e.length:0;++n<o;)if(t(r,e[n]))return!0;return!1}function h(e){return e!=e}function g(e,r){return e.has(r)}function y(e){var r=-1,t=Array(e.size);return e.forEach((function(e){t[++r]=e})),t}var d,_=Array.prototype,m=Function.prototype,v=Object.prototype,b=f["__core-js_shared__"],w=(d=/[^.]+$/.exec(b&&b.keys&&b.keys.IE_PROTO||""))?"Symbol(src)_1."+d:"",O=m.toString,T=v.hasOwnProperty,W=v.toString,j=RegExp("^"+O.call(T).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),R=_.splice,E=x(f,"Map"),I=x(f,"Set"),A=x(Object,"create");function F(e){var r=-1,t=e?e.length:0;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}function N(e){var r=-1,t=e?e.length:0;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}function S(e){var r=-1,t=e?e.length:0;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}function D(e){var r=-1,t=e?e.length:0;for(this.__data__=new S;++r<t;)this.add(e[r])}function P(e,r){for(var t,n,o=e.length;o--;)if((t=e[o][0])===(n=r)||t!=t&&n!=n)return o;return-1}function H(e){return!(!M(e)||(r=e,w&&w in r))&&(function(e){var r=M(e)?W.call(e):"";return r==a||r==s}(e)||function(e){var r=!1;if(null!=e&&"function"!=typeof e.toString)try{r=!!(e+"")}catch(e){}return r}(e)?j:u).test(function(e){if(null!=e){try{return O.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e));var r}F.prototype.clear=function(){this.__data__=A?A(null):{}},F.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},F.prototype.get=function(e){var r=this.__data__;if(A){var t=r[e];return t===i?void 0:t}return T.call(r,e)?r[e]:void 0},F.prototype.has=function(e){var r=this.__data__;return A?void 0!==r[e]:T.call(r,e)},F.prototype.set=function(e,r){return this.__data__[e]=A&&void 0===r?i:r,this},N.prototype.clear=function(){this.__data__=[]},N.prototype.delete=function(e){var r=this.__data__,t=P(r,e);return!(t<0)&&(t==r.length-1?r.pop():R.call(r,t,1),!0)},N.prototype.get=function(e){var r=this.__data__,t=P(r,e);return t<0?void 0:r[t][1]},N.prototype.has=function(e){return P(this.__data__,e)>-1},N.prototype.set=function(e,r){var t=this.__data__,n=P(t,e);return n<0?t.push([e,r]):t[n][1]=r,this},S.prototype.clear=function(){this.__data__={hash:new F,map:new(E||N),string:new F}},S.prototype.delete=function(e){return J(this,e).delete(e)},S.prototype.get=function(e){return J(this,e).get(e)},S.prototype.has=function(e){return J(this,e).has(e)},S.prototype.set=function(e,r){return J(this,e).set(e,r),this},D.prototype.add=D.prototype.push=function(e){return this.__data__.set(e,i),this},D.prototype.has=function(e){return this.__data__.has(e)};var C=I&&1/y(new I([,-0]))[1]==1/0?function(e){return new I(e)}:function(){};function J(e,r){var t,n,o=e.__data__;return("string"==(n=typeof(t=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t)?o["string"==typeof r?"string":"hash"]:o.map}function x(e,r){var t=function(e,r){return null==e?void 0:e[r]}(e,r);return H(t)?t:void 0}function M(e){var r=typeof e;return!!e&&("object"==r||"function"==r)}var q=function(e){return e&&e.length?function(e,r,t){var n=-1,o=c,i=e.length,a=!0,s=[],u=s;if(t)a=!1,o=p;else if(i>=200){var l=r?null:C(e);if(l)return y(l);a=!1,o=g,u=new D}else u=r?[]:s;e:for(;++n<i;){var f=e[n],h=r?r(f):f;if(f=t||0!==f?f:0,a&&h==h){for(var d=u.length;d--;)if(u[d]===h)continue e;r&&u.push(h),s.push(f)}else o(u,h,t)||(u!==s&&u.push(h),s.push(f))}return s}(e):[]},$={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function k(e,r){if(!Array.isArray(e)||!e.length)return e;var t,o,i=n(n({},$),r);if(i.strictlyTwoElementsInRangeArrays&&!e.filter((function(e){return e})).every((function(e,r){return 2===e.length||(t=r,o=e.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, "+t+"th range ("+JSON.stringify(e[t],null,4)+") has not two but "+o+" elements!");if(!e.filter((function(e){return e})).every((function(e,r){return!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(t=r,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, "+t+"th range ("+JSON.stringify(e[t],null,4)+") does not consist of only natural numbers!");var a=Math.pow(e.filter((function(e){return e})).length,2),s=0;return Array.from(e).filter((function(e){return e})).sort((function(e,r){return i.progressFn&&i.progressFn(Math.floor(100*(s+=1)/a)),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1}))}var G={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function z(e,r){function t(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;var o;if(r){if(!t(r))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n"+JSON.stringify(r,null,4)+" (type "+typeof r+")");if((o=n(n({},G),r)).progressFn&&t(o.progressFn)&&!Object.keys(o.progressFn).length)o.progressFn=null;else if(o.progressFn&&"function"!=typeof o.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'+typeof o.progressFn+'", equal to '+JSON.stringify(o.progressFn,null,4));if(o.mergeType&&1!=+o.mergeType&&2!=+o.mergeType)throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'+typeof o.mergeType+'", equal to '+JSON.stringify(o.mergeType,null,4));if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'+typeof o.joinRangesThatTouchEdges+'", equal to '+JSON.stringify(o.joinRangesThatTouchEdges,null,4))}else o=n({},G);var i,a,s,u=e.filter((function(e){return e})).map((function(e){return[].concat(e)})).filter((function(e){return void 0!==e[2]||e[0]!==e[1]}));if(!(i=o.progressFn?k(u,{progressFn:function(e){(s=Math.floor(e/5))!==a&&(a=s,o.progressFn(s))}}):k(u)))return null;for(var l=i.length-1,f=l;f>0;f--)o.progressFn&&(s=Math.floor(78*(1-f/l))+21)!==a&&s>a&&(a=s,o.progressFn(s)),(i[f][0]<=i[f-1][0]||!o.joinRangesThatTouchEdges&&i[f][0]<i[f-1][1]||o.joinRangesThatTouchEdges&&i[f][0]<=i[f-1][1])&&(i[f-1][0]=Math.min(i[f][0],i[f-1][0]),i[f-1][1]=Math.max(i[f][1],i[f-1][1]),void 0!==i[f][2]&&(i[f-1][0]>=i[f][0]||i[f-1][1]<=i[f][1])&&null!==i[f-1][2]&&(null===i[f][2]&&null!==i[f-1][2]?i[f-1][2]=null:null!=i[f-1][2]?2==+o.mergeType&&i[f-1][0]===i[f][0]?i[f-1][2]=i[f][2]:i[f-1][2]+=i[f][2]:i[f-1][2]=i[f][2]),i.splice(f,1),f=i.length);return i.length?i:null}var B={wildcard:"*",dedupePlease:!0};e.groupStr=function(e,r){if(!Array.isArray(e))return e;if(!e.length)return{};for(var t=n(n({},B),r),o=t.dedupePlease?q(e):Array.from(e),i={},a=0,s=o.length;a<s;a++){var u=o[a].match(/\d+/gm);u?function(){var e=o[a].replace(/\d+/gm,t.wildcard);Object.prototype.hasOwnProperty.call(i,e)?(u.forEach((function(r,t){i[e].elementsWhichWeCanReplaceWithWildcards[t]&&r!==i[e].elementsWhichWeCanReplaceWithWildcards[t]&&(i[e].elementsWhichWeCanReplaceWithWildcards[t]=!1)})),i[e].count+=1):i[e]={count:1,elementsWhichWeCanReplaceWithWildcards:Array.from(u)}}():i[o[a]]={count:1}}var l={};return Object.keys(i).forEach((function(e){var r=e;if(Array.isArray(i[e].elementsWhichWeCanReplaceWithWildcards)&&i[e].elementsWhichWeCanReplaceWithWildcards.some((function(e){return!1!==e}))){for(var n=[],o=0,a=0;a<i[e].elementsWhichWeCanReplaceWithWildcards.length;a++)o=r.indexOf(""+(t.wildcard||""),o+(t.wildcard||"").length),!1!==i[e].elementsWhichWeCanReplaceWithWildcards[a]&&n.push([o,o+(t.wildcard||"").length,i[e].elementsWhichWeCanReplaceWithWildcards[a]]);r=function(e,r,t){var n,o=0,i=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof e)throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: "+typeof e+", equal to: "+JSON.stringify(e,null,4));if(r&&!Array.isArray(r))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: "+typeof r+", equal to: "+JSON.stringify(r,null,4));if(t&&"function"!=typeof t)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: "+typeof t+", equal to: "+JSON.stringify(t,null,4));if(!r||!r.filter((function(e){return e})).length)return e;var a=(n=Array.isArray(r)&&Number.isInteger(r[0])&&Number.isInteger(r[1])?[Array.from(r)]:Array.from(r)).length,s=0;n.filter((function(e){return e})).forEach((function(e,r){if(t&&(o=Math.floor(s/a*10))!==i&&(i=o,t(o)),!Array.isArray(e))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has "+r+"th element not an array: "+JSON.stringify(e,null,4)+", which is "+typeof e);if(!Number.isInteger(e[0])){if(!Number.isInteger(+e[0])||+e[0]<0)throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has "+r+"th element, array "+JSON.stringify(e,null,0)+". Its first element is not an integer, string index, but "+typeof e[0]+", equal to: "+JSON.stringify(e[0],null,4)+".");n[r][0]=+n[r][0]}if(!Number.isInteger(e[1])){if(!Number.isInteger(+e[1])||+e[1]<0)throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has "+r+"th element, array "+JSON.stringify(e,null,0)+". Its second element is not an integer, string index, but "+typeof e[1]+", equal to: "+JSON.stringify(e[1],null,4)+".");n[r][1]=+n[r][1]}s+=1}));var u=z(n,{progressFn:function(e){t&&(o=10+Math.floor(e/10))!==i&&(i=o,t(o))}}),l=Array.isArray(u)?u.length:0;if(l>0){var f=e.slice(u[l-1][1]);e=u.reduce((function(r,n,a,s){return t&&(o=20+Math.floor(a/l*80))!==i&&(i=o,t(o)),r+e.slice(0===a?0:s[a-1][1],s[a][0])+(s[a][2]||"")}),""),e+=f}return e}(r,n)}l[r]=i[e].count})),l},e.version="4.0.7",Object.defineProperty(e,"__esModule",{value:!0})}));
