// memoization solution
// function stairs(n, memo = [0, 1, 2, 4]) {
//   if (n < 4) return memo[n];
//   if (memo[n]) return memo[n];
//   memo[n] = stairs(n - 1, memo) + stairs(n - 2, memo) + stairs(n - 3, memo);
//   return memo[n];
// }

function stairs(n) {
  const memo = [0, 1, 2, 4];
  if (n < 4) return memo[n];
  helper(n);
  return memo[n];

  function helper(n) {
    if (memo[n]) return memo[n];
    memo[n] = helper(n - 1) + helper(n - 2) + helper(n - 3);
    return memo[n];
  }
}

console.log(stairs(1)); // 1
console.log(stairs(2)); // 2
console.log(stairs(3)); // 4
console.log(stairs(4)); // 7
console.log(stairs(5)); // 13
console.log(stairs(7)); // 44
console.log(stairs(10)); // 274
console.log(stairs(20)); // 121415
console.log(stairs(30)); // 53798080
