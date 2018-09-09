function mergeTrees(tree1, tree2) {
  if (!tree1 && !tree2) return [];
  if (!tree2) return tree1;
  if (!tree1) return tree2;
  if (tree1 && tree2) {
    tree1.val += tree2.val;
  }

  if (tree1.left && tree2.left) {
    tree1.left = mergeTrees(tree1.left, tree2.left);
  } else if (tree2.left) {
    tree1.left = tree2.left;
  }

  if (tree1.right && tree2.right) {
    tree1.right = mergeTrees(tree1.right, tree2.right);
  } else if (tree2.right) {
    tree1.right = tree2.right;
  }

  return tree1;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let tree1 = new TreeNode(1);
tree1.left = new TreeNode(3);
tree1.left.left = new TreeNode(5);
tree1.right = new TreeNode(2);

let tree2 = new TreeNode(2);
tree2.left = new TreeNode(1);
tree2.left.right = new TreeNode(4);
tree2.right = new TreeNode(3);
tree2.right.right = new TreeNode(7);

console.log(mergeTrees(tree1, tree2));
