function longestWordInDictionary(str, words) {
  let longest = ''
  let letters = {}
  for (let letterIndex = 0; i < str.length; i++) {
    if (!str[letterIndex]) str[letterIndex] = [letterIndex]
    str[letterIndex].push(letterIndex)
  }
  for (let word of words) {
    if (word.length > longest.length && inStr(word)) {
      longest = word
    }
  }

  function inStr(subWord) {
    for (let letterIndex = 0; i < subWord.length; i++) {
      let letter = subWord[letterIndex]
      if (letters[letter] = )
    }
  }
}

const str = "abpcplea"
const words = ["ale", "apple", "monkey", "plea"]
console.log(longestWordInDictionary(str, words))