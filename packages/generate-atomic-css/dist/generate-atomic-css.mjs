/**
 * generate-atomic-css
 * Generate Atomic CSS
 * Version: 1.4.7
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/generate-atomic-css/
 */

import{right as e,left as n,leftSeq as t,rightSeq as i}from"string-left-right";function l(e){return"string"==typeof e}const r={CONFIGHEAD:"GENERATE-ATOMIC-CSS-CONFIG-STARTS",CONFIGTAIL:"GENERATE-ATOMIC-CSS-CONFIG-ENDS",CONTENTHEAD:"GENERATE-ATOMIC-CSS-CONTENT-STARTS",CONTENTTAIL:"GENERATE-ATOMIC-CSS-CONTENT-ENDS"},s=["px","em","%","rem","cm","mm","in","pt","pc","ex","ch","vw","vmin","vmax"],{CONFIGHEAD:c,CONFIGTAIL:f,CONTENTHEAD:d,CONTENTTAIL:g}=r,o=[":"];function u(r){let s=r,o="",u="";if(r.includes(c)&&r.includes(f)){if(-1!==r.indexOf(f)&&-1!==r.indexOf(d)&&r.indexOf(f)>r.indexOf(d))throw new Error("generate-atomic-css: [THROW_ID_02] Config heads are after config tails!");let t=r.indexOf(c)+c.length,i=r.indexOf(f);if("*"===r[e(r,t)]&&"/"===r[e(r,e(r,t))]&&(t=e(r,e(r,t))+1),"*"===r[n(r,i)]&&"/"===r[n(r,n(r,i))]&&(i=n(r,n(r,i))),s=r.slice(t,i).trim(),!l(s)||!s.trim().length)return[s,o,u]}else if(r.includes(c)&&!r.includes(f)&&r.includes(d)){if(r.indexOf(c)>r.indexOf(d))throw new Error("generate-atomic-css: [THROW_ID_03] Config heads are after content heads!");s=r.slice(r.indexOf(c)+c.length,r.indexOf(d))}else if(r.includes(c)||r.includes(f)||!r.includes(d)&&!r.includes(g)){const e=new RegExp(`(\\/\\s*\\*\\s*)*${d}(\\s*\\*\\s*\\/)*`),n=new RegExp(`(\\/\\s*\\*\\s*)*${g}(\\s*\\*\\s*\\/)*`);let t=!1;const i=[],l=[],c=r.split("\n").filter((e=>!!t||(e.includes("$$$")||e.includes("{")||e.includes(":")?(t=!0,!0):(i.push(e),!1))));for(let e=c.length;e--&&!(c[e].includes("$$$")||c[e].includes("}")||c[e].includes(":"));)l.unshift(c.pop());s=c.join("\n").replace(e,"").replace(n,""),i.length&&(o=`${i.join("\n")}\n`),l.length&&(u=`\n${l.join("\n")}`)}else if(s=r,s.includes(d)){if(n(r,s.indexOf(d))){let e=s.indexOf(d);t(r,e,"/","*")&&(e=t(r,e,"/","*").leftmostChar),o=0===e?"":r.slice(0,e)}let l=s.indexOf(d)+d.length;i(s,l-1,"*","/")&&(l=i(s,l-1,"*","/").rightmostChar+1);let c=null;if(r.includes(g)){c=r.indexOf(g),"*"===r[n(r,c)]&&"/"===r[n(r,n(r,c))]&&(c=n(r,n(r,c)));let t=r.indexOf(g)+g.length;"*"===r[e(r,t-1)]&&"/"===r[e(r,e(r,t-1))]&&(t=e(r,e(r,t-1))+1),e(r,t)&&(u=r.slice(t))}s=c?s.slice(l,c).trim():s.slice(l).trim()}else if(s.includes(g)){const n=[];let i=!1;s=s.split("\n").filter((e=>e.includes("$$$")||i?(i||(i=!0),!0):(i||n.push(e),!1))).join("\n");let l,c=s.indexOf(g);t(s,c,"/","*")&&(c=t(s,c,"/","*").leftmostChar),s=s.slice(0,c).trim(),n.length&&(o=`${n.join("\n")}\n`),e(r,r.indexOf(g)+g.length)&&(l=r.indexOf(g)+g.length,"*"===r[e(r,l)]&&"/"===r[e(r,e(r,l))]&&(l=e(r,e(r,l))+1,e(r,l)&&(u=r.slice(l))))}return[s,o,u]}function h(e,n=0,t=500){let i,l=n,r=t,s=e;if(e.lastIndexOf("}")>0&&e.slice(e.lastIndexOf("}")+1).includes("|")?i=e.slice(e.lastIndexOf("}")+1).split("|").filter((e=>e.trim().length)).map((e=>e.trim())).filter((e=>String(e).split("").every((e=>/\d/g.test(e))))):e.includes("|")&&(i=e.split("|").filter((e=>e.trim().length)).map((e=>e.trim())).filter((e=>String(e).split("").every((e=>/\d/g.test(e)))))),Array.isArray(i)&&(1===i.length?r=Number.parseInt(i[0],10):i.length>1&&(l=Number.parseInt(i[0],10),r=Number.parseInt(i[1],10))),e.lastIndexOf("}")>0&&e.slice(e.lastIndexOf("}")+1).includes("|")){if(s=e.slice(0,e.indexOf("|",e.lastIndexOf("}")+1)).trimEnd(),s.trim().startsWith("|"))for(;s.trim().startsWith("|");)s=s.trim().slice(1)}else{let n=null,t=!1,i=0,l=e.length,r=null;for(let s=0,c=e.length;s<c;s++)if("0123456789".includes(e[s])?null===r&&e[s].trim().length&&(r=!0):"|"!==e[s]&&e[s].trim().length&&(r=!1),!e[s+1]&&r&&n&&(l=n),"|"===e[s]){if(r&&n){l=n;break}n=s,r=null}else!t&&e[s].trim().length&&(t=!0,null!==n&&(i=n+1));s=e.slice(i,l).trimEnd()}return[l,r,s]}function a(n,t,i,r,c=!0,f,d){return function(e,n=!0){if(!n)return e;const t=Array.from(e);if(t.length&&l(t[0])&&!t[0].trim().length)do{t.shift()}while(l(t[0])&&!t[0].trim().length);if(t.length&&l(t[t.length-1])&&!t[t.length-1].trim().length)do{t.pop()}while(t&&t[t.length-1]&&!t[t.length-1].trim().length);return t}(n.split(/\r?\n/).map(((n,l,c)=>n.includes("$$$")?function(n,t,i,l,r,c){let f,d=0;const[g,u,a]=h(n,0,500),O=l-i;let m="";for(let n=g;n<=u;n++){let l=0,h=0;for(let t=0,i=a.length;t<i;t++){if(a[t].charCodeAt(0),"$"===a[t]&&"$"===a[t-1]&&"$"===a[t-2]){const i=a.slice(t+1);let r;if(0!==n||!s.some((e=>{if(i.startsWith(e))return r=e,!0}))||"{"!==a[e(a,t+r.length)]&&a[t+r.length+1].trim().length){let i;if(s.some((e=>{if(a.startsWith(e,t+1))return i=e,!0})),!a[t-3].trim().length||o.some((e=>a.slice(h,t-2).trim().endsWith(e)))){let e=0;0===n&&s.some((n=>(`${a.slice(h,t-2)}`.startsWith(n)&&(e=n.length),!0))),m+=`${a.slice(h+e,t-2)}${c?String(n).padStart(String(u).length+(0===n&&i?i.length:0)):n}`}else a[t+1].trim().length&&"{"!==a[e(a,t)]?(m+=`${a.slice(h,t-2)}${n}`,c&&(l=String(u).length-String(n).length)):m+=`${a.slice(h,t-2)}${c?String(n).padEnd(String(u).length+(0===n&&i?i.length:0)):n}`;h=t+1}else m+=`${a.slice(h,t-2)}${c?String(n).padStart(String(u).length-String(n).length+r.length+1):n}`,h=t+1+(r?r.length:0)}if("{"===a[t]&&c&&l&&(m+=`${a.slice(h,t)}${" ".repeat(l)}`,h=t,l=0),!a[t+1]){let e;const t=a.slice(h);0===n&&s.some((n=>{if(t.startsWith(n))return e=n,!0}))?m+=`${a.slice(h+e.length)}`:m+=`${a.slice(h)}`,m+=n!==u?"\n":""}}r.count+=1,"function"==typeof t&&(f=Math.floor(i+n/(u-g)*O),f!==d&&(d=f,t(f)))}return m}(n,t,i+(r-i)/c.length*l,i+(r-i)/c.length*(l+1),f,d):function(e,n){return/\.\w/g.test(e)&&(n.count+=1),e}(n,f))),c).join("\n")}const O="1.4.7",m={includeConfig:!0,includeHeadsAndTails:!0,pad:!0,configOverride:null,reportProgressFunc:null,reportProgressFuncFrom:0,reportProgressFuncTo:100};function $(t,i){if("string"!=typeof t)throw new Error(`generate-atomic-css: [THROW_ID_01] First input argument must be a string! It was given as "${JSON.stringify(t,null,4)}" (type ${typeof t})`);const{CONFIGHEAD:l,CONFIGTAIL:s,CONTENTHEAD:c,CONTENTTAIL:f}=r,d={count:0},g={...m,...i};if(g.includeConfig&&!g.includeHeadsAndTails&&(g.includeHeadsAndTails=!0),!g.configOverride&&!t.includes("$$$")&&!t.includes(l)&&!t.includes(s)&&!t.includes(c)&&!t.includes(f)||g&&g.configOverride&&"string"==typeof g.configOverride&&!g.configOverride.includes("$$$")&&!g.configOverride.includes(l)&&!g.configOverride.includes(s)&&!g.configOverride.includes(c)&&!g.configOverride.includes(f))return{log:{count:0},result:t};let o="",h="",[O,$,p]=u(g.configOverride?g.configOverride:t);if("string"!=typeof O||!O.trim())return{log:{count:0},result:""};if((g.includeConfig||g.includeHeadsAndTails)&&(o=`${c} */\n`,g.includeConfig||(o=`/* ${o}`),h=`\n/* ${f} */`),g.includeConfig&&(o=`/* ${l}\n${O.trim()}\n${s}\n${o}`),t.includes(l)&&null!=n(t,t.indexOf(l))){let i=t.indexOf(l);"*"===t[n(t,i)]&&"/"===t[n(t,n(t,i))]&&(i=n(t,n(t,i)));let r="/* ";("/"===t[e(t,i-1)]&&"*"===t[e(t,e(t,i-1))]||o.trim().startsWith("/*"))&&(r=""),o=`${t.slice(0,i)}${r}${o}`}if(t.includes(s)&&e(t,t.indexOf(s)+s.length)){let n=t.indexOf(s)+s.length;if("*"===t[e(t,t.indexOf(s)+s.length)]&&"/"===t[e(t,e(t,t.indexOf(s)+s.length))]&&(n=e(t,e(t,t.indexOf(s)+s.length))+1),t.slice(e(t,n-1)).startsWith(c)){n=e(t,n)||0+c.length,"*"===t[e(t,n-1)]&&"/"===t[e(t,e(t,n-1))]&&(n=e(t,e(t,n-1))+1),t.includes(f)&&(n=t.indexOf(f)+f.length,"*"===t[e(t,n)]&&"/"===t[e(t,e(t,n))]&&(n=e(t,e(t,n))+1))}const i=t.slice(n);i.length&&i.includes(f)&&(n=t.indexOf(f)+f.length,"*"===t[e(t,n)]&&"/"===t[e(t,e(t,n))]&&(n=e(t,e(t,n))+1)),h=`${h}${t[n]&&e(t,n-1)?t.slice(n):""}`}if("string"==typeof $&&(o=`${$}${o}`),"string"==typeof p){if(p.trim().endsWith("/*")&&!p.trim().startsWith("*/")){let n="";"string"==typeof p&&p[0]&&!p[0].trim()&&(n=p.slice(0,e(p,0)||0)),p=`${n}/* ${p.trim()}`}h=`${h}${p}`}const T=`${function(e,n={}){return n.includeConfig||n.includeHeadsAndTails?e.trim():e}(`${o}${a(O,g.reportProgressFunc,g.reportProgressFuncFrom,g.reportProgressFuncTo,!0,d,g.pad)}${h}`,g)}\n`;return{log:{count:d.count},result:T}}export{m as defaults,h as extractFromToSource,$ as genAtomic,r as headsAndTails,O as version};
