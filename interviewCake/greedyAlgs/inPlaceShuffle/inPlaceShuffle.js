//swap method, not completely random! :(
function inPlaceShuffleSwapMethod(arr) {
  return arr.forEach((num, index, arr) => {
    debugger;
    let random = randomNum(0, arr.length - 1);
    swap(arr, index, random);
  });
}

function inPlaceShuffle(arr) {
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    let random = randomNum(start, arr.length - 1);
    debugger;
    const element = arr.splice(random, 1)[0];
    arr.splice(start, 0, element);
    start++;
  }
}

//inclusive of both low and high
function randomNum(low, high) {
  return Math.floor(Math.random() * high - low + 1) + low;
}

const arr1 = [1, 2, 3, 4, 5, 6, 7];
inPlaceShuffle(arr1);
console.log(arr1);
