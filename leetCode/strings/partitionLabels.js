function partitionLabels(str) {
  let letters = {};
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (!letters[letter]) letters[letter] = [i];
    else letters[letter].push(i);
  }
  let ranges = Object.entries(letters).map((data, i, obj) => {
    let letter = data[0],
      indexes = data[1];
    if (indexes.length > 2) {
      return [indexes[0], indexes[indexes.length - 1]];
    }
    return indexes;
  });
  let sortedRanges = ranges.sort((a, b) => {
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
    let start1 = current[0],
      end1 = current[1] || current[0];
    let start2 = range[0],
      end2 = range[1] || range[0];
    if (start1 < start2 && end1 > end2) continue
    else if (start2 < start1 && end2 > end1) {
      partitions[partitions.length - 1] = range
    } else if (start1 < start2 && start2 > end1) {
      partitions.push(range)
    } else if (start1 < start2 && end2 > end1) {
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

let str1 = 'firelight is amazing'; // 2
let str2 = "ababcbacadefegdehijhklij" // [9, 7, 8]
console.log(partitionLabels(str2))
