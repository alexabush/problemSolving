function wordSearch(matrix, word) {
  let paths = [];
  // find starting letters within matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === word[0]) {
        paths.push([i, j]);
      }
    }
  }
  if (word.length === 1 && paths.length) return true
  while (paths.length) {
    let coord = paths.pop();
    let seen = { [word[0]]: coord };
    let prev = word[0];
    let wordCopy = word.slice(1);
    let matrixCopy = matrix.map(row => {
      return row.map(square => square);
    });
    matrixCopy[coord[0]][coord[1]] = 'Seen';
    while (wordCopy.length) {
      let [prevRow, prevCol] = seen[prev];
      let current = wordCopy[0];
      let possibleCoords = [];
      let foundLetter = false;
      debugger;
      if (prevRow > 0) {
        // up
        possibleCoords.push([prevRow - 1, prevCol]);
      }
      if (prevRow < matrix.length - 1) {
        // down
        possibleCoords.push([prevRow + 1, prevCol]);
      }
      if (prevCol > 0) {
        // left
        possibleCoords.push([prevRow, prevCol - 1]);
      }
      if (prevCol < matrix[0].length - 1) {
        // right
        possibleCoords.push([prevRow, prevCol + 1]);
      }
      for (let coord of possibleCoords) {
        if (matrixCopy[coord[0]][coord[1]] === current) {
          seen[current] = coord;
          matrixCopy[coord[0]][coord[1]] = 'Seen';
          prev = current;
          wordCopy = wordCopy.slice(1);
          foundLetter = true;
          if (!wordCopy.length) return true;
        }
      }
      if (!foundLetter) break;
    }
  }
  return false;
}

const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['H', 'D', 'E', 'E']
];

// console.log(wordSearch(board, "ABCCED")) //true
// console.log(wordSearch(board, "SEE")) //true
// console.log(wordSearch(board, "ABCB")) //false

// const board2 = [
//   ['A', 'B', 'C', 'E'],
//   ['S', 'F', 'C', 'S'],
//   ['A', 'D', 'E', 'E']
// ];

// console.log(wordSearch(board2, 'ABCCED'));

// const tinyBoard = [['a']];
// console.log(wordSearch(tinyBoard, 'a'));


const board3 = [["A", "B", "C", "E"], ["S", "F", "E", "S"], ["A", "D", "E", "E"]]

console.log(wordSearch("ABCESEEEFS"))