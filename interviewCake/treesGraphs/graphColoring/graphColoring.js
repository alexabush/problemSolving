function colorGraph(graph, colors) {
  graph.forEach(function(node) {
    if (node.neighbors.has(node)) {
      throw new Error(
        'Legal coloring impossible for node with loop: ' + node.label
      );
    }

    // get the node's neighbors' colors, as a set so we
    // can check if a color is illegal in constant time
    var illegalColors = new Set();

    node.neighbors.forEach(function(neighbor) {
      if (neighbor.color !== null) {
        illegalColors.add(neighbor.color);
      }
    });

    // assign the first legal color
    for (var i = 0; i < colors.length; i++) {
      var color = colors[i];

      if (!illegalColors.has(color)) {
        node.color = color;
        break;
      }
    }
  });
}

function GraphNode(label) {
  this.label = label;
  this.neighbors = new Set();
  this.color = null;
}

var a = new GraphNode('a');
var b = new GraphNode('b');
var c = new GraphNode('c');

a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c);

var graph = [a, b, c];
