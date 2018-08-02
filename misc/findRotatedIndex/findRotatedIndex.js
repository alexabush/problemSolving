function findRotatedIndex(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) {
      if (arr[mid + 1] > arr[mid]) {
        low = mid + 1;
      } else {
      }
    } else high = mid - 1;
  }
  return -1;
}

/*
Time Complexity - O(log n)
Space Complexity - O(1)
*/

console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)); // 5
