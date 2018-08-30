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

## Improving my solution

So I have a working solution but it's definately clunky. I have linear time, but I run through the array a bunch, so the total time is probably something like 5n. Which is meh.

_Interview Bit Improvements_
interview bit suggests not even bothering to make an array, but rather just to keep maxSum, maxStart, and maxEnd pointers and a currentSum, currentStart, and currentEnd pointers as well.

This is a good improvement, so let me try and implement it

## Psuedocode

iterate over array
test if number is positive
if it is, we want to add it to the currentSum
then we want to update the currentStart/currentEnd
then we want to check if we should replace the maxSum with the currentSum

## Debugging 2

need to modify so 0 counts as a positive number
