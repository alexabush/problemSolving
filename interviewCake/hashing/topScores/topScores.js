function sortScores(nums, maxScore) {
  debugger;
  let scoreCount = [];
  let sortedNums = [];
  for (let num of nums) {
    if (!scoreCount[num]) {
      scoreCount[num] = 1;
    } else {
      scoreCount[num] += 1;
    }
  }
  for (let i = 0; i < scoreCount.length; i++) {
    if (typeof scoreCount[i] === 'number') {
      while (scoreCount[i] > 0) {
        sortedNums.push(i);
        scoreCount[i]--;
      }
    }
  }
  return sortedNums;
}

var unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE));
// returns [91, 89, 65, 53, 41, 37]
