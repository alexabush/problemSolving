function solution(T) {
  // debugger;
  let freq = {};
  for (let candy of T) {
    if (!freq.hasOwnProperty(candy)) {
      freq[candy] = 1;
    } else {
      freq[candy] += 1;
    }
  }
  let entries = Object.entries(freq);
  entries.sort((index1, index2) => {
    return index1 < index2;
  });
  return entries;
}

let candies1 = [3, 4, 7, 7, 6, 6];
console.log(solution(candies1));
