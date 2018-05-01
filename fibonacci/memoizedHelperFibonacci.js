function fib(n) {
  const memo = [0, 1];
  helper(n, memo);
  return memo[n];

  function helper(n, memo) {
    if (memo[n] !== undefined) {
      return memo[n];
    }
    return (memo[n] = helper(n - 1, memo) + helper(n - 2, memo));
  }
}

console.log(fib(10));
