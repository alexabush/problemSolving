# Max In Sliding Window

## What is the problem?

given an array of ints and a window size 'w', move the window over the array and print the largest value in the window during each iteration

## Brainstorm

set up start and end pointers
start = 0
end = window - 1
set up for loop to traverse array
for loop should increment both start and end each time

we could do this in n \* m time and loop over the window each time and extract the largest value

we could probably optimize this to n time, but lets do the n \* m implementation first

use math.max(...arr.slice[start, end])
