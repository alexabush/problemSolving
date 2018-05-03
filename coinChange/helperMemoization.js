const coins = [1, 5, 10, 25];

// tabulation
function coinChange(coins, amount) {
  const memo = [1];
  helper(amount);
  return memo[amount];

  function helper(n) {
    if (n < 1) {
      return memo[n];
    }
    if (memo[n]) {
      return memo[n];
    }
    // const firstVal = helper(n - 1);
    // const secondVal = helper(n - 2);
    // const thirdVal = helper(n - 3);
    // memo[n] = firstVal + secondVal + thirdVal;
    memo[memo.length] = helper(memo[n]) + helper(memo[-coins[n]]);

    //     let lastCoin = denominations[numCoins - 1];
    //     memo[numCoins][amount] = (
    //       coinChange(denominations, amount - lastCoin, memo) +
    //       coinChange(denominations.slice(0, numCoins - 1), amount, memo)
    //     )
  }
}

console.log(coinChange(coins, 1)); // 1
console.log(coinChange(coins, 2)); // 1
console.log(coinChange(coins, 5)); // 2
console.log(coinChange(coins, 10)); // 4
console.log(coinChange(coins, 25)); // 13
console.log(coinChange(coins, 45)); // 39
console.log(coinChange(coins, 100)); // 242
console.log(coinChange(coins, 145)); // 622
console.log(coinChange(coins, 1451)); // 425663
console.log(coinChange(coins, 14511)); // 409222339
