// rule: bad-character-pop-directional-formatting
// https://www.fileformat.info/info/unicode/char/202c/index.htm
// -----------------------------------------------------------------------------

import tap from "tap";
import { Linter } from "../../../dist/emlint.esm";

import { applyFixes } from "../../../t-util/util";

// -----------------------------------------------------------------------------

// 1. basic tests
tap.test(`01 - detects two POP DIRECTIONAL FORMATTING characters`, (t) => {
  const str = "\u202Cdlkgjld\u202Cj";
  const linter = new Linter();
  const messages = linter.verify(str, {
    rules: {
      "bad-character-pop-directional-formatting": 2,
    },
  });
  t.match(
    messages,
    [
      {
        ruleId: "bad-character-pop-directional-formatting",
        severity: 2,
        idxFrom: 0,
        idxTo: 1,
        line: 1,
        column: 1, // remember columns numbers start from 1, not zero
        message: "Bad character - POP DIRECTIONAL FORMATTING.",
        fix: {
          ranges: [[0, 1]],
        },
      },
      {
        ruleId: "bad-character-pop-directional-formatting",
        severity: 2,
        idxFrom: 8,
        idxTo: 9,
        line: 1,
        column: 9, // remember columns numbers start from 1, not zero
        message: "Bad character - POP DIRECTIONAL FORMATTING.",
        fix: {
          ranges: [[8, 9]],
        },
      },
    ],
    "01.01"
  );
  t.equal(applyFixes(str, messages), "dlkgjldj", "01.02");
  t.end();
});
