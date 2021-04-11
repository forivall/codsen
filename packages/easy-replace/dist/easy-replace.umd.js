/**
 * @name easy-replace
 * @fileoverview Replace strings with optional lookarounds, but without regexes
 * @version 4.0.15
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/easy-replace/}
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).easyReplace={})}(this,(function(e){"use strict";function t(e){function t(e){return null!=e}return t(e)&&"boolean"!=typeof e?Array.isArray(e)?e.filter((e=>t(e)&&"boolean"!=typeof e)).map((e=>String(e))).filter((e=>e.length>0)):[String(e)]:[""]}function r(e,t,r,i){let o=!0;const f=Array.from(e);for(let n=0,l=f.length;n<l;n++)if(i){if(f[n].toLowerCase()!==t[r-Array.from(e).length+n].toLowerCase()){o=!1;break}}else if(f[n]!==t[r-Array.from(e).length+n]){o=!1;break}return o}function i(e,t,r,i){let o=!0;const f=Array.from(e);for(let e=0,n=f.length;e<n;e++)if(i){if(f[e].toLowerCase()!==t[r+e].toLowerCase()){o=!1;break}}else if(f[e]!==t[r+e]){o=!1;break}return o}e.er=function(e,o,f){const n={i:{leftOutsideNot:!1,leftOutside:!1,leftMaybe:!1,searchFor:!1,rightMaybe:!1,rightOutside:!1,rightOutsideNot:!1},...o},l=t(e);n.leftOutsideNot=t(n.leftOutsideNot),n.leftOutside=t(n.leftOutside),n.leftMaybe=t(n.leftMaybe),n.searchFor=String(n.searchFor),n.rightMaybe=t(n.rightMaybe),n.rightOutside=t(n.rightOutside),n.rightOutsideNot=t(n.rightOutsideNot);const s=t(f),a=Array.from(l[0]);let h,g,u,c;const d=[];let y="";const b=function(e,t,r){function i(e){return null!=e}if("string"!=typeof e||0===e.length||"string"!=typeof t||0===t.length)return[];const o=[],f=Array.from(e),n=Array.from(t);let l;for(let e=0;e<f.length;e++)if(r&&r.i){if(f[e].toLowerCase()===n[0].toLowerCase()){l=!0;for(let t=0;t<n.length;t++)if(!i(f[e+t])||!i(n[t])||f[e+t].toLowerCase()!==n[t].toLowerCase()){l=!1;break}l&&o.push(e)}}else if(f[e]===n[0]){l=!0;for(let t=0;t<n.length;t++)if(f[e+t]!==n[t]){l=!1;break}l&&o.push(e)}return o}(l[0],n.searchFor,{i:n.i.searchFor});for(let e=0,t=b.length;e<t;e++){const t=b[e];if(h=t,g=t+Array.from(n.searchFor).length,n.leftMaybe.length>0)for(let e=0,r=n.leftMaybe.length;e<r;e++){u=!0;const r=Array.from(n.leftMaybe[e]);for(let e=0,i=r.length;e<i;e++)if(n.i.leftMaybe){if(r[e].toLowerCase()!==a[t-r.length+e].toLowerCase()){u=!1;break}}else if(r[e]!==a[t-r.length+e]){u=!1;break}u&&t-r.length<h&&(h=t-r.length)}if(n.rightMaybe.length>0)for(let e=0,r=n.rightMaybe.length;e<r;e++){u=!0;const r=Array.from(n.rightMaybe[e]);for(let e=0,i=r.length;e<i;e++)if(n.i.rightMaybe){if(r[e].toLowerCase()!==a[t+Array.from(n.searchFor).length+e].toLowerCase()){u=!1;break}}else if(r[e]!==a[t+Array.from(n.searchFor).length+e]){u=!1;break}u&&g<t+Array.from(n.searchFor).length+r.length&&(g=t+Array.from(n.searchFor).length+r.length)}if(""!==n.leftOutside[0]){c=!1;for(let e=0,t=n.leftOutside.length;e<t;e++)u=r(n.leftOutside[e],a,h,n.i.leftOutside),u&&(c=!0);if(!c)continue}if(""!==n.rightOutside[0]){c=!1;for(let e=0,t=n.rightOutside.length;e<t;e++)u=i(n.rightOutside[e],a,g,n.i.rightOutside),u&&(c=!0);if(!c)continue}if(""!==n.leftOutsideNot[0]){for(let e=0,t=n.leftOutsideNot.length;e<t;e++)if(u=r(n.leftOutsideNot[e],a,h,n.i.leftOutsideNot),u){h=-1,g=-1;break}if(-1===h)continue}if(""!==n.rightOutsideNot[0]){for(let e=0,t=n.rightOutsideNot.length;e<t;e++)if(u=i(n.rightOutsideNot[e],a,g,n.i.rightOutsideNot),u){h=-1,g=-1;break}if(-1===h)continue}d.push([h,g])}return d.length>0?(d.forEach(((e,t)=>{void 0!==d[t+1]&&d[t][1]>d[t+1][0]&&(d[t+1][0]=d[t][1])})),d.forEach(((e,t)=>{e[0]===e[1]&&d.splice(t,1)})),d.length>0&&0!==d[0][0]&&(y+=a.slice(0,d[0][0]).join("")),d.forEach(((e,t)=>{y+=s.join(""),y+=void 0!==d[t+1]?a.slice(d[t][1],d[t+1][0]).join(""):a.slice(d[t][1]).join("")})),y):l.join("")},e.version="4.0.15",Object.defineProperty(e,"__esModule",{value:!0})}));
