const { execSync, fork, execFileSync } = require("child_process");
const fileutils = require("../fileUtils");

execSync("head -n 4 files/file1.txt files/file2.txt > test/expectedOutput.txt");
execFileSync("node", ["head.js", "-n 4", "files/file1.txt", "files/file2.txt"]);

function shouldTestHeadFunctionality() {
  console.log("Testing Start!!");

  let expectedOutputFileName = "test/expectedOutput.txt";
  let outputFilename = "test/output.txt";
  const expectedOutput = fileutils.readFile(expectedOutputFileName);
  const actualOutput = fileutils.readFile(outputFilename);

  if (expectedOutput === actualOutput) {
    console.log("Test Case Passed!!");
  } else {
    console.log("Test Case Failed!!");
  }
}

shouldTestHeadFunctionality();
