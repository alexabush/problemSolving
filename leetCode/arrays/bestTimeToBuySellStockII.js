function maxProfit(prices) {
  let low = null
    high = null
    total = 0;
  for (let price of prices) {
    if (low === null) low = price;
    if (high === null && price < low) low = price;
    if (low !== null && high === null && price > low) high = price;
    if (high !== null && price > high) high = price;
    if (high !== null && price < high) {
      total += high - low;
      low = price;
      high = null;
    }
  }
  if (low !== null && high !== null) total += high - low;
  return total;
}

let nums1 = [7, 1, 5, 3, 6, 4]; //7
let nums2 = [1, 2, 3, 4, 5]; //4
let nums3 = [7, 6, 4, 3, 1]; //0

console.log(maxProfit(nums1));
console.log(maxProfit(nums2));
console.log(maxProfit(nums3));
