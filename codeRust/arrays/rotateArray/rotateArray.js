function rotateArrayNM(arr, n) {
  if (n < 0) {
    for (let i = 0; i < Math.abs(n); i++) {
      let num = arr.shift();
      arr.push(num);
    }
  } else {
    for (let i = 0; i < n; i++) {
      let num = arr.pop();
      arr.unshift(num);
    }
  }
  return arr;
}

function rotateArray(arr, n) {
  if (n < 0) {
    let nums = arr.splice(0, Math.abs(n));
    arr.push(...nums);
  } else {
    let nums = arr.splice(arr.length - n);
    arr.unshift(...nums);
  }
  return arr;
}

// const arr1 = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];
const a2 = [1, 2, 3, 4, 5];
// console.log(rotateArray(arr1, -1));
// console.log(rotateArray(a2, 1));
// [5,1,2,3,4]
console.log(rotateArray(a2, -1));
// [2,3,4,5,1]
// console.log(rotateArray(a2, 2));
// [4,5,1,2,3]
