# Inflight Entertainment

## What's the problem?

We want to pick two movies from an array that have a runtime that will add up to a 'flightLength' variable

## Brainstorm

We can do a nested for loop and compare each pair until one equals flightLength.

Next solution is to sort the array, and then have a high low pointer move in from either side.

_Recap_
So I got a n^2 solution and a log n \* n solution, but IC wants a n time solution

How to manage that?

IC says we should worry less about memory, so we can probably do it in linear time AND linear space.

We'll use a set and see if totalLength - current === value in set
