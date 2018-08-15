# Superbalanced

**Definition**
a tree is 'superbalanced' if the difference between the depths of any two lead nodes is one or less

**Starting Code**
We are provided with a binary tree node constructor and insertLeft and insertRight methods that will insert a value into the tree

## Brainstorm

I suppose I'll try this with depth first search to start

we'll want to do dfs and keep track of the depth as we go

if the difference between the min leaf depth and max leaf depth is > 1, we return false

if there are more more than 2 depths, return false

this problem is a bit out of league

## Solution Step-By-Step

1. we do depth first search.
2. when we find a leaf, we'll add that leaf's depth to a data structure storing the depths

^ This is key, since we don't need to record the depth UNTIL we hit a leaf (if it's a branch, we want to recurse deeper down the tree)

3. we test if our depths data structure has recorded depths that are more than 1 different, if yes, return true, if no, return false

**How to do this?**
Let's say we used an array for our data structure and recorded leaf depths of [2,3,4]

So we can see we want to return 'false'

how do we determine that?

we can just find the difference between the largest and smallest value in the array

## Debugging

So I coded it out and it passes all but two tests. The problem seems to be that we're returning true when we should be returning false, which means that something is wrong with the depths calculation logic.

**Problem Solved!**
The problem was that I was passing Math.max and Math.min an array and the methods only take a series of numbers. So I just spread the arrays and it solved the problem. Code works now.
