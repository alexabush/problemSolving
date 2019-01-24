function reverseWords(chars) {
  let start = 0, end = chars.length - 1
  reverseChars(chars, start, end)
  let wordStart = null
  for (let i = 0; i < chars.length; i++) {
    if (chars[i+1] === ' ' || i === chars.length - 1) {
      reverseChars(chars,wordStart,i)
      wordStart = null
    } else if (wordStart === null && chars[i] !== ' ') wordStart = i
  }

  function reverseChars(arr, p1, p2) {
    while (p1 < p2) {
      swap(arr, p1, p2)
      p1++
      p2--
    }
  }

  function swap(arr, p1, p2) {
    let temp = arr[p1]
    arr[p1] = arr[p2]
    arr[p2] = temp
  }
}

const message = ['c', 'a', 'k', 'e', ' ',
  'p', 'o', 'u', 'n', 'd', ' ',
  's', 't', 'e', 'a', 'l'];

reverseWords(message);

console.log(message.join(''));