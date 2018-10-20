function moveZerosLeftPure(nums) {
  let zeroCount = 0;
  for (let num of nums) {
    if (num === 0) zeroCount++;
  }
  let newArr = new Array(zeroCount).fill(0);
  for (let num of nums) {
    if (num !== 0) newArr.push(num);
  }
  return newArr;
}

function moveZerosLeft(nums) {
  let zeroCount = 0;
  nums.forEach((num, index, nums) => {
    if (num === 0) {
      nums.splice(index, 1);
      zeroCount++;
    }
  });
  let zeros = new Array(zeroCount).fill(0);
  nums.unshift(...zeros);
  return nums;
}

let arr1 = [1, 10, 20, 0, 59, 63, 0, 88, 0];
console.log(moveZerosLeft(arr1));
