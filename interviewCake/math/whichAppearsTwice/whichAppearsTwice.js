/*
Space Complexity: n
Time Complexity: n
*/

function findRepeatlinearspacetime(nums) {
  let counter = {};
  let targetNum;
  for (let num of nums) {
    if (counter.hasOwnProperty(num)) {
      counter[num]++;
    } else {
      counter[num] = 1;
    }
  }
  for (let num of Object.keys(counter)) {
    if (counter[num] === 2) {
      targetNum = num;
    }
  }
  return parseInt(targetNum);
}

function findRepeat(nums) {
  let sortedNums = nums.sort((a, b) => a > b);
  let prev = Number.POSITIVE_INFINITY;
  for (let num of sortedNums) {
    if (num === prev) return prev;
    prev = num;
  }
}

let actual = findRepeat([1, 2, 1]);
// expected = 1;
console.log(actual);

actual = findRepeat([4, 1, 3, 4, 2]);
// expected = 4;
console.log(actual);

actual = findRepeat([1, 5, 9, 7, 2, 6, 3, 8, 2, 4]);
// expected = 2;
console.log(actual);
