const fs = require("fs");
const os = require("os");
var appConstants = require("./appConstants");
const readline = require("readline");

function readLinesFromFile(file, noOfLines = appConstants.DEFAULT_LINES) {
  var lines = fs.readFileSync(file, appConstants.FILE_ENCODING).split("\n");
  let i = 0,
    data = "";
  while (i < noOfLines) {
    data += lines[i];
    data += "\n";
    console.log(lines[i]);
    i++;
  }
  return data;
}

function readBytesFromFile(file, noOfBytes) {
  const buffer = Buffer.alloc(noOfBytes, 0);
  let fd;

  try {
    fd = fs.openSync(file, "r");
    fs.readSync(fd, buffer, 0, noOfBytes, 0);
  } finally {
    if (fd) {
      fs.closeSync(fd);
    }
  }
  console.log(buffer.toString().trim());
  return buffer;
}

function validateFile(file) {
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
}

function deleteFile(file) {
  try {
    fs.unlinkSync(file);
  } catch (e) {
    // Do nothing if file already exist
  }
}
function writeFile(data) {
  fs.writeFileSync("test/output.txt", data);
}

function readFile(file) {
  return fs.readFileSync(file, appConstants.FILE_ENCODING);
}

module.exports = {
  validateFile,
  readLinesFromFile,
  readBytesFromFile,
  deleteFile,
  writeFile,
  readFile
};
