function maxInSlidingWindow(ints, window) {
  let start = 0;
  let end = window - 1;
  while (end < ints.length) {
    let max = Math.max(...ints.slice(start, end + 1));
    console.log(max);
    start++;
    end++;
  }
}

const arr1 = [-4, 2, -5, 3, 6];
const arr2 = [-4, 2, -5, 1, -1, 6];
// maxInSlidingWindow(arr1, 3);
maxInSlidingWindow(arr1, 4);
