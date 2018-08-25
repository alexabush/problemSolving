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
  for (let i = scoreCount.length - 1; i > 0; i--) {
    if (typeof scoreCount[i] === 'number') {
      while (scoreCount[i] > 0) {
        sortedNums.push(i);
        scoreCount[i]--;
      }
    }
  }
  return sortedNums;
}

const HIGHEST_POSSIBLE_SCORE = 100;
var unsortedScores = [37, 89, 41, 65, 91, 53];
var multipleScores = [89, 89, 41, 65, 91, 89];

console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE));
// returns [91, 89, 65, 53, 41, 37]

console.log(sortScores(multipleScores, HIGHEST_POSSIBLE_SCORE));
// returns [91, 89, 65, 53, 41, 37]
