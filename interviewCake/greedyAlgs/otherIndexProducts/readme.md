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

we need some kind of catch to zero out all the numbers if there are more than 2 zeros in the array

### Brainstorm

_Need to turn whole array into zeros if there are more than two zeros_

I could just count if there's 2+ zeros while iterating through the array and then return an array of all zeros...

that's simple and inelegant, but let's do it

Nice! It works!

I used a counter and a conditional to return a zero-filled array if the count ends up 2 or greater.

_Is this solution in linear time?_

I think so, let's check.
JK, it's n^2 time.

Interview Cake has a linear time solution, so let's check it out.

## Interview Cake Solution

Our solution requires us to do the same calculations over and over, which is wasteful in terms of time complexity.

It's possible to store the results of calculations so we don't have to repeat them.

We'll store the results of partial calculations and then multiply these partial results by one new integer to get a full result.

_The product can be broken into two pieces_:

1. product of all integers before current index
2. product of all integers after current index

To get the product of all integers before the current index, we want to store each product we've calculated so far and then multiple that value with the next integer (we'll store the new calculated value as well)

We can make an array of the products of all the ints before the index.

For each integer, we'll find the product of all the integers before it, and store the total product.

After we've found the products of all the integers before each index, we'll have to find the products of all the integers after each index.

_How to do this?_

We COULD just repeat the process we used for all the integers before the index for all the integers after the index, it would be better in terms of space and time complexity to just walk through the array backwards up to the current index.

This method saves the time of reversing the array, but we're still using more space than neccesary because we've creating arrays for both the 'before' products and the 'after' products.
