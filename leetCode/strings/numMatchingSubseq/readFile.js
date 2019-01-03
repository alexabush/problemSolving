console.log('in readfile.js')
const fs = require('fs');

let args = process.argv.slice(2);
let data = readStrFile(...args);
console.log(data);

/* takes file path, returns str*/
function readStrFile(path) {
  return fs.readFileSync(`./files/${path}`, 'utf8');
}

module.exports.readFile = readStrFile;
