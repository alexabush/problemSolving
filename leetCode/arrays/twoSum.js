function twoSum(nums, target) {
  let seen = {}
  for (let i = 0; i < nums.length; i++) {
    if (typeof seen[target - nums[i]] !== 'undefined') {
      return [seen[target - nums[i]], i]
    }
    seen[nums[i]] = i
  }
}

let nums = [2, 7, 11, 15]
let target = 9

console.log(twoSum(nums,target))