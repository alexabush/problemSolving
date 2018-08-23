# Reverse Words

write function reverseWords that takes a message as an array of characters and reverses the order of the words in place.

## Brainstorm

so we need to reverse words in an array at place

`const message = [ 'c', 'a', 'k', 'e', ' ', 'p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l' ];`

In this example, we'll the words are all correctly assembled, we just need to reverse the order of the words

I think a while loop with a start and 'end' pointer would be a good strategy

We can write a swap function and swap the first and last words, then the second and second-to-last words, etc

We'll also need some code that will identify a word

we'll want to take all the letters between spaces

we could join the letters, swap, and then split them again

## Psuedocode

1. join('')
2. split(',')
3. set up while loop and low and high pointers
4. write swap function
5. while low < high, swap low and high, increment low and high
6. join('')
7. split('') again to separate back into letters

## Debugging

Doesn't work, not sure why
returning unmodified input

Okay so my solution doesn't move them in place since i'm using join and split so much

## Brainstorm 2

So for our 'sort numbers in place' problem,we partioned the array into two halves, the 'sorted' front and 'unsorted' back.

It's probably possible to implement something similar here.

We'll interate over the array and add each letter to the front of the new array

we'll need to add pointers so the word ends up in the right order, and we'll need to watch for empty spaces so we know where each word ends.

## Psuedocode

I'm actually not so sure how this is going to work, so i'm just going to scratch code some stuff up and see what happens

when we hit the ' ' we want to set partition back to 0

or would could just iterate backwards over the array?

and keep going until to hit the partition?

what I'm trying to do now is move the words[i] on the otherside of the position.

I want to recreate the word from each letter, but once I see a ' ' I want to start adding from the front of the partition again
