function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false
  let charCount = {};
  for (let char of str1) {
    charCount[char] ? charCount[char]++ : charCount[char] = 1
  }
  for (let char of str2) {
    if (charCount[char]) {
      charCount[char]--
    } else {
      return false
    }
  }
  return true;
}

module.exports = { isAnagram };
