function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function lowestCommonAncestorBST(root, p, q) {}

const root = new TreeNode(6);

/* build left sub-tree */

const left = new TreeNode(2);
root.left = left;

const left_left = new TreeNode(0);
left.left = left_left;

const left_right = new TreeNode(4);
left.right = left_right;

const left_right_left = new TreeNode(3);
left_right.left = left_right_left;

const left_right_right = new TreeNode(5);
left_right.right = left_right_right;

/* build right sub-tree */

const right = new TreeNode(8);
root.right = right;

const right_left = new TreeNode(7);
right.left = right_left;

const right_right = new TreeNode(9);
right.right = right_right;

console.log(lowestCommonAncestorBST(root, left_right_left, right_right));
// root = 6, p = 3, q = 9
// should return root (6)
