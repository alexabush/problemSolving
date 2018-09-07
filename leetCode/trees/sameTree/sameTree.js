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

function sameTree(tree1, tree2) {
  if (
    tree1 instanceof TreeNode === false &&
    tree2 instanceof TreeNode === false
  )
    return true;
  if (tree1 instanceof TreeNode !== tree2 instanceof TreeNode) return false;
  if (typeof tree1 !== typeof tree2) return true;
  if (tree1.val !== tree2.val) return false;
  if (!!tree1.left !== !!tree2.left) return false;
  if (!!tree1.right !== !!tree2.right) return false;
  if (tree1.left && tree2.left) {
    sameTree(tree1.left, tree2.left);
  }
  if (tree1.right && tree2.right) {
    sameTree(tree1.right, tree2.right);
  }
  return true;
}

const arr1 = [-12, -10, -3, 0, 5, 9, 12];
const arr2 = [-12, -10, -3, 0, 5, 9, 12];
const arr3 = [-12, -10, -3, 1, 5, 9, 12];
const arr4 = [-12, -10, -3, 1, 5, 9];
const tree1 = arrayToBST(arr1);
const tree2 = arrayToBST(arr2);
const tree3 = arrayToBST(arr3);
const tree4 = arrayToBST(arr4);

console.log(sameTree(tree1, tree2));
//true
console.log(sameTree(tree1, tree3));
//false
console.log(sameTree(tree1, tree4));
//false
console.log(sameTree([], []));
// 'apples'
