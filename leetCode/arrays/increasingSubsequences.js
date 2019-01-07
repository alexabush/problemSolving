function increasingSubsequences(nums) {
  if (!nums.length) return [];
  let possibilities = [];
  for (let i = 0; i < nums.length - 1; i++) {
    helper([nums[i]], i + 1);
  }
  let result = [possibilities[0]];
  for (let i = 1; i < possibilities.length; i++) {
    if (checkIfArraysAreSame(possibilities[i - 1], possibilities[i])) {
      continue;
    }
    result.push(possibilities[i]);
  }
  return result;

  function helper(prevNums, index) {
    if (index === nums.length) return;
    let currentNum = nums[index];
    let addedNum = [];
    if (nums[index] >= prevNums[prevNums.length - 1]) {
      addedNum = prevNums.concat(currentNum);
      possibilities.push(addedNum);
    }
    helper(prevNums, index + 1);
    helper(addedNum, index + 1);
  }
}

function checkIfArraysAreSame(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

let nums = [4, 6, 7, 7];
console.log(increasingSubsequences(nums));
