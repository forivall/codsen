// rule: bad-character-partial-line-forward
// https://www.fileformat.info/info/unicode/char/008b/index.htm
// -----------------------------------------------------------------------------

import tap from "tap";
import { Linter } from "../../../dist/emlint.esm";

import { applyFixes } from "../../../t-util/util";

// -----------------------------------------------------------------------------

// 1. basic tests
tap.test(`01 - detects two PARTIAL LINE FORWARD characters`, (t) => {
  const str = "\u008Bdlkgjld\u008Bj";
  const linter = new Linter();
  const messages = linter.verify(str, {
    rules: {
      "bad-character-partial-line-forward": 2,
    },
  });
  t.match(
    messages,
    [
      {
        ruleId: "bad-character-partial-line-forward",
        severity: 2,
        idxFrom: 0,
        idxTo: 1,
        line: 1,
        column: 1, // remember columns numbers start from 1, not zero
        message: "Bad character - PARTIAL LINE FORWARD.",
        fix: {
          ranges: [[0, 1]],
        },
      },
      {
        ruleId: "bad-character-partial-line-forward",
        severity: 2,
        idxFrom: 8,
        idxTo: 9,
        line: 1,
        column: 9, // remember columns numbers start from 1, not zero
        message: "Bad character - PARTIAL LINE FORWARD.",
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
