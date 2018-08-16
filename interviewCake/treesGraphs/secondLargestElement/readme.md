# Second Largest Element

## Brainstorm

To find the largest element we'd just go all the way to the right

So to find the second largest element, we want to go all the way right until we find the PARENT node of the furthest right node, and then go left.

CORRECTION: actually we want to return the parent node of the largest node

I'm trying to think of a situation where this wouldn't work, but I can't think of any (except for the obvious edge case of having <2 elements )

So let's try it

## Psuedocode

<!-- 1. Do DFS, but only go to the right. -->

2. For each node, check if that node has a right node.
3. Check if THAT node has its own right node.
4. If it does, continue dfs
5. If it doesn't, return the current node

There will be some edge cases to work out, but let's worry about those later.

**Works for full trees, but breaks on different cases**

## Debugging

1. We need to address a case where the second largest element is the left child of the largest element (in the right branch)

_Solution_ we need to add a code to handle the case where the rightmost node has a left child but NOT a right child.

In this case, the second largest element will be the left child.

2. We need to address the case where the left element of the largest element has right children of it's own.

In this case, recursively go until we get to the rightmost node

_Brainstorm_
we find the rightmost node, and it has a left child

so we go to the left.
we check if the left node has any right children.

if it doesn't we add the value.

if it does, we need to keep going to the right until we find the rightmost node of this subtree

I implemented a helper function, but I'm still getting a wrong answer, so I'm going to set a debugger and walk through the code.

I think I found the bug. I was feeding the 70 node into the 'searchRight' helper function, which was returning 70 (itself) since there's no right node.

Fixed the problem so now we pass in the 70 node's left child to 'searchRight'

PASSED!

3. Last test
   We need to throw an error if the tree only has one element

PASSED!

### Problem Solved!

But I still want to review the interview cake notes.
