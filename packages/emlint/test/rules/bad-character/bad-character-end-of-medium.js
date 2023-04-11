// rule: bad-character-end-of-medium
// https://www.fileformat.info/info/unicode/char/0019/index.htm
// -----------------------------------------------------------------------------

import { test } from "uvu";
// eslint-disable-next-line no-unused-vars
import { equal, is, ok, throws, type, not, match } from "uvu/assert";

// eslint-disable-next-line no-unused-vars
import { compare } from "../../../../../ops/helpers/shallow-compare.js";
import { Linter } from "../../../dist/emlint.esm.js";
import { applyFixes } from "../../../t-util/util.js";

// -----------------------------------------------------------------------------

// 1. basic tests
test("01 - detects two END OF MEDIUM characters", () => {
  let str = "\u0019dlkgjld\u0019j";
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "bad-character-end-of-medium": 2,
    },
  });
  compare(
    ok,
    messages,
    [
      {
        ruleId: "bad-character-end-of-medium",
        severity: 2,
        idxFrom: 0,
        idxTo: 1,
        line: 1,
        column: 1, // remember columns numbers start from 1, not zero
        message: "Bad character - END OF MEDIUM.",
        fix: {
          ranges: [[0, 1]],
        },
      },
      {
        ruleId: "bad-character-end-of-medium",
        severity: 2,
        idxFrom: 8,
        idxTo: 9,
        line: 1,
        column: 9, // remember columns numbers start from 1, not zero
        message: "Bad character - END OF MEDIUM.",
        fix: {
          ranges: [[8, 9]],
        },
      },
    ],
    "01.01"
  );
  equal(applyFixes(str, messages), "dlkgjldj", "01.01");
});

test.run();
