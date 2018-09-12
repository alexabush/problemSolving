# In Order Successor

## What is the problem?

give a node in a binary tree, return the next node in inorder traversal

note that inorder traversal is left-root-right

## Brainstorm

LINEAR TIME SOLUTION
so we've going to want to make a dfs search
I'll try and use the stack method for dfs since i'm less familiar with that than with recursive dfs

pretty much all we need to do is return the next element in the stack

We'll need to make some optimizations for the log n time solution

inorder successor of a node in binary tree is the next node in inorder traversal.

write a method to find inorder successor of a given binary tree node in bunary search tree given parent pointers

left root right

okay so my current technique is a pre-order

I need to modify it to make it post order

i'm going to write another version that uses recursion
so with this technique i have a problem because I don't know how to access

we need a way of access the next node
is there a way of doing this with the recursive method?

I could do the stack implementation but I'd need to but the left node, then the current node, then the right node

maybe my fundamental strategy is wrong.
we want this in log n time, so maybe I need to do binary search logic

if target > current, go right
if target < current, go left

go until we find the target,
then:

1. check if it has a right child, if it does, return that
2. else return the parent

**UPDATE**
so I didn't notice that our tree nodes have a 'parent' pointer that will point up to the node's parent

### What can I do differently now that I have the parent pointer?

_'target' will be the value of the targeted node_

1. find the target node using binary search
2. if target greater than

3. check if it has a right child, if it does, get the leftmost child of that right child
4. else return the parent

## CR Solution

finding inorder successor with parent pointers

1. if target node has right child, return left-most child of the right child
2. else, keep
