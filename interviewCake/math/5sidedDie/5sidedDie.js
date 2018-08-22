function random1tTo7() {
  return Math.floor(Math.random() * 7 + 1);
}

function fiveSidedDie() {
  let number = 0;
  while (number < 1 || number > 5) {
    number = random1tTo7();
  }
  return number;
}

for (let i = 0; i < 20; i++) {
  console.log(fiveSidedDie());
}
