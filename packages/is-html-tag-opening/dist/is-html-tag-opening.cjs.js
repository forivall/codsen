/**
 * is-html-tag-opening
 * Is given opening bracket a beginning of a tag?
 * Version: 1.6.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/is-html-tag-opening
 */

'use strict';

var stringMatchLeftRight = require('string-match-left-right');

var BACKSLASH = "\\";
var knownHtmlTags = ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "doctype",
"dt", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h1 - h6", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "math", "menu", "menuitem", "meta", "meter", "nav", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xml"];
function isStr(something) {
  return typeof something === "string";
}
function isNotLetter(_char) {
  return _char === undefined || _char.toUpperCase() === _char.toLowerCase() && !"0123456789".includes(_char);
}
function isOpening(str) {
  var idx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var originalOpts = arguments.length > 2 ? arguments[2] : undefined;
  var defaults = {
    allowCustomTagNames: false,
    skipOpeningBracket: false
  };
  var opts = Object.assign({}, defaults, originalOpts);
  var whitespaceChunk = "[\\\\ \\t\\r\\n/]*";
  var generalChar = "._a-z0-9\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\uFFFF";
  var r1 = new RegExp("^".concat(opts.skipOpeningBracket ? "" : "<").concat(whitespaceChunk, "\\w+").concat(whitespaceChunk, ">"), "g");
  var r5 = new RegExp("^".concat(opts.skipOpeningBracket ? "" : "<").concat(whitespaceChunk, "[").concat(generalChar, "]+[-").concat(generalChar, "]*").concat(whitespaceChunk, ">"), "g");
  var r2 = new RegExp("^".concat(opts.skipOpeningBracket ? "" : "<", "\\s*\\w+\\s+\\w+(?:-\\w+)?\\s*=\\s*['\"\\w]"), "g");
  var r6 = new RegExp("^".concat(opts.skipOpeningBracket ? "" : "<", "\\s*\\w+\\s+[").concat(generalChar, "]+[-").concat(generalChar, "]*(?:-\\w+)?\\s*=\\s*['\"\\w]"));
  var r3 = new RegExp("^".concat(opts.skipOpeningBracket ? "" : "<", "\\s*\\/?\\s*\\w+\\s*\\/?\\s*>"), "g");
  var r7 = new RegExp("^".concat(opts.skipOpeningBracket ? "" : "<", "\\s*\\/?\\s*[").concat(generalChar, "]+[-").concat(generalChar, "]*\\s*\\/?\\s*>"), "g");
  var r4 = new RegExp("^".concat(opts.skipOpeningBracket ? "" : "<").concat(whitespaceChunk, "\\w+(?:\\s*\\w+)*\\s*\\w+=['\"]"), "g");
  var r8 = new RegExp("^".concat(opts.skipOpeningBracket ? "" : "<").concat(whitespaceChunk, "[").concat(generalChar, "]+[-").concat(generalChar, "]*(?:\\s*\\w+)*\\s*\\w+=['\"]"), "g");
  var whatToTest = idx ? str.slice(idx) : str;
  var passed = false;
  if (opts.allowCustomTagNames) {
    if (r5.test(whatToTest)) {
      passed = true;
    } else if (r6.test(whatToTest)) {
      passed = true;
    } else if (r7.test(whatToTest)) {
      passed = true;
    } else if (r8.test(whatToTest)) {
      passed = true;
    }
  } else {
    if (r1.test(whatToTest)) {
      passed = true;
    } else if (r2.test(whatToTest)) {
      passed = true;
    } else if (r3.test(whatToTest)) {
      passed = true;
    } else if (r4.test(whatToTest)) {
      passed = true;
    }
  }
  var matchingOptions = {
    cb: isNotLetter,
    i: true,
    trimCharsBeforeMatching: ["/", BACKSLASH, "!", " ", "\t", "\n", "\r"]
  };
  if (!passed && (opts.skipOpeningBracket && stringMatchLeftRight.matchRightIncl(str, idx, knownHtmlTags, matchingOptions) || str[idx] === "<" && str[idx + 1].trim().length && stringMatchLeftRight.matchRight(str, idx, knownHtmlTags, matchingOptions))) {
    passed = true;
  }
  var res = isStr(str) && idx < str.length && passed;
  return res;
}

module.exports = isOpening;
