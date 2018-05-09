var palindromeChainLength = function(n) {
  let count = 0;
  let currentN = +n;
  while (!isPalindrome(currentN)) {
    currentN = reverse(currentN) + currentN;
    count++;
  }
  return count;
};

function isPalindrome(num) {
  return num === reverse(num);
}

function reverse(num) {
  return +num
    .toString()
    .split('')
    .reverse()
    .join('');
}

console.log(palindromeChainLength('4884')); // 0
console.log(palindromeChainLength('87')); //4
