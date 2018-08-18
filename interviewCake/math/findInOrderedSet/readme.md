# Find in Ordered Set

## What is the problem?

We get an array of n integers sorted in ascending order.

What's the best time complexity for checking if a target integer is in the array?

### Brainstorm

I'm going to assume that we can just use binary search, so log n time

We'll do binary search then return 'true' if we find the number or 'false' if there's another number at the place our target number should be.
