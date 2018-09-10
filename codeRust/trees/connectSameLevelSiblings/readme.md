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

So I have it set up that each node points to the NEXT node, but I need to keep the node pointing to 'null' at the end of each 'level'

I'm not really sure how to figure out when we go from one level to the next though

I suppose I could add a bit of metadata called 'depth'
I could make each item in the queue an object where the first item is the node and the second item is the depth of the node

I can increment the depth of the node each time I push children (child node depth = node depth + 1)

then I can do a test for matching node depth each time I want to add a neighbor

let's try it!
