//My solution
function expressionMatter(a, b, c) {
  let highestNum;
  let testNum;
  highestNum = sum(a, b) + c;
  testNum = sum(a, b) * c;
  test();
  testNum = a + sum(b, c);
  test();
  testNum = a * sum(b, c);
  test();
  testNum = mul(a, b) + c;
  test();
  testNum = a + mul(b, c);
  test();
  testNum = a * mul(b, c);
  test();
  return highestNum;

  function test() {
    if (testNum > highestNum) highestNum = testNum;
  }
}

function sum(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

//improved solution
//use Math.max to extract largest number from all possibilities
function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + b * c,
    a * b + c
  );
}
