import tap from "tap";
import is1 from "../dist/is-html-tag-opening.umd";

tap.test("UMD build works fine", (t) => {
  t.true(is1("<a>", 0), "01");
  t.end();
});
