function sumRootToLeafNumbers(root) {
  let pathSums = 0
  helper(root)
  return pathSums

  function helper(node, sum='') {
    if (!node) return
    sum = sum * 10 + node.val
    if (!node || !node.left && !node.right) pathSums += sum
    helper(node.left, sum)
    helper(node.right, sum)
  }
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let root = new TreeNode(4);
root.left = new TreeNode(9);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(1);
root.right = new TreeNode(0);

console.log(sumRootToLeafNumbers(root));
