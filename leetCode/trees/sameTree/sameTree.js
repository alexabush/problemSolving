function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function isSameTree(tree1, tree2) {
  let flag = true;
  if (!tree1 && !tree2) return true;
  if (!tree1 && tree2) return false;
  if (tree1 && !tree2) return false;
  helper(tree1, tree2);

  function helper(tree1, tree2) {
    if (tree1.val !== tree2.val) flag = false;
    if (!!tree1.left !== !!tree2.left) flag = false;
    if (!!tree1.right !== !!tree2.right) flag = false;
    if (tree1.left && tree2.left) {
      helper(tree1.left, tree2.left);
    }
    if (tree1.right && tree2.right) {
      helper(tree1.right, tree2.right);
    }
  }
  return flag;
}

let tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);
let tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

let tree3 = new TreeNode(1);
tree3.left = new TreeNode(2);
let tree4 = new TreeNode(1);
tree4.right = new TreeNode(2);

let tree5 = new TreeNode(1);
tree5.left = new TreeNode(2);
tree5.right = new TreeNode(1);

let tree6 = new TreeNode(1);
tree5.left = new TreeNode(1);
tree5.right = new TreeNode(2);

// console.log(sameTree(tree1, tree2));
//true
// console.log(sameTree(tree3, tree4));
//false
// console.log(sameTree(tree5, tree6));
//false

let tree7 = new TreeNode(1);
tree7.left = new TreeNode(2);
tree7.right = new TreeNode(1);

let tree8 = new TreeNode(1);
tree8.left = new TreeNode(1);
tree8.right = new TreeNode(2);

console.log(isSameTree(tree7, tree8));
//false
