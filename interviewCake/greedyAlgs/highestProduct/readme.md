# Highest Product

## Problem Definition

Given an array of integers, find the highest product we can get from three of the integers.

_Note_ our input may contain negative integers (which can/should be used)

## Brainstorm

we'll want to traverse the array and add/subtract from a 'highestProduct' variable in a sliding window fashion

We can probably just go left to right using two pointers 'front', 'back'

I'm not sure if this will work.

It looks like we really just want to find the three largest numbers in the array, but in linear time

we also want to include large negative numbers, but only if we have two of them (so we can cancel out the negativeness by multiplying them against each other)

Let's assume that the problem can be solved with a linear traversal.

We can just make an array to hold the largest three positive numbers and another array to hold the largest two negative numbers

once we've reached the end of the array, if the negative numbers yield a product higher than the smaller of the two positive numbers, we'll replace the positive numbers with the negative numbers and return the result.

Sounds workable.

## Psuedocode

1. create a positiveNums and negativeNums array, populate 3 indexes of 0 in positiveNums and 2 indexes of 0 in negativeNums
2. traverse array
3. for each number, if the number is larger than the smallest number in positiveNums or smaller than the smallest number in negativeNums, replace that number with the current number (you can just use Math.max/Math.min for this, the problem will stil be in linear time)
4. once the list is fully traversed, we'll test if the two negative numbers yield a product greater than the smaller two of the positive numbers.

_Note: this solution might fall apart if we have small amounts of numbers. I'm just going to code it out and adjust as I go._

### Coding Notes

So I have the arrays and the code for replacing the starting array values with the largest positive and smallest negative numbers seems to work

now I need to add the code for combining the positive and negative numbers and returning the actual product

just realized I could probably simplify my replacement code just by resorting the array every time and then removing from the front

Finished first draft of implementation, it's pretty ugly but it works on the standard cases

### Failed Test Recap

1. Need to modify code to throw an error if the input.length < 3
2. Need to modify code so I can handle input of only negative numbers

The second one actually looks pretty difficult to do in linear time, since my current code is based around only recording two negative numbers, and the MOST negative numbers at that.

A simple fix would be to add another array that is three indexes long that will record the least negative numbers

then if I don't have ANY positive numbers, I can return the product of those numbers.

it's ugly and longwinded, but it should work.

let me try it.

this is tricky

i'm going to use sort.

i want to replace the highest negative number

my sort algo should but the highest negative number earliest in the array

ok
