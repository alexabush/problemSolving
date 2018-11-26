/*
Assume standard input has been converted into a JS Array of the Number data type
*/

function maxRangeSum(prices) {
  let allTimeHighest = 0;
  let fast = 0;
  let currentHighest = 0;
  for (let i = 0; i < prices.length; i++) {
    if (currentHighest <= 0) {
      currentHighest = prices[fast];
    } else {
      currentHighest += prices[fast];
    }
    fast++;

    if (allTimeHighest < currentHighest) {
      allTimeHighest = currentHighest;
    }
  }
  return allTimeHighest;
}

const nums1 = [7, -3, -10, 4, 2, 8, -2, 4, -5, -2];
console.log(maxRangeSum(nums1));
