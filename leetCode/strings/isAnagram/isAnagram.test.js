let { isAnagram } = require('./isAnagram');

let str1 = 'anagram', str2 = 'nagaram'
let str3 = 'trap', str4 = 'rapt'
let str5 = 'rat', str6 = 'car'
let str7 = 'ab', str8 = 'a'

test('test if strings are anagrams', () => {
  expect(isAnagram(str1, str2)).toBe(true);
  expect(isAnagram(str3, str4)).toBe(true);
  expect(isAnagram(str5, str6)).toBe(false);
  expect(isAnagram(str7, str8)).toBe(false);
});
