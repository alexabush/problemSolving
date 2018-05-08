function isPrime(num) {
  for (let index = 2; index <= Math.sqrt(num); index++) {
    if (num % index === 0) {
      console.log('Not prime');
      return;
    }
  }
  console.log('Prime');
}

console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(12));
