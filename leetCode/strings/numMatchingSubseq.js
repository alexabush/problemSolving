function numMatchingSubseq(str, words) {
  let count = 0;
  for (let word of words) {
    let wP = 0,
    sP = 0;
    debugger
    while (sP <= str.length) {
      if (wP === word.length) {
        count++;
        break;
      }
      if (str[sP] === word[wP]) {
        sP++;
        wP++;
      } else if (str[sP] !== word[wP]) {
        sP++;
      }
    }
  }
  return count
}

let S = 'abcde';
// let words = ['ace'];
let words = ['a', 'bb', 'acd', 'ace'];
console.log(numMatchingSubseq(S, words))