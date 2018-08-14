# Lowest Common Ancestor BST

## Background

The lowest common ancestor is the lowest node in a tree that has both v and w as descendants.

Note that nodes are allowed to be descendants of themselves.

## What is the problem?

Given a binary search tree and two nodes of that tree, find the lowest common ancestor node.

We are given the root node of a TreeNode binary search tree, and a 'p' and 'q' node of the tree.

We should return the lca node.

## Brainstorm

I'm not sure how to do this.
I imagine we'll have to start from the root, and then work down until we find both nodes

and as we go, we'll have to remember the path we travelled.

we'll do breadth-first search (maybe) on each level

i'm not sure how this will work

we'll definately start from the root
then we'll search down a level and check if we've found one of the nodes

if we don't find it, we'll search down another node
