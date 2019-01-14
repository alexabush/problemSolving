function moveZeros(nums) {
  let indexes = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) indexes.push(i)
  }
  let count = 0;
  for (let index of indexes) {
    debugger
    count++
    move(nums,index, count)
  }
  return nums

  function move(arr, s1, count) { // end non-inclusive
    for (let i = 0; i < s1; i++) {
      debugger
      arr[s1 + i] = arr[s1 + i - count]
    }
  }
}

let nums = [0, 1, 0, 3, 12]

console.log(moveZeros(nums));