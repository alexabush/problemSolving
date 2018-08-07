#Missing Alphabet

##What is the problem asking for?

1.  Take in a string (characters will be all lowercase)
2.  Return new string consisting of old string processed in a certain way:

for each character, if it is the first time seeing that character, append all alphabetical letters:

1.  AFTER the current letter alphabetically
2.  NOT in the original string

Additional Requirements:

1.  Each added letter should be uppercase
2.  Letters in the original string should remain lowercase

Example:

input: "holly"
output: "hIJKMNPQRSTUVWXZoPQRSTUVWXZlMNPQRSTUVWXZlyZ"

##Brainstorm:
Note: I'll need to create an empty string at the top of the function that I'll add to on each iteration
I'll also want to create an array of all the letters in the alphabet? (maybe?)

I think it's obvious that I'll need to iterate over the string to solve the problem
but I do need to make sure that when I add letters I only add letters NOT in the original string

So my initial analysis is that I'll be able to do this in linear time
But I'll need to make multiple passes
Hypothetically, I might do an initial pass and create a Set of all the letters in the string.

Then I'll do another pass that will be my 'work' traversal
Inside this 'work' traversal, for each iteration i'll:

1.  test if the letter is in the set. If it is, ignore it, if not, continue with more work

This won't work, since by the work loop all letters will be in the set. I'll just get rid of the initial pass and populate the set as I go in my 'work' traversal

2.  immediately append the character to the new string
3.  use indexOf to find the current letter in the alphabet array (I could use an object lookup table to improve the speed of this somewhat, but it shouldn't make too much of a difference, still linear time for the function as a whole since the alphabet array will be of a fixed size (so I guess n + m where n is the length of the string and m is the length of the alphabet array?))
4.  (Note: I could break this bit off into a helper function) Once I have the index of the current letter in the alphabet array, I'll use slice to get the rest of the alphabet AFTER the current letter.
5.  I'll then use filter to remove any letters in the slice that is in the set of all letters in the input string

I'll change this to use str.includes(letter) instead of making a set. It's a little slower, but doesn't change the overall runtime.

6.  I'll join the filtered slice of the alphabet array and then capitalize all letters
7.  I'll then append this array to newString

This should work!
Let's give it a try!

Works for the sample!

Small bug, if it's 2nd+ time seeing a letter I still need to add it to the string

Works!

I can clean it up a little bit by chaining some of the processing together.
