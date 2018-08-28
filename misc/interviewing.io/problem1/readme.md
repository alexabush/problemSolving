mary has n candies

we want to find the maximun possible number of different types of candy that mary can eat after she has given n/2 candies to her brother

we want to return the maximum possible number of different types of candy that Mary can eat after has given n/2 candies to her brother

I assume mary gets to decide what she gives her brother to maximize her own variety

which means we should look for repeat candies and give those aways

## Time Complexities

worst case time: n \* log n
worst case space: n

## Brainstorm

since we have n space, we can do a frequency counter solution

so we just count up the frequency of each candy

then we'll iterate over the object
we'll subtract all the candies

we should find the number of candies we need to give away
once we have the frequency counter, we'll subtract

we need to subtract t/2 candies
we want to preferentially subtract candies that have the highest frequency

so we should sort the candies with the highest frequency

we need to find the highest values

we should use an array

we should sort the array based on values

so we have all the values sorted

we want to remove values with the highest
