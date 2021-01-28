/**
 * ast-compare
 * Compare anything: AST, objects, arrays, strings and nested thereof
 * Version: 2.0.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ast-compare/
 */

import e from"type-detect";import{empty as t}from"ast-contains-only-empty-space";import r from"lodash.isplainobject";import n from"matcher";function s(i,h,o){let a,c,l,y=0;const g={hungryForWhitespace:!1,matchStrictly:!1,verboseWhenMismatches:!1,useWildcards:!1,...o};if(g.hungryForWhitespace&&g.matchStrictly&&r(i)&&t(i)&&r(h)&&!Object.keys(h).length)return!0;if((!g.hungryForWhitespace||g.hungryForWhitespace&&!t(i)&&t(h))&&r(i)&&0!==Object.keys(i).length&&r(h)&&0===Object.keys(h).length||e(i)!==e(h)&&(!g.hungryForWhitespace||g.hungryForWhitespace&&!t(i)))return!1;if("string"==typeof i&&"string"==typeof h)return!!(g.hungryForWhitespace&&t(i)&&t(h))||(g.verboseWhenMismatches?i===h||`Given string ${h} is not matched! We have ${i} on the other end.`:g.useWildcards?n.isMatch(i,h,{caseSensitive:!0}):i===h);if(Array.isArray(i)&&Array.isArray(h)){if(g.hungryForWhitespace&&t(h)&&(!g.matchStrictly||g.matchStrictly&&i.length===h.length))return!0;if(!g.hungryForWhitespace&&h.length>i.length||g.matchStrictly&&h.length!==i.length)return!!g.verboseWhenMismatches&&`The length of a given array, ${JSON.stringify(h,null,4)} is ${h.length} but the length of an array on the other end, ${JSON.stringify(i,null,4)} is ${i.length}`;if(0===h.length)return 0===i.length||!!g.verboseWhenMismatches&&`The given array has no elements, but the array on the other end, ${JSON.stringify(i,null,4)} does have some`;for(let e=0,t=h.length;e<t;e++){l=!1;for(let t=y,r=i.length;t<r;t++)if(y+=1,!0===s(i[t],h[e],g)){l=!0;break}if(!l)return!!g.verboseWhenMismatches&&`The given array ${JSON.stringify(h,null,4)} is not a subset of an array on the other end, ${JSON.stringify(i,null,4)}`}}else{if(!r(i)||!r(h))return!(!(g.hungryForWhitespace&&t(i)&&t(h))||g.matchStrictly&&(!g.matchStrictly||(f=h,r(f)?Object.keys(f).length:!Array.isArray(f)&&"string"!=typeof f||f.length)))||i===h;if(a=new Set(Object.keys(h)),c=new Set(Object.keys(i)),g.matchStrictly&&a.size!==c.size){if(!g.verboseWhenMismatches)return!1;const e=new Set([...a].filter((e=>!c.has(e)))),t=e.size?` First object has unique keys: ${JSON.stringify(e,null,4)}.`:"",r=new Set([...c].filter((e=>!a.has(e))));return`When matching strictly, we found that both objects have different amount of keys.${t}${r.size?` Second object has unique keys:\n        ${JSON.stringify(r,null,4)}.`:""}`}for(const r of a){if(!Object.prototype.hasOwnProperty.call(i,r))return!g.useWildcards||g.useWildcards&&!r.includes("*")?!!g.verboseWhenMismatches&&`The given object has key "${r}" which the other-one does not have.`:!!Object.keys(i).some((e=>n.isMatch(e,r,{caseSensitive:!0})))||!!g.verboseWhenMismatches&&`The given object has key "${r}" which the other-one does not have.`;if(null!=i[r]&&e(i[r])!==e(h[r])){if(!(t(i[r])&&t(h[r])&&g.hungryForWhitespace))return!!g.verboseWhenMismatches&&`The given key ${r} is of a different type on both objects. On the first-one, it's ${e(h[r])}, on the second-one, it's ${e(i[r])}`}else if(!0!==s(i[r],h[r],g))return!!g.verboseWhenMismatches&&`The given piece ${JSON.stringify(h[r],null,4)} and ${JSON.stringify(i[r],null,4)} don't match.`}}var f;return!0}export{s as compare};
