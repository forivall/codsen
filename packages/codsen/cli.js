#!/usr/bin/env node

import meow from "meow";
import updateNotifier from "update-notifier";
import { createRequire } from "module";

const { log } = console;

const require1 = createRequire(import.meta.url);
const pkg = require1("./package.json");

const cli = meow(
  `
  Usage
    $ codsen

  Options
    -h, --help        Shows this help
    -v, --version     Shows the version of your ${name}
`,
  {
    importMeta: import.meta,
    flags: {},
  }
);
updateNotifier({ pkg }).notify();

// FUNCTIONS
// -----------------------------------------------------------------------------

if (cli.flags.v) {
  log(pkg.version);
  process.exit(0);
} else if (cli.flags.h) {
  log(cli.help);
  process.exit(0);
}

console.log("C O D S E N");
