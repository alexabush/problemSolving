function moveZerosLeft(nums) {
  let zeroCount = 0;
  for (let num of nums) {
    if (num === 0) zeroCount++;
  }
  let newArr = new Array(zeroCount).fill(0);
  debugger;
  for (let num of nums) {
    if (num !== 0) newArr.push(num);
  }
  return newArr;
}

let arr1 = [1, 10, 20, 0, 59, 63, 0, 88, 0];
console.log(moveZerosLeft(arr1));
