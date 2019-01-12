var maxDepth = function(root) {
  if (!root) return 0;
  let queue = [[root, 1]];
  let maxDepth = 1;
  while (queue.length) {
    debugger
    let [node, d] = queue.shift();
    if (d > maxDepth) maxDepth = d;
    if (node.left) queue.push([node.left, d + 1]);
    if (node.right) queue.push([node.right, d + 1]);
  }
  return maxDepth;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(maxDepth(root));
