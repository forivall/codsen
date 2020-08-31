/**
 * string-remove-thousand-separators
 * Detects and removes thousand separators (dot/comma/quote/space) from string-type digits
 * Version: 3.0.67
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-remove-thousand-separators
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).stringRemoveThousandSeparators=r()}(this,(function(){"use strict";function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function r(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function s(e,r){if(!Array.isArray(e)||!e.length)return e;var t,n,i=o(o({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null}),r);if(i.strictlyTwoElementsInRangeArrays&&!e.filter((function(e){return e})).every((function(e,r){return 2===e.length||(t=r,n=e.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ".concat(t,"th range (").concat(JSON.stringify(e[t],null,4),") has not two but ").concat(n," elements!"));if(!e.filter((function(e){return e})).every((function(e,r){return!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(t=r,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ".concat(t,"th range (").concat(JSON.stringify(e[t],null,4),") does not consist of only natural numbers!"));var a=Math.pow(e.filter((function(e){return e})).length,2),s=0;return Array.from(e).filter((function(e){return e})).sort((function(e,r){return i.progressFn&&(s+=1,i.progressFn(Math.floor(100*s/a))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1}))}function u(r,t){function n(e){return"string"==typeof e}function a(r){return r&&"object"===e(r)&&!Array.isArray(r)}if(!Array.isArray(r)||!r.length)return null;var u,f={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};if(t){if(!a(t))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n".concat(JSON.stringify(t,null,4)," (type ").concat(e(t),")"));if((u=o(o({},f),t)).progressFn&&a(u.progressFn)&&!Object.keys(u.progressFn).length)u.progressFn=null;else if(u.progressFn&&"function"!=typeof u.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'.concat(e(u.progressFn),'", equal to ').concat(JSON.stringify(u.progressFn,null,4)));if(u.mergeType&&1!==u.mergeType&&2!==u.mergeType)if(n(u.mergeType)&&"1"===u.mergeType.trim())u.mergeType=1;else{if(!n(u.mergeType)||"2"!==u.mergeType.trim())throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(e(u.mergeType),'", equal to ').concat(JSON.stringify(u.mergeType,null,4)));u.mergeType=2}if("boolean"!=typeof u.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'.concat(e(u.joinRangesThatTouchEdges),'", equal to ').concat(JSON.stringify(u.joinRangesThatTouchEdges,null,4)))}else u=o({},f);for(var l,c,g,p=r.filter((function(e){return e})).map((function(e){return i(e)})).filter((function(e){return void 0!==e[2]||e[0]!==e[1]})),y=(l=u.progressFn?s(p,{progressFn:function(e){(g=Math.floor(e/5))!==c&&(c=g,u.progressFn(g))}}):s(p)).length-1,h=y;h>0;h--)u.progressFn&&(g=Math.floor(78*(1-h/y))+21)!==c&&g>c&&(c=g,u.progressFn(g)),(l[h][0]<=l[h-1][0]||!u.joinRangesThatTouchEdges&&l[h][0]<l[h-1][1]||u.joinRangesThatTouchEdges&&l[h][0]<=l[h-1][1])&&(l[h-1][0]=Math.min(l[h][0],l[h-1][0]),l[h-1][1]=Math.max(l[h][1],l[h-1][1]),void 0!==l[h][2]&&(l[h-1][0]>=l[h][0]||l[h-1][1]<=l[h][1])&&null!==l[h-1][2]&&(null===l[h][2]&&null!==l[h-1][2]?l[h-1][2]=null:void 0!==l[h-1][2]?2===u.mergeType&&l[h-1][0]===l[h][0]?l[h-1][2]=l[h][2]:l[h-1][2]+=l[h][2]:l[h-1][2]=l[h][2]),l.splice(h,1),h=l.length);return l.length?l:null}function f(e){return null!=e}function l(e){return"string"==typeof e}var c=" ";function g(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2?arguments[2]:void 0;if(!(t.trim()||e.length&&"\n"!==t&&t!==c&&" "===(r?e[e.length-1]:e[0])||e.length&&"\n"===(r?e[e.length-1]:e[0])&&"\n"!==t&&t!==c))if(r){if(("\n"===t||t===c)&&e.length&&" "===e[e.length-1])for(;e.length&&" "===e[e.length-1];)e.pop();e.push(t===c||"\n"===t?t:" ")}else{if(("\n"===t||t===c)&&e.length&&" "===e[0])for(;e.length&&" "===e[0];)e.shift();e.unshift(t===c||"\n"===t?t:" ")}}function p(e,r){if("string"==typeof e&&e.length){var t,n,o=!1;if(e.includes("\r\n")&&(o=!0),t=r&&"number"==typeof r?r:1,""===e.trim()){var i=[];for(n=t,Array.from(e).forEach((function(e){("\n"!==e||n)&&("\n"===e&&(n-=1),g(i,!0,e))}));i.length>1&&" "===i[i.length-1];)i.pop();return i.join("")}var a=[];if(n=t,""===e[0].trim())for(var s=0,u=e.length;s<u&&!e[s].trim();s++)("\n"!==e[s]||n)&&("\n"===e[s]&&(n-=1),g(a,!0,e[s]));var f=[];if(n=t,""===e.slice(-1).trim())for(var l=e.length;l--&&!e[l].trim();)("\n"!==e[l]||n)&&("\n"===e[l]&&(n-=1),g(f,!1,e[l]));return o?"".concat(a.join("")).concat(e.trim()).concat(f.join("")).replace(/\n/g,"\r\n"):a.join("")+e.trim()+f.join("")}return e}function y(e){return null!=e}function h(e){return Number.isInteger(e)&&e>=0}function m(e){return"string"==typeof e}function d(e){return/^\d*$/.test(e)?parseInt(e,10):e}var b=function(){function t(r){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t);var n=o(o({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1}),r);if(n.mergeType&&1!==n.mergeType&&2!==n.mergeType)if(m(n.mergeType)&&"1"===n.mergeType.trim())n.mergeType=1;else{if(!m(n.mergeType)||"2"!==n.mergeType.trim())throw new Error('ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(e(n.mergeType),'", equal to ').concat(JSON.stringify(n.mergeType,null,4)));n.mergeType=2}this.opts=n}var n,a,s;return n=t,(a=[{key:"add",value:function(r,t,n){for(var o=this,a=arguments.length,s=new Array(a>3?a-3:0),u=3;u<a;u++)s[u-3]=arguments[u];if(s.length>0)throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ".concat(JSON.stringify(s,null,4)));if(y(r)||y(t)){if(y(r)&&!y(t)){if(Array.isArray(r)){if(r.length){if(r.some((function(e){return Array.isArray(e)})))return void r.forEach((function(e){Array.isArray(e)&&o.add.apply(o,i(e))}));r.length>1&&h(d(r[0]))&&h(d(r[1]))&&this.add.apply(this,i(r))}return}throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set ('.concat(JSON.stringify(r,null,0),') but second-one, "to" is not (').concat(JSON.stringify(t,null,0),")"))}if(!y(r)&&y(t))throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set ('.concat(JSON.stringify(t,null,0),') but first-one, "from" is not (').concat(JSON.stringify(r,null,0),")"));var f=/^\d*$/.test(r)?parseInt(r,10):r,l=/^\d*$/.test(t)?parseInt(t,10):t;if(h(n)&&(n=String(n)),!h(f)||!h(l))throw h(f)&&f>=0?new TypeError('ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(e(l),'" equal to: ').concat(JSON.stringify(l,null,4))):new TypeError('ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(e(f),'" equal to: ').concat(JSON.stringify(f,null,4)));if(y(n)&&!m(n)&&!h(n))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ".concat(e(n),", equal to:\n").concat(JSON.stringify(n,null,4)));if(y(this.ranges)&&Array.isArray(this.last())&&f===this.last()[1]){if(this.last()[1]=l,this.last()[2],null!==this.last()[2]&&y(n)){var c=!(y(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?n:this.last()[2]+n;this.opts.limitToBeAddedWhitespace&&(c=p(c,this.opts.limitLinebreaksCount)),m(c)&&!c.length||(this.last()[2]=c)}}else{this.ranges||(this.ranges=[]);var g=void 0===n||m(n)&&!n.length?[f,l]:[f,l,this.opts.limitToBeAddedWhitespace?p(n,this.opts.limitLinebreaksCount):n];this.ranges.push(g)}}}},{key:"push",value:function(e,r,t){for(var n=arguments.length,o=new Array(n>3?n-3:0),i=3;i<n;i++)o[i-3]=arguments[i];this.add.apply(this,[e,r,t].concat(o))}},{key:"current",value:function(){var e=this;return null!=this.ranges?(this.ranges=u(this.ranges,{mergeType:this.opts.mergeType}),this.ranges&&this.opts.limitToBeAddedWhitespace?this.ranges.map((function(r){return y(r[2])?[r[0],r[1],p(r[2],e.opts.limitLinebreaksCount)]:r})):this.ranges):null}},{key:"wipe",value:function(){this.ranges=void 0}},{key:"replace",value:function(e){if(Array.isArray(e)&&e.length){if(!Array.isArray(e[0])||!h(e[0][0]))throw new Error("ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ".concat(JSON.stringify(e[0],null,4)," should be an array and its first element should be an integer, a string index."));this.ranges=Array.from(e)}else this.ranges=void 0}},{key:"last",value:function(){return void 0!==this.ranges&&Array.isArray(this.ranges)?this.ranges[this.ranges.length-1]:null}}])&&r(n.prototype,a),s&&r(n,s),t}();var T,v,w=Function.prototype,O=Object.prototype,S=w.toString,j=O.hasOwnProperty,A=S.call(Object),I=O.toString,_=(T=Object.getPrototypeOf,v=Object,function(e){return T(v(e))});var N=function(r){if(!function(r){return!!r&&"object"==e(r)}(r)||"[object Object]"!=I.call(r)||function(e){var r=!1;if(null!=e&&"function"!=typeof e.toString)try{r=!!(e+"")}catch(e){}return r}(r))return!1;var t=_(r);if(null===t)return!0;var n=j.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&S.call(n)==A},E="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var R=function(e,r,t){return e(t={path:r,exports:{},require:function(e,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==r&&t.path)}},t.exports),t.exports}((function(e,r){!function(t){function n(e,r){return r instanceof Object||(r={trim:!0}),"number"==typeof e&&!isNaN(e)||(e=(e||"").toString(),"trim"in r&&!r.trim?!/\s/.test(e):!!(e=e.trim())&&!isNaN(e))}e.exports&&(r=e.exports=n),r.isNumeric=n}()})),D="[object Symbol]",W=/^\s+|\s+$/g,F="\\u0300-\\u036f\\ufe20-\\ufe23",H="[\\ud800-\\udfff]",J="["+F+"\\u20d0-\\u20f0]",k="\\ud83c[\\udffb-\\udfff]",q="[^\\ud800-\\udfff]",x="(?:\\ud83c[\\udde6-\\uddff]){2}",C="[\\ud800-\\udbff][\\udc00-\\udfff]",P="(?:"+J+"|"+k+")"+"?",M="[\\ufe0e\\ufe0f]?",$=M+P+("(?:\\u200d(?:"+[q,x,C].join("|")+")"+M+P+")*"),B="(?:"+[q+J+"?",J,x,C,H].join("|")+")",L=RegExp(k+"(?="+k+")|"+B+$,"g"),U=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),K="object"==e(E)&&E&&E.Object===Object&&E,z="object"==("undefined"==typeof self?"undefined":e(self))&&self&&self.Object===Object&&self,G=K||z||Function("return this")();function Q(e,r,t){if(r!=r)return function(e,r,t,n){for(var o=e.length,i=t+(n?1:-1);n?i--:++i<o;)if(r(e[i],i,e))return i;return-1}(e,V,t);for(var n=t-1,o=e.length;++n<o;)if(e[n]===r)return n;return-1}function V(e){return e!=e}function X(e){return function(e){return U.test(e)}(e)?function(e){return e.match(L)||[]}(e):function(e){return e.split("")}(e)}var Y=Object.prototype.toString,Z=G.Symbol,ee=Z?Z.prototype:void 0,re=ee?ee.toString:void 0;function te(r){if("string"==typeof r)return r;if(function(r){return"symbol"==e(r)||function(r){return!!r&&"object"==e(r)}(r)&&Y.call(r)==D}(r))return re?re.call(r):"";var t=r+"";return"0"==t&&1/r==-Infinity?"-0":t}function ne(e,r,t){var n=e.length;return t=void 0===t?n:t,!r&&t>=n?e:function(e,r,t){var n=-1,o=e.length;r<0&&(r=-r>o?0:o+r),(t=t>o?o:t)<0&&(t+=o),o=r>t?0:t-r>>>0,r>>>=0;for(var i=Array(o);++n<o;)i[n]=e[n+r];return i}(e,r,t)}var oe=function(e,r,t){var n;if((e=null==(n=e)?"":te(n))&&(t||void 0===r))return e.replace(W,"");if(!e||!(r=te(r)))return e;var o=X(e),i=X(r);return ne(o,function(e,r){for(var t=-1,n=e.length;++t<n&&Q(r,e[t],0)>-1;);return t}(o,i),function(e,r){for(var t=e.length;t--&&Q(r,e[t],0)>-1;);return t}(o,i)+1).join("")};return function(r,t){var n,i=!0,a=[".",",","'"," "];if("string"!=typeof r)throw new TypeError("string-remove-thousand-separators/remSep(): [THROW_ID_01] Input must be string! Currently it's: ".concat(e(r),", equal to:\n").concat(JSON.stringify(r,null,4)));if(null!=t&&!N(t))throw new TypeError("string-remove-thousand-separators/remSep(): [THROW_ID_02] Options object must be a plain object! Currently it's: ".concat(e(t),", equal to:\n").concat(JSON.stringify(t,null,4)));var s=o(o({},{removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1}),t),c=oe(r.trim(),'"');if(""===c)return c;for(var g=new b,p=0,y=c.length;p<y;p++){if(s.removeThousandSeparatorsFromNumbers&&""===c[p].trim()&&g.add(p,p+1),s.removeThousandSeparatorsFromNumbers&&"'"===c[p]&&(g.add(p,p+1),"'"===c[p+1])){i=!1;break}if(a.includes(c[p])){if(void 0!==c[p+1]&&R(c[p+1]))if(void 0!==c[p+2]){if(!R(c[p+2])){i=!1;break}if(void 0!==c[p+3]){if(!R(c[p+3])){i=!1;break}if(void 0!==c[p+4]&&R(c[p+4])){i=!1;break}if(s.removeThousandSeparatorsFromNumbers&&g.add(p,p+1),n){if(c[p]!==n){i=!1;break}}else n=c[p]}else s.removeThousandSeparatorsFromNumbers&&s.forceUKStyle&&","===c[p]&&g.add(p,p+1,".")}else s.forceUKStyle&&","===c[p]&&g.add(p,p+1,"."),s.padSingleDecimalPlaceNumbers&&g.add(p+2,p+2,"0")}else if(!R(c[p])){i=!1;break}}return i&&g.current()?function(r,t,n){var o,i=0,a=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!l(r))throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ".concat(e(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(t&&!Array.isArray(t))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ".concat(e(t),", equal to: ").concat(JSON.stringify(t,null,4)));if(n&&"function"!=typeof n)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ".concat(e(n),", equal to: ").concat(JSON.stringify(n,null,4)));if(!t||!t.filter((function(e){return e})).length)return r;var s=(o=Array.isArray(t)&&(Number.isInteger(t[0])&&t[0]>=0||/^\d*$/.test(t[0]))&&(Number.isInteger(t[1])&&t[1]>=0||/^\d*$/.test(t[1]))?[Array.from(t)]:Array.from(t)).length,c=0;o.filter((function(e){return e})).forEach((function(r,t){if(n&&(i=Math.floor(c/s*10))!==a&&(a=i,n(i)),!Array.isArray(r))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has ".concat(t,"th element not an array: ").concat(JSON.stringify(r,null,4),", which is ").concat(e(r)));if(!Number.isInteger(r[0])||r[0]<0){if(!/^\d*$/.test(r[0]))throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has ".concat(t,"th element, array [").concat(r[0],",").concat(r[1],"]. That array has first element not an integer, but ").concat(e(r[0]),", equal to: ").concat(JSON.stringify(r[0],null,4),". Computer doesn't like this."));o[t][0]=Number.parseInt(o[t][0],10)}if(!Number.isInteger(r[1])){if(!/^\d*$/.test(r[1]))throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has ".concat(t,"th element, array [").concat(r[0],",").concat(r[1],"]. That array has second element not an integer, but ").concat(e(r[1]),", equal to: ").concat(JSON.stringify(r[1],null,4),". Computer doesn't like this."));o[t][1]=Number.parseInt(o[t][1],10)}c+=1}));var g=u(o,{progressFn:function(e){n&&(i=10+Math.floor(e/10))!==a&&(a=i,n(i))}});if(!g)return r;var p=g.length;if(p>0){var y=r.slice(g[p-1][1]);r=g.reduce((function(e,t,o,s){n&&(i=20+Math.floor(o/p*80))!==a&&(a=i,n(i));var u=0===o?0:s[o-1][1],l=s[o][0];return e+r.slice(u,l)+(f(s[o][2])?s[o][2]:"")}),""),r+=y}return r}(c,g.current()):c}}));
