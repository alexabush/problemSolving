# Subtree of another tree

## What is the problem?

given two binary trees, check if the second tree exists within the first tree

## Brainstorm

traverse tree
for each node, check if node === subTree root
if not, continue traversing tree normally
if yes, traverse tree and subtree at the same time and see if they continue to line up

i could do dfs for both nodes at the same time and see if they match

how can I say with certainty that

## Debugging

I have the basic cases working
but I need to had functionality to handle false starts, situations where I thought I had an overlap but I actually don't, but still have tree nodes left to check
