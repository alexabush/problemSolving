function pathSumIIIAlex(root, sum) {
  if (!root) return false;
  let count = 0;
  helper(root, [sum], 1);
  return count;

  function helper(node, sums, level) {
    if (!node) return;
    if (typeof sums[level-1] === 'undefined') sums[level-1] = sum
    sums = sums.map(levelSum => {
      levelSum -= node.val
      if (levelSum === 0) count++
      return levelSum
    })
    if (node.left) {
      helper(node.left, sums, level+1);
    }
    if (node.right) {
      helper(node.right, sums, level+1);
    }
  }
}

// from leetcode, very advanced solution for me, worth a lot of further review
function pathSumIII(root, sum) {
  if (!root) return false;
  let preSum = {}
  preSum[0] = 1
  return helper(root, 0, sum, preSum);

  function helper(node, currentSum, sum, preSum) {
    if (!node) return 0;
    currentSum += node.val
    let result = preSum[currentSum - sum] || 0
    preSum[currentSum] = (preSum[currentSum] || 0) + 1

    result
      += helper(node.left, currentSum, sum, preSum)
      + helper(node.right, currentSum, sum, preSum);
    preSum[currentSum] = preSum[currentSum] - 1
    return result
  }
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let root = new TreeNode(10);
root.left = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.left.left = new TreeNode(3);
root.left.left.right = new TreeNode(-2);
root.left.right = new TreeNode(2);
root.left.right.right = new TreeNode(1);
root.right = new TreeNode(-3);
root.right.right = new TreeNode(11);

console.log(pathSumIII(root, 8));
