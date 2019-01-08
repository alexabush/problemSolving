function pathSumII(root, sum) {
  if (!root) return false;
  let paths = [];
  helper(root, sum);
  return paths;

  function helper(node, sum, path = []) {
    if (!node) return
    sum -= node.val;
    path = [...path, node.val];
    if (!node.left && !node.right && sum === 0) paths.push(path);
    debugger;
    if (node.left) {
      helper(node.left, sum, path);
    }
    if (node.right) {
      helper(node.right, sum, path);
    }
  }
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
root.right.right.left = new TreeNode(5);
root.right.right.right = new TreeNode(1);

let targetSum = 22;
// console.log(pathSumII(root, targetSum));
console.log(pathSumII([], 1));
