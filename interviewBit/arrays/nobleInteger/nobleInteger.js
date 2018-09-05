function nobleInteger(ints) {
  for (let int of ints) {
    let count = 0;
    for (let num of ints) {
      if (num > int) {
        count++;
      }
    }
    if (count === int) {
      return 1;
    }
  }
  return -1;
}

const arr1 = [0, 1, 5, 7, 8, 2, 3];
//true
const arr2 = [0, 1, 5, 7, 2];
//true
const arr3 = [0, 1, 2, 3, 4, 5];
//false

console.log(nobleInteger(arr1));
console.log(nobleInteger(arr2));
console.log(nobleInteger(arr3));
