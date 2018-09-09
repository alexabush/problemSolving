function prettyPrint(int, largest = int) {
  debugger;
  if (int < 1) return;
  if (int === 1) {
    process.stdout.write(int + '');
    return;
  }
  let arrWidth = 1 + 2 * (int - 1);
  var i;
  for (i = 0; i < arrWidth; i++) {
    process.stdout.write(int + '');
  }
  let currentInt = int + 1;
  while (currentInt <= largest) {
    process.stdout.write(currentInt + '');
    currentInt++;
  }
  console.log();
  let big = largest;
  while (big >= int) {
    process.stdout.write(big + '');
    big--;
  }
  // process.stdout.write(int + '');
  prettyPrint(int - 1, largest);
  process.stdout.write(int + '');
  currentInt = int + 1;
  while (currentInt <= largest) {
    process.stdout.write(currentInt + '');
    currentInt++;
  }
  console.log();
  big = largest;
  while (big > int) {
    process.stdout.write(big + '');
    big--;
  }
  for (i = 0; i < arrWidth; i++) {
    process.stdout.write(int + '');
  }
}
console.log(prettyPrint(5));
