function highestProductOf3(arrayOfInts) {
  if (arrayOfInts.length < 3) {
    throw Error();
  }
  let positiveNums = Array.of(0, 0, 0);
  let negativeNums = [0, 0];
  let leastNegative = [
    Number.NEGATIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
    Number.NEGATIVE_INFINITY
  ];
  for (let num of arrayOfInts) {
    let minPos = Math.min(...positiveNums);
    let minPosIndex = positiveNums.indexOf(minPos);
    if (num > minPos) positiveNums[minPosIndex] = num;

    let maxNeg = Math.max(...negativeNums);
    let maxNegIndex = negativeNums.indexOf(maxNeg);
    if (num < maxNeg) negativeNums[maxNegIndex] = num;

    if (num < 0 && num > leastNegative[0]) {
      leastNegative[0] = num;
      leastNegative = numSort(leastNegative);
    }
  }

  if (getYield(...positiveNums) === 0) {
    return getYield(...leastNegative);
  }

  let sortedPos = numSort(positiveNums);
  let posYield = getYield(sortedPos[0], sortedPos[1]);
  let negYield = getYield(...negativeNums);
  if (posYield > negYield) {
    return getYield(...sortedPos);
  } else {
    return getYield(negYield, sortedPos[2]);
  }
}

function getYield(...nums) {
  return nums.reduce((a, b) => a * b);
}

function numSort(nums) {
  return nums.sort((a, b) => a - b > 0);
}

// console.log(highestProductOf3([6, 1, 3, 5, 7, 8, 2]));
// console.log(highestProductOf3([-10, 1, 3, 2, -10]));
console.log(highestProductOf3([-5, -1, -3, -2]));
// -6;
