# Which Appears Twice

## What is the Problem?

We have an array of n + 1 numbers.
Every number in the range 1..n appears once except for one number that appears twice.

Write a function that will return the number that appears twice.

### Brainstorm

The runtime isn't specified, so I'll start with a simple linear search and then try and improve.

**Works!**

## New Specifications

Now we need to do it in constant space, which means that we can't use a counter

### Brainstorm 2

So we need a way to do this without using a counter
We still can use linear time.

Actually it doesn't say anything about time complexity.

So we can sort, and then just watch for a duplicate using a single variable as a pointer.

### Psuedocode 2

1. Sort numbers
2. create pointer equal to positive infinity
3. traverse array
4. if pointer = current number, return current number (means we caught duplicate)
5. else, set pointer to be current number

## Interview Cake

Interview cake doesn't like my solution i guess... :(

So here's their way:

**Interview Cake Solution**

1. Sum all numbers 1..n
2. Sum all numbers in input array.
3. Find difference, that is the answer!

This is a nice solution, we're just finding the discrepency between the two.
