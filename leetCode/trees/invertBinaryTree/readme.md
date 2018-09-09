# Invert Binary Tree

## What is the problem?

given a binary tree, return a 'mirror image' version of the binary tree (leftmost bottom element will now be rightmost bottom element)

## Brainstorm

i'm not sure if we need to do this in place or can build a new tree. But building the new tree seems way easier so i'll try that method first

we'll want to traverse our given binary tree while building up a new tree

how to traverse?

first I'll try doing a standard pre-order travesal (node, left, right)

we'll want to add the current node to the new tree, then add the left node in the place of the right node, and add the right node in place of the left node

we'll want to make this whole thing as one recursive opperation; i'll use helper method recursion to give me some breathing space
