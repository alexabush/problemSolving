function reverse (x) {
  let str = x.toString()
  let newNum = 0
  for (let i = str.length - 1; i >= 0; i--) {
    debugger
    if (str[i] === '-') {
      newNum /= -10
      break;
    }
    newNum += (str[i] * Math.pow(10, i))
  }
  return newNum
};
let num = -123
console.log(reverse(num))