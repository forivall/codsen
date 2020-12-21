const objectPath = require("object-path");
const writeFileAtomic = require("write-file-atomic");
const decodeContent = require("./decodeContent");
const arrayiffy = require("./arrayiffy");

// writes readme
async function readme({ state, examples, lectrc }) {
  const badge1 = `<img src="https://codsen.com/images/png-codsen-ok.png" width="98" alt="ok" align="center">`;

  const badge2 = `<img src="https://codsen.com/images/png-codsen-1.png" width="148" alt="codsen" align="center">`;

  const badge3 = `<img src="https://codsen.com/images/png-codsen-star-small.png" width="32" alt="star" align="center">`;

  // start setting up the final readme's string:
  let content = `# ${state.pack.name}

> ${state.pack.description}

<div class="package-badges">
  <a href="https://www.npmjs.com/package/${
    state.pack.name
  }" rel="nofollow noreferrer noopener">
    <img src="https://img.shields.io/badge/-npm-blue?style=flat-square" alt="page on npm">
  </a>
  <a href="https://codsen.com/os/${
    state.pack.name
  }" rel="nofollow noreferrer noopener">
    <img src="https://img.shields.io/badge/-codsen-blue?style=flat-square" alt="page on codsen.com">
  </a>
  <a href="https://git.sr.ht/~royston/codsen/tree/master/packages/${
    state.pack.name
  }" rel="nofollow noreferrer noopener">
    <img src="https://img.shields.io/badge/-sourcehut-blue?style=flat-square" alt="page on sourcehut">
  </a>
  <a href="https://npmcharts.com/compare/${
    state.pack.name
  }?interval=30" rel="nofollow noreferrer noopener" target="_blank">
    <img src="https://img.shields.io/npm/dm/${
      state.pack.name
    }.svg?style=flat-square" alt="Downloads per month">
  </a>
  <a href="https://prettier.io" rel="nofollow noreferrer noopener" target="_blank">
    <img src="https://img.shields.io/badge/code_style-prettier-brightgreen.svg?style=flat-square" alt="Code style: prettier">
  </a>
  <img src="https://img.shields.io/badge/licence-MIT-brightgreen.svg?style=flat-square" alt="MIT License">
  <a href="https://liberamanifesto.com" rel="nofollow noreferrer noopener" target="_blank">
    <img src="https://img.shields.io/badge/libera-manifesto-lightgrey.svg?style=flat-square" alt="libera manifesto">
  </a>
</div>

## Install

\`\`\`bash
npm i${state.isCLI ? " -g" : ""} ${state.pack.name}
\`\`\`

${
  state.isCLI
    ? `\n\nThen, call it from the command line using ${
        state.pack.bin && Object.keys(state.pack.bin).length > 1
          ? "one of the following keywords"
          : "keyword"
      }:

\`\`\`bash
${Object.keys(state.pack.bin).join("\n")}
\`\`\`
`
    : ""
}${
    examples && examples["_quickTake.js"] && examples["_quickTake.js"].content
      ? `## Quick Take\n
\`\`\`js
${decodeContent(examples["_quickTake.js"].content)}
\`\`\`\n\n`
      : ""
  }## Documentation

Please [visit codsen.com](https://codsen.com/os/${
    state.pack.name
  }/) for a full description of the API and examples.

`;

  // licence module
  const licenceExtras = objectPath.get(state.pack, "lect.licence.extras");

  content += `${
    lectrc.licence.header.length > 0 ? `${lectrc.licence.header}` : ""
  }`;
  content += `${
    lectrc.licence.restofit.length > 0
      ? `\n\n${lectrc.licence.restofit}\n\n`
      : ""
  }`;

  if (licenceExtras) {
    content += `\n${arrayiffy(licenceExtras)
      .filter((singleExtra) => singleExtra.length > 0)
      .join("\n")}`;
  }

  if (!content.endsWith("\n")) {
    content += "\n\n";
  }

  content = content.replace(/%YEAR%/, String(new Date().getFullYear()));

  content += `${badge1} ${badge2} ${badge3}\n\n`;

  try {
    await writeFileAtomic("README.md", content);
    // console.log(`lect README.md ${`\u001b[${32}m${`OK`}\u001b[${39}m`}`);
    return Promise.resolve(null);
  } catch (err) {
    console.log(`lect: could not write README.md - ${err}`);
    return Promise.reject(err);
  }
}

module.exports = readme;
