# Online Poker

## Background

The standard way to shuffle a deck of cards is with the 'riffle' technique. We can simulate the riffle technique via an algorithm for use in online poker:

1. cut deck into two halves (two arrays if we're representing the full deck as an array)
2. Make a 3rd array `shuffleDeck` that will represent shuffled cards
3. Start a loop that will run until both half1 and half2 have 0 cards left.
4. select a random number of cards from the 'top' of the first half deck (must be less than half1.legnth), and move them to shuffleDeck
5. select random number of cards from top of second half deck, move to shuffleDeck

## What's the problem?

We want to make a function that takes a full deck of cards and a half1 and a half2 and tells use if it's possible for full deck to have been shuffled from the two halves via single riffle.

Note: Represent the deck of cards as an array integers 1..52 (inclusive!)

## Brainstorm 1

So we need to break this problem into smaller subproblems

We need to find out if it's possible for the two half decks to have made the full deck

So we need some way of doing the single riffle technique in reverse?

This will be an invalidation style algorithm, meaning that we'll assume we're returning true but have catches to disqualify if the input doesn't match our expectations.

So we need to come up with ways to disqualify inputs.

The first thing I can think of is that the ORDER of numbers from each half must be consistent in the shuffled deck.

So we could traverse the shuffled deck and look for numbers that violate the order they had in their half decks.

How would we do this?

1. **n^2 time solution**
   We could do a n^2 time solution by traversing the shuffled deck and then using indexOf to look up the number's location in the half (we'd need to do both halves and keep the one that returns a value > 0).

   We'd make two variables to keep track of the 'currentIndex' for each half. And if the index returned from indexOf is greater than the current index for the proper half, we'd return false

2. **linear time, linear space solution**
   We could do a decent linear time, linear space complexity solution by making lookup tables for the two halves.

   We'll make each number correspond to it's index in the array, check which array contains the number, and then check...

   lost my line of thought, i'll need to code this out to remember it.

   We'll probably need some kind of other 'seenNumbers' data structure.

   Basically we want to record what numbers we've seen and what index they were at, and then make sure that the current number doesn't have a lower index that the indexes of the numbers we've seen so far. (inversely, make sure the number we're seeing doesn't have an index higher than any number we haven't seen yet from the same array)

3.

Are there any other solutions? There's probably some kind of greedy algorithm solution where we keep a running list of seen numbers...

Oh well, I'll come back to this.

## Psuedocode

1. n^2 time solution
   We could do a n^2 time solution by traversing the shuffled deck and then using indexOf to look up the number's location in the half (we'd need to do both halves and keep the one that returns a value > 0).

   We'd make two variables to keep track of the 'currentIndex' for each half. And if the index returned from indexOf is greater than the current index for the proper half, we'd return false

1. make variables h1idx, h2idx, currentHalf
1. traverse shuffled deck
1. for each number, run indexOf on each half, keep the value for the half that records > 0 and record what half it is in currentHalf
1. if currentIndex for currentHalf is greater than the indexOf result, return false

So...I think this might work. It's ready to code it out at least.

## Debugging 1

Coded out the n^2 solution, returning false when it should return true so starting debugging now

Found bug, it was an off-by-one error. I had set a conditional to > 0, but I wanted >= 0 to include 0 index.

## New Specs

Want to do problem in linear time and constant space.

Which I have no idea how to do.

So.

hm. So i'm reading through the interview cake content, and the answer seems somewhat similar to mergesort.

We're just traversing the array and throwing out the current value from whichever array it's in (actually it might be even better to just incrememt a pointer).

I've looked at a couple of the hints, but I think I can give this problem a go on my own at this point.

## Brainstorming/Psuedocode 2

1. I want to create an half1Index and half2Index
2. I want to iterate over the array
3. if the current card is the card at half1Index, incremement half1Index and continue
4. else if the current card is the card at half2Index, increment half2Index and continue
5. else return false

Yay it works!

So...linear runtime solution yeah?

The only thing that changed was looking at the first value rather than looking through each half each time using indexOf.

So.

I should review this a bit more, but I think I'm pretty decent on the concepts. It's very similar to the join portion of merge sort.
