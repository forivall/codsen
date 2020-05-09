import tap from "tap";
import ct from "../dist/codsen-tokenizer.esm";

// ESP tags in the tag attributes
// -----------------------------------------------------------------------------

tap.test(
  `01 - ${`\u001b[${36}m${`basic`}\u001b[${39}m`} - one Nunjucks tag goes in as attribute`,
  (t) => {
    const gathered = [];
    ct(`<td{% z %}>`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });

    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 11,
          value: `<td{% z %}>`,
          attribs: [
            {
              type: "esp",
              start: 3,
              end: 10,
              value: "{% z %}",
              head: "{%",
              tail: "%}",
              kind: null,
            },
          ],
        },
      ],
      "01.01"
    );
    t.end();
  }
);

tap.test(
  `02 - ${`\u001b[${36}m${`basic`}\u001b[${39}m`} - Nunjucks conditionals wrapping an attr`,
  (t) => {
    const gathered = [];
    ct(`<td{% x %} class="z"{% y %} id="z">`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });

    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 35,
          value: `<td{% x %} class="z"{% y %} id="z">`,
          attribs: [
            {
              type: "esp",
              start: 3,
              end: 10,
              value: "{% x %}",
              head: "{%",
              tail: "%}",
              kind: null,
            },
            {
              attribName: "class",
              attribNameRecognised: true,
              attribNameStartsAt: 11,
              attribNameEndsAt: 16,
              attribOpeningQuoteAt: 17,
              attribClosingQuoteAt: 19,
              attribValueRaw: "z",
              attribValue: [
                {
                  type: "text",
                  start: 18,
                  end: 19,
                  value: "z",
                },
              ],
              attribValueStartsAt: 18,
              attribValueEndsAt: 19,
              attribStart: 11,
              attribEnd: 20,
            },
            {
              type: "esp",
              start: 20,
              end: 27,
              value: "{% y %}",
              head: "{%",
              tail: "%}",
              kind: null,
            },
            {
              attribName: "id",
              attribNameRecognised: true,
              attribNameStartsAt: 28,
              attribNameEndsAt: 30,
              attribOpeningQuoteAt: 31,
              attribClosingQuoteAt: 33,
              attribValueRaw: "z",
              attribValue: [
                {
                  type: "text",
                  start: 32,
                  end: 33,
                  value: "z",
                },
              ],
              attribValueStartsAt: 32,
              attribValueEndsAt: 33,
              attribStart: 28,
              attribEnd: 34,
            },
          ],
        },
      ],
      "02.01"
    );
    t.end();
  }
);

tap.test(
  `03 - ${`\u001b[${36}m${`basic`}\u001b[${39}m`} - Nunjucks conditionals wrapping an attr`,
  (t) => {
    const gathered = [];
    ct(`<td{% if something %} class="z"{% endif %} id="y">`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });

    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 50,
          value: '<td{% if something %} class="z"{% endif %} id="y">',
          tagNameStartsAt: 1,
          tagNameEndsAt: 3,
          tagName: "td",
          recognised: true,
          closing: false,
          void: false,
          pureHTML: false,
          kind: null,
          attribs: [
            {
              type: "esp",
              start: 3,
              end: 21,
              value: "{% if something %}",
              head: "{%",
              tail: "%}",
              kind: null,
            },
            {
              attribName: "class",
              attribNameRecognised: true,
              attribNameStartsAt: 22,
              attribNameEndsAt: 27,
              attribOpeningQuoteAt: 28,
              attribClosingQuoteAt: 30,
              attribValueRaw: "z",
              attribValue: [
                {
                  type: "text",
                  start: 29,
                  end: 30,
                  value: "z",
                },
              ],
              attribValueStartsAt: 29,
              attribValueEndsAt: 30,
              attribStart: 22,
              attribEnd: 31,
            },
            {
              type: "esp",
              start: 31,
              end: 42,
              value: "{% endif %}",
              head: "{%",
              tail: "%}",
              kind: null,
            },
            {
              attribName: "id",
              attribNameRecognised: true,
              attribNameStartsAt: 43,
              attribNameEndsAt: 45,
              attribOpeningQuoteAt: 46,
              attribClosingQuoteAt: 48,
              attribValueRaw: "y",
              attribValue: [
                {
                  type: "text",
                  start: 47,
                  end: 48,
                  value: "y",
                },
              ],
              attribValueStartsAt: 47,
              attribValueEndsAt: 48,
              attribStart: 43,
              attribEnd: 49,
            },
          ],
        },
      ],
      "03.01"
    );
    t.end();
  }
);
