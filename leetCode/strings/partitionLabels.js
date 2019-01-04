function partitionLabels(str) {
  let letters = {};
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (!letters[letter]) letters[letter] = [i];
    else {
      letters[letter][1] = i;
    }
  }
  let sortedRanges = Object.values(letters).sort((a, b) => {
    if (a[0] <= b[0]) {
      return -1;
    }
    return 1;
  });
  let partitions = [];
  for (let range of sortedRanges) {
    if (partitions.length < 1) {
      partitions.push(range);
      continue
    }
    let current = partitions[partitions.length - 1];
    let end1 = current[1] || current[0];
    let start2 = range[0],
      end2 = range[1] || range[0];
    if (start2 > end1) partitions.push(range)
    else if (end2 > end1) {
      partitions[partitions.length - 1][1] = end2
    }
  }
  return partitions.map(par => {
    if (par.length > 1) {
      return par[1] - par[0] + 1
    }
    return 1
  })
}

let str1 = 'firelight is amazing'; // [1,19]
let str2 = "ababcbacadefegdehijhklij" // [9, 7, 8]
console.log(partitionLabels(str1))
console.log(partitionLabels(str2))
