/*
  Given a non-empty string and a dictionary containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words? HUH

  so we get a string and a dictionary.
  The dictionary is an array of words

  we want to see if the string can be broken up to make a dictionary word.

  So we'll return a boolean

  so we'll want to use String.contains a lot I imagine

  there CANNOT be any disgarded letters.
  So applesauce cannot be broken into 'apples' 'a'

  we want to iterate over wordDict and build up a hashmap of words



*/
let s = 'applepenapple',
  wordDict = ['apple', 'pen'];
let s2 = 'catsandog'
let wordDict2 = ['cats', 'dog', 'sand', 'and', 'cat'];
let s3 = 'leetcode'
let wordDict3 = ['leet', 'code']
let s4 = 'pineapple'
let wordDict4 = ['pin', 'pine', 'apple']
let s5 = "applepenapple", wordDict5 = ["apple", "pen"]

// function wordBreak(str, wordDict) {
//   let words = [str]
//   for (let word of wordDict) {
//     while (str.includes(word)) {
//       str = str.replace(word, '');
//     }
//   }
//   if (str.length < 1) return true
//   return false;
// }

const wordBreak = function (s, wordDict) {
  const checked = new Set()
  const queue = [``]
  while (queue.length > 0) {
    const base = queue.shift()
    for (const possibleNextWord of wordDict) {
      const possibleStr = base + possibleNextWord
      if (possibleStr === s) return true
      if (s.indexOf(possibleStr) === 0 && !checked.has(possibleStr)) {
        checked.add(possibleStr)
        queue.push(possibleStr)
      }
    }
  }
  return false
}

// console.log(wordBreak(s, wordDict));
// console.log(wordBreak(s2, wordDict2));
// console.log(wordBreak(s3, wordDict3));
console.log(wordBreak(s4, wordDict4));
console.log(wordBreak(s5, wordDict5));
