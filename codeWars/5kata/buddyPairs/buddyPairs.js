function buddy(start, limit) {
  const pair = [];
  for (let i = start; i <= limit; i++) {
    if (i === 48) {
      debugger;
    }
    let secondNum = sumDivisors(i) - 1;
    if (i + 1 === sumDivisors(secondNum)) {
      pair.push(i, secondNum);
      return pair;
    }
  }
  return 'Nothing';

  function sumDivisors(num) {
    let divisors = [];
    for (let i = 1; i <= Math.floor(num / 2); i++) {
      if (num % i === 0) divisors.push(i);
    }
    if (divisors.length < 1) return 0;
    return divisors.reduce((a, b) => a + b);
  }
}

console.log(buddy(10, 50)); // [48, 75]);
console.log(buddy(381, 4318)); // [1050, 1925]); // [48, 75]);
