function gameOfLife(board) {
  // let newBoard = board.map(row => row.map(cell => cell));
  let newBoard = [...Array(board.length)].map(row => Array(board[0].length));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let neighbors = 0;
      if (i > 0 && board[i - 1][j] === 1) {
        neighbors++;
      } //up
      if (i < board.length - 1 && board[i + 1][j] === 1) {
        neighbors++;
      } //down
      if (j > 0 && board[i][j - 1] === 1) {
        neighbors++;
      } // left
      if (j < board[0].length - 1 && board[i][j + 1] === 1) {
        neighbors++;
      } //right

      if (i > 0 && j > 0 && board[i - 1][j - 1] === 1) {
        neighbors++;
      } //up-left
      if (i < board.length - 1 && j > 0 && board[i + 1][j - 1] === 1) {
        neighbors++;
      } //down-left
      if (i > 0 && j < board[i].length - 1 && board[i - 1][j + 1] === 1) {
        neighbors++;
      } // up-right
      if (
        i < board.length - 1 &&
        j < board[0].length - 1 &&
        board[i + 1][j + 1] === 1
      ) {
        neighbors++;
      } //down-right
      if (board[i][j] == 1 && neighbors < 2) newBoard[i][j] = 0;
      if (board[i][j] == 1 && neighbors > 3) newBoard[i][j] = 0;
      if (board[i][j] == 0 && neighbors === 3) newBoard[i][j] = 1;
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (newBoard[i][j] >= 0 ) board[i][j] = newBoard[i][j];
    }
  }
}

let board = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]];
gameOfLife(board);
console.log(board);

// let tinyBoard = [[1, 1], [1, 0]];
// gameOfLife(tinyBoard);
// console.log(tinyBoard);
