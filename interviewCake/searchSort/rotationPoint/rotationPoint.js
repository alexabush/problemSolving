function findRotationPoint(words) {
  let firstWord = words[0];
  let low = 0;
  let high = words.length - 1;
  let mid = calculateMid(low, high);
  while (low <= high) {
    if (words[mid] < words[mid - 1]) {
      return mid;
    } else if (words[mid] < firstWord) {
      high = mid - 1;
      mid = calculateMid(low, high);
    } else if (words[mid] >= firstWord) {
      low = mid + 1;
      mid = calculateMid(low, high);
    }
  }
  return -1;

  function calculateMid(low, high) {
    return Math.floor((high - low) / 2) + low;
  }
}

// Tests
console.log(findRotationPoint(['cape', 'cake']));
//let expected = 1;

console.log(findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']));
//expected = 4;

console.log(
  findRotationPoint([
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage'
  ])
);
// 5
