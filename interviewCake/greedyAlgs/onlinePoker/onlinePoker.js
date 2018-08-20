// n^2 runtime solution
function isRiffledn2(shuffledDeck, half1, half2) {
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

// linear runtime solution, iterative approach using for loop
function isRiffledIt(shuffledDeck, half1, half2) {
  let currentIndexh1 = 0;
  let currentIndexh2 = 0;
  for (let card of shuffledDeck) {
    if (card === half1[currentIndexh1]) {
      currentIndexh1++;
    } else if (card === half2[currentIndexh2]) {
      currentIndexh2++;
    } else {
      return false;
    }
  }
  return true;
}

//recursive implementation, linear runtime, n space complexity since I'll need to build up n stack frames for a 'true' instance
function isRiffled(shuffledDeck, half1, half2) {
  if (!shuffledDeck.length) return true;
  if (half1.length && shuffledDeck[0] === half1[0]) {
    return isRiffled(shuffledDeck.slice(1), half1.slice(1), half2);
  }
  if (half2.length && shuffledDeck[0] === half2[0]) {
    return isRiffled(shuffledDeck.slice(1), half1, half2.slice(1));
  }
  return false;
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
