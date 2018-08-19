function isRiffled(shuffledDeck, half1, half2) {
  let currentIndexh1 = 0;
  let currentIndexh2 = 0;
  debugger;
  for (let card of shuffledDeck) {
    let indexHalf1 = half1.indexOf(card);
    if (indexHalf1 > currentIndexh1) {
      return false;
    }
    if (indexHalf1 >= 0) currentIndexh1++;

    let indexHalf2 = half2.indexOf(card);
    if (indexHalf2 > currentIndexh2) {
      return false;
    }
    if (indexHalf2 >= 0) currentIndexh2++;
  }
  return true;
}

// run your function through some test cases here
// remember: debugging is half the battle!

let half1 = [1, 2, 3, 4, 5, 6];
let half2 = [7, 8, 9, 10, 11, 12];
let validDeck = [1, 2, 3, 7, 4, 8, 9, 10, 5, 6, 11, 12];
let invalidDeck = [9, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12];

console.log(isRiffled(validDeck, half1, half2));
//true
console.log(isRiffled(invalidDeck, half1, half2));
//false
