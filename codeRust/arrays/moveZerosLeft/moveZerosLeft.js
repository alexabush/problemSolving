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

// function moveZerosLeft(nums) {
//   let zeroCount = 0;
//   for (let num of nums) {
//     if (num === 0) zeroCount++;
//   }
//   let newArr = new Array(zeroCount).fill(0);
//   for (let num of nums) {
//     if (num !== 0) newArr.push(num);
//   }
//   debugger;
//   nums = newArr;
//   return nums;
// }

function moveZerosLeftn2(nums) {
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

// reverse iteration + swap window strategy
function moveZerosLeftNonWorking(nums) {
  let swapWindow = 0;
  //we might need to modify this when we get near the beginning of the list?
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i - swapWindow] === 0) {
      swapWindow++;
    }
    if (swapWindow > 0) {
      swap(nums, i - swapWindow, i);
    }
  }
  return nums;

  // I think this constant even though it uses slice, because our swapWindow is constant
  function swap(arr, start, end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
  }
}
// CodeRust answer
function moveZerosLeft(nums) {
  if (nums.length < 1) {
    return;
  }
  let lengthA = nums.length;
  let write_index = lengthA - 1;
  let read_index = lengthA - 1;
  while (read_index >= 0) {
    if (nums[read_index] != 0) {
      nums[write_index] = nums[read_index];
      write_index--;
    }
    read_index--;
  }
  while (write_index >= 0) {
    nums[write_index] = 0;
    write_index--;
  }
}

let arr1 = [1, 10, 20, 0];
let arr2 = [1, 10, 20, 0, 59, 63, 0];
let arr3 = [1, 10, 20, 0, 59, 63, 0, 88, 0];

moveZerosLeft(arr3);
console.log(arr3);
