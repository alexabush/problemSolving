var averageOfLevels = function (root) {
  let averages = []
  helper(root)
  return averages.map(levelAv => levelAv[0] / levelAv[1])

  function helper(node, level = 1) {
    if (typeof averages[level - 1] === 'undefined') averages[level - 1] = [0, 0]
    averages[level - 1][0] += node.val
    averages[level - 1][1] += 1
    if (node.left) helper(node.left, level + 1)
    if (node.right) helper(node.right, level + 1)
  }
};