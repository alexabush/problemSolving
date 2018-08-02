function charToNum(char) {
  return char.charCodeAt(0) - 97;
}

function encode(str, key) {
  let code = [];
  for (let char of str) {
    const num = charToNum(char);
    code.push(num);
  }
  return code;
}
