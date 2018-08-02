//my solution
function combat(health, damage) {
  if (health - damage < 0) return 0;
  return health - damage;
}

//slightly shorter ternary solution
function combat(health, damage) {
  return health < damage ? 0 : health - damage;
}

//use Math.max to return new damage or 0, whichever is greater
const combat = (health, damage) => Math.max(0, health - damage);
