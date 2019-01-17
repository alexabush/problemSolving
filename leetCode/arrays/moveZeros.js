// function moveZeros(nums) {
//   let indexes = []
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) indexes.push(i)
//   }
//   let count = 0;
//   for (let index of indexes) {
//     count++
//     move(nums,index, count)
//   }
//   return nums

//   function move(arr, s1, count) { // end non-inclusive
//     for (let i = 0; i < s1; i++) {
//       arr[s1 + i] = arr[s1 + i - count]
//     }
//   }
// }

var moveZeroes = function (nums) {
  let swapCount = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[swapCount] = nums[i]
      swapCount++
    }
  }
  for (let i = swapCount; i < nums.length; i++) {
    debugger
    nums[i] = 0
  }
};

let nums = [0, 1, 0, 3, 12]

console.log(moveZeroes(nums));