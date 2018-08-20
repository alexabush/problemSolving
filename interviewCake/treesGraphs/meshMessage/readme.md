# Mesh Message

## What is the problem?

this seems like a pretty straightforward 'find the shortest route' style of problem
so we'll want to use bfs.

we'll start from our 'start' node and keep doing bfs until we find our 'end' node.

we need some way of recording the correct path, which I don't completely remember how to do at the moment.

I need some way to record the correct path.

Is there some way to work backwards?

No!

Turns out we need to store the path as we go.
Each time we find a new node, we should store what the currentNode was when we found it (basically, each time we discover a node we should record which node we discovered the new node FROM)
IC recommends we use an object. The object will have a key for every discovered node and the value will be the path from start to that node

This will work, but it will take up a lot of space.

for each new node we add to the queue, we'll want to add the node to the 'paths' object as well
the path for each node is the path of the current node, plus the new node

Trial implementation has some bugs, need to sort those out.

I'm only returning the middle node, 'amelia', which tells me that I'm not accumulating paths correctly

## Time Complexity Notes

Time complexity for both bfs and dfs is usually n + m, where n is the number of nodes, and m is the neighbors of each node (the density of connections)

We do our 'visited' set to prevent repeat visits, but we still have to loop over each neighbor of each node we visit, even if the neighbor node is on the 'visisted' list and we end up ignoring it.

So iterating over the neighbors is an m time operation.

In terms of n + m, we can think of m as the average number of neighbors each node has.

Overall space complexity is linear, since we need to store data in proportion to the number of nodes we have.

### notes on backtracking

we want to assemble the path we used to reach our endNode

backtracking has two steps:

1. figuring out what additional information we need to store to rebuild our path once we find the targetNode
2. figuring out how to reconstruct the path from start node to target node.
