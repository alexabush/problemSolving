/*
given an array of ints
every element will appear twice except for one

find that one with in linear time

BONUS: try to implement in constant space

So linear time means we can only make one pass through

Constant space means we can use a pointer or two but can't build up a data structure



*/

function singleNumber(arr) {
  obj = {};
  for (let num of arr) {
    if (obj[num]) {
      obj[num] = 0;
    } else {
      obj[num] = 1;
    }
  }
  for (let num in obj) {
    if (obj[num] === 1) return num;
  }
}

/*
every element appears three times, except for an element which only appears twice

Probably do the same thing?
*/

const test = [2, 2, 3, 2];

function singleNumberII(arr) {
  obj = {};
  for (let num of arr) {
    if (!obj[num]) obj[num] = 1;
    else {
      obj[num] +=1
    }
  }
  for (let num in obj) {
    if (obj[num] === 1) return num;
  }
}

console.log(singleNumberII(test));
