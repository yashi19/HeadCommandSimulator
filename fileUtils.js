const fs = require("fs");
const os = require("os");
var appConstants = require("./appConstants");
const readline = require("readline");

function readLinesFromFile(file, noOfLines = appConstants.DEFAULT_LINES) {
  const fileData = fs.readFileSync(file, appConstants.FILE_ENCODING);
  const fileStream = fs.createReadStream(file);
  console.log(fileStream);
}

function readBytesFromFile(file, noOfBytes) {
  var data = "";
  const stream = fs.createReadStream(file, {
    start: 0,
    end: noOfBytes
  });

  stream
    .on("data", function(chunk) {
      data += chunk;
    })
    .on("end", function() {
      console.log(data);
    });
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

module.exports = {
  validateFile,
  readLinesFromFile,
  readBytesFromFile
};
