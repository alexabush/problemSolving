//tabulation solution
function stairs(n) {
  const arr = [0, 1, 2, 4];
  if (n < arr.length) return arr[n];
  for (let i = arr.length; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  }
  return arr[n];
}

console.log(stairs(1)); // 1
console.log(stairs(2)); // 2
console.log(stairs(3)); // 4
console.log(stairs(5)); // 13
console.log(stairs(7)); // 44
console.log(stairs(10)); // 274
