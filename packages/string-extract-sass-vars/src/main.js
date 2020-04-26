// Takes string, SASS variables file and extracts the plain object of variables: key-value pairs
// As a bonus, it turns digit-only value strings into numbers.

const BACKSLASH = "\u005C";

function extractVars(str, originalOpts) {
  if (typeof str !== "string") {
    return {};
  }
  if (originalOpts && typeof originalOpts !== "object") {
    throw new Error(
      `string-extract-sass-vars: [THROW_ID_01] the second input argument should be a plain object but it was given as ${JSON.stringify(
        originalOpts,
        null,
        4
      )} (type ${typeof originalOpts})`
    );
  }
  const defaults = {
    throwIfEmpty: false,
    cb: null,
  };
  const opts = { ...defaults, ...originalOpts };
  console.log(
    `025 ${`\u001b[${33}m${`opts`}\u001b[${39}m`}: ${JSON.stringify(
      opts,
      null,
      4
    )}`
  );
  if (opts.cb && typeof opts.cb !== "function") {
    throw new Error(
      `string-extract-sass-vars: [THROW_ID_02] opts.cb should be function! But it was given as ${JSON.stringify(
        originalOpts,
        null,
        4
      )} (type ${typeof originalOpts})`
    );
  }

  const len = str.length;

  let varNameStartsAt = null;
  let varValueStartsAt = null;
  let varName = null;
  let varValue = null;
  let withinQuotes = null;
  let lastNonQuoteCharAt = null;

  let withinComments = false;
  let withinSlashSlashComment = false;
  let withinSlashAsteriskComment = false;

  const res = {};

  for (let i = 0; i < len; i++) {
    //
    //
    //
    //
    //                                THE TOP
    //                                ███████
    //
    //

    // end the state of being within quotes
    if (
      !withinComments &&
      withinQuotes &&
      str[i] === withinQuotes &&
      str[i - 1] !== BACKSLASH
    ) {
      withinQuotes = null;
      console.log(
        `075 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`withinQuotes`}\u001b[${39}m`} = ${JSON.stringify(
          withinQuotes,
          null,
          4
        )}`
      );
    }

    // catch the state of being within quotes
    else if (
      !withinQuotes &&
      !withinComments &&
      str[i - 1] !== BACKSLASH &&
      `'"`.includes(str[i])
    ) {
      withinQuotes = str[i];
      console.log(
        `092 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`withinQuotes`}\u001b[${39}m`} = ${JSON.stringify(
          withinQuotes,
          null,
          4
        )}`
      );
    }

    // catch ending of withinSlashSlashComment
    if (withinSlashSlashComment && `\r\n`.includes(str[i])) {
      withinSlashSlashComment = false;
      console.log(
        `104 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`withinSlashSlashComment`}\u001b[${39}m`} = ${JSON.stringify(
          withinSlashSlashComment,
          null,
          4
        )}`
      );
    }

    // catch a start of slashslash comments block
    if (!withinComments && str[i] === "/" && str[i + 1] === "/") {
      withinSlashSlashComment = true;
      console.log(
        `116 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`withinSlashSlashComment`}\u001b[${39}m`} = ${JSON.stringify(
          withinSlashSlashComment,
          null,
          4
        )}`
      );
    }

    // catch the ending of slash astrisk comments block
    if (
      withinSlashAsteriskComment &&
      str[i - 2] === "*" &&
      str[i - 1] === "/"
    ) {
      withinSlashAsteriskComment = false;
      console.log(
        `132 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`withinSlashAsteriskComment`}\u001b[${39}m`} = ${JSON.stringify(
          withinSlashAsteriskComment,
          null,
          4
        )}`
      );
    }

    // catch a start of slash astrisk comments block
    // withinSlashAsteriskComment
    if (!withinComments && str[i] === "/" && str[i + 1] === "*") {
      withinSlashAsteriskComment = true;
      console.log(
        `145 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`withinSlashAsteriskComment`}\u001b[${39}m`} = ${JSON.stringify(
          withinSlashAsteriskComment,
          null,
          4
        )}`
      );
    }

    // "within various comments" states aggregator
    withinComments = withinSlashSlashComment || withinSlashAsteriskComment;

    // Logging:
    // -------------------------------------------------------------------------
    console.log(
      `\u001b[${36}m${`===============================`}\u001b[${39}m \u001b[${
        withinComments ? 90 : 35
      }m${`str[ ${i} ] = ${
        str[i] && str[i].trim() ? str[i] : JSON.stringify(str[i], null, 4)
      }`}\u001b[${39}m \u001b[${36}m${`===============================`}\u001b[${39}m\n`
    );

    //
    //
    //
    //
    //                              THE MIDDLE
    //                              ██████████
    //
    //
    //
    //

    // catch the beginning of the var name
    // -----------------------------------------------------------------------------
    if (!withinComments && str[i] === "$" && varNameStartsAt === null) {
      varNameStartsAt = i + 1;
      console.log(
        `182 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`varNameStartsAt`}\u001b[${39}m`} = ${JSON.stringify(
          varNameStartsAt,
          null,
          4
        )}`
      );
    }

    // catch the ending of a value
    // -----------------------------------------------------------------------------

    if (
      !withinComments &&
      varValueStartsAt !== null &&
      !withinQuotes &&
      str[i] === ";"
    ) {
      varValue = str.slice(
        !`"'`.includes(str[varValueStartsAt])
          ? varValueStartsAt
          : varValueStartsAt + 1,
        lastNonQuoteCharAt + 1
      );
      console.log(
        `206 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`varValue`}\u001b[${39}m`} = ${JSON.stringify(
          varValue,
          null,
          4
        )}`
      );

      if (/^-?\d*\.?\d*$/.test(varValue)) {
        varValue = +varValue;
      }

      // if the callback has been given, run the value past it:
      res[varName] = opts.cb ? opts.cb(varValue) : varValue;

      varNameStartsAt = null;
      varValueStartsAt = null;
      varName = null;
      varValue = null;
    }

    // catch the beginning of a value
    // -----------------------------------------------------------------------------

    if (
      !withinComments &&
      varName !== null &&
      str[i] &&
      str[i].trim().length &&
      varValueStartsAt === null
    ) {
      varValueStartsAt = i;
      console.log(
        `238 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`varValueStartsAt`}\u001b[${39}m`} = ${JSON.stringify(
          varValueStartsAt,
          null,
          4
        )}`
      );
    }

    // catch the ending of the var name
    // -----------------------------------------------------------------------------
    if (
      !withinComments &&
      !varName &&
      varNameStartsAt !== null &&
      str[i] === ":" &&
      !withinQuotes
    ) {
      varName = str.slice(varNameStartsAt, i);
      console.log(
        `257 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`varName`}\u001b[${39}m`} = ${JSON.stringify(
          varName,
          null,
          4
        )}`
      );
    }

    //
    //
    //
    //
    //                              THE BOTTOM
    //                              ██████████
    //
    //
    //
    //

    if (!`'"`.includes(str[i])) {
      lastNonQuoteCharAt = i;
    }

    // LOGGING:

    console.log(
      `${`\u001b[${90}m${`██ withinComments`}\u001b[${39}m`} = ${`\u001b[${
        withinComments ? 32 : 31
      }m${withinComments}\u001b[${39}m`}`
    );
    console.log(
      `${`\u001b[${90}m${`██ withinQuotes`}\u001b[${39}m`} = ${`\u001b[${
        withinQuotes ? 32 : 31
      }m${withinQuotes}\u001b[${39}m`}`
    );
    console.log(
      `${`\u001b[${90}m${`██ withinSlashSlashComment`}\u001b[${39}m`} = ${`\u001b[${
        withinSlashSlashComment ? 32 : 31
      }m${withinSlashSlashComment}\u001b[${39}m`}`
    );
    console.log(
      `${`\u001b[${90}m${`██ withinSlashAsteriskComment`}\u001b[${39}m`} = ${`\u001b[${
        withinSlashAsteriskComment ? 32 : 31
      }m${withinSlashAsteriskComment}\u001b[${39}m`}`
    );
    console.log(
      `${`\u001b[${90}m${`██ varNameStartsAt`}\u001b[${39}m`} = ${varNameStartsAt}`
    );
    console.log(
      `${`\u001b[${90}m${`██ varValueStartsAt`}\u001b[${39}m`} = ${varValueStartsAt}`
    );
    console.log(
      `${`\u001b[${90}m${`██ lastNonQuoteCharAt`}\u001b[${39}m`} = ${JSON.stringify(
        lastNonQuoteCharAt,
        null,
        4
      )}`
    );
    console.log(
      `${
        varName
          ? `${`\u001b[${33}m${`varName`}\u001b[${39}m`} = ${varName}; `
          : ""
      }${
        varValue
          ? `${`\u001b[${33}m${`varValue`}\u001b[${39}m`} = ${varValue}; `
          : ""
      }`
    );
  }

  console.log(
    `329 ${`\u001b[${32}m${`FINAL`}\u001b[${39}m`} ${`\u001b[${33}m${`res`}\u001b[${39}m`} = ${JSON.stringify(
      res,
      null,
      4
    )}`
  );

  // opts.throwIfEmpty
  if (!Object.keys(res).length && opts.throwIfEmpty) {
    console.log(`338 ${`\u001b[${31}m${`throw`}\u001b[${39}m`}`);
    throw new Error(
      `string-extract-sass-vars: [THROW_ID_03] no keys extracted! (setting opts.originalOpts)`
    );
  }

  return res;
}

export default extractVars;
