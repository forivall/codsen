import checkTypes from "check-types-mini";
import { version } from "../package.json";
import isObj from "lodash.isplainobject";
import clone from "lodash.clonedeep";
import merge from "ranges-merge";
import * as util from "./util";
const errors = "./errors.json";
const isArr = Array.isArray;
const {
  attributeOnTheRight,
  withinTagInnerspace,
  firstIdxOnTheRight,
  findClosingQuote,
  firstOnTheLeft,
  tagOnTheRight,
  charIsQuote,
  encodeChar,
  isStr,
  log
} = util;

function lint(str, originalOpts) {
  // Internal functions (placed here to access the same scope)
  // ---------------------------------------------------------------------------

  // this function below gets pinged each time a tag's record has been gathered
  function pingTag(logTag) {
    console.log(`028 pingTag(): ${JSON.stringify(logTag, null, 4)}`);
  }

  // Arg validation
  // ---------------------------------------------------------------------------
  if (!isStr(str)) {
    throw new Error(
      `emlint: [THROW_ID_01] the first input argument must be a string. It was given as:\n${JSON.stringify(
        str,
        null,
        4
      )} (type ${typeof str})`
    );
  }

  // Prep the opts
  // ---------------------------------------------------------------------------

  const defaults = {
    rules: "recommended",
    style: {
      line_endings_CR_LF_CRLF: null
    }
  };

  let opts;
  if (originalOpts) {
    if (isObj(originalOpts)) {
      opts = Object.assign({}, defaults, originalOpts);
      checkTypes(opts, defaults, {
        msg: "emlint: [THROW_ID_03*]",
        schema: {
          rules: ["string", "object", "false", "null", "undefined"],
          style: ["object", "null", "undefined"],
          "style.line_endings_CR_LF_CRLF": ["string", "null", "undefined"]
        }
      });

      // normalise opts.style.line_endings_CR_LF_CRLF:
      if (opts.style && isStr(opts.style.line_endings_CR_LF_CRLF)) {
        if (opts.style.line_endings_CR_LF_CRLF.toLowerCase() === "cr") {
          if (opts.style.line_endings_CR_LF_CRLF !== "CR") {
            // CR value is messed up
            opts.style.line_endings_CR_LF_CRLF === "CR";
          }
        } else if (opts.style.line_endings_CR_LF_CRLF.toLowerCase() === "lf") {
          if (opts.style.line_endings_CR_LF_CRLF !== "LF") {
            // LF value is messed up
            opts.style.line_endings_CR_LF_CRLF === "LF";
          }
        } else if (
          opts.style.line_endings_CR_LF_CRLF.toLowerCase() === "crlf"
        ) {
          if (opts.style.line_endings_CR_LF_CRLF !== "CRLF") {
            // CRLF value is messed up
            opts.style.line_endings_CR_LF_CRLF === "CRLF";
          }
        } else {
          throw new Error(
            `emlint: [THROW_ID_04] opts.style.line_endings_CR_LF_CRLF should be either falsey or string "CR" or "LF" or "CRLF". It was given as:\n${JSON.stringify(
              opts.style.line_endings_CR_LF_CRLF,
              null,
              4
            )} (type is string)`
          );
        }
      }
    } else {
      throw new Error(
        `emlint: [THROW_ID_02] the second input argument must be a plain object. It was given as:\n${JSON.stringify(
          originalOpts,
          null,
          4
        )} (type ${typeof originalOpts})`
      );
    }
  } else {
    opts = clone(defaults);
  }
  // TODO normalise (turn uppercase) opts.style.line_endings_CR_LF_CRLF and validate

  console.log(
    `110 USING ${`\u001b[${33}m${`opts`}\u001b[${39}m`} = ${JSON.stringify(
      opts,
      null,
      4
    )}`
  );

  // Define variables
  // ---------------------------------------------------------------------------

  let rawEnforcedEOLChar;
  if (opts.style && isStr(opts.style.line_endings_CR_LF_CRLF)) {
    if (opts.style.line_endings_CR_LF_CRLF.toLowerCase() === "cr") {
      rawEnforcedEOLChar = "\r";
    } else if (opts.style.line_endings_CR_LF_CRLF.toLowerCase() === "crlf") {
      rawEnforcedEOLChar = "\r\n";
    } else {
      rawEnforcedEOLChar = "\n";
    }
  }

  // Tag tracking:
  let logTag;
  const defaultLogTag = {
    tagStartAt: null,
    tagEndAt: null,
    tagNameStartAt: null,
    tagNameEndAt: null,
    tagName: null,
    recognised: null,
    pureHTML: true,
    attributes: []
  };
  function resetLogTag() {
    logTag = clone(defaultLogTag);
  }
  resetLogTag(); // initiate!

  // PS. we do this contraption above to make life easier when we want to reset
  // the marker object. Imagine, what happens if we add a new key we want to
  // keep record of. All resets, if they were hardcoded, would have to be manually
  // updated. Now, with above reset, there's single source of truth, single
  // reference of all keys. As a bonus, besides reset, we can always query deeper
  // keys, like "if obj.key1.key2". Without reset, "key1" would not exist and
  // we could not query.

  // ================

  // Attribute tracking:
  // Each object represents one attribute. Each will be pushed into logTag.attributes
  // array when assembled.
  let logAttr;
  const defaultLogAttr = {
    attrStartAt: null,
    attrEndAt: null,
    attrNameStartAt: null,
    attrNameEndAt: null,
    attrName: null,
    attrValue: null,
    attrValueStartAt: null,
    attrValueEndAt: null,
    attrEqualAt: null,
    attrOpeningQuote: { pos: null, val: null },
    attrClosingQuote: { pos: null, val: null },
    recognised: null,
    pureHTML: true
  };
  function resetLogAttr() {
    logAttr = clone(defaultLogAttr);
  }
  resetLogAttr(); // initiate!

  // ================

  let logWhitespace;
  const defaultLogWhitespace = {
    startAt: null,
    includesLinebreaks: false,
    lastLinebreakAt: null
  };
  function resetLogWhitespace() {
    logWhitespace = clone(defaultLogWhitespace);
  }
  resetLogWhitespace(); // initiate!

  // Return-related:
  const retObj = {
    issues: []
  };

  // ================

  // Tag-related issues will be first pushed here and only when closing of the
  // tag is really confirmed, they will be pushed into real issues array.
  // This is necessary to solve ambiguous cases such as "a < b" where algorithm
  // can't "see", is it tag further down or is it raw unencoded brackets.
  // In each case, we have two different issues:
  // "bad-character-unencoded-opening-bracket" (suitable for rawIssueStaging), OR
  // "tag-space-after-opening-bracket" (suitable for tagIssueStaging)

  let tagIssueStaging = [];
  let rawIssueStaging = [];

  // ================

  // it's used only when opts.style.line_endings_CR_LF_CRLF is not set, to track
  // mixed line endings, calculate prevalent EOL type and set all others to that
  const logLineEndings = {
    cr: [],
    lf: [],
    crlf: []
  };

  // ---------------------------------------------------------------------------

  //                         L O O P     S T A R T S
  //                                  |
  //                                  |
  //                                  |
  //                                  |
  //                               \  |  /
  //                                \ | /
  //                                 \|/
  //                                  V
  for (let i = 0, len = str.length; i < len; i++) {
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //
    //                        RULES AT THE TOP
    //
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S

    const charcode = str[i].charCodeAt(0);
    console.log(
      `\u001b[${36}m${`===============================`}\u001b[${39}m \u001b[${35}m${`str[ ${i} ] = ${
        str[i].trim().length ? str[i] : JSON.stringify(str[i], null, 0)
      }`}\u001b[${39}m ${`\u001b[${90}m#${charcode}\u001b[${39}m`} \u001b[${36}m${`===============================`}\u001b[${39}m`
    );

    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //
    //                        RULES AT THE MIDDLE
    //
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S

    // catch the tag attributes
    if (logTag.tagNameEndAt !== null) {
      //               S
      //               S
      //               S
      //   logging tag attrs - START
      //               S
      //               S
      //               S
      //

      console.log("293 above catching the ending of an attribute's name");
      // 1. catch the ending of an attribute's name
      if (
        logAttr.attrNameStartAt !== null &&
        logAttr.attrNameEndAt === null &&
        logAttr.attrName === null &&
        !util.isLatinLetter(str[i])
      ) {
        logAttr.attrNameEndAt = i;
        logAttr.attrName = str.slice(
          logAttr.attrNameStartAt,
          logAttr.attrNameEndAt
        );
        console.log(
          `307 ${log(
            "SET",
            "logAttr.attrNameEndAt",
            logAttr.attrNameEndAt,
            "logAttr.attrName",
            logAttr.attrName
          )}`
        );

        // if attribute ended on a character, different from "equal" and there
        // is no "equal" character to the right, terminate this attribute right
        // here. There can be attributes without values, for example, "nowrap".
        if (str[i] !== "=") {
          if (str[firstIdxOnTheRight(str, i)] === "=") {
            // TODO - there's equal to the right
            console.log("322 equal to the right though");
          } else {
            // TODO - there's not equal to the right
            console.log("325 not equal, so terminate attr");
          }
        }
      }

      console.log("330 above catching what follows the attribute's name");
      // 2. catch what follows the attribute's name
      if (
        logAttr.attrNameEndAt !== null &&
        logAttr.attrEqualAt === null &&
        i >= logAttr.attrNameEndAt &&
        str[i].trim().length
      ) {
        let temp;
        if (str[i] === "'" || str[i] === '"') {
          temp = attributeOnTheRight(str, i);
        }
        console.log("342 catch what follows the attribute's name");
        if (str[i] === "=") {
          logAttr.attrEqualAt = i;
          console.log(
            `346 ${log("SET", "logAttr.attrEqualAt", logAttr.attrEqualAt)}`
          );
        } else if (temp) {
          console.log(
            `${`\u001b[${32}m${`\n██`}\u001b[${39}m`} util/attributeOnTheRight() ENDED ${`\u001b[${32}m${`██\n`}\u001b[${39}m`}`
          );
          console.log(
            "353 quoted attribute's value on the right, equal is indeed missing"
          );
          // 1. push the issue:
          retObj.issues.push({
            name: "tag-attribute-missing-equal",
            position: [[i, i, "="]]
          });
          console.log(
            `361 ${log(
              "push",
              "tag-attribute-missing-equal",
              `${`[[${i}, ${i}, "="]]`}`
            )}`
          );
          // 2. complete the marker records:
          logAttr.attrEqualAt = i;
          console.log(
            `370 ${log("SET", "logAttr.attrEqualAt", logAttr.attrEqualAt)}`
          );
          // 3. we need to mark where value starts too:
          logAttr.attrValueStartAt = i + 1;
          console.log(
            `375 ${log(
              "SET",
              "logAttr.attrValueStartAt",
              logAttr.attrValueStartAt
            )}`
          );
          // 4. ... and ends...
          logAttr.attrValueEndAt = temp;
          console.log(
            `384 ${log(
              "SET",
              "logAttr.attrValueEndAt",
              logAttr.attrValueEndAt
            )}`
          );
          // 4. and quotes themselves:
          logAttr.attrOpeningQuote.pos = i;
          logAttr.attrOpeningQuote.val = str[i];
          logAttr.attrClosingQuote.pos = temp;
          logAttr.attrClosingQuote.val = str[temp];
          console.log(
            `396 ${log(
              "SET",
              "logAttr.attrOpeningQuote",
              logAttr.attrOpeningQuote,
              "logAttr.attrClosingQuote",
              logAttr.attrClosingQuote
            )}`
          );
          // 5. and attr value:
          logAttr.attrValue = str.slice(i + 1, temp);
          console.log(
            `407 ${log("SET", "logAttr.attrValue", logAttr.attrValue)}`
          );
        } else {
          console.log(
            `${`\u001b[${32}m${`\n██`}\u001b[${39}m`} util/attributeOnTheRight() ENDED ${`\u001b[${32}m${`██\n`}\u001b[${39}m`}`
          );
          // so if it's not equal and the code is not messed up, we have an attribute without a value,
          // for example, <td nowrap>.
          // Fine, push it to logTag, reset logAttr markers.

          // 1. push
          logTag.attributes.push(clone(logAttr));
          console.log(`419 ${log("PUSH, then RESET", "logAttr")}`);

          // 2. reset:
          resetLogAttr();
        }

        if (logWhitespace.startAt !== null) {
          // it depends, is it equal (value might follow), or is it a letter,
          // in which case, it's an attribute without a value:
          if (str[i] === "=") {
            retObj.issues.push({
              name: "tag-attribute-space-between-name-and-equals",
              position: [[logWhitespace.startAt, i]]
            });
            console.log(
              `434 ${log(
                "push",
                "tag-attribute-space-between-name-and-equals",
                `${`[[${logWhitespace.startAt}, ${i}]]`}`
              )}`
            );
          } else if (util.isLatinLetter(str[i])) {
            // it seems like a start of a new attribute. Push existing and reset
            logTag.attributes.push(clone(logAttr));
            console.log(`443 ${log("PUSH, then RESET", "logAttr")}`);

            // then, reset:
            resetLogAttr();

            // also, maybe there was an excessive whitespace?
            if (logWhitespace.startAt !== null) {
              if (str[logWhitespace.startAt] === " ") {
                if (logWhitespace.startAt + 1 < i) {
                  // retain that space, push the rest of the chunk
                  retObj.issues.push({
                    name: "tag-excessive-whitespace-inside-tag",
                    position: [[logWhitespace.startAt + 1, i]]
                  });
                  console.log(
                    `458 ${log(
                      "push",
                      "tag-excessive-whitespace-inside-tag",
                      `${`[[${logWhitespace.startAt + 1}, ${i}]]`}`
                    )}`
                  );
                }
                console.log("465 dead end of excessive whitespace check");
              } else {
                // replace whole chunk with a single space
                retObj.issues.push({
                  name: "tag-excessive-whitespace-inside-tag",
                  position: [[logWhitespace.startAt, i, " "]]
                });
                console.log(
                  `473 ${log(
                    "push",
                    "tag-excessive-whitespace-inside-tag",
                    `${`[[${logWhitespace.startAt}, ${i}, " "]]`}`
                  )}`
                );
              }
            }
          } else {
            // TODO - maybe it's some quote?
          }
        }
      }

      console.log("487 above catching the begining of an attribute's name");
      // 3. catch the begining of an attribute's name
      if (logAttr.attrStartAt === null && util.isLatinLetter(str[i])) {
        console.log("490 within catching the begining of an attribute's name");
        logAttr.attrStartAt = i;
        logAttr.attrNameStartAt = i;
        console.log(
          `494 ${log(
            "SET",
            "logAttr.attrStartAt",
            logAttr.attrStartAt,
            "logAttr.attrNameStartAt",
            logAttr.attrNameStartAt
          )}`
        );
        if (logWhitespace.startAt !== null && logWhitespace.startAt < i - 1) {
          // it depends, can we reuse the space at position str[logWhitespace.startAt],
          // that is, the first whitespace character of this chunk.
          // - If it's a space, keep it, just delete the rest of the chunk of
          // the characters
          // - If it's not a space, replace whole whitespace chunk with a single
          // space character.
          if (str[logWhitespace.startAt] === " ") {
            // keep first whitespace chunk's character, existing space
            retObj.issues.push({
              name: "tag-excessive-whitespace-inside-tag",
              position: [[logWhitespace.startAt + 1, i]]
            });
            console.log(
              `516 ${log(
                "push",
                "tag-excessive-whitespace-inside-tag",
                `${`[[${logWhitespace.startAt + 1}, ${i}]]`}`
              )}`
            );
          } else {
            // replace whole whitespace chunk with a single space
            retObj.issues.push({
              name: "tag-excessive-whitespace-inside-tag",
              position: [[logWhitespace.startAt, i, " "]]
            });
            console.log(
              `529 ${log(
                "push",
                "tag-excessive-whitespace-inside-tag",
                `${`[[${logWhitespace.startAt}, ${i}, " "]]`}`
              )}`
            );
          }
        }
      }

      console.log("539 above catching what follows attribute's equal");
      // 4. catch what follows attribute's equal
      if (
        logAttr.attrEqualAt !== null &&
        logAttr.attrEqualAt < i &&
        logAttr.attrOpeningQuote.pos === null &&
        str[i].trim().length
      ) {
        console.log("547 rules within catching what follows attribute's equal");
        if (charcode === 34 || charcode === 39) {
          // it's single or double quote

          // tackle preceding whitespace, if any:
          if (logWhitespace.startAt && logWhitespace.startAt < i) {
            retObj.issues.push({
              name: "tag-attribute-space-between-equals-and-opening-quotes",
              position: [[logWhitespace.startAt, i]]
            });
            console.log(
              `558 ${log(
                "push",
                "tag-attribute-space-between-equals-and-opening-quotes",
                `${JSON.stringify([[logWhitespace.startAt, i]], null, 0)}`
              )}`
            );
          }
          resetLogWhitespace();

          logAttr.attrOpeningQuote.pos = i;
          logAttr.attrOpeningQuote.val = str[i];

          const closingQuotePeek = findClosingQuote(str, i);
          console.log(
            `572 ${log("set", "closingQuotePeek", closingQuotePeek)}`
          );
          // if we found closing quote, set it right away:
          if (closingQuotePeek) {
            // now it might be a position of non-existing closing quote, the
            // position of where the closing SHOULD BE, but not necessarily
            // where it IS.

            // we match opening quotes (we know) with character of peeked result
            if (str[closingQuotePeek] !== str[i]) {
              // maybe it's ismatching quote?
              if (
                str[closingQuotePeek] === "'" ||
                str[closingQuotePeek] === '"'
              ) {
                const isDouble = str[closingQuotePeek] === '"';
                // yes it is a mismatching quote
                const name = `tag-attribute-mismatching-quotes-is-${
                  isDouble ? "double" : "single"
                }`;
                retObj.issues.push({
                  name: name,
                  position: [
                    [
                      closingQuotePeek,
                      closingQuotePeek + 1,
                      `${isDouble ? "'" : '"'}`
                    ]
                  ]
                });
                console.log(
                  `603 ${log(
                    "push",
                    name,
                    `${`[[${closingQuotePeek}, ${closingQuotePeek + 1}, ${
                      isDouble ? "'" : '"'
                    }]]`}`
                  )}`
                );
              } else {
                // it's out of whack, some bracket or whatever.
                // now if there is no quote at that position (closingQuotePeek),
                // raise an issue as well:

                let compensation = "";
                if (
                  str[closingQuotePeek - 1] &&
                  str[closingQuotePeek] &&
                  str[closingQuotePeek - 1].trim().length &&
                  str[closingQuotePeek].trim().length &&
                  str[closingQuotePeek] !== "/" &&
                  str[closingQuotePeek] !== ">"
                ) {
                  compensation = " ";
                }
                // there are considerations about where exactly to insert the bracket:
                // * whitespace
                // * existing closing slashes

                let fromPositionToInsertAt = str[closingQuotePeek - 1].trim()
                  .length
                  ? closingQuotePeek
                  : firstOnTheLeft(str, closingQuotePeek) + 1;
                console.log(
                  `636 ${log(
                    "set",
                    "fromPositionToInsertAt",
                    fromPositionToInsertAt
                  )}`
                );
                let toPositionToInsertAt = closingQuotePeek;
                console.log(
                  `644 ${log(
                    "set",
                    "toPositionToInsertAt",
                    toPositionToInsertAt
                  )}`
                );

                if (str[firstOnTheLeft(str, closingQuotePeek)] === "/") {
                  console.log("652 SLASH ON THE LEFT");
                  toPositionToInsertAt = firstOnTheLeft(str, closingQuotePeek);
                  // if there's a gap between slash and closing bracket, tackle it
                  if (toPositionToInsertAt + 1 < closingQuotePeek) {
                    retObj.issues.push({
                      name: "tag-whitespace-closing-slash-and-bracket",
                      position: [[toPositionToInsertAt + 1, closingQuotePeek]]
                    });
                    console.log(
                      `661 ${log(
                        "push",
                        "tag-whitespace-closing-slash-and-bracket",
                        `${`[[${toPositionToInsertAt +
                          1}, ${closingQuotePeek}]]`}`
                      )}`
                    );
                  }

                  // move on
                  fromPositionToInsertAt =
                    firstOnTheLeft(str, toPositionToInsertAt) + 1;
                  console.log(
                    `674 ${log(
                      "set",
                      "toPositionToInsertAt",
                      toPositionToInsertAt,
                      "fromPositionToInsertAt",
                      fromPositionToInsertAt
                    )}`
                  );
                }

                retObj.issues.push({
                  name: "tag-attribute-closing-quotation-mark-missing",
                  position: [
                    [
                      fromPositionToInsertAt,
                      toPositionToInsertAt,
                      `${str[i]}${compensation}`
                    ]
                  ]
                });
                console.log(
                  `695 ${log(
                    "push",
                    "tag-attribute-closing-quotation-mark-missing",
                    `${`[[${closingQuotePeek}, ${closingQuotePeek}, ${`${
                      str[i]
                    }${compensation}`}]]`}`
                  )}`
                );
              }
            }
            // either way,
            logAttr.attrClosingQuote.pos = closingQuotePeek;
            logAttr.attrClosingQuote.val = str[i];
            logAttr.attrValue = str.slice(i + 1, closingQuotePeek);
            logAttr.attrValueStartAt = i + 1;
            logAttr.attrValueEndAt = closingQuotePeek;
            logAttr.attrEndAt = closingQuotePeek;
            console.log(
              `713 ${log(
                "set",
                "logAttr.attrClosingQuote",
                logAttr.attrClosingQuote,
                "logAttr.attrValue",
                logAttr.attrValue,
                "logAttr.attrValueStartAt",
                logAttr.attrValueStartAt,
                "logAttr.attrValueEndAt",
                logAttr.attrValueEndAt,
                "logAttr.attrEndAt",
                logAttr.attrEndAt
              )}`
            );

            // tackle any unencoded characters within attribute's value.
            // mind you, we are going to skip all those characters, so they
            // won't get processed within the general rules

            // since we know the range of indexes where the attribute's value
            // is, iterate it again, looking for unencoded characters:
            for (let y = i + 1; y < closingQuotePeek; y++) {
              const newIssue = encodeChar(str, y);
              if (newIssue) {
                tagIssueStaging.push(newIssue);
                console.log(
                  `739 ${log("push tagIssueStaging", "newIssue", newIssue)}`
                );
              }
            }

            // check, have any raw unencoded characters been gathered in raw
            // staging so far
            if (rawIssueStaging.length) {
              console.log(
                `748 ${`\u001b[${31}m${`██`}\u001b[${39}m`} raw stage present!`
              );
            }

            // then, push the attribute and wipe the markers because we're done
            logTag.attributes.push(clone(logAttr));
            console.log(`754 ${log("PUSH, then RESET", "logAttr")}`);

            // then, reset:
            resetLogAttr();

            // finally, offset the index:
            // normally, we'd "jump over" to index at "closingQuotePeek", but
            // maybe it's whitespace? In that case, pull back to the last non-
            // whitespace character, so that whitespace can be caught properly.
            if (str[closingQuotePeek].trim().length) {
              i = closingQuotePeek;
            } else {
              // pull back to nearest non-whitespace char
              i = firstOnTheLeft(str, closingQuotePeek);
            }
            console.log(`769 ${log("set", "i", i, "then CONTINUE")}`);

            // maybe we offset right up to the end of a string.
            if (
              i === len - 1 &&
              logTag.tagStartAt !== null &&
              ((logAttr.attrEqualAt !== null &&
                logAttr.attrOpeningQuote.pos !== null) ||
                logTag.attributes.some(
                  attrObj =>
                    attrObj.attrEqualAt !== null &&
                    attrObj.attrOpeningQuote.pos !== null
                ))
            ) {
              // inset closing bracket
              retObj.issues.push({
                name: "tag-missing-closing-bracket",
                position: [[i + 1, i + 1, ">"]]
              });
              console.log(
                `789 ${log(
                  "push",
                  "tag-missing-closing-bracket",
                  `${`[[${i + 1}, ${i + 1}, ">"]]`}`
                )}`
              );
            }

            continue;
          }
        } else if (charcode === 8220 || charcode === 8221) {
          // left-double-quotation-mark
          // http://www.fileformat.info/info/unicode/char/201C/index.htm
          // right-double-quotation-mark
          // https://www.fileformat.info/info/unicode/char/201d/index.htm
          logAttr.attrOpeningQuote.pos = i;
          logAttr.attrOpeningQuote.val = `"`;
          console.log(
            `807 ${log(
              "set",
              "logAttr.attrOpeningQuote",
              logAttr.attrOpeningQuote
            )}`
          );

          // it's an error, so push right away:
          const name =
            charcode === 8220
              ? "tag-attribute-left-double-quotation-mark"
              : "tag-attribute-right-double-quotation-mark";
          retObj.issues.push({
            name,
            position: [[i, i + 1, `"`]]
          });
          console.log(
            `824 ${log("push", name, `${`[[${i}, ${i + 1}, '"']]`}`)}`
          );

          logAttr.attrValueStartAt = i + 1;
          console.log(
            `829 ${log(
              "set",
              "logAttr.attrValueStartAt",
              logAttr.attrValueStartAt
            )}`
          );
        } else if (charcode === 8216 || charcode === 8217) {
          // left-single-quotation-mark
          // https://www.fileformat.info/info/unicode/char/2018/index.htm
          // right-single-quotation-mark
          // https://www.fileformat.info/info/unicode/char/2019/index.htm
          logAttr.attrOpeningQuote.pos = i;
          logAttr.attrOpeningQuote.val = `'`;
          console.log(
            `843 ${log(
              "set",
              "logAttr.attrOpeningQuote",
              logAttr.attrOpeningQuote
            )}`
          );

          // it's an error, so push right away:
          const name =
            charcode === 8216
              ? "tag-attribute-left-single-quotation-mark"
              : "tag-attribute-right-single-quotation-mark";
          retObj.issues.push({
            name,
            position: [[i, i + 1, `'`]]
          });
          console.log(
            `860 ${log("push", name, `${`[[${i}, ${i + 1}, '"']]`}`)}`
          );

          logAttr.attrValueStartAt = i + 1;
          console.log(
            `865 ${log(
              "set",
              "logAttr.attrValueStartAt",
              logAttr.attrValueStartAt
            )}`
          );
        } else if (withinTagInnerspace(str, i)) {
          console.log(
            `873 withinTagInnerspace() ${`\u001b[${32}m${`positive`}\u001b[${39}m`}`
          );
          let start = logAttr.attrStartAt;
          if (str[i] === "/" || str[i] === ">") {
            // if we're removing a dud attribute at the end of the tag, let's
            // remove also all the whitespace in front of it:
            for (let y = logAttr.attrStartAt; y--; ) {
              if (str[y].trim().length) {
                start = y + 1;
                break;
              }
            }
          }
          retObj.issues.push({
            name: "tag-attribute-quote-and-onwards-missing",
            position: [[start, i]]
          });
          console.log(
            `891 ${log(
              "push",
              "tag-attribute-quote-and-onwards-missing",
              `${`[[${start}, ${i}]]`}`
            )}`
          );
          // reset logWhitespace because it might get reported as well:
          console.log(`898 ${log("reset", "logWhitespace")}`);
          resetLogWhitespace();
          console.log(`900 ${log("reset", "logAttr")}`);
          resetLogAttr();
        } else {
          console.log(
            `904 withinTagInnerspace() ${`\u001b[${31}m${`negative`}\u001b[${39}m`} - final ELSE clauses`
          );
          // Insert missing quote then.
          // It's <img alt=zzz>
          //               ^ - we're standing upon a value which started
          const endingQuotesPos = findClosingQuote(str, i);
          if (endingQuotesPos !== null) {
            console.log(
              `912 ending quote found: ${log(
                "set",
                "endingQuotesPos",
                endingQuotesPos
              )}`
            );
            // 1. set the rule
            retObj.issues.push({
              name: "tag-attribute-opening-quotation-mark-missing",
              position: [[i, i, str[endingQuotesPos]]]
            });
            console.log(
              `924 ${log(
                "push",
                "tag-attribute-space-between-equals-and-opening-quotes",
                `${`[[${i}, ${i}, ${JSON.stringify(
                  str[endingQuotesPos],
                  null,
                  0
                )}]]`}`
              )}`
            );
            // 2. set the opening marker:
            logAttr.attrOpeningQuote.pos = i;
            logAttr.attrOpeningQuote.val = str[endingQuotesPos];
            logAttr.attrValueStartAt = i;
            // 3. set the closing quote marker too:
            logAttr.attrClosingQuote.pos = endingQuotesPos;
            logAttr.attrClosingQuote.val = str[endingQuotesPos];
            logAttr.attrValue = str.slice(i, endingQuotesPos);
            console.log(
              `943 ${log(
                "SET",
                "logAttr.attrOpeningQuote",
                logAttr.attrOpeningQuote,
                "logAttr.attrClosingQuote",
                logAttr.attrClosingQuote,
                "logAttr.attrValueStartAt",
                logAttr.attrValueStartAt,
                "logAttr.attrValue",
                logAttr.attrValue
              )}`
            );

            // since we know the range of indexes where the attribute's value
            // is, iterate it again, looking for unencoded characters:
            for (let y = i; y < endingQuotesPos; y++) {
              const newIssue = encodeChar(str, y);
              if (newIssue) {
                tagIssueStaging.push(newIssue);
                console.log(
                  `963 ${log("push tagIssueStaging", "newIssue", newIssue)}`
                );
              }
            }
          } else {
            console.log(
              `969 ${log("set", "endingQuotesPos", endingQuotesPos)}`
            );
            // TODO - cases where ending of a tag is ambiguous and tag is unclosed
          }
        }

        console.log(
          `976 ${log(
            "SET",
            "logAttr.attrOpeningQuote.pos",
            logAttr.attrOpeningQuote.pos,
            "logAttr.attrOpeningQuote.val",
            logAttr.attrOpeningQuote.val
          )}`
        );
        // tackle any whitespace between equal and quotes:
        if (logWhitespace.startAt !== null) {
          // 1. if it's single or double quote, this whitespace is probably
          // accidental:
          if (str[i] === "'" || str[i] === '"') {
            retObj.issues.push({
              name: "tag-attribute-space-between-equals-and-opening-quotes",
              position: [[logWhitespace.startAt, i]]
            });
            console.log(
              `994 ${log(
                "push",
                "tag-attribute-space-between-equals-and-opening-quotes",
                `${`[[${logWhitespace.startAt}, ${i}]]`}`
              )}`
            );
          } else if (withinTagInnerspace(str, i + 1)) {
            // Attribute's quotes and content was lost
            // for example, <aaa bbb="ccc" ddd= eee="fff"/>
            // tag-attribute-quote-and-onwards-missing
            retObj.issues.push({
              name: "tag-attribute-quote-and-onwards-missing",
              position: [[logAttr.attrStartAt, i]]
            });
            console.log(
              `1009 ${log(
                "push",
                "tag-attribute-quote-and-onwards-missing",
                `${`[[${logAttr.attrStartAt}, ${i}]]`}`
              )}`
            );
            console.log(`1015 ${log("reset", "logAttr")}`);
            resetLogAttr();
          }
        }
      }

      console.log("1021 above catching closing quote (single or double)");
      // 5. catch closing quote (single or double)
      if (
        logAttr.attrEqualAt !== null &&
        logAttr.attrOpeningQuote.pos !== null &&
        (logAttr.attrClosingQuote.pos === null ||
          i === logAttr.attrClosingQuote.pos) &&
        i > logAttr.attrOpeningQuote.pos &&
        charIsQuote(str[i])
        // (str[i] === str[logAttr.attrOpeningQuote.pos] ||
        //   withinTagInnerspace(str, i + 1))
      ) {
        console.log("1033 above catching closing quote (single or double)");
        if (charcode === 34 || charcode === 39) {
          // if it's single or double quote

          // 1. check for quote mismatch, then push new issue, but check if
          // this issue hasn't been recorded already:
          const issueName = `tag-attribute-mismatching-quotes-is-${
            charcode === 34 ? "double" : "single"
          }`;

          if (
            str[i] !== logAttr.attrOpeningQuote.val &&
            (!retObj.issues.length ||
              !retObj.issues.some(issueObj => {
                return (
                  issueObj.name === issueName &&
                  issueObj.position.length === 1 &&
                  issueObj.position[0][0] === i &&
                  issueObj.position[0][1] === i + 1
                );
              }))
          ) {
            retObj.issues.push({
              name: issueName,
              position: [[i, i + 1, `${charcode === 34 ? "'" : '"'}`]]
            });
            console.log(
              `1060 ${log(
                "push",
                issueName,
                `${`[[${i}, ${i + 1}, ${charcode === 34 ? "'" : '"'}]]`}`
              )}`
            );
          } else {
            console.log(
              `1068 ${`\u001b[${31}m${`didn't push an issue`}\u001b[${39}m`}`
            );
          }

          // 2. Set closing quote:
          logAttr.attrClosingQuote.pos = i;
          // For now it would be more efficient to assume the value is the same
          // and skip writing it. We know closing quotes are the same.. But only
          // for now.
          logAttr.attrClosingQuote.val = str[i];
          console.log(
            `1079 ${log(
              "SET",
              "logAttr.attrClosingQuote.pos",
              logAttr.attrClosingQuote.pos,
              "logAttr.attrClosingQuote.val",
              logAttr.attrClosingQuote.val
            )}`
          );

          // 3. Set the attribute's value in the marker, if
          // it's not set already:

          if (logAttr.attrValue === null) {
            if (
              logAttr.attrOpeningQuote.pos &&
              logAttr.attrClosingQuote.pos &&
              logAttr.attrOpeningQuote.pos + 1 < logAttr.attrClosingQuote.pos
            ) {
              // it's non-empty string
              logAttr.attrValue = str.slice(
                logAttr.attrOpeningQuote.pos,
                logAttr.attrClosingQuote.pos
              );
            } else {
              // empty string, no need to slice
              logAttr.attrValue = "";
            }
            console.log(
              `1107 ${log("SET", "logAttr.attrValue", logAttr.attrValue)}`
            );
          }

          // 4. Set the attribute's ending index in the marker:
          logAttr.attrEndAt = i;
          logAttr.attrValueEndAt = i;
          console.log(
            `1115 ${log(
              "SET",
              "logAttr.attrEndAt",
              logAttr.attrEndAt,
              "logAttr.attrValueEndAt",
              logAttr.attrValueEndAt
            )}`
          );

          // 5. Finally, push the attributes object into
          logTag.attributes.push(clone(logAttr));
          console.log(`1126 ${log("PUSH, then RESET", "logAttr")}`);

          // then, reset:
          resetLogAttr();
        } else if (
          isStr(logAttr.attrOpeningQuote.val) &&
          (charcode === 8220 || charcode === 8221) // TODO - cleanup &&
          // ((firstIdxOnTheRight(str, i) &&
          //   (str[firstIdxOnTheRight(str, i)] === ">" ||
          //     str[firstIdxOnTheRight(str, i)] === "/")) ||
          //   )
        ) {
          // 1. if curlies were used to open this and this is curlie
          const name =
            charcode === 8220
              ? "tag-attribute-left-double-quotation-mark"
              : "tag-attribute-right-double-quotation-mark";
          retObj.issues.push({
            name: name,
            position: [[i, i + 1, '"']]
          });
          console.log(
            `1148 ${log("push", name, `${`[[${i}, ${i + 1}, '"']]`}`)}`
          );

          // 2. Set the attribute's ending index in the marker:
          logAttr.attrEndAt = i;
          logAttr.attrClosingQuote.pos = i;
          logAttr.attrClosingQuote.val = '"';
          console.log(
            `1156 ${log(
              "SET",
              "logAttr.attrEndAt",
              logAttr.attrEndAt,
              "logAttr.attrClosingQuote",
              logAttr.attrClosingQuote
            )}`
          );

          // 3. Finally, push the attributes object into
          logTag.attributes.push(clone(logAttr));
          console.log(`1167 ${log("PUSH, then RESET", "logAttr")}`);

          // then, reset:
          resetLogAttr();
        } else if (
          isStr(logAttr.attrOpeningQuote.val) &&
          (charcode === 8216 || charcode === 8217) &&
          ((firstIdxOnTheRight(str, i) !== null &&
            (str[firstIdxOnTheRight(str, i)] === ">" ||
              str[firstIdxOnTheRight(str, i)] === "/")) ||
            withinTagInnerspace(str, i + 1))
        ) {
          // if curlies were used to open this and this is curlie
          const name =
            charcode === 8216
              ? "tag-attribute-left-single-quotation-mark"
              : "tag-attribute-right-single-quotation-mark";
          retObj.issues.push({
            name: name,
            position: [[i, i + 1, `'`]]
          });
          console.log(
            `1189 ${log("push", name, `${`[[${i}, ${i + 1}, "'"]]`}`)}`
          );

          // 2. Set the attribute's ending index in the marker:
          logAttr.attrEndAt = i;
          logAttr.attrClosingQuote.pos = i;
          logAttr.attrClosingQuote.val = "'";
          console.log(
            `1197 ${log(
              "SET",
              "logAttr.attrEndAt",
              logAttr.attrEndAt,
              "logAttr.attrClosingQuote",
              logAttr.attrClosingQuote
            )}`
          );

          // 3. Finally, push the attributes object into
          logTag.attributes.push(clone(logAttr));
          console.log(`1208 ${log("PUSH, then RESET", "logAttr")}`);

          // then, reset:
          resetLogAttr();
        }
      }

      // 6. if reached this far, check error clauses.
      console.log("1316 error clauses");

      // unclosed attribute, followed by slash + closing bracket OR closing bracket
      if (
        logAttr.attrOpeningQuote.val &&
        logAttr.attrOpeningQuote.pos < i &&
        logAttr.attrClosingQuote.pos === null &&
        // !(logAttr.attrOpeningQuote.val && !logAttr.attrClosingQuote.val) &&
        ((str[i] === "/" &&
          firstIdxOnTheRight(str, i) &&
          str[firstIdxOnTheRight(str, i)] === ">") ||
          str[i] === ">")
      ) {
        console.log("1329 inside error catch clauses");
        // 1. push the issue:
        retObj.issues.push({
          name: "tag-attribute-closing-quotation-mark-missing",
          position: [[i, i, logAttr.attrOpeningQuote.val]]
        });
        console.log(
          `1336 ${log(
            "push",
            "tag-attribute-closing-quotation-mark-missing",
            `${`[[${i}, ${i}, ${logAttr.attrOpeningQuote.val}]]`}`
          )}`
        );
        // 2. complete the attribute's record:
        logAttr.attrClosingQuote.pos = i;
        logAttr.attrClosingQuote.val = logAttr.attrOpeningQuote.val;
        console.log(
          `1346 ${log(
            "set",
            "logAttr.attrClosingQuote",
            logAttr.attrClosingQuote
          )}`
        );
        // 3. since attribute record is complete, push it to logTag
        logTag.attributes.push(clone(logAttr));
        console.log(`1354 ${log("PUSH, then RESET", "logAttr")}`);

        // 4. reset logAttr:
        resetLogAttr();
      }

      //
      //               S
      //               S
      //               S
      //   logging tag attrs  -  END
      //               S
      //               S
      //               S
    }

    // catch unprintable, unencoded characters that don't belong to HTML:
    // match by UTF-16 (decimal) value of the character, equivalent to .charCodeAt(0)
    // for example, 32 is space character in ASCII
    if (charcode < 32) {
      const name = `bad-character-${util.lowAsciiCharacterNames[charcode]}`;
      if (charcode === 9) {
        // TODO - detect tabs as indentation vs. tabs in body
        // Replace all tabs, '\u0009', with double spaces:
        retObj.issues.push({
          name,
          position: [[i, i + 1, "  "]]
        });
        console.log(`1382 PUSH "${name}", [[${i}, ${i + 1}, "  "]]`);
      } else if (charcode === 13) {
        // Catch CR line endings (\r)

        // 10 - "\u000A" - line feed
        // 13 - "\u000D" - carriage return
        if (isStr(str[i + 1]) && str[i + 1].charCodeAt(0) === 10) {
          // 1. LF follows, we've got CRLF
          if (
            opts.style &&
            opts.style.line_endings_CR_LF_CRLF &&
            opts.style.line_endings_CR_LF_CRLF !== "CRLF"
          ) {
            // 1.1. a different line ending is enforced via opts.style.line_endings_CR_LF_CRLF
            retObj.issues.push({
              name: "file-wrong-type-line-ending-CRLF",
              position: [[i, i + 2, rawEnforcedEOLChar]]
            });
            console.log(
              `1401 ${log(
                "push",
                "file-wrong-type-line-ending-CRLF",
                `${`[[${i}, ${i + 2}, ${JSON.stringify(
                  rawEnforcedEOLChar,
                  null,
                  0
                )}]]`}`
              )}`
            );
          } else {
            // 1.2. so line endings is not enforced. Make a note of this line ending.
            logLineEndings.crlf.push([i, i + 2]);
            console.log(
              `1415 ${log("logLineEndings.crlf push", `[${i}, ${i + 2}]`)}`
            );
          }
        } else {
          // 2. It's standalone CR
          if (
            opts.style &&
            opts.style.line_endings_CR_LF_CRLF &&
            opts.style.line_endings_CR_LF_CRLF !== "CR"
          ) {
            // 2.1. a different line ending is enforced via opts.style.line_endings_CR_LF_CRLF
            retObj.issues.push({
              name: "file-wrong-type-line-ending-CR",
              position: [[i, i + 1, rawEnforcedEOLChar]]
            });
            console.log(
              `1431 ${log(
                "push",
                "file-wrong-type-line-ending-CR",
                `${`[[${i}, ${i + 1}, ${JSON.stringify(
                  rawEnforcedEOLChar,
                  null,
                  0
                )}]]`}`
              )}`
            );
          } else {
            // 2.2. so line endings is not enforced. Make a note of this line ending.
            logLineEndings.cr.push([i, i + 1]);
            console.log(
              `1445 ${log("logLineEndings.cr push", `[${i}, ${i + 1}]`)}`
            );
          }
        }
      } else if (charcode === 10) {
        if (!(isStr(str[i - 1]) && str[i - 1].charCodeAt(0) === 13)) {
          // 3. Catch LF line endings (\n) (not second part of CRLF)
          // this double "IF" nesting allows to skip processing LF second time,
          // as standalone, in "CRLF" cases
          if (
            opts.style &&
            opts.style.line_endings_CR_LF_CRLF &&
            opts.style.line_endings_CR_LF_CRLF !== "LF"
          ) {
            // 3.1. a different line ending is enforced via opts.style.line_endings_CR_LF_CRLF
            retObj.issues.push({
              name: "file-wrong-type-line-ending-LF",
              position: [[i, i + 1, rawEnforcedEOLChar]]
            });
            console.log(
              `1465 ${log(
                "push",
                "file-wrong-type-line-ending-LF",
                `${`[[${i}, ${i + 1}, ${JSON.stringify(
                  rawEnforcedEOLChar,
                  null,
                  0
                )}]]`}`
              )}`
            );
          } else {
            // 3.2. so line endings is not enforced. Make a note of this line ending.
            logLineEndings.lf.push([i, i + 1]);
            console.log(
              `1479 ${log("logLineEndings.lf push", `[${i}, ${i + 1}]`)}`
            );
          }
        }
      } else {
        // remove them all:
        retObj.issues.push({
          name,
          position: [[i, i + 1]]
        });
        console.log(`1489 ${log("push", name, `${`[[${i}, ${i + 1}]]`}`)}`);
      }
    } else if (encodeChar(str, i)) {
      const newIssue = encodeChar(str, i);
      console.log(
        `1494 ${`\u001b[${31}m${`██`}\u001b[${39}m`} new issue: ${JSON.stringify(
          newIssue,
          null,
          0
        )}`
      );
      rawIssueStaging.push(newIssue);
      console.log(
        `1502 push above issue to ${`\u001b[${36}m${`rawIssueStaging`}\u001b[${39}m`}`
      );
    }

    // catch the ending of whitespace chunks:
    if (logWhitespace.startAt !== null && str[i].trim().length) {
      // 1. catch the whitespace before closing slash, within a tag
      console.log("1509 - inside whitespace chunks ending clauses");
      if (
        logTag.tagNameStartAt !== null &&
        logAttr.attrStartAt === null &&
        (!logAttr.attrClosingQuote.pos || logAttr.attrClosingQuote.pos <= i) &&
        (str[i] === ">" ||
          (str[i] === "/" && "<>".includes(str[firstIdxOnTheRight(str, i)])))
      ) {
        console.log("1517");
        // we're within a tag but not within an attribute and this is whitespace
        // chunk before closing slash or closing bracket
        let name = "tag-excessive-whitespace-inside-tag";
        if (str[logWhitespace.startAt - 1] === "/") {
          name = "tag-whitespace-closing-slash-and-bracket";
        }

        retObj.issues.push({
          name: name,
          position: [[logWhitespace.startAt, i]]
        });
        console.log(
          `1530 ${log("push", name, `${`[[${logWhitespace.startAt}, ${i}]]`}`)}`
        );
      }
    }

    // catch the start of whitespace chunks:
    if (!str[i].trim().length && logWhitespace.startAt === null) {
      logWhitespace.startAt = i;
      console.log(
        `1539 ${log("set", "logWhitespace.startAt", logWhitespace.startAt)}`
      );
    }

    // catch linebreaks within the whitespace chunks:
    if (str[i] === "\n" || str[i] === "\r") {
      if (logWhitespace.startAt !== null && !logWhitespace.includesLinebreaks) {
        logWhitespace.includesLinebreaks = true;
        console.log(
          `1548 ${log(
            "set",
            "logWhitespace.includesLinebreaks",
            logWhitespace.includesLinebreaks
          )}`
        );
      }
      logWhitespace.lastLinebreakAt = i;
      console.log(
        `1557 ${log(
          "set",
          "logWhitespace.lastLinebreakAt",
          logWhitespace.lastLinebreakAt
        )}`
      );
    }

    console.log("1565");
    // catch the ending of the tag name:
    // PS. we deliberately allow capital Latin letters through the net, so that
    // later we could flag them up
    if (
      logTag.tagNameStartAt !== null &&
      logTag.tagNameEndAt === null &&
      !util.isLatinLetter(str[i]) &&
      str[i] !== "<" &&
      str[i] !== "/"
    ) {
      console.log("1576 not a latin letter, thus we assume tag name ends here");
      logTag.tagNameEndAt = i;
      logTag.tagName = str.slice(logTag.tagNameStartAt, i);
      logTag.recognised = util.knownHTMLTags.includes(
        logTag.tagName.toLowerCase()
      );
      console.log(
        `1583 ${log(
          "set",
          "logTag.tagNameEndAt",
          logTag.tagNameEndAt,
          "logTag.tagName",
          logTag.tagName,
          "logTag.recognised",
          logTag.recognised
        )}`
      );
    }

    console.log("1595");
    // catch the start of the tag name:
    if (
      logTag.tagStartAt !== null &&
      logTag.tagNameStartAt === null &&
      util.isLatinLetter(str[i]) &&
      logTag.tagStartAt < i
    ) {
      logTag.tagNameStartAt = i;
      console.log(
        `1605 ${log("set", "logTag.tagNameStartAt", logTag.tagNameStartAt)}`
      );

      // rule "space-between-opening-bracket-and-tag-name":
      if (logTag.tagStartAt < i - 1 && logWhitespace.startAt !== null) {
        tagIssueStaging.push({
          name: "tag-space-after-opening-bracket",
          position: [[logTag.tagStartAt + 1, i]]
        });
        console.log(
          `1615 ${log(
            "stage",
            "tag-space-after-opening-bracket",
            `${`[[${logTag.tagStartAt + 1}, ${i}]]`}`
          )}`
        );
      }
    }

    // catch uppercase characters in tag names:
    if (
      logTag.tagNameStartAt !== null &&
      logTag.tagNameEndAt === null &&
      util.isUppercaseLetter(str[i])
    ) {
      retObj.issues.push({
        name: "tag-name-lowercase",
        position: [[i, i + 1, str[i].toLowerCase()]]
      });
      console.log(
        `1635 ${log(
          "push",
          "tag-name-lowercase",
          `${`[[${i}, ${i + 1}, ${JSON.stringify(
            str[i].toLowerCase(),
            null,
            4
          )}]]`}`
        )}`
      );
    }

    // catch the beginning of a tag:
    if (str[i] === "<") {
      console.log(
        `1650 catch the beginning of a tag ${`\u001b[${31}m${`███████████████████████████████████████`}\u001b[${39}m`}`
      );
      if (logTag.tagStartAt === null) {
        // mark it
        logTag.tagStartAt = i;
        console.log(
          `1656 ${log("set", "logTag.tagStartAt", logTag.tagStartAt)}`
        );
      } else if (tagOnTheRight(str, i)) {
        // maybe it's a case of unclosed tag, where a tag should be closed right before here,
        // and here a new tag starts?
        console.log(
          `1662 ${`\u001b[${32}m${`██`}\u001b[${39}m`} new tag starts`
        );
        // two cases:
        // 1. if there is at least one attribute with equal+quotes, it's a tag
        // 2. else, it should be regarded as a set of unencoded characters (brackets, for example)

        if (
          logTag.tagStartAt !== null &&
          logTag.attributes.length &&
          logTag.attributes.some(
            attrObj =>
              attrObj.attrEqualAt !== null &&
              attrObj.attrOpeningQuote.pos !== null
          )
        ) {
          console.log(
            `1678 TAG ON THE LEFT, WE CAN ADD CLOSING BRACKET (IF MISSING)`
          );
          // console.log("1680 ███████████████████████████████████████v");
          // console.log(
          //   `${`\u001b[${33}m${`logTag`}\u001b[${39}m`} = ${JSON.stringify(
          //     logTag,
          //     null,
          //     4
          //   )}`
          // );
          // console.log("1688 ███████████████████████████████████████^");
          // 1. find out what's the last character on the left:
          const lastNonWhitespaceOnLeft = firstOnTheLeft(str, i);
          console.log(
            `1692 ${log(
              "set",
              "lastNonWhitespaceOnLeft",
              lastNonWhitespaceOnLeft
            )}`
          );
          // 2. if it's a bracket, no need to add closing bracket
          if (str[lastNonWhitespaceOnLeft] === ">") {
            // 2-1 no need to add a closing bracket.

            // 2-1-1. mark the ending of a tag:
            logTag.tagEndAt = lastNonWhitespaceOnLeft + 1;
            console.log(
              `1705 ${log("set", "logTag.tagEndAt", logTag.tagEndAt)}`
            );
          } else {
            // 2-2 add a closing bracket
            // 2-2-1. push the issue:
            retObj.issues.push({
              name: "tag-missing-closing-bracket",
              position: [[lastNonWhitespaceOnLeft + 1, i, ">"]]
            });
            console.log(
              `1715 ${log(
                "push",
                "tag-missing-closing-bracket",
                `${`[[${lastNonWhitespaceOnLeft + 1}, ${i}, ">"]]`}`
              )}`
            );
          }
          // 3. take care of issues at rawIssueStaging:
          if (rawIssueStaging.length) {
            console.log(
              `1725 let's process all ${
                rawIssueStaging.length
              } raw character issues at staging`
            );
            rawIssueStaging.forEach(issueObj => {
              if (issueObj.position[0][0] < logTag.tagStartAt) {
                retObj.issues.push(issueObj);
                console.log(`1732 ${log("push", "issueObj", issueObj)}`);
              } else {
                console.log(
                  `1735 discarding ${JSON.stringify(issueObj, null, 4)}`
                );
              }
            });
          }

          // 4. ping the pingTag()
          pingTag(clone(logTag));

          // 5. reset all:
          resetLogTag();
          resetLogAttr(); // as well, just in case
          rawIssueStaging = [];
          console.log(
            `1749 ${log("reset", "logTag & logAttr && rawIssueStaging")}`
          );

          // 6. mark the beginning of a new tag:
          logTag.tagStartAt = i;
          console.log(
            `1755 ${log("set", "logTag.tagStartAt", logTag.tagStartAt)}`
          );
        } else {
          console.log(`1758 NOT TAG ON THE LEFT, WE CAN ADD ENCODE BRACKETS`);
          // 1.
          if (rawIssueStaging.length) {
            // merge any issues that are on or after dud tag
            console.log(
              `1763 ${log("processing", "rawIssueStaging", rawIssueStaging)}`
            );
            console.log(
              `1766 ${log("log", "logTag.tagStartAt", logTag.tagStartAt)}`
            );
            console.log(
              `1769 ${`\u001b[${31}m${JSON.stringify(
                logAttr,
                null,
                4
              )}\u001b[${39}m`}`
            );
            rawIssueStaging.forEach(issueObj => {
              if (
                // issueObj.position[0][0] >= logTag.tagStartAt &&
                issueObj.position[0][0] < i // ||
                // (issueObj.position[0][0] > a && issueObj.position[0][0] < b)
              ) {
                retObj.issues.push(issueObj);
                console.log(`1782 ${log("push", "issueObj", issueObj)}`);
              } else {
                console.log("");
                console.log(
                  `1786 ${`\u001b[${31}m${`not pushed`}\u001b[${39}m`} ${`\u001b[${33}m${`issueObj`}\u001b[${39}m`} = ${JSON.stringify(
                    issueObj,
                    null,
                    4
                  )}\nbecause ${`\u001b[${33}m${`issueObj.position[0][0]`}\u001b[${39}m`}=${
                    issueObj.position[0][0]
                  } not < ${`\u001b[${33}m${`logTag.tagStartAt`}\u001b[${39}m`}=${
                    logTag.tagStartAt
                  }`
                );
              }
            });
            console.log(`1798 wipe rawIssueStaging`);
            rawIssueStaging = [];
          }

          // 2. wipe tag issues, this tag is dud
          if (tagIssueStaging.length) {
            console.log(`1804 ${log("wipe", "tagIssueStaging")}`);
            tagIssueStaging = [];
          }
        }
      }
    }

    // catch a closing bracket of a tag, >
    if (
      charcode === 62 &&
      logTag.tagStartAt !== null &&
      (!logAttr.attrClosingQuote || logAttr.attrClosingQuote.pos < i)
    ) {
      // 1. merge any staging:
      if (tagIssueStaging.length) {
        console.log(
          `1820 concat ${`\u001b[${33}m${`tagIssueStaging`}\u001b[${39}m`} then wipe`
        );
        retObj.issues = retObj.issues.concat(tagIssueStaging);
        tagIssueStaging = [];
      }
      if (rawIssueStaging.length) {
        // merge any issues that are up to the tag's beginning character's index
        console.log(
          `1828 ${log("processing", "rawIssueStaging", rawIssueStaging)}`
        );
        console.log(
          `${`\u001b[${33}m${`logTag`}\u001b[${39}m`} = ${JSON.stringify(
            logTag,
            null,
            4
          )}`
        );
        rawIssueStaging.forEach(issueObj => {
          if (
            issueObj.position[0][0] < logTag.tagStartAt ||
            (logTag.attributes.some(attrObj => {
              return (
                attrObj.attrValueStartAt < issueObj.position[0][0] &&
                attrObj.attrValueEndAt > issueObj.position[0][0]
              );
            }) &&
              !retObj.issues.some(existingIssue => {
                return (
                  existingIssue.position[0][0] === issueObj.position[0][0] &&
                  existingIssue.position[0][1] === issueObj.position[0][1]
                );
              }))
          ) {
            retObj.issues.push(issueObj);
            console.log(`1854 ${log("push", "issueObj", issueObj)}`);
          } else {
            console.log("");
            console.log(
              `1858 ${`\u001b[${31}m${`not pushed`}\u001b[${39}m`} ${`\u001b[${33}m${`issueObj`}\u001b[${39}m`} = ${JSON.stringify(
                issueObj,
                null,
                4
              )}\nbecause ${`\u001b[${33}m${`issueObj.position[0][0]`}\u001b[${39}m`}=${
                issueObj.position[0][0]
              } not < ${`\u001b[${33}m${`logTag.tagStartAt`}\u001b[${39}m`}=${
                logTag.tagStartAt
              }`
            );
          }
        });
        console.log(`1870 wipe rawIssueStaging`);
        rawIssueStaging = [];
      }

      // 2. reset:
      resetLogTag();
      resetLogAttr();
      console.log(`1877 ${log("reset", "logTag & logAttr")}`);
    }

    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //
    //                        RULES AT THE BOTTOM
    //
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S

    // reset whitespace
    if (str[i].trim().length) {
      resetLogWhitespace();
      console.log(`1903 ${log("reset", "logWhitespace")}`);
    }

    // catch the string's end, EOF EOL
    if (!str[i + 1]) {
      console.log("1908");
      // this (str[i]) is the last character
      if (rawIssueStaging.length) {
        console.log("1911");
        // if this resembles a tag (there's at least one attribute with equal+quotes pattern),
        // wipe all raw issues since the beginning of this tag, then push the rest in.
        // then, add all tagIssueStaging
        if (
          logTag.tagStartAt !== null &&
          logTag.attributes.some(
            attrObj =>
              attrObj.attrEqualAt !== null && attrObj.attrOpeningQuote !== null
          )
        ) {
          console.log("1922");
          // 1. push all issues before index at which the tag started
          rawIssueStaging.forEach(issueObj => {
            if (issueObj.position[0][0] < logTag.tagStartAt) {
              retObj.issues.push(issueObj);
              console.log(`1927 ${log("push", "issueObj", issueObj)}`);
            } else {
              console.log(
                `\n1519 ${`\u001b[${31}m${`not pushed`}\u001b[${39}m`} ${`\u001b[${33}m${`issueObj`}\u001b[${39}m`} = ${JSON.stringify(
                  issueObj,
                  null,
                  4
                )}\nbecause ${`\u001b[${33}m${`issueObj.position[0][0]`}\u001b[${39}m`}=${
                  issueObj.position[0][0]
                } not < ${`\u001b[${33}m${`logTag.tagStartAt`}\u001b[${39}m`}=${
                  logTag.tagStartAt
                }`
              );
            }
          });
          console.log(`1942 wipe rawIssueStaging`);
          rawIssueStaging = [];

          // 2. add missing closing bracket
          retObj.issues.push({
            name: "tag-missing-closing-bracket",
            position: [
              [
                logWhitespace.startAt ? logWhitespace.startAt : i + 1,
                i + 1,
                ">"
              ]
            ]
          });
          console.log(
            `1957 ${log(
              "push",
              "tag-missing-closing-bracket",
              `${`[[${
                logWhitespace.startAt ? logWhitespace.startAt : i + 1
              }, ${i + 1}, ">"]]`}`
            )}`
          );
        } else {
          // if there's no tag registered, just dump all raw
          // character-related issues at staging, "rawIssueStaging"
          // into final issues:
          retObj.issues = retObj.issues.concat(rawIssueStaging);
          console.log(
            `1971 concat, then wipe ${`\u001b[${33}m${`rawIssueStaging`}\u001b[${39}m`}`
          );
          rawIssueStaging = [];
        }
      }
    }

    const output = {
      logTag: true,
      logAttr: true,
      logWhitespace: true,
      logLineEndings: false,
      retObj: false,
      tagIssueStaging: true,
      rawIssueStaging: true
    };
    console.log(
      `${
        Object.keys(output).some(key => output[key])
          ? `${`\u001b[${31}m${`█ `}\u001b[${39}m`}`
          : ""
      }${
        output.logTag && logTag.tagStartAt !== null
          ? `${`\u001b[${33}m${`logTag`}\u001b[${39}m`} ${JSON.stringify(
              logTag,
              null,
              4
            )}; `
          : ""
      }${
        output.logAttr && logAttr.attrStartAt !== null
          ? `${`\u001b[${33}m${`logAttr`}\u001b[${39}m`} ${JSON.stringify(
              logAttr,
              null,
              4
            )}; `
          : ""
      }${
        output.logWhitespace && logWhitespace.startAt !== null
          ? `${`\u001b[${33}m${`logWhitespace`}\u001b[${39}m`} ${JSON.stringify(
              logWhitespace,
              null,
              0
            )}; `
          : ""
      }${
        output.logLineEndings
          ? `${`\u001b[${33}m${`logLineEndings`}\u001b[${39}m`} ${JSON.stringify(
              logLineEndings,
              null,
              0
            )}; `
          : ""
      }${
        output.retObj
          ? `${`\u001b[${33}m${`retObj`}\u001b[${39}m`} ${JSON.stringify(
              retObj,
              null,
              4
            )}; `
          : ""
      }${
        output.tagIssueStaging && tagIssueStaging.length
          ? `\n${`\u001b[${33}m${`tagIssueStaging`}\u001b[${39}m`} ${JSON.stringify(
              tagIssueStaging,
              null,
              4
            )}; `
          : ""
      }${
        output.rawIssueStaging && rawIssueStaging.length
          ? `\n${`\u001b[${33}m${`rawIssueStaging`}\u001b[${39}m`} ${JSON.stringify(
              rawIssueStaging,
              null,
              4
            )}; `
          : ""
      }`
    );

    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
  }
  //                                  ^
  //                                 /|\
  //                                / | \
  //                               /  |  \
  //                                  |
  //                                  |
  //                                  |
  //                                  |
  //                         L O O P     E N D S

  // tend the mismatching EOL's, if applicable. That's at least two
  // kinds of EOL's was recorded and no opts are enforcing a particular
  // style of EOL (opts.style.line_endings_CR_LF_CRLF).
  if (
    (!opts.style || !opts.style.line_endings_CR_LF_CRLF) &&
    ((logLineEndings.cr.length && logLineEndings.lf.length) ||
      (logLineEndings.lf.length && logLineEndings.crlf.length) ||
      (logLineEndings.cr.length && logLineEndings.crlf.length))
  ) {
    // so line endings are mixed up. Let's find which type is prevalent:
    if (
      logLineEndings.cr.length > logLineEndings.crlf.length &&
      logLineEndings.cr.length > logLineEndings.lf.length
    ) {
      console.log("2084 CR clearly prevalent");
      // replace all LF and CRLF with CR
      if (logLineEndings.crlf.length) {
        logLineEndings.crlf.forEach(eolEntryArr => {
          retObj.issues.push({
            name: "file-mixed-line-endings-file-is-CR-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\r"]]
          });
        });
      }
      if (logLineEndings.lf.length) {
        logLineEndings.lf.forEach(eolEntryArr => {
          retObj.issues.push({
            name: "file-mixed-line-endings-file-is-CR-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\r"]]
          });
        });
      }
    } else if (
      logLineEndings.lf.length > logLineEndings.crlf.length &&
      logLineEndings.lf.length > logLineEndings.cr.length
    ) {
      console.log("2106 LF clearly prevalent");
      // replace all CR and CRLF with LF
      if (logLineEndings.crlf.length) {
        logLineEndings.crlf.forEach(eolEntryArr => {
          retObj.issues.push({
            name: "file-mixed-line-endings-file-is-LF-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\n"]]
          });
        });
      }
      if (logLineEndings.cr.length) {
        logLineEndings.cr.forEach(eolEntryArr => {
          retObj.issues.push({
            name: "file-mixed-line-endings-file-is-LF-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\n"]]
          });
        });
      }
    } else if (
      logLineEndings.crlf.length > logLineEndings.lf.length &&
      logLineEndings.crlf.length > logLineEndings.cr.length
    ) {
      console.log("2128 CRLF clearly prevalent");
      // replace all CR and LF with CRLF
      if (logLineEndings.cr.length) {
        logLineEndings.cr.forEach(eolEntryArr => {
          retObj.issues.push({
            name: "file-mixed-line-endings-file-is-CRLF-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\r\n"]]
          });
        });
      }
      if (logLineEndings.lf.length) {
        logLineEndings.lf.forEach(eolEntryArr => {
          retObj.issues.push({
            name: "file-mixed-line-endings-file-is-CRLF-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\r\n"]]
          });
        });
      }
    } else if (
      logLineEndings.crlf.length === logLineEndings.lf.length &&
      logLineEndings.lf.length === logLineEndings.cr.length
    ) {
      console.log("2150 same amount of each type of EOL");
      // replace CR and CRLF with LF
      // no need for checking the existance (if logLineEndings.crlf.length ...):
      logLineEndings.crlf.forEach(eolEntryArr => {
        retObj.issues.push({
          name: "file-mixed-line-endings-file-is-LF-mainly",
          position: [[eolEntryArr[0], eolEntryArr[1], "\n"]]
        });
      });
      logLineEndings.cr.forEach(eolEntryArr => {
        retObj.issues.push({
          name: "file-mixed-line-endings-file-is-LF-mainly",
          position: [[eolEntryArr[0], eolEntryArr[1], "\n"]]
        });
      });
    } else if (
      logLineEndings.cr.length === logLineEndings.crlf.length &&
      logLineEndings.cr.length > logLineEndings.lf.length
    ) {
      console.log("2169 CR & CRLF are prevalent over LF");
      // replace CR and LF with CRLF
      if (logLineEndings.cr.length) {
        logLineEndings.cr.forEach(eolEntryArr => {
          retObj.issues.push({
            name: "file-mixed-line-endings-file-is-CRLF-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\r\n"]]
          });
        });
      }
      if (logLineEndings.lf.length) {
        logLineEndings.lf.forEach(eolEntryArr => {
          retObj.issues.push({
            name: "file-mixed-line-endings-file-is-CRLF-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\r\n"]]
          });
        });
      }
    } else if (
      (logLineEndings.lf.length === logLineEndings.crlf.length &&
        logLineEndings.lf.length > logLineEndings.cr.length) ||
      (logLineEndings.cr.length === logLineEndings.lf.length &&
        logLineEndings.cr.length > logLineEndings.crlf.length)
    ) {
      console.log(
        "2194 LF && CRLF are prevalent over CR or CR & LF are prevalent over CRLF"
      );
      // replace CRLF and CR with LF
      if (logLineEndings.cr.length) {
        logLineEndings.cr.forEach(eolEntryArr => {
          retObj.issues.push({
            name: "file-mixed-line-endings-file-is-LF-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\n"]]
          });
        });
      }
      if (logLineEndings.crlf.length) {
        logLineEndings.crlf.forEach(eolEntryArr => {
          retObj.issues.push({
            name: "file-mixed-line-endings-file-is-LF-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\n"]]
          });
        });
      }
    }
  }

  // merge all fixes into ranges-apply-ready array:
  console.log("2217 BEFORE FIX");
  console.log(
    `2219 ${`\u001b[${33}m${`retObj.issues`}\u001b[${39}m`} = ${JSON.stringify(
      retObj.issues,
      null,
      4
    )}`
  );

  retObj.fix =
    isArr(retObj.issues) && retObj.issues.length
      ? merge(
          retObj.issues.reduce((acc, obj) => {
            return acc.concat(obj.position);
          }, [])
        )
      : null;

  return retObj;
}

export { lint, version, errors };

// REF from https://steelbrain.me/linter/examples/standard-linter-v2.html
// {
//   severity: 'info',
//   location: {
//     file: editorPath,
//     position: [[0, 0], [0, 1]],
//   },
//   excerpt: `A random value is ${Math.random()}`,
//   description: `### What is this?\nThis is a randomly generated value`
// }

// -----------------------------------------------------------------------------
//
// Notes for self.

// TODO - complete witing up pingTag() on all tag ending catches
