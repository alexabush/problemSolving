function letterCasePermuation(str) {
  let paths = [];
  helper('', 0);
  return paths;

  function helper(subStr, index) {
    if (index === str.length) {
      paths.push(subStr);
      return;
    }
    if (!isNaN(str[index])) {
      helper(subStr + str[index], index + 1);
    } else {
      let flippedCase = /[a-z]/.test(str[index]) ? str[index].toUpperCase() : str[index].toLowerCase();
      helper(subStr + str[index], index + 1);
      helper(subStr + flippedCase, index + 1);
    }
  }
  return paths;
}
let str = 'a1b2';
console.log(letterCasePermuation(str));
