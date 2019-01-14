function merge(nums1, l1, nums2, l2) {
  if (!nums1.length || !nums2.length) return nums1;
  let temp = [];
  let p1 = 0,
    p2 = 0;
  while (p1 < nums1.length) {
    if (p1 >= l1 && temp.length && p2 >= l2) {
      nums1[p1] = temp.shift();
    } else if (p1 >= l1 && temp.length && temp[0] <= nums2[p2]) {
      nums1[p1] = temp.shift();
    } else if (temp.length && p2 >= l2 && temp[0] <= nums1[p1]) {
      temp.push(nums1[p1])
      nums1[p1] = temp.shift()
    } else if (temp.length && temp[0] <= nums2[p2]) {
      temp.push(nums1[p1]);
      nums1[p1] = temp.shift();
    } else if (p1 >= l1) {
      nums1[p1] = nums2[p2];
      p2++;
    } else if (temp.length && temp[0] > nums2[p2]) {
      temp.push(nums1[p1]);
      nums1[p1] = nums2[p2];
      p2++;
    } else if (nums1[p1] > nums2[p2]) {
      temp.push(nums1[p1]);
      nums1[p1] = nums2[p2];
      p2++;
    }
    p1++
  }
  return nums1;
}

let nums1 = [1, 2, 4, 5, 6, 0],
  m = 5;
let nums2 = [3],
  n = 1;

// let nums1 = [2,0], m = 1
// let nums2 = [1], n = 1

// let nums1 = [1], m = 1
// let nums2 = [], n = 0

// let nums1 = [1, 2, 3, 0, 0, 0], m = 3
// let nums2 = [2, 5, 6], n = 3

// let nums1 = [1,4,16,19,0,0,0,0,0,0], m = 4
// let nums2 = [3,4,6,11,17,21], n = 6

console.log(merge(nums1, m, nums2, n));
// [1,3,44,6,11,16,19,21]
