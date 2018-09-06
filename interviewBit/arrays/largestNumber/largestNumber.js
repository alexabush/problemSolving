function largestNumber(ints) {
  let sorted = ints.sort().reverse();
  let streakStart = 0;
  let streakEnd = 0;
  let isStreak = false;
  for (var i = 1; i < sorted.length; i++) {
    if (
      sorted[i].toString().slice(0, 1) === sorted[i - 1].toString().slice(0, 1)
    ) {
      if (!isStreak) {
        streakStart = i - 1;
      }
      streakEnd = i;
      isStreak = true;
    } else {
      if (streakEnd - streakStart > 1) {
        for (var j = streakStart; j <= streakEnd; j++) {
          for (var k = j + 1; k < streakEnd - j - streakStart; k++) {
            var temp;
            if (sorted[j].toString()[1] < sorted[k].toString()[1]) {
              temp = sorted[k];
              sorted[k] = sorted[j];
              sorted[j] = temp;
            } else if (
              typeof sorted[j].toString()[1] === 'undefined' ||
              sorted[k].toString()[1] < sorted[j].toString[0]
            ) {
              temp = sorted[k];
              sorted[k] = sorted[j];
              sorted[j] = temp;
            }
          }
        }
      }
      isStreak = false;
    }
  }
  // return sorted.join('');
  return sorted;
}

// const arr1 = [3, 30, 34, 5, 9];
const arr1 = [3, 30, 34, 4, 1];

console.log(largestNumber(arr1));
