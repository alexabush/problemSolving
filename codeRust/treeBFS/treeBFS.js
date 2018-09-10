// linear time, constant space
function treeBFS(root) {
  let queue = [root];
  while (queue.length) {
    let current = queue.shift();
    console.log(current.val);
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
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

let tree1 = TreeNode(100);
tree1.left = TreeNode(50);
tree1.left.left = TreeNode(27);
tree1.left.right = TreeNode(75);
tree1.right = TreeNode(200);
tree1.right.right = TreeNode(350);

treeBFS(tree1);
