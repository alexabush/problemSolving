/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function findBottomLeftValue(root) {
  let data = []
  helper(root)
  return data[data.length - 1][0]

  function helper(node, depth = 0) {
    debugger
    if (!data[depth]) data[depth] = []
    data[depth].push(node.val)
    if (node.left) {
      helper(node.left, depth+1)
    }
    if (node.right) {
      helper(node.right, depth+1)
    }
  }
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(4)
root.right = new TreeNode(3)
root.right.left = new TreeNode(5)
root.right.left.left = new TreeNode(7)
root.right.right = new TreeNode(6)

console.log(findBottomLeftValue(root))