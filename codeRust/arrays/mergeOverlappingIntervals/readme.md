# Merge Overlapping Intervals

## Brainstorm

given an array list of intervals as input where each interval has a start and end timestamp

each input array is sorted by starting timestamp

we should merge overlapping intervals and return output array

iterate over array and build new array

we should probably just build an object of start and end times and then build an array from there after we've traversed the list

we'll get linear time complexity, which is fine
