/**
 * ranges-sort
 * Sort string index ranges
 * Version: 4.0.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ranges-sort/
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).rangesSort={})}(this,(function(e){"use strict";function r(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function n(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function t(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var o={strictlyTwoElementsInRangeArrays:!1,progressFn:null};e.defaults=o,e.rSort=function(e,r){if(!Array.isArray(e)||!e.length)return e;var n,i,s=t(t({},o),r);if(s.strictlyTwoElementsInRangeArrays&&!e.filter((function(e){return e})).every((function(e,r){return 2===e.length||(n=r,i=e.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, "+n+"th range ("+JSON.stringify(e[n],null,4)+") has not two but "+i+" elements!");if(!e.filter((function(e){return e})).every((function(e,r){return!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(n=r,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, "+n+"th range ("+JSON.stringify(e[n],null,4)+") does not consist of only natural numbers!");var u=Math.pow(e.filter((function(e){return e})).length,2),a=0;return Array.from(e).filter((function(e){return e})).sort((function(e,r){return s.progressFn&&s.progressFn(Math.floor(100*(a+=1)/u)),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1}))},e.version="4.0.1",Object.defineProperty(e,"__esModule",{value:!0})}));
