function maxSetMine(arr) {
  var subArrays = [];
  var subArrayPointer = 0;
  var isNeg = true;
  for (var i = 0; i < arr.length; i++) {
    if (typeof subArrays[subArrayPointer] === 'undefined') {
      subArrays[subArrayPointer] = [];
    }
    if (arr[i] >= 0) {
      subArrays[subArrayPointer].push(arr[i]);
      isNeg = false;
    } else {
      if (!isNeg) {
        subArrayPointer++;
      }
      isNeg = true;
    }
  }
  subArrays = subArrays.filter(subArray => {
    return subArray.length > 0;
  });
  if (!subArrays.length) {
    return [];
  }
  var sums = subArrays.map(function(subArr) {
    return subArr.reduce(function(a, b) {
      return a + b;
    });
  });
  var max = sums[0];
  for (i = 0; i < sums.length; i++) {
    if (sums[i] > max) {
      max = sums[i];
    }
  }
  var maxIndex = sums.indexOf(max);
  return subArrays[maxIndex];
}

function maxSet(arr) {
  var maxSum = -1,
    maxStart = -1,
    maxEnd = -1,
    currentSum = -1,
    currentStart = -1,
    currentEnd = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      currentSum += arr[i];
      if (currentStart < 0) {
        currentStart = i;
      }
      currentEnd = i;
      if (currentSum > maxSum) {
        maxSum = currentSum;
        maxStart = currentStart;
        maxEnd = currentEnd;
      }
    } else {
      currentStart = -1;
      currentEnd = -1;
      currentSum = 0;
    }
  }
  if (maxEnd > 0) {
    return arr.slice(maxStart, maxEnd + 1);
  } else {
    return [];
  }
}

const arr1 = [1, 2, 5, -7, 2, 3];
const negative1s = [-1, -1, -1, -1, -1];
const largeNums = [1967513926, 1540383426, -1303455736, -521595368];
const zeroNeg = [0, 0, -1, 0];
// console.log(maxSet(arr1));
// [1,2,5]
// console.log(maxSet(negative1s));
// []
// console.log(maxSet(largeNums));
// [1967513926, 1540383426]
console.log(maxSet(zeroNeg));
// [0,0]
