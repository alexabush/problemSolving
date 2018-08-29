# Max Sum Contiguous Subarray

## What is the problem?

we want to find the largest contiguous subarray and return the sum of that subarray

## Brainstorm

the subarray has negative numbers, that's what prevents us from just returning the whole array

we need to iterate over the array (obvs)

we can store the current sum in a data structure and check if each new step increases or decreases the value

typically I'd want to use a greedy algorithm, but the problem is that I don't know when to stop

the subarray can be the whole array if we want it to be, but that might not be optimal because of the negatives

we could start with the whole subarray

I'm just going to look at the first hint because I'm sorta stuck

### HINT

there's a n^3 solution where we look at every number i and j and compute the sum of elements between them.

there's a n^2 solution where we store sums we've already calculated and use those to calculate new sums

we want linear time.

_hints_
what features does the optimal subarray have?
if we use a greedy approach with a traversal and accumulation, when should we STOP accumulating?

### I'm going to look at the explaination:

no prefix of the solution will ever have a negative sum
