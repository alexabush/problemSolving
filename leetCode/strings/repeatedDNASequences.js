function findRepeatedDnaSequences(str) {
  let seen = new Set()
  let duplicates = new Set()
  for (let i = 10; i <= str.length; i++) {
    let slice = str.slice(i - 10, i);
    if (!seen.has(slice)) seen.add(slice)
    else {
      duplicates.add(slice)
    }
  }
  return Array.from(duplicates)
};

let str1 = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
console.log(findRepeatedDnaSequences(str1)) 
let str2 = "AAAAAAAAAAA"
console.log(findRepeatedDnaSequences(str2))