function divisionSolution(intArray) {
  if (intArray.length < 2) throw Error();
  let numZero = 0;
  const totalProduct = intArray.reduce((acc, num) => {
    if (num === 0) {
      numZero += 1;
      return acc;
    } else {
      return acc * num;
    }
  }, 1);
  return intArray.map(num => {
    if (numZero === 1 && num === 0) {
      return totalProduct;
    } else if (numZero > 0) {
      return 0;
    } else {
      return totalProduct / num;
    }
  });
}

function getProductsOfAllIntsExceptAtIndex(intArray) {
  if (intArray.length < 2) throw Error();
  let zeroCount = 0;
  let result = intArray.map((currentNum, idx, arr) => {
    if (currentNum === 0) zeroCount++;
    return arr.reduce((acc, num) => {
      if (num === currentNum) {
        return acc;
      } else {
        return acc * num;
      }
    }, 1);
  });
  if (zeroCount < 2) {
    return result;
  } else {
    return new Array(result.length).fill(0);
  }
}

console.log(getProductsOfAllIntsExceptAtIndex([6, 2, 0, 3]));
// expected = [0, 0, 36, 0];
console.log(getProductsOfAllIntsExceptAtIndex([4, 0, 9, 1, 0]));
// [0, 0, 0, 0, 0];
