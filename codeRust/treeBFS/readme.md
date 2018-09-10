# Tree BFS

# What is the problem?

print out the values of a tree in pre-order bfs style

## Brainstorm

I think i can solve this using a stack instead of using recursion

It'll be pretty much like graph bfs except I won't need a 'visted' set because trees are always uni-directional

i'll want to push the root onto the stack

then i'll want to start a while loop that will run until the stack is empty

i'll pop from the stack, print the node's value, then push the node's left and right children node onto the stack
