const parseArgs = require("minimist");

const argv = parseArgs(process.argv.slice(2));

function isNullOrUndefined(item) {
  return item === null || item === undefined ? true : false;
}

module.exports = {
  isNullOrUndefined,
  argv
};
