// my unaided solution, linear space, linear time
function majorityElement1st(nums) {
  let freq = {};
  for (let num of nums) {
    freq[num] ? freq[num]++ : (freq[num] = 1);
  }
  let largest = [null, 0];
  for (let entry of Object.entries(freq)) {
    if (entry[1] > largest[1]) {
      largest = entry;
    }
  }
  return largest[0];
}

// got idea from looking at answer on Leetcode
/*
  no need to process hashmap, just exit early from loop once we exceed nums.length / 2

  this only works because we know there is always a number > nums.length / 2
*/
function majorityElementImproved(nums) {
  let freq = {};
  for (let num of nums) {
    freq[num] ? freq[num]++ : (freq[num] = 1);
    if (freq[num] > nums.length / 2) return num;
  }
}

// not as efficient but super fun!
function majorityElement(nums) {
  debugger
  nums.sort((a,b) => b-a);
  return nums[Math.floor(nums.length / 2)];
}

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
