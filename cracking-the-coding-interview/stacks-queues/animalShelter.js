class Animal {
  constructor(animal, type, timestamp) {
    this.animal = animal;
    this.type = type;
    this.timestamp = timestamp;
  }
}

class AnimalQueue {
  constructor() {
    this.list = [] // or LinkedList
  }

  enqueue(animal) {
    this.list.push(animal)
  }
}

const animal1 = new Animal('Harry', 'dog')
const queue = new AnimalQueue()
queue.enqueue(animal1)
console.log(queue)