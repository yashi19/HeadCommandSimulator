#!/usr/bin/env node

/**
 * Module dependencies.
 */

const commonUtils = require("./commonUtils");
const fileUtils = require("./fileUtils");

function executeHeadCommand() {
  const argv = process.argv.slice(2);
  const parsedArg = fileUtils.parseArgument(argv);
  let i = 0;
  try {
    const files = parsedArg._;
    const noOfLines = parseInt(parsedArg.n);
    const noOfBytes = parseInt(parsedArg.c);
    commonUtils.validateArguments(parsedArg);

    let outputData = "";
    for (file of files) {
      fileUtils.validateFile(file);
      if (files.length > 1) {
        outputData += "==> " + file + " <==\n";
        console.log("==> " + file + " <==");
      }
      if (!noOfLines && !noOfBytes) {
        outputData += fileUtils.readLinesFromFile(file);
      } else if (noOfLines) {
        outputData += fileUtils.readLinesFromFile(file, noOfLines);
      } else if (noOfBytes) {
        outputData += fileUtils.readBytesFromFile(file, noOfBytes);
      }
      if (i + 1 < files.length) {
        outputData += "\n";
      }
      console.log("");
      i++;
    }
    fileUtils.writeFile(outputData);
  } catch (error) {
    console.error(error.message);
  }
}

executeHeadCommand();
