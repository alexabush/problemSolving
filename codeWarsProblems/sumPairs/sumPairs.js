var sum_pairs = function(ints, s) {
  let seen = new Set();
  for (let i = 0; i < ints.length; i++) {
    if (seen.has(s - ints[i])) return [s - ints[i], ints[i]];
    seen.add(ints[i]);
  }
  return undefined;
};
console.log(sum_pairs([11, 3, 7, 5], 10)); // [3,7]
