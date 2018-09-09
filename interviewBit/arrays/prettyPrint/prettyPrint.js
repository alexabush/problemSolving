function prettyPrint(int) {
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
  console.log();
  process.stdout.write(int + '');
  prettyPrint(int - 1);
  process.stdout.write(int + '');
  console.log();
  for (i = 0; i < arrWidth; i++) {
    process.stdout.write(int + '');
  }
}
console.log(prettyPrint(3));
