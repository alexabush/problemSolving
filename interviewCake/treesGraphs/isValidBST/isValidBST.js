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

function isBinarySearchTree(treeRoot) {
  let flag = true;
  dfs(treeRoot);
  return flag;

  function dfs(
    node,
    lowerLimit = Number.NEGATIVE_INFINITY,
    higherLimit = Number.POSITIVE_INFINITY
  ) {
    if (node.value === 60) debugger;
    if (node.value > higherLimit || node.value < lowerLimit) {
      flag = false;
    }
    if (node.left) {
      dfs(node.left, lowerLimit, node.value);
    }
    if (node.right) {
      dfs(node.right, node.value, higherLimit);
    }
    return;
  }
}

function icisBinarySearchTree(treeRoot, lowerBound, upperBound) {
  lowerBound =
    typeof lowerBound !== 'undefined' ? lowerBound : Number.NEGATIVE_INFINITY;
  upperBound =
    typeof upperBound !== 'undefined' ? upperBound : Number.POSITIVE_INFINITY;

  if (!treeRoot) return true;

  if (treeRoot.value >= upperBound || treeRoot.value <= lowerBound) {
    return false;
  }

  return (
    isBinarySearchTree(treeRoot.left, lowerBound, treeRoot.value) &&
    isBinarySearchTree(treeRoot.right, treeRoot.value, upperBound)
  );
}

// Tests

// let desc = 'valid full tree';
// let treeRoot = new BinaryTreeNode(50);
// let leftNode = treeRoot.insertLeft(30);
// leftNode.insertLeft(10);
// leftNode.insertRight(40);
// let rightNode = treeRoot.insertRight(70);
// rightNode.insertLeft(60);
// rightNode.insertRight(80);
// console.log(isBinarySearchTree(treeRoot)); // true
// // assertEquals(isBinarySearchTree(treeRoot), true, desc);

let desc = 'both subtrees valid';
let treeRoot = new BinaryTreeNode(50);
let leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(20);
leftNode.insertRight(60);
let rightNode = treeRoot.insertRight(80);
rightNode.insertLeft(70);
rightNode.insertRight(90);
console.log(isBinarySearchTree(treeRoot)); //, false, desc);

// desc = 'descending linked list';
// treeRoot = new BinaryTreeNode(50);
// leftNode = treeRoot.insertLeft(40);
// leftNode = leftNode.insertLeft(30);
// leftNode = leftNode.insertLeft(20);
// leftNode = leftNode.insertLeft(10);
// assertEquals(isBinarySearchTree(treeRoot), true, desc);

// desc = 'out of order linked list';
// treeRoot = new BinaryTreeNode(50);
// rightNode = treeRoot.insertRight(70);
// rightNode = rightNode.insertRight(60);
// rightNode = rightNode.insertRight(80);
// assertEquals(isBinarySearchTree(treeRoot), false, desc);

// desc = 'one node tree';
// treeRoot = new BinaryTreeNode(50);
// assertEquals(isBinarySearchTree(treeRoot), true, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
