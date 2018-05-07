function findTriplets(arr) {
  if (arr.length < 3) return 0;
  let total = 0;
  const sArr = [...arr].sort((a, b) => a - b)

  for (let p1 = 0; p1 < sArr.length - 2; p1++) {
    let p2 = p1 + 1;
    let p3 = sArr.length - 1;
    let currentSum = sArr[p1] + sArr[p2] + sArr[p3];
    while (p2 < p3) {
      if (currentSum === 0) {
        total += 1;
        currentSum -= sArr[p2];
        p2 += 1;
        currentSum += sArr[p2];
      }
      if (currentSum > 0) {
        currentSum -= sArr[p3];
        p3 -= 1;
        currentSum += sArr[p3];
      }
      if (currentSum < 0) {
        currentSum -= sArr[p2];
        p2 += 1;
        currentSum += sArr[p2];
      }
    }
  }

  return total;
}

// console.log(findTriplets([-1, 0, 1])) // 1 
// console.log(findTriplets([5, -2, 3, -1])) // 1 
console.log(findTriplets([0, -1, 2, -3, 1])); // 2 (0,-1,1 and -3,2,1)
console.log(findTriplets([1, -2, 0, 5])); // 0
console.log(findTriplets([0, 4, 2, 7, 5, 3, -3, -2, -8, -12])); // 5

/*
Time Complexity - O(n ^ 2)
*/