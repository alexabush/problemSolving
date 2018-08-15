# isValidBST

# What is the question asking for?

Write a function to check that a bianry tree is a valid binary search tree.
I'll need to traverse the tree and confirm that the value of each node is in the correct place.

Basically, I'll assume the tree is valid as I traverse and return false if I ever find a value that contradicts that. If I traverse the whole tree and don't ever return false, I'll return true

# Brainstorm

I'll set up a basic dfs traversal for the bst.
At each stage I'll check that the current node's left.value is less than the current node's value, and that current node's right.value is greater than the current value.

I'm not sure if this will completely solve the problem though.
I'll need to make some tests of invalid bsts and see if they get caught...

So the problem with my current approach is that a node may be correctly positioned in relationship with its immediate parent, but be positioned incorrectly to more distant ancestor node.

So how do I solve this problem?
If I have a way to remember all the nodes i've seen as I traverse will that help?

I can record all the ancestor nodes in an array and then check if the number is less than/greater than all the numbers it should be.

_From interviewcake:_ traverse the tree while keeping track of the ancestros for each node and whether the node should be greater than or less than each of them

A node is valid if it's greater than all the ancestor nodes it's in the right subtree of and less than all the ancestral nodes it's in the left-subtree of.

We don't need to keep track of each ancestor, we just need to track the largest number the curent node has to be bigger than and the smallest number the node has to be smaller than (track the largest in the left and the smallest in the right)

### Interview Cake Solution

`function isBinarySearchTree(treeRoot, lowerBound, upperBound) {
lowerBound = (typeof lowerBound !== 'undefined') ? lowerBound : Number.NEGATIVE_INFINITY;
upperBound = (typeof upperBound !== 'undefined') ? upperBound : Number.POSITIVE_INFINITY;

if (!treeRoot) return true;

if (treeRoot.value >= upperBound || treeRoot.value <= lowerBound) {
return false;
}

return isBinarySearchTree(treeRoot.left, lowerBound, treeRoot.value)
&& isBinarySearchTree(treeRoot.right, treeRoot.value, upperBound);
}`
