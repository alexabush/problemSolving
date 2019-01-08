function pathSumIII(root, sum) {
  if (!root) return false;
  let count = 0;
  helper(root, sum);
  return count;

  function helper(node, sum) {
    if (!node) return;
    debugger
    sum -= node.val;
    if (sum === 0) count++
    debugger;
    if (node.left) {
      helper(node.left, sum);
    }
    if (node.right) {
      helper(node.right, sum);
    }
  }
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let root = new TreeNode(10);
root.left = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.left.left = new TreeNode(3);
root.left.left.right = new TreeNode(-2);
root.left.right = new TreeNode(2);
root.left.right.right = new TreeNode(1);
root.right = new TreeNode(-3);
root.right.right = new TreeNode(11);

console.log(pathSumIII(root, 8));
