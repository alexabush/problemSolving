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
