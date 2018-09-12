function listMax(arrSize, inputs) {
  let list = new Array(arrSize)
    .join('0')
    .split('')
    .map(parseFloat);
  let max = 0;
  for (let input of inputs) {
    let [start, end, val] = input;
    for (let i = start - 1; i < end; i++) {
      list[i] += val;
      if (list[i] > max) max = list[i];
    }
  }
  return max;
}

let sample = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
console.log(listMax(5, sample));

// let sample2 = [[1, 2, 10], [2, 4, 5], [3, 5, 12]];
// console.log(listMax(sample2));
