# Other Index Products

## What is the problem asking for?

We're given an array of integers and we want to return a new array of equal length. Each index should be the product of all the numbers in the original array EXCEPT for the number at that index in the original array.

**Example**
Input:
`[1, 7, 3, 4]`

Output:
`[84, 12, 28, 21]`

## Brainstorm

This problem seems like a pretty clear fit for the 'map' method.

for each index, we want to get the product of all the indexes EXCEPT for that index.

So the problem will be time complexity.

so what are some potential ways for getting the product off all the OTHER elements in the array except for the current one

we could go linearly through the whole array, every time and multiply all the numbers except for the current one

but it would probably be easier to first calculate the product of ALL the numbers in the array and then just divide that 'totalProduct' by the number at each index.

So let's give that a try and see how it works out.

## Psuedocode

1. Calculate the product of all the numbers (can do this easily using reduce)
2. map over the input array
3. for each number, return the product/current number

### Adding Functionality

So I solved the most version of the problem, but I fail on the edge cases.

1. Array may contain 0s.
   I can't divide by 0, so I need a way of ignoring the zeros when I calculate the totalProduct

Solved that problem

2. There's now a stipulation in the problem: we can't use division! So that makes things harder...

## Brainstorm Reworking of Problem

So we can't use division, which means we can't get the product of all the numbers and then divide

so we need to recalculate the product everytime

I'm not sure what the new time complexity will be, but we'll still be iterating over the array

I could make a n^2 solution where I iterate over the array and then reduce all numbers that aren't the current number

That should work, and should be fairly easily to implement
