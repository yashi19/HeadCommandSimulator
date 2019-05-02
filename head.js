#!/usr/bin/env node

/**
 * Module dependencies.
 */

const commonUtils = require("./commonUtils");
const fileUtils = require("./fileUtils");

const argv = commonUtils.argv;

const files = argv._;
const noOfLinesTobeDisplayed = argv.n;
const noOfBytesToBeDisplayed = argv.c;

for (file of files) {
  fileUtils.validateFile(file);

  if (
    !commonUtils.isNullOrUndefined(noOfLinesTobeDisplayed) &&
    !commonUtils.isNullOrUndefined(noOfBytesToBeDisplayed)
  ) {
    // Read 10 lines
  } else if (!commonUtils.isNullOrUndefined(noOfLinesTobeDisplayed)) {
  } else if (!commonUtils.isNullOrUndefined(noOfBytesToBeDisplayed)) {
  }
}
