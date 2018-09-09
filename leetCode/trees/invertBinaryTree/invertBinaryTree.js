function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function invertTree(node) {
  if (!node) return null;
  let newNode = new TreeNode(node.val);
  if (node.right) {
    newNode.left = invertTree(node.right);
  }
  if (node.left) {
    newNode.right = invertTree(node.left);
  }
  return newNode;
}

let tree = new TreeNode(4);

tree.left = new TreeNode(2);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(3);

tree.right = new TreeNode(7);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(9);

console.log(invertTree(tree));
