# Find Smallest Common Number

## What is the problem?

given three integer arrays sorted in ascending order, find the smallest number that is common in all three arrays

## Brainstorm

make a pointer for each array
run while loop
compare nums at arrN[pointerN] for all three arrays

if all three numbers are the same, return the number

increment the pointers of the arrays for the smaller two numbers

if we get to the end of all three arrays, return 'false' (or something equivalent)

find largest number
find what array largest number is from
incremement pointers of OTHER two arrays
