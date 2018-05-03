// function coinChange(coins, n) {
// //   const table = Array.from({ length: n + 1 }, () => 0);
//   table[0] = 1;
//   for (let i = 0; i < coins.length; i++) {
//     for (let j = coins[i]; j < table.length; j++) {
//       table[j] = table[j] + table[j - coins[i]];
//     }
//   }
//   return table[n];
// }

const coins = [1, 5, 10, 25];

// tabulation
function coinChange(coins, amount) {
  const table = Array.from({ length: amount + 1 }, () => 0);
  table[0] = 1;
  for (let value of coins) {
    for (var index = value; index <= amount; index++) {
      table[index] += table[index - value];
    }
  }
  return table[amount];
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
