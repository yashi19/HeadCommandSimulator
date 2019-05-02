#!/usr/bin/env node

/**
 * Module dependencies.
 */

const parseArgs = require("minimist");
const isNullOrUndefined = require("./commonUtils").isNullOrUndefined;
const fs = require("fs");
const path = require("path");

const argv = parseArgs(process.argv.slice(2));

const files = argv._;
const noOfLinesTobeDisplayed = argv.n;
const noOfBytesToBeDisplayed = argv.c;

for (file of files) {
  //path.join(__dirname, file);
  fs.access(file, fs.constants.F_OK | fs.constants.R_OK, err => {
    if (err) {
      console.error(
        `${file} ${
          err.code === "ENOENT"
            ? "No such file exist"
            : "There is no read permission on file"
        }`
      );
    }
  });

  if (
    !isNullOrUndefined(noOfLinesTobeDisplayed) &&
    !isNullOrUndefined(noOfBytesToBeDisplayed)
  ) {
    // Red 10 lines
  } else if (!isNullOrUndefined(noOfLinesTobeDisplayed)) {
  } else if (!isNullOrUndefined(noOfBytesToBeDisplayed)) {
  }
}
