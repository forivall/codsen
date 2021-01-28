/**
 * ast-deep-contains
 * Like t.same assert on array of objects, where element order doesn't matter.
 * Version: 3.0.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ast-deep-contains/
 */

import t from"object-path";import{traverse as n}from"ast-monkey-traverse";import r from"@sindresorhus/is";const e="3.0.1";function a(t,n){return Array.from(t).filter(((t,r)=>r!==n))}const s={skipContainers:!0,arrayStrictComparison:!1};function i(e,o,l,c,f){const p={...s,...f};r(e)!==r(o)?c(`the first input arg is of a type ${r(e).toLowerCase()} but the second is ${r(o).toLowerCase()}. Values are - 1st:\n${JSON.stringify(e,null,4)}\n2nd:\n${JSON.stringify(o,null,4)}`):n(o,((n,s,o,f)=>{const h=void 0!==s?s:n,{path:u}=o;if(t.has(e,u))if(!p.arrayStrictComparison&&r.plainObject(h)&&"array"===o.parentType&&o.parent.length>1){f.now=!0;const n=Array.from(o.path.includes(".")?t.get(e,function(t){if(t.includes("."))for(let n=t.length;n--;)if("."===t[n])return t.slice(0,n);return t}(u)):e);if(n.length<o.parent.length)c(`the first array: ${JSON.stringify(n,null,4)}\nhas less objects than array we're matching against, ${JSON.stringify(o.parent,null,4)}`);else{const t=o.parent,e=n.map(((t,n)=>n));t.map(((t,n)=>n));const s=[];for(let t=0,n=e.length;t<n;t++){const n=[],r=e[t],i=a(e,t);n.push(r),i.forEach((t=>{s.push(Array.from(n).concat(t))}))}const f=s.map((t=>t.map(((t,n)=>[n,t]))));let h=0;for(let e=0,a=f.length;e<a;e++){let a=0;f[e].forEach((e=>{r.plainObject(t[e[0]])&&r.plainObject(n[e[1]])&&Object.keys(t[e[0]]).forEach((r=>{Object.keys(n[e[1]]).includes(r)&&(a+=1,n[e[1]][r]===t[e[0]][r]&&(a+=5))}))})),f[e].push(a),a>h&&(h=a)}for(let r=0,e=f.length;r<e;r++)if(f[r][2]===h){f[r].forEach(((e,a)=>{a<f[r].length-1&&i(n[e[1]],t[e[0]],l,c,p)}));break}}}else{const n=t.get(e,u);p.skipContainers&&(r.plainObject(n)||Array.isArray(n))||l(n,h,u)}else c(`the first input: ${JSON.stringify(e,null,4)}\ndoes not have the path "${u}", we were looking, would it contain a value ${JSON.stringify(h,null,0)}.`);return h}))}export{i as deepContains,s as defaults,e as version};
