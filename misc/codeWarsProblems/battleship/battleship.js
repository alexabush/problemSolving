const sampleBoard = [
  [0, 0, 0, 2, 2, 0],
  [0, 3, 0, 0, 0, 0],
  [0, 3, 0, 1, 0, 0],
  [0, 3, 0, 1, 0, 0]
];
const sampleAttacks = [[2, 1], [1, 3], [4, 2]];
console.log(damagedOrSunk(sampleBoard, sampleAttacks));

function damagedOrSunk(board, attacks) {
  const boats = Array.from({ length: 3 }, element => new Map());

  for (let i = board.length; i > 1; i--) {
    for (let j = 0; j < board[i].length; j++) {
      //need to accurately set the boat coordinates
      //currently coordinates are being tracked incorrectly
      //see notes for more details
      if (board[i][j] === 1) boats[0].set([i, j], false);
      if (board[i][j] === 2) boats[1].set([i, j], false);
      if (board[i][j] === 3) boats[2].set([i, j], false);
    }
  }

  for (let attack of attacks) {
    // let [a, b] = [...attack];
    // attack = [b, a];
    for (let boat of boats) {
      if (boat.has(attack)) boats.set(attack, true);
    }
  }

  let sunk = 0;
  let damaged = 0;
  let notTouched = 0;
  let points = 0;

  for (let boat of boats) {
    let counter = 0;
    [...boat.values()].forEach(coordinate => {
      if (coordinate === true) counter++;
    });
    if (counter === boat.length) sunk++;
    else if (counter > 0) damaged++;
    else notTouched++;
  }

  points = sunk * 1 + damaged * 0.5 + notTouched * -1;

  return { sunk, damaged, notTouched, points };
}
