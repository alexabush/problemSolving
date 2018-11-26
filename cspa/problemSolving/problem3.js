let weights1 = [700, 600, 500, 400, 300, 200, 100];

function trucks(weights) {
  //we know we need at least this many
  let minTrucks = Math.ceil(weights.reduce((a, b) => a + b) / 10000);

  // if we have odd weights we may need more trucks

  // I want to see if we can fill all trucks
  let truckArr = Array(minTrucks).fill(10000);
  let sortedWeights = weights.sort(a, b => a - b > 0);
  for (let weight of sortedWeights) {
  }
}
