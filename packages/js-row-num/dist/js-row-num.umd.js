/**
 * js-row-num
 * Update all row numbers in all console.logs in JS code
 * Version: 2.7.11
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/js-row-num
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e=e||self).jsRowNum=r()}(this,(function(){"use strict";function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function r(e,r=!0,t){if(!(t.trim()||e.length&&"\n"!==t&&" "!==t&&" "===(r?e[e.length-1]:e[0])||e.length&&"\n"===(r?e[e.length-1]:e[0])&&"\n"!==t&&" "!==t))if(r){if(("\n"===t||" "===t)&&e.length&&" "===e[e.length-1])for(;e.length&&" "===e[e.length-1];)e.pop();e.push(" "===t||"\n"===t?t:" ")}else{if(("\n"===t||" "===t)&&e.length&&" "===e[0])for(;e.length&&" "===e[0];)e.shift();e.unshift(" "===t||"\n"===t?t:" ")}}function t(e,t){if("string"==typeof e&&e.length){let n,s,i=!1;if(e.includes("\r\n")&&(i=!0),n=t&&"number"==typeof t?t:1,""===e.trim()){const t=[];for(s=n,Array.from(e).forEach(e=>{("\n"!==e||s)&&("\n"===e&&(s-=1),r(t,!0,e))});t.length>1&&" "===t[t.length-1];)t.pop();return t.join("")}const o=[];if(s=n,""===e[0].trim())for(let t=0,n=e.length;t<n&&!e[t].trim();t++)("\n"!==e[t]||s)&&("\n"===e[t]&&(s-=1),r(o,!0,e[t]));const a=[];if(s=n,""===e.slice(-1).trim())for(let t=e.length;t--&&!e[t].trim();)("\n"!==e[t]||s)&&("\n"===e[t]&&(s-=1),r(a,!1,e[t]));return i?`${o.join("")}${e.trim()}${a.join("")}`.replace(/\n/g,"\r\n"):o.join("")+e.trim()+a.join("")}return e}function n(e,r){if(!Array.isArray(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const t={strictlyTwoElementsInRangeArrays:!1,progressFn:null,...r};let n,s;if(t.strictlyTwoElementsInRangeArrays&&!e.every((e,r)=>2===e.length||(n=r,s=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) has not two but ${s} elements!`);if(!e.every((e,r)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(n=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) does not consist of only natural numbers!`);const i=e.length*e.length;let o=0;return Array.from(e).sort((e,r)=>(t.progressFn&&(o+=1,t.progressFn(Math.floor(100*o/i))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1))}function s(e,r){function t(e){return"string"==typeof e}function s(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e))return e;const i={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let o;if(r){if(!s(r))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(r,null,4)} (type ${typeof r})`);if(o={...i,...r},o.progressFn&&s(o.progressFn)&&!Object.keys(o.progressFn).length)o.progressFn=null;else if(o.progressFn&&"function"!=typeof o.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof o.progressFn}", equal to ${JSON.stringify(o.progressFn,null,4)}`);if(o.mergeType&&1!==o.mergeType&&2!==o.mergeType)if(t(o.mergeType)&&"1"===o.mergeType.trim())o.mergeType=1;else{if(!t(o.mergeType)||"2"!==o.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof o.mergeType}", equal to ${JSON.stringify(o.mergeType,null,4)}`);o.mergeType=2}if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof o.joinRangesThatTouchEdges}", equal to ${JSON.stringify(o.joinRangesThatTouchEdges,null,4)}`)}else o={...i};const a=e.map(e=>[...e]).filter(e=>void 0!==e[2]||e[0]!==e[1]);let l,u,g;l=o.progressFn?n(a,{progressFn:e=>{g=Math.floor(e/5),g!==u&&(u=g,o.progressFn(g))}}):n(a);const p=l.length-1;for(let e=p;e>0;e--)o.progressFn&&(g=Math.floor(78*(1-e/p))+21,g!==u&&g>u&&(u=g,o.progressFn(g))),(l[e][0]<=l[e-1][0]||!o.joinRangesThatTouchEdges&&l[e][0]<l[e-1][1]||o.joinRangesThatTouchEdges&&l[e][0]<=l[e-1][1])&&(l[e-1][0]=Math.min(l[e][0],l[e-1][0]),l[e-1][1]=Math.max(l[e][1],l[e-1][1]),void 0!==l[e][2]&&(l[e-1][0]>=l[e][0]||l[e-1][1]<=l[e][1])&&null!==l[e-1][2]&&(null===l[e][2]&&null!==l[e-1][2]?l[e-1][2]=null:void 0!==l[e-1][2]?2===o.mergeType&&l[e-1][0]===l[e][0]?l[e-1][2]=l[e][2]:l[e-1][2]+=l[e][2]:l[e-1][2]=l[e][2]),l.splice(e,1),e=l.length);return l}function i(e){return null!=e}function o(e){return Number.isInteger(e)&&e>=0}function a(e){return"string"==typeof e}function l(e){return/^\d*$/.test(e)?parseInt(e,10):e}class u{constructor(e){const r={limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1,...e};if(r.mergeType&&1!==r.mergeType&&2!==r.mergeType)if(a(r.mergeType)&&"1"===r.mergeType.trim())r.mergeType=1;else{if(!a(r.mergeType)||"2"!==r.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof r.mergeType}", equal to ${JSON.stringify(r.mergeType,null,4)}`);r.mergeType=2}this.opts=r}add(e,r,n,...s){if(s.length>0)throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ${JSON.stringify(s,null,4)}`);if(!i(e)&&!i(r))return;if(i(e)&&!i(r)){if(Array.isArray(e)){if(e.length){if(e.some(e=>Array.isArray(e)))return void e.forEach(e=>{Array.isArray(e)&&this.add(...e)});e.length>1&&o(l(e[0]))&&o(l(e[1]))&&this.add(...e)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(e,null,0)}) but second-one, "to" is not (${JSON.stringify(r,null,0)})`)}if(!i(e)&&i(r))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(r,null,0)}) but first-one, "from" is not (${JSON.stringify(e,null,0)})`);const u=/^\d*$/.test(e)?parseInt(e,10):e,g=/^\d*$/.test(r)?parseInt(r,10):r;if(o(n)&&(n=String(n)),!o(u)||!o(g))throw o(u)&&u>=0?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof g}" equal to: ${JSON.stringify(g,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof u}" equal to: ${JSON.stringify(u,null,4)}`);if(i(n)&&!a(n)&&!o(n))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof n}, equal to:\n${JSON.stringify(n,null,4)}`);if(i(this.slices)&&Array.isArray(this.last())&&u===this.last()[1]){if(this.last()[1]=g,this.last()[2],null!==this.last()[2]&&i(n)){let e=!(i(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?n:this.last()[2]+n;this.opts.limitToBeAddedWhitespace&&(e=t(e,this.opts.limitLinebreaksCount)),a(e)&&!e.length||(this.last()[2]=e)}}else{this.slices||(this.slices=[]);const e=void 0===n||a(n)&&!n.length?[u,g]:[u,g,this.opts.limitToBeAddedWhitespace?t(n,this.opts.limitLinebreaksCount):n];this.slices.push(e)}}push(e,r,t,...n){this.add(e,r,t,...n)}current(){return null!=this.slices?(this.slices=s(this.slices,{mergeType:this.opts.mergeType}),this.opts.limitToBeAddedWhitespace?this.slices.map(e=>i(e[2])?[e[0],e[1],t(e[2],this.opts.limitLinebreaksCount)]:e):this.slices):null}wipe(){this.slices=void 0}replace(e){if(Array.isArray(e)&&e.length){if(!Array.isArray(e[0])||!o(e[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(e[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.slices=Array.from(e)}else this.slices=void 0}last(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}function g(e){return null!=e}function p(e){return"string"==typeof e}return function(r,t){if("string"!=typeof r||!r.length)return r;function n(e){return/[0-9]/.test(e)}function i(r){return r&&"object"===e(r)&&!Array.isArray(r)}var o=Object.assign({padStart:3,overrideRowNum:null,returnRangesOnly:!1,triggerKeywords:["console.log"],extractedLogContentsWereGiven:!1},t);(!o.padStart||"number"!=typeof o.padStart||"number"==typeof o.padStart&&o.padStart<0)&&(o.padStart=0);var a,l,y=new u,f=r.length,h=null,m=null,d=null,c=1,T=!1,w=null;for(o.padStart&&f>45e3&&(o.padStart=4),a=0;a<f;a++){if(null===o.overrideRowNum&&("\n"===r[a]||"\r"===r[a]&&"\n"!==r[a+1])&&(c+=1),!o.extractedLogContentsWereGiven&&null!==h&&h.start<a&&h.type===r[a]&&(h=null,m=null,d=null,w=null,T=!1),null===h&&(o.extractedLogContentsWereGiven||m&&m<a&&d&&d<a)&&r[a].trim())if('"'===r[a]||"'"===r[a]||"`"===r[a])(h={}).start=a,h.type=r[a],T=!1;else if(o.extractedLogContentsWereGiven&&null===w){if(!n(r[a]))break;w=a}else r[a].trim()&&"/"!==r[a]&&!o.extractedLogContentsWereGiven&&(m=null,d=null,w=null);if(h&&Number.isInteger(h.start)&&h.start<a&&!T&&null===w&&n(r[a])&&(w=a),!Number.isInteger(w)||n(r[a])&&r[a+1]||!(a>w)&&r[a+1]||(o.padStart||o.overrideRowNum,y.push(w,n(r[a])?a+1:a,o.padStart?String(null!=o.overrideRowNum?o.overrideRowNum:c).padStart(o.padStart,"0"):"".concat(null!=o.overrideRowNum?o.overrideRowNum:c)),w=null,T=!0),h&&Number.isInteger(h.start)&&h.start<a&&!T&&(l=r[a],/[A-Za-z]/.test(l))&&("n"!==r[a]||"\\"!==r[a-1])){if("\\"===r[a-1]&&"u"===r[a]&&"0"===r[a+1]&&"0"===r[a+2]&&"1"===r[a+3]&&("b"===r[a+4]||"B"===r[a+5])&&"["===r[a+5]){var b=void 0;n(r[a+6])?b=a+6:"$"===r[a+6]&&"{"===r[a+7]&&n(r[a+8])&&(b=a+8);var $=void 0;if(b)for(var O=b;O<f;O++)if(!n(r[O])){$=O;break}var R=void 0;if("m"===r[$]?R=$:"}"===r[$]&&"m"===r[$+1]&&(R=$+1),!R){T=!0;continue}if("$"===r[R+1]&&"{"===r[R+2]&&"`"===r[R+3]){a=R+3;continue}}T=!0}if(!d&&r[a].trim()&&m&&m<=a&&("("===r[a]?d=a:(m=null,w=null)),i(o)&&o.triggerKeywords&&Array.isArray(o.triggerKeywords)){for(var v=void 0,I=0,_=o.triggerKeywords.length;I<_;I++)if(r.startsWith(o.triggerKeywords[I],a)){v=o.triggerKeywords[I];break}if(v){m=a+v.length,a=a+v.length-1;continue}}}return h=null,m=null,d=null,c=1,T=void 0,w=null,c=1,o.returnRangesOnly?y.current():y.current()?function(e,r,t){let n,i=0,o=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!p(e))throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(null===r)return e;if(!Array.isArray(r))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(t&&"function"!=typeof t)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);n=Array.isArray(r)&&(Number.isInteger(r[0])&&r[0]>=0||/^\d*$/.test(r[0]))&&(Number.isInteger(r[1])&&r[1]>=0||/^\d*$/.test(r[1]))?[Array.from(r)]:Array.from(r);const a=n.length;let l=0;n.forEach((e,r)=>{if(t&&(i=Math.floor(l/a*10),i!==o&&(o=i,t(i))),!Array.isArray(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${r}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!Number.isInteger(e[0])||e[0]<0){if(!/^\d*$/.test(e[0]))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${r}th element, array [${e[0]},${e[1]}]. That array has first element not an integer, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}. Computer doesn't like this.`);n[r][0]=Number.parseInt(n[r][0],10)}if(!Number.isInteger(e[1])){if(!/^\d*$/.test(e[1]))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${r}th element, array [${e[0]},${e[1]}]. That array has second element not an integer, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}. Computer doesn't like this.`);n[r][1]=Number.parseInt(n[r][1],10)}l+=1});const u=s(n,{progressFn:e=>{t&&(i=10+Math.floor(e/10),i!==o&&(o=i,t(i)))}}),y=u.length;if(y>0){const r=e.slice(u[y-1][1]);e=u.reduce((r,n,s,a)=>{t&&(i=20+Math.floor(s/y*80),i!==o&&(o=i,t(i)));const l=0===s?0:a[s-1][1],u=a[s][0];return r+e.slice(l,u)+(g(a[s][2])?a[s][2]:"")},""),e+=r}return e}(r,y.current()):r}}));
