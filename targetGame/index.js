function targetGame(vals) {
  let total = 0;
  let isLoaded = true;
  for (let i = 0; i < vals.length; i++) {
    if (vals[i] > 1 && isLoaded) {
      total += vals[i];
      isLoaded = false;
    } else {
      if (isLoaded === false) isLoaded = true;
    }
  }
  return total;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 5, 5, 5, 5];
const arr3 = [0, -1, -1, -1];
const arr4 = [5, -2, -9, -4];

console.log(targetGame([36, 42, 93, 29, 0, 33, 15, 84, 14, 24, 81, 11]));
// 327

// console.log(targetGame(arr1));
// console.log(targetGame(arr2));
// console.log(targetGame(arr3));
// console.log(targetGame(arr4));
