# Lowest Common Ancestor In BST

## What is the problem?

given a bst and two nodes, find the lowest common ancestor

## Brainstorm

so i've struggled at this problem forever, but let's give it a shot again.

how to do this?

we should start at the top of the bst and then traverse down until we find both the nodes

we need some way of keeping track of the current node

let's try a very simple version of the problem and then expand

1. we'd take a current node and then check if it's left and right children are the nodes we're looking for. If so, we return the current value

2. the next step would be to check if the left/right children SUBTREES contain the nodes we are look for. If yes, then return the current value.

but we'll still have a problem at this point because the root node would be the answer everytime.

3. We need a way to keep going deeper into the tree until the condition ISN'T true and then return the level one above where it WAS true

So how would we do each level?

## Psuedocode 1

**Take current node and check if left & right children are the nodes we're looking for.**
if yes, return current node
if no, recurse deeper

**check if left/right SUBTREES contain nodes we're looking for**
we'll need to recurse into each subtree and then return up to the root

**find deepest node that contains left/right subtrees with target nodes**
not sure about this step
some ideas:

1. keep track of the depth with a pointer, and then return the node with the greatest stored depth
2. find some way to set a base case to return up 'true' once we find the node. We'll want to return up 'true' until we get to the node which gets a 'true' response for both child subtree and then return immediately
