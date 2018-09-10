function connectSameLevelSiblings(root) {
  let queue = [nodeData(root, 0)];
  while (queue.length) {
    let { node, depth } = queue.shift();
    let neighbor = null;
    if (queue[0] && queue[0].depth === depth) {
      neighbor = queue[0].node.val;
    }
    console.log(`node: ${node.val}, neighbor: ${neighbor}`);
    if (node.left) {
      queue.push(nodeData(node.left, depth + 1));
    }
    if (node.right) {
      queue.push(nodeData(node.right, depth + 1));
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
