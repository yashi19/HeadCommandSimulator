const fs = require("fs");
const FILE_ENCODING = 'utf8';

export function readFile(file,noOfLines){
    const fileData = fs.readFileSync(file,FILE_ENCODING);
    console.log(fileData);
}

export function readFile(file,noOfBytes){
    const fileData = fs.readFileSync(file,FILE_ENCODING);
    console.log(fileData);
}

export function validateFile(file) {
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
    readFile
  };
  