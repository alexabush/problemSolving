function fibonacci(n, memo = [0, 1]) {
  if (memo[n] !== undefined) return memo[n];
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

const nums = Array.from({ length: 20 }, (num, index) => {
  return index;
});
console.log('nums: ', nums);
nums.map(ru2nFib);

function runFib(endNumber) {
  console.log(fibonacci(endNumber));
}
