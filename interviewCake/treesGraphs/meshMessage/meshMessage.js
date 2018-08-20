function meshMessage(start, target, graph) {
  let queue = [start];
  let visited = new Set();
  let paths = {
    [start]: []
  };

  while (queue.length) {
    let current = queue.shift();
    if (visited.has(current)) continue;
    visited.add(current);
    if (current === target) {
      return [...paths[current], current];
    }
    debugger;
    for (let neighbor of graph[current]) {
      if (visited.has(neighbor)) continue;
      queue.push(neighbor);
      paths[neighbor] = [...paths[current], current];
    }
  }
}

var network = {
  Min: ['William', 'Jayden', 'Omar'],
  William: ['Min', 'Noam'],
  Jayden: ['Min', 'Amelia', 'Ren', 'Noam'],
  Ren: ['Jayden', 'Omar'],
  Amelia: ['Jayden', 'Adam', 'Miguel'],
  Adam: ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
  Miguel: ['Amelia', 'Adam', 'Liam', 'Nathan'],
  Noam: ['Nathan', 'Jayden', 'William'],
  Omar: ['Ren', 'Min', 'Scott']
};

console.log(meshMessage('Jayden', 'Adam', network));
// console.log(meshMessage('Jayden', 'Mark', network));
//  ['Jayden', 'Amelia', 'Adam']
