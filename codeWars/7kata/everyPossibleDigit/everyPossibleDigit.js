//my solution
function everyPossibleDigit(num) {
  let digits = num
    .toString()
    .split('')
    .map(num => parseInt(num));
  let results = [];
  for (let i = 0; i < digits.length - 1; i++) {
    for (let j = i + 1; j < digits.length; j++) {
      const sum = digits[i] + digits[j];
      results.push(sum);
    }
  }
  return results;
}

//codewars solution
function digits(n) {
  return [...('' + n)].reduce(
    (o, x, i, a) =>
      o.concat(a.slice(i + 1).reduce((p, c) => p.concat(+x + +c), [])),
    []
  );
}

console.log(everyPossibleDigit(81596));
