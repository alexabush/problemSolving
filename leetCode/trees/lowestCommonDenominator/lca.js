function lowestCommonAncestorBST(node, target1, target2) {
  if (node === target1 || node === target2) return node;
  if (!node.left && !node.right) return;
  let left, right;
  if (node.left) {
    left = lowestCommonAncestorBST(node.left, target1, target2);
  }
  if (node.right) {
    right = lowestCommonAncestorBST(node.right, target1, target2);
  }
  if (left && right) {
    return node;
  } else if (left instanceof TreeNode) {
    return left;
  } else if (right instanceof TreeNode) {
    return right;
  }
}

// Rithm Answer
function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  return left && right ? root : left || right;
}

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

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

/* example tests */
console.log(lowestCommonAncestorBST(root, root.left, root.right));

// root = 6, p = 3, q = 9
console.log(lowestCommonAncestorBST(root, left_right_left, right_right));
// --> root (6) is the LCA

// root = 6, p = 3, q = 5
console.log(lowestCommonAncestorBST(root, left_right_left, left_right_right));
// --> left_right (4) is the LCA

// root = 6, p = 0, q = 2
console.log(lowestCommonAncestorBST(root, left_left, left));
// --> left (2) is the LCA

// root = 6, p = 0, q = 9
lowestCommonAncestorBST(root, left_left, right_right);
// --> root (6) is the LCA
