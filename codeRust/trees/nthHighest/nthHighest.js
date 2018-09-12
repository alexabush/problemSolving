function nthHighestLinearSpace(node, n) {
  let list = [];
  helper(node);
  return list[list.length - n];

  function helper(node) {
    if (node.left) {
      nthHighest(node.left, n);
    }
    list.push(node);
    if (node.right) {
      nthHighest(node.right, n);
    }
  }
}

function nthHighest(node, n) {
  let list = [];
  helper(node);
  return list[list.length - n];

  function helper(node) {
    if (node.left) {
      nthHighest(node.left, n);
    }
    list.push(node);
    if (node.right) {
      nthHighest(node.right, n);
    }
  }
}
