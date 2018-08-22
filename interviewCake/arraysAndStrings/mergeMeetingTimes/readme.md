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

## Debugging

_Quick Recap of Steps_:

1. for each element in our sorted input
2. we want to go over all the existing values
3. if our time value can be added to a value in existing values, we want to add it to that value
4. otherwise we want to add the value to our existing values object

_back to debugging_:
so the sort is working, and the add is working, but our conditional statement isn't catching ANYTHING.

so we need to go over that
cool, there was a problem with my conditional logic. it works now!

## Brainstorm 2

So I missed an edge case. If one meeting time begins AND ends earlier/later than another, the shorter meeting should just be ignored

Fixed!

## Optimizing

Apparently we can do this in n log n time.

So that's the time of our sort.
But do my nested for loop take n^2 time?

Yeah, but I probably don't need to inner for loop.

Since the array is sorted, we only need to check the last value in the 'busyTimes' array.

let me modify my function to take out the inner for loop and see if it still works.

_Result_
So it mostly works, but we have a kind of weird bug.

Cool, so I had to modify my answer to use a c-style for loop that starts at the second element of the input array.

then we preload the 'busyTimes' array with the first value from the sorted input.

as we traverse the rest of the sorted input array, we compare the current object with the LAST object in sortedTimes.

Since the input is sorted, the last time will always be the time we need to compare against.
