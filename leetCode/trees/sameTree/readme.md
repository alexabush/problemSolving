# Same Tree

## What is the problem?

given two binary trees, write a function to check if they're identical.

## Brainstorm

I can just traverse the two trees similtaneously and return false if nodes don't match

## Psuedocode

1. do pre-order recursive tree traversal on BOTH trees
2. check if values match. if they don't, return false.
3. if they do, check if they both have left child, both have right child, and recursive into those children. If one tree has a left/right child and the other doesn't, return false
