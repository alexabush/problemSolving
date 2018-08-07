function insertMissingLetters(str) {
  let newStr = '';
  const alphabet = getAlphabet();
  let seenLetters = new Set();

  for (let letter of str) {
    if (seenLetters.has(letter)) {
      newStr += letter;
      continue;
    }
    newStr +=
      letter +
      alphabet
        .slice(alphabet.indexOf(letter) + 1)
        .filter(letter => {
          return !str.includes(letter);
        })
        .join('')
        .toUpperCase();
    seenLetters.add(letter);
  }
  return newStr;
}

//this is from stack overflow
function getAlphabet() {
  let a = [];
  for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    a.push(String.fromCharCode(i));
  }
  return a;
}

console.log(insertMissingLetters('holly'));
