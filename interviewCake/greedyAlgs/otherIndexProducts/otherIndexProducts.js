function getProductsOfAllIntsExceptAtIndex(intArray) {
  let numZero = 0;
  const totalProduct = intArray.reduce((acc, num) => {
    if (num === 0) {
      numZero++;
      return num;
    } else {
      return acc * num;
    }
  }, 1);
  return intArray.map(num => {
    if (numZero > 1) return 0;
    if (numZero === 1 && num === 0) {
      return totalProduct;
    } else {
      return totalProduct / num;
    }
  });
}
