function connectAllSiblings(root) {
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    node.next = queue[0];
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return root;
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

let tree1 = new TreeNode(100);
tree1.left = new TreeNode(50);
tree1.left.right = new TreeNode(75);
tree1.left.left = new TreeNode(25);
tree1.right = new TreeNode(200);
tree1.right.right = new TreeNode(300);
tree1.right.right.right = new TreeNode(350);

console.log(connectAllSiblings(tree1));
