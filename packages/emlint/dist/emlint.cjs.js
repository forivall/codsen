/**
 * emlint
 * Pluggable email template code linter
 * Version: 2.6.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/emlint
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tokenizer = _interopDefault(require('codsen-tokenizer'));
var defineLazyProp = _interopDefault(require('define-lazy-prop'));
var clone = _interopDefault(require('lodash.clonedeep'));
var matcher = _interopDefault(require('matcher'));
var stringLeftRight = require('string-left-right');
var isObj = _interopDefault(require('lodash.isplainobject'));
var isRegExp = _interopDefault(require('lodash.isregexp'));
var db = _interopDefault(require('mime-db'));
var isUrl = _interopDefault(require('is-url-superb'));
var htmlEntitiesNotEmailFriendly$1 = require('html-entities-not-email-friendly');
var he = _interopDefault(require('he'));
var lineColumn = _interopDefault(require('line-column'));
var stringFixBrokenNamedEntities = _interopDefault(require('string-fix-broken-named-entities'));

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var allBadCharacterRules = [
	"bad-character-acknowledge",
	"bad-character-activate-arabic-form-shaping",
	"bad-character-activate-symmetric-swapping",
	"bad-character-application-program-command",
	"bad-character-backspace",
	"bad-character-bell",
	"bad-character-break-permitted-here",
	"bad-character-cancel",
	"bad-character-cancel-character",
	"bad-character-character-tabulation-set",
	"bad-character-character-tabulation-with-justification",
	"bad-character-control-0080",
	"bad-character-control-0081",
	"bad-character-control-0084",
	"bad-character-control-0099",
	"bad-character-control-sequence-introducer",
	"bad-character-data-link-escape",
	"bad-character-delete",
	"bad-character-device-control-four",
	"bad-character-device-control-one",
	"bad-character-device-control-string",
	"bad-character-device-control-three",
	"bad-character-device-control-two",
	"bad-character-em-quad",
	"bad-character-em-space",
	"bad-character-en-quad",
	"bad-character-en-space",
	"bad-character-end-of-medium",
	"bad-character-end-of-protected-area",
	"bad-character-end-of-selected-area",
	"bad-character-end-of-text",
	"bad-character-end-of-transmission",
	"bad-character-end-of-transmission-block",
	"bad-character-enquiry",
	"bad-character-escape",
	"bad-character-figure-space",
	"bad-character-first-strong-isolate",
	"bad-character-form-feed",
	"bad-character-four-per-em-space",
	"bad-character-function-application",
	"bad-character-hair-space",
	"bad-character-ideographic-space",
	"bad-character-information-separator-four",
	"bad-character-information-separator-one",
	"bad-character-information-separator-three",
	"bad-character-information-separator-two",
	"bad-character-inhibit-arabic-form-shaping",
	"bad-character-inhibit-symmetric-swapping",
	"bad-character-interlinear-annotation-anchor",
	"bad-character-interlinear-annotation-separator",
	"bad-character-interlinear-annotation-terminator",
	"bad-character-invisible-plus",
	"bad-character-invisible-separator",
	"bad-character-invisible-times",
	"bad-character-left-to-right-embedding",
	"bad-character-left-to-right-isolate",
	"bad-character-left-to-right-mark",
	"bad-character-left-to-right-override",
	"bad-character-line-separator",
	"bad-character-line-tabulation",
	"bad-character-line-tabulation-set",
	"bad-character-medium-mathematical-space",
	"bad-character-message-waiting",
	"bad-character-narrow-no-break-space",
	"bad-character-national-digit-shapes",
	"bad-character-negative-acknowledge",
	"bad-character-next-line",
	"bad-character-no-break-here",
	"bad-character-nominal-digit-shapes",
	"bad-character-non-breaking-space",
	"bad-character-null",
	"bad-character-ogham-space-mark",
	"bad-character-operating-system-command",
	"bad-character-paragraph-separator",
	"bad-character-partial-line-backward",
	"bad-character-partial-line-forward",
	"bad-character-pop-directional-formatting",
	"bad-character-pop-directional-isolate",
	"bad-character-private-message",
	"bad-character-private-use-1",
	"bad-character-private-use-2",
	"bad-character-punctuation-space",
	"bad-character-replacement-character",
	"bad-character-reverse-line-feed",
	"bad-character-right-to-left-embedding",
	"bad-character-right-to-left-isolate",
	"bad-character-right-to-left-mark",
	"bad-character-right-to-left-override",
	"bad-character-set-transmit-state",
	"bad-character-shift-in",
	"bad-character-shift-out",
	"bad-character-single-character-introducer",
	"bad-character-single-shift-three",
	"bad-character-single-shift-two",
	"bad-character-six-per-em-space",
	"bad-character-soft-hyphen",
	"bad-character-start-of-heading",
	"bad-character-start-of-protected-area",
	"bad-character-start-of-selected-area",
	"bad-character-start-of-string",
	"bad-character-start-of-text",
	"bad-character-string-terminator",
	"bad-character-substitute",
	"bad-character-synchronous-idle",
	"bad-character-tabulation",
	"bad-character-thin-space",
	"bad-character-three-per-em-space",
	"bad-character-word-joiner",
	"bad-character-zero-width-joiner",
	"bad-character-zero-width-no-break-space",
	"bad-character-zero-width-non-joiner",
	"bad-character-zero-width-space"
];

var allTagRules = [
	"tag-bold",
	"tag-closing-backslash",
	"tag-is-present",
	"tag-name-case",
	"tag-space-after-opening-bracket",
	"tag-space-before-closing-slash",
	"tag-space-between-slash-and-bracket",
	"tag-void-slash"
];

var allAttribRules = [
	"attribute-malformed"
];

var allBadNamedHTMLEntityRules = [
	"bad-malformed-numeric-character-entity",
	"bad-named-html-entity-malformed-nbsp",
	"bad-named-html-entity-multiple-encoding",
	"bad-named-html-entity-not-email-friendly",
	"bad-named-html-entity-unrecognised"
];

var knownUnits = ["cm", "mm", "in", "px", "pt", "pc", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "%"];
var knownCharsets = ["adobe-standard-encoding", "adobe-symbol-encoding", "amiga-1251", "ansi_x3.110-1983", "asmo_449", "big5", "big5-hkscs", "bocu-1", "brf", "bs_4730", "bs_viewdata", "cesu-8", "cp50220", "cp51932", "csa_z243.4-1985-1", "csa_z243.4-1985-2", "csa_z243.4-1985-gr", "csn_369103", "dec-mcs", "din_66003", "dk-us", "ds_2089", "ebcdic-at-de", "ebcdic-at-de-a", "ebcdic-ca-fr", "ebcdic-dk-no", "ebcdic-dk-no-a", "ebcdic-es", "ebcdic-es-a", "ebcdic-es-s", "ebcdic-fi-se", "ebcdic-fi-se-a", "ebcdic-fr", "ebcdic-it", "ebcdic-pt", "ebcdic-uk", "ebcdic-us", "ecma-cyrillic", "es", "es2", "euc-kr", "extended_unix_code_fixed_width_for_japanese", "extended_unix_code_packed_format_for_japanese", "gb18030", "gb2312", "gb_1988-80", "gb_2312-80", "gbk", "gost_19768-74", "greek-ccitt", "greek7", "greek7-old", "hp-desktop", "hp-legal", "hp-math8", "hp-pi-font", "hp-roman8", "hz-gb-2312", "ibm-symbols", "ibm-thai", "ibm00858", "ibm00924", "ibm01140", "ibm01141", "ibm01142", "ibm01143", "ibm01144", "ibm01145", "ibm01146", "ibm01147", "ibm01148", "ibm01149", "ibm037", "ibm038", "ibm1026", "ibm1047", "ibm273", "ibm274", "ibm275", "ibm277", "ibm278", "ibm280", "ibm281", "ibm284", "ibm285", "ibm290", "ibm297", "ibm420", "ibm423", "ibm424", "ibm437", "ibm500", "ibm775", "ibm850", "ibm851", "ibm852", "ibm855", "ibm857", "ibm860", "ibm861", "ibm862", "ibm863", "ibm864", "ibm865", "ibm866", "ibm868", "ibm869", "ibm870", "ibm871", "ibm880", "ibm891", "ibm903", "ibm904", "ibm905", "ibm918", "iec_p27-1", "inis", "inis-8", "inis-cyrillic", "invariant", "iso-10646-j-1", "iso-10646-ucs-2", "iso-10646-ucs-4", "iso-10646-ucs-basic", "iso-10646-unicode-latin1", "iso-10646-utf-1", "iso-11548-1", "iso-2022-cn", "iso-2022-cn-ext", "iso-2022-jp", "iso-2022-jp-2", "iso-2022-kr", "iso-8859-1-windows-3.0-latin-1", "iso-8859-1-windows-3.1-latin-1", "iso-8859-10", "iso-8859-13", "iso-8859-14", "iso-8859-15", "iso-8859-16", "iso-8859-2-windows-latin-2", "iso-8859-9-windows-latin-5", "iso-ir-90", "iso-unicode-ibm-1261", "iso-unicode-ibm-1264", "iso-unicode-ibm-1265", "iso-unicode-ibm-1268", "iso-unicode-ibm-1276", "iso_10367-box", "iso_2033-1983", "iso_5427", "iso_5427:1981", "iso_5428:1980", "iso_646.basic:1983", "iso_646.irv:1983", "iso_6937-2-25", "iso_6937-2-add", "iso_8859-1:1987", "iso_8859-2:1987", "iso_8859-3:1988", "iso_8859-4:1988", "iso_8859-5:1988", "iso_8859-6-e", "iso_8859-6-i", "iso_8859-6:1987", "iso_8859-7:1987", "iso_8859-8-e", "iso_8859-8-i", "iso_8859-8:1988", "iso_8859-9:1989", "iso_8859-supp", "it", "jis_c6220-1969-jp", "jis_c6220-1969-ro", "jis_c6226-1978", "jis_c6226-1983", "jis_c6229-1984-a", "jis_c6229-1984-b", "jis_c6229-1984-b-add", "jis_c6229-1984-hand", "jis_c6229-1984-hand-add", "jis_c6229-1984-kana", "jis_encoding", "jis_x0201", "jis_x0212-1990", "jus_i.b1.002", "jus_i.b1.003-mac", "jus_i.b1.003-serb", "koi7-switched", "koi8-r", "koi8-u", "ks_c_5601-1987", "ksc5636", "kz-1048", "latin-greek", "latin-greek-1", "latin-lap", "macintosh", "microsoft-publishing", "mnem", "mnemonic", "msz_7795.3", "nats-dano", "nats-dano-add", "nats-sefi", "nats-sefi-add", "nc_nc00-10:81", "nf_z_62-010", "nf_z_62-010_(1973)", "ns_4551-1", "ns_4551-2", "osd_ebcdic_df03_irv", "osd_ebcdic_df04_1", "osd_ebcdic_df04_15", "pc8-danish-norwegian", "pc8-turkish", "pt", "pt2", "ptcp154", "scsu", "sen_850200_b", "sen_850200_c", "shift_jis", "t.101-g2", "t.61-7bit", "t.61-8bit", "tis-620", "tscii", "unicode-1-1", "unicode-1-1-utf-7", "unknown-8bit", "us-ascii", "us-dk", "utf-16", "utf-16be", "utf-16le", "utf-32", "utf-32be", "utf-32le", "utf-7", "utf-8", "ventura-international", "ventura-math", "ventura-us", "videotex-suppl", "viqr", "viscii", "windows-1250", "windows-1251", "windows-1252", "windows-1253", "windows-1254", "windows-1255", "windows-1256", "windows-1257", "windows-1258", "windows-31j", "windows-874"];
var basicColorNames = {
  aqua: "#00ffff",
  black: "#000000",
  blue: "#0000ff",
  fuchsia: "#ff00ff",
  gray: "#808080",
  green: "#008000",
  lime: "#00ff00",
  maroon: "#800000",
  navy: "#000080",
  olive: "#808000",
  purple: "#800080",
  red: "#ff0000",
  silver: "#c0c0c0",
  teal: "#008080",
  white: "#ffffff",
  yellow: "#ffff00"
};
var extendedColorNames = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgrey: "#a9a9a9",
  darkgreen: "#006400",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gray: "#808080",
  grey: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgrey: "#d3d3d3",
  lightgreen: "#90ee90",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
var sixDigitHexColorRegex = /^#([a-f0-9]{6})$/i;
var classNameRegex = /^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/;

function checkForWhitespace(str, idxOffset) {
  console.log("005 ".concat("\x1B[".concat(35, "m", "checkForWhitespace() called", "\x1B[", 39, "m"), "\ninput args:\n", JSON.stringify(Array.prototype.slice.call(arguments), null, 4)));
  var charStart = 0;
  var charEnd = str.length;
  var trimmedVal;
  var gatheredRanges = [];
  var errorArr = [];
  if (!str.length || !str[0].trim().length) {
    charStart = stringLeftRight.right(str);
    if (!str.length || charStart === null) {
      charEnd = null;
      errorArr.push({
        idxFrom: idxOffset,
        idxTo: idxOffset + str.length,
        message: "Missing value.",
        fix: null
      });
    } else {
      gatheredRanges.push([idxOffset, idxOffset + charStart]);
    }
  }
  if (charEnd && !str[str.length - 1].trim().length) {
    charEnd = stringLeftRight.left(str, str.length - 1) + 1;
    console.log("040 ".concat("\x1B[".concat(33, "m", "charEnd", "\x1B[", 39, "m"), " = ", JSON.stringify(charEnd, null, 4)));
    gatheredRanges.push([idxOffset + charEnd, idxOffset + str.length]);
  }
  console.log("049 ".concat("\x1B[".concat(33, "m", "gatheredRanges", "\x1B[", 39, "m"), " = ", JSON.stringify(gatheredRanges, null, 4)));
  if (!gatheredRanges.length) {
    trimmedVal = str;
  } else {
    errorArr.push({
      idxFrom: gatheredRanges[0][0],
      idxTo: gatheredRanges[gatheredRanges.length - 1][1],
      message: "Remove whitespace.",
      fix: {
        ranges: gatheredRanges
      }
    });
    gatheredRanges = [];
    trimmedVal = str.trim();
  }
  console.log("069");
  return {
    charStart: charStart,
    charEnd: charEnd,
    errorArr: errorArr,
    trimmedVal: trimmedVal
  };
}

function validateDigitAndUnit(str, idxOffset, opts) {
  console.log("025 ".concat("\x1B[".concat(35, "m", "validateDigitAndUnit() called", "\x1B[", 39, "m"), "\ninput args:\n", JSON.stringify(Array.prototype.slice.call(arguments), null, 4)));
  var _checkForWhitespace = checkForWhitespace(str, idxOffset),
      charStart = _checkForWhitespace.charStart,
      charEnd = _checkForWhitespace.charEnd,
      errorArr = _checkForWhitespace.errorArr;
  if (Number.isInteger(charStart)) {
    if (!"0123456789".includes(str[charStart]) && !"0123456789".includes(str[charEnd - 1])) {
      errorArr.push({
        idxFrom: idxOffset + charStart,
        idxTo: idxOffset + charEnd,
        message: "Digits missing.",
        fix: null
      });
    } else if ("0123456789".includes(str[charStart]) && "0123456789".includes(str[charEnd - 1]) && !opts.noUnitsIsFine) {
      errorArr.push({
        idxFrom: idxOffset + charStart,
        idxTo: idxOffset + charEnd,
        message: "Units missing.",
        fix: null
      });
    } else {
      console.log("062 separate digits from units, evaluate both");
      for (var i = charStart; i < charEnd; i++) {
        console.log("".concat("\x1B[".concat(36, "m", "str[".concat(i, "]"), "\x1B[", 39, "m"), " = ", JSON.stringify(str[i], null, 0)));
        if (!"0123456789".includes(str[i])) {
          var endPart = str.slice(i);
          console.log("074 ".concat("\x1B[".concat(33, "m", "endPart", "\x1B[", 39, "m"), " = ", JSON.stringify(endPart, null, 4)));
          if (isObj(opts) && Array.isArray(opts.badUnits) && opts.badUnits.includes(endPart)) {
            if (endPart === "px") {
              errorArr.push({
                idxFrom: idxOffset + i,
                idxTo: idxOffset + charEnd,
                message: "Remove px.",
                fix: {
                  ranges: [[idxOffset + i, idxOffset + charEnd]]
                }
              });
            } else {
              errorArr.push({
                idxFrom: idxOffset + i,
                idxTo: idxOffset + charEnd,
                message: "Bad unit.",
                fix: null
              });
            }
          } else if (!knownUnits.includes(endPart)) {
            var message = "Unrecognised unit.";
            if (/\d/.test(endPart)) {
              message = "Messy value.";
            } else if (knownUnits.includes(endPart.trim())) {
              message = "Rogue whitespace.";
            }
            errorArr.push({
              idxFrom: idxOffset + i,
              idxTo: idxOffset + charEnd,
              message: message,
              fix: null
            });
          }
          break;
        }
      }
    }
  }
  return errorArr;
}

function validateDigitOnly(str, idxOffset, opts) {
  console.log("008 ".concat("\x1B[".concat(35, "m", "validateDigitOnly() called", "\x1B[", 39, "m"), "\ninput args:\n", JSON.stringify(Array.prototype.slice.call(arguments), null, 4)));
  var _checkForWhitespace = checkForWhitespace(str, idxOffset),
      charStart = _checkForWhitespace.charStart,
      charEnd = _checkForWhitespace.charEnd,
      errorArr = _checkForWhitespace.errorArr;
  if (Number.isInteger(charStart)) {
    for (var i = charStart; i < charEnd; i++) {
      if (!"0123456789".includes(str[i]) && (opts.type === "integer" || opts.type === "rational" && !["."].includes(str[i])) && (!opts.percOK || !(str[i] === "%" && charEnd === i + 1)) && (!opts.negativeOK || str[i] !== "-")) {
        console.log("028 ".concat("\x1B[".concat(36, "m", "looping", "\x1B[", 39, "m"), " ", "\x1B[".concat(33, "m", "str[".concat(i, "]"), "\x1B[", 39, "m"), " = ", JSON.stringify(str[i], null, 0)));
        errorArr.push({
          idxFrom: idxOffset + i,
          idxTo: idxOffset + charEnd,
          message: "Should be ".concat(opts.type).concat(opts.percOK ? ", either no units or percentage" : ", no units", "."),
          fix: null
        });
        break;
      }
    }
  }
  return errorArr;
}

function includesWithRegex(arr, whatToMatch) {
  console.log("004 includesWithRegex() called to match \"".concat(whatToMatch, "\""));
  if (!Array.isArray(arr) || !arr.length) {
    console.log("007 includesWithRegex() quick end, return false");
    return false;
  }
  return arr.some(function (val) {
    return typeof val === "string" && whatToMatch === val || isRegExp(val) && val.test(whatToMatch);
  });
}

function validateString(str, idxOffset, opts) {
  var _checkForWhitespace = checkForWhitespace(str, idxOffset),
      charStart = _checkForWhitespace.charStart,
      charEnd = _checkForWhitespace.charEnd,
      errorArr = _checkForWhitespace.errorArr;
  if (Number.isInteger(charStart)) {
    console.log("021 validateString(): processing the value, \"".concat(str, "\""));
    if (opts.canBeCommaSeparated && str.slice(charStart, charEnd).includes(",")) {
      console.log("027 validateString(): comma spotted, value will be split and each chunk matched");
      if (str.slice(charStart, charEnd).includes(",,")) {
        errorArr.push({
          idxFrom: idxOffset + charStart,
          idxTo: idxOffset + charEnd,
          message: "Consecutive commas.",
          fix: null
        });
      } else if (opts.noSpaceAfterComma && /,\s/g.test(str.slice(charStart, charEnd))) {
        var ranges = [];
        for (var i = charStart; i < charEnd; i++) {
          if (str[i] === "," && !str[i + 1].trim().length) {
            ranges.push([idxOffset + i + 1, idxOffset + (stringLeftRight.right(str, i + 1) || str.length)]);
          }
        }
        errorArr.push({
          idxFrom: idxOffset + charStart,
          idxTo: idxOffset + charEnd,
          message: "Whitespace after comma.",
          fix: {
            ranges: ranges
          }
        });
      } else {
        str.slice(charStart, charEnd).split(",").forEach(function (oneOfValues) {
          if (!includesWithRegex(opts.permittedValues, oneOfValues)) {
            errorArr.push({
              idxFrom: idxOffset + charStart,
              idxTo: idxOffset + charEnd,
              message: "Unrecognised value: ".concat(oneOfValues),
              fix: null
            });
          }
        });
      }
    } else {
      console.log("080 validateString(): no comma, the whole value will be matched against the reference list");
      if ((!Array.isArray(opts.quickPermittedValues) || !includesWithRegex(opts.quickPermittedValues, str.slice(charStart, charEnd))) && (!Array.isArray(opts.permittedValues) || !includesWithRegex(opts.permittedValues, str.slice(charStart, charEnd)))) {
        errorArr.push({
          idxFrom: idxOffset + charStart,
          idxTo: idxOffset + charEnd,
          message: "Unrecognised value: \"".concat(str.slice(charStart, charEnd), "\"."),
          fix: null
        });
      }
    }
  }
  return errorArr;
}

function validateColor(str, idxOffset, opts) {
  console.log("011 ".concat("\x1B[".concat(35, "m", "validateColor() called", "\x1B[", 39, "m"), "\ninput args:\n", JSON.stringify(Array.prototype.slice.call(arguments), null, 4)));
  var _checkForWhitespace = checkForWhitespace(str, idxOffset),
      charStart = _checkForWhitespace.charStart,
      charEnd = _checkForWhitespace.charEnd,
      errorArr = _checkForWhitespace.errorArr;
  if (Number.isInteger(charStart)) {
    var attrVal = errorArr.length ? str.slice(charStart, charEnd) : str;
    if (attrVal.length > 1 && isLetter(attrVal[0]) && isLetter(attrVal[1]) && Object.keys(extendedColorNames).includes(attrVal.toLowerCase())) {
      console.log("043 ".concat("\x1B[".concat(32, "m", "known color name \"".concat(attrVal.toLowerCase(), "\" matched"), "\x1B[", 39, "m")));
      if (!opts.namedCssLevel1OK) {
        errorArr.push({
          idxFrom: idxOffset + charStart,
          idxTo: idxOffset + charEnd,
          message: "Named colors (CSS Level 1) not allowed.",
          fix: {
            ranges: [[idxOffset + charStart, idxOffset + charEnd, extendedColorNames[attrVal.toLowerCase()]]]
          }
        });
      } else if (!opts.namedCssLevel2PlusOK && (!opts.namedCssLevel1OK || !Object.keys(basicColorNames).includes(attrVal.toLowerCase()))) {
        errorArr.push({
          idxFrom: idxOffset + charStart,
          idxTo: idxOffset + charEnd,
          message: "Named colors (CSS Level 2+) not allowed.",
          fix: {
            ranges: [[idxOffset + charStart, idxOffset + charEnd, extendedColorNames[attrVal.toLowerCase()]]]
          }
        });
      }
    } else if (attrVal.startsWith("#")) {
      if (attrVal.length !== 7) {
        errorArr.push({
          idxFrom: idxOffset + charStart,
          idxTo: idxOffset + charEnd,
          message: "Hex color code should be 6 digits-long.",
          fix: null
        });
      } else if (!sixDigitHexColorRegex.test(attrVal)) {
        console.log("091 ".concat("\x1B[".concat(32, "m", "attribute's value \"".concat(attrVal.toLowerCase(), "\" didn't pass the sixDigitHexColorRegex regex"), "\x1B[", 39, "m")));
        errorArr.push({
          idxFrom: idxOffset + charStart,
          idxTo: idxOffset + charEnd,
          message: "Unrecognised hex code.",
          fix: null
        });
      } else if (!opts.hexSixOK) {
        errorArr.push({
          idxFrom: idxOffset + charStart,
          idxTo: idxOffset + charEnd,
          message: "Hex colors not allowed.",
          fix: null
        });
      }
    } else if (attrVal.startsWith("rgb(")) {
      errorArr.push({
        idxFrom: idxOffset + charStart,
        idxTo: idxOffset + charEnd,
        message: "rgb() is not allowed.",
        fix: null
      });
    } else {
      errorArr.push({
        idxFrom: idxOffset + charStart,
        idxTo: idxOffset + charEnd,
        message: "Unrecognised color value.",
        fix: null
      });
    }
  }
  return errorArr;
}

var wholeExtensionRegex = /^\.\w+$/g;
function isLetter(str) {
  return typeof str === "string" && str.length === 1 && str.toUpperCase() !== str.toLowerCase();
}
function isEnabled(maybeARulesValue) {
  if (Number.isInteger(maybeARulesValue) && maybeARulesValue > 0) {
    return maybeARulesValue;
  } else if (Array.isArray(maybeARulesValue) && maybeARulesValue.length && Number.isInteger(maybeARulesValue[0]) && maybeARulesValue[0] > 0) {
    return maybeARulesValue[0];
  }
  return 0;
}

function badCharacterNull(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      console.log("011 ".concat("\x1B[".concat(32, "m", "bad-character-null.js", "\x1B[", 39, "m"), ": inside the rule, chr = \"", chr, "\"; i = ").concat(i));
      if (chr.charCodeAt(0) === 0) {
        context.report({
          ruleId: "bad-character-null",
          message: "Bad character - NULL.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterStartOfHeading(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 1) {
        context.report({
          ruleId: "bad-character-start-of-heading",
          message: "Bad character - START OF HEADING.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterStartOfText(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 2) {
        context.report({
          ruleId: "bad-character-start-of-text",
          message: "Bad character - START OF TEXT.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterEndOfText(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 3) {
        context.report({
          ruleId: "bad-character-end-of-text",
          message: "Bad character - END OF TEXT.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1, "\n"]]
          }
        });
      }
    }
  };
}

function badCharacterEndOfTransmission(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 4) {
        context.report({
          ruleId: "bad-character-end-of-transmission",
          message: "Bad character - END OF TRANSMISSION.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterEnquiry(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 5) {
        context.report({
          ruleId: "bad-character-enquiry",
          message: "Bad character - ENQUIRY.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterAcknowledge(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 6) {
        context.report({
          ruleId: "bad-character-acknowledge",
          message: "Bad character - ACKNOWLEDGE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterBell(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 7) {
        context.report({
          ruleId: "bad-character-bell",
          message: "Bad character - BELL.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterBackspace(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8) {
        context.report({
          ruleId: "bad-character-backspace",
          message: "Bad character - BACKSPACE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterTabulation(context) {
  for (var _len = arguments.length, originalOpts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    originalOpts[_key - 1] = arguments[_key];
  }
  console.log("".concat("\x1B[".concat(33, "m", "originalOpts", "\x1B[", 39, "m"), " = ", JSON.stringify(originalOpts, null, 4)));
  var mode = "never";
  if (Array.isArray(originalOpts) && originalOpts[0] && typeof originalOpts[0] === "string" && originalOpts[0].toLowerCase() === "indentationisfine") {
    mode = "indentationIsFine";
  }
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 9) {
        if (mode === "never") {
          context.report({
            ruleId: "bad-character-tabulation",
            message: "Bad character - TABULATION.",
            idxFrom: i,
            idxTo: i + 1,
            fix: {
              ranges: [[i, i + 1, " "]]
            }
          });
        } else if (mode === "indentationIsFine") {
          var charTopOnBreaksIdx = stringLeftRight.leftStopAtNewLines(context.str, i);
          if (charTopOnBreaksIdx !== null && context.str[charTopOnBreaksIdx].trim().length) {
            context.report({
              ruleId: "bad-character-tabulation",
              message: "Bad character - TABULATION.",
              idxFrom: i,
              idxTo: i + 1,
              fix: {
                ranges: [[i, i + 1, " "]]
              }
            });
          }
        }
      }
    }
  };
}

function badCharacterLineTabulation(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 11) {
        context.report({
          ruleId: "bad-character-line-tabulation",
          message: "Bad character - LINE TABULATION.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterFormFeed(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 12) {
        context.report({
          ruleId: "bad-character-form-feed",
          message: "Bad character - FORM FEED.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterShiftOut(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 14) {
        context.report({
          ruleId: "bad-character-shift-out",
          message: "Bad character - SHIFT OUT.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterShiftIn(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 15) {
        context.report({
          ruleId: "bad-character-shift-in",
          message: "Bad character - SHIFT IN.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterDataLinkEscape(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 16) {
        context.report({
          ruleId: "bad-character-data-link-escape",
          message: "Bad character - DATA LINK ESCAPE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterDeviceControlOne(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 17) {
        context.report({
          ruleId: "bad-character-device-control-one",
          message: "Bad character - DEVICE CONTROL ONE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterDeviceControlTwo(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 18) {
        context.report({
          ruleId: "bad-character-device-control-two",
          message: "Bad character - DEVICE CONTROL TWO.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterDeviceControlThree(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 19) {
        context.report({
          ruleId: "bad-character-device-control-three",
          message: "Bad character - DEVICE CONTROL THREE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterDeviceControlFour(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 20) {
        context.report({
          ruleId: "bad-character-device-control-four",
          message: "Bad character - DEVICE CONTROL FOUR.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterNegativeAcknowledge(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 21) {
        context.report({
          ruleId: "bad-character-negative-acknowledge",
          message: "Bad character - NEGATIVE ACKNOWLEDGE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterSynchronousIdle(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 22) {
        context.report({
          ruleId: "bad-character-synchronous-idle",
          message: "Bad character - SYNCHRONOUS IDLE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterEndOfTransmissionBlock(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 23) {
        context.report({
          ruleId: "bad-character-end-of-transmission-block",
          message: "Bad character - END OF TRANSMISSION BLOCK.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterCancel(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 24) {
        context.report({
          ruleId: "bad-character-cancel",
          message: "Bad character - CANCEL.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterEndOfMedium(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 25) {
        context.report({
          ruleId: "bad-character-end-of-medium",
          message: "Bad character - END OF MEDIUM.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterSubstitute(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 26) {
        context.report({
          ruleId: "bad-character-substitute",
          message: "Bad character - SUBSTITUTE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterEscape(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 27) {
        context.report({
          ruleId: "bad-character-escape",
          message: "Bad character - ESCAPE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterInformationSeparatorFour(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 28) {
        context.report({
          ruleId: "bad-character-information-separator-four",
          message: "Bad character - INFORMATION SEPARATOR FOUR.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterInformationSeparatorThree(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 29) {
        context.report({
          ruleId: "bad-character-information-separator-three",
          message: "Bad character - INFORMATION SEPARATOR THREE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterInformationSeparatorTwo(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 30) {
        context.report({
          ruleId: "bad-character-information-separator-two",
          message: "Bad character - INFORMATION SEPARATOR TWO.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterInformationSeparatorTwo$1(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 31) {
        context.report({
          ruleId: "bad-character-information-separator-one",
          message: "Bad character - INFORMATION SEPARATOR ONE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterDelete(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 127) {
        context.report({
          ruleId: "bad-character-delete",
          message: "Bad character - DELETE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterControl0080(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 128) {
        context.report({
          ruleId: "bad-character-control-0080",
          message: "Bad character - CONTROL.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterControl0081(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 129) {
        context.report({
          ruleId: "bad-character-control-0081",
          message: "Bad character - CONTROL.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterBreakPermittedHere(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 130) {
        context.report({
          ruleId: "bad-character-break-permitted-here",
          message: "Bad character - BREAK PERMITTED HERE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterNoBreakHere(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 131) {
        context.report({
          ruleId: "bad-character-no-break-here",
          message: "Bad character - NO BREAK HERE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterControl0084(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 132) {
        context.report({
          ruleId: "bad-character-control-0084",
          message: "Bad character - CONTROL.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterNextLine(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 133) {
        context.report({
          ruleId: "bad-character-next-line",
          message: "Bad character - NEXT LINE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterStartOfSelectedArea(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 134) {
        context.report({
          ruleId: "bad-character-start-of-selected-area",
          message: "Bad character - START OF SELECTED AREA.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterEndOfSelectedArea(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 135) {
        context.report({
          ruleId: "bad-character-end-of-selected-area",
          message: "Bad character - END OF SELECTED AREA.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterCharacterTabulationSet(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 136) {
        context.report({
          ruleId: "bad-character-character-tabulation-set",
          message: "Bad character - CHARACTER TABULATION SET.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterCharacterTabulationWithJustification(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 137) {
        context.report({
          ruleId: "bad-character-character-tabulation-with-justification",
          message: "Bad character - CHARACTER TABULATION WITH JUSTIFICATION.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterLineTabulationSet(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 138) {
        context.report({
          ruleId: "bad-character-line-tabulation-set",
          message: "Bad character - LINE TABULATION SET.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterPartialLineForward(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 139) {
        context.report({
          ruleId: "bad-character-partial-line-forward",
          message: "Bad character - PARTIAL LINE FORWARD.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterPartialLineBackward(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 140) {
        context.report({
          ruleId: "bad-character-partial-line-backward",
          message: "Bad character - PARTIAL LINE BACKWARD.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterReverseLineFeed(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 141) {
        context.report({
          ruleId: "bad-character-reverse-line-feed",
          message: "Bad character - REVERSE LINE FEED.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterSingleShiftTwo(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 142) {
        context.report({
          ruleId: "bad-character-single-shift-two",
          message: "Bad character - SINGLE SHIFT TWO.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterSingleShiftTwo$1(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 143) {
        context.report({
          ruleId: "bad-character-single-shift-three",
          message: "Bad character - SINGLE SHIFT THREE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterDeviceControlString(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 144) {
        context.report({
          ruleId: "bad-character-device-control-string",
          message: "Bad character - DEVICE CONTROL STRING.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterPrivateUseOne(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 145) {
        context.report({
          ruleId: "bad-character-private-use-1",
          message: "Bad character - PRIVATE USE ONE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterPrivateUseTwo(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 146) {
        context.report({
          ruleId: "bad-character-private-use-2",
          message: "Bad character - PRIVATE USE TWO.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterSetTransmitState(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 147) {
        context.report({
          ruleId: "bad-character-set-transmit-state",
          message: "Bad character - SET TRANSMIT STATE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterCancelCharacter(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 148) {
        context.report({
          ruleId: "bad-character-cancel-character",
          message: "Bad character - CANCEL CHARACTER.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterMessageWaiting(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 149) {
        context.report({
          ruleId: "bad-character-message-waiting",
          message: "Bad character - MESSAGE WAITING.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterStartOfProtectedArea(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 150) {
        context.report({
          ruleId: "bad-character-start-of-protected-area",
          message: "Bad character - START OF PROTECTED AREA.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterEndOfProtectedArea(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 151) {
        context.report({
          ruleId: "bad-character-end-of-protected-area",
          message: "Bad character - END OF PROTECTED AREA.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterStartOfString(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 152) {
        context.report({
          ruleId: "bad-character-start-of-string",
          message: "Bad character - START OF STRING.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterControl0099(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 153) {
        context.report({
          ruleId: "bad-character-control-0099",
          message: "Bad character - CONTROL.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterSingleCharacterIntroducer(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 154) {
        context.report({
          ruleId: "bad-character-single-character-introducer",
          message: "Bad character - SINGLE CHARACTER INTRODUCER.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterControlSequenceIntroducer(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 155) {
        context.report({
          ruleId: "bad-character-control-sequence-introducer",
          message: "Bad character - CONTROL SEQUENCE INTRODUCER.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterStringTerminator(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 156) {
        context.report({
          ruleId: "bad-character-string-terminator",
          message: "Bad character - STRING TERMINATOR.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterOperatingSystemCommand(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 157) {
        context.report({
          ruleId: "bad-character-operating-system-command",
          message: "Bad character - OPERATING SYSTEM COMMAND.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterPrivateMessage(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 158) {
        context.report({
          ruleId: "bad-character-private-message",
          message: "Bad character - PRIVATE MESSAGE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterApplicationProgramCommand(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 159) {
        context.report({
          ruleId: "bad-character-application-program-command",
          message: "Bad character - APPLICATION PROGRAM COMMAND.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterSoftHyphen(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 173) {
        context.report({
          ruleId: "bad-character-soft-hyphen",
          message: "Bad character - SOFT HYPHEN.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterNonBreakingSpace(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 160) {
        context.report({
          ruleId: "bad-character-non-breaking-space",
          message: "Bad character - NON-BREAKING SPACE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1, " "]]
          }
        });
      }
    }
  };
}

function badCharacterOghamSpaceMark(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 5760) {
        context.report({
          ruleId: "bad-character-ogham-space-mark",
          message: "Bad character - OGHAM SPACE MARK.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1, " "]]
          }
        });
      }
    }
  };
}

function badCharacterEnQuad(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8192) {
        context.report({
          ruleId: "bad-character-en-quad",
          message: "Bad character - EN QUAD.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1, " "]]
          }
        });
      }
    }
  };
}

function badCharacterEmQuad(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8193) {
        context.report({
          ruleId: "bad-character-em-quad",
          message: "Bad character - EM QUAD.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1, " "]]
          }
        });
      }
    }
  };
}

function badCharacterEnSpace(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8194) {
        context.report({
          ruleId: "bad-character-en-space",
          message: "Bad character - EN SPACE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1, " "]]
          }
        });
      }
    }
  };
}

function badCharacterEmSpace(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8195) {
        context.report({
          ruleId: "bad-character-em-space",
          message: "Bad character - EM SPACE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1, " "]]
          }
        });
      }
    }
  };
}

function badCharacterThreePerEmSpace(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8196) {
        context.report({
          ruleId: "bad-character-three-per-em-space",
          message: "Bad character - THREE-PER-EM SPACE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1, " "]]
          }
        });
      }
    }
  };
}

function badCharacterFourPerEmSpace(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8197) {
        context.report({
          ruleId: "bad-character-four-per-em-space",
          message: "Bad character - FOUR-PER-EM SPACE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1, " "]]
          }
        });
      }
    }
  };
}

function badCharacterSixPerEmSpace(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8198) {
        context.report({
          ruleId: "bad-character-six-per-em-space",
          message: "Bad character - SIX-PER-EM SPACE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1, " "]]
          }
        });
      }
    }
  };
}

function badCharacterFigureSpace(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8199) {
        context.report({
          ruleId: "bad-character-figure-space",
          message: "Bad character - FIGURE SPACE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1, " "]]
          }
        });
      }
    }
  };
}

function badCharacterPunctuationSpace(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8200) {
        context.report({
          ruleId: "bad-character-punctuation-space",
          message: "Bad character - PUNCTUATION SPACE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1, " "]]
          }
        });
      }
    }
  };
}

function badCharacterThinSpace(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8201) {
        context.report({
          ruleId: "bad-character-thin-space",
          message: "Bad character - THIN SPACE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1, " "]]
          }
        });
      }
    }
  };
}

function badCharacterHairSpace(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8202) {
        context.report({
          ruleId: "bad-character-hair-space",
          message: "Bad character - HAIR SPACE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1, " "]]
          }
        });
      }
    }
  };
}

function badCharacterZeroWidthSpace(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8203) {
        context.report({
          ruleId: "bad-character-zero-width-space",
          message: "Bad character - ZERO WIDTH SPACE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1, " "]]
          }
        });
      }
    }
  };
}

function badCharacterZeroWidthNonJoiner(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8204) {
        context.report({
          ruleId: "bad-character-zero-width-non-joiner",
          message: "Bad character - ZERO WIDTH NON-JOINER.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterZeroWidthJoiner(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8205) {
        context.report({
          ruleId: "bad-character-zero-width-joiner",
          message: "Bad character - ZERO WIDTH JOINER.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterLeftToRightMark(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8206) {
        context.report({
          ruleId: "bad-character-left-to-right-mark",
          message: "Bad character - LEFT-TO-RIGHT MARK.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterRightToLeftMark(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8207) {
        context.report({
          ruleId: "bad-character-right-to-left-mark",
          message: "Bad character - RIGHT-TO-LEFT MARK.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterLeftToRightEmbedding(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8234) {
        context.report({
          ruleId: "bad-character-left-to-right-embedding",
          message: "Bad character - LEFT-TO-RIGHT EMBEDDING.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterRightToLeftEmbedding(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8235) {
        context.report({
          ruleId: "bad-character-right-to-left-embedding",
          message: "Bad character - RIGHT-TO-LEFT EMBEDDING.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterPopDirectionalFormatting(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8236) {
        context.report({
          ruleId: "bad-character-pop-directional-formatting",
          message: "Bad character - POP DIRECTIONAL FORMATTING.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterLeftToRightOverride(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8237) {
        context.report({
          ruleId: "bad-character-left-to-right-override",
          message: "Bad character - LEFT-TO-RIGHT OVERRIDE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterRightToLeftOverride(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8238) {
        context.report({
          ruleId: "bad-character-right-to-left-override",
          message: "Bad character - RIGHT-TO-LEFT OVERRIDE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterWordJoiner(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8288) {
        context.report({
          ruleId: "bad-character-word-joiner",
          message: "Bad character - WORD JOINER.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterFunctionApplication(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8289) {
        context.report({
          ruleId: "bad-character-function-application",
          message: "Bad character - FUNCTION APPLICATION.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterInvisibleTimes(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8290) {
        context.report({
          ruleId: "bad-character-invisible-times",
          message: "Bad character - INVISIBLE TIMES.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterInvisibleSeparator(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8291) {
        context.report({
          ruleId: "bad-character-invisible-separator",
          message: "Bad character - INVISIBLE SEPARATOR.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterInvisiblePlus(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8292) {
        context.report({
          ruleId: "bad-character-invisible-plus",
          message: "Bad character - INVISIBLE PLUS.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterLeftToRightIsolate(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8294) {
        context.report({
          ruleId: "bad-character-left-to-right-isolate",
          message: "Bad character - LEFT-TO-RIGHT ISOLATE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterRightToLeftIsolate(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8295) {
        context.report({
          ruleId: "bad-character-right-to-left-isolate",
          message: "Bad character - RIGHT-TO-LEFT ISOLATE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterFirstStrongIsolate(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8296) {
        context.report({
          ruleId: "bad-character-first-strong-isolate",
          message: "Bad character - FIRST STRONG ISOLATE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterPopDirectionalIsolate(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8297) {
        context.report({
          ruleId: "bad-character-pop-directional-isolate",
          message: "Bad character - FIRST STRONG ISOLATE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterInhibitSymmetricSwapping(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8298) {
        context.report({
          ruleId: "bad-character-inhibit-symmetric-swapping",
          message: "Bad character - INHIBIT SYMMETRIC SWAPPING.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterActivateSymmetricSwapping(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8299) {
        context.report({
          ruleId: "bad-character-activate-symmetric-swapping",
          message: "Bad character - INHIBIT SYMMETRIC SWAPPING.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterInhibitArabicFormShaping(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8300) {
        context.report({
          ruleId: "bad-character-inhibit-arabic-form-shaping",
          message: "Bad character - INHIBIT ARABIC FORM SHAPING.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterActivateArabicFormShaping(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8301) {
        context.report({
          ruleId: "bad-character-activate-arabic-form-shaping",
          message: "Bad character - ACTIVATE ARABIC FORM SHAPING.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterNationalDigitShapes(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8302) {
        context.report({
          ruleId: "bad-character-national-digit-shapes",
          message: "Bad character - NATIONAL DIGIT SHAPES.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterNominalDigitShapes(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8303) {
        context.report({
          ruleId: "bad-character-nominal-digit-shapes",
          message: "Bad character - NOMINAL DIGIT SHAPES.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterZeroWidthNoBreakSpace(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 65279) {
        context.report({
          ruleId: "bad-character-zero-width-no-break-space",
          message: "Bad character - ZERO WIDTH NO-BREAK SPACE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterInterlinearAnnotationAnchor(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 65529) {
        context.report({
          ruleId: "bad-character-interlinear-annotation-anchor",
          message: "Bad character - INTERLINEAR ANNOTATION ANCHOR.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterInterlinearAnnotationSeparator(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 65530) {
        context.report({
          ruleId: "bad-character-interlinear-annotation-separator",
          message: "Bad character - INTERLINEAR ANNOTATION SEPARATOR.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterInterlinearAnnotationTerminator(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 65531) {
        context.report({
          ruleId: "bad-character-interlinear-annotation-terminator",
          message: "Bad character - INTERLINEAR ANNOTATION TERMINATOR.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterLineSeparator(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8232) {
        context.report({
          ruleId: "bad-character-line-separator",
          message: "Bad character - LINE SEPARATOR.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterParagraphSeparator(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8233) {
        context.report({
          ruleId: "bad-character-paragraph-separator",
          message: "Bad character - PARAGRAPH SEPARATOR.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function badCharacterNarrowNoBreakSpace(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8239) {
        context.report({
          ruleId: "bad-character-narrow-no-break-space",
          message: "Bad character - NARROW NO-BREAK SPACE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1, " "]]
          }
        });
      }
    }
  };
}

function badCharacterMediumMathematicalSpace(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 8287) {
        context.report({
          ruleId: "bad-character-medium-mathematical-space",
          message: "Bad character - MEDIUM MATHEMATICAL SPACE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1, " "]]
          }
        });
      }
    }
  };
}

function badCharacterIdeographicSpace(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 12288) {
        context.report({
          ruleId: "bad-character-ideographic-space",
          message: "Bad character - IDEOGRAPHIC SPACE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1, " "]]
          }
        });
      }
    }
  };
}

function badCharacterReplacementCharacter(context) {
  return {
    character: function character(_ref) {
      var chr = _ref.chr,
          i = _ref.i;
      if (chr.charCodeAt(0) === 65533) {
        context.report({
          ruleId: "bad-character-replacement-character",
          message: "Bad character - REPLACEMENT CHARACTER.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]]
          }
        });
      }
    }
  };
}

function tagSpaceAfterOpeningBracket(context) {
  return {
    html: function html(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 tagSpaceAfterOpeningBracket() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("node = ".concat(JSON.stringify(node, null, 4)));
      var ranges = [];
      if (typeof context.str[node.start + 1] === "string" && !context.str[node.start + 1].trim().length) {
        console.log("028 whitespace after opening bracket confirmed");
        ranges.push([node.start + 1, stringLeftRight.right(context.str, node.start + 1)]);
      }
      if (!context.str[node.tagNameStartAt - 1].trim().length) {
        console.log("034 whitespace before tag name confirmed");
        var charToTheLeftOfTagNameIdx = stringLeftRight.left(context.str, node.tagNameStartAt);
        if (charToTheLeftOfTagNameIdx !== node.start) {
          ranges.push([charToTheLeftOfTagNameIdx + 1, node.tagNameStartAt]);
        }
      }
      if (ranges.length) {
        context.report({
          ruleId: "tag-space-after-opening-bracket",
          message: "Bad whitespace.",
          idxFrom: ranges[0][0],
          idxTo: ranges[ranges.length - 1][1],
          fix: {
            ranges: ranges
          }
        });
      }
    }
  };
}

function tagSpaceBeforeClosingSlash(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    html: function html(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 tagSpaceBeforeClosingSlash() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("019 inside rule: node = ".concat(JSON.stringify(node, null, 4)));
      var gapValue = context.str.slice(node.start + 1, node.tagNameStartAt);
      console.log("021 gapValue = ".concat(JSON.stringify(gapValue, null, 4)));
      console.log("024 tagSpaceBeforeClosingSlash(): ".concat("\x1B[".concat(33, "m", "context.str[".concat(node.tagNameStartAt, "]"), "\x1B[", 39, "m"), " = ", JSON.stringify(context.str[node.tagNameStartAt], null, 4)));
      console.log("031 tagSpaceBeforeClosingSlash(): ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      var mode = "never";
      if (Array.isArray(opts) && ["always", "never"].includes(opts[0])) {
        mode = opts[0];
      }
      console.log("045 tagSpaceBeforeClosingSlash(): ".concat("\x1B[".concat(35, "m", "calculated mode", "\x1B[", 39, "m"), " = \"", mode, "\""));
      var closingBracketPos = node.end - 1;
      var slashPos = stringLeftRight.left(context.str, closingBracketPos);
      var leftOfSlashPos = stringLeftRight.left(context.str, slashPos);
      if (mode === "never" && node["void"] && context.str[slashPos] === "/" && leftOfSlashPos < slashPos - 1) {
        console.log("058 whitespace present in front of closing slash!");
        context.report({
          ruleId: "tag-space-before-closing-slash",
          message: "Bad whitespace.",
          idxFrom: leftOfSlashPos + 1,
          idxTo: slashPos,
          fix: {
            ranges: [[leftOfSlashPos + 1, slashPos]]
          }
        });
      } else if (mode === "always" && node["void"] && context.str[slashPos] === "/" && leftOfSlashPos === slashPos - 1) {
        console.log("072 space missing in front of closing slash!");
        context.report({
          ruleId: "tag-space-before-closing-slash",
          message: "Missing space.",
          idxFrom: slashPos,
          idxTo: slashPos,
          fix: {
            ranges: [[slashPos, slashPos, " "]]
          }
        });
      }
    }
  };
}

function tagSpaceBetweenSlashAndBracket(context) {
  return {
    html: function html(node) {
      if (Number.isInteger(node.end) && context.str[node.end - 1] === ">" &&
      context.str[stringLeftRight.left(context.str, node.end - 1)] === "/" && stringLeftRight.left(context.str, node.end - 1) < node.end - 2) {
        var idxFrom = stringLeftRight.left(context.str, node.end - 1) + 1;
        console.log("025 whitespace present between slash and bracket!");
        context.report({
          ruleId: "tag-space-between-slash-and-bracket",
          message: "Bad whitespace.",
          idxFrom: idxFrom,
          idxTo: node.end - 1,
          fix: {
            ranges: [[idxFrom, node.end - 1]]
          }
        });
      }
    }
  };
}

var BACKSLASH = "\\";
function tagClosingBackslash(context) {
  return {
    html: function html(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 tagClosingBackslash() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("".concat("\x1B[".concat(33, "m", "node", "\x1B[", 39, "m"), " = ", JSON.stringify(node, null, 4)));
      var ranges = [];
      if (Number.isInteger(node.start) && Number.isInteger(node.tagNameStartAt) && context.str.slice(node.start, node.tagNameStartAt).includes(BACKSLASH)) {
        console.log("045 backslash in front!");
        for (var i = node.start; i < node.tagNameStartAt; i++) {
          if (context.str[i] === BACKSLASH) {
            ranges.push([i, i + 1]);
            console.log("054 ".concat("\x1B[".concat(32, "m", "PUSH", "\x1B[", 39, "m"), " [", i, ", ").concat(i + 1, "]"));
          }
        }
      }
      if (Number.isInteger(node.end) && context.str[node.end - 1] === ">" &&
      context.str[stringLeftRight.left(context.str, node.end - 1)] === BACKSLASH) {
        var message = node["void"] ? "Replace backslash with slash." : "Delete this.";
        var backSlashPos = stringLeftRight.left(context.str, node.end - 1);
        var idxFrom = stringLeftRight.left(context.str, backSlashPos) + 1;
        var whatToInsert = node["void"] ? "/" : "";
        console.log("083 ".concat("\x1B[".concat(35, "m", "initial", "\x1B[", 39, "m"), " ", "\x1B[".concat(33, "m", "idxFrom", "\x1B[", 39, "m"), " = ", JSON.stringify(idxFrom, null, 4), "; ", "\x1B[".concat(33, "m", "whatToInsert", "\x1B[", 39, "m"), " = ").concat(JSON.stringify(whatToInsert, null, 4)));
        if (context.processedRulesConfig["tag-space-before-closing-slash"] && (Number.isInteger(context.processedRulesConfig["tag-space-before-closing-slash"]) && context.processedRulesConfig["tag-space-before-closing-slash"] > 0 || Array.isArray(context.processedRulesConfig["tag-space-before-closing-slash"]) && context.processedRulesConfig["tag-space-before-closing-slash"][0] > 0 && context.processedRulesConfig["tag-space-before-closing-slash"][1] === "never")) {
          idxFrom = stringLeftRight.left(context.str, backSlashPos) + 1;
          console.log("114 SET ".concat("\x1B[".concat(32, "m", "idxFrom", "\x1B[", 39, "m"), " = ", idxFrom));
        }
        if (Array.isArray(context.processedRulesConfig["tag-space-before-closing-slash"]) && context.processedRulesConfig["tag-space-before-closing-slash"][0] > 0 && context.processedRulesConfig["tag-space-before-closing-slash"][1] === "always") {
          idxFrom = stringLeftRight.left(context.str, backSlashPos) + 1;
          whatToInsert = " ".concat(whatToInsert);
          console.log("132 ".concat("\x1B[".concat(32, "m", "SET", "\x1B[", 39, "m"), " ", "\x1B[".concat(33, "m", "idxFrom", "\x1B[", 39, "m"), " = ", idxFrom, "; ", "\x1B[".concat(33, "m", "whatToInsert", "\x1B[", 39, "m"), " = \"").concat(whatToInsert, "\""));
          if (node["void"] && context.str[idxFrom + 1] === " ") {
            idxFrom++;
            whatToInsert = whatToInsert.trim();
            console.log("140 ".concat("\x1B[".concat(32, "m", "SET", "\x1B[", 39, "m"), " ", "\x1B[".concat(33, "m", "idxFrom", "\x1B[", 39, "m"), " = ", idxFrom, "; ", "\x1B[".concat(33, "m", "whatToInsert", "\x1B[", 39, "m"), " = \"").concat(whatToInsert, "\""));
          } else if (!node["void"]) {
            whatToInsert = whatToInsert.trim();
            console.log("145 ".concat("\x1B[".concat(32, "m", "SET", "\x1B[", 39, "m"), " ", "\x1B[".concat(33, "m", "whatToInsert", "\x1B[", 39, "m"), " = \"", whatToInsert, "\""));
          }
        }
        console.log("151 ".concat("\x1B[".concat(32, "m", "FINAL", "\x1B[", 39, "m"), " ", "\x1B[".concat(33, "m", "idxFrom", "\x1B[", 39, "m"), " = ", JSON.stringify(idxFrom, null, 4)));
        if (node["void"] && Array.isArray(context.processedRulesConfig["tag-void-slash"]) && context.processedRulesConfig["tag-void-slash"][0] > 0 && context.processedRulesConfig["tag-void-slash"][1] === "never") {
          whatToInsert = "";
          idxFrom = stringLeftRight.left(context.str, backSlashPos) + 1;
          message = "Delete this.";
        }
        context.report({
          ruleId: "tag-closing-backslash",
          message: message,
          idxFrom: idxFrom,
          idxTo: node.end - 1,
          fix: {
            ranges: [[idxFrom, node.end - 1, whatToInsert]]
          }
        });
      }
      if (ranges.length) {
        context.report({
          ruleId: "tag-closing-backslash",
          message: "Wrong slash - backslash.",
          idxFrom: ranges[0][0],
          idxTo: ranges[ranges.length - 1][1],
          fix: {
            ranges: ranges
          }
        });
      }
    }
  };
}

var BACKSLASH$1 = "\\";
function tagVoidSlash(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    html: function html(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 tagVoidSlash() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      var mode = "always";
      if (Array.isArray(opts) && ["always", "never"].includes(opts[0])) {
        mode = opts[0];
      }
      console.log("024 tagVoidSlash(): ".concat("\x1B[".concat(35, "m", "calculated mode", "\x1B[", 39, "m"), " = \"", mode, "\""));
      var closingBracketPos = node.end - 1;
      var slashPos = stringLeftRight.left(context.str, closingBracketPos);
      var leftOfSlashPos = stringLeftRight.left(context.str, slashPos);
      if (mode === "never" && node["void"] && context.str[slashPos] === "/") {
        console.log("036 whitespace present in front of closing slash!");
        context.report({
          ruleId: "tag-void-slash",
          message: "Remove the slash.",
          idxFrom: leftOfSlashPos + 1,
          idxTo: closingBracketPos,
          fix: {
            ranges: [[leftOfSlashPos + 1, closingBracketPos]]
          }
        });
      } else if (mode === "always" && node["void"] && context.str[slashPos] !== "/" && (
      !context.processedRulesConfig["tag-closing-backslash"] || !(context.str[slashPos] === BACKSLASH$1 && (Number.isInteger(context.processedRulesConfig["tag-closing-backslash"]) && context.processedRulesConfig["tag-closing-backslash"] > 0 || Array.isArray(context.processedRulesConfig["tag-closing-backslash"]) && context.processedRulesConfig["tag-closing-backslash"][0] > 0 && context.processedRulesConfig["tag-closing-backslash"][1] === "always")))) {
        console.log("064");
        if (Array.isArray(context.processedRulesConfig["tag-space-before-closing-slash"]) && context.processedRulesConfig["tag-space-before-closing-slash"][1] === "always") {
          console.log("075");
          if (context.str[slashPos + 1] === " ") {
            console.log("080 add slash only");
            context.report({
              ruleId: "tag-void-slash",
              message: "Missing slash.",
              idxFrom: slashPos + 2,
              idxTo: closingBracketPos,
              fix: {
                ranges: [[slashPos + 2, closingBracketPos, "/"]]
              }
            });
          } else {
            console.log("090 add space and slash");
            context.report({
              ruleId: "tag-void-slash",
              message: "Missing slash.",
              idxFrom: slashPos + 1,
              idxTo: closingBracketPos,
              fix: {
                ranges: [[slashPos + 1, closingBracketPos, " /"]]
              }
            });
          }
        } else if (context.processedRulesConfig["tag-space-before-closing-slash"] === undefined || Array.isArray(context.processedRulesConfig["tag-space-before-closing-slash"]) && context.processedRulesConfig["tag-space-before-closing-slash"][1] === "never" || Number.isInteger(context.processedRulesConfig["tag-space-before-closing-slash"]) && context.processedRulesConfig["tag-space-before-closing-slash"] > 0) {
          console.log("114 add slash only");
          context.report({
            ruleId: "tag-void-slash",
            message: "Missing slash.",
            idxFrom: slashPos + 1,
            idxTo: closingBracketPos,
            fix: {
              ranges: [[slashPos + 1, closingBracketPos, "/"]]
            }
          });
        }
      }
    }
  };
}

function tagNameCase(context) {
  var knownUpperCaseTags = ["DOCTYPE", "CDATA"];
  return {
    html: function html(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 tagNameCase() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("".concat("\x1B[".concat(33, "m", "node", "\x1B[", 39, "m"), " = ", JSON.stringify(node, null, 4)));
      if (node.tagName && node.recognised === true) {
        console.log("022 recognised tag");
        console.log("".concat("\x1B[".concat(33, "m", "knownUpperCaseTags.includes(node.tagName.toUpperCase())", "\x1B[", 39, "m"), " = ", JSON.stringify(knownUpperCaseTags.includes(node.tagName.toUpperCase()), null, 4)));
        console.log("".concat("\x1B[".concat(33, "m", "node.tagName", "\x1B[", 39, "m"), " = ", JSON.stringify(node.tagName, null, 4)));
        console.log("".concat("\x1B[".concat(33, "m", "node.tagName.toUpperCase()", "\x1B[", 39, "m"), " = ", JSON.stringify(node.tagName.toUpperCase(), null, 4)));
        if (knownUpperCaseTags.includes(node.tagName.toUpperCase())) {
          if (node.tagName !== node.tagName.toUpperCase()) {
            console.log("048 wrong tag case!");
            var ranges = [[node.tagNameStartAt, node.tagNameEndAt, node.tagName.toUpperCase()]];
            context.report({
              ruleId: "tag-name-case",
              message: "Bad tag name case.",
              idxFrom: node.tagNameStartAt,
              idxTo: node.tagNameEndAt,
              fix: {
                ranges: ranges
              }
            });
          }
        } else if (node.tagName !== node.tagName.toLowerCase()) {
          console.log("067 wrong tag case!");
          var _ranges = [[node.tagNameStartAt, node.tagNameEndAt, node.tagName.toLowerCase()]];
          context.report({
            ruleId: "tag-name-case",
            message: "Bad tag name case.",
            idxFrom: node.tagNameStartAt,
            idxTo: node.tagNameEndAt,
            fix: {
              ranges: _ranges
            }
          });
        }
      }
    }
  };
}

function tagIsPresent(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    html: function html(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 tagIsPresent() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("015 tagIsPresent(): ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      console.log("022 tagIsPresent(): node = ".concat(JSON.stringify(node, null, 4)));
      if (Array.isArray(opts) && opts.length) {
        var temp = matcher([node.tagName], opts);
        console.log("028 ".concat("\x1B[".concat(33, "m", "matcher([".concat(JSON.stringify(node.tagName, null, 0), "], ").concat(JSON.stringify(opts, null, 0), ")"), "\x1B[", 39, "m"), " = ", JSON.stringify(temp, null, 4)));
        if (matcher([node.tagName], opts).length) {
          console.log("039 RAISE ERROR [".concat(node.start, ", ").concat(node.end, "]"));
          context.report({
            ruleId: "tag-is-present",
            message: "".concat(node.tagName, " is not allowed."),
            idxFrom: node.start,
            idxTo: node.end,
            fix: {
              ranges: [[node.start, node.end]]
            }
          });
        }
      }
    }
  };
}

function tagBold(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    html: function html(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 tagBold() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("013 tagBold(): ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      console.log("019 tagBold(): node = ".concat(JSON.stringify(node, null, 4)));
      var suggested = "strong";
      if (Array.isArray(opts) && typeof opts[0] === "string" && opts[0].toLowerCase() === "b") {
        suggested = "b";
      }
      if (node.tagName === "bold") {
        console.log("031 RAISE ERROR [".concat(node.start, ", ").concat(node.end, "]"));
        context.report({
          ruleId: "tag-bold",
          message: "Tag \"bold\" does not exist in HTML.",
          idxFrom: node.start,
          idxTo: node.end,
          fix: {
            ranges: [[node.tagNameStartAt, node.tagNameEndAt, suggested]]
          }
        });
      }
    }
  };
}

function attributeMalformed(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    attribute: function attribute(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 attributeMalformed() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("013 attributeMalformed(): ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      console.log("020 attributeMalformed(): node = ".concat(JSON.stringify(node, null, 4)));
      if (node.attribValueStartAt !== null && context.str[node.attribNameEndAt] !== "=") {
        console.log("027 RAISE ERROR");
        context.report({
          ruleId: "attribute-malformed",
          message: "Equal is missing.",
          idxFrom: node.attribStart,
          idxTo: node.attribEnd,
          fix: {
            ranges: [[node.attribNameEndAt, node.attribNameEndAt, "="]]
          }
        });
      }
    }
  };
}

function attributeValidateAbbr(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    attribute: function attribute(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 attributeValidateAbbr() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("013 ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      console.log("020 attributeValidateAbbr(): node = ".concat(JSON.stringify(node, null, 4)));
      if (node.attribName === "abbr") {
        if (!["td", "th"].includes(node.parent.tagName)) {
          context.report({
            ruleId: "attribute-validate-abbr",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: "Tag \"".concat(node.parent.tagName, "\" can't have this attribute."),
            fix: null
          });
        }
        var _checkForWhitespace = checkForWhitespace(node.attribValue, node.attribValueStartAt),
            errorArr = _checkForWhitespace.errorArr;
        console.log("041 ".concat("\x1B[".concat(33, "m", "errorArr", "\x1B[", 39, "m"), " = ", JSON.stringify(errorArr, null, 4)));
        errorArr.forEach(function (errorObj) {
          console.log("049 RAISE ERROR");
          context.report(Object.assign({}, errorObj, {
            ruleId: "attribute-validate-abbr"
          }));
        });
      }
    }
  };
}

function attributeValidateAcceptCharset(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    attribute: function attribute(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 attributeValidateAcceptCharset() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("014 ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      console.log("021 attributeValidateAcceptCharset(): node = ".concat(JSON.stringify(node, null, 4)));
      if (node.attribName === "accept-charset") {
        if (!["form"].includes(node.parent.tagName)) {
          context.report({
            ruleId: "attribute-validate-accept-charset",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: "Tag \"".concat(node.parent.tagName, "\" can't have this attribute."),
            fix: null
          });
        }
        var errorArr = validateString(node.attribValue, node.attribValueStartAt, {
          canBeCommaSeparated: true,
          noSpaceAfterComma: true,
          quickPermittedValues: ["UNKNOWN"],
          permittedValues: knownCharsets
        });
        console.log("054 ".concat("\x1B[".concat(33, "m", "errorArr", "\x1B[", 39, "m"), " = ", JSON.stringify(errorArr, null, 4)));
        errorArr.forEach(function (errorObj) {
          console.log("062 RAISE ERROR");
          context.report(Object.assign({}, errorObj, {
            ruleId: "attribute-validate-accept-charset"
          }));
        });
      }
    }
  };
}

function attributeValidateAccept(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    attribute: function attribute(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 attributeValidateAccept() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("014 ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      console.log("021 attributeValidateAccept(): node = ".concat(JSON.stringify(node, null, 4)));
      if (node.attribName === "accept") {
        if (!["form", "input"].includes(node.parent.tagName)) {
          context.report({
            ruleId: "attribute-validate-accept",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: "Tag \"".concat(node.parent.tagName, "\" can't have this attribute."),
            fix: null
          });
        }
        var errorArr = validateString(node.attribValue,
        node.attribValueStartAt,
        {
          quickPermittedValues: ["audio/*", "video/*", "image/*", "text/html", "image/png", "image/gif", "video/mpeg", "text/css", "audio/basic", wholeExtensionRegex],
          permittedValues: Object.keys(db),
          canBeCommaSeparated: true,
          noSpaceAfterComma: true
        });
        console.log("059 ".concat("\x1B[".concat(33, "m", "errorArr", "\x1B[", 39, "m"), " = ", JSON.stringify(errorArr, null, 4)));
        errorArr.forEach(function (errorObj) {
          console.log("070 RAISE ERROR");
          context.report(Object.assign({}, errorObj, {
            ruleId: "attribute-validate-accept"
          }));
        });
      }
    }
  };
}

function attributeValidateAccesskey(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    attribute: function attribute(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 attributeValidateAccesskey() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("013 ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      console.log("020 attributeValidateAccesskey(): node = ".concat(JSON.stringify(node, null, 4)));
      if (node.attribName === "accesskey") {
        if (!["a", "area", "button", "input", "label", "legend", "textarea"].includes(node.parent.tagName)) {
          context.report({
            ruleId: "attribute-validate-accesskey",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: "Tag \"".concat(node.parent.tagName, "\" can't have this attribute."),
            fix: null
          });
        }
        var _checkForWhitespace = checkForWhitespace(node.attribValue, node.attribValueStartAt),
            charStart = _checkForWhitespace.charStart,
            charEnd = _checkForWhitespace.charEnd,
            errorArr = _checkForWhitespace.errorArr,
            trimmedVal = _checkForWhitespace.trimmedVal;
        console.log("055 ".concat("\x1B[".concat(33, "m", "errorArr", "\x1B[", 39, "m"), " = ", JSON.stringify(errorArr, null, 4)));
        if (Number.isInteger(charStart)) {
          if (trimmedVal.length > 1 && !(trimmedVal.startsWith("&") && trimmedVal.endsWith(";"))) {
            errorArr.push({
              idxFrom: node.attribValueStartAt + charStart,
              idxTo: node.attribValueStartAt + charEnd,
              message: "Should be a single character (escaped or not).",
              fix: null
            });
          }
        }
        errorArr.forEach(function (errorObj) {
          console.log("079 RAISE ERROR");
          context.report(Object.assign({}, errorObj, {
            ruleId: "attribute-validate-accesskey"
          }));
        });
      }
    }
  };
}

function attributeValidateAction(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    attribute: function attribute(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 attributeValidateAction() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("014 ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      console.log("021 attributeValidateAction(): node = ".concat(JSON.stringify(node, null, 4)));
      if (node.attribName === "action") {
        if (!["form"].includes(node.parent.tagName)) {
          context.report({
            ruleId: "attribute-validate-action",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: "Tag \"".concat(node.parent.tagName, "\" can't have this attribute."),
            fix: null
          });
        }
        var _checkForWhitespace = checkForWhitespace(node.attribValue, node.attribValueStartAt),
            charStart = _checkForWhitespace.charStart,
            charEnd = _checkForWhitespace.charEnd,
            errorArr = _checkForWhitespace.errorArr;
        console.log("044 ".concat("\x1B[".concat(33, "m", "charStart", "\x1B[", 39, "m"), " = ", JSON.stringify(charStart, null, 4), "; ", "\x1B[".concat(33, "m", "charEnd", "\x1B[", 39, "m"), " = ").concat(JSON.stringify(charEnd, null, 4)));
        console.log("055 ".concat("\x1B[".concat(33, "m", "errorArr", "\x1B[", 39, "m"), " = ", JSON.stringify(errorArr, null, 4)));
        if (!isUrl(context.str.slice(node.attribValueStartAt + charStart, node.attribValueStartAt + charEnd))) {
          errorArr.push({
            idxFrom: node.attribValueStartAt + charStart,
            idxTo: node.attribValueStartAt + charEnd,
            message: "Should be an URI.",
            fix: null
          });
        }
        errorArr.forEach(function (errorObj) {
          console.log("079 RAISE ERROR");
          context.report(Object.assign({}, errorObj, {
            ruleId: "attribute-validate-action"
          }));
        });
      }
    }
  };
}

function attributeValidateAlign(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    attribute: function attribute(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 attributeValidateAlign() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("013 ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      console.log("020 attributeValidateAlign(): node = ".concat(JSON.stringify(node, null, 4)));
      if (node.attribName === "align") {
        if (!["applet", "caption", "iframe", "img", "input", "object", "legend", "table", "hr", "div", "h1", "h2", "h3", "h4", "h5", "h6", "p", "col", "colgroup", "tbody", "td", "tfoot", "th", "thead", "tr"].includes(node.parent.tagName)) {
          context.report({
            ruleId: "attribute-validate-align",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: "Tag \"".concat(node.parent.tagName, "\" can't have this attribute."),
            fix: null
          });
        }
        var errorArr = [];
        if (["legend", "caption"].includes(node.parent.tagName.toLowerCase())) {
          errorArr = validateString(node.attribValue,
          node.attribValueStartAt,
          {
            permittedValues: ["top", "bottom", "left", "right"],
            canBeCommaSeparated: false
          });
        } else if (["applet", "iframe", "img", "input", "object"].includes(node.parent.tagName.toLowerCase())) {
          errorArr = validateString(node.attribValue,
          node.attribValueStartAt,
          {
            permittedValues: ["top", "middle", "bottom", "left", "right"],
            canBeCommaSeparated: false
          });
        } else if (["table", "hr"].includes(node.parent.tagName.toLowerCase())) {
          errorArr = validateString(node.attribValue,
          node.attribValueStartAt,
          {
            permittedValues: ["left", "center", "right"],
            canBeCommaSeparated: false
          });
        } else if (["div", "h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(node.parent.tagName.toLowerCase())) {
          errorArr = validateString(node.attribValue,
          node.attribValueStartAt,
          {
            permittedValues: ["left", "center", "right", "justify"],
            canBeCommaSeparated: false
          });
        } else if (["col", "colgroup", "tbody", "td", "tfoot", "th", "thead", "tr"].includes(node.parent.tagName.toLowerCase())) {
          errorArr = validateString(node.attribValue,
          node.attribValueStartAt,
          {
            permittedValues: ["left", "center", "right", "justify", "char"],
            canBeCommaSeparated: false
          });
        }
        console.log("140 ".concat("\x1B[".concat(33, "m", "errorArr", "\x1B[", 39, "m"), " = ", JSON.stringify(errorArr, null, 4)));
        errorArr.forEach(function (errorObj) {
          console.log("148 RAISE ERROR");
          context.report(Object.assign({}, errorObj, {
            ruleId: "attribute-validate-align"
          }));
        });
      }
    }
  };
}

function attributeValidateAlink(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    attribute: function attribute(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 attributeValidateAlink() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("013 ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      if (node.attribName === "alink") {
        if (node.parent.tagName !== "body") {
          context.report({
            ruleId: "attribute-validate-alink",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: "Tag \"".concat(node.parent.tagName, "\" can't have this attribute."),
            fix: null
          });
        }
        var errorArr = validateColor(node.attribValue, node.attribValueStartAt, {
          namedCssLevel1OK: true,
          namedCssLevel2PlusOK: true,
          hexThreeOK: false,
          hexFourOK: false,
          hexSixOK: true,
          hexEightOK: false
        });
        console.log("048 received errorArr = ".concat(JSON.stringify(errorArr, null, 4)));
        errorArr.forEach(function (errorObj) {
          console.log("052 RAISE ERROR");
          context.report(Object.assign({}, errorObj, {
            ruleId: "attribute-validate-alink"
          }));
        });
      }
    }
  };
}

function attributeValidateArchive(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    attribute: function attribute(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 attributeValidateArchive() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("014 ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      console.log("021 attributeValidateArchive(): node = ".concat(JSON.stringify(node, null, 4)));
      if (node.attribName === "archive") {
        if (!["applet", "object"].includes(node.parent.tagName)) {
          context.report({
            ruleId: "attribute-validate-archive",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: "Tag \"".concat(node.parent.tagName, "\" can't have this attribute."),
            fix: null
          });
        }
        var _checkForWhitespace = checkForWhitespace(node.attribValue, node.attribValueStartAt),
            charStart = _checkForWhitespace.charStart,
            charEnd = _checkForWhitespace.charEnd,
            errorArr = _checkForWhitespace.errorArr;
        console.log("054 ".concat("\x1B[".concat(33, "m", "charStart", "\x1B[", 39, "m"), " = ", JSON.stringify(charStart, null, 4), "; ", "\x1B[".concat(33, "m", "charEnd", "\x1B[", 39, "m"), " = ").concat(JSON.stringify(charEnd, null, 4)));
        console.log("065 ".concat("\x1B[".concat(33, "m", "errorArr", "\x1B[", 39, "m"), " = ", JSON.stringify(errorArr, null, 4)));
        var trimmedAttrVal = node.attribValue;
        if (errorArr.length) {
          trimmedAttrVal = node.attribValue.slice(charStart, charEnd);
        }
        console.log("083 ".concat("\x1B[".concat(33, "m", "trimmedAttrVal", "\x1B[", 39, "m"), " = ", JSON.stringify(trimmedAttrVal, null, 4)));
        if (node.parent.tagName === "applet") {
          trimmedAttrVal.split(",").forEach(function (uriStr) {
            if (!isUrl(uriStr)) {
              errorArr.push({
                idxFrom: node.attribValueStartAt,
                idxTo: node.attribValueEndAt,
                message: "Should be comma-separated list of URI's.",
                fix: null
              });
            }
          });
        } else if (node.parent.tagName === "object") {
          trimmedAttrVal.split(" ").forEach(function (uriStr) {
            if (!isUrl(uriStr)) {
              errorArr.push({
                idxFrom: node.attribValueStartAt,
                idxTo: node.attribValueEndAt,
                message: "Should be space-separated list of URI's.",
                fix: null
              });
            }
          });
        }
        errorArr.forEach(function (errorObj) {
          console.log("117 RAISE ERROR");
          context.report(Object.assign({}, errorObj, {
            ruleId: "attribute-validate-archive"
          }));
        });
      }
    }
  };
}

function attributeValidateAxis(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    attribute: function attribute(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 attributeValidateAxis() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("013 ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      console.log("020 attributeValidateAxis(): node = ".concat(JSON.stringify(node, null, 4)));
      if (node.attribName === "axis") {
        if (!["td", "th"].includes(node.parent.tagName)) {
          context.report({
            ruleId: "attribute-validate-axis",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: "Tag \"".concat(node.parent.tagName, "\" can't have this attribute."),
            fix: null
          });
        }
        var _checkForWhitespace = checkForWhitespace(node.attribValue, node.attribValueStartAt),
            errorArr = _checkForWhitespace.errorArr;
        console.log("041 ".concat("\x1B[".concat(33, "m", "errorArr", "\x1B[", 39, "m"), " = ", JSON.stringify(errorArr, null, 4)));
        errorArr.forEach(function (errorObj) {
          console.log("049 RAISE ERROR");
          context.report(Object.assign({}, errorObj, {
            ruleId: "attribute-validate-axis"
          }));
        });
      }
    }
  };
}

function attributeValidateBackground(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    attribute: function attribute(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 attributeValidateBackground() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("014 ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      console.log("021 attributeValidateBackground(): node = ".concat(JSON.stringify(node, null, 4)));
      if (node.attribName === "background") {
        if (!["body", "td"].includes(node.parent.tagName)) {
          context.report({
            ruleId: "attribute-validate-background",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: "Tag \"".concat(node.parent.tagName, "\" can't have this attribute."),
            fix: null
          });
        }
        var _checkForWhitespace = checkForWhitespace(node.attribValue, node.attribValueStartAt),
            charStart = _checkForWhitespace.charStart,
            charEnd = _checkForWhitespace.charEnd,
            errorArr = _checkForWhitespace.errorArr,
            trimmedVal = _checkForWhitespace.trimmedVal;
        console.log("048 ".concat("\x1B[".concat(33, "m", "charStart", "\x1B[", 39, "m"), " = ", JSON.stringify(charStart, null, 4), "; ", "\x1B[".concat(33, "m", "charEnd", "\x1B[", 39, "m"), " = ").concat(JSON.stringify(charEnd, null, 4)));
        console.log("059 ".concat("\x1B[".concat(33, "m", "errorArr", "\x1B[", 39, "m"), " = ", JSON.stringify(errorArr, null, 4)));
        console.log("065 \u2588\u2588 isUrl: ".concat(isUrl(trimmedVal)));
        if (!isUrl(trimmedVal)) {
          if (!Array.from(trimmedVal).some(function (_char) {
            return !_char.trim().length;
          }) && /\w\.\w/.test(trimmedVal) && /[^\\/]+$/.test(trimmedVal)) {
            if (!(Array.isArray(opts) && opts.includes("localOK"))) {
              errorArr.push({
                idxFrom: node.attribValueStartAt + charStart,
                idxTo: node.attribValueStartAt + charEnd,
                message: "Should be an external URI.",
                fix: null
              });
            }
          } else {
            errorArr.push({
              idxFrom: node.attribValueStartAt + charStart,
              idxTo: node.attribValueStartAt + charEnd,
              message: "Should be an URI.",
              fix: null
            });
          }
        }
        errorArr.forEach(function (errorObj) {
          console.log("098 RAISE ERROR");
          context.report(Object.assign({}, errorObj, {
            ruleId: "attribute-validate-background"
          }));
        });
      }
    }
  };
}

function attributeValidateBgcolor(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    attribute: function attribute(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 attributeValidateBgcolor() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("013 ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      if (node.attribName === "bgcolor") {
        if (!["table", "tr", "td", "th", "body"].includes(node.parent.tagName)) {
          context.report({
            ruleId: "attribute-validate-bgcolor",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: "Tag \"".concat(node.parent.tagName, "\" can't have this attribute."),
            fix: null
          });
        }
        var errorArr = validateColor(node.attribValue, node.attribValueStartAt, {
          namedCssLevel1OK: true,
          namedCssLevel2PlusOK: true,
          hexThreeOK: false,
          hexFourOK: false,
          hexSixOK: true,
          hexEightOK: false
        });
        console.log("050 received errorArr = ".concat(JSON.stringify(errorArr, null, 4)));
        errorArr.forEach(function (errorObj) {
          console.log("054 RAISE ERROR");
          context.report(Object.assign({}, errorObj, {
            ruleId: "attribute-validate-bgcolor"
          }));
        });
      }
    }
  };
}

function attributeValidateBorder(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    attribute: function attribute(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 attributeValidateBorder() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("013 ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      if (node.attribName === "border") {
        if (!["table", "img", "object"].includes(node.parent.tagName)) {
          context.report({
            ruleId: "attribute-validate-border",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: "Tag \"".concat(node.parent.tagName, "\" can't have this attribute."),
            fix: null
          });
        }
        var errorArr = validateDigitOnly(node.attribValue, node.attribValueStartAt, {
          type: "integer"
        });
        console.log("043 received errorArr = ".concat(JSON.stringify(errorArr, null, 4)));
        errorArr.forEach(function (errorObj) {
          console.log("047 RAISE ERROR");
          context.report(Object.assign({}, errorObj, {
            ruleId: "attribute-validate-border"
          }));
        });
      }
    }
  };
}

function attributeValidateCellpadding(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    attribute: function attribute(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 attributeValidateCellpadding() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("013 ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      if (node.attribName === "cellpadding") {
        if (node.parent.tagName !== "table") {
          context.report({
            ruleId: "attribute-validate-cellpadding",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: "Tag \"".concat(node.parent.tagName, "\" can't have this attribute."),
            fix: null
          });
        }
        var errorArr = validateDigitOnly(node.attribValue, node.attribValueStartAt, {
          type: "integer",
          percOK: true
        });
        console.log("044 received errorArr = ".concat(JSON.stringify(errorArr, null, 4)));
        errorArr.forEach(function (errorObj) {
          console.log("048 RAISE ERROR");
          context.report(Object.assign({}, errorObj, {
            ruleId: "attribute-validate-cellpadding"
          }));
        });
      }
    }
  };
}

function attributeValidateCellspacing(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    attribute: function attribute(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 attributeValidateCellspacing() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("013 ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      if (node.attribName === "cellspacing") {
        if (node.parent.tagName !== "table") {
          context.report({
            ruleId: "attribute-validate-cellspacing",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: "Tag \"".concat(node.parent.tagName, "\" can't have this attribute."),
            fix: null
          });
        }
        var errorArr = validateDigitOnly(node.attribValue, node.attribValueStartAt, {
          type: "integer",
          percOK: true
        });
        console.log("044 received errorArr = ".concat(JSON.stringify(errorArr, null, 4)));
        errorArr.forEach(function (errorObj) {
          console.log("048 RAISE ERROR");
          context.report(Object.assign({}, errorObj, {
            ruleId: "attribute-validate-cellspacing"
          }));
        });
      }
    }
  };
}

function attributeValidateChar(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    attribute: function attribute(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 attributeValidateChar() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("013 ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      console.log("020 attributeValidateChar(): node = ".concat(JSON.stringify(node, null, 4)));
      if (node.attribName === "char") {
        if (!["col", "colgroup", "tbody", "td", "tfoot", "th", "thead", "tr"].includes(node.parent.tagName)) {
          context.report({
            ruleId: "attribute-validate-char",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: "Tag \"".concat(node.parent.tagName, "\" can't have this attribute."),
            fix: null
          });
        }
        var _checkForWhitespace = checkForWhitespace(node.attribValue, node.attribValueStartAt),
            charStart = _checkForWhitespace.charStart,
            charEnd = _checkForWhitespace.charEnd,
            errorArr = _checkForWhitespace.errorArr,
            trimmedVal = _checkForWhitespace.trimmedVal;
        console.log("051 ".concat("\x1B[".concat(33, "m", "errorArr", "\x1B[", 39, "m"), " = ", JSON.stringify(errorArr, null, 4)));
        if (Number.isInteger(charStart)) {
          if (trimmedVal.length > 1 && !(trimmedVal.startsWith("&") && trimmedVal.endsWith(";"))) {
            errorArr.push({
              idxFrom: node.attribValueStartAt + charStart,
              idxTo: node.attribValueStartAt + charEnd,
              message: "Should be a single character.",
              fix: null
            });
          }
        }
        errorArr.forEach(function (errorObj) {
          console.log("074 RAISE ERROR");
          context.report(Object.assign({}, errorObj, {
            ruleId: "attribute-validate-char"
          }));
        });
      }
    }
  };
}

function attributeValidateCharoff(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    attribute: function attribute(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 attributeValidateCharoff() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("013 ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      console.log("020 attributeValidateCharoff(): node = ".concat(JSON.stringify(node, null, 4)));
      if (node.attribName === "charoff") {
        if (!["col", "colgroup", "tbody", "td", "tfoot", "th", "thead", "tr"].includes(node.parent.tagName)) {
          context.report({
            ruleId: "attribute-validate-charoff",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: "Tag \"".concat(node.parent.tagName, "\" can't have this attribute."),
            fix: null
          });
        }
        var errorArr = validateDigitOnly(node.attribValue, node.attribValueStartAt, {
          type: "integer",
          percOK: false,
          negativeOK: true
        });
        console.log("060 received errorArr = ".concat(JSON.stringify(errorArr, null, 4)));
        if (!node.parent.attribs.some(function (attribObj) {
          return attribObj.attribName === "char";
        })) {
          errorArr.push({
            idxFrom: node.parent.start,
            idxTo: node.parent.end,
            message: "Attribute \"char\" missing.",
            fix: null
          });
        }
        errorArr.forEach(function (errorObj) {
          console.log("078 RAISE ERROR");
          context.report(Object.assign({}, errorObj, {
            ruleId: "attribute-validate-charoff"
          }));
        });
      }
    }
  };
}

function attributeValidateCharset(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    attribute: function attribute(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 attributeValidateCharset() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("014 ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      console.log("021 attributeValidateCharset(): node = ".concat(JSON.stringify(node, null, 4)));
      if (node.attribName === "charset") {
        if (!["a", "link", "script"].includes(node.parent.tagName)) {
          context.report({
            ruleId: "attribute-validate-charset",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: "Tag \"".concat(node.parent.tagName, "\" can't have this attribute."),
            fix: null
          });
        }
        var errorArr = validateString(node.attribValue, node.attribValueStartAt, {
          canBeCommaSeparated: false,
          noSpaceAfterComma: false,
          quickPermittedValues: [],
          permittedValues: knownCharsets
        });
        console.log("054 ".concat("\x1B[".concat(33, "m", "errorArr", "\x1B[", 39, "m"), " = ", JSON.stringify(errorArr, null, 4)));
        errorArr.forEach(function (errorObj) {
          console.log("062 RAISE ERROR");
          context.report(Object.assign({}, errorObj, {
            ruleId: "attribute-validate-charset"
          }));
        });
      }
    }
  };
}

function attributeValidateChecked(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    attribute: function attribute(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 attributeValidateChecked() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("013 ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      console.log("020 attributeValidateChecked(): node = ".concat(JSON.stringify(node, null, 4)));
      var errorArr = [];
      if (node.attribName === "checked") {
        if (node.parent.tagName !== "input") {
          errorArr.push({
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: "Tag \"".concat(node.parent.tagName, "\" can't have this attribute."),
            fix: null
          });
        } else {
          if (Array.isArray(opts) && opts.length && opts.some(function (val) {
            return val.toLowerCase() === "xhtml";
          })) {
            var quotesType = "\"";
            if (node.attribOpeningQuoteAt !== null && context.str[node.attribOpeningQuoteAt] === "'") {
              quotesType = "'";
            } else if (node.attribClosingQuoteAt !== null && context.str[node.attribClosingQuoteAt] === "'") {
              quotesType = "'";
            }
            if (node.attribValue !== "checked" || context.str.slice(node.attribNameEndAt, node.attribEnd) !== "=".concat(quotesType, "checked").concat(quotesType)) {
              console.log("070 ".concat("\x1B[".concat(31, "m", "XHTML requested", "\x1B[", 39, "m"), " - attrib value is missing!"));
              console.log("074 ".concat("\x1B[".concat(32, "m", "\u2588\u2588 FINAL RANGES \u2588\u2588", "\x1B[", 39, "m"), ": ", JSON.stringify([node.attribNameEndAt, node.attribEnd, "=".concat(quotesType, "checked").concat(quotesType)], null, 4)));
              errorArr.push({
                idxFrom: node.attribNameStartAt,
                idxTo: node.attribNameEndAt,
                message: "It's XHTML, add value, =\"checked\".",
                fix: {
                  ranges: [[node.attribNameEndAt, node.attribEnd, "=".concat(quotesType, "checked").concat(quotesType)]]
                }
              });
            }
          } else if (node.attribValue !== null) {
            errorArr.push({
              idxFrom: node.attribNameEndAt,
              idxTo: node.attribEnd,
              message: "Should have no value.",
              fix: {
                ranges: [[node.attribNameEndAt, node.attribEnd]]
              }
            });
          }
          if (Array.isArray(node.parent.attribs) && !node.parent.attribs.some(function (attribObj) {
            return attribObj.attribName === "type";
          })) {
            errorArr.push({
              idxFrom: node.parent.start,
              idxTo: node.parent.end,
              message: "Should have attribute \"type\".",
              fix: null
            });
          } else if (Array.isArray(node.parent.attribs) && !node.parent.attribs.some(function (attribObj) {
            return attribObj.attribName === "type" && ["checkbox", "radio"].includes(attribObj.attribValue);
          })) {
            var idxFrom;
            var idxTo;
            for (var i = 0, len = node.parent.attribs.length; i < len; i++) {
              if (node.parent.attribs[i].attribName === "type") {
                idxFrom = node.parent.attribs[i].attribValueStartAt;
                idxTo = node.parent.attribs[i].attribValueEndAt;
                break;
              }
            }
            errorArr.push({
              idxFrom: idxFrom,
              idxTo: idxTo,
              message: "Only \"checkbox\" or \"radio\" types can be checked.",
              fix: null
            });
          }
        }
        errorArr.forEach(function (errorObj) {
          console.log("157 RAISE ERROR");
          context.report(Object.assign({}, errorObj, {
            ruleId: "attribute-validate-checked"
          }));
        });
      }
    }
  };
}

function attributeValidateCite(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    attribute: function attribute(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 attributeValidateCite() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("014 ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      console.log("021 attributeValidateCite(): node = ".concat(JSON.stringify(node, null, 4)));
      if (node.attribName === "cite") {
        if (!["blockquote", "q", "del", "ins"].includes(node.parent.tagName)) {
          context.report({
            ruleId: "attribute-validate-cite",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: "Tag \"".concat(node.parent.tagName, "\" can't have this attribute."),
            fix: null
          });
        }
        var _checkForWhitespace = checkForWhitespace(node.attribValue, node.attribValueStartAt),
            charStart = _checkForWhitespace.charStart,
            charEnd = _checkForWhitespace.charEnd,
            errorArr = _checkForWhitespace.errorArr;
        console.log("044 ".concat("\x1B[".concat(33, "m", "charStart", "\x1B[", 39, "m"), " = ", JSON.stringify(charStart, null, 4), "; ", "\x1B[".concat(33, "m", "charEnd", "\x1B[", 39, "m"), " = ").concat(JSON.stringify(charEnd, null, 4)));
        console.log("055 ".concat("\x1B[".concat(33, "m", "errorArr", "\x1B[", 39, "m"), " = ", JSON.stringify(errorArr, null, 4)));
        if (!isUrl(context.str.slice(node.attribValueStartAt + charStart, node.attribValueStartAt + charEnd))) {
          errorArr.push({
            idxFrom: node.attribValueStartAt + charStart,
            idxTo: node.attribValueStartAt + charEnd,
            message: "Should be an URI.",
            fix: null
          });
        }
        errorArr.forEach(function (errorObj) {
          console.log("079 RAISE ERROR");
          context.report(Object.assign({}, errorObj, {
            ruleId: "attribute-validate-cite"
          }));
        });
      }
    }
  };
}

function attributeValidateClass(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    attribute: function attribute(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 attributeValidateClass() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("014 ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      console.log("021 attributeValidateClass(): node = ".concat(JSON.stringify(node, null, 4)));
      if (node.attribName === "class") {
        if (["base", "basefont", "head", "html", "meta", "param", "script", "style", "title"].includes(node.parent.tagName)) {
          context.report({
            ruleId: "attribute-validate-class",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: "Tag \"".concat(node.parent.tagName, "\" can't have this attribute."),
            fix: null
          });
        } else {
          var _checkForWhitespace = checkForWhitespace(node.attribValue, node.attribValueStartAt),
              charStart = _checkForWhitespace.charStart,
              charEnd = _checkForWhitespace.charEnd,
              errorArr = _checkForWhitespace.errorArr;
          console.log("052 \n".concat("\x1B[".concat(33, "m", "node.attribValueStartAt + charStart", "\x1B[", 39, "m"), " = ", JSON.stringify(node.attribValueStartAt + charStart, null, 4), "; \n", "\x1B[".concat(33, "m", "node.attribValueStartAt + charEnd", "\x1B[", 39, "m"), " = ").concat(JSON.stringify(node.attribValueStartAt + charEnd, null, 4), "; \n", "\x1B[".concat(33, "m", "errorArr", "\x1B[", 39, "m"), " = ").concat(JSON.stringify(errorArr, null, 4)));
          console.log("068 ".concat("\x1B[".concat(36, "m", "traverse and extract classes", "\x1B[", 39, "m")));
          var classStartsAt = null;
          var classEndsAt = null;
          for (var i = node.attribValueStartAt + charStart; i < node.attribValueStartAt + charEnd; i++) {
            console.log("078 ".concat("\x1B[".concat(36, "m", "------------------------------------------------\ncontext.str[".concat(i, "]"), "\x1B[", 39, "m"), " = ", JSON.stringify(context.str[i], null, 4)));
            if (classStartsAt === null && context.str[i].trim().length) {
              classStartsAt = i;
              console.log("089 SET ".concat("\x1B[".concat(33, "m", "classStartsAt", "\x1B[", 39, "m"), " = ", classStartsAt));
              if (classEndsAt !== null && context.str.slice(classEndsAt, i) !== " ") {
                console.log("097 problems with whitespace, carved out ".concat(JSON.stringify(context.str.slice(classEndsAt, i), null, 4)));
                var ranges = void 0;
                if (context.str[classEndsAt] === " ") {
                  ranges = [[classEndsAt + 1, i]];
                  console.log("109 ".concat("\x1B[".concat(32, "m", "SET", "\x1B[", 39, "m"), " ", "\x1B[".concat(33, "m", "ranges", "\x1B[", 39, "m"), " = ", JSON.stringify(ranges, null, 4)));
                } else if (context.str[i - 1] === " ") {
                  ranges = [[classEndsAt, i - 1]];
                  console.log("118 ".concat("\x1B[".concat(32, "m", "SET", "\x1B[", 39, "m"), " ", "\x1B[".concat(33, "m", "ranges", "\x1B[", 39, "m"), " = ", JSON.stringify(ranges, null, 4)));
                } else {
                  console.log("126 worst case scenario, replace the whole whitespace");
                  ranges = [[classEndsAt, i, " "]];
                  console.log("130 ".concat("\x1B[".concat(32, "m", "SET", "\x1B[", 39, "m"), " ", "\x1B[".concat(33, "m", "ranges", "\x1B[", 39, "m"), " = ", JSON.stringify(ranges, null, 4)));
                }
                errorArr.push({
                  idxFrom: classEndsAt,
                  idxTo: i,
                  message: "Should be a single space.",
                  fix: {
                    ranges: [[classEndsAt, i, " "]]
                  }
                });
                classEndsAt = null;
              }
            }
            if (classStartsAt !== null && (!context.str[i].trim().length || i + 1 === node.attribValueStartAt + charEnd)) {
              classEndsAt = i + 1 === node.attribValueStartAt + charEnd ? i + 1 : i;
              console.log("162 ".concat("\x1B[".concat(32, "m", "SET", "\x1B[", 39, "m"), " ", "\x1B[".concat(33, "m", "classEndsAt", "\x1B[", 39, "m"), " = ", classEndsAt));
              console.log("165 ".concat("\x1B[".concat(32, "m", "\u2588\u2588", "\x1B[", 39, "m"), " ", "\x1B[".concat(32, "m", "carved out a class name", "\x1B[", 39, "m"), " ", JSON.stringify(context.str.slice(classStartsAt, i + 1 === node.attribValueStartAt + charEnd ? i + 1 : i), null, 0)));
              console.log("176 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
              console.log("R1 = \"".concat(classNameRegex.test(context.str.slice(classStartsAt, i + 1 === node.attribValueStartAt + charEnd ? i + 1 : i)), "\""));
              if (!classNameRegex.test(context.str.slice(classStartsAt, i + 1 === node.attribValueStartAt + charEnd ? i + 1 : i))) {
                console.log("194 PUSH ".concat(JSON.stringify({
                  idxFrom: classStartsAt,
                  idxTo: i + 1 === node.attribValueStartAt + charEnd ? i + 1 : i,
                  message: "Wrong class name.",
                  fix: null
                }, null, 4)));
                errorArr.push({
                  idxFrom: classStartsAt,
                  idxTo: i + 1 === node.attribValueStartAt + charEnd ? i + 1 : i,
                  message: "Wrong class name.",
                  fix: null
                });
              }
              classStartsAt = null;
              console.log("218 ".concat("\x1B[".concat(31, "m", "RESET", "\x1B[", 39, "m"), " ", "\x1B[".concat(33, "m", "classStartsAt", "\x1B[", 39, "m"), " = ", classStartsAt));
            }
            console.log(" ");
            console.log(" ");
            console.log("".concat("\x1B[".concat(90, "m", "\u2588\u2588 classStartsAt = ".concat(classStartsAt, "; classEndsAt = ").concat(classEndsAt), "\x1B[", 39, "m")));
            console.log(" ");
            console.log(" ");
          }
          console.log("232 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\nFINALLY,\n".concat("\x1B[".concat(33, "m", "errorArr", "\x1B[", 39, "m"), ":\n", JSON.stringify(errorArr, null, 4)));
          errorArr.forEach(function (errorObj) {
            console.log("240 RAISE ERROR");
            context.report(Object.assign({}, errorObj, {
              ruleId: "attribute-validate-class"
            }));
          });
        }
      }
    }
  };
}

function attributeValidateWidth(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    attribute: function attribute(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 attributeValidateWidth() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("013 ".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      if (node.attribName === "width") {
        if (!["hr", "iframe", "img", "object", "table", "td", "th", "applet", "col", "colgroup", "pre"].includes(node.parent.tagName)) {
          context.report({
            ruleId: "attribute-validate-width",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: "Tag \"".concat(node.parent.tagName, "\" can't have this attribute."),
            fix: null
          });
        }
        var errorArr = validateDigitAndUnit(node.attribValue, node.attribValueStartAt, {
          badUnits: ["px"],
          noUnitsIsFine: true
        });
        console.log("058 received errorArr = ".concat(JSON.stringify(errorArr, null, 4)));
        errorArr.forEach(function (errorObj) {
          console.log("062 RAISE ERROR");
          context.report(Object.assign({}, errorObj, {
            ruleId: "attribute-validate-width"
          }));
        });
      }
    }
  };
}

function htmlEntitiesNotEmailFriendly(context) {
  return {
    entity: function entity(_ref) {
      var idxFrom = _ref.idxFrom,
          idxTo = _ref.idxTo;
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 htmlEntitiesNotEmailFriendly() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      if (Object.keys(htmlEntitiesNotEmailFriendly$1.notEmailFriendly).includes(context.str.slice(idxFrom + 1, idxTo - 1))) {
        console.log("020 caught an email-unfriendly entity");
        context.report({
          ruleId: "bad-named-html-entity-not-email-friendly",
          message: "Email-unfriendly named HTML entity.",
          idxFrom: idxFrom,
          idxTo: idxTo,
          fix: {
            ranges: [[idxFrom, idxTo, "&".concat(htmlEntitiesNotEmailFriendly$1.notEmailFriendly[context.str.slice(idxFrom + 1, idxTo - 1)], ";")]]
          }
        });
      }
    }
  };
}

function characterEncode(context) {
  for (var _len = arguments.length, opts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    opts[_key - 1] = arguments[_key];
  }
  return {
    character: function character(_ref) {
      var type = _ref.type,
          chr = _ref.chr,
          i = _ref.i;
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 characterEncode() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("".concat("\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      var mode = "named";
      if (Array.isArray(opts) && ["named", "numeric"].includes(opts[0])) {
        mode = opts[0];
      }
      console.log("032 characterEncode(): ".concat("\x1B[".concat(35, "m", "calculated mode", "\x1B[", 39, "m"), " = \"", mode, "\""));
      console.log("notEmailFriendly[".concat(Object.keys(htmlEntitiesNotEmailFriendly$1.notEmailFriendly)[10], "] = ").concat(htmlEntitiesNotEmailFriendly$1.notEmailFriendly[Object.keys(htmlEntitiesNotEmailFriendly$1.notEmailFriendly)[10]]));
      if (type === "text" && typeof chr === "string" && (chr.charCodeAt(0) > 127 || "<>\"&".includes(chr)) && (chr.charCodeAt(0) !== 160 || !Object.keys(context.processedRulesConfig).includes("bad-character-non-breaking-space") || !isEnabled(context.processedRulesConfig["bad-character-non-breaking-space"]))) {
        var encodedChr = he.encode(chr, {
          useNamedReferences: mode === "named"
        });
        if (Object.keys(htmlEntitiesNotEmailFriendly$1.notEmailFriendly).includes(encodedChr.slice(1, encodedChr.length - 1))) {
          encodedChr = "&".concat(htmlEntitiesNotEmailFriendly$1.notEmailFriendly[encodedChr.slice(1, encodedChr.length - 1)], ";");
        }
        console.log("066 ".concat("\x1B[".concat(33, "m", "encodedChr", "\x1B[", 39, "m"), " = ", JSON.stringify(encodedChr, null, 4)));
        var charName = "";
        if (chr.charCodeAt(0) === 160) {
          charName = " no-break space";
        } else if (chr.charCodeAt(0) === 38) {
          charName = " ampersand";
        } else if (chr.charCodeAt(0) === 60) {
          charName = " less than";
        } else if (chr.charCodeAt(0) === 62) {
          charName = " greater than";
        } else if (chr.charCodeAt(0) === 34) {
          charName = " double quotes";
        } else if (chr.charCodeAt(0) === 163) {
          charName = " pound sign";
        }
        context.report({
          ruleId: "character-encode",
          message: "Unencoded".concat(charName, " character."),
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1, encodedChr]]
          }
        });
      }
    }
  };
}

function characterUnspacedPunctuation(context) {
  for (var _len = arguments.length, originalOpts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    originalOpts[_key - 1] = arguments[_key];
  }
  var charCodeMapping = {
    "63": "questionMark",
    "33": "exclamationMark",
    "59": "semicolon",
    "187": "rightDoubleAngleQuotMark",
    "171": "leftDoubleAngleQuotMark"
  };
  return {
    text: function text(node) {
      console.log("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 characterUnspacedPunctuation() \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588");
      console.log("".concat("\x1B[".concat(33, "m", "originalOpts", "\x1B[", 39, "m"), " = ", JSON.stringify(originalOpts, null, 4)));
      console.log("".concat("\x1B[".concat(33, "m", "node", "\x1B[", 39, "m"), " = ", JSON.stringify(node, null, 4)));
      var defaults = {
        questionMark: {
          whitespaceLeft: "never",
          whitespaceRight: "always"
        },
        exclamationMark: {
          whitespaceLeft: "never",
          whitespaceRight: "always"
        },
        semicolon: {
          whitespaceLeft: "never",
          whitespaceRight: "always"
        },
        rightDoubleAngleQuotMark: {
          whitespaceLeft: "never",
          whitespaceRight: "always"
        },
        leftDoubleAngleQuotMark: {
          whitespaceLeft: "never",
          whitespaceRight: "always"
        }
      };
      var opts = Object.assign({}, defaults);
      if (Array.isArray(originalOpts) && originalOpts.length && _typeof(originalOpts[0]) === "object" && originalOpts[0] !== null) {
        opts = Object.assign({}, defaults, originalOpts[0]);
      }
      console.log("072 ".concat("\x1B[".concat(32, "m", "FINAL CALCULATED", "\x1B[", 39, "m"), " ", "\x1B[".concat(33, "m", "opts", "\x1B[", 39, "m"), " = ", JSON.stringify(opts, null, 4)));
      for (var i = node.start; i < node.end; i++) {
        console.log("082 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 i = ".concat(i));
        var charCode = context.str[i].charCodeAt(0);
        if (charCodeMapping[String(charCode)]) {
          console.log("caught ".concat(charCodeMapping[String(charCode)], "!"));
          var charName = charCodeMapping[String(charCode)];
          if (opts[charName].whitespaceLeft === "never" && i && !context.str[i - 1].trim().length) {
            console.log("".concat("\x1B[".concat(31, "m", "! BAD SPACE ON THE LEFT !", "\x1B[", 39, "m")));
            console.log("095 PING [".concat(stringLeftRight.left(context.str, i) + 1, ", ").concat(i, "]"));
            context.report({
              ruleId: "character-unspaced-punctuation",
              severity: 1,
              idxFrom: stringLeftRight.left(context.str, i) + 1,
              idxTo: i,
              message: "Remove the whitespace.",
              fix: {
                ranges: [[stringLeftRight.left(context.str, i) + 1, i]]
              }
            });
          }
          if (opts[charName].whitespaceRight === "never" && i < node.end - 1 && !context.str[i + 1].trim().length) {
            console.log("".concat("\x1B[".concat(31, "m", "! BAD SPACE ON THE RIGHT !", "\x1B[", 39, "m")));
            console.log("115 PING [".concat(i + 1, ", ").concat(stringLeftRight.right(context.str, i), "]"));
            context.report({
              ruleId: "character-unspaced-punctuation",
              severity: 1,
              idxFrom: i + 1,
              idxTo: stringLeftRight.right(context.str, i),
              message: "Remove the whitespace.",
              fix: {
                ranges: [[i + 1, stringLeftRight.right(context.str, i)]]
              }
            });
          }
          if (opts[charName].whitespaceLeft === "always" && i && context.str[i - 1].trim().length) {
            console.log("".concat("\x1B[".concat(31, "m", "! MISSING SPACE ON THE LEFT !", "\x1B[", 39, "m")));
            console.log("135 PING [".concat(i, ", ").concat(i, ", \" \"]"));
            context.report({
              ruleId: "character-unspaced-punctuation",
              severity: 1,
              idxFrom: i,
              idxTo: i + 1,
              message: "Add a space.",
              fix: {
                ranges: [[i, i, " "]]
              }
            });
          }
          if (opts[charName].whitespaceRight === "always" && i < node.end - 1 && context.str[i + 1].trim().length) {
            console.log("".concat("\x1B[".concat(31, "m", "! MISSING SPACE ON THE RIGHT !", "\x1B[", 39, "m")));
            console.log("155 PING [".concat(i + 1, ", ").concat(i + 1, ", \" \"]"));
            context.report({
              ruleId: "character-unspaced-punctuation",
              severity: 1,
              idxFrom: i,
              idxTo: i + 1,
              message: "Add a space.",
              fix: {
                ranges: [[i + 1, i + 1, " "]]
              }
            });
          }
        }
      }
    }
  };
}

var builtInRules = {};
defineLazyProp(builtInRules, "bad-character-null", function () {
  return badCharacterNull;
});
defineLazyProp(builtInRules, "bad-character-start-of-heading", function () {
  return badCharacterStartOfHeading;
});
defineLazyProp(builtInRules, "bad-character-start-of-text", function () {
  return badCharacterStartOfText;
});
defineLazyProp(builtInRules, "bad-character-end-of-text", function () {
  return badCharacterEndOfText;
});
defineLazyProp(builtInRules, "bad-character-end-of-transmission", function () {
  return badCharacterEndOfTransmission;
});
defineLazyProp(builtInRules, "bad-character-enquiry", function () {
  return badCharacterEnquiry;
});
defineLazyProp(builtInRules, "bad-character-acknowledge", function () {
  return badCharacterAcknowledge;
});
defineLazyProp(builtInRules, "bad-character-bell", function () {
  return badCharacterBell;
});
defineLazyProp(builtInRules, "bad-character-backspace", function () {
  return badCharacterBackspace;
});
defineLazyProp(builtInRules, "bad-character-tabulation", function () {
  return badCharacterTabulation;
});
defineLazyProp(builtInRules, "bad-character-line-tabulation", function () {
  return badCharacterLineTabulation;
});
defineLazyProp(builtInRules, "bad-character-form-feed", function () {
  return badCharacterFormFeed;
});
defineLazyProp(builtInRules, "bad-character-shift-out", function () {
  return badCharacterShiftOut;
});
defineLazyProp(builtInRules, "bad-character-shift-in", function () {
  return badCharacterShiftIn;
});
defineLazyProp(builtInRules, "bad-character-data-link-escape", function () {
  return badCharacterDataLinkEscape;
});
defineLazyProp(builtInRules, "bad-character-device-control-one", function () {
  return badCharacterDeviceControlOne;
});
defineLazyProp(builtInRules, "bad-character-device-control-two", function () {
  return badCharacterDeviceControlTwo;
});
defineLazyProp(builtInRules, "bad-character-device-control-three", function () {
  return badCharacterDeviceControlThree;
});
defineLazyProp(builtInRules, "bad-character-device-control-four", function () {
  return badCharacterDeviceControlFour;
});
defineLazyProp(builtInRules, "bad-character-negative-acknowledge", function () {
  return badCharacterNegativeAcknowledge;
});
defineLazyProp(builtInRules, "bad-character-synchronous-idle", function () {
  return badCharacterSynchronousIdle;
});
defineLazyProp(builtInRules, "bad-character-end-of-transmission-block", function () {
  return badCharacterEndOfTransmissionBlock;
});
defineLazyProp(builtInRules, "bad-character-cancel", function () {
  return badCharacterCancel;
});
defineLazyProp(builtInRules, "bad-character-end-of-medium", function () {
  return badCharacterEndOfMedium;
});
defineLazyProp(builtInRules, "bad-character-substitute", function () {
  return badCharacterSubstitute;
});
defineLazyProp(builtInRules, "bad-character-escape", function () {
  return badCharacterEscape;
});
defineLazyProp(builtInRules, "bad-character-information-separator-four", function () {
  return badCharacterInformationSeparatorFour;
});
defineLazyProp(builtInRules, "bad-character-information-separator-three", function () {
  return badCharacterInformationSeparatorThree;
});
defineLazyProp(builtInRules, "bad-character-information-separator-two", function () {
  return badCharacterInformationSeparatorTwo;
});
defineLazyProp(builtInRules, "bad-character-information-separator-one", function () {
  return badCharacterInformationSeparatorTwo$1;
});
defineLazyProp(builtInRules, "bad-character-delete", function () {
  return badCharacterDelete;
});
defineLazyProp(builtInRules, "bad-character-control-0080", function () {
  return badCharacterControl0080;
});
defineLazyProp(builtInRules, "bad-character-control-0081", function () {
  return badCharacterControl0081;
});
defineLazyProp(builtInRules, "bad-character-break-permitted-here", function () {
  return badCharacterBreakPermittedHere;
});
defineLazyProp(builtInRules, "bad-character-no-break-here", function () {
  return badCharacterNoBreakHere;
});
defineLazyProp(builtInRules, "bad-character-control-0084", function () {
  return badCharacterControl0084;
});
defineLazyProp(builtInRules, "bad-character-next-line", function () {
  return badCharacterNextLine;
});
defineLazyProp(builtInRules, "bad-character-start-of-selected-area", function () {
  return badCharacterStartOfSelectedArea;
});
defineLazyProp(builtInRules, "bad-character-end-of-selected-area", function () {
  return badCharacterEndOfSelectedArea;
});
defineLazyProp(builtInRules, "bad-character-character-tabulation-set", function () {
  return badCharacterCharacterTabulationSet;
});
defineLazyProp(builtInRules, "bad-character-character-tabulation-with-justification", function () {
  return badCharacterCharacterTabulationWithJustification;
});
defineLazyProp(builtInRules, "bad-character-line-tabulation-set", function () {
  return badCharacterLineTabulationSet;
});
defineLazyProp(builtInRules, "bad-character-partial-line-forward", function () {
  return badCharacterPartialLineForward;
});
defineLazyProp(builtInRules, "bad-character-partial-line-backward", function () {
  return badCharacterPartialLineBackward;
});
defineLazyProp(builtInRules, "bad-character-reverse-line-feed", function () {
  return badCharacterReverseLineFeed;
});
defineLazyProp(builtInRules, "bad-character-single-shift-two", function () {
  return badCharacterSingleShiftTwo;
});
defineLazyProp(builtInRules, "bad-character-single-shift-three", function () {
  return badCharacterSingleShiftTwo$1;
});
defineLazyProp(builtInRules, "bad-character-device-control-string", function () {
  return badCharacterDeviceControlString;
});
defineLazyProp(builtInRules, "bad-character-private-use-1", function () {
  return badCharacterPrivateUseOne;
});
defineLazyProp(builtInRules, "bad-character-private-use-2", function () {
  return badCharacterPrivateUseTwo;
});
defineLazyProp(builtInRules, "bad-character-set-transmit-state", function () {
  return badCharacterSetTransmitState;
});
defineLazyProp(builtInRules, "bad-character-cancel-character", function () {
  return badCharacterCancelCharacter;
});
defineLazyProp(builtInRules, "bad-character-message-waiting", function () {
  return badCharacterMessageWaiting;
});
defineLazyProp(builtInRules, "bad-character-start-of-protected-area", function () {
  return badCharacterStartOfProtectedArea;
});
defineLazyProp(builtInRules, "bad-character-end-of-protected-area", function () {
  return badCharacterEndOfProtectedArea;
});
defineLazyProp(builtInRules, "bad-character-start-of-string", function () {
  return badCharacterStartOfString;
});
defineLazyProp(builtInRules, "bad-character-control-0099", function () {
  return badCharacterControl0099;
});
defineLazyProp(builtInRules, "bad-character-single-character-introducer", function () {
  return badCharacterSingleCharacterIntroducer;
});
defineLazyProp(builtInRules, "bad-character-control-sequence-introducer", function () {
  return badCharacterControlSequenceIntroducer;
});
defineLazyProp(builtInRules, "bad-character-string-terminator", function () {
  return badCharacterStringTerminator;
});
defineLazyProp(builtInRules, "bad-character-operating-system-command", function () {
  return badCharacterOperatingSystemCommand;
});
defineLazyProp(builtInRules, "bad-character-private-message", function () {
  return badCharacterPrivateMessage;
});
defineLazyProp(builtInRules, "bad-character-application-program-command", function () {
  return badCharacterApplicationProgramCommand;
});
defineLazyProp(builtInRules, "bad-character-soft-hyphen", function () {
  return badCharacterSoftHyphen;
});
defineLazyProp(builtInRules, "bad-character-non-breaking-space", function () {
  return badCharacterNonBreakingSpace;
});
defineLazyProp(builtInRules, "bad-character-ogham-space-mark", function () {
  return badCharacterOghamSpaceMark;
});
defineLazyProp(builtInRules, "bad-character-en-quad", function () {
  return badCharacterEnQuad;
});
defineLazyProp(builtInRules, "bad-character-em-quad", function () {
  return badCharacterEmQuad;
});
defineLazyProp(builtInRules, "bad-character-en-space", function () {
  return badCharacterEnSpace;
});
defineLazyProp(builtInRules, "bad-character-em-space", function () {
  return badCharacterEmSpace;
});
defineLazyProp(builtInRules, "bad-character-three-per-em-space", function () {
  return badCharacterThreePerEmSpace;
});
defineLazyProp(builtInRules, "bad-character-four-per-em-space", function () {
  return badCharacterFourPerEmSpace;
});
defineLazyProp(builtInRules, "bad-character-six-per-em-space", function () {
  return badCharacterSixPerEmSpace;
});
defineLazyProp(builtInRules, "bad-character-figure-space", function () {
  return badCharacterFigureSpace;
});
defineLazyProp(builtInRules, "bad-character-punctuation-space", function () {
  return badCharacterPunctuationSpace;
});
defineLazyProp(builtInRules, "bad-character-thin-space", function () {
  return badCharacterThinSpace;
});
defineLazyProp(builtInRules, "bad-character-hair-space", function () {
  return badCharacterHairSpace;
});
defineLazyProp(builtInRules, "bad-character-zero-width-space", function () {
  return badCharacterZeroWidthSpace;
});
defineLazyProp(builtInRules, "bad-character-zero-width-non-joiner", function () {
  return badCharacterZeroWidthNonJoiner;
});
defineLazyProp(builtInRules, "bad-character-zero-width-joiner", function () {
  return badCharacterZeroWidthJoiner;
});
defineLazyProp(builtInRules, "bad-character-left-to-right-mark", function () {
  return badCharacterLeftToRightMark;
});
defineLazyProp(builtInRules, "bad-character-right-to-left-mark", function () {
  return badCharacterRightToLeftMark;
});
defineLazyProp(builtInRules, "bad-character-left-to-right-embedding", function () {
  return badCharacterLeftToRightEmbedding;
});
defineLazyProp(builtInRules, "bad-character-right-to-left-embedding", function () {
  return badCharacterRightToLeftEmbedding;
});
defineLazyProp(builtInRules, "bad-character-pop-directional-formatting", function () {
  return badCharacterPopDirectionalFormatting;
});
defineLazyProp(builtInRules, "bad-character-left-to-right-override", function () {
  return badCharacterLeftToRightOverride;
});
defineLazyProp(builtInRules, "bad-character-right-to-left-override", function () {
  return badCharacterRightToLeftOverride;
});
defineLazyProp(builtInRules, "bad-character-word-joiner", function () {
  return badCharacterWordJoiner;
});
defineLazyProp(builtInRules, "bad-character-function-application", function () {
  return badCharacterFunctionApplication;
});
defineLazyProp(builtInRules, "bad-character-invisible-times", function () {
  return badCharacterInvisibleTimes;
});
defineLazyProp(builtInRules, "bad-character-invisible-separator", function () {
  return badCharacterInvisibleSeparator;
});
defineLazyProp(builtInRules, "bad-character-invisible-plus", function () {
  return badCharacterInvisiblePlus;
});
defineLazyProp(builtInRules, "bad-character-left-to-right-isolate", function () {
  return badCharacterLeftToRightIsolate;
});
defineLazyProp(builtInRules, "bad-character-right-to-left-isolate", function () {
  return badCharacterRightToLeftIsolate;
});
defineLazyProp(builtInRules, "bad-character-first-strong-isolate", function () {
  return badCharacterFirstStrongIsolate;
});
defineLazyProp(builtInRules, "bad-character-pop-directional-isolate", function () {
  return badCharacterPopDirectionalIsolate;
});
defineLazyProp(builtInRules, "bad-character-inhibit-symmetric-swapping", function () {
  return badCharacterInhibitSymmetricSwapping;
});
defineLazyProp(builtInRules, "bad-character-activate-symmetric-swapping", function () {
  return badCharacterActivateSymmetricSwapping;
});
defineLazyProp(builtInRules, "bad-character-inhibit-arabic-form-shaping", function () {
  return badCharacterInhibitArabicFormShaping;
});
defineLazyProp(builtInRules, "bad-character-activate-arabic-form-shaping", function () {
  return badCharacterActivateArabicFormShaping;
});
defineLazyProp(builtInRules, "bad-character-national-digit-shapes", function () {
  return badCharacterNationalDigitShapes;
});
defineLazyProp(builtInRules, "bad-character-nominal-digit-shapes", function () {
  return badCharacterNominalDigitShapes;
});
defineLazyProp(builtInRules, "bad-character-zero-width-no-break-space", function () {
  return badCharacterZeroWidthNoBreakSpace;
});
defineLazyProp(builtInRules, "bad-character-interlinear-annotation-anchor", function () {
  return badCharacterInterlinearAnnotationAnchor;
});
defineLazyProp(builtInRules, "bad-character-interlinear-annotation-separator", function () {
  return badCharacterInterlinearAnnotationSeparator;
});
defineLazyProp(builtInRules, "bad-character-interlinear-annotation-terminator", function () {
  return badCharacterInterlinearAnnotationTerminator;
});
defineLazyProp(builtInRules, "bad-character-line-separator", function () {
  return badCharacterLineSeparator;
});
defineLazyProp(builtInRules, "bad-character-paragraph-separator", function () {
  return badCharacterParagraphSeparator;
});
defineLazyProp(builtInRules, "bad-character-narrow-no-break-space", function () {
  return badCharacterNarrowNoBreakSpace;
});
defineLazyProp(builtInRules, "bad-character-medium-mathematical-space", function () {
  return badCharacterMediumMathematicalSpace;
});
defineLazyProp(builtInRules, "bad-character-ideographic-space", function () {
  return badCharacterIdeographicSpace;
});
defineLazyProp(builtInRules, "bad-character-replacement-character", function () {
  return badCharacterReplacementCharacter;
});
defineLazyProp(builtInRules, "tag-space-after-opening-bracket", function () {
  return tagSpaceAfterOpeningBracket;
});
defineLazyProp(builtInRules, "tag-space-before-closing-slash", function () {
  return tagSpaceBeforeClosingSlash;
});
defineLazyProp(builtInRules, "tag-space-between-slash-and-bracket", function () {
  return tagSpaceBetweenSlashAndBracket;
});
defineLazyProp(builtInRules, "tag-closing-backslash", function () {
  return tagClosingBackslash;
});
defineLazyProp(builtInRules, "tag-void-slash", function () {
  return tagVoidSlash;
});
defineLazyProp(builtInRules, "tag-name-case", function () {
  return tagNameCase;
});
defineLazyProp(builtInRules, "tag-is-present", function () {
  return tagIsPresent;
});
defineLazyProp(builtInRules, "tag-bold", function () {
  return tagBold;
});
defineLazyProp(builtInRules, "attribute-malformed", function () {
  return attributeMalformed;
});
defineLazyProp(builtInRules, "attribute-validate-abbr", function () {
  return attributeValidateAbbr;
});
defineLazyProp(builtInRules, "attribute-validate-accept-charset", function () {
  return attributeValidateAcceptCharset;
});
defineLazyProp(builtInRules, "attribute-validate-accept", function () {
  return attributeValidateAccept;
});
defineLazyProp(builtInRules, "attribute-validate-accesskey", function () {
  return attributeValidateAccesskey;
});
defineLazyProp(builtInRules, "attribute-validate-action", function () {
  return attributeValidateAction;
});
defineLazyProp(builtInRules, "attribute-validate-align", function () {
  return attributeValidateAlign;
});
defineLazyProp(builtInRules, "attribute-validate-alink", function () {
  return attributeValidateAlink;
});
defineLazyProp(builtInRules, "attribute-validate-archive", function () {
  return attributeValidateArchive;
});
defineLazyProp(builtInRules, "attribute-validate-axis", function () {
  return attributeValidateAxis;
});
defineLazyProp(builtInRules, "attribute-validate-background", function () {
  return attributeValidateBackground;
});
defineLazyProp(builtInRules, "attribute-validate-bgcolor", function () {
  return attributeValidateBgcolor;
});
defineLazyProp(builtInRules, "attribute-validate-border", function () {
  return attributeValidateBorder;
});
defineLazyProp(builtInRules, "attribute-validate-cellpadding", function () {
  return attributeValidateCellpadding;
});
defineLazyProp(builtInRules, "attribute-validate-cellspacing", function () {
  return attributeValidateCellspacing;
});
defineLazyProp(builtInRules, "attribute-validate-char", function () {
  return attributeValidateChar;
});
defineLazyProp(builtInRules, "attribute-validate-charoff", function () {
  return attributeValidateCharoff;
});
defineLazyProp(builtInRules, "attribute-validate-charset", function () {
  return attributeValidateCharset;
});
defineLazyProp(builtInRules, "attribute-validate-checked", function () {
  return attributeValidateChecked;
});
defineLazyProp(builtInRules, "attribute-validate-cite", function () {
  return attributeValidateCite;
});
defineLazyProp(builtInRules, "attribute-validate-class", function () {
  return attributeValidateClass;
});
defineLazyProp(builtInRules, "attribute-validate-width", function () {
  return attributeValidateWidth;
});
defineLazyProp(builtInRules, "bad-named-html-entity-not-email-friendly", function () {
  return htmlEntitiesNotEmailFriendly;
});
defineLazyProp(builtInRules, "character-encode", function () {
  return characterEncode;
});
defineLazyProp(builtInRules, "character-unspaced-punctuation", function () {
  return characterUnspacedPunctuation;
});
function get(something) {
  return builtInRules[something];
}
function normaliseRequestedRules(opts) {
  var res = {};
  if (Object.keys(opts).includes("all") && isEnabled(opts.all)) {
    Object.keys(builtInRules).forEach(function (ruleName) {
      res[ruleName] = opts.all;
    });
  } else {
    var temp;
    if (Object.keys(opts).some(function (ruleName) {
      if (["bad-character", "bad-character*", "bad-character-*"].includes(ruleName)) {
        temp = ruleName;
        return true;
      }
    })) {
      allBadCharacterRules.forEach(function (ruleName) {
        res[ruleName] = opts[temp];
      });
    }
    if (Object.keys(opts).some(function (ruleName) {
      if (["tag", "tag*", "tag-*"].includes(ruleName)) {
        temp = ruleName;
        return true;
      }
    })) {
      allTagRules.forEach(function (ruleName) {
        res[ruleName] = opts[temp];
      });
    }
    if (Object.keys(opts).some(function (ruleName) {
      if (["attribute", "attribute*", "attribute-*"].includes(ruleName)) {
        temp = ruleName;
        return true;
      }
    })) {
      allAttribRules.forEach(function (ruleName) {
        res[ruleName] = opts[temp];
      });
    }
    if (Object.keys(opts).includes("bad-html-entity")) {
      allBadNamedHTMLEntityRules.forEach(function (ruleName) {
        res[ruleName] = opts["bad-html-entity"];
      });
    }
    Object.keys(opts).forEach(function (ruleName) {
      if (!["all", "tag", "tag*", "tag-*", "attribute", "attribute*", "attribute-*", "bad-character", "bad-character", "bad-character*", "bad-character-*", "bad-html-entity"].includes(ruleName)) {
        if (Object.keys(builtInRules).includes(ruleName)) {
          res[ruleName] = clone(opts[ruleName]);
        } else if (ruleName.includes("*")) {
          Object.keys(builtInRules).forEach(function (builtInRule) {
            if (matcher.isMatch(builtInRule, ruleName)) {
              res[builtInRule] = clone(opts[ruleName]);
            }
          });
        }
      }
    });
  }
  console.log("1125 normaliseRequestedRules() FINAL ".concat("\x1B[".concat(33, "m", "res", "\x1B[", 39, "m"), " = ", JSON.stringify(res, null, 4)));
  return res;
}

var domain;
function EventHandlers() {}
EventHandlers.prototype = Object.create(null);
function EventEmitter() {
  EventEmitter.init.call(this);
}
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.usingDomains = false;
EventEmitter.prototype.domain = undefined;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;
EventEmitter.defaultMaxListeners = 10;
EventEmitter.init = function () {
  this.domain = null;
  if (EventEmitter.usingDomains) {
    if (domain.active && !(this instanceof domain.Domain)) ;
  }
  if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
    this._events = new EventHandlers();
    this._eventsCount = 0;
  }
  this._maxListeners = this._maxListeners || undefined;
};
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || isNaN(n)) throw new TypeError('"n" argument must be a positive number');
  this._maxListeners = n;
  return this;
};
function $getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};
function emitNone(handler, isFn, self) {
  if (isFn) handler.call(self);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i) listeners[i].call(self);
  }
}
function emitOne(handler, isFn, self, arg1) {
  if (isFn) handler.call(self, arg1);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i) listeners[i].call(self, arg1);
  }
}
function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn) handler.call(self, arg1, arg2);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i) listeners[i].call(self, arg1, arg2);
  }
}
function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn) handler.call(self, arg1, arg2, arg3);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i) listeners[i].call(self, arg1, arg2, arg3);
  }
}
function emitMany(handler, isFn, self, args) {
  if (isFn) handler.apply(self, args);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i) listeners[i].apply(self, args);
  }
}
EventEmitter.prototype.emit = function emit(type) {
  var er, handler, len, args, i, events, domain;
  var doError = type === 'error';
  events = this._events;
  if (events) doError = doError && events.error == null;else if (!doError) return false;
  domain = this.domain;
  if (doError) {
    er = arguments[1];
    if (domain) {
      if (!er) er = new Error('Uncaught, unspecified "error" event');
      er.domainEmitter = this;
      er.domain = domain;
      er.domainThrown = false;
      domain.emit('error', er);
    } else if (er instanceof Error) {
      throw er;
    } else {
      var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
      err.context = er;
      throw err;
    }
    return false;
  }
  handler = events[type];
  if (!handler) return false;
  var isFn = typeof handler === 'function';
  len = arguments.length;
  switch (len) {
    case 1:
      emitNone(handler, isFn, this);
      break;
    case 2:
      emitOne(handler, isFn, this, arguments[1]);
      break;
    case 3:
      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
      break;
    case 4:
      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
      break;
    default:
      args = new Array(len - 1);
      for (i = 1; i < len; i++) args[i - 1] = arguments[i];
      emitMany(handler, isFn, this, args);
  }
  return true;
};
function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;
  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
  events = target._events;
  if (!events) {
    events = target._events = new EventHandlers();
    target._eventsCount = 0;
  } else {
    if (events.newListener) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener);
      events = target._events;
    }
    existing = events[type];
  }
  if (!existing) {
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      existing = events[type] = prepend ? [listener, existing] : [existing, listener];
    } else {
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    }
    if (!existing.warned) {
      m = $getMaxListeners(target);
      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + type + ' listeners added. ' + 'Use emitter.setMaxListeners() to increase limit');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        emitWarning(w);
      }
    }
  }
  return target;
}
function emitWarning(e) {
  typeof console.warn === 'function' ? console.warn(e) : console.log(e);
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};
function _onceWrap(target, type, listener) {
  var fired = false;
  function g() {
    target.removeListener(type, g);
    if (!fired) {
      fired = true;
      listener.apply(target, arguments);
    }
  }
  g.listener = listener;
  return g;
}
EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
  this.on(type, _onceWrap(this, type, listener));
  return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
};
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;
  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
  events = this._events;
  if (!events) return this;
  list = events[type];
  if (!list) return this;
  if (list === listener || list.listener && list.listener === listener) {
    if (--this._eventsCount === 0) this._events = new EventHandlers();else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;
    for (i = list.length; i-- > 0;) {
      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }
    if (position < 0) return this;
    if (list.length === 1) {
      list[0] = undefined;
      if (--this._eventsCount === 0) {
        this._events = new EventHandlers();
        return this;
      } else {
        delete events[type];
      }
    } else {
      spliceOne(list, position);
    }
    if (events.removeListener) this.emit('removeListener', type, originalListener || listener);
  }
  return this;
};
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events;
  events = this._events;
  if (!events) return this;
  if (!events.removeListener) {
    if (arguments.length === 0) {
      this._events = new EventHandlers();
      this._eventsCount = 0;
    } else if (events[type]) {
      if (--this._eventsCount === 0) this._events = new EventHandlers();else delete events[type];
    }
    return this;
  }
  if (arguments.length === 0) {
    var keys = Object.keys(events);
    for (var i = 0, key; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = new EventHandlers();
    this._eventsCount = 0;
    return this;
  }
  listeners = events[type];
  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners) {
    do {
      this.removeListener(type, listeners[listeners.length - 1]);
    } while (listeners[0]);
  }
  return this;
};
EventEmitter.prototype.listeners = function listeners(type) {
  var evlistener;
  var ret;
  var events = this._events;
  if (!events) ret = [];else {
    evlistener = events[type];
    if (!evlistener) ret = [];else if (typeof evlistener === 'function') ret = [evlistener.listener || evlistener];else ret = unwrapListeners(evlistener);
  }
  return ret;
};
EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;
  if (events) {
    var evlistener = events[type];
    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }
  return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) list[i] = list[k];
  list.pop();
}
function arrayClone(arr, i) {
  var copy = new Array(i);
  while (i--) copy[i] = arr[i];
  return copy;
}
function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

EventEmitter.defaultMaxListeners = 0;
var Linter =
function (_EventEmitter) {
  _inherits(Linter, _EventEmitter);
  function Linter() {
    _classCallCheck(this, Linter);
    return _possibleConstructorReturn(this, _getPrototypeOf(Linter).apply(this, arguments));
  }
  _createClass(Linter, [{
    key: "verify",
    value: function verify(str, config) {
      var _this = this;
      this.messages = [];
      this.str = str;
      this.config = config;
      console.log("018 ".concat("\x1B[".concat(32, "m", "linter.js", "\x1B[", 39, "m"), ": verify called for \"", str, "\" and ").concat(JSON.stringify(config, null, 4)));
      if (config) {
        if (_typeof(config) !== "object") {
          throw new Error("emlint/verify(): [THROW_ID_01] second input argument, config is not a plain object but ".concat(_typeof(config), ". It's equal to:\n").concat(JSON.stringify(config, null, 4)));
        } else if (!Object.keys(config).length) {
          return this.messages;
        } else if (!config.rules || _typeof(config.rules) !== "object") {
          throw new Error("emlint/verify(): [THROW_ID_02] config contains no rules! It was given as:\n".concat(JSON.stringify(config, null, 4)));
        }
      } else {
        return this.messages;
      }
      var processedRulesConfig = normaliseRequestedRules(config.rules);
      console.log("056 ".concat("\x1B[".concat(33, "m", "processedRulesConfig", "\x1B[", 39, "m"), " = ", JSON.stringify(processedRulesConfig, null, 4)));
      this.processedRulesConfig = processedRulesConfig;
      Object.keys(processedRulesConfig)
      .filter(function (ruleName) {
        return get(ruleName);
      })
      .filter(function (ruleName) {
        if (typeof processedRulesConfig[ruleName] === "number") {
          return processedRulesConfig[ruleName] > 0;
        } else if (Array.isArray(processedRulesConfig[ruleName])) {
          return processedRulesConfig[ruleName][0] > 0;
        }
      }).forEach(function (rule) {
        console.log("080 ".concat("\x1B[".concat(32, "m", "linter.js", "\x1B[", 39, "m"), ": filtering rule ", rule));
        var rulesFunction;
        if (Array.isArray(processedRulesConfig[rule]) && processedRulesConfig[rule].length > 1) {
          rulesFunction = get(rule).apply(void 0, [_this].concat(_toConsumableArray(processedRulesConfig[rule].slice(1))));
        } else {
          rulesFunction = get(rule)(_this);
        }
        Object.keys(rulesFunction).forEach(function (consumedNode) {
          _this.on(consumedNode, function () {
            var _rulesFunction;
            console.log("100 ".concat("\x1B[".concat(32, "m", "linter.js", "\x1B[", 39, "m"), ": ", "\x1B[".concat(33, "m", "consumedNode", "\x1B[", 39, "m"), " = ", JSON.stringify(consumedNode, null, 4)));
            (_rulesFunction = rulesFunction)[consumedNode].apply(_rulesFunction, arguments);
          });
        });
      });
      tokenizer(str, function (obj) {
        _this.emit(obj.type, obj);
        if (obj.type === "html" && Array.isArray(obj.attribs) && obj.attribs.length) {
          obj.attribs.forEach(function (attribObj) {
            _this.emit("attribute", Object.assign({}, attribObj, {
              parent: Object.assign({}, obj)
            }));
          });
        }
      }, function (obj) {
        _this.emit("character", obj);
      });
      if (Object.keys(config.rules).some(function (ruleName) {
        return (ruleName === "all" ||
        ruleName === "bad-html-entity" ||
        ruleName.startsWith("bad-html-entity") || ruleName.startsWith("bad-named-html-entity") || matcher.isMatch(["bad-malformed-numeric-character-entity"], ruleName)) && (isEnabled(config.rules[ruleName]) || isEnabled(processedRulesConfig[ruleName]));
      })) {
        console.log("183 linter.js: call stringFixBrokenNamedEntities()");
        stringFixBrokenNamedEntities(str, {
          cb: function cb(obj) {
            console.log("187 ".concat("\x1B[".concat(32, "m", "linter.js", "\x1B[", 39, "m"), ": ", "\x1B[".concat(33, "m", "obj", "\x1B[", 39, "m"), " = ", JSON.stringify(obj, null, 4)));
            var matchedRulesName;
            var severity;
            if (Object.keys(config.rules).includes("bad-html-entity")) {
              if (obj.ruleName === "bad-named-html-entity-unrecognised") {
                severity = 1;
              } else if (Array.isArray(config.rules["bad-html-entity"])) {
                severity = config.rules["bad-html-entity"][0];
              } else if (Number.isInteger(config.rules["bad-html-entity"])) {
                severity = config.rules["bad-html-entity"];
              }
            } else if (Object.keys(config.rules).some(function (rulesName) {
              console.log("".concat("\x1B[".concat(36, "m", "--- rulesName: ".concat(rulesName), "\x1B[", 39, "m")));
              if (matcher.isMatch(obj.ruleName, rulesName)) {
                matchedRulesName = rulesName;
                console.log("".concat("\x1B[".concat(36, "m", "\"".concat(rulesName, "\" matched!"), "\x1B[", 39, "m")));
                return true;
              }
            })) {
              if (obj.ruleName === "bad-named-html-entity-unrecognised" && config.rules["bad-named-html-entity-unrecognised"] === undefined) {
                severity = 1;
              } else if (Array.isArray(config.rules[matchedRulesName])) {
                severity = config.rules[matchedRulesName][0];
              } else if (Number.isInteger(config.rules[matchedRulesName])) {
                severity = config.rules[matchedRulesName];
              }
            }
            if (Number.isInteger(severity)) {
              var message;
              if (obj.ruleName === "bad-named-html-entity-malformed-nbsp") {
                message = "Malformed NBSP entity.";
              } else if (obj.ruleName === "bad-named-html-entity-unrecognised") {
                message = "Unrecognised named entity.";
              } else if (obj.ruleName === "bad-named-html-entity-multiple-encoding") {
                message = "HTML entity encoding over and over.";
              } else if (obj.ruleName === "bad-malformed-numeric-character-entity") {
                message = "Malformed numeric entity.";
              } else {
                message = "Malformed ".concat(obj.entityName ? obj.entityName : "named", " entity.");
              }
              var ranges = [[obj.rangeFrom, obj.rangeTo, obj.rangeValEncoded ? obj.rangeValEncoded : ""]];
              if (obj.ruleName === "bad-named-html-entity-unrecognised") {
                ranges = [];
              }
              _this.report({
                severity: severity,
                ruleId: obj.ruleName,
                message: message,
                idxFrom: obj.rangeFrom,
                idxTo: obj.rangeTo,
                fix: {
                  ranges: ranges
                }
              });
            }
          },
          entityCatcherCb: function entityCatcherCb(from, to) {
            console.log("291 linter.js: entityCatcher pinging { from: ".concat(from, ", to: ").concat(to, " }"));
            _this.emit("entity", {
              idxFrom: from,
              idxTo: to
            });
          }
        });
      }
      ["html", "css", "text", "esp", "character"].forEach(function (eventName) {
        _this.removeAllListeners(eventName);
      });
      console.log("304 ".concat("\x1B[".concat(32, "m", "linter.js", "\x1B[", 39, "m"), ": verify() final return is called;\nthis.messages=", JSON.stringify(this.messages, null, 4)));
      return this.messages;
    }
  }, {
    key: "report",
    value: function report(obj) {
      console.log("315 ".concat("\x1B[".concat(32, "m", "linter.js", "\x1B[", 39, "m"), ": report() called with ", JSON.stringify(obj, null, 4)));
      var _lineColumn = lineColumn(this.str, obj.idxFrom),
          line = _lineColumn.line,
          col = _lineColumn.col;
      var severity = obj.severity;
      console.log("325 linter.js: ".concat("\x1B[".concat(33, "m", "this.processedRulesConfig[obj.ruleId]", "\x1B[", 39, "m"), " = ", JSON.stringify(this.processedRulesConfig[obj.ruleId], null, 4)));
      if (!Number.isInteger(obj.severity) && typeof this.processedRulesConfig[obj.ruleId] === "number") {
        severity = this.processedRulesConfig[obj.ruleId];
      } else if (!Number.isInteger(obj.severity)) {
        severity = this.processedRulesConfig[obj.ruleId][0];
      }
      console.log("340 ".concat("\x1B[".concat(32, "m", "linter.js", "\x1B[", 39, "m"), ": line = ", line, "; column = ").concat(col));
      console.log("".concat("\x1B[".concat(33, "m", "this.messages", "\x1B[", 39, "m"), " BEFORE: ", JSON.stringify(this.messages, null, 4)));
      this.messages.push(Object.assign({}, {
        line: line,
        column: col,
        severity: severity
      }, obj));
      console.log("".concat("\x1B[".concat(33, "m", "this.messages", "\x1B[", 39, "m"), " AFTER: ", JSON.stringify(this.messages, null, 4)));
    }
  }]);
  return Linter;
}(EventEmitter);

var version = "2.6.0";

exports.Linter = Linter;
exports.version = version;
