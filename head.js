#!/usr/bin/env node

/**
 * Module dependencies.
 */

const commonUtils = require("./commonUtils");
const fileUtils = require("./fileUtils");

const argv = process.argv.slice(2);
const parsedArg = commonUtils.parseArgument(argv);

try {
  commonUtils.validateArguments(parsedArg);
  const files = parsedArg._;
  const noOfLines = parsedArg.n;
  const noOfBytes = parsedArg.c;
  for (file of files) {
    fileUtils.validateFile(file);
    console.log("==>" + file + "<==");

    if (
      commonUtils.isNullOrUndefined(noOfLines) &&
      commonUtils.isNullOrUndefined(noOfBytes)
    ) {
      fileUtils.readLinesFromFile(file);
    } else if (!commonUtils.isNullOrUndefined(noOfLines)) {
      fileUtils.readLinesFromFile(file, noOfLines);
    } else if (!commonUtils.isNullOrUndefined(noOfBytes)) {
      fileUtils.readBytesFromFile(file, noOfBytes);
    }
  }
} catch (error) {
  console.error(error.message);
}
