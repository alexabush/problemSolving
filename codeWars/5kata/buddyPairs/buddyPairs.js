function buddy(start, limit) {
  const pair = [];
  for (let i = start; i <= limit; i++) {
    let secondNum = sumDivisors(start) - 1;
    if (start === sumDivisors(secondNum)) {
      pair.push(i, secondNum);
      return pair;
    }
  }
  return 'Nothing';

  function sumDivisors(num) {
    let divisors = [];
    for (let i = 1; i < Math.floor(num / 2); i++) {
      if (num % i === 0) divisors.push(num);
    }
    return divisors.reduce((a, b) => a + b);
  }
}

console.log(buddy(10, 50)); // [48, 75]);
