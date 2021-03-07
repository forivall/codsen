/**
 * string-apostrophes
 * Comprehensive, HTML-entities-aware tool to typographically-correct the apostrophes and single/double quotes
 * Version: 1.4.7
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-apostrophes/
 */

import{rApply as s}from"ranges-apply";const o="1.4.7";function e(s,{from:o,to:e,value:r,convertEntities:u=!0,convertApostrophes:t=!0,offsetBy:i}){if(!Number.isInteger(o)||o<0)throw new Error(`string-apostrophes: [THROW_ID_01] options objects key "to", a starting string index, is wrong! It was given as ${o} (type ${typeof o})`);Number.isInteger(e)||(e=o+1);const l=[],c="‘",p="’",q="“",n="”",h="′",a="″",d=[".",",",";","!","?"];function w(s){return"string"==typeof s&&s.charCodeAt(0)>=48&&s.charCodeAt(0)<=57}function C(s){return"string"==typeof s&&!!s.length&&s.toUpperCase()!==s.toLowerCase()}return r&&["'",c,p,h].includes(r)||e===o+1&&["'",c,p,h].includes(s[o])?s[o-1]&&s[e]&&w(s[o-1])&&!C(s[e])?t&&s.slice(o,e)!==(u?"&prime;":h)&&r!==(u?"&prime;":h)?l.push([o,e,u?"&prime;":h]):t||"'"===s.slice(o,e)||"'"===r||l.push([o,e,"'"]):s[e]&&s[e+1]&&"n"===s[e]&&s.slice(o,e)===s.slice(e+1,e+1+(e-o))?t&&s.slice(o,e+2)!==(u?"&rsquo;n&rsquo;":`${p}n${p}`)&&r!==(u?"&rsquo;n&rsquo;":`${p}n${p}`)?(l.push([o,e+2,u?"&rsquo;n&rsquo;":`${p}n${p}`]),"function"==typeof i&&i(2)):t||"'n'"===s.slice(o,e+2)||"'n'"===r||(l.push([o,e+2,"'n'"]),"function"==typeof i&&i(2)):s[e]&&"t"===s[e].toLowerCase()&&(!s[e+1]||!s[e+1].trim()||"i"===s[e+1].toLowerCase())||s[e]&&s[e+2]&&"t"===s[e].toLowerCase()&&"w"===s[e+1].toLowerCase()&&("a"===s[e+2].toLowerCase()||"e"===s[e+2].toLowerCase()||"i"===s[e+2].toLowerCase()||"o"===s[e+2].toLowerCase())||s[e]&&s[e+1]&&"e"===s[e].toLowerCase()&&"m"===s[e+1].toLowerCase()||s[e]&&s[e+4]&&"c"===s[e].toLowerCase()&&"a"===s[e+1].toLowerCase()&&"u"===s[e+2].toLowerCase()&&"s"===s[e+3].toLowerCase()&&"e"===s[e+4].toLowerCase()||s[e]&&w(s[e])?t&&s.slice(o,e)!==(u?"&rsquo;":p)&&r!==(u?"&rsquo;":p)?l.push([o,e,u?"&rsquo;":p]):t||"'"===s.slice(o,e)||"'"===r||l.push([o,e,"'"]):s[o-1]&&s[e]&&d.includes(s[o-1])?s[e].trim()?'"'===s[e]&&s[e+1]&&!s[e+1].trim()&&(t&&s.slice(o,e+1)!==(u?"&rsquo;&rdquo;":`${p}${n}`)&&r!==(u?"&rsquo;&rdquo;":`${p}${n}`)?(l.push([o,e+1,""+(u?"&rsquo;&rdquo;":`${p}${n}`)]),"function"==typeof i&&i(1)):t||"'\""===s.slice(o,e+1)||"'\""===r||(l.push([o,e+1,"'\""]),"function"==typeof i&&i(1))):t&&s.slice(o,e)!==(u?"&rsquo;":p)&&r!==(u?"&rsquo;":p)?l.push([o,e,u?"&rsquo;":p]):t||"'"===s.slice(o,e)||"'"===r||l.push([o,e,"'"]):0===o&&s.slice(e).trim()?t&&s.slice(o,e)!==(u?"&lsquo;":c)&&r!==(u?"&lsquo;":c)?l.push([o,e,u?"&lsquo;":c]):t||"'"===s.slice(o,e)||"'"===r||l.push([o,e,"'"]):!s[e]&&s.slice(0,o).trim()?t&&s.slice(o,e)!==(u?"&rsquo;":p)&&r!==(u?"&rsquo;":p)?l.push([o,e,u?"&rsquo;":p]):t||"'"===s.slice(o,e)||"'"===r||l.push([o,e,"'"]):s[o-1]&&s[e]&&(C(s[o-1])||w(s[o-1]))&&(C(s[e])||w(s[e]))?t?(s[e]&&s[o-5]&&"h"===s[o-5].toLowerCase()&&"a"===s[o-4].toLowerCase()&&"w"===s[o-3].toLowerCase()&&"a"===s[o-2].toLowerCase()&&"i"===s[o-1].toLowerCase()&&"i"===s[e].toLowerCase()||s[o-1]&&"o"===s[o-1].toLowerCase()&&s[e+2]&&"a"===s[e].toLowerCase()&&"h"===s[e+1].toLowerCase()&&"u"===s[e+2].toLowerCase())&&s.slice(o,e)!==(u?"&lsquo;":c)&&r!==(u?"&lsquo;":c)?l.push([o,e,u?"&lsquo;":c]):s.slice(o,e)!==(u?"&rsquo;":p)&&r!==(u?"&rsquo;":p)&&l.push([o,e,u?"&rsquo;":p]):"'"!==s.slice(o,e)&&"'"!==r&&l.push([o,e,"'"]):s[e]&&(C(s[e])||w(s[e]))?t&&s.slice(o,e)!==(u?"&lsquo;":c)&&r!==(u?"&lsquo;":c)?l.push([o,e,u?"&lsquo;":c]):t||"'"===s.slice(o,e)||"'"===r||l.push([o,e,"'"]):C(s[o-1])||w(s[o-1])?t&&s.slice(o,e)!==(u?"&rsquo;":p)&&r!==(u?"&rsquo;":p)?l.push([o,e,u?"&rsquo;":p]):t||"'"===s.slice(o,e)||"'"===r||l.push([o,e,"'"]):s[o-1]&&!s[o-1].trim()?t&&s.slice(o,e)!==(u?"&lsquo;":c)&&r!==(u?"&lsquo;":c)?l.push([o,e,u?"&lsquo;":c]):t||"'"===s.slice(o,e)||"'"===r||l.push([o,e,"'"]):s[e]&&!s[e].trim()&&(t&&s.slice(o,e)!==(u?"&rsquo;":p)&&r!==(u?"&rsquo;":p)?l.push([o,e,u?"&rsquo;":p]):t||"'"===s.slice(o,e)||"'"===r||l.push([o,e,"'"])):(['"',q,n,a].includes(r)||e===o+1&&['"',q,n,a].includes(s[o]))&&(s[o-1]&&w(s[o-1])&&s[e]&&"'"!==s[e]&&'"'!==s[e]&&s[e]!==p&&s[e]!==n&&s[e]!==c&&s[e]!==q?t&&s.slice(o,e)!==(u?"&Prime;":a)&&r!==(u?"&Prime;":a)?l.push([o,e,u?"&Prime;":a]):t||'"'===s.slice(o,e)||'"'===r||l.push([o,e,'"']):s[o-1]&&s[e]&&d.includes(s[o-1])?s[e].trim()?"'"===s[e]&&s[e+1]&&!s[e+1].trim()&&(t&&s.slice(o,e+1)!==(u?"&rdquo;&rsquo;":`${n}${p}`)&&r!==(u?"&rdquo;&rsquo;":`${n}${p}`)?(l.push([o,e+1,u?"&rdquo;&rsquo;":`${n}${p}`]),"function"==typeof i&&i(1)):t||"\"'"===s.slice(o,e+1)||"\"'"===r||(l.push([o,e+1,"\"'"]),"function"==typeof i&&i(1))):t&&s.slice(o,e)!==(u?"&rdquo;":n)&&r!==(u?"&rdquo;":n)?l.push([o,e,u?"&rdquo;":n]):t||'"'===s.slice(o,e)||'"'===r||l.push([o,e,'"']):0===o&&s[e]&&s.slice(e).trim()?t&&s.slice(o,e)!==(u?"&ldquo;":q)&&r!==(u?"&ldquo;":q)?l.push([o,e,u?"&ldquo;":q]):t||'"'===s.slice(o,e)||'"'===r||l.push([o,e,'"']):!s[e]&&s.slice(0,o).trim()?t&&s.slice(o,e)!==(u?"&rdquo;":n)&&r!==(u?"&rdquo;":n)?l.push([o,e,u?"&rdquo;":n]):t||'"'===s.slice(o,e)||'"'===r||l.push([o,e,'"']):s[e]&&(C(s[e])||w(s[e]))?t&&s.slice(o,e)!==(u?"&ldquo;":q)&&r!==(u?"&ldquo;":q)?l.push([o,e,u?"&ldquo;":q]):t||'"'===s.slice(o,e)||'"'===r||l.push([o,e,'"']):s[o-1]&&(C(s[o-1])||w(s[o-1]))?t&&s.slice(o,e)!==(u?"&rdquo;":n)&&r!==(u?"&rdquo;":n)?l.push([o,e,u?"&rdquo;":n]):t||'"'===s.slice(o,e)||'"'===r||l.push([o,e,'"']):s[o-1]&&!s[o-1].trim()?t&&s.slice(o,e)!==(u?"&ldquo;":q)&&r!==(u?"&ldquo;":q)?l.push([o,e,u?"&ldquo;":q]):t||'"'===s.slice(o,e)||'"'===r||l.push([o,e,'"']):s[e]&&!s[e].trim()&&(t&&s.slice(o,e)!==(u?"&rdquo;":n)&&r!==(u?"&rdquo;":n)?l.push([o,e,u?"&rdquo;":n]):t||'"'===s.slice(o,e)||'"'===r||l.push([o,e,'"']))),l}function r(o,r){let u=[];const t={convertApostrophes:!0,convertEntities:!1,...r};for(let s=0,r=o.length;s<r;s++){t.from=s,t.offsetBy=o=>{s+=o};const r=e(o,t);Array.isArray(r)&&r.length&&(u=u.concat(r))}return{result:s(o,u),ranges:u}}export{r as convertAll,e as convertOne,o as version};
