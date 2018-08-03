function encode(str, key) {
  let code = [];
  for (let char of str) {
    const num = char.charCodeAt(0) - 96;
    code.push(num);
  }
  const keyDigits = key
    .toString()
    .split('')
    .map(digitStr => parseInt(digitStr));
  let counter = 0;

  for (let i = 0; i < code.length; i++) {
    if (counter === keyDigits.length) counter = 0;
    code[i] += keyDigits[counter];
    counter++;
  }

  return code;
}

console.log(encode('scout', 1939));
//[ 20, 12, 18, 30, 21]
