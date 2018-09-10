# Connect Same Level Siblings

## What is the problem?

given a binary tree, add a pointer to each node pointing to the sibling node on it's immediate 'right' in a binary tree.

if there is no right sibling, have the node point to null

The example tree is a bst, but this should work on any valid binary tree, even if it's not in order

## Brainstorm

we'll want to do bfs on our binary tree using a queue

for each node, add a 'sibling' pointer

the pointer should point to the next node in the queue?

i'll have to code it out to be more certain, but I think the solution will involve going into the bfs traversal data structure and setting the 'current' node to point to the first node in the data structure
