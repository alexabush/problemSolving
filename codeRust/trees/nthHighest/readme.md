# Nth Highest in BST

## What is the problem?

given a bst and an int n, find the nth highest node.

## Brainstorm

we have to do this in linear time, so we could add all the nodes to a data structure and then select the nth from the end

that would take a lot of space though, but it's worth a shot

how to turn bst into an array?

i want in-order traversal
so left node right

I get in order traversal by doing dfs left, then doing something to the node, then bfs right

## Psuedocode

1. do in-order dfs
2. for each node, add it to a list
3. once we've finished dfs, get the nth-from last node

## Coderust Hint

reverse inorder traversal
so we don't really need
to go over all the elements in the tree, we just need to go over the height of the tree (which could be n worst-case if the tree is super unbalanced, but will usually be log n)

in-order traversal is sorted in ascending order
so to find the nth highest node, we can scan the tree in descending order via reverse inorder traversal.

inorder traversal is always sorted in ascending order
