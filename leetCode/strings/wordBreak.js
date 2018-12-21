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

function wordBreak(str, wordDict) {
  debugger
  let shortenedWords = [];
  for (let word of wordDict) {
    for (let sw of shortenedWords) {
      if (sw.includes(word)) return true;
    }
    let shortenedWord = str.replace(word, '');
    shortenedWords.push(shortenedWord);
  }
  return false;
}

// console.log(wordBreak(s, wordDict));
console.log(wordBreak(s2, wordDict2));
