/**
 * ast-get-values-by-key
 * Read or edit parsed HTML (or AST in general)
 * Version: 2.7.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ast-get-values-by-key/
 */

import traverse from 'ast-monkey-traverse';
import matcher from 'matcher';
import clone from 'lodash.clonedeep';

function getAllValuesByKey(originalInput, whatToFind, originalReplacement) {
  if (!originalInput) {
    throw new Error(
      "ast-get-values-by-key: [THROW_ID_01] the first argument is missing!"
    );
  }
  if (!whatToFind) {
    throw new Error(
      "ast-get-values-by-key: [THROW_ID_02] the second argument is missing!"
    );
  } else if (Array.isArray(whatToFind)) {
    let culpritsIndex;
    let culpritsVal;
    /* istanbul ignore else */
    if (
      whatToFind.length &&
      whatToFind.some((val, i) => {
        if (typeof val === "string") {
          return false;
        }
        culpritsIndex = i;
        culpritsVal = val;
        return true;
      })
    ) {
      throw new Error(
        `ast-get-values-by-key: [THROW_ID_03] the second argument is array of values and not all of them are strings! For example, at index ${culpritsIndex}, we have a value ${JSON.stringify(
          culpritsVal,
          null,
          0
        )} which is not string but ${typeof culpritsVal}!`
      );
    }
  } else if (typeof whatToFind !== "string") {
    throw new Error(
      `ast-get-values-by-key: [THROW_ID_04] the second argument must be string! Currently it's of a type "${typeof whatToFind}", equal to:\n${JSON.stringify(
        whatToFind,
        null,
        4
      )}`
    );
  }
  let replacement;
  if (typeof originalReplacement === "string" || originalReplacement) {
    if (typeof originalReplacement === "string") {
      replacement = [originalReplacement];
    } else {
      replacement = clone(originalReplacement);
    }
  }
  const res = [];
  const input = traverse(originalInput, (key, val, innerObj) => {
    const current = val !== undefined ? val : key;
    if (
      val !== undefined &&
      matcher.isMatch(key, whatToFind, { caseSensitive: true })
    ) {
      if (replacement === undefined) {
        res.push({
          val,
          path: innerObj.path,
        });
      } else if (replacement.length > 0) {
        return replacement.shift();
      }
    }
    return current;
  });
  return replacement === undefined ? res : input;
}

export default getAllValuesByKey;
