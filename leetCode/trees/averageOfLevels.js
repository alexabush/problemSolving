// dfs solution, decent runtime (linear time, linear space)
var averageOfLevels = function(root) {
  let averages = [];
  helper(root);
  return averages.map(levelAv => levelAv[0] / levelAv[1]);

  function helper(node, level = 1) {
    if (typeof averages[level - 1] === 'undefined')
      averages[level - 1] = [0, 0];
    averages[level - 1][0] += node.val;
    averages[level - 1][1] += 1;
    if (node.left) helper(node.left, level + 1);
    if (node.right) helper(node.right, level + 1);
  }
};

// bfs solution, based on answer from Leetcode
function averageLength(root) {
  let results = [];
  let queue = [root];
  while (queue.length) {
    let levelLength = queue.length;
    let levelSum = 0;
    for (let i = 0; i < levelLength; i++) {
      let node = queue.shift();
      levelSum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    results.push(levelSum / levelLength);
  }
  return results;
}
