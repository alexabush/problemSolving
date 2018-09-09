function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function sameTree(tree1, tree2) {
  debugger;
  if (
    tree1 instanceof TreeNode === false &&
    tree2 instanceof TreeNode === false
  )
    return true;
  if (tree1 instanceof TreeNode !== tree2 instanceof TreeNode) return false;
  if (typeof tree1 !== typeof tree2) return true;
  if (tree1.val !== tree2.val) return false;
  if (!!tree1.left !== !!tree2.left) return false;
  if (!!tree1.right !== !!tree2.right) return false;
  if (tree1.left && tree2.left) {
    return sameTree(tree1.left, tree2.left);
  }
  if (tree1.right && tree2.right) {
    return sameTree(tree1.right, tree2.right);
  }
  return true;
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

console.log(sameTree(tree7, tree8));
//false
