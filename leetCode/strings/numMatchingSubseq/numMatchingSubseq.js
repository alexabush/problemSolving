console.log('in numMatchingSubseq.js');

// n2 solution
function numMatchingSubseqn2(str, words) {
  let count = 0;
  for (let word of words) {
    let wP = 0,
      sP = 0;
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
  return count;
}

function numMatchingSubseq(str, words) {
  let count = 0;
  let letters = {};
  for (let word of words) {
    if (!letters[word[0]]) letters[word[0]] = [word];
    else letters[word[0]].push(word);
  }
  for (let char of str) {
    if (!letters[char]) continue
    let newLetterArr = [];
    for (let word of letters[char]) {
      if (word.length < 2) {
        count++;
        continue;
      }
      let subStr = word.slice(1);
      if (!letters[subStr[0]]) {
        letters[subStr[0]] = [subStr];
      } else if (char === subStr[0]) {
        newLetterArr.push(subStr);
      } else {
        letters[subStr[0]].push(subStr);
      }
    }
    letters[char] = newLetterArr;
  }
  return count;
}

// let arr = ['hh', 'h1', 'h', 'hi', 'ih', 'hi'];
// console.log(numMatchingSubseq('hihihihi', arr));
// let arr2 = ['a', 'bb', 'acd', 'ace'];
// console.log(numMatchingSubseq('abcde', arr2));
let arr3 = ['ahjpjau', 'ja', 'ahbwzgqnuk', 'tnmlanowax'];
console.log(numMatchingSubseq('dsahjpjauf', arr3));

module.exports.numMatchingSubseq = numMatchingSubseq;
