function plusOne(arr, current) {
  if (typeof current === 'undefined') arr.length - 1;
  if (arr[current] === 9 && current === 0) {
    arr[current] = 0;
    arr.unshift(1);
    return arr;
  } else if (arr[current] === 9) {
    arr[current] = 0;
    plusOne(arr, current - 1);
  } else {
    arr[current] += 1;
  }
  return arr;
}

const no9 = [1, 2, 3];
const all9 = [9, 9, 9, 9, 9];
const some9 = [9, 9, 4, 9, 9];
const single0 = [0];

// console.log(plusOne(no9));
// 1,2,4
// console.log(plusOne(all9));
//1,0,0,0,0,0
// console.log(plusOne(some9));
//9,9,5,0,0
console.log(plusOne(single0));
//1
