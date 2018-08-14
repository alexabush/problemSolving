const stockPrices = [10, 7, 5, 8, 11, 9];

function getMaxProfit(stockPrices) {
  let maxProfit = 0;
  let lowestPrice = stockPrices[0];
  for (let i = 1; i < stockPrices.length; i++) {
    let currentPrice = stockPrices[i];
    if (currentPrice > lowestPrice && currentPrice - lowestPrice > maxProfit) {
      maxProfit = currentPrice - lowestPrice;
    }
    if (currentPrice < lowestPrice) {
      lowestPrice = currentPrice;
    }
  }
  return maxProfit;
}

console.log(getMaxProfit(stockPrices));
// Returns 6 (buying for $5 and selling for $11)
