# Top Scores

## What is the problem?

each round, players receive a score between 0 and 100, which we will use to rank them from highest to lowest.

we need an algorithm that will sort FASTER THAN log n \* n time.

We'll take an array of unsorted scores and the highest possible score and return an array of sorted scores in linear time.

## Brainstorm

so we need to sort an array that may contain numbers from 0 to 100 in linear time

we don't have any space restrictions currently

we'll want to use a map order our data

**Common ways to get a linear runtime:**

1. Greedy Algorithms
2. frequency counter (linear space)

IC suggestion, build up an array 'scoreCount' where the INDICE represents the score and the value is the number of times that score appears.

So we'll need an array maxValue long.

## Brainstorm 2

we can create a new data structure scoreCount
we'll traverse input
for each number, we'll add the number to score count AT 'number' index and set the value to 1
if we see the number again (we check 'number' index and the index is already filled), we'll increment the number

Once we've done this, we'll iterate over that data structure, and everytime we find a number, we'll add it to a `sortedNums` array.

If the value of an index is > 1, we'll add the index to the `sortedNums` array value times.
