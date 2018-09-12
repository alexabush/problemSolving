function inOrderSuccessorSTACK(root, target) {
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    if (node.val === target.val && stack.length > 0) {
      return stack[stack.length - 1].val;
    } else if (node.val === target.val) {
      return null;
    }
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return 'not found';
}

function inOrderSuccessor(node, target) {
  if (node.val === target) {
    if (node.right) {
      node = node.right;
      while (node.left) {
        node = node.left;
      }
      return node.val;
    } else {
      return node.parent.val;
    }
  } else if (node.val < target && node.right) {
    return inOrderSuccessor(node.right, target);
  } else if (node.val > target && node.left) {
    return inOrderSuccessor(node.left, target);
  }
  return 'not found';
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

let tree1 = new TreeNode(100);

tree1.left = new TreeNode(50);
tree1.left.parent = tree1;

tree1.left.right = new TreeNode(75);
tree1.left.right.parent = tree1.left;

tree1.left.left = new TreeNode(25);
tree1.left.left.parent = tree1.left;

tree1.right = new TreeNode(200);
tree1.right.parent = tree1;

tree1.right.left = new TreeNode(125);
tree1.right.left.parent = tree1.right;

tree1.right.right = new TreeNode(350);
tree1.right.right.parent = tree1.right;

console.log(inOrderSuccessor(tree1, 200));
// 350
console.log(inOrderSuccessor(tree1, 100));
// 125
console.log(inOrderSuccessor(tree1, 25));
// 50
