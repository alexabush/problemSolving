const fs = require('fs');
let filename = process.argv[2];
let readline = require('readline');

// let fileData = fs.readFileSync(filename, 'utf8');

let lines = [];

var lineReader = readline.createInterface({
  input: fs.createReadStream(filename)
});

lineReader.on('line', (line) => {
  // lines.push(line);
  console.log(line)
});
lineReader.close()

lineReader.on('close', () => {
  console.log('ds stream closed')
})
// for (let line of lines) {
//   console.log(line);
// }
