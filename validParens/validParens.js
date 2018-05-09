function validParens(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;
    else if (str[i] === '(') stack.push('(');
    else if (str[i] === '{') stack.push('{');
    else if (str[i] === '[') stack.push('[');
    else if (str[i] === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
    } else if (str[i] === '}' && stack[stack.length - 1] === '{') {
      stack.pop();
    } else if (str[i] === ']' && stack[stack.length - 1] === '[') {
      stack.pop();
    } else return false;
  }
  if (stack.length > 0) return false;
  return true;
}

// console.log(validParens('')); // true
// console.log(validParens('()')); // true
// console.log(validParens('()[]{}')); // true

console.log(validParens('(]')); // false
console.log(validParens('([)]')); // false
console.log(validParens('{[]}')); // true
