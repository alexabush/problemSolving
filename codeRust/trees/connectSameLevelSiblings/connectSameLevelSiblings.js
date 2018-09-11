function connectSameLevelSiblings(root) {
  let queue = [nodeData(root, 0)];
  while (queue.length) {
    let { node, depth } = queue.shift();
    node.next = null;
    if (queue[0] && queue[0].depth === depth) {
      node.next = queue[0].node.val;
    }
    if (node.left) {
      queue.push(nodeData(node.left, depth + 1));
    }
    if (node.right) {
      queue.push(nodeData(node.right, depth + 1));
    }
  }
  return root;
}

// function new TreeNode(val) {
//   return {
//     val,
//     left: null,
//     right: null
//   };
// }

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function nodeData(node, depth) {
  return {
    node,
    depth
  };
}

let tree1 = new TreeNode(100);
tree1.left = new TreeNode(50);
tree1.left.right = new TreeNode(75);
tree1.left.left = new TreeNode(25);
tree1.left.left.left = new TreeNode(10);
tree1.left.left.left.right = new TreeNode(15);
tree1.right = new TreeNode(200);
tree1.right.right = new TreeNode(300);
tree1.right.right.right = new TreeNode(350);

connectSameLevelSiblings(tree1);

function printTree(root) {
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    console.log(node.val);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
}

printTree(tree1);
