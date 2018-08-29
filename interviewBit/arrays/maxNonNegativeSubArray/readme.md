# Max Non Negative Subarray

## What is the problem?

find the max contiguous subarray of non-negative numbers

edge cases:
if there are multiple subarrays that sum to the same value, return the longest of those subarrays. If they are all the same length, return the subarray closest to the start of the array.

## Brainstorm

this looks more managable than the other problem
we could just calculate all positive subarrays (store in another array)
then we'd return whichever subarray sums to the largest number

how to find which sumArray has the largest sum?

I can map over the subArrays array and sum all the values

then I can indexOf the highest value, and return the value at that index

not super efficient, but linear time
