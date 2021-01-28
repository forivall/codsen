/**
 * js-row-num
 * Update all row numbers in all console.logs in JS code
 * Version: 4.0.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/js-row-num/
 */

import{Ranges as t}from"ranges-push";import{rApply as e}from"ranges-apply";const r="4.0.1",n={padStart:3,overrideRowNum:null,returnRangesOnly:!1,triggerKeywords:["console.log"],extractedLogContentsWereGiven:!1};function l(r,l){if("string"!=typeof r||!r.length)return r;function o(t){return/[0-9]/.test(t)}function u(t){return t&&"object"==typeof t&&!Array.isArray(t)}const i={...n,...l};(!i.padStart||"number"!=typeof i.padStart||"number"==typeof i.padStart&&i.padStart<0)&&(i.padStart=0);const a=new t;let s;const g=r.length;let d=null,f=null,p=null,c=1,m=!1,y=null;for(i.padStart&&g>45e3&&(i.padStart=4),s=0;s<g;s++){if(null===i.overrideRowNum&&("\n"===r[s]||"\r"===r[s]&&"\n"!==r[s+1])&&(c+=1),!i.extractedLogContentsWereGiven&&null!==d&&d.start<s&&d.type===r[s]&&(d=null,f=null,p=null,y=null,m=!1),null===d&&(i.extractedLogContentsWereGiven||f&&f<s&&p&&p<s)&&r[s].trim())if('"'===r[s]||"'"===r[s]||"`"===r[s])d={start:s,type:r[s]},m=!1;else if(i.extractedLogContentsWereGiven&&null===y){if(!o(r[s]))break;y=s}else r[s].trim()&&"/"!==r[s]&&!i.extractedLogContentsWereGiven&&(f=null,p=null,y=null);if(d&&Number.isInteger(d.start)&&d.start<s&&!m&&null===y&&o(r[s])&&(y=s),!Number.isInteger(y)||o(r[s])&&r[s+1]||!(s>y)&&r[s+1]||(a.push(y,o(r[s])?s+1:s,i.padStart?String(null!=i.overrideRowNum?i.overrideRowNum:c).padStart(i.padStart,"0"):`${null!=i.overrideRowNum?i.overrideRowNum:c}`),y=null,m=!0),d&&Number.isInteger(d.start)&&d.start<s&&!m&&/[A-Za-z]/.test(r[s])&&("n"!==r[s]||"\\"!==r[s-1])){if("\\"===r[s-1]&&"u"===r[s]&&"0"===r[s+1]&&"0"===r[s+2]&&"1"===r[s+3]&&("b"===r[s+4]||"B"===r[s+5])&&"["===r[s+5]){let t,e,n;if(o(r[s+6])?t=s+6:"$"===r[s+6]&&"{"===r[s+7]&&o(r[s+8])&&(t=s+8),t)for(let n=t;n<g;n++)if(!o(r[n])){e=n;break}if(void 0!==e&&"m"===r[e]?n=e:void 0!==e&&"}"===r[e]&&"m"===r[e+1]&&(n=e+1),!n){m=!0;continue}if("$"===r[n+1]&&"{"===r[n+2]&&"`"===r[n+3]){s=n+3;continue}}m=!0}if(!p&&r[s].trim()&&f&&f<=s&&("("===r[s]?p=s:(f=null,y=null)),u(i)&&i.triggerKeywords&&Array.isArray(i.triggerKeywords)){let t;for(let e=0,n=i.triggerKeywords.length;e<n;e++)if(r.startsWith(i.triggerKeywords[e],s)){t=i.triggerKeywords[e];break}if(t){f=s+t.length,s=s+t.length-1;continue}}}return d=null,f=null,p=null,c=1,m=void 0,y=null,c=1,i.returnRangesOnly?a.current():a.current()?e(r,a.current()):r}export{n as defaults,l as fixRowNums,r as version};
