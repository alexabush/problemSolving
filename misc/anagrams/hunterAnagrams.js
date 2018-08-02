function anagrams(a, b) {
  let freqs = {};
  a.split('').forEach(char => (freqs[char] = (freqs[char] || 0) + 1)); // increment
  b.split('').forEach(char => (freqs[char] = (freqs[char] || 0) - 1)); // decrement
  console.log(
    Object.keys(freqs).reduce((sum, key) => sum + Math.abs(freqs[key]), 0)
  );
}

const apple = 'apple';
const pear = 'pear';
const reap = 'reap';
const leap = 'leap';

// console.log(anagrams(pear, pear)); // 0
// console.log(anagrams(pear, reap)); // 0
console.log(anagrams(apple, leap)); // 1
console.log(anagrams(apple, pear)); // 3
