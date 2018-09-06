# Convert Sorted Array to BST

## What is the problem?

given an array where elements are sorted in ascending order, convert to a height-balanced bst (depth of two subtrees should never differ by more than one)

## Brainstorm

we'll need to iterate over the array and build up a bst.

since it needs to be balanced, we'll want to start from the middle of the array and work out way outwards to the edges using a two pointers approach.

i'm not entirely comfortable with how to represent bsts with arrays

it depends on if we're doing pre-order, post-order, or in order representations?

leetcode's example uses pre-order

so root, left, right, leftLEFT, leftRIGHT, rightLEFT, rightRight

I need to iterate using a while loop

I just realized that my current strategy won't work because it will result in an unbalanced tree

so what I really need is to take the middle of EACH new subarray

I'll take middle, middle, middle until all the values are all used up.

what I need is to ensure that I won't miss values doing it this way

I can throw out the high and low values
I just need to use the mid value

I did it recursively, which is depth first
I need to reimplement using a stack to get a bfs style distribution?
