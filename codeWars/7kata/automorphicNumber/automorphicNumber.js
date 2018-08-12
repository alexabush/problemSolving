function automorphic(n) {
  let square = n ** 2;
  let numStr = n.toString();
  let squareStr = square.toString();
  if (numStr === squareStr.slice(squareStr.length - numStr.length))
    return 'Automorphic';
  return 'Not';
}

console.log(automorphic(25)); //'Automorphic');
console.log(automorphic(53)); //, 'Not!!');
