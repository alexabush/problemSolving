function minDepth(node) {
  let queue = [[node,1]];
  while (queue.length) {
    let data = queue.shift();
    let currentNode = data[0]
    let currentDepth = data[1]
    if (!currentNode.left && !currentNode.right) return currentDepth;
    if (currentNode.left) {
      queue.push([currentNode.left, currentDepth+1]);
    }
    if (currentNode.right) {
      queue.push([currentNode.right, currentDepth+1]);
    }
  }
}

/*
  do bfs using queue
  add nodes to queue as we encounter them

  base case should be the node has no children
  we should track the depth as we go
*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.left.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(minDepth(root));
