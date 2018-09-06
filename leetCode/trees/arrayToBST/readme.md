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
