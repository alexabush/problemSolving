# Rotation Point

## What is the problem?

we have an array of words
the array is in alphabetical order BUT it starts part of the way through (example, the first word in the array may start with 'g' or 'm', but it will be alphabetical until it reachs 'a' at some point in the array)

We want to find the index of the first 'a' word
(or 'b', or 'c', whichever the first word is)

We need to do this in log n time, so that means use binary search.

## Brainstorm

we'll use binary search

the key is to start in the middle AND record the first index.

because we know that the value at the pivot point will be less than the value at the first index

so we can set up out binary search condition to go right if our current value is greater than than the value at the first index and go left if our current value is less than the value at the first index

our success condition will be that we arrive at a word that's less than the the word to its left.
