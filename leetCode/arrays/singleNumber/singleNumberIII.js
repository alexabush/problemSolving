let nums1 = [1, 2, 1, 3, 2, 5];

function singleNumberIII(nums) {
  let counter = {};
  let result = []
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (!counter[num]) counter[num] = 1
    else counter[num] = null
  }
  for (let val in counter) {
    if (counter[val]) result.push(+val)
  }
  return result
  // let result = counter.reduce((acc, val, i) => {
  //   if (val) acc.push(i);
  //   return acc;
  // }, []);
  // return result;
}

console.log(singleNumberIII(nums1));
