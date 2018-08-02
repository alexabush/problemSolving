function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const nums = Array.from({ length: 20 }, (num, index) => {
  return index;
});
console.log('nums: ', nums);
nums.map(runFib);

function runFib(endNumber) {
  console.log(fibonacci(endNumber));
}
