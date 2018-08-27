# Find Duplicate

## What is the problem?

We are given an array of integers in the range 1..n with a length of n + 1

the array has at least one integer that appears more than once.

we want to write a function that will find any integer that appears more than once in our array (it can be any integer, it just has to appear more than once)

**Space Complexity**: constant

## Brainstorm

so we need do do this problem without using any additional data structures, which means we can't use a frequency counter.

We could sort the array and then just traverse the array and return the first number that equals the number before it
