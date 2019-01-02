function customSortString(s, t) {
  let result = ''
  for (let char of s) {
    if (t.includes(char)) {
      let charCount = count(t, char)
      result = result + multiplyLetters(char, charCount)
      t = removeChar(t, char)
    }
  }
  return result + t
}

function removeChar(str, char) {
  let newStr = ''
  for (let letter of str) {
    if (letter !== char) newStr += letter
  }
  return newStr
}

function count(str, char) {
  let count = 0
  for (let letter of str) {
    if (letter === char) count++
  }
  return count
}

function multiplyLetters(letter, num) {
  let str = ''
  for (let i = 0; i < num; i++) {
    str += letter
  }
  return str
}

let s = "cba"
let t = "abcd"

console.log(customSortString(s,t))