const parseArgs = require("minimist");
const appConstants = require("./appConstants");

function parseArgument(argv) {
  return parseArgs(process.argv.slice(2));
}

function isNullOrUndefined(item) {
  return item === null || item === undefined ? true : false;
}

function validateArguments(argv) {
  const noOfLines = argv.n;
  const noOfBytes = argv.c;
  const files = argv._;
  if (files.length == 0) {
    throw new Error(appConstants.NO_FILE_ARGUMENT);
  } else if (!isNullOrUndefined(noOfLines) && isNaN(noOfLines)) {
    throw new Error(appConstants.ILLEGAL_LINE_COUNT);
  } else if (!isNullOrUndefined(noOfBytes) && isNaN(noOfBytes)) {
    throw new Error(appConstants.ILLEGAL_BYTE_COUNT);
  } else if (noOfLines && noOfBytes) {
    throw new Error(appConstants.ILLEGAL_LINE_BYTE_ARG);
  }
}

module.exports = {
  validateArguments,
  isNullOrUndefined,
  parseArgument
};
