var firstUniqChar = function(s) {
  if (s.length < 1) return -1;
  let seen = {};
  for (let i = 0; i < s.length; i++) {
    if (typeof seen[s[i]] === 'undefined') seen[s[i]] = i;
    else seen[s[i]] = null;
  }
  if (Object.values(seen).every(val => val === null)) return -1
  return Math.min(...Object.values(seen).filter(val => val !== null))
};

s1 = 'leetcode';
// return 0.
console.log(firstUniqChar(s1));

(s2 = 'loveleetcode'),
  // return 2.
  console.log(firstUniqChar(s2));
