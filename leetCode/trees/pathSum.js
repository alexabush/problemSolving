function pathSumHelper(root, targetSum) {
  if (!root) return false
  let bool = false;
  helper(root, targetSum)
  return bool

  function helper(node, sum) {
    sum -= node.val
    if (!node.left && !node.right && sum === 0) bool = true
    if (node.left) {
      helper(node.left, sum)
    }
    if (node.right) {
      helper(node.right, sum)
    }
  }
}

function pathSum(node, sum) {
  debugger
  if (!node) return false
  if (!node.left && !node.right && sum - node.val === 0) return true
  return pathSum(node.left, sum - node.val) || pathSum(node.right, sum - node.val)
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let root = new TreeNode(5);
root.left = new TreeNode(4);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right = new TreeNode(8);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(1);

let targetSum = 22
console.log(pathSum(root, targetSum));
