# Merge Binary Trees

## What is the problem?

given two binary trees, merge them together.
there are certain 'merge rules' we must abide:

1. if two nodes overlap, add the two nodes together to get the final value at that position
2. if a node exists at a location in one tree but not the other, place the node at that location in the new tree

## Brainstorm

I can either create a new tree from scratch and populate it by traversing over both trees or start with one of the trees and traverse the second tree

I'm going to go with the second option since it seems like less work

so i take the first tree, and then traverse both trees together?

i'll need a bunch of conditionals:

1. both trees have node => add values
2. first tree has node => ignore
3. second tree has node => add node to first tree
4. neither tree has node => ignore

I'm sure there will be some problems with this approach, but I'm just going to write it out first
