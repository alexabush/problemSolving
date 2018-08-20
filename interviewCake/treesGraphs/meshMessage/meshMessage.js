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
    for (let neighbor of graph[current]) {
      if (visited.has(neighbor)) continue;
      queue.push(neighbor);
      paths[neighbor] = [...paths[current], current];
    }
  }

  return 'Message could not reach recipient';
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
  Omar: ['Ren', 'Min', 'Scott'],
  Lucas: ['Adam'],
  Nathan: ['Miguel'],
  Scott: ['Omar'],
  Sofia: ['Adam'],
  Liam: ['Miguel']
};

console.log(meshMessage('Jayden', 'Adam', network));
//  ['Jayden', 'Amelia', 'Adam']
console.log(meshMessage('Jayden', 'Miranda', network));
console.log(meshMessage('Jayden', 'Jayden', network));
