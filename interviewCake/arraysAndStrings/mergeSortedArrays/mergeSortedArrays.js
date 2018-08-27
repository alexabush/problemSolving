function mergeSortedArrays(subArr1, subArr2) {
  debugger;
  let sortedArr = [];
  let pointer1 = 0;
  let pointer2 = 0;
  while (subArr1.length >= pointer1 || subArr2.length >= pointer2) {
    if (subArr1.length <= pointer1) {
      sortedArr.push(...subArr2.slice(pointer2));
      break;
    } else if (subArr2.length <= pointer2) {
      sortedArr.push(...subArr1.slice(pointer1));
      break;
    } else if (subArr1[pointer1] <= subArr2[pointer2]) {
      sortedArr.push(subArr1[pointer1]);
      pointer1++;
    } else if (subArr1[pointer1] > subArr2[pointer2]) {
      sortedArr.push(subArr2[pointer2]);
      pointer2++;
    }
  }
  return sortedArr;
}

let arr1 = [5, 7, 11];
let arr2 = [1, 4, 6, 12];

console.log(mergeSortedArrays(arr1, arr2));
