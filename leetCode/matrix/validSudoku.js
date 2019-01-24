/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // vertical
  // for (let i = 0; i < board.length; i++) {
  //   if (!isValid(board[i])) {
  //     return false
  //   }
  // }
  // horizontal
  // let cols = []
  // for (let i = 0; i < board.length; i++) {
  //   for (let j = 0; j < board.length; j++) {
  //     if (!cols[j]) cols[j] = []
  //     cols[j].push(board[i][j])
  //   }
  // }
  // for (let col of cols) {
  //   if (!isValid(col)) return false
  // }
  // sub-boxes
  let boxes = []
  for (let i = 0; i < board.length; i += 3) {
    debugger
    let boxNum = Math.floor(i / 3)
    let box = []
    boxes[boxNum] = box
    for (let j = i; j < i+3; j+=3) {
      debugger
      for (let k = j; k < j+3; k += 1) {
        debugger
        box.push(board[j][k])
        box.push(board[j+1][k])
        box.push(board[j+2][k])
      }
    }
  }
  // console.log(boxes)
  return true

  function isValid(numGroup) {
    let seen = {}
    for (let num of numGroup) {
      if (num === '.') continue
      if (seen[num]) {
        return false
      }
      seen[num] = 1
    }
    return true
  }
};

// let board1 =
//   [
//     [".", ".", ".", ".", "5", ".", ".", "1", "."],
//     [".", "4", ".", "3", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", ".", "3", ".", ".", "1"],
//     ["8", ".", ".", ".", ".", ".", ".", "2", "."],
//     [".", ".", "2", ".", "7", ".", ".", ".", "."],
//     [".", "1", "5", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", ".", "2", ".", ".", "."],
//     [".", "2", ".", "9", ".", ".", ".", ".", "."],
//     [".", ".", "4", ".", ".", ".", ".", ".", "."]
//   ]


let board1 = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

console.log(isValidSudoku(board1));