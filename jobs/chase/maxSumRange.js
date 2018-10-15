let prices1 = [7, -3, -10, 4, 2, 8, -2, 4, -5, -2];
let prices = [10, 7, -3, -10, 4, 2, 8, -2, 4, -5, -6];
/*
Input consists of integeres on a line separated by spaces
Input contains N, the number of days, followed by N integers, which indicate the gain loss
for each test case, log the maximum possible gain over the period
if no gain possible, print 0
*/
function getMaxSum(prices) {
  let maxSum = 0;
  let currentTotal = 0;
  for (let price of prices) {
    if (price > 0) currentTotal += price;
    else {
      currentTotal = 0;
    }
    if (maxSum < currentTotal) maxSum = currentTotal;
  }
  return maxSum;
}

console.log(getMaxSum(prices1));
