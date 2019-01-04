function longestSubstring(str) {
  let maxLen = 0;
  let currentLen = 0;
  let start = 0;
  let seen = {};
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (seen[letter] >= 0 && seen[letter] >= start) {
      start = seen[letter] + 1;
      currentLen = i - start;
    }
    seen[letter] = i;
    currentLen++;
    if (maxLen < currentLen) maxLen = currentLen;
  }
  return maxLen;
}

let str1 = 'abcabcbb';
let str2 = 'bbbbb';
let str3 = 'pwwkew';
console.log(longestSubstring(str1)); // 3
console.log(longestSubstring(str2)); //1
console.log(longestSubstring(str3)); //3
let str4 = 'aab';
console.log(longestSubstring(str4)); //2
let str5 = 'dvdf';
console.log(longestSubstring(str5)); // 3

let str6 = 'abba'; // 2
console.log(longestSubstring(str6));
