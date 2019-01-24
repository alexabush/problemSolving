/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  if (checkVertical(board) && checkHorizontal(board) && checkSquares(board)) {
    return true;
  } else {
    return false;
  }

  function checkVertical(board) {
    for (let i = 0; i < board.length; i++) {
      if (!isValid(board[i])) {
        return false;
      }
    }
    return true
  }

  function checkHorizontal(board) {
    let cols = [];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (!cols[j]) cols[j] = [];
        cols[j].push(board[i][j]);
      }
    }
    for (let col of cols) {
      if (!isValid(col)) return false;
    }
    return true
  }

  function checkSquares(board) {
    for (let i = 0; i < board.length; i += 3) {
      for (let j = 0; j < board[0].length; j += 3) {
        let square = [];
        for (let k = i; k < i + 3; k++) {
          for (let l = j; l < j + 3; l++) {
            square.push(board[k][l]);
          }
        }
        if (!isValid(square)) return false;
      }
    }
    return true
  }

  function isValid(numGroup) {
    let seen = {};
    for (let num of numGroup) {
      if (num === '.') continue;
      if (seen[num]) {
        return false;
      }
      seen[num] = 1;
    }
    return true;
  }
};

module.exports = { isValidSudoku };