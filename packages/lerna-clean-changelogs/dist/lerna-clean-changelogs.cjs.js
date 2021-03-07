/**
 * lerna-clean-changelogs
 * Removes frivolous entries from commitizen generated changelogs
 * Version: 2.0.7
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/lerna-clean-changelogs/
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var version$1 = "2.0.7";

var version = version$1;
function isStr(something) {
  return typeof something === "string";
}
function cleanChangelogs(changelogContents) {
  if (changelogContents === undefined) {
    throw new Error("lerna-clean-changelogs: [THROW_ID_01] The first input argument is missing!");
  } else if (!isStr(changelogContents)) {
    throw new Error("lerna-clean-changelogs: [THROW_ID_02] The first input argument must be a string! It was given as " + (Array.isArray(changelogContents) ? "array" : typeof changelogContents) + ", equal to:\n" + JSON.stringify(changelogContents, null, 4));
  }
  var final;
  var lastLineWasEmpty = false;
  if (typeof changelogContents === "string" && changelogContents.length && (!changelogContents.includes("\n") || !changelogContents.includes("\r"))) {
    var changelogEndedWithLinebreak = isStr(changelogContents) && changelogContents.length && (changelogContents[changelogContents.length - 1] === "\n" || changelogContents[changelogContents.length - 1] === "\r");
    changelogContents = changelogContents.trim().replace(/(https:\/\/git\.sr\.ht\/~[^/]+\/[^/]+\/)commits\//g, "$1commit/");
    var linesArr = changelogContents.split(/\r?\n/);
    linesArr.forEach(function (line, i) {
      if (line.startsWith("#")) {
        linesArr[i] = line.replace(/(#+) \[?(\d+\.\d+\.\d+)\s?\]\([^)]*\)/g, "$1 $2");
      }
      if (i && linesArr[i].startsWith("# ")) {
        linesArr[i] = "#" + linesArr[i];
      }
    });
    var newLinesArr = [];
    for (var i = linesArr.length; i--;) {
      if (linesArr[i].startsWith("**Note:** Version bump only") || linesArr[i].toLowerCase().includes("wip")) {
        while (isStr(linesArr[i - 1]) && !linesArr[i - 1].trim() && i) {
          i -= 1;
        }
        if (i && isStr(linesArr[i - 1]) && linesArr[i - 1].trim().startsWith("#")) {
          i -= 1;
        }
        while (isStr(linesArr[i - 1]) && !linesArr[i - 1].trim() && i) {
          i -= 1;
        }
      } else if (!linesArr[i].trim()) {
        if (!lastLineWasEmpty) {
          newLinesArr.unshift(linesArr[i].trim());
          lastLineWasEmpty = true;
        }
      }
      else if (linesArr[i][0] === "*" && linesArr[i][1] === " ") {
          newLinesArr.unshift("- " + linesArr[i].slice(2));
        } else {
          newLinesArr.unshift(linesArr[i]);
        }
      if (linesArr[i].trim()) {
        lastLineWasEmpty = false;
      }
    }
    final = "" + newLinesArr.join("\n") + (changelogEndedWithLinebreak ? "\n" : "");
  }
  return {
    version: version,
    res: final || changelogContents
  };
}

exports.cleanChangelogs = cleanChangelogs;
exports.version = version;
