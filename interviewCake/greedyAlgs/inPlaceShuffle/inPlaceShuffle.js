function inPlaceShuffle(arr) {
  return arr.forEach((num, index, arr) => {
    debugger;
    let random = randomNum(0, arr.length - 1);
    swap(arr, index, random);
  });
}

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

//inclusive of both low and high
function randomNum(low, high) {
  return Math.floor(Math.random() * high - low + 1) + low;
}

const arr1 = [1, 2, 3, 4, 5, 6, 7];
inPlaceShuffle(arr1);
console.log(arr1);
