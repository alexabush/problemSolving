function arrayToBST(ints) {
  // if (ints.length < 1) return [];
  // else if (ints.length < 2) return [ints[0]];
  // else if (ints.length < 3) return [ints[0], ints[1]];
  let bst = [];
  const getMid = arr => Math.floor(arr.length / 2);
  let mid = getMid(ints);
  let stack = [ints[mid]];
  while (stack.length) {}
  return bst;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} ints
 * @return {TreeNode}
 */

const arr1 = [-12, -10, -3, 0, 5, 9, 12];

console.log(arrayToBST(arr1));
