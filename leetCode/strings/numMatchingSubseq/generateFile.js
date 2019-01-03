console.log('in generateFile.js');
const fs = require('fs');
const util = require('util');

const appendFileP = util.promisify(fs.appendFile);

// must pass in fileName,
let args = process.argv.slice(2);
createFileOfRepeatedChars(...args);

/*
  takes fileName, string, number of times to repeat character
  creates/adds string of string repeated timesRepeat times to file
*/
function createFileOfRepeatedChars(fileName, str, timesRepeat) {
  let fullStr = generateCharStr(str, timesRepeat);
  addStrToFile(fileName, fullStr);
}

/*
  takes fileName and string
  (creates file) adds string to file
*/
function addStrToFile(file, str) {
  appendFileP(`./files/${file}`, str)
    .then(() => console.log('The file was saved!'))
    .catch(err => console.log(err));
}

/*
  takes char and int
  returns string of char repeated int times
*/
function generateCharStr(char, num) {
  str = '';
  for (let i = 0; i < num; i++) {
    str += char;
  }
  return str;
}

module.exports.generateFile = createFileOfRepeatedChars;
