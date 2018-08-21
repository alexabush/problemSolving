# Graph Coloring

# Background

A **graph coloring** is when you assign colors to each node in a graph. A **legal** coloring is when no adjacent nodes have the same color.

Note that the 'color' doesn't need to be a literal color, it's just some kind of distinctive marking for a shared concept or property.

For example, a graph where nodes represent university classes and edges represent students. We could give each class a 'color' representing the class time. We'd make it so it's not allowed for a student to be connected to multiple classes of the same color, that would mean overlapping class times!

A **degree** of a node is the number of edges connected to that node.

So a degree is just the number of connections a given node has.

The **maximum** degree of the graph is the max number of connections that any one node has.

If the graph is directed, the degree is separated into an **indegree** and an **outdegree**.

## What is the problem?

Given an undirected graph with a max degree of D, find a "graph coloring" using at most D+1 colors

**I don't have a strong foundation in graph traversal problems, so I'm just going to skip straight to the explaination**

## Interview Cake Explaination

We'll go through the nodes in one pass, assigning each node the first legal color we find.

In a graph with maximum degree D, each node has at most D neighbors. That means there are at most D colors taken by a node's neighbors. We have d + 1 colors, sp there's always at least one color left ot use.

