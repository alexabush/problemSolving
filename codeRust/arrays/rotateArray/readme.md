# Rotate Array

# What is the problem?

given an array of integers, rotate the array by N elements

## Brainstorm

should be done in linear time

we can just unshift the first n elements and push them to the end?

pop/unshift for negative numbers
shift/push for positive numbers

## Time Complexity

time complexity worst case is n \* m, where n is the length of the array (because of shift) and m is the shift number

that's not great. I can maybe get down to linear time

## Improvements

I could store up the numbers as I remove them and then add them all at once
that would bring my time complexity down to linear time?
because i'd

negative => remove n from front, add to back
positive => remove n from back, add to front
