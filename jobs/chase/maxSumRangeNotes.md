# Max Sum Range

## Brainstorm

**Before submitting the final solution, I'll need to make another function that can process the input format specified**

We want to iterate over the array of prices
we'll make a pointer that will track the 'maxGain' and another pointer that will track the 'currentGain', and then motify the value at each step

iterate over array
currentGain = currentGain + price
if maxGain < currentGain, maxGain = currentGain
if currentGain

We need a way to incorporate a sliding window into the problem

we want to find the biggest sum possible in a row

we can iterate over the array and track each increase

iterative over the array
we need to know when to stick to a sequence or when to abandon it

we can just keep track of the sum
if the sum gets bigger, just add to it

we need a way to add negative numbers IF there's a lot of positive numbers behind it

iterative over the array
find the most positive number

we need to find a way to still add numbers even if they're less than the current value

greedy algo
sliding window
that won't work because we don't have a fixed number'

we could do double for loops
we'd increase until we found a negative, and then see what would happen if we kept increasing?
