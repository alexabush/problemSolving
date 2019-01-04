function decodeString(str) {
  let newStr = '';
  let index = 0;
  let num = 0;
  let subStr = '';
  let char = str[index];
  let stack = [];
  while (index < str.length) {
    if (!isNaN(char)) {
      while (!isNaN(char)) {
        num += char;
        index++;
        char = str[index];
      }
      num = +num;
      continue;
    } else if (char === '[') {
      stack.push([subStr, num]);
      subStr = '';
      num = 0;
    } else if (char === ']' && stack.length > 1) {
      let [pStr, pNum] = stack.pop();
      stack[stack.length - 1][0] += multiplyStr(pStr, pNum);
    } else if (char === ']' && stack.length === 1) {
      let [pStr, pNum] = stack.pop();
      newStr += multiplyStr(pStr, pNum);
    } else if (char.match(/[a-z]/i) && stack.length) {
      stack[stack.length - 1][0] += char;
    } else if (char.match(/[a-z]/i) && !stack.length) {
      newStr += char;
    }
    index++;
    char = str[index];
  }
  return newStr;

  function multiplyStr(str, num) {
    let newStr = '';
    for (let i = 0; i < num; i++) {
      newStr += str;
    }
    return newStr;
  }
}

let str1 = console.log(decodeString('3[a]2[bc]')); //, return "aaabcbc".
let str2 = console.log(decodeString('3[a2[c]]')); //, return "accaccacc".
let str3 = console.log(decodeString('2[abc]3[cd]ef')); //, return "abcabccdcdcdef".
console.log(decodeString('100[leetcode]'));
//, return leetcode 100 times
