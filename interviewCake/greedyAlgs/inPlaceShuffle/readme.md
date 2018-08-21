# In Place Shuffle

## Background

An in-place algorithm operates directly on the input and changes it.
This is called a 'destructive' operation and is the opposite of a 'pure' operation.

We can create any additional variables we need with an in-place function, but we do need to modify the input data structure without creating a new copy of it.

In general, in-place functions should have a constant space-complexity, so in-place methods is useful in situations where space is a premium (not too common of a problem these days).

In-place functions can either return undefined, or return the modified object (the work is still done to the input object as a side-effect regardless of what is returned)

## What is the problem?

Which a function that will shuffle an array in-place.

The shuffle must be uniform, meaning that each item in the original array must have the same probability of ending up in each spot in the final array.

## Brainstorm 1

For starters, we have unlimited time complexity
I can imagine iterating over the array and swapping each index with a randomly selected index.

I don't really see an reason why this won't work.

Potential edge case: there's a chance the index randomly generated will be the same index we're at, but I don't think that will be a problem.

## Psuedo-code

1. create swap function that will take in array and two integer pointers and swap the values at those indexes
2. create a random function that will return a random number between two input integers
3. iterate over array
4. for each number:
5. call random to get a random number
   6 call swap and swap the random number index with the current index

## Debugging 1

So it mostly works, but I'm eating one of my numbers some times and getting undefined. So that's not create. What can I do about this?

So the problem doesn't happen everytime.

It could be caused by trying to swap and index with itself>

What would happen then?

No, that shouldn't be a problem.

I'm going to run through the debugger and see where the problem is.

It's possible my random function is wrong and i'm occasionally getting too big a number.

Okay, so I think that's what the problem is.

The random number function I wrote is inclusive since I have the + 1
