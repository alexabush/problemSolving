function findLargestValueInRow(root) {
  if (!root) return [];
  let queue = [[root, 1]];
  let rows = [];
  while (queue.length) {
    let [node,depth] = queue.shift();
    if (isNaN(rows[depth-1]) || rows[depth - 1] < node.val) rows[depth-1] = node.val
    if (node.left) queue.push([node.left, depth + 1]);
    if (node.right) queue.push([node.right, depth + 1]);
  }
  return rows
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let root = new TreeNode(1);
root.left = new TreeNode(3);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(3);
root.right = new TreeNode(2);
root.right.right = new TreeNode(9);

console.log(findLargestValueInRow(root));
