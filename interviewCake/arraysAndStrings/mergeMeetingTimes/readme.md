# Merge Meeting Times

## What is the problem?

We get an array of everyone's schedule.
We want a function that will return the times in the day when everyone is available.

This should be pretty easy to do, so this is likely to be a runtime optimization problem.

We'll be given an array of objects that say the start

meeting data is stored in objects

we need to write a function that will take an array of multiple meeting times and consense the ranges.

basically we want to return arrays representing blocks of contigious meeting times.

_notes_ the meetings will not be in order

start and end time won't neccesarily have an upper bound. Not sure how this is important, but Interview Cake thinks it is.

## Brainstorm

i'll start with a n^2 solution first

We'll iterate over the array
we'll build up an external array
we'll push in the first element

then for each new element, we'll iterate over the new array and check the current element against each element in the new array.

we'll check if the current element's start time is after the start time of the element in the array and before that elements end time.

if it is, we'll modify the element in the array to have the end time be the end time of the current element.

This should work even if the elements are out of order.

no, i may have a problem if elements are out of order.

I can just sort the elements first though using a comparator that will put elements with the earliest start time first
