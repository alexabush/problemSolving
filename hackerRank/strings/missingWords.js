function missingWords(s, t) {
  let missing = []
  let p1 = 0
  let p2 = 0
  let words1 = s.split(' ')
  let words2 = t.split(' ')
  while (p1 < words1.length) {
    if (words1[p1] === words2[p2]) {
      p1++
      p2++
    } else {
      missing.push(words1[p1])
      p1++
    }
  }
  return missing
}

let s = 'I am using HackerRank to improve programming';
let t = 'am HackerRank to improve';
console.log(missingWords(s, t))