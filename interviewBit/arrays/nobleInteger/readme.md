# Noble Integer

## What is the problem?

given an array of integers, find if an integer exists where the number of integers in the array greater than the integer equals to integer itself

## Brainstorm

this will probably be a linear problem, so we definately need to iterate over the array.

let me write out some test cases on scratch paper

we can do this in quadratic time at first

for each number, we'll count the number of numbers greater than it with a nested for loop

we could actually probably start with linear time linear space by using a frequency counter

we'll iterate over the array.

each new number we'll add to the frequency counter

each new number, we'll iterate over the frequency counter and increment any value with a value less than the current value (so this might still be quadratic time)

at the end, we'll check if any entry in the frequency counter has a key that matches its value

## Psuedocode

1. iterative over list
2. add number the frequency counter if new

this solution doesn't seem to work since we need to go over all numbers in the list for each number

i'm going to do a first solution using a nested for loop in quadradic time

so I seem to have a working quadratic time solution.

how can I reduce this to linear time?
