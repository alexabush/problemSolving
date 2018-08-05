var numberFormat = function(number) {
  const numStr = number.toString();
  let newStr = '';
  let counter = 0;
  for (let i = numStr.length - 1; i >= 0; i--) {
    let digit = numStr[i];
    if (counter === 3) {
      newStr = ',' + newStr;
      newStr = digit + newStr;
      counter = 1;
    } else {
      newStr = digit + newStr;
      counter++;
    }
  }
  return newStr;
};

console.log(numberFormat(100000)); //'100,000');
console.log(numberFormat(5678545)); //, '5,678,545');
