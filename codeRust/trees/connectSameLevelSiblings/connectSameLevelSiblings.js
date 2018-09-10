function connectSameLevelSiblings(root) {
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    let neighbor = null;
    if (queue[0]) {
      neighbor = queue[0].val;
    }
    console.log(`node: ${node.val}, neighbor: ${neighbor}`);
    if (node.left) {
      queue.push(nodeData(node.left));
    }
    if (node.right) {
      queue.push(nodeData(node.right));
    }
  }
}

function TreeNode(val) {
  return {
    val,
    left: null,
    right: null
  };
}

function nodeData(node, depth) {
  return {
    node,
    depth
  };
}

let tree1 = TreeNode(100);
tree1.left = TreeNode(50);
tree1.left.right = TreeNode(75);
tree1.left.left = TreeNode(25);
tree1.left.left.left = TreeNode(10);
tree1.left.left.left.right = TreeNode(15);
tree1.right = TreeNode(200);
tree1.right.right = TreeNode(300);
tree1.right.right.right = TreeNode(350);

connectSameLevelSiblings(tree1);
