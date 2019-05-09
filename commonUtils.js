const appConstants = require("./appConstants");

function validateArguments(files, noOfBytes, noOfLines) {
  if (noOfLines && isNaN(noOfLines)) {
    throw new Error(appConstants.ILLEGAL_LINE_COUNT);
  } else if (noOfBytes && isNaN(noOfBytes)) {
    throw new Error(appConstants.ILLEGAL_BYTE_COUNT);
  } else if (noOfLines && noOfBytes) {
    throw new Error(appConstants.ILLEGAL_LINE_BYTE_ARG);
  } else if (files.length == 0) {
    throw new Error(appConstants.NO_FILE_ARGUMENT);
  }
}

module.exports = {
  validateArguments
};
