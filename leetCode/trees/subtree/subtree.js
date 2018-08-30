function isSubtree(tree, subTree) {
  let isMatch = false;
  dfs(tree, subTree);
  return isMatch;

  function dfs(node, subNode) {
    if (node.val === subNode.val) {
      isMatch = true;
      test(node, subNode);
      if (isMatch) return;
    }
    if (node.left) {
      dfs(node.left, subNode);
    }
    if (node.right) {
      dfs(node.right, subNode);
    }
  }

  function test(node, subNode) {
    if (node.val !== subNode.val) {
      isMatch = false;
    }
    if (node.left && subNode.left) {
      test(node.left, subNode.left);
    } else if (!!node.left !== !!subNode.left) {
      isMatch = false;
    }
    if (node.right && subNode.right) {
      test(node.right, subNode.right);
    } else if (!!node.right !== !!subNode.right) {
      isMatch = false;
    }
  }
}

/**
 Definition for a binary tree node.*/
function TreeNode(val) {
  this.val = val;
  // this.left = null;
  // this.right = null;
  this.left = this.right = null;
}

let tree = new TreeNode(3);
tree.left = new TreeNode(4);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(2);
// tree.left.right.left = new TreeNode(0);
tree.right = new TreeNode(5);

let subtree = new TreeNode(4);
subtree.left = new TreeNode(1);
subtree.right = new TreeNode(2);

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

// console.log(isSubtree(tree, subtree));

let tree2 = new TreeNode(1);
tree2.right = new TreeNode(1);
tree2.right.right = new TreeNode(1);
tree2.right.right.right = new TreeNode(1);
tree2.right.right.right.right = new TreeNode(1);
tree2.right.right.right.right.right = new TreeNode(1);
tree2.right.right.right.right.right.left = new TreeNode(2);

let subTree2 = new TreeNode(1);
subTree2.right = new TreeNode(1);
subTree2.right.right = new TreeNode(1);
subTree2.right.right.left = new TreeNode(2);

// console.log(isSubtree(tree2, subTree2));

let tree3 = new TreeNode(25);
tree3.left = new TreeNode(14);
tree3.right = new TreeNode(27);
tree3.right.left = new TreeNode(26);
tree3.right.right = new TreeNode(29);

let subTree3 = new TreeNode(29);

console.log(isSubtree(tree3, subTree3));
