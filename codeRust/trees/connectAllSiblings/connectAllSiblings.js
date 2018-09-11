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
}
