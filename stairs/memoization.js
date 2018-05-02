// memoization solution
function stairs(n, memo = [0, 1, 2, 4]) {
  if (n < 4) return memo[n];
  if (memo[n]) return memo[n];
  memo[n] = stairs(n - 1, memo) + stairs(n - 2, memo) + stairs(n - 3, memo);
  return memo[n];
}

console.log(stairs(1)); // 1
console.log(stairs(2)); // 2
console.log(stairs(3)); // 4
console.log(stairs(5)); // 13
console.log(stairs(7)); // 44
console.log(stairs(10)); // 274
