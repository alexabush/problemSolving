function sumRootToLeafNumbers(root) {
  let pathSums = []
  helper(root)
  return pathSums.reduce((acc, sum) => {
    acc += +sum;
    return acc
  }, 0)

  function helper(node, sum='') {
    if (!node) return
    sum += node.val.toString()
    if (!node || !node.left && !node.right) pathSums.push(sum);
    helper(node.left, sum) + helper(node.right, sum)
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
