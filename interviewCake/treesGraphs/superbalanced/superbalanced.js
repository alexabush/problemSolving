class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function isBalanced(treeRoot) {
  let depths = [];
  dfs(treeRoot);
  if (Math.max(...depths) - Math.min(...depths) > 1) {
    return false;
  }
  return true;

  function dfs(node, depth = 0) {
    if (node.left) {
      dfs(node.left, depth + 1);
    }
    if (node.right) {
      dfs(node.right, depth + 1);
    } else {
      depths.push(depth);
    }
    return;
  }
}

let desc = 'leaf heights differ by two';
let treeRoot = new BinaryTreeNode(6);
let leftNode = treeRoot.insertLeft(1);
let rightNode = treeRoot.insertRight(0);
rightNode.insertRight(7).insertRight(8);
console.log(isBalanced(treeRoot)); //false, false, desc);
// isBalanced(treeRoot);
