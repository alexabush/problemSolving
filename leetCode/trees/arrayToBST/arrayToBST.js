function arrayToBST(nums) {
  debugger;
  const getMid = arr => Math.floor(arr.length / 2);
  let bst = helper(nums);
  return bst;

  function helper(ints) {
    if (!ints.length) {
      return null;
    }
    let mid = getMid(ints);
    let node = new TreeNode(ints[mid]);
    node.left = helper(ints.slice(0, mid));
    node.right = helper(ints.slice(mid + 1, ints.length));
    return node;
  }
}

// * Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

const arr1 = [-12, -10, -3, 0, 5, 9, 12];

console.log(arrayToBST(arr1));
