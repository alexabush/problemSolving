function arrayToBST(arr) {
  if (arr.length < 1) return [];
  else if (arr.length < 2) return [arr[0]];
  else if (arr.length < 3) return [arr[0], arr[1]];
  let mid = Math.floor(arr.length / 2);
  let low = mid - 1;
  let high = mid + 1;
  let bst = [arr[mid]];
  while (low > 0 || high < arr.length) {
    bst[]
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {};
