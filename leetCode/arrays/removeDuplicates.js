var removeDuplicates = function (nums) {
  let fast = 1
  let confirmed = 0
  let swapIdx = 1
  for (fast; fast < nums.length; fast++) {
    if (nums[fast] !== nums[swapIdx-1]) {
      swap(nums, fast, swapIdx)
      confirmed++
      swapIdx++
    }
  }
  // return swapIdx // problem wants us to return new length
  return nums.slice(0, swapIdx) // this is the array that would be returned

  function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
};

let input = [1,1,2]
console.log(removeDuplicates(input))