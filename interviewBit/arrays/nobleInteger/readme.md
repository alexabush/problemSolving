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

## Interview Bit Hint 1

IB suggests sorting the array to cut runtime to log n \* n time

this feels like it will work, because when we iterate through the array, for each number we only have to consider numbers after it

## Brainstorm 2

1. sort array
2. iterate over sorted array

for each number, know that all numbers AFTER in the array are greater

so we can do a comparison everytime based on the length of the array

wrote algo, may have an off-by-1 error
yup, fixed off-by-1 error

## Debugging 2

so i'm failing when I have negative numbers
I should really just ignore negative numbers, because there is no way that a negative number can count.

actually i'm not sure why i'm failing, so I should debug

so i'm returning true for the number 9

actually my sorting algo isn't working.

weird

okay so i fixed my sorting algo, but I still have a bug

i'm 99% sure that its because my current algo doesn't account for duplicates

i need to modify my current algo so that I ignore duplicate numbers

I can increase solve the problem by increasing the runtime back to quadratic time, but that's not so good

i suppose we can just discount all every number in a duplicate sequence except for the last one

rawr, i'm getting different answers in my ide and on the IB website

## Solution

giving up because i'm failing a test on IB website but passing the same test when I copy and paste it into my ide.

**IB answer:**

1. sort array array
2. store array size
3. iterate over array
4. inner while loop,
   while i+1 < size AND a[i] == i+1, continue

//this is the same as my logic except that it protects against trying to reference arr[length], which is an error in some languages but protected in javascript

5. if a[i] == size-1-i, return 1

THIS IS THE SAME AS MY CODE RAWWR BOO

so i pretty much solved the problem, but am failing because of some edge case/test nonsense

BOO NOT COOL
