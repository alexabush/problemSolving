function ransomNote(magazine, ransom) {
  let lookup = magazine.reduce(function(acc, current) {
    acc[current] = (acc[current] || 0) + 1;
    return acc;
  }, {});
  for (let word of ransom) {
    if (!lookup[word] || lookup[word] <= 0) return 'No';
    lookup[word] = lookup[word] - 1;
  }
  return 'Yes';
}
