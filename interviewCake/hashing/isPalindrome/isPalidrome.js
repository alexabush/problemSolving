function hasPalindromePermutation(theString) {
  let freqCounter = new Map();
  for (let letter of theString) {
    if (freqCounter.has(letter)) {
      freqCounter.set(letter, freqCounter.get(letter) + 1);
    } else {
      freqCounter.set(letter, 1);
    }
  }
  let usedSingle = false;
  let failed = false;
  freqCounter.forEach((value, key) => {
    if (value % 2 === 1 && !usedSingle) {
      usedSingle = true;
    } else if (value % 2 === 1 && usedSingle) {
      failed = true;
    }
  });
  if (failed) return false;
  return true;
}

// Tests
console.log(hasPalindromePermutation('aabcbcd'));
// true);

console.log(hasPalindromePermutation('aabccbdd')); // true);

console.log(hasPalindromePermutation('aabcd')); //false);

console.log(hasPalindromePermutation('aabbcd')); //false);

console.log(hasPalindromePermutation('')); // true);

console.log(hasPalindromePermutation('a')); // true);
